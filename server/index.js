require('dotenv/config');
const express = require('express');
const db = require('./db');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

if (process.env.NODE_ENV === 'development') {
  const path = require('path');
  const publicPath = path.join(__dirname, 'public');
  app.use(require('./dev-middleware')(publicPath));
}

const middleware = express.json();
app.use(middleware);
app.use(staticMiddleware);

app.post('/api/cart', sessionMiddleware, (req, res) => {
  const productId = Number(req.body.productId);
  const input = [req.body.productId];
  if (!Number.isInteger(productId) || productId < 0) {
    res.status(400).json({
      error: '"productId" must be a positive integer'
    });
    return;
  }
  const sql = `
  insert into "cart" ("userId")
  values ($1) returning "cartId"
  `;
  db.query(sql, input)
    .then(result => {
      const cartId = Number(result.rows[0].cartId);
      const input = [result.rows[0].cartId, req.body.productId];
      if (!Number.isInteger(cartId) || cartId < 0) {
        res.status(400).json({
          error: '"cartId" must be a positive integer'
        });
        return;
      }
      const sql = `
      insert into "cartItems" ("cartId", "productId")
      values ($1, $2) returning *
      `;
      db.query(sql, input);
      res.status(201).json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred.'
      });
    });
});

app.get('/api/products', (req, res, next) => {
  const sql = `
    select "productId",
           "name",
           "price",
           "imageUrl"
      from "products"
  `;
  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

app.get('/api/products/:productId', (req, res, next) => {
  const productId = Number(req.params.productId);
  if (!productId) {
    throw new ClientError(400, 'productId must be a positive integer');
  }
  const sql = `
    select "productId",
           "name",
           "description",
           "price",
           "imageUrl",
           "brand",
           "availability",
           "imageUrl2",
           "imageUrl3",
           "imageUrl4"
      from "products"
     where "productId" = $1
  `;
  const params = [productId];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        throw new ClientError(
          404,
          `cannot find product with productId ${productId}`
        );
      }
      res.json(result.rows[0]);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});

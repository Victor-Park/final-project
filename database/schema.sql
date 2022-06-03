set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.

drop schema "public" cascade;

create schema "public";

create table "public"."products" (
  "productId"         serial,
  "name"              text    not null,
  "description"       text    not null,
  "categoryId"        text    not null,
  "price"             int     not null,
  "imageUrl"          text    not null,
  "brand"             text    not null,
  "availability"      text    not null,
  primary key ("productId")
)

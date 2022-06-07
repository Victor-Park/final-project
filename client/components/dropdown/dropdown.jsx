import React from 'react';
import Stack from 'react-bootstrap/Stack';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './dropdown.css';

export default function Dropdown1() {
  return (
    <div className="dropdown-container">
      <div className="dropdown-row">
        <Stack direction="horizontal" gap={3}>
          <p className="dropdown-header">Select Your Ducati</p>
          <DropdownButton
            className="dropdown-button"
            id="dropdown-basic-button"
            title="Year"
            size="sm"
          >
            <Dropdown.Item href="">2022</Dropdown.Item>
            <Dropdown.Item href="">2021</Dropdown.Item>
            <Dropdown.Item href="">2020</Dropdown.Item>
          </DropdownButton>
          <DropdownButton
            className="dropdown-button"
            id="dropdown-basic-button"
            title="Model"
            size="sm"
          >
            <Dropdown.Item href="">Panigale V4</Dropdown.Item>
            <Dropdown.Item href="">Streetfighter V4</Dropdown.Item>
            <Dropdown.Item href="">Panigale R</Dropdown.Item>
          </DropdownButton>
        </Stack>
      </div>
    </div>
  );
}

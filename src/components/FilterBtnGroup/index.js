import React from 'react';
import './style.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

// This button group allows the user to filter names from A-Z, Z-A, filter by Job Title, filter by Location Title, and reset all values.
function FilterBtnGroup({ sortBtn, resetBtn, children, handleSelectDropdown }) {
    return (
        <ButtonGroup className="margin full-width">
            <Button onClick={sortBtn}>{children}</Button>

            {/* <DropdownButton as={ButtonGroup} title="Title" id="bg-nested-dropdown" onSelect={handleSelectDropdown}>
                <Dropdown.Item eventKey="Manager">Manager</Dropdown.Item>
                <Dropdown.Item eventKey="Designer">Designer</Dropdown.Item>
                <Dropdown.Item eventKey="Developer">Developer</Dropdown.Item>
            </DropdownButton>

            <DropdownButton as={ButtonGroup} title="Location" id="bg-nested-dropdown" onSelect={handleSelectDropdown}>
                <Dropdown.Item eventKey="New York">New York</Dropdown.Item>
                <Dropdown.Item eventKey="Las Vegas">Las Vegas</Dropdown.Item>
                <Dropdown.Item eventKey="Chicago">Chicago</Dropdown.Item>
            </DropdownButton> */}
            <Button onClick={resetBtn}>Reset</Button>
        </ButtonGroup>


    )
}


export default FilterBtnGroup;
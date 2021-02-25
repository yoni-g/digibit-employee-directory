import React from 'react';
import './style.css';
import FilterSearch from '../FilterSearch/';
import FilterBtnGroup from '../FilterBtnGroup/';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// This combines the filter search input and the filter button group of dropdowns and buttons. 
function FilterBar({ inputValue, handleInputChange, resetBtn, sortBtn, children, handleSelectDropdown }) {
    return (
        <Row>
            <Col md={4}>
                {/* <FilterSearch
                    inputValue={inputValue}
                    handleInputChange={handleInputChange} /> */}
            </Col>
            <Col md={10} className="button-group">
                <FilterBtnGroup resetBtn={resetBtn} sortBtn={sortBtn} children={children} handleSelectDropdown={handleSelectDropdown} />
            </Col>
        </Row>

    )
}


export default FilterBar;
import React from 'react';
import './style.css';
import FilterSearch from '../FilterSearch/';
import FilterBtnGroup from '../FilterBtnGroup/';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// This combines the filter search input and the filter button group of dropdowns and buttons. 
function FilterBar() {
    return (
        <Row>
            <Col md={4}>
                <FilterSearch />
            </Col>
            <Col md={8} className="button-group">
                <FilterBtnGroup />
            </Col>
        </Row>

    )
}


export default FilterBar;
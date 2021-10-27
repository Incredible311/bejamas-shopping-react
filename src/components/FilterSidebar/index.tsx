import React from 'react';
import CheckBox from '../atoms/CheckBox'

const FilterSidebar: React.FC = () => (
    <div className="filter-sidebar">
        <p className="filter-sidebar__title">Category</p>
        <br />
        <div className="d-grid">
            <CheckBox title="People" name="category" id="People" />
            <CheckBox title="Premium" name="category" id="Premium" />
            <CheckBox title="Pets" name="category" id="Pets" />
            <CheckBox title="Food" name="category" id="Food" />
            <CheckBox title="Landmarks" name="category" id="Landmarks" />
            <CheckBox title="Cities" name="category" id="Cities" />
            <CheckBox title="Nature" name="category" id="Nature" />
        </div>
        <hr className="filter-sidebar__hr" />
        <p className="filter-sidebar__title">Price range</p>
        <br />
        <div className="d-grid">
            <CheckBox title="Lower than $20" name="price" id="lower20" />
            <CheckBox title="$20 ~ $100" name="price" id="20-100" />
            <CheckBox title="$100 ~ $200" name="price" id="100-200" />
            <CheckBox title="More than $200" name="price" id="more200" />
        </div>
    </div>
);

export default FilterSidebar;

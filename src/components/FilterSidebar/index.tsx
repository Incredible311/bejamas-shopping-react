import React from 'react';
import CheckBox from '../atoms/CheckBox'

type filterProps = {
    category: React.FormEventHandler<HTMLInputElement>;
    range: React.FormEventHandler<HTMLInputElement>;
}

const FilterSidebar: React.FC<filterProps> = (props: filterProps) => {

    const { category, range } = props;

    return (
        <div className="filter-sidebar">
            <p className="filter-sidebar__title">Category</p>
            <br />
            <div className="d-grid">
                <CheckBox title="People" name="category" id="People" onChange={category} />
                <CheckBox title="Premium" name="category" id="Premium" onChange={category}  />
                <CheckBox title="Pets" name="category" id="Pets" onChange={category}  />
                <CheckBox title="Food" name="category" id="Food" onChange={category}  />
                <CheckBox title="Landmarks" name="category" id="Landmarks" onChange={category}  />
                <CheckBox title="Cities" name="category" id="Cities" onChange={category}  />
                <CheckBox title="Nature" name="category" id="Nature" onChange={category}  />
            </div>
            <hr className="filter-sidebar__hr" />
            <p className="filter-sidebar__title">Price range</p>
            <br />
            <div className="d-grid">
                <CheckBox title="Lower than $20" name="price" id="lower20" onChange={range} />
                <CheckBox title="$20 ~ $100" name="price" id="20-100" onChange={range} />
                <CheckBox title="$100 ~ $200" name="price" id="100-200" onChange={range} />
                <CheckBox title="More than $200" name="price" id="more200" onChange={range} />
            </div>
        </div>
    )
}

export default FilterSidebar;

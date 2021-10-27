import React from 'react';

type radioProps = {
    id: string;
    name: string;
    title: String;
}

const CheckBox: React.FC<radioProps> = (props: radioProps) => {
    const { id, name, title } = props
    return (
        <div className="checkbox-item">
            <input className="checkbox-item__input" type="checkbox" id={id} name={name} />
            <label className="checkbox-item__label" htmlFor={id}>{title}</label>
        </div>
    )
}

export default CheckBox;

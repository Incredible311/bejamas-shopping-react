import React from 'react';

type radioProps = {
    id: string;
    name: string;
    title: String;
}

const RadioButton: React.FC<radioProps> = (props: radioProps) => {
    const { id, name, title } = props
    return (
        <div className="radio-item">
            <input className="radio-item__input" type="radio" id={id} name={name} value={id} />
            <label className="radio-item__label" htmlFor={id}>{title}</label>
        </div>
    )
}

export default RadioButton;

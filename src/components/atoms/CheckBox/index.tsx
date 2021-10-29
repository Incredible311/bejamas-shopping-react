import React from 'react';

type radioProps = {
    id: string;
    name: string;
    title: String;
    onChange: React.FormEventHandler<HTMLInputElement>
}

const CheckBox: React.FC<radioProps> = (props: radioProps) => {
    const { id, name, title, onChange } = props
    return (
        <div className="checkbox-item">
            <input className="checkbox-item__input" 
            type="checkbox" id={id} name={name}
            onChange={(e) => onChange(e)}/>
            <label className="checkbox-item__label" htmlFor={id}>{title}</label>
        </div>
    )
}

export default CheckBox;

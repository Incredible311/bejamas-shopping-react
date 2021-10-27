import React from 'react';

type radioProps = {
    id: string;
    name: string;
    min: number;
    max: number;
    minTitle: String;
    maxTitle: String;
}

const RangeBox: React.FC<radioProps> = (props: radioProps) => {
    const { id, name, min, max, minTitle, maxTitle } = props;

    return (
        <div className="range-item">
            <input
                className="range-item__input"
                type="range"
                id={id}
                name={name}
                min={min}
                max={max}
            />
            <div className="range-item__values d-flex-center justify-between">
                <span>{minTitle}</span>
                <span>{maxTitle}</span>
            </div>
        </div>
    )
}

export default RangeBox;

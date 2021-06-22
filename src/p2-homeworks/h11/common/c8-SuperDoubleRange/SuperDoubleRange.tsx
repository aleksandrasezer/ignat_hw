import React from 'react'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min: number
    max: number
    // min, max, step, disable, ...
}

const SuperDoubleRange = (props: SuperDoubleRangePropsType) => {
    return (
        <>
            <input
                type={'range'}
                min={props.min}
                max={props.max}
            />
        </>
    )
}

export default SuperDoubleRange

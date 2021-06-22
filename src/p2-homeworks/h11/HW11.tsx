import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRange = (value: number) => setValue1(value)

    return (
        <div>
            <hr/>
            11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={onChangeRange}
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    value={[20,56]}
                    min={value1}
                    max={value2}
                />
                <span>{value2}</span>
            </div>

            <hr/>
            <hr/>
        </div>
    )
}

export default HW11

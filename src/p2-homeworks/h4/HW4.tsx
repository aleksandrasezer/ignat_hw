import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

function HW4() {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text)
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div>
            <hr/>

            <div>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                />
                <br/><br/>

                {/*----------------------------------------------------*/}
                <SuperButton>
                    default
                </SuperButton>
                <SuperButton
                    red={true}
                    onClick={showAlert}
                >
                    alert
                </SuperButton>

                <SuperButton disabled>
                    disabled
                </SuperButton>
                <br/><br/>

                {/*----------------------------------------------------*/}

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    i've cried today
                </SuperCheckbox>

                <SuperCheckbox checked={checked} onChange={testOnChange}/>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperInputText/>*/}
            {/*<AlternativeSuperButton/>*/}
            {/*<AlternativeSuperCheckbox/>*/}
            <hr/>
        </div>
    )
}

export default HW4

import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: any // need to fix any
    totalUsers: number // need to fix any
}
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.input
        console.log(error)
    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}/>
            <button onClick={addUser}
                    className={s.button}>add</button>
            <span className={s.totalUsers}>Total users: {totalUsers}</span>
            <span>{error}</span>
        </div>
    )
}


export default Greeting

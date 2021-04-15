import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value) {
            setName(e.currentTarget.value)
            setError('')
        } if (!e.currentTarget.value) {
            setName('')
            setError('name is required!')
        }
    }
    console.log(error)
    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name}!`)
        setName('')
    }

    const totalUsers = users.length
    console.log(totalUsers)
    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer

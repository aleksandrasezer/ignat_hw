import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

export type UserType = {
    _id: string
    name: string
}
function HW3() {
    const [users, setUsers] = useState<UserType[]>([])

    const addUserCallback = (name: string) => {
        const user = {
            _id: v1(),
            name
        }
        setUsers([user,...users]) // need to fix
    }
    return (
        <div>
            <hr/>

            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            <hr/>
        </div>
    )
}

export default HW3

import React from 'react'
import {AffairType} from "./HW2";
import s from './Affair.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className={s.affair}>
            <span className={s.affairName}>{props.affair.name}</span>
            <span className={s.affairPriority}>{props.affair.priority}</span>
            <button onClick={deleteCallback}>DELETE</button>
        </div>
    )
}

export default Affair

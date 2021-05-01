import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.dropdown}>
            <span className={s.button}>hel</span>
            <span className={s.dropdownChild}>
            <NavLink to='/prejunior'>PreJunior</NavLink>
            <NavLink to='/junior'>Junior</NavLink>
            <NavLink to='/juniorplus'>Junior++</NavLink>
            </span>
        </div>
    )
}

export default Header

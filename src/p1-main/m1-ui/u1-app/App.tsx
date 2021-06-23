import React from 'react'
import s from './App.module.css'
import{HW5} from "../../../p2-homeworks/h5/HW5";
import {useSelector} from "react-redux";
import {RootState} from "../../../p2-homeworks/h10/bll/store";

function App() {

    const theme = useSelector((state: RootState) => state.theme.theme)

    console.log(theme)

    return (
        <div className={theme === 'dark' ? `${s.AppDark}` : `${s.AppLight}`}>

            <HW5 />

        </div>
    )
}

export default App

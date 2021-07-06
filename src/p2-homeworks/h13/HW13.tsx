import React from "react"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestAPI} from "./api";

export const RequestHW13 = () => {

const onCheckboxClick = () => requestAPI.success()


    return (
        <div>
            <SuperButton onClick={() => {}}/>
            <SuperCheckbox onClick={onCheckboxClick}/>
        </div>
    )
}
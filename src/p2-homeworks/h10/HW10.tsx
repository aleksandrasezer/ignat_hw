import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {Preload} from "./preload/Preload";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import s from '../../p1-main/m1-ui/u1-app/App.module.css'

function HW10() {

    const isLoading = useSelector((state: RootState) => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC())
        setTimeout(() => dispatch(loadingAC()), 2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            10
            <div className={s.hw10DivStyle}>
                {isLoading
                    ? (
                        <Preload/>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>
            <hr/>
            <hr/>
        </div>
    )
}

export default HW10

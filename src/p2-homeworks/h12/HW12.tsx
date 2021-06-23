import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch} from "react-redux";
import {changeThemeC} from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

function HW12() {
    const dispatch = useDispatch()

    return (
        <div>
            <hr/>
            <div>
                12
            </div>
            <div>
                Бородино
                — Скажи-ка, дядя, ведь не даром<br/>
                Москва, спаленная пожаром,<br/>
                Французу отдана?<br/>
                Ведь были ж схватки боевые,<br/>
                Да, говорят, еще какие!<br/>
                Недаром помнит вся Россия<br/>
                Про день Бородина!<br/>
                <br/>
                — Да, были люди в наше время,<br/>
                Не то, что нынешнее племя:<br/>
                Богатыри — не вы!<br/>
                Плохая им досталась доля:<br/>
                Немногие вернулись с поля…<br/>
                Не будь на то господня воля,<br/>
                Не отдали б Москвы!<br/>
            </div>

            <div>
                <SuperButton onClick={() => dispatch(changeThemeC('dark'))}>dark theme</SuperButton>
            </div>
            <div>
                <SuperButton onClick={() => dispatch(changeThemeC('light'))}>bright theme</SuperButton>
            </div>
            <hr/>
        </div>
    );
}

export default HW12;

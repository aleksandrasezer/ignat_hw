import React from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";


export const PATH = {
    PRE_JUNIOR: '/prejunior',
    JUNIOR: '/junior',
    JUNIORPLUS: '/juniorplus'
}

function Routes() {
    return (
        <div>
            <Switch>

                <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>

                <Route path={PATH.JUNIOR} render={() => <Junior/>}/>

                <Route path={PATH.JUNIORPLUS} render={() => <JuniorPlus />}/>

                <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    )
}

export default Routes

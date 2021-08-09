import React from 'react';
import  { Switch, Route } from 'react-router-dom';

import { PlayerList } from '../pages/PlayerList';
import { PlayerDetail } from '../pages/PlayerDetail';
import { NotFound } from '../pages/NotFound';


export const AppRouter = () => {
    return (
        <Switch>
            <Route exact path='/' component={PlayerList} />
            <Route path='/detail_player' component={PlayerDetail} />
            <Route component={NotFound} />
        </Switch>
    )
}

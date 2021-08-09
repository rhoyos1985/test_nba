import React from 'react';
import { useLocation } from "react-router-dom"; 

import { PlayersListContent } from '../components/contents/PlayersListContent';


export const PlayerDetail = (props) => {
    
    const location = useLocation();
    const isEmptyActualPlayer = Object.keys(location.state.data.actualPlayer).length === 0;
    const isEmptyPlayers = location.state.data.players.length === 0;

    const searchMatchPlayers = () => {
        const playersMatches = location.state.data.players.filter(player => player.h_in === location.state.data.actualPlayer.h_in);
        console.log(playersMatches);
        return playersMatches;
    }
    
    return (
        (isEmptyActualPlayer && isEmptyPlayers) ? <p>Sorry! <span role="img" aria-label="pensive-face">😔</span>  Results not found!</p>:
        <div className="box">
            <h1 className="title">{`${location.state.data.actualPlayer.first_name} ${location.state.data.actualPlayer.last_name}`}</h1>
            <h2 className="subtitle">{`Height in Inches ${location.state.data.actualPlayer.h_in} | Height in Meters ${location.state.data.actualPlayer.h_meters}`}</h2>
            <PlayersListContent players={searchMatchPlayers()} />
        </div>
    );
}
import React, { Component } from 'react'
import { Title } from '../contents/Title';

import { PlayersListContent } from '../contents/PlayersListContent';
import Pager from '../contents/Pager';

class PlayerListContainer extends Component {
    state = {
                players: [],
                loading: false,
                currentPage: 1,
                playersPerPage: 10
            };
    

    constructor(props) {
        super(props)
        this.paginate = this.paginate.bind(this);
    }

    componentDidMount() {
        this.setState((prevState) => ({
            ...prevState,
            loading: true,
        }));
        fetch('https://mach-eight.uc.r.appspot.com/')
            .then(res => res.json())
            .then(data => {
                const players = data.values;
                this.setState((prevState) => ({
                    ...prevState,
                    loading: false,
                    players: players
                }));
            });
    }

    //Change page

    paginate(pageNumber) {
        this.setState((prevState) => ({
            ...prevState,
            currentPage: pageNumber
        }));
    }

    render() {

        //Get current players
        const indexOfLastPlayers = this.state.currentPage * this.state.playersPerPage;
        const indexofFirstPlayer = indexOfLastPlayers - this.state.playersPerPage;
        const currentPlayers = this.state.players.slice(indexofFirstPlayer, indexOfLastPlayers);

        return (
            <div className="columns is-mobile">
                <div className="column is-four-fifths is-offset-1">
                    <Title>NBA Players</Title>
                    <PlayersListContent players={currentPlayers} />    
                    <Pager  items={this.state.players} 
                        currentPage={this.state.currentPage} 
                        perPage={this.state.playersPerPage} 
                        paginate={this.paginate}/>
                </div>
            </div>    
            )
    }
}

export default PlayerListContainer;
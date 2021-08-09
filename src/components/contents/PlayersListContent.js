import React from 'react';
import { useHistory } from 'react-router-dom';

import SortableData from './functions/SorteableData';

const PlayersListContent = ({ players }) => {

  const { items, reqSort, sortConfig } = SortableData(players)
  const history = useHistory();
  
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const _handleClick = (player) => {
    history.push({
      pathname: '/detail_player',
      state: {data : {actualPlayer : player, players}}
    })
  }

  return(

      items.length === 0
      ? <p>Sorry! <span role="img" aria-label="pensive-face">😔</span>  Results not found!</p>
      : 
        <table className="table is-hoverable is-fullwidth ">
          <thead>
            <tr>
              <th>
                <button type="button"
                        onClick={() => reqSort('first_name')}
                        className={`button is-primary ${getClassNamesFor('first_name')}`}>
                    First Name
                </button>  
              </th>
              <th>
                <button type="button"
                        onClick={() => reqSort('last_name')}
                        className={`button is-primary ${getClassNamesFor('last_name')}`}>
                      Last Name
                </button>
              </th>
              <th>
                <button type="button"
                        onClick={() => reqSort('h_meters')}
                        className={`button is-primary ${getClassNamesFor('h_meters')}`}>
                    H Mts
                </button>
              </th>
              <th>
                <button type="button"
                        onClick={() => reqSort('h_in')}
                        className={`button is-primary ${getClassNamesFor('h_in')}`}>
                    H Inch
                </button>
              </th>
            </tr>
          </thead>
          <tfoot> 
              {items.map(player => (
                    <tr className="App-cursor-pointer"
                        key={player.first_name+player.last_name} 
                        onClick={() => _handleClick(player)}>
                      <td>{player.first_name}</td>
                      <td>{player.last_name}</td>
                      <td>{player.h_meters}</td>
                      <td>{player.h_in}</td>
                    </tr>
                )
              )}
          </tfoot>
        </table> 
  );
}

export { PlayersListContent };
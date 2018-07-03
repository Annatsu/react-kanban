// React
import React, { Component } from 'react';


// Project Components
import Board from './components/Board';
import BoardColumn from './components/BoardColumn';


// Component's stylesheet
import './App.css';


// Item States will serve as columns of classification
import { ITEM_STATES } from './constants';
const itemStates = Object.values(ITEM_STATES);



class App extends Component {

    render() {
        return (
            <Board>
                {
                    itemStates.map(({ id, name }, i) => (
                        <BoardColumn
                            key={id}
                            title={name}
                        >

                        </BoardColumn>
                    ))
                }
            </Board>
        );
    }

}


export default App;

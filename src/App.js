// React
import React, { Component } from 'react';


// Project Components
import Board from './components/Board';
import BoardColumn from './components/BoardColumn';
import List from './components/List';
import ListItem from './components/ListItem';


// Component's stylesheet
import './App.css';


// Item States will serve as columns of classification
import { ITEM_STATES } from './constants';
const itemStates = Object.values(ITEM_STATES);



class App extends Component {


    state = {
        tasks: [
            { status: ITEM_STATES.TO_DO.id, name: 'Buy groceries' },
            { status: ITEM_STATES.TO_DO.id, name: 'Play videogames' },
            { status: ITEM_STATES.IN_PROGRESS.id, name: 'Do some programming' },
            { status: ITEM_STATES.DONE.id, name: 'Watch anime' },
        ]
    }


    render() {
        const {
            tasks
        } = this.state;

        return (
            <div className="container-fluid">
                <Board>
                    {
                        itemStates.map(({ id, name }, i) => (
                            <BoardColumn
                                key={id}
                                title={name}
                            >
                                <List
                                    items={tasks.filter(({ status }) => status === id)}
                                    renderItem={(item) => (
                                        <ListItem>
                                            {item.name}
                                        </ListItem>
                                    )} />
                            </BoardColumn>
                        ))
                    }
                </Board>
            </div>
        );
    }

}


export default App;

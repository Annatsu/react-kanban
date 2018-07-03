// React
import React from 'react';
import PropTypes from 'prop-types';


// Component's stylesheet
import './ListItem.css';


const ListItem = ({
    children
}) => (
    <div className="board-board_list-item">
        {children}
    </div>
);


ListItem.propTypes = {
    
};


export default ListItem;
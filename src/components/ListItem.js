// React
import React from 'react';


// Component's stylesheet
import './ListItem.css';


const ListItem = ({
    className,
    children,
    ...rest
}) => (
    <div className="board-board_list-item" {...rest}>
        {children}
    </div>
);


ListItem.propTypes = {
    
};


export default ListItem;
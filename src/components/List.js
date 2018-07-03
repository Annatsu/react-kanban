// React
import React from 'react';
import PropTypes from 'prop-types';


// Component's stylesheet
import './List.css';


const List = ({
    items,
    renderItem,
    children,
    className,
    ...rest
}) => (
    <ul className="board-board_list" {...rest}>
        {
            items.map((item, i, arr) => (
                <li key={i}>
                    {renderItem(item, i, arr)}
                </li>
            ))
        }
    </ul>
);


List.propTypes = {
    items: PropTypes.array,
    renderItem: PropTypes.func.isRequired,
};


export default List;

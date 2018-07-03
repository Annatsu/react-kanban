// React
import React from 'react';
import PropTypes from 'prop-types';


// Component's stylesheet
import './BoardColumn.css';


const BoardColumn = ({
    title,
    children,
    ...rest
}) => (
        <div className="col-sm" {...rest}>
            <div className="board-board_column">
                <h4>{title}</h4>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );


BoardColumn.propTypes = {
    title: PropTypes.string,
};


export default BoardColumn;

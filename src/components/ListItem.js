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
            <div className="row">
                <div className="col-10">
                    {children}
                </div>
                <div className="col-2">
                </div>
            </div>
        </div>
    );


ListItem.propTypes = {

};


export default ListItem;
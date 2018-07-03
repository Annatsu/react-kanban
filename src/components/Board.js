// React
import React from 'react';


// Utility Function
import { joinStrings } from '../utils';


const Board = ({
    className,
    children,
    ...rest
}) => (
    <div className="container-fluid" {...rest}>
        <div className="row">
            {children}
        </div>
    </div>
);


export default Board;
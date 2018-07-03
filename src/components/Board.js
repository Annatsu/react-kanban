// React
import React from 'react';


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
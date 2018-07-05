// React
import React from 'react';


const Board = ({
    className,
    children,
    ...rest
}) => (
        <div className="row">
            {children}
        </div>
    );


export default Board;
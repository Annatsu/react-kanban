// React
import React from 'react';
import PropTypes from 'prop-types';


// Custom Components


const BoardColumn = ({
    title,
    children,
    ...rest
}) => (
    <div className="col-sm" {...rest}>
        <h4>{title}</h4>
        <div>
            {children}
        </div>
    </div>
);


BoardColumn.propTypes = {
    title: PropTypes.string,
};


export default BoardColumn;

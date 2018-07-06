// React
import React from 'react';


const ItemOptions = ({
    itemTypes,
    activeType,
    onRemove,
    onChangeType,
}) => (
        <div style={{ textAlign: 'right' }}>
            <button className="btn btn-light">
                <i className="fas fa-ellipsis-v pull-right" />
            </button>
        </div>
    );


export default ItemOptions;
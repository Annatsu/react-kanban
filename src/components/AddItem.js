// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class AddItem extends Component {

    static propTypes = {
        itemTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
        onAddItem: PropTypes.func.isRequired,
    }


    constructor(props) {
        super(props);

        this.state = {
            itemName: '',
            itemType: props.itemTypes[0],
        }
    }


    addItem = (itemType) => {
        const { itemName } = this.state;
        const { onAddItem } = this.props;

        if (itemName !== '') {
            onAddItem(itemName);
            this.setState({
                itemName: '',
                itemType: itemType || this.state.itemType,
            });
        }
    }


    render() {
        const { itemName, itemType } = this.state;
        const { itemTypes } = this.props;

        return (
            <div className="row justify-content-center react-kanban-row">
                <div className="col-8">
                    <div className="input-group">
                        <input
                            className="form-control"
                            value={itemName}
                            aria-label="Nome do Item"
                            placeholder="Nome do Item"
                            onChange={({ target: { value } }) => this.setState({ itemName: value })}
                            onKeyUp={({ key }) => key === 'Enter' && this.addItem()} />

                        <div className="input-group-append">
                            <button
                                className="btn btn-success dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                {itemType}
                            </button>
                            <div className="dropdown-menu">
                                {itemTypes.map((typeName, i) => (
                                    <a
                                        key={i}
                                        className="dropdown-item"
                                    >
                                        {typeName}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}


export default AddItem;
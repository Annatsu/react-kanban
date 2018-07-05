// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class AddItem extends Component {

    static propTypes = {
        onAddItem: PropTypes.func.isRequired,
    }


    state = {
        itemName: '',
    }


    addItem = () => {
        const { itemName } = this.state;
        const { onAddItem } = this.props;

        if (itemName !== '') {
            onAddItem(itemName);
            this.setState({ itemName: '' });
        }
    }


    render() {
        const { itemName } = this.state;

        return (
            <div className="row justify-content-center react-kanban-row">
                <div className="col-8">
                    <input
                        className="form-control"
                        value={itemName}
                        placeholder="Nome do Item"
                        onChange={({ target: { value } }) => this.setState({ itemName: value })}
                        onKeyUp={({ key }) => key === 'Enter' && this.addItem()} />
                </div>
            </div>
        );
    }

}


export default AddItem;
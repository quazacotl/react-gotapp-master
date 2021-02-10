import React from 'react';
import ItemList from '../itemList/itemList';
import ErrorMessage from "../error/errorMessage";
import GotService from "../../services/gotServices";
import {withRouter} from 'react-router-dom'

class BookPage extends React.Component {

    gotService = new GotService();

    state = {
        error: false
    }

    componentDidCatch(error, info) {
        this.setState({error: true})
    }

    render() {
        if (this.state.error) return ErrorMessage;

        return (
            <ItemList
                onItemSelected={(itemId) => {
                    this.props.history.push(itemId)
                }}
                getData={this.gotService.getAllBooks}
                renderItem={({name}) => name}
            />
        );
    }
}

export default withRouter(BookPage);

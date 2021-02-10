import React, {Component} from 'react';
import ItemDetails, {Field} from '../itemDetails/itemDetails';
import GotService from "../../services/gotServices"


export default class BooksItem extends Component {
    gotService = new GotService();

    render() {
        return (
            <ItemDetails
                itemId={this.props.bookId}
                gotItem={this.gotService.getBook}>
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        );
    }
}

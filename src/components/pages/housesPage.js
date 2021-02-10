import React from 'react';
import ItemList from '../itemList/itemList';
import ItemDetails, {Field} from '../itemDetails/itemDetails';
import ErrorMessage from "../error/errorMessage";
import GotService from "../../services/gotServices";
import RowBlock from "../rowBlock/rowBlock";


export default class HousesPage extends React.Component {
    gotService = new GotService();

    state = {
        selectedHouse: null,
        error: false
    }

    componentDidCatch(error, info) {
        this.setState({error: true})
    }

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
        })

    }

    render() {
        if (this.state.error) return ErrorMessage;

        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllHouses}
                renderItem={({name}) => name}
            />
        )

        const itemDetails = (
            <ItemDetails
                itemId={this.state.selectedHouse}
                gotItem={this.gotService.getHouse}>
                <Field field='region' label='Region'/>
                <Field field='coatOfArms' label='Coat of arms'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}

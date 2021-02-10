import React, {Component} from 'react';
import styled from "styled-components";
import GotService from "../../services/gotServices";
import Spinner from "../spinner/spinner";

const StyledItemDetails = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    
        .char-details h4 {
            margin-bottom: 20px;
            text-align: center;
        }
`
const StyledSpan = styled.span`
    color: #fff;
    text-align: center;
    font-size: 26px;
       
`


const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
};

export {Field};

export default class ItemDetails extends Component {

    gotService = new GotService();

    state = {
        item: null,
        loading: true
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    onItemDetailsLoaded = (item) => {
        this.setState({
            item,
            loading: false
        })
    }


    updateItem () {
        const {itemId} = this.props;

        if (!itemId) return;

        this.setState({loading: true})

        this.props.gotItem(itemId)
            .then(this.onItemDetailsLoaded)
            .catch(e => console.log(e));
    }


    render() {

        if (!this.state.item) return <StyledSpan>Select any character</StyledSpan>

        if (this.state.loading) return <Spinner/>

        const {item} = this.state;
        const {name} = item;

        return (
            <StyledItemDetails className="rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                        return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </StyledItemDetails>
        );
    }
}
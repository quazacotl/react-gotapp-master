import React, {Component} from 'react';
import styled from "styled-components";
import Spinner from "../spinner/spinner";

const StyledListItem = styled.li`
  cursor: pointer;
`

export default class ItemList extends Component {
    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props;
        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            });
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item);
            return(
                <StyledListItem
                    key={id}
                    className='list-group-item'
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </StyledListItem>
            )
        });
    }


    render() {

        const {itemList} = this.state;

        if (!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList)

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}
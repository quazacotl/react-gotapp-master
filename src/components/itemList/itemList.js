import React, {Component} from 'react';
import styled from "styled-components";
import Spinner from "../spinner/spinner";
import GotService from "../../services/gotServices";

const StyledListItem = styled.li`
  cursor: pointer;
`

class ItemList extends Component {

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
        const {data} = this.props;
        const items = this.renderItems(data)

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}

const withData = (View, getData) => {
    return class extends Component {

        state = {
            itemList: null
        }

        componentDidMount() {
            getData()
                .then((data) => {
                    this.setState({
                        data
                    })
                });
        }

        render() {
            const {data} = this.state;

            if (!data) {
                return <Spinner/>
            }
            return <View {...this.props} data={data}/>;
        }
    }
};

const {getAllCharacters} = new GotService();
export default withData(ItemList, getAllCharacters);

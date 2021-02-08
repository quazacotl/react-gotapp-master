import React, {Component} from 'react';
import styled from "styled-components";
import GotService from "../../services/gotServices";
import Spinner from "../spinner/spinner";

const StyledCharDetails = styled.div`
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


const Field = ({char, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{char[field]}</span>
        </li>
    )
};

export {Field};

export default class CharDetails extends Component {

    gotService = new GotService();

    state = {
        char: null,
        loading: true
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    onCharDetailsLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }


    updateChar () {
        const {charId} = this.props;

        if (!charId) return;

        this.setState({loading: true})

        this.gotService.getCharacter(charId)
            .then(this.onCharDetailsLoaded)
            .catch(e => console.log(e));
    }


    render() {

        if (!this.state.char) return <StyledSpan>Select any character</StyledSpan>

        if (this.state.loading) return <Spinner/>

        const {char} = this.state;
        const {name} = char;

        return (
            <StyledCharDetails className="rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {React.Children.map(this.props.children, (child) => {
                        return React.cloneElement(child, {char})
                    })}
                </ul>
            </StyledCharDetails>
        );
    }
}


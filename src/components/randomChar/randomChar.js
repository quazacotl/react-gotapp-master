import React, {Component} from 'react';
import styled from "styled-components";
import Spinner from "../spinner/spinner";
import GotService from "../../services/gotServices";
import ErrorMessage from "../error/errorMessage";

const StyledRandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
        .random-block h4 {
            margin-bottom: 20px;
            text-align: center;
        }
        .term {
            font-weight: bold;
        }
`

export default class RandomChar extends Component {

    gotService = new GotService();
    state = {
        char: {},
        loading: true
    }

    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 4000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false,
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random()*150 +15);
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {
        const{char, loading, error} = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null
        const content = !(loading || error) ? <View char={char}/> : null;

        return (
            <StyledRandomBlock className="rounded">
                {errorMessage}
                {spinner}
                {content}
            </StyledRandomBlock>
        );
    }
}


const View = ({char}) => {
    const {name, gender, born, died, culture} = char;

    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}
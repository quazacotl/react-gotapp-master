import React from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import styled from "styled-components";
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
// import ErrorMessage from "../error/errorMessage";
import CharacterPage from "../characterPage/characterPage";
import ItemList from "../itemList/itemList";
import CharDetails from "../charDetails/charDetails";
import gotServices from "../../services/gotServices";
import GotService from "../../services/gotServices";


const StyledApp = styled.div`
    a {
        color: inherit;
        text-decoration: none;
    }
    a:visited {
        text-decoration: none;
        color: inherit;
    }
    a:hover {
        text-decoration: none;
        color: inherit;
    }
    a:focus {
        text-decoration: none;
        color: inherit;
    }
    a:active {
        text-decoration: none;
        color: inherit;
    }
`


export default class App extends React.Component {
    gotService = new GotService();

    state = {
        isHideRandomChar: false,
        error: false
    }




    toggleRandomCharState = () => {
        this.setState((state) => {
            return {isHideRandomChar: !state.isHideRandomChar}
        });
    };

    render () {

        const RandomCharBlock = () => {
            return (
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        <RandomChar/>
                    </Col>
                </Row>
            )
        };

        const randomCharContent = this.state.isHideRandomChar ? null : <RandomCharBlock/>


        return (
            <StyledApp>
                <Container>
                    <Header/>
                </Container>
                <Container>
                    {randomCharContent}
                    <Button
                        color='secondary'
                        className={'mb-4'}
                        onClick={this.toggleRandomCharState}>
                        Random Char
                    </Button>
                    <CharacterPage/>
                    <Row>
                        <Col md='6'>
                            <ItemList
                                onItemSelected={this.onItemSelected}
                                getData={this.gotService.getAllBooks}
                                renderItem={(item) => item.name}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList
                                onItemSelected={this.onItemSelected}
                                getData={this.gotService.getAllHouses}
                                renderItem={(item) => item.name}/>/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </StyledApp>
        );
    }
}

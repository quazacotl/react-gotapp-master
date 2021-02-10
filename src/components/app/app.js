import React from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import '../../index.css'
import styled from "styled-components";
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import CharacterPage from "../pages/characterPage";
import BookPage from "../pages/bookPage";
import HousesPage from "../pages/housesPage";
import BooksItem from "../pages/booksItem";
import {BrowserRouter as Router, Route, Switch, useLocation} from 'react-router-dom';


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

const NoMatch = () => {
    let location = useLocation();

    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}


export default class App extends React.Component {

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
                        <RandomChar interval={5000}/>
                    </Col>
                </Row>
            )
        };

        const randomCharContent = this.state.isHideRandomChar ? null : <RandomCharBlock/>


        return (
            <Router>
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
                        <Switch>
                            <Route path='/characters' exact component={CharacterPage}/>
                            <Route path='/houses' exact component={HousesPage}/>
                            <Route path='/books' exact component={BookPage}/>
                            <Route path='/books/:id' render={
                                ({match}) => {
                                    const {id} = match.params;
                                    return <BooksItem bookId={id}/>
                                }
                            }/>
                            <Route path="*">
                                <NoMatch />
                            </Route>
                        </Switch>
                    </Container>
                </StyledApp>
            </Router>
        );
    }
}

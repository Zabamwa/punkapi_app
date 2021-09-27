import React from 'react';
import {Container, MenuNavLink, Wrapper} from "./Home.module";
import {HomeRouting} from "../../routing/routing";
import {Route, Switch} from "react-router-dom";
import {ListOfBeer} from "../listOfBeer/ListOfBeer";
import {FavouriteList} from "../favouriteList/FavouriteList";

export const Home = () => {

    return (
        <Container>
            <Wrapper>
                {HomeRouting.map(route => (
                    <MenuNavLink key={route.path} activeClassName="active" to={route.path}>
                        {route.name}
                    </MenuNavLink>
                ))}
            </Wrapper>
            <Switch>
                <Route path="/beer-list" component={ListOfBeer}/>
                <Route path="/favourite" component={FavouriteList}/>
            </Switch>
        </Container>
    );
}
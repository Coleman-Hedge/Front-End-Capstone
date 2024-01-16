import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import NotFound from "./NotFound";
import CreateDeck from "./Deck/CreateDeck";
import Study from "./Study/Study";
import EditDeck from "./Deck/EditDeck";
import AddCard from "./AddCards/AddCard";
import EditCard from "./AddCards/EditCard";
import Deck from "./Deck/Deck";

function Layout() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route path="/decks/new">
          <CreateDeck />
        </Route>
        <Route path="/decks/:deckId/cards/:cardId/edit">
          <EditCard />
        </Route>
        <Route path="/decks/:deckId/cards/new">
          <AddCard />
        </Route>
        <Route path="/decks/:deckId/study">
          <Study subtitle="Test Title" />
        </Route>
        <Route path="/decks/:deckId/edit">
          <EditDeck />
        </Route>
        <Route exact path="/decks/:deckId">
          <Deck />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default Layout;
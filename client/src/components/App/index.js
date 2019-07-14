import React from "react";
import { Router, Route } from "react-router-dom";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import AssignmentPage from "../Assignment";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import withSession from "../Session/withSession";
import FlashCardPage from "../FlashCards";
import Cards from "../FlashCards/Cards";
import CardList from "../FlashCards/Cards/CardList";
import Search from "../FlashCards/Decks/DeckSearch";
import Tags from "../FlashCards/Decks/DeckItem/TagItem";

import * as routes from "../../constants/routes";
import history from "../../constants/history";
import "./style.css";
import Profile from "../Profile";

const App = ({ session, refetch }) => (
  <Router history={history}>
    <div className="contentwrap">
      <Navigation session={session} />
      <div>
        <Route exact path={routes.LANDING} component={() => <LandingPage />} />
        <Route
          exact
          path={routes.SIGN_UP}
          component={() => <SignUpPage refetch={refetch} />}
        />
        <Route
          exact
          path={routes.SIGN_IN}
          component={() => <SignInPage refetch={refetch} />}
        />
        <Route exact path={routes.PROFILE} component={() => <Profile />} />
        <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
        <Route
          exact
          path={routes.ASSIGNMENTS}
          component={() => <AssignmentPage />}
        />
        <Route exact path={routes.ADMIN} component={() => <AdminPage />} />
        <Route
          exact
          path={routes.FLASHCARDS}
          component={() => <FlashCardPage />}
        />
        <Route
          exact
          path={routes.CARDS}
          component={props => <Cards {...props} />}
        />
        <Route
          exact
          path={routes.CARDLIST}
          component={props => <CardList {...props} />}
        />
        <Route
          exact
          path={routes.SEARCH}
          component={props => <Search {...props} />}
        />
        <Route exact path={routes.TAGS} component={Tags} />
      </div>
    </div>
  </Router>
);

export default withSession(App);

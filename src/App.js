import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./components/Pages/AllQuotes";
import SingleQuote from "./components/Pages/SingleQuote";
import NewQuote from "./components/Pages/NewQuote";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>

        <Route path="/quotes/:quoteId">
          <SingleQuote />
        </Route>

        <Route path="/new-quote">
          <NewQuote />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

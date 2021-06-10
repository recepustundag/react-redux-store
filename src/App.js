import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Card from "./views/Card";
import Home from "./views/Home";

const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/card">
            <Card />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

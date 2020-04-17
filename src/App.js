import React from 'react';
import Container from '@material-ui/core/Container';
import Events from './components/Events';
import AppBar from './components/AppBar';
import CartList from './components/CartList';
import { Router, Route } from 'react-router-dom';
import history from './history';

function App() {
  return (
    <Router history={history}>
    <React.Fragment>
      <Container maxWidth="sm">
        <AppBar />
        <Route path="/" exact component={Events} />
        <Route path="/cart" exact component={CartList} />
      </Container>
    </React.Fragment>
    </Router>
  );
}

export default App;

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import logo from './logo.svg';
import configureStore from './store';
import Beers from './components/Beers';

const AppStyle = styled.div`
  text-align: center;
  color: hsl(0, 0%, 22%);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .App-logo {
    animation: App-logo-spin infinite 20s linear;
    height: 80px;
  }

  .App-header {
  }
`;

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
  .App-title {
    font-size: 1.5em;
  }

  .App-intro {
    font-size: large;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppStyle>
          <Header>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome</h1>
          </Header>
          <Beers />
        </AppStyle>
      </Provider>
    );
  }
}

export default App;

import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { beersRetrieved } from '../actions';
import { BeerList } from './BeerList';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const SearchPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 15rem;
  height: 100%;
  background-color: hsl(260, 16%, 40%);
  height: 100%;
  color: white;
  padding: 2rem;
  label {
    margin-bottom: 0.4rem;
  }
  input {
    font-size: 1rem;
    padding: 0.4rem;
    border-radius: 0.4rem;
  }
`;

const Results = styled.div`
  flex: 6;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const getBeers = () => {
  const apiRoot = 'https://api.punkapi.com/v2/beers';
  return fetch(apiRoot);
};

class Beers extends React.Component {
  componentDidMount = () => {
    getBeers()
      .then(r => {
        return r.json();
      })
      .then(bs => {
        this.props.beersRetrieved(bs);
      });
  };

  render = () => (
    <Container>
      <SearchPanel>
        <label htmlFor="searchInput">Search</label>
        <input id="searchInput" type="text" />
      </SearchPanel>
      <Results>
        <BeerList beers={this.props.beers} />
      </Results>
    </Container>
  );
}

Beers.propTypes = {
  beers: PropTypes.array,
  beersRetrieved: PropTypes.func
};

const mapStateToProps = state => ({
  beers: state.beers
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ beersRetrieved }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Beers);

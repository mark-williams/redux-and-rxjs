import React from 'react';
import PropTypes from 'prop-types';
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
  min-width: 10rem;
  height: 100%;
  background-color: hsl(260, 16%, 40%);
  height: 100%;
  color: white;
  padding: 2rem 0 0 2rem;
`;

const Results = styled.div`
  flex: 8;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const sampleBeers = [
  'Greene King IPA',
  'Bank Top Flat Cap',
  'Formby Samba',
  'Formby IPA',
  'London Pride'
];

class Beers extends React.Component {
  componentDidMount = () => {
    this.props.beersRetrieved(sampleBeers.slice(0, 3));
  };

  render = () => (
    <Container>
      <SearchPanel>Search</SearchPanel>
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
  beersRetrieved: payload => dispatch(beersRetrieved(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Beers);

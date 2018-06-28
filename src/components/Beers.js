import React from 'react';
import styled from 'styled-components';
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

const beers = [
  'Greene King IPA',
  'Bank Top Flat Cap',
  'Formby Samba',
  'Formby IPA',
  'London Pride'
];

const Beers = () => (
  <Container>
    <SearchPanel>Search</SearchPanel>
    <Results>
      <BeerList beers={beers} />
    </Results>
  </Container>
);

export default Beers;

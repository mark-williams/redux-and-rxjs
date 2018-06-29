import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: auto;
  width: 100%;
  padding: 1rem;
  margin-bottom: 3rem;
  border: 1px solid hsl(0, 0%, 85%);
  color: hsl(0, 0%, 42%);
  img {
    width: 50px;
    margin-right: 2rem;
  }
`;

const Blurb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .name {
    font-size: 1.6rem;
    color: hsl(260, 16%, 40%);
  }
  p {
    text-align: left;
    line-height: 1.5;
    font-size: 0.8rem;
  }
`;

const BeerCard = ({ beer }) => (
  <Container>
    <Card id={beer.id}>
      <img src={beer.image_url} />
      <Blurb>
        <div className="name">{beer.name}</div>
        <p>{beer.description}</p>
      </Blurb>
    </Card>
  </Container>
);
BeerCard.propTypes = {
  beer: PropTypes.object
};

export default BeerCard;

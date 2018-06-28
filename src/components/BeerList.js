import React from 'react';

export const BeerList = ({ beers }) => beers.map(beer => <div>{beer}</div>);

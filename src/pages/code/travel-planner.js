import React from 'react';
import Link from 'gatsby-link';

import Code from '../../components/Code';

const title = `Travel Planner`;
const description = `Travel Planner built using AngularJS and the Google Maps API.`;

const TravelPlanner = () => (
    <Code src={'https://meltplastic.net/demos/travel_planner/index.html'} title={title} text={description} />
);

export default TravelPlanner;

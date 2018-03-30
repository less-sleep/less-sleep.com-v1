import React from 'react';
import Link from 'gatsby-link';

import Code from '../../components/Code';

const title = `Travel Planner`;
const description = `Web app for planning trips. Built with AngularJS and Spectre CSS framework.`;

const TravelApp = () => (
    <Code src={'https://meltplastic.net/demos/travel_app/index.html'} title={title} text={description} />
);

export default TravelApp;

import React from 'react';
import Link from 'gatsby-link';

import Code from '../../components/Code';
import {Helmet} from 'react-helmet';

const title = `Travel Planner`;
const description = `Travel Planner built using AngularJS and the Google Maps API.`;

const TravelPlanner = () => (
    <div>
        <Helmet
            meta={[
                {
                    name: 'description',
                    content: description,
                },
                {
                    name: 'keywords',
                    content: 'angularjs, google maps, javascript',
                },
            ]}
        />
        <Code src={'https://meltplastic.net/demos/travel_planner/index.html'} title={title} text={description} />
    </div>
);

export default TravelPlanner;

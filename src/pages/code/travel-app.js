import React from 'react';
import Link from 'gatsby-link';

import Code from '../../components/Code';
import {Helmet} from 'react-helmet';

const title = `Travel Planner`;
const description = `Web app for planning trips. Built with AngularJS and Spectre CSS framework.`;

const TravelApp = () => (
    <div>
        <Helmet
            meta={[
                {
                    name: 'description',
                    content: description,
                },
                {
                    name: 'keywords',
                    content: 'angularjs, spectre.css, javascript',
                },
            ]}
        />
        <Code src={'https://meltplastic.net/demos/travel_app/index.html'} title={title} text={description} />
    </div>
);

export default TravelApp;

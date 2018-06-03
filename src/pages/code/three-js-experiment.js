import React from 'react';
import Link from 'gatsby-link';

import Code from '../../components/Code';
import {Helmet} from 'react-helmet';

const title = `Three.js Experiment`;
const description = `Experiment building an interactive app using WebGL library three.js. Click to add in a new element.`;

const Threejs = () => (
    <div>
        <Helmet
            meta={[
                {
                    name: 'description',
                    content: description,
                },
                {
                    name: 'keywords',
                    content: 'three.js, webgl, javascript',
                },
            ]}
        />
        <Code src={'https://meltplastic.net/demos/three_js/index.html'} title={title} text={description} />
    </div>
);

export default Threejs;

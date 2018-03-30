import React from 'react';
import Link from 'gatsby-link';

import Code from '../../components/Code';

const title = `Three.js Experiment`;
const description = `Experiment building an interactive app using WebGL library three.js. Click to add in a new element.`;

const Threejs = () => (
    <Code src={'https://meltplastic.net/demos/three_js/index.html'} title={title} text={description} />
);

export default Threejs;

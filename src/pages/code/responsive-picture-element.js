import React from 'react';
import Link from 'gatsby-link';

import Code from '../../components/Code';

const title = `HTML5 Responsive Picture Element`;
const description = `
    Experiment using the <picture> and <source> elements to supply 
    different sized images depending on browser viewport width.
`;

const ResponsivePictureElement = () => (
    <Code src={'https://meltplastic.net/demos/responsive_images/index.html'} title={title} text={description} />
);

export default ResponsivePictureElement;

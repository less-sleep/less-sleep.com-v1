import React from 'react';
import Link from 'gatsby-link';

import Code from '../../components/Code';

const title = `React Photos`;
const description = `Photos app built using Reactjs.`;

const ReactPhotos = () => (
    <Code src={'https://meltplastic.net/demos/react-photos/index.html'} title={title} text={description} />
);

export default ReactPhotos;

import React from 'react';
import Link from 'gatsby-link';

import Code from '../../components/Code';

const title = `Textify Plugin`;
const description = `jQuery plugin to animate lines of text.`;

const TextifyPlugin = () => (
    <Code src={'https://meltplastic.net/demos/textify/example.html'} title={title} text={description} />
);

export default TextifyPlugin;

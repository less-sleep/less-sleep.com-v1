import React from 'react';
import Link from 'gatsby-link';

import Code from '../../components/Code';
import {Helmet} from 'react-helmet';

const title = `Textify Plugin`;
const description = `jQuery plugin to animate lines of text.`;

const TextifyPlugin = () => (
    <div>
        <Helmet
            meta={[
                {
                    name: 'description',
                    content: description,
                },
                {
                    name: 'keywords',
                    content: 'jquery, html, css',
                },
            ]}
        />
        <Code src={'https://meltplastic.net/demos/textify/example.html'} title={title} text={description} />
    </div>
);

export default TextifyPlugin;

import React from 'react';
import Link from 'gatsby-link';

import Code from '../../components/Code';
import {Helmet} from 'react-helmet';

const title = `React Photos`;
const description = `Photos app built using React, Next.js, and the responsive <picture> element.`;

const ReactPhotos = () => (
    <div>
        <Helmet
            meta={[
                {
                    name: 'description',
                    content: description,
                },
                {
                    name: 'keywords',
                    content: 'javascript, react, next.js, picture element, html, css',
                },
            ]}
        />
        <Code src={'https://react-photos-avcfjakuso.now.sh'} title={title} text={description} />
    </div>
);

export default ReactPhotos;

import React, {Fragment} from 'react';
import Link from 'gatsby-link';

import Code from '../../components/Code';
import {Helmet} from 'react-helmet';

const title = `HTML5 Canvas Particle Engine`;
const description = `Canvas particle engine built with jQuery, html canvas and require.js.`;

const CanvasParticleEngine = () => (
    <div>
        <Helmet
            meta={[
                {
                    name: 'description',
                    content: 'Demo of particle engine written using jQuery and HTML5 canvas.',
                },
                {
                    name: 'keywords',
                    content: 'javascript, jquery, canvas, html, particle engine, require',
                },
            ]}
        />
        <Code src={'https://meltplastic.net/demos/canvas_particles/index.html'} title={title} text={description} />
    </div>
);

export default CanvasParticleEngine;

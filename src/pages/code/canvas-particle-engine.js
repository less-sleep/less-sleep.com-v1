import React from 'react';
import Link from 'gatsby-link';

import Code from '../../components/Code';

const title = `HTML5 Canvas Particle Engine`;
const description = `Canvas particle engine built with jQuery, html canvas and require.js.`;

const CanvasParticleEngine = () => (
    <Code src={'https://meltplastic.net/demos/canvas_particles/index.html'} title={title} text={description} />
);

export default CanvasParticleEngine;

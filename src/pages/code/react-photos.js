import React from 'react';
import Link from 'gatsby-link';

import Code from '../../components/Code';

const title = `React Photos`;
const description = `Photos app built using React, Next.js, and the responsive <picture> element.`;

const ReactPhotos = () => <Code src={'https://react-photos-avcfjakuso.now.sh'} title={title} text={description} />;

export default ReactPhotos;

import React from 'react';
import Link from 'gatsby-link';

import Code from '../../components/Code';

const title = `Vue Books`;
const description = `
    App to catalog books. Built to be used in an Electron desktop app and as a web app. 
    Uses local storage by default, but the api file is loaded in dynamically so it can 
    easily be swapped out.`;

const VueBooks = () => (
    <Code src={'https://carnold84.github.io/vue-books/demo'} title={title} text={description} />
);

export default VueBooks;

import React from 'react';
import Link from 'gatsby-link';

import Code from '../../components/Code';
import {Helmet} from 'react-helmet';

const title = `Vue Books`;
const description = `
    App to catalog books. Built to be used in an Electron desktop app and as a web app. 
    Uses local storage by default, but the api file is loaded in dynamically so it can 
    easily be swapped out.`;

const VueBooks = () => (
    <div>
        <Helmet
            meta={[
                {
                    name: 'description',
                    content: description,
                },
                {
                    name: 'keywords',
                    content: 'vue js, vuejs, electron, web app, local storage, javascript',
                },
            ]}
        />
        <Code src={'https://carnold84.github.io/vue-books/demo'} title={title} text={description} />
    </div>
);

export default VueBooks;

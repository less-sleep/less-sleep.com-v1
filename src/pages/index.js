import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Helmet from 'react-helmet';

import Header from '../components/Header';

const Wrapper = styled.div`
    display: flex;
    flex-grow: 1;

    ${breakpoint('tablet')`
        flex-direction: row;
    `} ${breakpoint('mobile')`
        flex-direction: column;
    `};
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    ${breakpoint('tablet')`
        padding: 130px 60px;
    `} ${breakpoint('mobile')`
        padding: 0 40px;
    `};
`;

const Heading2 = styled.h2`
    font-size: 2.4rem;
    line-height: 3.2rem;
    margin: 0 0 20px;

    ${breakpoint('mobile')`
        font-size: 2.2rem;
        line-height: 3rem;
    `};
`;

const Heading3 = styled.h3`
    font-size: 0.95rem;
    line-height: 1.6rem;
    margin: 0 0 20px;
    text-transform: uppercase;
`;

const SubHeading = styled.span`
    color: rgba(0, 0, 0, 0.5);

    ${breakpoint('tablet')`
        display: inline;
    `} ${breakpoint('mobile')`
        display: block;
    `};
`;

const Paragraph = styled.p`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6rem;
    margin: 0 0 10px;
    max-width: 900px;
    text-align: justify;
`;

const Section = styled.div`
    margin: 0 0 40px;
`;

const StyledLink = styled(Link)`
    color: rgba(0, 0, 0, 0.8);
    display: block;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.8rem;
    text-decoration: none;

    ${breakpoint('tablet')`
        margin: 0 0 30px;
    `} ${breakpoint('mobile')`
        margin: 0 0 20px;
    `};
`;

const SubLink = styled.span`
    color: rgba(0, 0, 0, 0.4);
    font-size: 1.1rem;
    font-weight: 400;
    text-decoration: none;
    text-transform: lowercase;

    ${breakpoint('tablet')`
        &:before {
            color: rgba(0, 0, 0, 0.3);
            content: '/ ';
        }
        display: inline;
    `} ${breakpoint('mobile')`
        display: block;
        margin: 3px 0 0;
    `};
`;

const IndexPage = props => {
    const {data} = props;

    return (
        <Wrapper>
            <Helmet
                meta={[
                    {
                        name: 'description',
                        content:
                            'Less Sleep. Website of Chris Arnold - Developer, Designer and Purveyor of Fine Digital Goods',
                    },
                    {
                        name: 'keywords',
                        content:
                            'chris arnold, javascript, html, css, chris, arnold, web, web development, web developer, code, frameworks',
                    },
                ]}
            />
            <Header title={data.site.siteMetadata.title} />
            <Content>
                <Section>
                    <Heading3>
                        Chris Arnold / <SubHeading>Developer and Designer</SubHeading>
                    </Heading3>
                    <Heading2>Purveyor of Fine Digital Goods</Heading2>
                    <Paragraph>
                        I'm Chris Arnold, a designer and developer from Christchurch, New Zealand. I like to write
                        clean, elegant code and partner it with clean, beautiful design and well thought out,
                        user-friendly interfaces. I work mainly in Javascript, HTML and CSS and enjoy exploring new
                        frameworks, tools and, most importantly, new paradigms in code, design and UX.
                    </Paragraph>
                </Section>
                <Section>
                    <Heading3>
                        Code / <SubHeading>Experiments and Projects</SubHeading>
                    </Heading3>
                    <StyledLink to="/code/vue-books/">
                        Vue Books <SubLink>VueJS</SubLink>
                    </StyledLink>
                    <StyledLink to="/code/travel-app/">
                        Travel App <SubLink>AngularJS, Spectre.css</SubLink>
                    </StyledLink>
                    <StyledLink to="/code/react-photos/">
                        React Photos <SubLink>React</SubLink>
                    </StyledLink>
                    <StyledLink to="/code/three-js-experiment/">
                        Three.js Experiment <SubLink>ThreeJS, Modernizr, RequireJS, jQuery</SubLink>
                    </StyledLink>
                    <StyledLink to="/code/travel-planner/">
                        Travel Planner <SubLink>AngularJS, Google Maps</SubLink>
                    </StyledLink>
                    <StyledLink to="/code/textify-plugin/">
                        Textify Plugin <SubLink>jQuery</SubLink>
                    </StyledLink>
                    <StyledLink to="/code/canvas-particle-engine/">
                        HTML5 Canvas Particle Engine <SubLink>jQuery</SubLink>
                    </StyledLink>
                    <StyledLink to="/code/responsive-picture-element/">
                        Responsive Picture Element <SubLink>HTML5</SubLink>
                    </StyledLink>
                </Section>
            </Content>
        </Wrapper>
    );
};

export default IndexPage;

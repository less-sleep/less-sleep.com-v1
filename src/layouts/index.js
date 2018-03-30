import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import 'typeface-open-sans';

import './reset.css';

const Wrapper = styled.div`
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.8);
`;

const Body = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    flex-direction: row;
    display: flex;
`;

const Content = styled.div`
    flex-grow: 1;
    display: flex;
`;

const TemplateWrapper = (props) => {
    const { children, data } = props;
    return (
        <Wrapper>
            <Helmet
                title={data.site.siteMetadata.title}
                meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
            />
            <Body>
                <Content>
                    {children({...props})}
                </Content>
            </Body>
        </Wrapper>
    );
};

TemplateWrapper.propTypes = {
    children: PropTypes.func,
};

export const query = graphql`
  query TemplateQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default TemplateWrapper;

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Icon from './Icon';

const Wrapper = styled.div`
    padding: 40px;
    grid-template-columns: 20px 1fr;
    grid-column-gap: 15px;
    grid-template-areas: "nav title" ". body";
    display: grid;
`;

const Nav = styled.div`
    grid-area: nav;
    padding: 5px 0 0;

    a:hover {
        color: rgba(255, 255, 255, 0.7);
    }
`;

const Title = styled.h2`
    color: rgb(255, 255, 255);
    font-size: 1.5rem;
    font-weight: 100;
    grid-area: title;
    line-height: 1.7rem;
    margin: 0 0 10px;
`;

const BodyText = styled.p`
    color: rgba(255, 255, 255, 0.7);
    font-weight: 100;
    grid-area: body;
`;

const Description = props => {
    const {title, text, link} = props;

    return (
        <Wrapper>
            <Nav>
                <Link to={link}>
                    <Icon type={'back'} />
                </Link>
            </Nav>
            <Title>
                {title}
            </Title>
            <BodyText>
                {text}
            </BodyText>
        </Wrapper>
    );
};

const {string} = PropTypes;

Description.propTypes = {
    link: string.isRequired,
    title: string.isRequired,
    text: string,
};

export default Description;

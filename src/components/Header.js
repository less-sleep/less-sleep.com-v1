import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    justify-content: flex-start;

    ${breakpoint('tablet')`
        flex-direction: column;
        height: 100%;
        width: 140px;
    `}

    ${breakpoint('mobile')`
        flex-direction: row;
        height: 60px;
        margin: 0 0 10px;
        padding: 0 40px;
        width: 100%;
    `}
`;

const Title = styled.h1`
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 0.9rem;
    position: absolute;
    text-transform: uppercase;

    a {
        color: rgba(0, 0, 0, 0.8);
        text-decoration: none;
    }

    ${breakpoint('tablet')`
        margin: 45px 0 0;
        width: 42px;
    `}

    ${breakpoint('mobile')`
        margin: 0;
        width: 80px;
    `}
`;

const Header = ({title}) => (
    <Wrapper>
        <Title>
            <Link to="/">{title}</Link>
        </Title>
    </Wrapper>
);

Header.propTypes = {
    title: PropTypes.string,
};

Header.defaultProps = {
    title: 'Website',
};

export default Header;

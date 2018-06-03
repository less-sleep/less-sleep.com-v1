import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Icon from './Icon';

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    background-color: #222222;
    transform: translate3d(0, 100%, 0);
    transition: transform 200ms ease-in-out;
    flex-direction: column;
    display: flex;

    &.is-open {
        transform: translate3d(0, 0, 0);
    }
`;

class Drawer extends Component {
    elWrapper = undefined;

    getRef = el => {
        this.elWrapper = el;
    };

    calculateBounds = () => {
        const {onBoundsCalculated} = this.props;
        
        if (onBoundsCalculated) {
            const descBounds = this.elWrapper.getBoundingClientRect();
            onBoundsCalculated(descBounds);
        }
    };

    componentDidMount() {
        this.calculateBounds();

        window.addEventListener('resize', this.calculateBounds);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.calculateBounds);
    }

    render() {
        const {children, isOpen} = this.props;

        return (
            <Wrapper className={isOpen ? 'is-open' : undefined} innerRef={this.getRef}>
                {children}
            </Wrapper>
        );
    }
}

const {oneOfType, array, element, func, bool} = PropTypes;

Drawer.propTypes = {
    children: oneOfType([element, array]),
    onBoundsCalculated: func,
    isOpen: bool,
};

Drawer.defaultProps = {
    isOpen: false,
};

export default Drawer;

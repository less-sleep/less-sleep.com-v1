import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Icon from './Icon';
import Drawer from './Drawer';
import Description from './Description';

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex-direction: column;
    display: flex;
`;

const ToggleButton = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    right: 0;
    bottom: 0;
    color: rgba(255, 255, 255, 0.7);
    background-color: #222222;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    display: flex;

    &:hover {
        color: rgb(255, 255, 255);
    }
`;

const Content = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex-direction: column;
    display: flex;
    transition: transform 200ms ease-in-out;

    &.is-open {
        transform: translate3d(0, -${props => props.offsetY}px, 0);
    }

    a,
    a:link,
    a:visited {
        color: rgba(255, 255, 255, 0.54);
    }

    a:hover {
        color: rgb(255, 255, 255);
    }
`;

const IFrame = styled.iframe`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

class Code extends Component {
    state = {
        isOpen: false,
        offsetY: undefined,
    };

    elDesc = undefined;

    onDrawerBounds = bounds => {
        this.setState(() => ({offsetY: bounds.height - 1}));
    };

    onOpen = () => {
        this.setState(() => ({isOpen: !this.state.isOpen}));
    };

    render() {
        const {isOpen, offsetY} = this.state;
        const {src, title, text} = this.props;

        const icon = isOpen ? <Icon type={'close'} size={'16px'} /> : <Icon type={'info'} size={'20px'} />;

        return (
            <Wrapper>
                <Content className={isOpen ? 'is-open' : undefined} offsetY={offsetY}>
                    <IFrame src={src} />
                    <ToggleButton onClick={this.onOpen}>{icon}</ToggleButton>
                </Content>
                <Drawer isOpen={isOpen} onBoundsCalculated={this.onDrawerBounds}>
                    <Description title={title} text={text} link={'/'} />
                </Drawer>
            </Wrapper>
        );
    }
}

const {string} = PropTypes;

Code.propTypes = {
    src: string.isRequired,
    title: string,
    text: string,
};

Code.defaultProps = {
    description: '',
};

export default Code;

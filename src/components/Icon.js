import React from 'react';
import PropTypes from 'prop-types';

const files = require.context('!svg-sprite!../assets', false, /.*\.svg$/);
files.keys().forEach(files);

const Icon = ({ type, className, size }) => (
  <svg className={ `dib v-mid ${ className }` }
    height={size} width={size}
    style={{fill: 'currentColor'}}>
    <use xlinkHref={ `#${ type }` }></use>
  </svg>
);

const {string} = PropTypes;

Icon.propTypes = {
  size: string,
};

Icon.defaultProps = {
  size: '20px',
};

export default Icon;
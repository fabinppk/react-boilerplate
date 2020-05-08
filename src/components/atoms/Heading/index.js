import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from '_atoms/Heading/index.module.scss';

export const LEVEL = {
    h1: 1,
    h2: 2,
    h3: 3,
    h4: 4,
    h5: 5,
    h6: 6,
};

const RENDER = {
    [LEVEL.h1]: (children, className) => (
        <h1 className={classNames(style.header, style.h1, className)}>{children}</h1>
    ),
    [LEVEL.h2]: (children, className) => (
        <h2 className={classNames(style.header, style.h2, className)}>{children}</h2>
    ),
    [LEVEL.h3]: (children, className) => (
        <h3 className={classNames(style.header, style.h3, className)}>{children}</h3>
    ),
    [LEVEL.h4]: (children, className) => (
        <h4 className={classNames(style.header, style.h4, className)}>{children}</h4>
    ),
    [LEVEL.h5]: (children, className) => (
        <h5 className={classNames(style.header, style.h5, className)}>{children}</h5>
    ),
    [LEVEL.h6]: (children, className) => (
        <h6 className={classNames(style.header, style.h6, className)}>{children}</h6>
    ),
};

const Heading = ({ level, children, className }) => RENDER[level](children, className);

Heading.propTypes = {
    level: PropTypes.number,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

Heading.defaultProps = {
    level: LEVEL.h1,
    className: undefined,
};

export default Heading;

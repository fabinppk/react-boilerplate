import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import style from '_atoms/Menu/index.module.scss';

const MenuItem = ({ href, isActive, children }) => {
    return (
        <Link to={href} className={classNames(style.menuItem, { [style.activeItem]: isActive })}>
            {children}
        </Link>
    );
};

MenuItem.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    isActive: PropTypes.bool,
};

MenuItem.defaultProps = {
    href: '/',
    isActive: false,
};

export default MenuItem;

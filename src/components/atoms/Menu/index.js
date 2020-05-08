import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import MenuItem from '_atoms/Menu/menu-item';
import style from '_atoms/Menu/index.module.scss';

const Menu = ({ children }) => <nav className={classNames(style.menu)}>{children}</nav>;

Menu.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { MenuItem };

export default Menu;

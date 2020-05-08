import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import style from '_atoms/HamburgerMenuButton/index.module.scss';

/* eslint-disable jsx-a11y/control-has-associated-label */
const HamburgerMenuButton = ({ menuStatus, handleMenuToggle }) => {
    const menuOpened = menuStatus ? style.isOpen : '';

    return (
        <>
            <div className={classNames(style.hambmenu, menuOpened)}>
                <span />
                <span />
                <span />
                <span />
            </div>
            <button type="button" className={style.hambclicker} onClick={handleMenuToggle} />
        </>
    );
};

HamburgerMenuButton.propTypes = {
    menuStatus: PropTypes.bool,
    handleMenuToggle: PropTypes.func,
};

HamburgerMenuButton.defaultProps = {
    menuStatus: false,
    handleMenuToggle: () => {},
};

export default HamburgerMenuButton;

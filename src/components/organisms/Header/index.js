import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import logo from '_images/logo_beta.png';
import Logo from '_atoms/Logo';
import HamburgerMenuButton from '_atoms/HamburgerMenuButton';
import ProfileDropdown from '_molecules/ProfileDropdown';
import ProfileDropdownMobile from '_molecules/ProfileDropdownMobile';
import Menu, { MenuItem } from '_atoms/Menu';
import { MENU_ITEMS, PROFILE_DROPDOWN_ITEMS, PROFILE } from '_config/settings';

import style from '_organisms/Header/index.module.scss';

const Header = ({ currentPath }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const element = document.body;
        element.classList.remove(style.scrollLock);
    }, []);

    const menuToggle = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
        const element = document.body;
        /* istanbul ignore next */
        if (element.classList) {
            element.classList.toggle(style.scrollLock);
        } else {
            // For IE9
            /* istanbul ignore next */
            const classes = element.className.split(' ');
            /* istanbul ignore next */
            const i = classes.indexOf(style.scrollLock);
            /* istanbul ignore next */
            if (i >= 0) {
                classes.splice(i, 1);
            } else {
                classes.push(style.scrollLock);
            }
            /* istanbul ignore next */
            element.className = classes.join(' ');
        }
    };

    return (
        <header className={style.header}>
            <div className={classNames(style.blockHeader, { [style.fixed]: isOpen })}>
                <Logo src={logo} alt="logo" />
                <HamburgerMenuButton menuStatus={isOpen} handleMenuToggle={(e) => menuToggle(e)} />
            </div>

            <div className={classNames(style.contentMenuMobile, { [style.isOpen]: isOpen })}>
                <div className={style.blockItens}>
                    {MENU_ITEMS.map((item) => {
                        return (
                            <MenuItem
                                href={item.href}
                                isActive={item.href === currentPath}
                                key={item.label}
                            >
                                {item.label}
                            </MenuItem>
                        );
                    })}
                </div>
                <ProfileDropdownMobile
                    itens={PROFILE_DROPDOWN_ITEMS}
                    name={PROFILE.name}
                    currentPath={currentPath}
                />
            </div>

            <Menu className={classNames(style.menu)}>
                {MENU_ITEMS.map((item) => {
                    return (
                        <MenuItem
                            href={item.href}
                            isActive={item.href === currentPath}
                            key={item.label}
                        >
                            {item.label}
                        </MenuItem>
                    );
                })}
            </Menu>
            <ProfileDropdown itens={PROFILE_DROPDOWN_ITEMS} name={PROFILE.name} />
        </header>
    );
};

Header.propTypes = {
    currentPath: PropTypes.string,
};

Header.defaultProps = {
    currentPath: '/',
};

export default Header;

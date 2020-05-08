import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import style from '_molecules/ProfileDropdownMobile/index.module.scss';

const ProfileDropdownMobile = ({ name, itens, currentPath }) => {
    return (
        <div className={style.blockDropDownMobile}>
            <div className={classNames(style.trigger)}>
                <div className={classNames(style.name)}>{name}</div>
            </div>
            <div className={style.listLinks}>
                {itens.map((item) => {
                    return (
                        <Link
                            to={item.href}
                            key={item.href}
                            className={classNames(style.menuItem, {
                                [style.activeItem]: item.href === currentPath,
                            })}
                        >
                            {item.text}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

ProfileDropdownMobile.propTypes = {
    name: PropTypes.string,
    itens: PropTypes.arrayOf(PropTypes.object),
    currentPath: PropTypes.string,
};

ProfileDropdownMobile.defaultProps = {
    name: undefined,
    itens: '',
    currentPath: undefined,
};

export default ProfileDropdownMobile;

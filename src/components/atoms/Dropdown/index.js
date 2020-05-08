import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import style from '_atoms/Dropdown/index.module.scss';

const Dropdown = ({ itens }) => {
    return (
        <nav className={style.items}>
            <ul className={style.ul}>
                {itens.map((item) => (
                    <li className={style.navItem} key={item.text}>
                        <Link to={item.href} className={style.navLink}>
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Dropdown.propTypes = {
    itens: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Dropdown;

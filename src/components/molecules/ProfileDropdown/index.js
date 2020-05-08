import React, { Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import Dropdown from '_atoms/Dropdown';

import style from '_molecules/ProfileDropdown/index.module.scss';

class ProfileDropdown extends Component {
    constructor() {
        super();
        this.container = React.createRef();
        this.state = {
            isOpen: false,
        };

        this.handleProfileMenu = this.handleProfileMenu.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleProfileMenu() {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }));
    }

    handleClickOutside(e) {
        if (this.container.current && !this.container.current.contains(e.target)) {
            this.setState({ isOpen: false });
        }
    }

    render() {
        const { isOpen } = this.state;
        const { name, itens } = this.props;

        return (
            <div className={style.userSection} ref={this.container}>
                <div className={style.dropdown}>
                    <button className={style.button} type="button" onClick={this.handleProfileMenu}>
                        <div
                            className={className(style.trigger, { [style.triggerActive]: isOpen })}
                        >
                            <div className={style.name}>{name}</div>
                        </div>
                        {isOpen && <Dropdown itens={itens} />}
                    </button>
                </div>
            </div>
        );
    }
}

ProfileDropdown.propTypes = {
    name: PropTypes.string,
    itens: PropTypes.arrayOf(PropTypes.object),
};

ProfileDropdown.defaultProps = {
    itens: [],
    name: undefined,
};

export default ProfileDropdown;

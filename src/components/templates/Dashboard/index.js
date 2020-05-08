import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Header from '_organisms/Header';
import Heading, { LEVEL } from '_atoms/Heading';
import { useLocation } from 'react-router-dom';
import ArrowIcon, { TYPE, COLOR, BOX_COLOR } from '_atoms/ArrowIcon';

import style from '_templates/Dashboard/index.module.scss';

const goBack = () => {
    window.history.back();
};

const Dashboard = ({ title, children, linkBack }) => {
    const location = useLocation();

    return (
        <div className={classNames('wrapper')}>
            <div className={classNames('wrapperContent')}>
                <Header currentPath={location.pathname} />
                <div className={style.masterContent}>
                    {linkBack && (
                        <button className={style.button} type="button" onClick={goBack}>
                            <ArrowIcon
                                className={style.arrow}
                                type={TYPE.arrowLeft}
                                color={COLOR.secondary}
                                boxColor={BOX_COLOR.grey}
                                withBox
                            />
                        </button>
                    )}
                    {title && (
                        <Heading className={style.title} level={LEVEL.h1}>
                            {title}
                        </Heading>
                    )}
                    <section className={style.content}>{children}</section>
                </div>
            </div>
        </div>
    );
};

Dashboard.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    linkBack: PropTypes.bool,
};

Dashboard.defaultProps = {
    children: undefined,
    title: '',
    linkBack: false,
};

export default Dashboard;

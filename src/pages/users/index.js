import React from 'react';
import Dashboard from '_templates/Dashboard';
import { Link } from 'react-router-dom';

import style from '_pages/users/index.module.scss';

const Users = () => {
    return (
        <Dashboard title="Usuários">
            <div className="row">
                <div className="col-xl-4 col-md-6">
                    <Link to="/users/1">
                        <div className={style.card} />
                    </Link>
                </div>
                <div className="col-xl-4 col-md-6">
                    <Link to="/users/2">
                        <div className={style.card} />
                    </Link>
                </div>
                <div className="col-xl-4 col-md-6">
                    <Link to="/users/3">
                        <div className={style.card} />
                    </Link>
                </div>
                <div className="col-xl-4 col-md-6">
                    <Link to="/users/4">
                        <div className={style.card} />
                    </Link>
                </div>
                <div className="col-xl-4 col-md-6">
                    <Link to="/users/4">
                        <div className={style.card} />
                    </Link>
                </div>
                <div className="col-xl-4 col-md-6">
                    <Link to="/users/4">
                        <div className={style.card} />
                    </Link>
                </div>
                <div className="col-xl-4 col-md-6">
                    <Link to="/users/4">
                        <div className={style.card} />
                    </Link>
                </div>
                <div className="col-xl-4 col-md-6">
                    <Link to="/users/4">
                        <div className={style.card} />
                    </Link>
                </div>
            </div>
        </Dashboard>
    );
};

export default Users;

import React from 'react';
import Dashboard from '_templates/Dashboard';
import { useParams } from 'react-router-dom';

import style from '_pages/users/index.module.scss';

const User = () => {
    const { userId } = useParams();

    return (
        <Dashboard title={`Usuário ${userId}`} linkBack>
            <div className="row">
                <div className="col-xl-4 col-md-6">
                    <div className={style.card}>{userId}</div>
                </div>
            </div>
        </Dashboard>
    );
};

export default User;

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                /* defini true para sempre simular que o usuário está logado */
                /* futuramente criar função para fazer/verificar autenticação */
                true ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

PrivateRoute.defaultProps = {
    children: undefined,
};

export default PrivateRoute;

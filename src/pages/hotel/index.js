import React from 'react';
import Dashboard from '_templates/Dashboard';
import { useParams } from 'react-router-dom';

const Hotel = () => {
    const { city, uniqueId, state } = useParams();

    return <Dashboard title={`Página do Hotel ${uniqueId} - ${city}/${state}`} />;
};

export default Hotel;

import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Index from '_pages/index';

it('renders Index', () => {
    const { getByText } = render(
        <BrowserRouter>
            <Index />
        </BrowserRouter>
    );
    expect(getByText('Dashboard - home')).toBeInTheDocument();
});

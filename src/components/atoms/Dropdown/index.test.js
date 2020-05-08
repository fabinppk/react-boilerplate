import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Dropdown from '_atoms/Dropdown/index';

describe('Dropdown', () => {
    test('passing props', () => {
        const dropDownItens = [{ text: 'Home', href: '/page' }];
        const wrapper = mount(
            <BrowserRouter>
                <Dropdown itens={dropDownItens} />
            </BrowserRouter>
        );
        expect(wrapper.find('Dropdown').props().itens).toEqual(dropDownItens);
    });
});

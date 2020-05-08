import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import ProfileDropdownMobile from '_molecules/ProfileDropdownMobile/index';

describe('ProfileDropdown Mobile', () => {
    it('ProfileDropdown Mobile props', () => {
        const dropDownItens = [{ text: 'Home', href: '/home' }];
        const wrapper = mount(
            <BrowserRouter>
                <ProfileDropdownMobile itens={dropDownItens} />
            </BrowserRouter>
        );
        expect(wrapper.find('ProfileDropdownMobile').props().itens).toEqual(dropDownItens);
    });
});

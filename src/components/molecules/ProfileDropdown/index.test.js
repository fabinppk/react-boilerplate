import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import ProfileDropdown from '_molecules/ProfileDropdown/index';

describe('Profile Dropdown Menu', () => {
    it('add eventlistener when mount', () => {
        const el = document.createElement('div');
        const map = {};
        document.addEventListener = jest.fn((e, cb) => {
            map[e] = cb;
        });
        mount(
            <BrowserRouter>
                <ProfileDropdown />
            </BrowserRouter>
        );
        map.mousedown(el);
    });

    it('remove eventlistener when umount', () => {
        const el = document.createElement('div');
        const map = {};
        document.addEventListener = jest.fn((e, cb) => {
            map[e] = cb;
        });
        const wrapper = mount(
            <BrowserRouter>
                <ProfileDropdown />
            </BrowserRouter>
        );

        wrapper.unmount();
        map.mousedown(el);
        expect(wrapper).toHaveLength(0);
    });

    it('click handleProfileMenu', () => {
        const wrapper = mount(
            <BrowserRouter>
                <ProfileDropdown />
            </BrowserRouter>
        );
        const handleProfileMenu = jest.fn(wrapper.find('button').prop('onClick'));
        handleProfileMenu();
        expect(handleProfileMenu).toBeCalled();
        expect(wrapper.find('ProfileDropdown').state('isOpen')).toBe(true);
    });
});

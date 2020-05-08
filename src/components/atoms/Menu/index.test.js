import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Menu, { MenuItem } from '_atoms/Menu/index';
import { MENU_ITEMS } from '_config/settings';

describe('Menu', () => {
    it('Menu default rendered', () => {
        const wrapper = mount(
            <BrowserRouter>
                <Menu>{[<div key={1}>Children Node</div>]}</Menu>
            </BrowserRouter>
        );
        const { children } = wrapper.find('nav div').props();
        const { className } = wrapper.find('nav').props();
        expect(className).toBe('menu');
        expect(children).toBe('Children Node');
    });
    it('Menu with MenuItem default rendered', () => {
        const wrapper = mount(
            <BrowserRouter>
                <Menu>
                    {MENU_ITEMS.map((item) => (
                        <MenuItem href={item.href} isActive={item.href === '/'} key={item.label}>
                            {item.label}
                        </MenuItem>
                    ))}
                </Menu>
            </BrowserRouter>
        );
        const NumberMenuItem = wrapper.find('MenuItem').length;
        const { href, isActive, children } = wrapper.find('MenuItem').get(0).props;
        expect(NumberMenuItem).toBe(4);
        expect(href).toBe('/dashboard');
        expect(isActive).toBe(false);
        expect(children).toBe('Dashboard');
    });
    it('MenuItem default rendered', () => {
        const wrapper = mount(
            <BrowserRouter>
                <MenuItem href="href" isActive key={1}>
                    Label
                </MenuItem>
            </BrowserRouter>
        );
        const { href } = wrapper.get(0).props;
        const { className } = wrapper.find('a').props();
        expect(href).toBe(href);
        expect(className).toBe('menuItem activeItem');
    });
});

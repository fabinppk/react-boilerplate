import Heading, { LEVEL } from '_atoms/Heading/index';
import React from 'react';
import { shallow } from 'enzyme';

describe('Heading', () => {
    test('Heading h1 rendered', () => {
        const wrapper = shallow(<Heading level={LEVEL.h1}>h1. SBTUR heading</Heading>);
        expect(wrapper.get(0).type).toBe('h1');
        expect(wrapper.matchesElement(<h1>{wrapper.get(0).props.children}</h1>)).toEqual(true);
    });
    test('Heading h2 rendered', () => {
        const wrapper = shallow(<Heading level={LEVEL.h2}>h2. SBTUR heading</Heading>);
        expect(wrapper.get(0).type).toBe('h2');
        expect(wrapper.matchesElement(<h2>{wrapper.get(0).props.children}</h2>)).toEqual(true);
    });
    test('Heading h3 rendered', () => {
        const wrapper = shallow(<Heading level={LEVEL.h3}>h3. SBTUR heading</Heading>);
        expect(wrapper.get(0).type).toBe('h3');
        expect(wrapper.matchesElement(<h3>{wrapper.get(0).props.children}</h3>)).toEqual(true);
    });
    test('Heading h4 rendered', () => {
        const wrapper = shallow(<Heading level={LEVEL.h4}>h4. SBTUR heading</Heading>);
        expect(wrapper.get(0).type).toBe('h4');
        expect(wrapper.matchesElement(<h4>{wrapper.get(0).props.children}</h4>)).toEqual(true);
    });
    test('Heading h5 rendered', () => {
        const wrapper = shallow(<Heading level={LEVEL.h5}>h5. SBTUR heading</Heading>);
        expect(wrapper.get(0).type).toBe('h5');
        expect(wrapper.matchesElement(<h5>{wrapper.get(0).props.children}</h5>)).toEqual(true);
    });
    test('Heading h6 rendered', () => {
        const wrapper = shallow(<Heading level={LEVEL.h6}>h6. SBTUR heading</Heading>);
        expect(wrapper.get(0).type).toBe('h6');
        expect(wrapper.matchesElement(<h6>{wrapper.get(0).props.children}</h6>)).toEqual(true);
    });
});

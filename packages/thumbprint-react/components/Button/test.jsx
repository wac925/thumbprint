import React from 'react';
import { mount } from 'enzyme';
import Button, { TextButton } from './index';

test('renders children passed in', () => {
    const testComponent = Component => {
        const wrapper = mount(<Component>Goose</Component>);
        expect(wrapper.text()).toEqual('Goose');
        expect(wrapper).toMatchSnapshot();
    };

    testComponent(Button);
    testComponent(TextButton);
});

test('renders button of type `button` by default', () => {
    const testComponent = Component => {
        const wrapper = mount(<Component>Goose</Component>);
        expect(wrapper.find('button').prop('type')).toEqual('button');
        expect(wrapper).toMatchSnapshot();
    };

    testComponent(Button);
    testComponent(TextButton);
});

test('renders button of type `submit` when `type` is set', () => {
    const testComponent = Component => {
        const wrapper = mount(<Component type="submit">Goose</Component>);
        expect(wrapper.find('button').prop('type')).toEqual('submit');
        expect(wrapper).toMatchSnapshot();
    };

    testComponent(Button);
    testComponent(TextButton);
});

test('`onClick` runs when button is clicked on', () => {
    const testComponent = Component => {
        const onClick = jest.fn();
        const wrapper = mount(<Component onClick={onClick}>Goose</Component>);

        expect(onClick).toHaveBeenCalledTimes(0);
        wrapper.simulate('click');
        expect(onClick).toHaveBeenCalledTimes(1);
    };

    testComponent(Button);
    testComponent(TextButton);
});

test('`onClick` runs when button is clicked on', () => {
    const testComponent = Component => {
        const onClick = jest.fn();
        const wrapper = mount(<Component onClick={onClick}>Goose</Component>);

        expect(onClick).toHaveBeenCalledTimes(0);
        wrapper.simulate('click');
        expect(onClick).toHaveBeenCalledTimes(1);
    };

    testComponent(Button);
    testComponent(TextButton);
});

test('renders icon that is passed in', () => {
    const wrapper = mount(<Button icon={<svg>Duck</svg>}>Goose</Button>);
    expect(wrapper.find('svg')).toHaveLength(1);
    expect(wrapper.text()).toBe('DuckGoose');
    expect(wrapper).toMatchSnapshot();
});

test('adds `dataTest` prop', () => {
    const wrapperA = mount(<Button dataTest="Duck">Goose</Button>);
    expect(wrapperA.find('button').prop('data-test')).toEqual('Duck');
    expect(wrapperA).toMatchSnapshot();

    const wrapperB = mount(<TextButton dataTest="Duck">Goose</TextButton>);
    expect(wrapperB.find('button').prop('data-test')).toEqual('Duck');
    expect(wrapperB).toMatchSnapshot();
});

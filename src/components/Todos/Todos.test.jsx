import React from 'react';
import { shallow, configure } from 'enzyme';
import Todos from './Todos';
import Todo from './Todo/Todo';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

configure({ adapter: new Adapter() });

describe('Suite of tests for <Todos />', () => {
    beforeEach(() => {
        //const wrapper = shallow(<Todos />);
    });

    it('Render at least 1 Todo', () => {
        const wrapper = shallow(<Todos />);
        expect(wrapper.find(Todo)).to.have.lengthOf(1);
    });
});
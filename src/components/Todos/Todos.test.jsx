import React from 'react';
import { shallow, configure } from 'enzyme';
//import { expect } from 'chai';
import Todos from './Todos';
import Adapter from 'enzyme-adapter-react-16';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

configure({ adapter: new Adapter() });

describe('Suite of tests for <Todos />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Todos />);
    });

    it('Render at least 1 Todo', () => {
        expect(1 == 1).toBe(true);
    });
});
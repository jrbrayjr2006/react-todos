import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoForm from './TodoForm';


configure({ adapter: new Adapter() });

describe('<TodoForm', () => {
    it('render sub-components', () => {
        //TODO
    });
});
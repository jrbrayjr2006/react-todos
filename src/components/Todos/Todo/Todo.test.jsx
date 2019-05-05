import React from 'react';
import { shallow, configure } from 'enzyme';
import Todos from './Todo';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Todo />', () => {
    it('renders text', () => {
        //
    });
});
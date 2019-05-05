import React from 'react';
import { shallow, configure } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';
import Todos from './components/Todos/Todos';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import TodoForm from './components/TodoForm/TodoForm';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<App /> components rendered', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('renders TodoForm', () => {
    expect(wrapper.find(TodoForm)).to.be.lengthOf(1);
  });
  it('renders Todos', () => {
    expect(wrapper.find(Todos)).to.be.lengthOf(1);
  });
});

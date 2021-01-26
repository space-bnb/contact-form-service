// import { TestScheduler } from 'jest';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });



import React from 'react';
import renderer from 'react-test-renderer';
import GetInTouchForm from '../Components/GetInTouchForm';
import { shallow } from 'enzyme';
import sinon from 'sinon';

test('Form loads correctly', () => {
  const component = renderer.create(
    <GetInTouchForm />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});

test('form fields work properly', () => {

  const wrapper = shallow(<GetInTouchForm />);
  const onButtonClick = sinon.spy(function() {});

  const items = wrapper.find('div.form-item')
  expect(items.length).toEqual(5);

  wrapper.find('label').at(0).simulate('click');
  wrapper.find('label').at(1).simulate('click');
  const firstNameError = wrapper.find('div.error-message');
  expect(firstNameError).to.not.have.property('hidden');

});
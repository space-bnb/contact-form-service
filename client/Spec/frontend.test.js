import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import renderer from 'react-test-renderer';
import GetInTouchForm from '../Components/GetInTouchForm';
import { shallow } from 'enzyme';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

describe('Get In Touch Form', () => {


  test('Form loads correctly', () => {
    const component = renderer.create(
      <GetInTouchForm />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

  });

  test('form fields work properly', () => {

    const wrapper = shallow(<GetInTouchForm />);

    const items = wrapper.find('div.form-item')
    expect(items.length).toEqual(5);

  });

})

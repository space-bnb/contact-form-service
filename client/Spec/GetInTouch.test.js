import { TestScheduler } from 'jest';
import React from 'react';
import renderer from 'react-test-renderer';
import GetInTouchForm from '../Components/GetInTouchForm';

test('We have a form!', () => {
  const component = renderer.create(
    <GetInTouchForm />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

})
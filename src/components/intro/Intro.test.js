import React from 'react';
import renderer from 'react-test-renderer';
import Intro from './Intro'

describe("Introduction component", () => {
  test("Matches the snapshot", () => {
    const component = renderer.create(<Intro />).toJSON()
    expect(component).toMatchSnapshot();
  });
});
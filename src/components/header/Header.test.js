import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header'

describe("Header component", () => {
  test("Matches the snapshot", () => {
    const header = renderer.create(<Header />).toJSON()
    expect(header).toMatchSnapshot();
  });
});
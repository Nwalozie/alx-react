import { render } from '@testing-library/react';
import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';

test('Notifications renders without crashing', () => {
  render(<Notifications />);
});

test('Notifications renders three list items', () => {
    const {getAllByRole} = render(<Notifications />);
    const listItems = getAllByRole('listitem');
    expect(listItems.length).toBe(3);
});

test('Notifications renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    const textContent = wrapper.text();
    expect(textContent).toContain('Here is the list of notifications');
  });
  
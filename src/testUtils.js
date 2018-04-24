import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider } from 'react-apollo/test-utils';

export function mountWithContext(cmp, { routes = [] }) {
  return mount(
    <MockedProvider>
      <MemoryRouter initialEntries={routes}>{cmp}</MemoryRouter>
    </MockedProvider>
  );
}

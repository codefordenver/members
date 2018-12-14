import React from 'react';
import { mountWithContext } from '../../../testUtils';
import { fireEvent, getByLabelText } from 'react-testing-library';
import ProjectCreatePage from '../ProjectCreatePage';
import { mockAdminUser } from '../../../mocks/localStorageMock';

beforeEach(mockAdminUser);

function updateTextInput(container, labelText, value) {
  const headerImageInput = getByLabelText(
    container,
    labelText
  ) as HTMLInputElement;
  fireEvent.change(headerImageInput, { target: { value } });
  return headerImageInput;
}

describe('when filling out the form', () => {
  it('updates the header image properly', () => {
    const { container } = mountWithContext(<ProjectCreatePage />);
    const input = updateTextInput(
      container,
      'Header image',
      'https://some.image.url'
    );
    expect(input.value).toBe('https://some.image.url');
  });

  it('updates the title properly', () => {
    const { container } = mountWithContext(<ProjectCreatePage />);
    const input = updateTextInput(container, 'Title', 'The Title');
    expect(input.value).toBe('The Title');
  });

  it('updates the description properly', () => {
    const { container } = mountWithContext(<ProjectCreatePage />);
    const input = updateTextInput(container, 'Description', 'The Description');
    expect(input.value).toBe('The Description');
  });

  it('updates the project champions properly', () => {
    // TODO
  });

  it('updates the skills needed properly', () => {
    // TODO
  });
});

describe('when creating a new project', () => {
  beforeEach(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    const { container, getByText } = mountWithContext(<ProjectCreatePage />);
    updateTextInput(container, 'Header image', 'https://some.image.url');
    const createBtn = getByText('Create');
    fireEvent.click(createBtn);
  });

  it('shows a processing icon while waiting for a response', () => {});

  it('calls a mutation to create a new project', () => {});

  it('navigates to the view page of the project', () => {});
});

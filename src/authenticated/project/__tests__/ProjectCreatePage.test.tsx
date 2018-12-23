import React from 'react';
import { mountWithContext } from '../../../testUtils';
import { fireEvent, getByLabelText, wait } from 'react-testing-library';
import ProjectCreatePage from '../ProjectCreatePage';
import { mockAdminUser } from '../../../mocks/localStorageMock';
import {
  EditableProjectsListDocument,
  EditableUsersListDocument
} from '../../../generated-models';

beforeEach(mockAdminUser);

function updateTextInput(
  container: HTMLElement,
  labelText: string,
  value: string
) {
  const headerImageInput = getByLabelText(
    container,
    labelText
  ) as HTMLInputElement;
  fireEvent.change(headerImageInput, { target: { value } });
  return headerImageInput;
}

let queryMocks = [
  {
    request: {
      query: EditableProjectsListDocument,
      variables: {}
    },
    result: {
      data: {
        allProjects: [
          {
            id: '1',
            name: 'Project 1'
          }
        ]
      }
    }
  },
  {
    request: {
      query: EditableUsersListDocument,
      variables: {}
    },
    result: {
      data: {
        allUsers: [
          {
            id: '1',
            name: 'User 1'
          }
        ]
      }
    }
  }
];

for (let i = 0; i < 10; i++) {
  queryMocks = queryMocks.concat(queryMocks);
}

function renderProjectCreatePage() {
  return mountWithContext(<ProjectCreatePage />, {}, queryMocks);
}

describe('when filling out the form', () => {
  it('updates the header image properly', () => {
    const { container } = renderProjectCreatePage();
    const input = updateTextInput(
      container,
      'Header image',
      'https://some.image.url'
    );
    expect(input.value).toBe('https://some.image.url');
  });

  it('updates the title properly', () => {
    const { container } = renderProjectCreatePage();
    const input = updateTextInput(container, 'Title', 'The Title');
    expect(input.value).toBe('The Title');
  });

  it('updates the description properly', () => {
    const { container } = renderProjectCreatePage();
    const input = updateTextInput(container, 'Description', 'The Description');
    expect(input.value).toBe('The Description');
  });

  it('updates the project champions properly', async () => {
    const {
      baseElement,
      debug,
      queryByText,
      getByLabelText
    } = mountWithContext(<ProjectCreatePage />);
    await wait(() =>
      expect(queryByText(/loading\.\.\./i)).not.toBeInTheDocument()
    );
    const championsSelect = getByLabelText('Add Champion');
    fireEvent.keyDown(championsSelect, {
      code: 'Space',
      key: ' ',
      keyCode: 32
    });
    fireEvent.keyDown(championsSelect, {
      code: 'Enter',
      key: 'Enter',
      keyCode: 13
    });

    expect(1).toBe(2);
  });

  it('updates the skills needed properly', () => {
    // TODO
  });
});

describe('when creating a new project', () => {
  beforeEach(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    const { container, getByText } = renderProjectCreatePage();
    updateTextInput(container, 'Header image', 'https://some.image.url');
    const createBtn = getByText('Create');
    fireEvent.click(createBtn);
  });

  it('shows a processing icon while waiting for a response', () => {});

  it('calls a mutation to create a new project', () => {});

  it('navigates to the view page of the project', () => {});
});

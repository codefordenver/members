import React from 'react';
import { MemoryHistory } from 'history';
import {
  mountWithContext,
  fireEvent,
  wait,
  waitForElement,
  getQueries,
  createHistory
} from '../../../testUtils';
import ProjectCreatePage, { CREATE_PROJECT } from '../ProjectCreatePage';
import { EDITABLE_USERS } from '../../../forms/EditableUsers';
import { EDITABLE_SKILLS } from '../../../forms/EditableSkills';
import { mockAdminUser } from '../../../mocks/localStorageMock';

const {
  updateTextInput,
  queryByText,
  getByText,
  getByLabelText,
  getButtonByText
} = getQueries();

beforeEach(mockAdminUser);

let queryMocks = [
  {
    request: {
      query: EDITABLE_USERS,
      variables: {}
    },
    result: {
      data: {
        allUsers: [
          {
            __typename: 'USER',
            id: 'user-1',
            name: 'User 1'
          }
        ]
      }
    }
  },
  {
    request: {
      query: EDITABLE_SKILLS,
      variables: {}
    },
    result: {
      data: {
        allSkills: [
          {
            __typename: 'SKILL',
            id: 'skill-1',
            name: 'Skill 1'
          }
        ]
      }
    }
  },
  {
    request: {
      query: CREATE_PROJECT,
      variables: {
        name: 'Test Project Title',
        headerImage: 'https://some.image.url',
        description: 'The Description',
        repoName: 'gitrepo',
        boardUrl: 'exampleBoardUrl',
        skillsIds: ['skill-1'],
        championsIds: ['user-1'],
        status: 'Idea'
      }
    },
    result: {
      data: {
        createProject: {
          __typename: 'PROJECT',
          id: 'project-1',
          name: 'Test Project Title',
          headerImage: 'https://some.image.url',
          description: 'The Description',
          repoName: 'gitrepo',
          boardUrl: 'exampleBoardUrl',
          status: 'Idea',
          skills: [
            {
              __typename: 'SKILL',
              id: 'skill-1',
              name: 'Skill 1'
            }
          ],
          champions: [
            {
              __typename: 'USER',
              id: 'user-1',
              name: 'User 1'
            }
          ]
        }
      }
    }
  },
  // For refetched data
  {
    request: {
      query: EDITABLE_USERS,
      variables: {}
    },
    result: {
      data: {
        allUsers: [
          {
            __typename: 'USER',
            id: 'user-1',
            name: 'User 1'
          }
        ]
      }
    }
  }
];

function selectFirstItem(select: HTMLElement) {
  fireEvent.keyDown(select, {
    code: 'Space',
    key: ' ',
    keyCode: 32
  });
  fireEvent.keyDown(select, {
    code: 'Enter',
    key: 'Enter',
    keyCode: 13
  });
}

function renderProjectCreatePage(history?: MemoryHistory) {
  return mountWithContext(
    <ProjectCreatePage />,
    { routes: ['/projects/create'] },
    queryMocks,
    history
  );
}

describe('when filling out the form', () => {
  it('updates the header image properly', () => {
    renderProjectCreatePage();
    const input = updateTextInput('Header image', 'https://some.image.url');
    expect(input.value).toBe('https://some.image.url');
  });

  it('updates the title properly', () => {
    renderProjectCreatePage();
    const input = updateTextInput('Title', 'The Title');
    expect(input.value).toBe('The Title');
  });

  it('updates the description properly', () => {
    renderProjectCreatePage();
    const input = updateTextInput('Description', 'The Description');
    expect(input.value).toBe('The Description');
  });

  it('updates the project champions properly', async () => {
    renderProjectCreatePage();
    await wait(() =>
      expect(queryByText(/loading\.\.\./i)).not.toBeInTheDocument()
    );
    selectFirstItem(getByLabelText('Add Champion'));

    await waitForElement(() => getByText('User 1'));

    expect(getByText('User 1')).toBeInTheDocument();
  });

  it('updates the skills needed properly', async () => {
    const {
      queryByText,
      getByText,
      getByLabelText
    } = renderProjectCreatePage();
    await wait(() =>
      expect(queryByText(/loading\.\.\./i)).not.toBeInTheDocument()
    );
    selectFirstItem(getByLabelText('Add Skill'));

    await waitForElement(() => getByText('Skill 1'));

    expect(getByText('Skill 1')).toBeInTheDocument();
  });
});

describe('when creating a new project', () => {
  let history: MemoryHistory;

  beforeEach(async () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    history = createHistory({ initialEntries: ['/projects/create'] });

    renderProjectCreatePage(history);
    updateTextInput('Header image', 'https://some.image.url');
    updateTextInput('Title', 'Test Project Title');
    updateTextInput('Description', 'The Description');
    updateTextInput('GitHub Repository Name', 'gitrepo');
    updateTextInput('Project Board URL', 'exampleBoardUrl');
    await wait(() =>
      expect(queryByText(/loading\.\.\./i)).not.toBeInTheDocument()
    );
    selectFirstItem(getByLabelText('Add Champion'));
    selectFirstItem(getByLabelText('Add Skill'));

    await waitForElement(() => getByText('Skill 1'));
    await waitForElement(() => getByText('User 1'));
  });

  it('disables the create button while waiting for a response', () => {
    const createBtn = getButtonByText('Create');
    fireEvent.click(createBtn);
    expect(createBtn).toBeDisabled();
  });

  it('navigates to the base projects page', async () => {
    const createBtn = getButtonByText('Create');
    fireEvent.click(createBtn);
    await wait(() => expect(history.location.pathname).toBe('/projects'));
  });
});

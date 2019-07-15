export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export enum _ModelMutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

/** Meta information about the query. */
export type _QueryMeta = {
  __typename?: '_QueryMeta';
  count: Scalars['Int'];
};

export type AddToProjectChampionsPayload = {
  __typename?: 'AddToProjectChampionsPayload';
  championsUser?: Maybe<User>;
  projectsChampionedProject?: Maybe<Project>;
};

export type AddToProjectSkillsPayload = {
  __typename?: 'AddToProjectSkillsPayload';
  projectsWithSkillProject?: Maybe<Project>;
  skillsSkill?: Maybe<Skill>;
};

export type AddToUserSkillsPayload = {
  __typename?: 'AddToUserSkillsPayload';
  usersWithSkillUser?: Maybe<User>;
  skillsSkill?: Maybe<Skill>;
};

/** AuthenticateUserPayload */
export type AuthenticateUserPayload = {
  __typename?: 'AuthenticateUserPayload';
  id: Scalars['String'];
  token: Scalars['String'];
};

export type CreateProject = {
  boardUrl?: Maybe<Scalars['String']>;
  cfapiProjectId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  headerImage?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  repoName?: Maybe<Scalars['String']>;
  status?: Maybe<ProjectStatus>;
  championsIds?: Maybe<Array<Scalars['ID']>>;
  champions?: Maybe<Array<ProjectchampionsUser>>;
  skillsIds?: Maybe<Array<Scalars['ID']>>;
  skills?: Maybe<Array<ProjectskillsSkill>>;
};

export type CreateSkill = {
  name: Scalars['String'];
  projectsWithSkillIds?: Maybe<Array<Scalars['ID']>>;
  projectsWithSkill?: Maybe<Array<SkillprojectsWithSkillProject>>;
  usersWithSkillIds?: Maybe<Array<Scalars['ID']>>;
  usersWithSkill?: Maybe<Array<SkillusersWithSkillUser>>;
};

export type CreateUser = {
  auth0UserId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  flowdockName?: Maybe<Scalars['String']>;
  githubName?: Maybe<Scalars['String']>;
  hasCompletedWizard?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
  projectsChampionedIds?: Maybe<Array<Scalars['ID']>>;
  projectsChampioned?: Maybe<Array<UserprojectsChampionedProject>>;
  skillsIds?: Maybe<Array<Scalars['ID']>>;
  skills?: Maybe<Array<UserskillsSkill>>;
};

export type InvokeFunctionInput = {
  name: Scalars['String'];
  input: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type InvokeFunctionPayload = {
  __typename?: 'InvokeFunctionPayload';
  result: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createProject?: Maybe<Project>;
  createSkill?: Maybe<Skill>;
  updateProject?: Maybe<Project>;
  updateSkill?: Maybe<Skill>;
  updateUser?: Maybe<User>;
  updateOrCreateProject?: Maybe<Project>;
  updateOrCreateSkill?: Maybe<Skill>;
  updateOrCreateUser?: Maybe<User>;
  deleteProject?: Maybe<Project>;
  deleteSkill?: Maybe<Skill>;
  deleteUser?: Maybe<User>;
  addToProjectChampions?: Maybe<AddToProjectChampionsPayload>;
  addToProjectSkills?: Maybe<AddToProjectSkillsPayload>;
  addToUserSkills?: Maybe<AddToUserSkillsPayload>;
  removeFromProjectChampions?: Maybe<RemoveFromProjectChampionsPayload>;
  removeFromProjectSkills?: Maybe<RemoveFromProjectSkillsPayload>;
  removeFromUserSkills?: Maybe<RemoveFromUserSkillsPayload>;
  createUser?: Maybe<User>;
  /** authenticate */
  authenticateUser: AuthenticateUserPayload;
  invokeFunction?: Maybe<InvokeFunctionPayload>;
};

export type MutationCreateProjectArgs = {
  boardUrl?: Maybe<Scalars['String']>;
  cfapiProjectId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  headerImage?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  repoName?: Maybe<Scalars['String']>;
  status?: Maybe<ProjectStatus>;
  championsIds?: Maybe<Array<Scalars['ID']>>;
  champions?: Maybe<Array<ProjectchampionsUser>>;
  skillsIds?: Maybe<Array<Scalars['ID']>>;
  skills?: Maybe<Array<ProjectskillsSkill>>;
};

export type MutationCreateSkillArgs = {
  name: Scalars['String'];
  projectsWithSkillIds?: Maybe<Array<Scalars['ID']>>;
  projectsWithSkill?: Maybe<Array<SkillprojectsWithSkillProject>>;
  usersWithSkillIds?: Maybe<Array<Scalars['ID']>>;
  usersWithSkill?: Maybe<Array<SkillusersWithSkillUser>>;
};

export type MutationUpdateProjectArgs = {
  boardUrl?: Maybe<Scalars['String']>;
  cfapiProjectId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  headerImage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  repoName?: Maybe<Scalars['String']>;
  status?: Maybe<ProjectStatus>;
  championsIds?: Maybe<Array<Scalars['ID']>>;
  champions?: Maybe<Array<ProjectchampionsUser>>;
  skillsIds?: Maybe<Array<Scalars['ID']>>;
  skills?: Maybe<Array<ProjectskillsSkill>>;
};

export type MutationUpdateSkillArgs = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  projectsWithSkillIds?: Maybe<Array<Scalars['ID']>>;
  projectsWithSkill?: Maybe<Array<SkillprojectsWithSkillProject>>;
  usersWithSkillIds?: Maybe<Array<Scalars['ID']>>;
  usersWithSkill?: Maybe<Array<SkillusersWithSkillUser>>;
};

export type MutationUpdateUserArgs = {
  auth0UserId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  flowdockName?: Maybe<Scalars['String']>;
  githubName?: Maybe<Scalars['String']>;
  hasCompletedWizard?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
  projectsChampionedIds?: Maybe<Array<Scalars['ID']>>;
  projectsChampioned?: Maybe<Array<UserprojectsChampionedProject>>;
  skillsIds?: Maybe<Array<Scalars['ID']>>;
  skills?: Maybe<Array<UserskillsSkill>>;
};

export type MutationUpdateOrCreateProjectArgs = {
  update: UpdateProject;
  create: CreateProject;
};

export type MutationUpdateOrCreateSkillArgs = {
  update: UpdateSkill;
  create: CreateSkill;
};

export type MutationUpdateOrCreateUserArgs = {
  update: UpdateUser;
  create: CreateUser;
};

export type MutationDeleteProjectArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteSkillArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};

export type MutationAddToProjectChampionsArgs = {
  projectsChampionedProjectId: Scalars['ID'];
  championsUserId: Scalars['ID'];
};

export type MutationAddToProjectSkillsArgs = {
  skillsSkillId: Scalars['ID'];
  projectsWithSkillProjectId: Scalars['ID'];
};

export type MutationAddToUserSkillsArgs = {
  skillsSkillId: Scalars['ID'];
  usersWithSkillUserId: Scalars['ID'];
};

export type MutationRemoveFromProjectChampionsArgs = {
  projectsChampionedProjectId: Scalars['ID'];
  championsUserId: Scalars['ID'];
};

export type MutationRemoveFromProjectSkillsArgs = {
  skillsSkillId: Scalars['ID'];
  projectsWithSkillProjectId: Scalars['ID'];
};

export type MutationRemoveFromUserSkillsArgs = {
  skillsSkillId: Scalars['ID'];
  usersWithSkillUserId: Scalars['ID'];
};

export type MutationCreateUserArgs = {
  auth0UserId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  flowdockName?: Maybe<Scalars['String']>;
  githubName?: Maybe<Scalars['String']>;
  hasCompletedWizard?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
  projectsChampionedIds?: Maybe<Array<Scalars['ID']>>;
  projectsChampioned?: Maybe<Array<UserprojectsChampionedProject>>;
  skillsIds?: Maybe<Array<Scalars['ID']>>;
  skills?: Maybe<Array<UserskillsSkill>>;
};

export type MutationAuthenticateUserArgs = {
  accessToken: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  picture: Scalars['String'];
};

export type MutationInvokeFunctionArgs = {
  input: InvokeFunctionInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
};

export type Project = Node & {
  __typename?: 'Project';
  boardUrl?: Maybe<Scalars['String']>;
  cfapiProjectId?: Maybe<Scalars['String']>;
  champions?: Maybe<Array<User>>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  headerImage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  repoName?: Maybe<Scalars['String']>;
  skills?: Maybe<Array<Skill>>;
  status?: Maybe<ProjectStatus>;
  updatedAt: Scalars['DateTime'];
  /** Meta information about the query. */
  _championsMeta: _QueryMeta;
  /** Meta information about the query. */
  _skillsMeta: _QueryMeta;
};

export type ProjectChampionsArgs = {
  filter?: Maybe<UserFilter>;
  orderBy?: Maybe<UserOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ProjectSkillsArgs = {
  filter?: Maybe<SkillFilter>;
  orderBy?: Maybe<SkillOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Project_ChampionsMetaArgs = {
  filter?: Maybe<UserFilter>;
  orderBy?: Maybe<UserOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Project_SkillsMetaArgs = {
  filter?: Maybe<SkillFilter>;
  orderBy?: Maybe<SkillOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ProjectchampionsUser = {
  auth0UserId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  flowdockName?: Maybe<Scalars['String']>;
  githubName?: Maybe<Scalars['String']>;
  hasCompletedWizard?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
  projectsChampionedIds?: Maybe<Array<Scalars['ID']>>;
  projectsChampioned?: Maybe<Array<UserprojectsChampionedProject>>;
  skillsIds?: Maybe<Array<Scalars['ID']>>;
  skills?: Maybe<Array<UserskillsSkill>>;
};

export type ProjectFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProjectFilter>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProjectFilter>>;
  boardUrl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  boardUrl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  boardUrl_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  boardUrl_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  boardUrl_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  boardUrl_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  boardUrl_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  boardUrl_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  boardUrl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  boardUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  boardUrl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  boardUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  boardUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  boardUrl_not_ends_with?: Maybe<Scalars['String']>;
  cfapiProjectId?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  cfapiProjectId_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  cfapiProjectId_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  cfapiProjectId_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  cfapiProjectId_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  cfapiProjectId_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  cfapiProjectId_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  cfapiProjectId_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  cfapiProjectId_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  cfapiProjectId_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  cfapiProjectId_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  cfapiProjectId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  cfapiProjectId_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  cfapiProjectId_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>;
  headerImage?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  headerImage_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  headerImage_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  headerImage_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  headerImage_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  headerImage_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  headerImage_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  headerImage_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  headerImage_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  headerImage_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  headerImage_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  headerImage_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  headerImage_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  headerImage_not_ends_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  repoName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  repoName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  repoName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  repoName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  repoName_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  repoName_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  repoName_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  repoName_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  repoName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  repoName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  repoName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  repoName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  repoName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  repoName_not_ends_with?: Maybe<Scalars['String']>;
  status?: Maybe<ProjectStatus>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<ProjectStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<ProjectStatus>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<ProjectStatus>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  champions_every?: Maybe<UserFilter>;
  champions_some?: Maybe<UserFilter>;
  champions_none?: Maybe<UserFilter>;
  skills_every?: Maybe<SkillFilter>;
  skills_some?: Maybe<SkillFilter>;
  skills_none?: Maybe<SkillFilter>;
};

export enum ProjectOrderBy {
  BoardUrlAsc = 'boardUrl_ASC',
  BoardUrlDesc = 'boardUrl_DESC',
  CfapiProjectIdAsc = 'cfapiProjectId_ASC',
  CfapiProjectIdDesc = 'cfapiProjectId_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  HeaderImageAsc = 'headerImage_ASC',
  HeaderImageDesc = 'headerImage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RepoNameAsc = 'repoName_ASC',
  RepoNameDesc = 'repoName_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ProjectPreviousValues = {
  __typename?: 'ProjectPreviousValues';
  boardUrl?: Maybe<Scalars['String']>;
  cfapiProjectId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  headerImage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  repoName?: Maybe<Scalars['String']>;
  status?: Maybe<ProjectStatus>;
  updatedAt: Scalars['DateTime'];
};

export type ProjectskillsSkill = {
  name: Scalars['String'];
  projectsWithSkillIds?: Maybe<Array<Scalars['ID']>>;
  projectsWithSkill?: Maybe<Array<SkillprojectsWithSkillProject>>;
  usersWithSkillIds?: Maybe<Array<Scalars['ID']>>;
  usersWithSkill?: Maybe<Array<SkillusersWithSkillUser>>;
};

export enum ProjectStatus {
  Idea = 'Idea',
  Pitch = 'Pitch',
  Exploration = 'Exploration',
  ActiveDevelopment = 'ActiveDevelopment',
  Support = 'Support',
  Inactive = 'Inactive'
}

export type ProjectSubscriptionFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProjectSubscriptionFilter>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProjectSubscriptionFilter>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<_ModelMutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<ProjectSubscriptionFilterNode>;
};

export type ProjectSubscriptionFilterNode = {
  boardUrl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  boardUrl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  boardUrl_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  boardUrl_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  boardUrl_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  boardUrl_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  boardUrl_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  boardUrl_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  boardUrl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  boardUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  boardUrl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  boardUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  boardUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  boardUrl_not_ends_with?: Maybe<Scalars['String']>;
  cfapiProjectId?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  cfapiProjectId_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  cfapiProjectId_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  cfapiProjectId_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  cfapiProjectId_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  cfapiProjectId_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  cfapiProjectId_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  cfapiProjectId_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  cfapiProjectId_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  cfapiProjectId_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  cfapiProjectId_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  cfapiProjectId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  cfapiProjectId_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  cfapiProjectId_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>;
  headerImage?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  headerImage_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  headerImage_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  headerImage_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  headerImage_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  headerImage_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  headerImage_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  headerImage_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  headerImage_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  headerImage_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  headerImage_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  headerImage_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  headerImage_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  headerImage_not_ends_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  repoName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  repoName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  repoName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  repoName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  repoName_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  repoName_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  repoName_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  repoName_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  repoName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  repoName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  repoName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  repoName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  repoName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  repoName_not_ends_with?: Maybe<Scalars['String']>;
  status?: Maybe<ProjectStatus>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<ProjectStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<ProjectStatus>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<ProjectStatus>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  champions_every?: Maybe<UserFilter>;
  champions_some?: Maybe<UserFilter>;
  champions_none?: Maybe<UserFilter>;
  skills_every?: Maybe<SkillFilter>;
  skills_some?: Maybe<SkillFilter>;
  skills_none?: Maybe<SkillFilter>;
};

export type ProjectSubscriptionPayload = {
  __typename?: 'ProjectSubscriptionPayload';
  mutation: _ModelMutationType;
  node?: Maybe<Project>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<ProjectPreviousValues>;
};

export type Query = {
  __typename?: 'Query';
  allProjects: Array<Project>;
  allSkills: Array<Skill>;
  allUsers: Array<User>;
  _allProjectsMeta: _QueryMeta;
  _allSkillsMeta: _QueryMeta;
  _allUsersMeta: _QueryMeta;
  Project?: Maybe<Project>;
  Skill?: Maybe<Skill>;
  User?: Maybe<User>;
  user?: Maybe<User>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
};

export type QueryAllProjectsArgs = {
  filter?: Maybe<ProjectFilter>;
  orderBy?: Maybe<ProjectOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryAllSkillsArgs = {
  filter?: Maybe<SkillFilter>;
  orderBy?: Maybe<SkillOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryAllUsersArgs = {
  filter?: Maybe<UserFilter>;
  orderBy?: Maybe<UserOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Query_AllProjectsMetaArgs = {
  filter?: Maybe<ProjectFilter>;
  orderBy?: Maybe<ProjectOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Query_AllSkillsMetaArgs = {
  filter?: Maybe<SkillFilter>;
  orderBy?: Maybe<SkillOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Query_AllUsersMetaArgs = {
  filter?: Maybe<UserFilter>;
  orderBy?: Maybe<UserOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryProjectArgs = {
  cfapiProjectId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  repoName?: Maybe<Scalars['String']>;
};

export type QuerySkillArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type QueryUserArgs = {
  auth0UserId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

export type QueryNodeArgs = {
  id: Scalars['ID'];
};

export type RemoveFromProjectChampionsPayload = {
  __typename?: 'RemoveFromProjectChampionsPayload';
  championsUser?: Maybe<User>;
  projectsChampionedProject?: Maybe<Project>;
};

export type RemoveFromProjectSkillsPayload = {
  __typename?: 'RemoveFromProjectSkillsPayload';
  projectsWithSkillProject?: Maybe<Project>;
  skillsSkill?: Maybe<Skill>;
};

export type RemoveFromUserSkillsPayload = {
  __typename?: 'RemoveFromUserSkillsPayload';
  usersWithSkillUser?: Maybe<User>;
  skillsSkill?: Maybe<Skill>;
};

export type Skill = Node & {
  __typename?: 'Skill';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  projectsWithSkill?: Maybe<Array<Project>>;
  updatedAt: Scalars['DateTime'];
  usersWithSkill?: Maybe<Array<User>>;
  /** Meta information about the query. */
  _projectsWithSkillMeta: _QueryMeta;
  /** Meta information about the query. */
  _usersWithSkillMeta: _QueryMeta;
};

export type SkillProjectsWithSkillArgs = {
  filter?: Maybe<ProjectFilter>;
  orderBy?: Maybe<ProjectOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type SkillUsersWithSkillArgs = {
  filter?: Maybe<UserFilter>;
  orderBy?: Maybe<UserOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Skill_ProjectsWithSkillMetaArgs = {
  filter?: Maybe<ProjectFilter>;
  orderBy?: Maybe<ProjectOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Skill_UsersWithSkillMetaArgs = {
  filter?: Maybe<UserFilter>;
  orderBy?: Maybe<UserOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type SkillFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SkillFilter>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SkillFilter>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  projectsWithSkill_every?: Maybe<ProjectFilter>;
  projectsWithSkill_some?: Maybe<ProjectFilter>;
  projectsWithSkill_none?: Maybe<ProjectFilter>;
  usersWithSkill_every?: Maybe<UserFilter>;
  usersWithSkill_some?: Maybe<UserFilter>;
  usersWithSkill_none?: Maybe<UserFilter>;
};

export enum SkillOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type SkillPreviousValues = {
  __typename?: 'SkillPreviousValues';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SkillprojectsWithSkillProject = {
  boardUrl?: Maybe<Scalars['String']>;
  cfapiProjectId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  headerImage?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  repoName?: Maybe<Scalars['String']>;
  status?: Maybe<ProjectStatus>;
  championsIds?: Maybe<Array<Scalars['ID']>>;
  champions?: Maybe<Array<ProjectchampionsUser>>;
  skillsIds?: Maybe<Array<Scalars['ID']>>;
  skills?: Maybe<Array<ProjectskillsSkill>>;
};

export type SkillSubscriptionFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SkillSubscriptionFilter>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SkillSubscriptionFilter>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<_ModelMutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<SkillSubscriptionFilterNode>;
};

export type SkillSubscriptionFilterNode = {
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  projectsWithSkill_every?: Maybe<ProjectFilter>;
  projectsWithSkill_some?: Maybe<ProjectFilter>;
  projectsWithSkill_none?: Maybe<ProjectFilter>;
  usersWithSkill_every?: Maybe<UserFilter>;
  usersWithSkill_some?: Maybe<UserFilter>;
  usersWithSkill_none?: Maybe<UserFilter>;
};

export type SkillSubscriptionPayload = {
  __typename?: 'SkillSubscriptionPayload';
  mutation: _ModelMutationType;
  node?: Maybe<Skill>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<SkillPreviousValues>;
};

export type SkillusersWithSkillUser = {
  auth0UserId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  flowdockName?: Maybe<Scalars['String']>;
  githubName?: Maybe<Scalars['String']>;
  hasCompletedWizard?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
  projectsChampionedIds?: Maybe<Array<Scalars['ID']>>;
  projectsChampioned?: Maybe<Array<UserprojectsChampionedProject>>;
  skillsIds?: Maybe<Array<Scalars['ID']>>;
  skills?: Maybe<Array<UserskillsSkill>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  Project?: Maybe<ProjectSubscriptionPayload>;
  Skill?: Maybe<SkillSubscriptionPayload>;
  User?: Maybe<UserSubscriptionPayload>;
};

export type SubscriptionProjectArgs = {
  filter?: Maybe<ProjectSubscriptionFilter>;
};

export type SubscriptionSkillArgs = {
  filter?: Maybe<SkillSubscriptionFilter>;
};

export type SubscriptionUserArgs = {
  filter?: Maybe<UserSubscriptionFilter>;
};

export type UpdateProject = {
  boardUrl?: Maybe<Scalars['String']>;
  cfapiProjectId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  headerImage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  repoName?: Maybe<Scalars['String']>;
  status?: Maybe<ProjectStatus>;
  championsIds?: Maybe<Array<Scalars['ID']>>;
  champions?: Maybe<Array<ProjectchampionsUser>>;
  skillsIds?: Maybe<Array<Scalars['ID']>>;
  skills?: Maybe<Array<ProjectskillsSkill>>;
};

export type UpdateSkill = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  projectsWithSkillIds?: Maybe<Array<Scalars['ID']>>;
  projectsWithSkill?: Maybe<Array<SkillprojectsWithSkillProject>>;
  usersWithSkillIds?: Maybe<Array<Scalars['ID']>>;
  usersWithSkill?: Maybe<Array<SkillusersWithSkillUser>>;
};

export type UpdateUser = {
  auth0UserId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  flowdockName?: Maybe<Scalars['String']>;
  githubName?: Maybe<Scalars['String']>;
  hasCompletedWizard?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
  projectsChampionedIds?: Maybe<Array<Scalars['ID']>>;
  projectsChampioned?: Maybe<Array<UserprojectsChampionedProject>>;
  skillsIds?: Maybe<Array<Scalars['ID']>>;
  skills?: Maybe<Array<UserskillsSkill>>;
};

export type User = Node & {
  __typename?: 'User';
  auth0UserId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  flowdockName?: Maybe<Scalars['String']>;
  githubName?: Maybe<Scalars['String']>;
  hasCompletedWizard?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  projectsChampioned?: Maybe<Array<Project>>;
  role?: Maybe<UserRole>;
  skills?: Maybe<Array<Skill>>;
  updatedAt: Scalars['DateTime'];
  /** Meta information about the query. */
  _projectsChampionedMeta: _QueryMeta;
  /** Meta information about the query. */
  _skillsMeta: _QueryMeta;
};

export type UserProjectsChampionedArgs = {
  filter?: Maybe<ProjectFilter>;
  orderBy?: Maybe<ProjectOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type UserSkillsArgs = {
  filter?: Maybe<SkillFilter>;
  orderBy?: Maybe<SkillOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type User_ProjectsChampionedMetaArgs = {
  filter?: Maybe<ProjectFilter>;
  orderBy?: Maybe<ProjectOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type User_SkillsMetaArgs = {
  filter?: Maybe<SkillFilter>;
  orderBy?: Maybe<SkillOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type UserFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserFilter>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserFilter>>;
  auth0UserId?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  auth0UserId_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  auth0UserId_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  auth0UserId_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  auth0UserId_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  auth0UserId_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  auth0UserId_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  auth0UserId_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  auth0UserId_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  auth0UserId_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  auth0UserId_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  auth0UserId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  auth0UserId_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  auth0UserId_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  email_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  email_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<Scalars['String']>;
  flowdockName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  flowdockName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  flowdockName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  flowdockName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  flowdockName_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  flowdockName_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  flowdockName_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  flowdockName_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  flowdockName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  flowdockName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  flowdockName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  flowdockName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  flowdockName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  flowdockName_not_ends_with?: Maybe<Scalars['String']>;
  githubName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  githubName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  githubName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  githubName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  githubName_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  githubName_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  githubName_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  githubName_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  githubName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  githubName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  githubName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  githubName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  githubName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  githubName_not_ends_with?: Maybe<Scalars['String']>;
  hasCompletedWizard?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  hasCompletedWizard_not?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  picture_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  picture_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  picture_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  picture_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
  /** All values that are not equal to given value. */
  role_not?: Maybe<UserRole>;
  /** All values that are contained in given list. */
  role_in?: Maybe<Array<UserRole>>;
  /** All values that are not contained in given list. */
  role_not_in?: Maybe<Array<UserRole>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  projectsChampioned_every?: Maybe<ProjectFilter>;
  projectsChampioned_some?: Maybe<ProjectFilter>;
  projectsChampioned_none?: Maybe<ProjectFilter>;
  skills_every?: Maybe<SkillFilter>;
  skills_some?: Maybe<SkillFilter>;
  skills_none?: Maybe<SkillFilter>;
};

export enum UserOrderBy {
  Auth0UserIdAsc = 'auth0UserId_ASC',
  Auth0UserIdDesc = 'auth0UserId_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FlowdockNameAsc = 'flowdockName_ASC',
  FlowdockNameDesc = 'flowdockName_DESC',
  GithubNameAsc = 'githubName_ASC',
  GithubNameDesc = 'githubName_DESC',
  HasCompletedWizardAsc = 'hasCompletedWizard_ASC',
  HasCompletedWizardDesc = 'hasCompletedWizard_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserPreviousValues = {
  __typename?: 'UserPreviousValues';
  auth0UserId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  flowdockName?: Maybe<Scalars['String']>;
  githubName?: Maybe<Scalars['String']>;
  hasCompletedWizard?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
  updatedAt: Scalars['DateTime'];
};

export type UserprojectsChampionedProject = {
  boardUrl?: Maybe<Scalars['String']>;
  cfapiProjectId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  headerImage?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  repoName?: Maybe<Scalars['String']>;
  status?: Maybe<ProjectStatus>;
  championsIds?: Maybe<Array<Scalars['ID']>>;
  champions?: Maybe<Array<ProjectchampionsUser>>;
  skillsIds?: Maybe<Array<Scalars['ID']>>;
  skills?: Maybe<Array<ProjectskillsSkill>>;
};

export enum UserRole {
  Regular = 'REGULAR',
  Admin = 'ADMIN'
}

export type UserskillsSkill = {
  name: Scalars['String'];
  projectsWithSkillIds?: Maybe<Array<Scalars['ID']>>;
  projectsWithSkill?: Maybe<Array<SkillprojectsWithSkillProject>>;
  usersWithSkillIds?: Maybe<Array<Scalars['ID']>>;
  usersWithSkill?: Maybe<Array<SkillusersWithSkillUser>>;
};

export type UserSubscriptionFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserSubscriptionFilter>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserSubscriptionFilter>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<_ModelMutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<UserSubscriptionFilterNode>;
};

export type UserSubscriptionFilterNode = {
  auth0UserId?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  auth0UserId_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  auth0UserId_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  auth0UserId_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  auth0UserId_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  auth0UserId_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  auth0UserId_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  auth0UserId_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  auth0UserId_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  auth0UserId_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  auth0UserId_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  auth0UserId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  auth0UserId_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  auth0UserId_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  email_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  email_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<Scalars['String']>;
  flowdockName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  flowdockName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  flowdockName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  flowdockName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  flowdockName_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  flowdockName_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  flowdockName_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  flowdockName_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  flowdockName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  flowdockName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  flowdockName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  flowdockName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  flowdockName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  flowdockName_not_ends_with?: Maybe<Scalars['String']>;
  githubName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  githubName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  githubName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  githubName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  githubName_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  githubName_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  githubName_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  githubName_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  githubName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  githubName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  githubName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  githubName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  githubName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  githubName_not_ends_with?: Maybe<Scalars['String']>;
  hasCompletedWizard?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  hasCompletedWizard_not?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  picture_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  picture_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  picture_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  picture_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
  /** All values that are not equal to given value. */
  role_not?: Maybe<UserRole>;
  /** All values that are contained in given list. */
  role_in?: Maybe<Array<UserRole>>;
  /** All values that are not contained in given list. */
  role_not_in?: Maybe<Array<UserRole>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  projectsChampioned_every?: Maybe<ProjectFilter>;
  projectsChampioned_some?: Maybe<ProjectFilter>;
  projectsChampioned_none?: Maybe<ProjectFilter>;
  skills_every?: Maybe<SkillFilter>;
  skills_some?: Maybe<SkillFilter>;
  skills_none?: Maybe<SkillFilter>;
};

export type UserSubscriptionPayload = {
  __typename?: 'UserSubscriptionPayload';
  mutation: _ModelMutationType;
  node?: Maybe<User>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<UserPreviousValues>;
};
export type EmailListPageQueryVariables = {
  date?: Maybe<Scalars['DateTime']>;
};

export type EmailListPageQuery = { __typename?: 'Query' } & {
  allUsers: Array<{ __typename?: 'User' } & Pick<User, 'id' | 'email'>>;
};

export type ProjectsDrawerQueryVariables = {};

export type ProjectsDrawerQuery = { __typename?: 'Query' } & {
  allProjects: Array<{ __typename?: 'Project' } & Pick<Project, 'id' | 'name'>>;
};

export type UsersListQueryVariables = {};

export type UsersListQuery = { __typename?: 'Query' } & {
  allUsers: Array<
    { __typename?: 'User' } & Pick<User, 'id' | 'name' | 'picture'>
  >;
};

export type ProjectCardFieldsFragment = { __typename?: 'Project' } & Pick<
  Project,
  'id' | 'name' | 'headerImage' | 'repoName' | 'boardUrl' | 'status'
> & {
    skills: Maybe<Array<{ __typename?: 'Skill' } & Pick<Skill, 'id' | 'name'>>>;
  };

export type ProjectCreatePageCreateProjectMutationVariables = {
  name: Scalars['String'];
  headerImage?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  repoName: Scalars['String'];
  boardUrl?: Maybe<Scalars['String']>;
  skillsIds?: Maybe<Array<Scalars['ID']>>;
  championsIds?: Maybe<Array<Scalars['ID']>>;
  status?: Maybe<ProjectStatus>;
};

export type ProjectCreatePageCreateProjectMutation = {
  __typename?: 'Mutation';
} & {
  createProject: Maybe<
    { __typename?: 'Project' } & ProjectSectionFieldsFragment
  >;
};

export type ProjectEditPageGetProjectQueryVariables = {
  id: Scalars['ID'];
};

export type ProjectEditPageGetProjectQuery = { __typename?: 'Query' } & {
  Project: Maybe<{ __typename?: 'Project' } & ProjectSectionFieldsFragment>;
};

export type ProjectEditPageUpdateProjectMutationVariables = {
  id: Scalars['ID'];
  name: Scalars['String'];
  headerImage?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  repoName?: Maybe<Scalars['String']>;
  boardUrl?: Maybe<Scalars['String']>;
  skillsIds?: Maybe<Array<Scalars['ID']>>;
  championsIds?: Maybe<Array<Scalars['ID']>>;
  status?: Maybe<ProjectStatus>;
};

export type ProjectEditPageUpdateProjectMutation = {
  __typename?: 'Mutation';
} & {
  updateProject: Maybe<
    { __typename?: 'Project' } & ProjectSectionFieldsFragment
  >;
};

export type ProjectSectionFieldsFragment = { __typename?: 'Project' } & Pick<
  Project,
  | 'id'
  | 'name'
  | 'headerImage'
  | 'description'
  | 'repoName'
  | 'boardUrl'
  | 'status'
> & {
    skills: Maybe<Array<{ __typename?: 'Skill' } & Pick<Skill, 'id' | 'name'>>>;
    champions: Maybe<
      Array<{ __typename?: 'User' } & Pick<User, 'id' | 'name'>>
    >;
  };

export type GetProjectQueryVariables = {
  id: Scalars['ID'];
};

export type GetProjectQuery = { __typename?: 'Query' } & {
  Project: Maybe<{ __typename?: 'Project' } & ProjectSectionFieldsFragment>;
};

export type ProjectCardsQueryVariables = {};

export type ProjectCardsQuery = { __typename?: 'Query' } & {
  allProjects: Array<{ __typename?: 'Project' } & ProjectCardFieldsFragment>;
};

export type SkillPageQueryVariables = {
  id?: Maybe<Scalars['ID']>;
};

export type SkillPageQuery = { __typename?: 'Query' } & {
  skill: Maybe<
    { __typename?: 'Skill' } & Pick<Skill, 'id' | 'name'> & {
        projectsWithSkill: Maybe<
          Array<{ __typename?: 'Project' } & Pick<Project, 'id' | 'name'>>
        >;
        usersWithSkill: Maybe<
          Array<{ __typename?: 'User' } & Pick<User, 'id' | 'name' | 'picture'>>
        >;
      }
  >;
};

export type EditableProjectsListQueryVariables = {};

export type EditableProjectsListQuery = { __typename?: 'Query' } & {
  allProjects: Array<{ __typename?: 'Project' } & Pick<Project, 'id' | 'name'>>;
};

export type EditableSkillsListQueryVariables = {};

export type EditableSkillsListQuery = { __typename?: 'Query' } & {
  allSkills: Array<{ __typename?: 'Skill' } & Pick<Skill, 'id' | 'name'>>;
};

export type CreateSkillMutationVariables = {
  name: Scalars['String'];
};

export type CreateSkillMutation = { __typename?: 'Mutation' } & {
  createSkill: Maybe<{ __typename?: 'Skill' } & Pick<Skill, 'id' | 'name'>>;
};

export type EditableUsersListQueryVariables = {};

export type EditableUsersListQuery = { __typename?: 'Query' } & {
  allUsers: Array<{ __typename?: 'User' } & Pick<User, 'id' | 'name'>>;
};

export type AuthenticateMutationVariables = {
  accessToken: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  picture: Scalars['String'];
};

export type AuthenticateMutation = { __typename?: 'Mutation' } & {
  authenticateUser: { __typename?: 'AuthenticateUserPayload' } & Pick<
    AuthenticateUserPayload,
    'id' | 'token'
  >;
};

export type UserCommonFragment = { __typename?: 'User' } & Pick<
  User,
  | 'id'
  | 'createdAt'
  | 'picture'
  | 'name'
  | 'description'
  | 'githubName'
  | 'flowdockName'
  | 'role'
  | 'email'
  | 'hasCompletedWizard'
> & {
    skills: Maybe<Array<{ __typename?: 'Skill' } & Pick<Skill, 'id' | 'name'>>>;
    projectsChampioned: Maybe<
      Array<{ __typename?: 'Project' } & Pick<Project, 'id' | 'name'>>
    >;
  };

export type GetUserQueryVariables = {
  id?: Maybe<Scalars['ID']>;
};

export type GetUserQuery = { __typename?: 'Query' } & {
  user: Maybe<{ __typename?: 'User' } & UserCommonFragment>;
};

export type UpdateUserCommonMutationVariables = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  githubName?: Maybe<Scalars['String']>;
  flowdockName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  hasCompletedWizard?: Maybe<Scalars['Boolean']>;
  skillsIds?: Maybe<Array<Scalars['ID']>>;
  projectsChampionedIds?: Maybe<Array<Scalars['ID']>>;
};

export type UpdateUserCommonMutation = { __typename?: 'Mutation' } & {
  updateUser: Maybe<{ __typename?: 'User' } & UserCommonFragment>;
};

export type Maybe<T> = T | null;

export interface ProjectFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<ProjectFilter[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ProjectFilter[]>;

  cfapiProjectId?: Maybe<string>;
  /** All values that are not equal to given value. */
  cfapiProjectId_not?: Maybe<string>;
  /** All values that are contained in given list. */
  cfapiProjectId_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  cfapiProjectId_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  cfapiProjectId_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  cfapiProjectId_lte?: Maybe<string>;
  /** All values greater than the given value. */
  cfapiProjectId_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  cfapiProjectId_gte?: Maybe<string>;
  /** All values containing the given string. */
  cfapiProjectId_contains?: Maybe<string>;
  /** All values not containing the given string. */
  cfapiProjectId_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  cfapiProjectId_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  cfapiProjectId_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  cfapiProjectId_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  cfapiProjectId_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  description?: Maybe<string>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<string>;
  /** All values that are contained in given list. */
  description_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  description_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  description_lte?: Maybe<string>;
  /** All values greater than the given value. */
  description_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<string>;
  /** All values containing the given string. */
  description_contains?: Maybe<string>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<string>;

  headerImage?: Maybe<string>;
  /** All values that are not equal to given value. */
  headerImage_not?: Maybe<string>;
  /** All values that are contained in given list. */
  headerImage_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  headerImage_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  headerImage_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  headerImage_lte?: Maybe<string>;
  /** All values greater than the given value. */
  headerImage_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  headerImage_gte?: Maybe<string>;
  /** All values containing the given string. */
  headerImage_contains?: Maybe<string>;
  /** All values not containing the given string. */
  headerImage_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  headerImage_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  headerImage_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  headerImage_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  headerImage_not_ends_with?: Maybe<string>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  repoName?: Maybe<string>;
  /** All values that are not equal to given value. */
  repoName_not?: Maybe<string>;
  /** All values that are contained in given list. */
  repoName_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  repoName_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  repoName_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  repoName_lte?: Maybe<string>;
  /** All values greater than the given value. */
  repoName_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  repoName_gte?: Maybe<string>;
  /** All values containing the given string. */
  repoName_contains?: Maybe<string>;
  /** All values not containing the given string. */
  repoName_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  repoName_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  repoName_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  repoName_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  repoName_not_ends_with?: Maybe<string>;

  status?: Maybe<ProjectStatus>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<ProjectStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<ProjectStatus[]>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<ProjectStatus[]>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  champions_every?: Maybe<UserFilter>;

  champions_some?: Maybe<UserFilter>;

  champions_none?: Maybe<UserFilter>;

  skills_every?: Maybe<SkillFilter>;

  skills_some?: Maybe<SkillFilter>;

  skills_none?: Maybe<SkillFilter>;
}

export interface UserFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<UserFilter[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<UserFilter[]>;

  auth0UserId?: Maybe<string>;
  /** All values that are not equal to given value. */
  auth0UserId_not?: Maybe<string>;
  /** All values that are contained in given list. */
  auth0UserId_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  auth0UserId_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  auth0UserId_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  auth0UserId_lte?: Maybe<string>;
  /** All values greater than the given value. */
  auth0UserId_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  auth0UserId_gte?: Maybe<string>;
  /** All values containing the given string. */
  auth0UserId_contains?: Maybe<string>;
  /** All values not containing the given string. */
  auth0UserId_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  auth0UserId_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  auth0UserId_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  auth0UserId_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  auth0UserId_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  description?: Maybe<string>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<string>;
  /** All values that are contained in given list. */
  description_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  description_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  description_lte?: Maybe<string>;
  /** All values greater than the given value. */
  description_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<string>;
  /** All values containing the given string. */
  description_contains?: Maybe<string>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<string>;

  email?: Maybe<string>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<string>;
  /** All values that are contained in given list. */
  email_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  email_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<string>;
  /** All values greater than the given value. */
  email_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<string>;
  /** All values containing the given string. */
  email_contains?: Maybe<string>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<string>;

  flowdockName?: Maybe<string>;
  /** All values that are not equal to given value. */
  flowdockName_not?: Maybe<string>;
  /** All values that are contained in given list. */
  flowdockName_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  flowdockName_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  flowdockName_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  flowdockName_lte?: Maybe<string>;
  /** All values greater than the given value. */
  flowdockName_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  flowdockName_gte?: Maybe<string>;
  /** All values containing the given string. */
  flowdockName_contains?: Maybe<string>;
  /** All values not containing the given string. */
  flowdockName_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  flowdockName_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  flowdockName_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  flowdockName_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  flowdockName_not_ends_with?: Maybe<string>;

  githubName?: Maybe<string>;
  /** All values that are not equal to given value. */
  githubName_not?: Maybe<string>;
  /** All values that are contained in given list. */
  githubName_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  githubName_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  githubName_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  githubName_lte?: Maybe<string>;
  /** All values greater than the given value. */
  githubName_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  githubName_gte?: Maybe<string>;
  /** All values containing the given string. */
  githubName_contains?: Maybe<string>;
  /** All values not containing the given string. */
  githubName_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  githubName_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  githubName_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  githubName_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  githubName_not_ends_with?: Maybe<string>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  picture?: Maybe<string>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<string>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  picture_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  picture_lte?: Maybe<string>;
  /** All values greater than the given value. */
  picture_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  picture_gte?: Maybe<string>;
  /** All values containing the given string. */
  picture_contains?: Maybe<string>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  picture_not_ends_with?: Maybe<string>;

  role?: Maybe<UserRole>;
  /** All values that are not equal to given value. */
  role_not?: Maybe<UserRole>;
  /** All values that are contained in given list. */
  role_in?: Maybe<UserRole[]>;
  /** All values that are not contained in given list. */
  role_not_in?: Maybe<UserRole[]>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  projectsChampioned_every?: Maybe<ProjectFilter>;

  projectsChampioned_some?: Maybe<ProjectFilter>;

  projectsChampioned_none?: Maybe<ProjectFilter>;

  skills_every?: Maybe<SkillFilter>;

  skills_some?: Maybe<SkillFilter>;

  skills_none?: Maybe<SkillFilter>;
}

export interface SkillFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<SkillFilter[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<SkillFilter[]>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  projectsWithSkill_every?: Maybe<ProjectFilter>;

  projectsWithSkill_some?: Maybe<ProjectFilter>;

  projectsWithSkill_none?: Maybe<ProjectFilter>;

  usersWithSkill_every?: Maybe<UserFilter>;

  usersWithSkill_some?: Maybe<UserFilter>;

  usersWithSkill_none?: Maybe<UserFilter>;
}

export interface ProjectchampionsUser {
  auth0UserId: string;

  description?: Maybe<string>;

  email: string;

  flowdockName?: Maybe<string>;

  githubName?: Maybe<string>;

  name?: Maybe<string>;

  picture?: Maybe<string>;

  role?: Maybe<UserRole>;

  projectsChampionedIds?: Maybe<string[]>;

  projectsChampioned?: Maybe<UserprojectsChampionedProject[]>;

  skillsIds?: Maybe<string[]>;

  skills?: Maybe<UserskillsSkill[]>;
}

export interface UserprojectsChampionedProject {
  cfapiProjectId?: Maybe<string>;

  description?: Maybe<string>;

  headerImage?: Maybe<string>;

  name: string;

  repoName?: Maybe<string>;

  status?: Maybe<ProjectStatus>;

  championsIds?: Maybe<string[]>;

  champions?: Maybe<ProjectchampionsUser[]>;

  skillsIds?: Maybe<string[]>;

  skills?: Maybe<ProjectskillsSkill[]>;
}

export interface ProjectskillsSkill {
  name: string;

  projectsWithSkillIds?: Maybe<string[]>;

  projectsWithSkill?: Maybe<SkillprojectsWithSkillProject[]>;

  usersWithSkillIds?: Maybe<string[]>;

  usersWithSkill?: Maybe<SkillusersWithSkillUser[]>;
}

export interface SkillprojectsWithSkillProject {
  cfapiProjectId?: Maybe<string>;

  description?: Maybe<string>;

  headerImage?: Maybe<string>;

  name: string;

  repoName?: Maybe<string>;

  status?: Maybe<ProjectStatus>;

  championsIds?: Maybe<string[]>;

  champions?: Maybe<ProjectchampionsUser[]>;

  skillsIds?: Maybe<string[]>;

  skills?: Maybe<ProjectskillsSkill[]>;
}

export interface SkillusersWithSkillUser {
  auth0UserId: string;

  description?: Maybe<string>;

  email: string;

  flowdockName?: Maybe<string>;

  githubName?: Maybe<string>;

  name?: Maybe<string>;

  picture?: Maybe<string>;

  role?: Maybe<UserRole>;

  projectsChampionedIds?: Maybe<string[]>;

  projectsChampioned?: Maybe<UserprojectsChampionedProject[]>;

  skillsIds?: Maybe<string[]>;

  skills?: Maybe<UserskillsSkill[]>;
}

export interface UserskillsSkill {
  name: string;

  projectsWithSkillIds?: Maybe<string[]>;

  projectsWithSkill?: Maybe<SkillprojectsWithSkillProject[]>;

  usersWithSkillIds?: Maybe<string[]>;

  usersWithSkill?: Maybe<SkillusersWithSkillUser[]>;
}

export interface UpdateProject {
  cfapiProjectId?: Maybe<string>;

  description?: Maybe<string>;

  headerImage?: Maybe<string>;

  id: string;

  name?: Maybe<string>;

  repoName?: Maybe<string>;

  status?: Maybe<ProjectStatus>;

  championsIds?: Maybe<string[]>;

  champions?: Maybe<ProjectchampionsUser[]>;

  skillsIds?: Maybe<string[]>;

  skills?: Maybe<ProjectskillsSkill[]>;
}

export interface CreateProject {
  cfapiProjectId?: Maybe<string>;

  description?: Maybe<string>;

  headerImage?: Maybe<string>;

  name: string;

  repoName?: Maybe<string>;

  status?: Maybe<ProjectStatus>;

  championsIds?: Maybe<string[]>;

  champions?: Maybe<ProjectchampionsUser[]>;

  skillsIds?: Maybe<string[]>;

  skills?: Maybe<ProjectskillsSkill[]>;
}

export interface UpdateSkill {
  id: string;

  name?: Maybe<string>;

  projectsWithSkillIds?: Maybe<string[]>;

  projectsWithSkill?: Maybe<SkillprojectsWithSkillProject[]>;

  usersWithSkillIds?: Maybe<string[]>;

  usersWithSkill?: Maybe<SkillusersWithSkillUser[]>;
}

export interface CreateSkill {
  name: string;

  projectsWithSkillIds?: Maybe<string[]>;

  projectsWithSkill?: Maybe<SkillprojectsWithSkillProject[]>;

  usersWithSkillIds?: Maybe<string[]>;

  usersWithSkill?: Maybe<SkillusersWithSkillUser[]>;
}

export interface UpdateUser {
  auth0UserId?: Maybe<string>;

  description?: Maybe<string>;

  email?: Maybe<string>;

  flowdockName?: Maybe<string>;

  githubName?: Maybe<string>;

  id: string;

  name?: Maybe<string>;

  picture?: Maybe<string>;

  role?: Maybe<UserRole>;

  projectsChampionedIds?: Maybe<string[]>;

  projectsChampioned?: Maybe<UserprojectsChampionedProject[]>;

  skillsIds?: Maybe<string[]>;

  skills?: Maybe<UserskillsSkill[]>;
}

export interface CreateUser {
  auth0UserId: string;

  description?: Maybe<string>;

  email: string;

  flowdockName?: Maybe<string>;

  githubName?: Maybe<string>;

  name?: Maybe<string>;

  picture?: Maybe<string>;

  role?: Maybe<UserRole>;

  projectsChampionedIds?: Maybe<string[]>;

  projectsChampioned?: Maybe<UserprojectsChampionedProject[]>;

  skillsIds?: Maybe<string[]>;

  skills?: Maybe<UserskillsSkill[]>;
}

export interface InvokeFunctionInput {
  name: string;

  input: string;

  clientMutationId?: Maybe<string>;
}

export interface ProjectSubscriptionFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<ProjectSubscriptionFilter[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ProjectSubscriptionFilter[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<_ModelMutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<ProjectSubscriptionFilterNode>;
}

export interface ProjectSubscriptionFilterNode {
  cfapiProjectId?: Maybe<string>;
  /** All values that are not equal to given value. */
  cfapiProjectId_not?: Maybe<string>;
  /** All values that are contained in given list. */
  cfapiProjectId_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  cfapiProjectId_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  cfapiProjectId_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  cfapiProjectId_lte?: Maybe<string>;
  /** All values greater than the given value. */
  cfapiProjectId_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  cfapiProjectId_gte?: Maybe<string>;
  /** All values containing the given string. */
  cfapiProjectId_contains?: Maybe<string>;
  /** All values not containing the given string. */
  cfapiProjectId_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  cfapiProjectId_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  cfapiProjectId_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  cfapiProjectId_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  cfapiProjectId_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  description?: Maybe<string>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<string>;
  /** All values that are contained in given list. */
  description_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  description_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  description_lte?: Maybe<string>;
  /** All values greater than the given value. */
  description_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<string>;
  /** All values containing the given string. */
  description_contains?: Maybe<string>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<string>;

  headerImage?: Maybe<string>;
  /** All values that are not equal to given value. */
  headerImage_not?: Maybe<string>;
  /** All values that are contained in given list. */
  headerImage_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  headerImage_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  headerImage_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  headerImage_lte?: Maybe<string>;
  /** All values greater than the given value. */
  headerImage_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  headerImage_gte?: Maybe<string>;
  /** All values containing the given string. */
  headerImage_contains?: Maybe<string>;
  /** All values not containing the given string. */
  headerImage_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  headerImage_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  headerImage_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  headerImage_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  headerImage_not_ends_with?: Maybe<string>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  repoName?: Maybe<string>;
  /** All values that are not equal to given value. */
  repoName_not?: Maybe<string>;
  /** All values that are contained in given list. */
  repoName_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  repoName_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  repoName_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  repoName_lte?: Maybe<string>;
  /** All values greater than the given value. */
  repoName_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  repoName_gte?: Maybe<string>;
  /** All values containing the given string. */
  repoName_contains?: Maybe<string>;
  /** All values not containing the given string. */
  repoName_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  repoName_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  repoName_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  repoName_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  repoName_not_ends_with?: Maybe<string>;

  status?: Maybe<ProjectStatus>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<ProjectStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<ProjectStatus[]>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<ProjectStatus[]>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  champions_every?: Maybe<UserFilter>;

  champions_some?: Maybe<UserFilter>;

  champions_none?: Maybe<UserFilter>;

  skills_every?: Maybe<SkillFilter>;

  skills_some?: Maybe<SkillFilter>;

  skills_none?: Maybe<SkillFilter>;
}

export interface SkillSubscriptionFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<SkillSubscriptionFilter[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<SkillSubscriptionFilter[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<_ModelMutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<SkillSubscriptionFilterNode>;
}

export interface SkillSubscriptionFilterNode {
  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  projectsWithSkill_every?: Maybe<ProjectFilter>;

  projectsWithSkill_some?: Maybe<ProjectFilter>;

  projectsWithSkill_none?: Maybe<ProjectFilter>;

  usersWithSkill_every?: Maybe<UserFilter>;

  usersWithSkill_some?: Maybe<UserFilter>;

  usersWithSkill_none?: Maybe<UserFilter>;
}

export interface UserSubscriptionFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<UserSubscriptionFilter[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<UserSubscriptionFilter[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<_ModelMutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<UserSubscriptionFilterNode>;
}

export interface UserSubscriptionFilterNode {
  auth0UserId?: Maybe<string>;
  /** All values that are not equal to given value. */
  auth0UserId_not?: Maybe<string>;
  /** All values that are contained in given list. */
  auth0UserId_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  auth0UserId_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  auth0UserId_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  auth0UserId_lte?: Maybe<string>;
  /** All values greater than the given value. */
  auth0UserId_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  auth0UserId_gte?: Maybe<string>;
  /** All values containing the given string. */
  auth0UserId_contains?: Maybe<string>;
  /** All values not containing the given string. */
  auth0UserId_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  auth0UserId_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  auth0UserId_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  auth0UserId_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  auth0UserId_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  description?: Maybe<string>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<string>;
  /** All values that are contained in given list. */
  description_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  description_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  description_lte?: Maybe<string>;
  /** All values greater than the given value. */
  description_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<string>;
  /** All values containing the given string. */
  description_contains?: Maybe<string>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<string>;

  email?: Maybe<string>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<string>;
  /** All values that are contained in given list. */
  email_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  email_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<string>;
  /** All values greater than the given value. */
  email_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<string>;
  /** All values containing the given string. */
  email_contains?: Maybe<string>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<string>;

  flowdockName?: Maybe<string>;
  /** All values that are not equal to given value. */
  flowdockName_not?: Maybe<string>;
  /** All values that are contained in given list. */
  flowdockName_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  flowdockName_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  flowdockName_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  flowdockName_lte?: Maybe<string>;
  /** All values greater than the given value. */
  flowdockName_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  flowdockName_gte?: Maybe<string>;
  /** All values containing the given string. */
  flowdockName_contains?: Maybe<string>;
  /** All values not containing the given string. */
  flowdockName_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  flowdockName_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  flowdockName_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  flowdockName_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  flowdockName_not_ends_with?: Maybe<string>;

  githubName?: Maybe<string>;
  /** All values that are not equal to given value. */
  githubName_not?: Maybe<string>;
  /** All values that are contained in given list. */
  githubName_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  githubName_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  githubName_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  githubName_lte?: Maybe<string>;
  /** All values greater than the given value. */
  githubName_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  githubName_gte?: Maybe<string>;
  /** All values containing the given string. */
  githubName_contains?: Maybe<string>;
  /** All values not containing the given string. */
  githubName_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  githubName_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  githubName_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  githubName_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  githubName_not_ends_with?: Maybe<string>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  picture?: Maybe<string>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<string>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  picture_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  picture_lte?: Maybe<string>;
  /** All values greater than the given value. */
  picture_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  picture_gte?: Maybe<string>;
  /** All values containing the given string. */
  picture_contains?: Maybe<string>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  picture_not_ends_with?: Maybe<string>;

  role?: Maybe<UserRole>;
  /** All values that are not equal to given value. */
  role_not?: Maybe<UserRole>;
  /** All values that are contained in given list. */
  role_in?: Maybe<UserRole[]>;
  /** All values that are not contained in given list. */
  role_not_in?: Maybe<UserRole[]>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  projectsChampioned_every?: Maybe<ProjectFilter>;

  projectsChampioned_some?: Maybe<ProjectFilter>;

  projectsChampioned_none?: Maybe<ProjectFilter>;

  skills_every?: Maybe<SkillFilter>;

  skills_some?: Maybe<SkillFilter>;

  skills_none?: Maybe<SkillFilter>;
}

export enum ProjectStatus {
  Idea = 'Idea',
  Pitch = 'Pitch',
  Exploration = 'Exploration',
  ActiveDevelopment = 'ActiveDevelopment',
  Support = 'Support',
  Inactive = 'Inactive'
}

export enum UserRole {
  Regular = 'REGULAR',
  Admin = 'ADMIN'
}

export enum ProjectOrderBy {
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

export enum _ModelMutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type DateTime = any;

// ====================================================
// Documents
// ====================================================

export type CreateProjectVariables = {
  name: string;
  headerImage?: Maybe<string>;
  description?: Maybe<string>;
  repoName: string;
  skillsIds?: Maybe<string[]>;
  championsIds?: Maybe<string[]>;
};

export type CreateProjectMutation = {
  __typename?: 'Mutation';

  createProject: Maybe<CreateProjectCreateProject>;
};

export type CreateProjectCreateProject = ProjectSectionFieldsFragment;

export type CreateSkillVariables = {
  name: string;
};

export type CreateSkillMutation = {
  __typename?: 'Mutation';

  createSkill: Maybe<CreateSkillCreateSkill>;
};

export type CreateSkillCreateSkill = {
  __typename?: 'Skill';

  id: string;

  name: string;
};

export type EditableProjectsListVariables = {};

export type EditableProjectsListQuery = {
  __typename?: 'Query';

  allProjects: EditableProjectsListAllProjects[];
};

export type EditableProjectsListAllProjects = {
  __typename?: 'Project';

  id: string;

  name: string;
};

export type EditableSkillsListVariables = {};

export type EditableSkillsListQuery = {
  __typename?: 'Query';

  allSkills: EditableSkillsListAllSkills[];
};

export type EditableSkillsListAllSkills = {
  __typename?: 'Skill';

  id: string;

  name: string;
};

export type EditableUsersListVariables = {};

export type EditableUsersListQuery = {
  __typename?: 'Query';

  allUsers: EditableUsersListAllUsers[];
};

export type EditableUsersListAllUsers = {
  __typename?: 'User';

  id: string;

  name: Maybe<string>;
};

export type GetHeaderUserVariables = {
  id?: Maybe<string>;
};

export type GetHeaderUserQuery = {
  __typename?: 'Query';

  user: Maybe<GetHeaderUserUser>;
};

export type GetHeaderUserUser = {
  __typename?: 'User';

  id: string;

  name: Maybe<string>;

  picture: Maybe<string>;

  role: Maybe<UserRole>;
};

export type GetProjectVariables = {
  id: string;
};

export type GetProjectQuery = {
  __typename?: 'Query';

  Project: Maybe<GetProjectProject>;
};

export type GetProjectProject = ProjectSectionFieldsFragment;

export type GetUserVariables = {
  id?: Maybe<string>;
};

export type GetUserQuery = {
  __typename?: 'Query';

  user: Maybe<GetUserUser>;
};

export type GetUserUser = MemberProfileFragmentFragment;

export type ProjectCardsVariables = {};

export type ProjectCardsQuery = {
  __typename?: 'Query';

  allProjects: ProjectCardsAllProjects[];
};

export type ProjectCardsAllProjects = ProjectCardFieldsFragment;

export type ProjectsDrawerVariables = {};

export type ProjectsDrawerQuery = {
  __typename?: 'Query';

  allProjects: ProjectsDrawerAllProjects[];
};

export type ProjectsDrawerAllProjects = {
  __typename?: 'Project';

  id: string;

  name: string;
};

export type SkillPageVariables = {
  id?: Maybe<string>;
};

export type SkillPageQuery = {
  __typename?: 'Query';

  skill: Maybe<SkillPageSkill>;
};

export type SkillPageSkill = {
  __typename?: 'Skill';

  id: string;

  name: string;

  projectsWithSkill: Maybe<SkillPageProjectsWithSkill[]>;

  usersWithSkill: Maybe<SkillPageUsersWithSkill[]>;
};

export type SkillPageProjectsWithSkill = {
  __typename?: 'Project';

  id: string;

  name: string;
};

export type SkillPageUsersWithSkill = {
  __typename?: 'User';

  id: string;

  name: Maybe<string>;

  picture: Maybe<string>;
};

export type UpdateProjectVariables = {
  id: string;
  name: string;
  headerImage?: Maybe<string>;
  description?: Maybe<string>;
  repoName?: Maybe<string>;
  skillsIds?: Maybe<string[]>;
  championsIds?: Maybe<string[]>;
};

export type UpdateProjectMutation = {
  __typename?: 'Mutation';

  updateProject: Maybe<UpdateProjectUpdateProject>;
};

export type UpdateProjectUpdateProject = ProjectSectionFieldsFragment;

export type UpdateUserVariables = {
  id: string;
  name?: Maybe<string>;
  githubName?: Maybe<string>;
  flowdockName?: Maybe<string>;
  description?: Maybe<string>;
  skillsIds?: Maybe<string[]>;
  projectsChampionedIds?: Maybe<string[]>;
};

export type UpdateUserMutation = {
  __typename?: 'Mutation';

  updateUser: Maybe<UpdateUserUpdateUser>;
};

export type UpdateUserUpdateUser = MemberProfileFragmentFragment;

export type UserEmailsVariables = {
  date?: Maybe<DateTime>;
};

export type UserEmailsQuery = {
  __typename?: 'Query';

  allUsers: UserEmailsAllUsers[];
};

export type UserEmailsAllUsers = {
  __typename?: 'User';

  id: string;

  email: string;
};

export type UserRoleVariables = {
  id?: Maybe<string>;
};

export type UserRoleQuery = {
  __typename?: 'Query';

  user: Maybe<UserRoleUser>;
};

export type UserRoleUser = {
  __typename?: 'User';

  id: string;

  role: Maybe<UserRole>;
};

export type UsersListVariables = {};

export type UsersListQuery = {
  __typename?: 'Query';

  allUsers: UsersListAllUsers[];
};

export type UsersListAllUsers = {
  __typename?: 'User';

  id: string;

  name: Maybe<string>;

  picture: Maybe<string>;
};

export type MemberProfileFragmentFragment = {
  __typename?: 'User';

  id: string;

  picture: Maybe<string>;

  name: Maybe<string>;

  description: Maybe<string>;

  githubName: Maybe<string>;

  flowdockName: Maybe<string>;

  role: Maybe<UserRole>;

  email: string;

  skills: Maybe<MemberProfileFragmentSkills[]>;

  projectsChampioned: Maybe<MemberProfileFragmentProjectsChampioned[]>;
};

export type MemberProfileFragmentSkills = {
  __typename?: 'Skill';

  id: string;

  name: string;
};

export type MemberProfileFragmentProjectsChampioned = {
  __typename?: 'Project';

  id: string;

  name: string;
};

export type ProjectCardFieldsFragment = {
  __typename?: 'Project';

  id: string;

  name: string;

  headerImage: Maybe<string>;

  repoName: Maybe<string>;

  status: Maybe<ProjectStatus>;

  skills: Maybe<ProjectCardFieldsSkills[]>;
};

export type ProjectCardFieldsSkills = {
  __typename?: 'Skill';

  id: string;

  name: string;
};

export type ProjectSectionFieldsFragment = {
  __typename?: 'Project';

  id: string;

  name: string;

  headerImage: Maybe<string>;

  description: Maybe<string>;

  repoName: Maybe<string>;

  skills: Maybe<ProjectSectionFieldsSkills[]>;

  champions: Maybe<ProjectSectionFieldsChampions[]>;
};

export type ProjectSectionFieldsSkills = {
  __typename?: 'Skill';

  id: string;

  name: string;
};

export type ProjectSectionFieldsChampions = {
  __typename?: 'User';

  id: string;

  name: Maybe<string>;
};

import * as ReactApollo from 'react-apollo';
import * as React from 'react';

import gql from 'graphql-tag';

// ====================================================
// Fragments
// ====================================================

export const MemberProfileFragmentFragmentDoc = gql`
  fragment MemberProfileFragment on User {
    id
    picture
    name
    description
    githubName
    flowdockName
    role
    email
    skills {
      id
      name
    }
    projectsChampioned {
      id
      name
    }
  }
`;

export const ProjectCardFieldsFragmentDoc = gql`
  fragment ProjectCardFields on Project {
    id
    name
    headerImage
    repoName
    status
    skills {
      id
      name
    }
  }
`;

export const ProjectSectionFieldsFragmentDoc = gql`
  fragment ProjectSectionFields on Project {
    id
    name
    headerImage
    description
    repoName
    skills {
      id
      name
    }
    champions {
      id
      name
    }
  }
`;

// ====================================================
// Components
// ====================================================

export const CreateProjectDocument = gql`
  mutation createProject(
    $name: String!
    $headerImage: String
    $description: String
    $repoName: String!
    $skillsIds: [ID!]
    $championsIds: [ID!]
  ) {
    createProject(
      name: $name
      headerImage: $headerImage
      description: $description
      repoName: $repoName
      skillsIds: $skillsIds
      championsIds: $championsIds
    ) {
      ...ProjectSectionFields
    }
  }

  ${ProjectSectionFieldsFragmentDoc}
`;
export class CreateProjectComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<CreateProjectMutation, CreateProjectVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<CreateProjectMutation, CreateProjectVariables>
        mutation={CreateProjectDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type CreateProjectProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<CreateProjectMutation, CreateProjectVariables>
> &
  TChildProps;
export type CreateProjectMutationFn = ReactApollo.MutationFn<
  CreateProjectMutation,
  CreateProjectVariables
>;
export function CreateProjectHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreateProjectMutation,
        CreateProjectVariables,
        CreateProjectProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    CreateProjectMutation,
    CreateProjectVariables,
    CreateProjectProps<TChildProps>
  >(CreateProjectDocument, operationOptions);
}
export const CreateSkillDocument = gql`
  mutation createSkill($name: String!) {
    createSkill(name: $name) {
      id
      name
    }
  }
`;
export class CreateSkillComponent extends React.Component<
  Partial<ReactApollo.MutationProps<CreateSkillMutation, CreateSkillVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<CreateSkillMutation, CreateSkillVariables>
        mutation={CreateSkillDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type CreateSkillProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<CreateSkillMutation, CreateSkillVariables>
> &
  TChildProps;
export type CreateSkillMutationFn = ReactApollo.MutationFn<
  CreateSkillMutation,
  CreateSkillVariables
>;
export function CreateSkillHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreateSkillMutation,
        CreateSkillVariables,
        CreateSkillProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    CreateSkillMutation,
    CreateSkillVariables,
    CreateSkillProps<TChildProps>
  >(CreateSkillDocument, operationOptions);
}
export const EditableProjectsListDocument = gql`
  query editableProjectsList {
    allProjects {
      id
      name
    }
  }
`;
export class EditableProjectsListComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<
      EditableProjectsListQuery,
      EditableProjectsListVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Query<
        EditableProjectsListQuery,
        EditableProjectsListVariables
      >
        query={EditableProjectsListDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type EditableProjectsListProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<
    EditableProjectsListQuery,
    EditableProjectsListVariables
  >
> &
  TChildProps;
export function EditableProjectsListHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        EditableProjectsListQuery,
        EditableProjectsListVariables,
        EditableProjectsListProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    EditableProjectsListQuery,
    EditableProjectsListVariables,
    EditableProjectsListProps<TChildProps>
  >(EditableProjectsListDocument, operationOptions);
}
export const EditableSkillsListDocument = gql`
  query editableSkillsList {
    allSkills {
      id
      name
    }
  }
`;
export class EditableSkillsListComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<EditableSkillsListQuery, EditableSkillsListVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Query<EditableSkillsListQuery, EditableSkillsListVariables>
        query={EditableSkillsListDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type EditableSkillsListProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<EditableSkillsListQuery, EditableSkillsListVariables>
> &
  TChildProps;
export function EditableSkillsListHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        EditableSkillsListQuery,
        EditableSkillsListVariables,
        EditableSkillsListProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    EditableSkillsListQuery,
    EditableSkillsListVariables,
    EditableSkillsListProps<TChildProps>
  >(EditableSkillsListDocument, operationOptions);
}
export const EditableUsersListDocument = gql`
  query editableUsersList {
    allUsers {
      id
      name
    }
  }
`;
export class EditableUsersListComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<EditableUsersListQuery, EditableUsersListVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Query<EditableUsersListQuery, EditableUsersListVariables>
        query={EditableUsersListDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type EditableUsersListProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<EditableUsersListQuery, EditableUsersListVariables>
> &
  TChildProps;
export function EditableUsersListHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        EditableUsersListQuery,
        EditableUsersListVariables,
        EditableUsersListProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    EditableUsersListQuery,
    EditableUsersListVariables,
    EditableUsersListProps<TChildProps>
  >(EditableUsersListDocument, operationOptions);
}
export const GetHeaderUserDocument = gql`
  query getHeaderUser($id: ID) {
    user: User(id: $id) {
      id
      name
      picture
      role
    }
  }
`;
export class GetHeaderUserComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetHeaderUserQuery, GetHeaderUserVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetHeaderUserQuery, GetHeaderUserVariables>
        query={GetHeaderUserDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetHeaderUserProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetHeaderUserQuery, GetHeaderUserVariables>
> &
  TChildProps;
export function GetHeaderUserHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetHeaderUserQuery,
        GetHeaderUserVariables,
        GetHeaderUserProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetHeaderUserQuery,
    GetHeaderUserVariables,
    GetHeaderUserProps<TChildProps>
  >(GetHeaderUserDocument, operationOptions);
}
export const GetProjectDocument = gql`
  query getProject($id: ID!) {
    Project(id: $id) {
      ...ProjectSectionFields
    }
  }

  ${ProjectSectionFieldsFragmentDoc}
`;
export class GetProjectComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetProjectQuery, GetProjectVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetProjectQuery, GetProjectVariables>
        query={GetProjectDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetProjectProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetProjectQuery, GetProjectVariables>
> &
  TChildProps;
export function GetProjectHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetProjectQuery,
        GetProjectVariables,
        GetProjectProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetProjectQuery,
    GetProjectVariables,
    GetProjectProps<TChildProps>
  >(GetProjectDocument, operationOptions);
}
export const GetUserDocument = gql`
  query getUser($id: ID) {
    user: User(id: $id) {
      ...MemberProfileFragment
    }
  }

  ${MemberProfileFragmentFragmentDoc}
`;
export class GetUserComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetUserQuery, GetUserVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetUserQuery, GetUserVariables>
        query={GetUserDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetUserProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetUserQuery, GetUserVariables>
> &
  TChildProps;
export function GetUserHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetUserQuery,
        GetUserVariables,
        GetUserProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetUserQuery,
    GetUserVariables,
    GetUserProps<TChildProps>
  >(GetUserDocument, operationOptions);
}
export const ProjectCardsDocument = gql`
  query projectCards {
    allProjects(orderBy: name_ASC) {
      ...ProjectCardFields
    }
  }

  ${ProjectCardFieldsFragmentDoc}
`;
export class ProjectCardsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<ProjectCardsQuery, ProjectCardsVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<ProjectCardsQuery, ProjectCardsVariables>
        query={ProjectCardsDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type ProjectCardsProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<ProjectCardsQuery, ProjectCardsVariables>
> &
  TChildProps;
export function ProjectCardsHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ProjectCardsQuery,
        ProjectCardsVariables,
        ProjectCardsProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    ProjectCardsQuery,
    ProjectCardsVariables,
    ProjectCardsProps<TChildProps>
  >(ProjectCardsDocument, operationOptions);
}
export const ProjectsDrawerDocument = gql`
  query projectsDrawer {
    allProjects(orderBy: name_ASC) {
      id
      name
    }
  }
`;
export class ProjectsDrawerComponent extends React.Component<
  Partial<ReactApollo.QueryProps<ProjectsDrawerQuery, ProjectsDrawerVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<ProjectsDrawerQuery, ProjectsDrawerVariables>
        query={ProjectsDrawerDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type ProjectsDrawerProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<ProjectsDrawerQuery, ProjectsDrawerVariables>
> &
  TChildProps;
export function ProjectsDrawerHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ProjectsDrawerQuery,
        ProjectsDrawerVariables,
        ProjectsDrawerProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    ProjectsDrawerQuery,
    ProjectsDrawerVariables,
    ProjectsDrawerProps<TChildProps>
  >(ProjectsDrawerDocument, operationOptions);
}
export const SkillPageDocument = gql`
  query skillPage($id: ID) {
    skill: Skill(id: $id) {
      id
      name
      projectsWithSkill {
        id
        name
      }
      usersWithSkill {
        id
        name
        picture
      }
    }
  }
`;
export class SkillPageComponent extends React.Component<
  Partial<ReactApollo.QueryProps<SkillPageQuery, SkillPageVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<SkillPageQuery, SkillPageVariables>
        query={SkillPageDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type SkillPageProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<SkillPageQuery, SkillPageVariables>
> &
  TChildProps;
export function SkillPageHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        SkillPageQuery,
        SkillPageVariables,
        SkillPageProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    SkillPageQuery,
    SkillPageVariables,
    SkillPageProps<TChildProps>
  >(SkillPageDocument, operationOptions);
}
export const UpdateProjectDocument = gql`
  mutation updateProject(
    $id: ID!
    $name: String!
    $headerImage: String
    $description: String
    $repoName: String
    $skillsIds: [ID!]
    $championsIds: [ID!]
  ) {
    updateProject(
      id: $id
      name: $name
      headerImage: $headerImage
      description: $description
      repoName: $repoName
      skillsIds: $skillsIds
      championsIds: $championsIds
    ) {
      ...ProjectSectionFields
    }
  }

  ${ProjectSectionFieldsFragmentDoc}
`;
export class UpdateProjectComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<UpdateProjectMutation, UpdateProjectVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<UpdateProjectMutation, UpdateProjectVariables>
        mutation={UpdateProjectDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type UpdateProjectProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<UpdateProjectMutation, UpdateProjectVariables>
> &
  TChildProps;
export type UpdateProjectMutationFn = ReactApollo.MutationFn<
  UpdateProjectMutation,
  UpdateProjectVariables
>;
export function UpdateProjectHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        UpdateProjectMutation,
        UpdateProjectVariables,
        UpdateProjectProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    UpdateProjectMutation,
    UpdateProjectVariables,
    UpdateProjectProps<TChildProps>
  >(UpdateProjectDocument, operationOptions);
}
export const UpdateUserDocument = gql`
  mutation updateUser(
    $id: ID!
    $name: String
    $githubName: String
    $flowdockName: String
    $description: String
    $skillsIds: [ID!]
    $projectsChampionedIds: [ID!]
  ) {
    updateUser(
      id: $id
      name: $name
      githubName: $githubName
      flowdockName: $flowdockName
      description: $description
      skillsIds: $skillsIds
      projectsChampionedIds: $projectsChampionedIds
    ) {
      ...MemberProfileFragment
    }
  }

  ${MemberProfileFragmentFragmentDoc}
`;
export class UpdateUserComponent extends React.Component<
  Partial<ReactApollo.MutationProps<UpdateUserMutation, UpdateUserVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<UpdateUserMutation, UpdateUserVariables>
        mutation={UpdateUserDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type UpdateUserProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<UpdateUserMutation, UpdateUserVariables>
> &
  TChildProps;
export type UpdateUserMutationFn = ReactApollo.MutationFn<
  UpdateUserMutation,
  UpdateUserVariables
>;
export function UpdateUserHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        UpdateUserMutation,
        UpdateUserVariables,
        UpdateUserProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    UpdateUserMutation,
    UpdateUserVariables,
    UpdateUserProps<TChildProps>
  >(UpdateUserDocument, operationOptions);
}
export const UserEmailsDocument = gql`
  query userEmails($date: DateTime) {
    allUsers(orderBy: email_ASC, filter: { createdAt_gt: $date }) {
      id
      email
    }
  }
`;
export class UserEmailsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<UserEmailsQuery, UserEmailsVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<UserEmailsQuery, UserEmailsVariables>
        query={UserEmailsDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type UserEmailsProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<UserEmailsQuery, UserEmailsVariables>
> &
  TChildProps;
export function UserEmailsHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        UserEmailsQuery,
        UserEmailsVariables,
        UserEmailsProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    UserEmailsQuery,
    UserEmailsVariables,
    UserEmailsProps<TChildProps>
  >(UserEmailsDocument, operationOptions);
}
export const UserRoleDocument = gql`
  query userRole($id: ID) {
    user: User(id: $id) {
      id
      role
    }
  }
`;
export class UserRoleComponent extends React.Component<
  Partial<ReactApollo.QueryProps<UserRoleQuery, UserRoleVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<UserRoleQuery, UserRoleVariables>
        query={UserRoleDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type UserRoleProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<UserRoleQuery, UserRoleVariables>
> &
  TChildProps;
export function UserRoleHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        UserRoleQuery,
        UserRoleVariables,
        UserRoleProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    UserRoleQuery,
    UserRoleVariables,
    UserRoleProps<TChildProps>
  >(UserRoleDocument, operationOptions);
}
export const UsersListDocument = gql`
  query usersList {
    allUsers(orderBy: name_ASC) {
      id
      name
      picture
    }
  }
`;
export class UsersListComponent extends React.Component<
  Partial<ReactApollo.QueryProps<UsersListQuery, UsersListVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<UsersListQuery, UsersListVariables>
        query={UsersListDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type UsersListProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<UsersListQuery, UsersListVariables>
> &
  TChildProps;
export function UsersListHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        UsersListQuery,
        UsersListVariables,
        UsersListProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    UsersListQuery,
    UsersListVariables,
    UsersListProps<TChildProps>
  >(UsersListDocument, operationOptions);
}

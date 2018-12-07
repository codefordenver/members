export interface ProjectFilter {
  /** Logical AND on all given filters. */
  AND?: ProjectFilter[] | null;
  /** Logical OR on all given filters. */
  OR?: ProjectFilter[] | null;

  cfapiProjectId?: string | null;
  /** All values that are not equal to given value. */
  cfapiProjectId_not?: string | null;
  /** All values that are contained in given list. */
  cfapiProjectId_in?: string[] | null;
  /** All values that are not contained in given list. */
  cfapiProjectId_not_in?: string[] | null;
  /** All values less than the given value. */
  cfapiProjectId_lt?: string | null;
  /** All values less than or equal the given value. */
  cfapiProjectId_lte?: string | null;
  /** All values greater than the given value. */
  cfapiProjectId_gt?: string | null;
  /** All values greater than or equal the given value. */
  cfapiProjectId_gte?: string | null;
  /** All values containing the given string. */
  cfapiProjectId_contains?: string | null;
  /** All values not containing the given string. */
  cfapiProjectId_not_contains?: string | null;
  /** All values starting with the given string. */
  cfapiProjectId_starts_with?: string | null;
  /** All values not starting with the given string. */
  cfapiProjectId_not_starts_with?: string | null;
  /** All values ending with the given string. */
  cfapiProjectId_ends_with?: string | null;
  /** All values not ending with the given string. */
  cfapiProjectId_not_ends_with?: string | null;

  createdAt?: DateTime | null;
  /** All values that are not equal to given value. */
  createdAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  createdAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  createdAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  createdAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  createdAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  createdAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  createdAt_gte?: DateTime | null;

  description?: string | null;
  /** All values that are not equal to given value. */
  description_not?: string | null;
  /** All values that are contained in given list. */
  description_in?: string[] | null;
  /** All values that are not contained in given list. */
  description_not_in?: string[] | null;
  /** All values less than the given value. */
  description_lt?: string | null;
  /** All values less than or equal the given value. */
  description_lte?: string | null;
  /** All values greater than the given value. */
  description_gt?: string | null;
  /** All values greater than or equal the given value. */
  description_gte?: string | null;
  /** All values containing the given string. */
  description_contains?: string | null;
  /** All values not containing the given string. */
  description_not_contains?: string | null;
  /** All values starting with the given string. */
  description_starts_with?: string | null;
  /** All values not starting with the given string. */
  description_not_starts_with?: string | null;
  /** All values ending with the given string. */
  description_ends_with?: string | null;
  /** All values not ending with the given string. */
  description_not_ends_with?: string | null;

  headerImage?: string | null;
  /** All values that are not equal to given value. */
  headerImage_not?: string | null;
  /** All values that are contained in given list. */
  headerImage_in?: string[] | null;
  /** All values that are not contained in given list. */
  headerImage_not_in?: string[] | null;
  /** All values less than the given value. */
  headerImage_lt?: string | null;
  /** All values less than or equal the given value. */
  headerImage_lte?: string | null;
  /** All values greater than the given value. */
  headerImage_gt?: string | null;
  /** All values greater than or equal the given value. */
  headerImage_gte?: string | null;
  /** All values containing the given string. */
  headerImage_contains?: string | null;
  /** All values not containing the given string. */
  headerImage_not_contains?: string | null;
  /** All values starting with the given string. */
  headerImage_starts_with?: string | null;
  /** All values not starting with the given string. */
  headerImage_not_starts_with?: string | null;
  /** All values ending with the given string. */
  headerImage_ends_with?: string | null;
  /** All values not ending with the given string. */
  headerImage_not_ends_with?: string | null;

  id?: string | null;
  /** All values that are not equal to given value. */
  id_not?: string | null;
  /** All values that are contained in given list. */
  id_in?: string[] | null;
  /** All values that are not contained in given list. */
  id_not_in?: string[] | null;
  /** All values less than the given value. */
  id_lt?: string | null;
  /** All values less than or equal the given value. */
  id_lte?: string | null;
  /** All values greater than the given value. */
  id_gt?: string | null;
  /** All values greater than or equal the given value. */
  id_gte?: string | null;
  /** All values containing the given string. */
  id_contains?: string | null;
  /** All values not containing the given string. */
  id_not_contains?: string | null;
  /** All values starting with the given string. */
  id_starts_with?: string | null;
  /** All values not starting with the given string. */
  id_not_starts_with?: string | null;
  /** All values ending with the given string. */
  id_ends_with?: string | null;
  /** All values not ending with the given string. */
  id_not_ends_with?: string | null;

  name?: string | null;
  /** All values that are not equal to given value. */
  name_not?: string | null;
  /** All values that are contained in given list. */
  name_in?: string[] | null;
  /** All values that are not contained in given list. */
  name_not_in?: string[] | null;
  /** All values less than the given value. */
  name_lt?: string | null;
  /** All values less than or equal the given value. */
  name_lte?: string | null;
  /** All values greater than the given value. */
  name_gt?: string | null;
  /** All values greater than or equal the given value. */
  name_gte?: string | null;
  /** All values containing the given string. */
  name_contains?: string | null;
  /** All values not containing the given string. */
  name_not_contains?: string | null;
  /** All values starting with the given string. */
  name_starts_with?: string | null;
  /** All values not starting with the given string. */
  name_not_starts_with?: string | null;
  /** All values ending with the given string. */
  name_ends_with?: string | null;
  /** All values not ending with the given string. */
  name_not_ends_with?: string | null;

  repoName?: string | null;
  /** All values that are not equal to given value. */
  repoName_not?: string | null;
  /** All values that are contained in given list. */
  repoName_in?: string[] | null;
  /** All values that are not contained in given list. */
  repoName_not_in?: string[] | null;
  /** All values less than the given value. */
  repoName_lt?: string | null;
  /** All values less than or equal the given value. */
  repoName_lte?: string | null;
  /** All values greater than the given value. */
  repoName_gt?: string | null;
  /** All values greater than or equal the given value. */
  repoName_gte?: string | null;
  /** All values containing the given string. */
  repoName_contains?: string | null;
  /** All values not containing the given string. */
  repoName_not_contains?: string | null;
  /** All values starting with the given string. */
  repoName_starts_with?: string | null;
  /** All values not starting with the given string. */
  repoName_not_starts_with?: string | null;
  /** All values ending with the given string. */
  repoName_ends_with?: string | null;
  /** All values not ending with the given string. */
  repoName_not_ends_with?: string | null;

  status?: ProjectStatus | null;
  /** All values that are not equal to given value. */
  status_not?: ProjectStatus | null;
  /** All values that are contained in given list. */
  status_in?: ProjectStatus[] | null;
  /** All values that are not contained in given list. */
  status_not_in?: ProjectStatus[] | null;

  updatedAt?: DateTime | null;
  /** All values that are not equal to given value. */
  updatedAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  updatedAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  updatedAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  updatedAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  updatedAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: DateTime | null;

  champions_every?: UserFilter | null;

  champions_some?: UserFilter | null;

  champions_none?: UserFilter | null;

  skills_every?: SkillFilter | null;

  skills_some?: SkillFilter | null;

  skills_none?: SkillFilter | null;
}

export interface UserFilter {
  /** Logical AND on all given filters. */
  AND?: UserFilter[] | null;
  /** Logical OR on all given filters. */
  OR?: UserFilter[] | null;

  auth0UserId?: string | null;
  /** All values that are not equal to given value. */
  auth0UserId_not?: string | null;
  /** All values that are contained in given list. */
  auth0UserId_in?: string[] | null;
  /** All values that are not contained in given list. */
  auth0UserId_not_in?: string[] | null;
  /** All values less than the given value. */
  auth0UserId_lt?: string | null;
  /** All values less than or equal the given value. */
  auth0UserId_lte?: string | null;
  /** All values greater than the given value. */
  auth0UserId_gt?: string | null;
  /** All values greater than or equal the given value. */
  auth0UserId_gte?: string | null;
  /** All values containing the given string. */
  auth0UserId_contains?: string | null;
  /** All values not containing the given string. */
  auth0UserId_not_contains?: string | null;
  /** All values starting with the given string. */
  auth0UserId_starts_with?: string | null;
  /** All values not starting with the given string. */
  auth0UserId_not_starts_with?: string | null;
  /** All values ending with the given string. */
  auth0UserId_ends_with?: string | null;
  /** All values not ending with the given string. */
  auth0UserId_not_ends_with?: string | null;

  createdAt?: DateTime | null;
  /** All values that are not equal to given value. */
  createdAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  createdAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  createdAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  createdAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  createdAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  createdAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  createdAt_gte?: DateTime | null;

  description?: string | null;
  /** All values that are not equal to given value. */
  description_not?: string | null;
  /** All values that are contained in given list. */
  description_in?: string[] | null;
  /** All values that are not contained in given list. */
  description_not_in?: string[] | null;
  /** All values less than the given value. */
  description_lt?: string | null;
  /** All values less than or equal the given value. */
  description_lte?: string | null;
  /** All values greater than the given value. */
  description_gt?: string | null;
  /** All values greater than or equal the given value. */
  description_gte?: string | null;
  /** All values containing the given string. */
  description_contains?: string | null;
  /** All values not containing the given string. */
  description_not_contains?: string | null;
  /** All values starting with the given string. */
  description_starts_with?: string | null;
  /** All values not starting with the given string. */
  description_not_starts_with?: string | null;
  /** All values ending with the given string. */
  description_ends_with?: string | null;
  /** All values not ending with the given string. */
  description_not_ends_with?: string | null;

  email?: string | null;
  /** All values that are not equal to given value. */
  email_not?: string | null;
  /** All values that are contained in given list. */
  email_in?: string[] | null;
  /** All values that are not contained in given list. */
  email_not_in?: string[] | null;
  /** All values less than the given value. */
  email_lt?: string | null;
  /** All values less than or equal the given value. */
  email_lte?: string | null;
  /** All values greater than the given value. */
  email_gt?: string | null;
  /** All values greater than or equal the given value. */
  email_gte?: string | null;
  /** All values containing the given string. */
  email_contains?: string | null;
  /** All values not containing the given string. */
  email_not_contains?: string | null;
  /** All values starting with the given string. */
  email_starts_with?: string | null;
  /** All values not starting with the given string. */
  email_not_starts_with?: string | null;
  /** All values ending with the given string. */
  email_ends_with?: string | null;
  /** All values not ending with the given string. */
  email_not_ends_with?: string | null;

  flowdockName?: string | null;
  /** All values that are not equal to given value. */
  flowdockName_not?: string | null;
  /** All values that are contained in given list. */
  flowdockName_in?: string[] | null;
  /** All values that are not contained in given list. */
  flowdockName_not_in?: string[] | null;
  /** All values less than the given value. */
  flowdockName_lt?: string | null;
  /** All values less than or equal the given value. */
  flowdockName_lte?: string | null;
  /** All values greater than the given value. */
  flowdockName_gt?: string | null;
  /** All values greater than or equal the given value. */
  flowdockName_gte?: string | null;
  /** All values containing the given string. */
  flowdockName_contains?: string | null;
  /** All values not containing the given string. */
  flowdockName_not_contains?: string | null;
  /** All values starting with the given string. */
  flowdockName_starts_with?: string | null;
  /** All values not starting with the given string. */
  flowdockName_not_starts_with?: string | null;
  /** All values ending with the given string. */
  flowdockName_ends_with?: string | null;
  /** All values not ending with the given string. */
  flowdockName_not_ends_with?: string | null;

  githubName?: string | null;
  /** All values that are not equal to given value. */
  githubName_not?: string | null;
  /** All values that are contained in given list. */
  githubName_in?: string[] | null;
  /** All values that are not contained in given list. */
  githubName_not_in?: string[] | null;
  /** All values less than the given value. */
  githubName_lt?: string | null;
  /** All values less than or equal the given value. */
  githubName_lte?: string | null;
  /** All values greater than the given value. */
  githubName_gt?: string | null;
  /** All values greater than or equal the given value. */
  githubName_gte?: string | null;
  /** All values containing the given string. */
  githubName_contains?: string | null;
  /** All values not containing the given string. */
  githubName_not_contains?: string | null;
  /** All values starting with the given string. */
  githubName_starts_with?: string | null;
  /** All values not starting with the given string. */
  githubName_not_starts_with?: string | null;
  /** All values ending with the given string. */
  githubName_ends_with?: string | null;
  /** All values not ending with the given string. */
  githubName_not_ends_with?: string | null;

  id?: string | null;
  /** All values that are not equal to given value. */
  id_not?: string | null;
  /** All values that are contained in given list. */
  id_in?: string[] | null;
  /** All values that are not contained in given list. */
  id_not_in?: string[] | null;
  /** All values less than the given value. */
  id_lt?: string | null;
  /** All values less than or equal the given value. */
  id_lte?: string | null;
  /** All values greater than the given value. */
  id_gt?: string | null;
  /** All values greater than or equal the given value. */
  id_gte?: string | null;
  /** All values containing the given string. */
  id_contains?: string | null;
  /** All values not containing the given string. */
  id_not_contains?: string | null;
  /** All values starting with the given string. */
  id_starts_with?: string | null;
  /** All values not starting with the given string. */
  id_not_starts_with?: string | null;
  /** All values ending with the given string. */
  id_ends_with?: string | null;
  /** All values not ending with the given string. */
  id_not_ends_with?: string | null;

  name?: string | null;
  /** All values that are not equal to given value. */
  name_not?: string | null;
  /** All values that are contained in given list. */
  name_in?: string[] | null;
  /** All values that are not contained in given list. */
  name_not_in?: string[] | null;
  /** All values less than the given value. */
  name_lt?: string | null;
  /** All values less than or equal the given value. */
  name_lte?: string | null;
  /** All values greater than the given value. */
  name_gt?: string | null;
  /** All values greater than or equal the given value. */
  name_gte?: string | null;
  /** All values containing the given string. */
  name_contains?: string | null;
  /** All values not containing the given string. */
  name_not_contains?: string | null;
  /** All values starting with the given string. */
  name_starts_with?: string | null;
  /** All values not starting with the given string. */
  name_not_starts_with?: string | null;
  /** All values ending with the given string. */
  name_ends_with?: string | null;
  /** All values not ending with the given string. */
  name_not_ends_with?: string | null;

  picture?: string | null;
  /** All values that are not equal to given value. */
  picture_not?: string | null;
  /** All values that are contained in given list. */
  picture_in?: string[] | null;
  /** All values that are not contained in given list. */
  picture_not_in?: string[] | null;
  /** All values less than the given value. */
  picture_lt?: string | null;
  /** All values less than or equal the given value. */
  picture_lte?: string | null;
  /** All values greater than the given value. */
  picture_gt?: string | null;
  /** All values greater than or equal the given value. */
  picture_gte?: string | null;
  /** All values containing the given string. */
  picture_contains?: string | null;
  /** All values not containing the given string. */
  picture_not_contains?: string | null;
  /** All values starting with the given string. */
  picture_starts_with?: string | null;
  /** All values not starting with the given string. */
  picture_not_starts_with?: string | null;
  /** All values ending with the given string. */
  picture_ends_with?: string | null;
  /** All values not ending with the given string. */
  picture_not_ends_with?: string | null;

  role?: UserRole | null;
  /** All values that are not equal to given value. */
  role_not?: UserRole | null;
  /** All values that are contained in given list. */
  role_in?: UserRole[] | null;
  /** All values that are not contained in given list. */
  role_not_in?: UserRole[] | null;

  updatedAt?: DateTime | null;
  /** All values that are not equal to given value. */
  updatedAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  updatedAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  updatedAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  updatedAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  updatedAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: DateTime | null;

  projectsChampioned_every?: ProjectFilter | null;

  projectsChampioned_some?: ProjectFilter | null;

  projectsChampioned_none?: ProjectFilter | null;

  skills_every?: SkillFilter | null;

  skills_some?: SkillFilter | null;

  skills_none?: SkillFilter | null;
}

export interface SkillFilter {
  /** Logical AND on all given filters. */
  AND?: SkillFilter[] | null;
  /** Logical OR on all given filters. */
  OR?: SkillFilter[] | null;

  createdAt?: DateTime | null;
  /** All values that are not equal to given value. */
  createdAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  createdAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  createdAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  createdAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  createdAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  createdAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  createdAt_gte?: DateTime | null;

  id?: string | null;
  /** All values that are not equal to given value. */
  id_not?: string | null;
  /** All values that are contained in given list. */
  id_in?: string[] | null;
  /** All values that are not contained in given list. */
  id_not_in?: string[] | null;
  /** All values less than the given value. */
  id_lt?: string | null;
  /** All values less than or equal the given value. */
  id_lte?: string | null;
  /** All values greater than the given value. */
  id_gt?: string | null;
  /** All values greater than or equal the given value. */
  id_gte?: string | null;
  /** All values containing the given string. */
  id_contains?: string | null;
  /** All values not containing the given string. */
  id_not_contains?: string | null;
  /** All values starting with the given string. */
  id_starts_with?: string | null;
  /** All values not starting with the given string. */
  id_not_starts_with?: string | null;
  /** All values ending with the given string. */
  id_ends_with?: string | null;
  /** All values not ending with the given string. */
  id_not_ends_with?: string | null;

  name?: string | null;
  /** All values that are not equal to given value. */
  name_not?: string | null;
  /** All values that are contained in given list. */
  name_in?: string[] | null;
  /** All values that are not contained in given list. */
  name_not_in?: string[] | null;
  /** All values less than the given value. */
  name_lt?: string | null;
  /** All values less than or equal the given value. */
  name_lte?: string | null;
  /** All values greater than the given value. */
  name_gt?: string | null;
  /** All values greater than or equal the given value. */
  name_gte?: string | null;
  /** All values containing the given string. */
  name_contains?: string | null;
  /** All values not containing the given string. */
  name_not_contains?: string | null;
  /** All values starting with the given string. */
  name_starts_with?: string | null;
  /** All values not starting with the given string. */
  name_not_starts_with?: string | null;
  /** All values ending with the given string. */
  name_ends_with?: string | null;
  /** All values not ending with the given string. */
  name_not_ends_with?: string | null;

  updatedAt?: DateTime | null;
  /** All values that are not equal to given value. */
  updatedAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  updatedAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  updatedAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  updatedAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  updatedAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: DateTime | null;

  projectsWithSkill_every?: ProjectFilter | null;

  projectsWithSkill_some?: ProjectFilter | null;

  projectsWithSkill_none?: ProjectFilter | null;

  usersWithSkill_every?: UserFilter | null;

  usersWithSkill_some?: UserFilter | null;

  usersWithSkill_none?: UserFilter | null;
}

export interface ProjectchampionsUser {
  auth0UserId: string;

  description?: string | null;

  email: string;

  flowdockName?: string | null;

  githubName?: string | null;

  name?: string | null;

  picture?: string | null;

  role?: UserRole | null;

  projectsChampionedIds?: string[] | null;

  projectsChampioned?: UserprojectsChampionedProject[] | null;

  skillsIds?: string[] | null;

  skills?: UserskillsSkill[] | null;
}

export interface UserprojectsChampionedProject {
  cfapiProjectId?: string | null;

  description?: string | null;

  headerImage?: string | null;

  name: string;

  repoName?: string | null;

  status?: ProjectStatus | null;

  championsIds?: string[] | null;

  champions?: ProjectchampionsUser[] | null;

  skillsIds?: string[] | null;

  skills?: ProjectskillsSkill[] | null;
}

export interface ProjectskillsSkill {
  name: string;

  projectsWithSkillIds?: string[] | null;

  projectsWithSkill?: SkillprojectsWithSkillProject[] | null;

  usersWithSkillIds?: string[] | null;

  usersWithSkill?: SkillusersWithSkillUser[] | null;
}

export interface SkillprojectsWithSkillProject {
  cfapiProjectId?: string | null;

  description?: string | null;

  headerImage?: string | null;

  name: string;

  repoName?: string | null;

  status?: ProjectStatus | null;

  championsIds?: string[] | null;

  champions?: ProjectchampionsUser[] | null;

  skillsIds?: string[] | null;

  skills?: ProjectskillsSkill[] | null;
}

export interface SkillusersWithSkillUser {
  auth0UserId: string;

  description?: string | null;

  email: string;

  flowdockName?: string | null;

  githubName?: string | null;

  name?: string | null;

  picture?: string | null;

  role?: UserRole | null;

  projectsChampionedIds?: string[] | null;

  projectsChampioned?: UserprojectsChampionedProject[] | null;

  skillsIds?: string[] | null;

  skills?: UserskillsSkill[] | null;
}

export interface UserskillsSkill {
  name: string;

  projectsWithSkillIds?: string[] | null;

  projectsWithSkill?: SkillprojectsWithSkillProject[] | null;

  usersWithSkillIds?: string[] | null;

  usersWithSkill?: SkillusersWithSkillUser[] | null;
}

export interface UpdateProject {
  cfapiProjectId?: string | null;

  description?: string | null;

  headerImage?: string | null;

  id: string;

  name?: string | null;

  repoName?: string | null;

  status?: ProjectStatus | null;

  championsIds?: string[] | null;

  champions?: ProjectchampionsUser[] | null;

  skillsIds?: string[] | null;

  skills?: ProjectskillsSkill[] | null;
}

export interface CreateProject {
  cfapiProjectId?: string | null;

  description?: string | null;

  headerImage?: string | null;

  name: string;

  repoName?: string | null;

  status?: ProjectStatus | null;

  championsIds?: string[] | null;

  champions?: ProjectchampionsUser[] | null;

  skillsIds?: string[] | null;

  skills?: ProjectskillsSkill[] | null;
}

export interface UpdateSkill {
  id: string;

  name?: string | null;

  projectsWithSkillIds?: string[] | null;

  projectsWithSkill?: SkillprojectsWithSkillProject[] | null;

  usersWithSkillIds?: string[] | null;

  usersWithSkill?: SkillusersWithSkillUser[] | null;
}

export interface CreateSkill {
  name: string;

  projectsWithSkillIds?: string[] | null;

  projectsWithSkill?: SkillprojectsWithSkillProject[] | null;

  usersWithSkillIds?: string[] | null;

  usersWithSkill?: SkillusersWithSkillUser[] | null;
}

export interface UpdateUser {
  auth0UserId?: string | null;

  description?: string | null;

  email?: string | null;

  flowdockName?: string | null;

  githubName?: string | null;

  id: string;

  name?: string | null;

  picture?: string | null;

  role?: UserRole | null;

  projectsChampionedIds?: string[] | null;

  projectsChampioned?: UserprojectsChampionedProject[] | null;

  skillsIds?: string[] | null;

  skills?: UserskillsSkill[] | null;
}

export interface CreateUser {
  auth0UserId: string;

  description?: string | null;

  email: string;

  flowdockName?: string | null;

  githubName?: string | null;

  name?: string | null;

  picture?: string | null;

  role?: UserRole | null;

  projectsChampionedIds?: string[] | null;

  projectsChampioned?: UserprojectsChampionedProject[] | null;

  skillsIds?: string[] | null;

  skills?: UserskillsSkill[] | null;
}

export interface InvokeFunctionInput {
  name: string;

  input: string;

  clientMutationId?: string | null;
}

export interface ProjectSubscriptionFilter {
  /** Logical AND on all given filters. */
  AND?: ProjectSubscriptionFilter[] | null;
  /** Logical OR on all given filters. */
  OR?: ProjectSubscriptionFilter[] | null;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: _ModelMutationType[] | null;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: string | null;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: string[] | null;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: string[] | null;

  node?: ProjectSubscriptionFilterNode | null;
}

export interface ProjectSubscriptionFilterNode {
  cfapiProjectId?: string | null;
  /** All values that are not equal to given value. */
  cfapiProjectId_not?: string | null;
  /** All values that are contained in given list. */
  cfapiProjectId_in?: string[] | null;
  /** All values that are not contained in given list. */
  cfapiProjectId_not_in?: string[] | null;
  /** All values less than the given value. */
  cfapiProjectId_lt?: string | null;
  /** All values less than or equal the given value. */
  cfapiProjectId_lte?: string | null;
  /** All values greater than the given value. */
  cfapiProjectId_gt?: string | null;
  /** All values greater than or equal the given value. */
  cfapiProjectId_gte?: string | null;
  /** All values containing the given string. */
  cfapiProjectId_contains?: string | null;
  /** All values not containing the given string. */
  cfapiProjectId_not_contains?: string | null;
  /** All values starting with the given string. */
  cfapiProjectId_starts_with?: string | null;
  /** All values not starting with the given string. */
  cfapiProjectId_not_starts_with?: string | null;
  /** All values ending with the given string. */
  cfapiProjectId_ends_with?: string | null;
  /** All values not ending with the given string. */
  cfapiProjectId_not_ends_with?: string | null;

  createdAt?: DateTime | null;
  /** All values that are not equal to given value. */
  createdAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  createdAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  createdAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  createdAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  createdAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  createdAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  createdAt_gte?: DateTime | null;

  description?: string | null;
  /** All values that are not equal to given value. */
  description_not?: string | null;
  /** All values that are contained in given list. */
  description_in?: string[] | null;
  /** All values that are not contained in given list. */
  description_not_in?: string[] | null;
  /** All values less than the given value. */
  description_lt?: string | null;
  /** All values less than or equal the given value. */
  description_lte?: string | null;
  /** All values greater than the given value. */
  description_gt?: string | null;
  /** All values greater than or equal the given value. */
  description_gte?: string | null;
  /** All values containing the given string. */
  description_contains?: string | null;
  /** All values not containing the given string. */
  description_not_contains?: string | null;
  /** All values starting with the given string. */
  description_starts_with?: string | null;
  /** All values not starting with the given string. */
  description_not_starts_with?: string | null;
  /** All values ending with the given string. */
  description_ends_with?: string | null;
  /** All values not ending with the given string. */
  description_not_ends_with?: string | null;

  headerImage?: string | null;
  /** All values that are not equal to given value. */
  headerImage_not?: string | null;
  /** All values that are contained in given list. */
  headerImage_in?: string[] | null;
  /** All values that are not contained in given list. */
  headerImage_not_in?: string[] | null;
  /** All values less than the given value. */
  headerImage_lt?: string | null;
  /** All values less than or equal the given value. */
  headerImage_lte?: string | null;
  /** All values greater than the given value. */
  headerImage_gt?: string | null;
  /** All values greater than or equal the given value. */
  headerImage_gte?: string | null;
  /** All values containing the given string. */
  headerImage_contains?: string | null;
  /** All values not containing the given string. */
  headerImage_not_contains?: string | null;
  /** All values starting with the given string. */
  headerImage_starts_with?: string | null;
  /** All values not starting with the given string. */
  headerImage_not_starts_with?: string | null;
  /** All values ending with the given string. */
  headerImage_ends_with?: string | null;
  /** All values not ending with the given string. */
  headerImage_not_ends_with?: string | null;

  id?: string | null;
  /** All values that are not equal to given value. */
  id_not?: string | null;
  /** All values that are contained in given list. */
  id_in?: string[] | null;
  /** All values that are not contained in given list. */
  id_not_in?: string[] | null;
  /** All values less than the given value. */
  id_lt?: string | null;
  /** All values less than or equal the given value. */
  id_lte?: string | null;
  /** All values greater than the given value. */
  id_gt?: string | null;
  /** All values greater than or equal the given value. */
  id_gte?: string | null;
  /** All values containing the given string. */
  id_contains?: string | null;
  /** All values not containing the given string. */
  id_not_contains?: string | null;
  /** All values starting with the given string. */
  id_starts_with?: string | null;
  /** All values not starting with the given string. */
  id_not_starts_with?: string | null;
  /** All values ending with the given string. */
  id_ends_with?: string | null;
  /** All values not ending with the given string. */
  id_not_ends_with?: string | null;

  name?: string | null;
  /** All values that are not equal to given value. */
  name_not?: string | null;
  /** All values that are contained in given list. */
  name_in?: string[] | null;
  /** All values that are not contained in given list. */
  name_not_in?: string[] | null;
  /** All values less than the given value. */
  name_lt?: string | null;
  /** All values less than or equal the given value. */
  name_lte?: string | null;
  /** All values greater than the given value. */
  name_gt?: string | null;
  /** All values greater than or equal the given value. */
  name_gte?: string | null;
  /** All values containing the given string. */
  name_contains?: string | null;
  /** All values not containing the given string. */
  name_not_contains?: string | null;
  /** All values starting with the given string. */
  name_starts_with?: string | null;
  /** All values not starting with the given string. */
  name_not_starts_with?: string | null;
  /** All values ending with the given string. */
  name_ends_with?: string | null;
  /** All values not ending with the given string. */
  name_not_ends_with?: string | null;

  repoName?: string | null;
  /** All values that are not equal to given value. */
  repoName_not?: string | null;
  /** All values that are contained in given list. */
  repoName_in?: string[] | null;
  /** All values that are not contained in given list. */
  repoName_not_in?: string[] | null;
  /** All values less than the given value. */
  repoName_lt?: string | null;
  /** All values less than or equal the given value. */
  repoName_lte?: string | null;
  /** All values greater than the given value. */
  repoName_gt?: string | null;
  /** All values greater than or equal the given value. */
  repoName_gte?: string | null;
  /** All values containing the given string. */
  repoName_contains?: string | null;
  /** All values not containing the given string. */
  repoName_not_contains?: string | null;
  /** All values starting with the given string. */
  repoName_starts_with?: string | null;
  /** All values not starting with the given string. */
  repoName_not_starts_with?: string | null;
  /** All values ending with the given string. */
  repoName_ends_with?: string | null;
  /** All values not ending with the given string. */
  repoName_not_ends_with?: string | null;

  status?: ProjectStatus | null;
  /** All values that are not equal to given value. */
  status_not?: ProjectStatus | null;
  /** All values that are contained in given list. */
  status_in?: ProjectStatus[] | null;
  /** All values that are not contained in given list. */
  status_not_in?: ProjectStatus[] | null;

  updatedAt?: DateTime | null;
  /** All values that are not equal to given value. */
  updatedAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  updatedAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  updatedAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  updatedAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  updatedAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: DateTime | null;

  champions_every?: UserFilter | null;

  champions_some?: UserFilter | null;

  champions_none?: UserFilter | null;

  skills_every?: SkillFilter | null;

  skills_some?: SkillFilter | null;

  skills_none?: SkillFilter | null;
}

export interface SkillSubscriptionFilter {
  /** Logical AND on all given filters. */
  AND?: SkillSubscriptionFilter[] | null;
  /** Logical OR on all given filters. */
  OR?: SkillSubscriptionFilter[] | null;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: _ModelMutationType[] | null;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: string | null;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: string[] | null;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: string[] | null;

  node?: SkillSubscriptionFilterNode | null;
}

export interface SkillSubscriptionFilterNode {
  createdAt?: DateTime | null;
  /** All values that are not equal to given value. */
  createdAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  createdAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  createdAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  createdAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  createdAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  createdAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  createdAt_gte?: DateTime | null;

  id?: string | null;
  /** All values that are not equal to given value. */
  id_not?: string | null;
  /** All values that are contained in given list. */
  id_in?: string[] | null;
  /** All values that are not contained in given list. */
  id_not_in?: string[] | null;
  /** All values less than the given value. */
  id_lt?: string | null;
  /** All values less than or equal the given value. */
  id_lte?: string | null;
  /** All values greater than the given value. */
  id_gt?: string | null;
  /** All values greater than or equal the given value. */
  id_gte?: string | null;
  /** All values containing the given string. */
  id_contains?: string | null;
  /** All values not containing the given string. */
  id_not_contains?: string | null;
  /** All values starting with the given string. */
  id_starts_with?: string | null;
  /** All values not starting with the given string. */
  id_not_starts_with?: string | null;
  /** All values ending with the given string. */
  id_ends_with?: string | null;
  /** All values not ending with the given string. */
  id_not_ends_with?: string | null;

  name?: string | null;
  /** All values that are not equal to given value. */
  name_not?: string | null;
  /** All values that are contained in given list. */
  name_in?: string[] | null;
  /** All values that are not contained in given list. */
  name_not_in?: string[] | null;
  /** All values less than the given value. */
  name_lt?: string | null;
  /** All values less than or equal the given value. */
  name_lte?: string | null;
  /** All values greater than the given value. */
  name_gt?: string | null;
  /** All values greater than or equal the given value. */
  name_gte?: string | null;
  /** All values containing the given string. */
  name_contains?: string | null;
  /** All values not containing the given string. */
  name_not_contains?: string | null;
  /** All values starting with the given string. */
  name_starts_with?: string | null;
  /** All values not starting with the given string. */
  name_not_starts_with?: string | null;
  /** All values ending with the given string. */
  name_ends_with?: string | null;
  /** All values not ending with the given string. */
  name_not_ends_with?: string | null;

  updatedAt?: DateTime | null;
  /** All values that are not equal to given value. */
  updatedAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  updatedAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  updatedAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  updatedAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  updatedAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: DateTime | null;

  projectsWithSkill_every?: ProjectFilter | null;

  projectsWithSkill_some?: ProjectFilter | null;

  projectsWithSkill_none?: ProjectFilter | null;

  usersWithSkill_every?: UserFilter | null;

  usersWithSkill_some?: UserFilter | null;

  usersWithSkill_none?: UserFilter | null;
}

export interface UserSubscriptionFilter {
  /** Logical AND on all given filters. */
  AND?: UserSubscriptionFilter[] | null;
  /** Logical OR on all given filters. */
  OR?: UserSubscriptionFilter[] | null;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: _ModelMutationType[] | null;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: string | null;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: string[] | null;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: string[] | null;

  node?: UserSubscriptionFilterNode | null;
}

export interface UserSubscriptionFilterNode {
  auth0UserId?: string | null;
  /** All values that are not equal to given value. */
  auth0UserId_not?: string | null;
  /** All values that are contained in given list. */
  auth0UserId_in?: string[] | null;
  /** All values that are not contained in given list. */
  auth0UserId_not_in?: string[] | null;
  /** All values less than the given value. */
  auth0UserId_lt?: string | null;
  /** All values less than or equal the given value. */
  auth0UserId_lte?: string | null;
  /** All values greater than the given value. */
  auth0UserId_gt?: string | null;
  /** All values greater than or equal the given value. */
  auth0UserId_gte?: string | null;
  /** All values containing the given string. */
  auth0UserId_contains?: string | null;
  /** All values not containing the given string. */
  auth0UserId_not_contains?: string | null;
  /** All values starting with the given string. */
  auth0UserId_starts_with?: string | null;
  /** All values not starting with the given string. */
  auth0UserId_not_starts_with?: string | null;
  /** All values ending with the given string. */
  auth0UserId_ends_with?: string | null;
  /** All values not ending with the given string. */
  auth0UserId_not_ends_with?: string | null;

  createdAt?: DateTime | null;
  /** All values that are not equal to given value. */
  createdAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  createdAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  createdAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  createdAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  createdAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  createdAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  createdAt_gte?: DateTime | null;

  description?: string | null;
  /** All values that are not equal to given value. */
  description_not?: string | null;
  /** All values that are contained in given list. */
  description_in?: string[] | null;
  /** All values that are not contained in given list. */
  description_not_in?: string[] | null;
  /** All values less than the given value. */
  description_lt?: string | null;
  /** All values less than or equal the given value. */
  description_lte?: string | null;
  /** All values greater than the given value. */
  description_gt?: string | null;
  /** All values greater than or equal the given value. */
  description_gte?: string | null;
  /** All values containing the given string. */
  description_contains?: string | null;
  /** All values not containing the given string. */
  description_not_contains?: string | null;
  /** All values starting with the given string. */
  description_starts_with?: string | null;
  /** All values not starting with the given string. */
  description_not_starts_with?: string | null;
  /** All values ending with the given string. */
  description_ends_with?: string | null;
  /** All values not ending with the given string. */
  description_not_ends_with?: string | null;

  email?: string | null;
  /** All values that are not equal to given value. */
  email_not?: string | null;
  /** All values that are contained in given list. */
  email_in?: string[] | null;
  /** All values that are not contained in given list. */
  email_not_in?: string[] | null;
  /** All values less than the given value. */
  email_lt?: string | null;
  /** All values less than or equal the given value. */
  email_lte?: string | null;
  /** All values greater than the given value. */
  email_gt?: string | null;
  /** All values greater than or equal the given value. */
  email_gte?: string | null;
  /** All values containing the given string. */
  email_contains?: string | null;
  /** All values not containing the given string. */
  email_not_contains?: string | null;
  /** All values starting with the given string. */
  email_starts_with?: string | null;
  /** All values not starting with the given string. */
  email_not_starts_with?: string | null;
  /** All values ending with the given string. */
  email_ends_with?: string | null;
  /** All values not ending with the given string. */
  email_not_ends_with?: string | null;

  flowdockName?: string | null;
  /** All values that are not equal to given value. */
  flowdockName_not?: string | null;
  /** All values that are contained in given list. */
  flowdockName_in?: string[] | null;
  /** All values that are not contained in given list. */
  flowdockName_not_in?: string[] | null;
  /** All values less than the given value. */
  flowdockName_lt?: string | null;
  /** All values less than or equal the given value. */
  flowdockName_lte?: string | null;
  /** All values greater than the given value. */
  flowdockName_gt?: string | null;
  /** All values greater than or equal the given value. */
  flowdockName_gte?: string | null;
  /** All values containing the given string. */
  flowdockName_contains?: string | null;
  /** All values not containing the given string. */
  flowdockName_not_contains?: string | null;
  /** All values starting with the given string. */
  flowdockName_starts_with?: string | null;
  /** All values not starting with the given string. */
  flowdockName_not_starts_with?: string | null;
  /** All values ending with the given string. */
  flowdockName_ends_with?: string | null;
  /** All values not ending with the given string. */
  flowdockName_not_ends_with?: string | null;

  githubName?: string | null;
  /** All values that are not equal to given value. */
  githubName_not?: string | null;
  /** All values that are contained in given list. */
  githubName_in?: string[] | null;
  /** All values that are not contained in given list. */
  githubName_not_in?: string[] | null;
  /** All values less than the given value. */
  githubName_lt?: string | null;
  /** All values less than or equal the given value. */
  githubName_lte?: string | null;
  /** All values greater than the given value. */
  githubName_gt?: string | null;
  /** All values greater than or equal the given value. */
  githubName_gte?: string | null;
  /** All values containing the given string. */
  githubName_contains?: string | null;
  /** All values not containing the given string. */
  githubName_not_contains?: string | null;
  /** All values starting with the given string. */
  githubName_starts_with?: string | null;
  /** All values not starting with the given string. */
  githubName_not_starts_with?: string | null;
  /** All values ending with the given string. */
  githubName_ends_with?: string | null;
  /** All values not ending with the given string. */
  githubName_not_ends_with?: string | null;

  id?: string | null;
  /** All values that are not equal to given value. */
  id_not?: string | null;
  /** All values that are contained in given list. */
  id_in?: string[] | null;
  /** All values that are not contained in given list. */
  id_not_in?: string[] | null;
  /** All values less than the given value. */
  id_lt?: string | null;
  /** All values less than or equal the given value. */
  id_lte?: string | null;
  /** All values greater than the given value. */
  id_gt?: string | null;
  /** All values greater than or equal the given value. */
  id_gte?: string | null;
  /** All values containing the given string. */
  id_contains?: string | null;
  /** All values not containing the given string. */
  id_not_contains?: string | null;
  /** All values starting with the given string. */
  id_starts_with?: string | null;
  /** All values not starting with the given string. */
  id_not_starts_with?: string | null;
  /** All values ending with the given string. */
  id_ends_with?: string | null;
  /** All values not ending with the given string. */
  id_not_ends_with?: string | null;

  name?: string | null;
  /** All values that are not equal to given value. */
  name_not?: string | null;
  /** All values that are contained in given list. */
  name_in?: string[] | null;
  /** All values that are not contained in given list. */
  name_not_in?: string[] | null;
  /** All values less than the given value. */
  name_lt?: string | null;
  /** All values less than or equal the given value. */
  name_lte?: string | null;
  /** All values greater than the given value. */
  name_gt?: string | null;
  /** All values greater than or equal the given value. */
  name_gte?: string | null;
  /** All values containing the given string. */
  name_contains?: string | null;
  /** All values not containing the given string. */
  name_not_contains?: string | null;
  /** All values starting with the given string. */
  name_starts_with?: string | null;
  /** All values not starting with the given string. */
  name_not_starts_with?: string | null;
  /** All values ending with the given string. */
  name_ends_with?: string | null;
  /** All values not ending with the given string. */
  name_not_ends_with?: string | null;

  picture?: string | null;
  /** All values that are not equal to given value. */
  picture_not?: string | null;
  /** All values that are contained in given list. */
  picture_in?: string[] | null;
  /** All values that are not contained in given list. */
  picture_not_in?: string[] | null;
  /** All values less than the given value. */
  picture_lt?: string | null;
  /** All values less than or equal the given value. */
  picture_lte?: string | null;
  /** All values greater than the given value. */
  picture_gt?: string | null;
  /** All values greater than or equal the given value. */
  picture_gte?: string | null;
  /** All values containing the given string. */
  picture_contains?: string | null;
  /** All values not containing the given string. */
  picture_not_contains?: string | null;
  /** All values starting with the given string. */
  picture_starts_with?: string | null;
  /** All values not starting with the given string. */
  picture_not_starts_with?: string | null;
  /** All values ending with the given string. */
  picture_ends_with?: string | null;
  /** All values not ending with the given string. */
  picture_not_ends_with?: string | null;

  role?: UserRole | null;
  /** All values that are not equal to given value. */
  role_not?: UserRole | null;
  /** All values that are contained in given list. */
  role_in?: UserRole[] | null;
  /** All values that are not contained in given list. */
  role_not_in?: UserRole[] | null;

  updatedAt?: DateTime | null;
  /** All values that are not equal to given value. */
  updatedAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  updatedAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  updatedAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  updatedAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  updatedAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: DateTime | null;

  projectsChampioned_every?: ProjectFilter | null;

  projectsChampioned_some?: ProjectFilter | null;

  projectsChampioned_none?: ProjectFilter | null;

  skills_every?: SkillFilter | null;

  skills_some?: SkillFilter | null;

  skills_none?: SkillFilter | null;
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

export type UserEmailsVariables = {
  date?: DateTime | null;
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

export type GetUserVariables = {
  id?: string | null;
};

export type GetUserQuery = {
  __typename?: 'Query';

  user: GetUserUser | null;
};

export type GetUserUser = MemberProfileFragmentFragment;

export type UsersListVariables = {};

export type UsersListQuery = {
  __typename?: 'Query';

  allUsers: UsersListAllUsers[];
};

export type UsersListAllUsers = {
  __typename?: 'User';

  id: string;

  name: string | null;

  picture: string | null;
};

export type MemberProfileFragmentFragment = {
  __typename?: 'User';

  id: string;

  picture: string | null;

  name: string | null;

  description: string | null;

  githubName: string | null;

  flowdockName: string | null;

  email: string;

  skills: MemberProfileFragmentSkills[] | null;
};

export type MemberProfileFragmentSkills = {
  __typename?: 'Skill';

  id: string;

  name: string;
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
    email
    skills {
      id
      name
    }
  }
`;

// ====================================================
// Components
// ====================================================

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

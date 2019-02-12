/**
 * Returns a path for a github or waffle url given either
 * - a repo: e.g. 'members' => returns 'codefordenver/members'
 * - an org/repo: e.g. 'org/custom' => returns 'org/custom'
 * @param path
 */
export default function getRepoPath(path: string) {
  const parts = path.split('/');
  if (parts.length === 2) {
    return path;
  }
  return `codefordenver/${path}`;
}

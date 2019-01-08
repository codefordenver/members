import { User } from '../sharedTypes';

export default function userIsAdmin(user?: User) {
  return user && user.role === 'ADMIN';
}

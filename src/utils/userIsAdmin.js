export default function userIsAdmin(user) {
  return user && user.role === 'ADMIN';
}

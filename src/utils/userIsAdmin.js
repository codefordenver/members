export default function userIsAdmin(user) {
  console.log(user);
  return user && user.role === 'ADMIN';
}

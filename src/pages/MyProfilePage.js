import { compose } from 'react-apollo';
import withViewPage from '../utils/withViewPage';
import MemberProfile from '../sections/MemberProfile';
import { withLoggedInUser } from '../utils';

export default compose(
  withLoggedInUser,
  withViewPage({
    renameProps: {
      formData: 'user'
    }
  })
)(MemberProfile);

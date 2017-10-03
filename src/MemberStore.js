import { extendObservable } from 'mobx';

class MemberStore {
  constructor(props) {
    extendObservable(this, {...props})
  }
}

export default MemberStore;

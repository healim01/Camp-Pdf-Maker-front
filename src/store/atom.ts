import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'localStorage', //원하는 key 값 입력
  storage: localStorage,
});

export const UserId = atom({
  key: 'UserId',
  default: '',
});

export const UserName = atom({
  key: 'UserName',
  default: '',
});

export const UserDept = atom({
  key: 'UserDept',
  default: '',
});

export const UserEmail = atom({
  key: 'UserEmail',
  default: '',
});

export const IsLoginState = atom({
  key: 'IsLoginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const MemberIdState = atom({
  key: 'MemberIdState',
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

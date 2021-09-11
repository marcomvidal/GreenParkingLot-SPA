import { User } from 'store/user/types';

const USERS: Partial<User>[] = [
  { email: 'homer@simpson.com', name: 'Homer Simpson', baseTax: 10 },
  { email: 'peter@griffin.com', name: 'Peter Griffin', baseTax: 12 },
  { email: 'fred@flintstone.com', name: 'Fred Flintstone', baseTax: 15 },
];

export default USERS;

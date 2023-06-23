import Image from './Image';

export default interface User {
  id: string;
  createdAt: Date;
  updatedAt: Date | null;
  emailAddress: string;
  password: string;
  firstName: string;
  lastName: string;
  profileImage: Image | null;
}

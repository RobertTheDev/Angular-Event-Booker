import Image from './Image';

interface Organisation {
  id: string;
  createdAt: Date;
  updatedAt: Date | null;
  name: string;
  about: string;
  logo: Image;
  coverImage: Image;
  totalFollowers: number;
  totalEvents: number;
}

export default Organisation;

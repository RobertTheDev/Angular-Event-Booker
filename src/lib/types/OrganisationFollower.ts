import Organisation from './Organisation';
import User from './User';

interface OrganisationFollower {
  id: string;
  createdAt: Date;
  updatedAt: Date | null;
  organistionId: string;
  organisation: Organisation;
  userId: string;
  user: User;
}

export default OrganisationFollower;

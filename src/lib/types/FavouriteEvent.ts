import Event from './Event';
import User from './User';

interface FavouriteEvent {
  id: string;
  createdAt: Date;
  updatedAt: Date | null;
  eventId: string;
  userId: string;
  event: Event;
  user: User;
}

export default FavouriteEvent;

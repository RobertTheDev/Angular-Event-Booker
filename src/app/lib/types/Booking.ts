import Event from './Event';
import User from './User';

interface Booking {
  id: string;
  createdAt: Date;
  updatedAt: Date | null;
  event: Event;
  user: User;
}

export default Booking;

import Image from './Image';
import Location from './Location';

interface Event {
  id: string;
  createdAt: Date;
  updatedAt: Date | null;
  image: Image;
  name: string;
  headline: string | null;
  location: Location | null;
  about: string | null;
  dateOfEvent: Date;
  refundPolciy: string | null;
  ticketType: string;
  tags: string[];
  duration: Duration;
}

export default Event;

interface Duration {
  length: number;
  unit: string;
}

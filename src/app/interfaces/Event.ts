import Image from './Image';
import Location from './Location';
import Organisation from './Organisation';

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
  refundPolicy: string | null;
  price: {
    total: number;
    currencyUnit: string;
  };
  ticketType: string;
  tags: string[];
  duration: Duration;
  organisation: Organisation | null;
}

export default Event;

interface Duration {
  length: number;
  unit: string;
}

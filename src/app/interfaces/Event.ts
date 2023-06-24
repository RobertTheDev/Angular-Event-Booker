import Image from './Image';
import Location from './Location';
import Organisation from './Organisation';

interface Event {
  id: string;
  createdAt: Date;
  spacesBooked: number;
  spacesTotal: number;
  minimumAge: number;
  bookingDeadlineDate: Date;
  name: string;
  headline: string;
  refundPolicy: null;
  facebook: string;
  instagram: string;
  twitter: string;
  location: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    address: string;
    town: string;
    country: string;
  };
  about: string;
  ticketType: string;
  image: {
    createdAt: Date;
    updatedAt: null;
    url: string;
    alt: string;
  };
  price: {
    total: number;
    currencyUnit: string;
  };
  startDate: Date;
  endDate: Date;
  tags: string[];
  duration: {
    length: number;
    unit: string;
  };
  organisation: Organisation;
  coverImage: {
    url: string;
    alt: string;
    createdAt: Date;
    updatedAt: null;
  };
  totalFollowers: number;
  totalEvents: number;
}

export default Event;

interface Duration {
  length: number;
  unit: string;
}

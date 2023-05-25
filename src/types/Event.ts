import Image from './Image';

interface Event {
  id: string;
  createdAt: Date;
  updatedAt: Date | null;
  image: Image;
  name: string;
  location: Location | null;
  about: string | null;
  dateOfEvent: Date;
  refundPolciy: string | null;
  ticketType: TicketType;
  tags: string[];
  duration: Duration;
}

export default Event;

interface Duration {
  length: number;
  unit: string;
}

enum TicketType {
  'Physical Ticket',
  'E-Ticket',
}

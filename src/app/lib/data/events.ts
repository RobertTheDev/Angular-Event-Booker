import Event from 'src/app/lib/types/Event';

const eventsData: Event[] = [
  {
    id: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'Tribute to Hans Zimmer & John Williams by Moonlight: Edinburgh Late Concert',
    headline:
      "An immersive tribute to Hans Zimmer and John William's most iconic music with a live chamber orchestra in a moon-lit setting.",
    refundPolicy: null,
    location: {
      id: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      address: '',
      town: '',
      region: '',
      country: '',
    },
    about: null,
    ticketType: 'E-Ticket',
    image: {
      createdAt: new Date(),
      updatedAt: null,
      url: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F465117129%2F61565826027%2F1%2Foriginal.20230308-134732?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C23%2C2048%2C1024&s=4268e68912849bf25d2355a4cc86a1fb',
      alt: '',
    },
    dateOfEvent: new Date(),
    tags: ['Cat', 'Dog'],
    duration: {
      length: 6,
      unit: 'hours',
    },
  },
  {
    id: '2',
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'Tribute to Hans Zimmer & John Williams by Moonlight: Edinburgh Late Concert',
    headline:
      "An immersive tribute to Hans Zimmer and John William's most iconic music with a live chamber orchestra in a moon-lit setting.",
    refundPolicy: null,
    location: {
      id: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      address: '',
      town: '',
      region: '',
      country: '',
    },
    about: null,
    ticketType: 'E-Ticket',
    image: {
      createdAt: new Date(),
      updatedAt: null,
      url: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F465117129%2F61565826027%2F1%2Foriginal.20230308-134732?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C23%2C2048%2C1024&s=4268e68912849bf25d2355a4cc86a1fb',
      alt: '',
    },
    dateOfEvent: new Date(),
    tags: ['Cat', 'Dog'],
    duration: {
      length: 6,
      unit: 'hours',
    },
  },
];

export default eventsData;

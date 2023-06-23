import Event from '../interfaces/Event';

const eventsData = [
  {
    id: '1',
    createdAt: new Date(),
    spacesBooked: 444,
    spacesTotal: 546,
    minimumAge: 18,
    bookingDeadlineDate: new Date(),
    name: 'Tribute to Hans Zimmer & John Williams by Moonlight: Edinburgh Late Concert',
    headline:
      "An immersive tribute to Hans Zimmer and John William's most iconic music with a live chamber orchestra in a moon-lit setting.",
    refundPolicy: null,
    facebook: '',
    instagram: '',
    twitter: '',
    location: {
      id: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
      address: "The Queen's Hall 85-89 Clerk Street Newington EH8 9JG",
      town: 'Newington',
      country: 'United Kingdom',
    },
    about: `A night dedicated to worshipping at the altar of Taylor Swift: non-stop Swifty all night: deep cuts, extended mixes, fan favourites and all the hits.

Do you have a Blank Space in your diary? Then this night is Taylor-made for you! Join fellow fans in a celebration of the genius of the Swift - because she'll never go out of Style.

This is an 18+ event.`,
    ticketType: 'E-Ticket',
    image: {
      createdAt: new Date(),
      updatedAt: null,
      url: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F465117129%2F61565826027%2F1%2Foriginal.20230308-134732?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C23%2C2048%2C1024&s=4268e68912849bf25d2355a4cc86a1fb',
      alt: '',
    },
    price: {
      total: 34.99,
      currencyUnit: 'GBP',
    },
    startDate: new Date('2023-07-02T13:37:27+00:00'),
    endDate: new Date('2023-07-02T13:37:27+00:00'),
    tags: ['Cat', 'Dog'],
    duration: {
      length: 6,
      unit: 'hours',
    },
    organisation: {
      id: '1',
      name: 'London Film Music Orchestra',
      createdAt: new Date(),
      about: '',
      logo: {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQshMcjpZQHVBdgbaV01xygU1UE3_59qVNKFFaD0jE19A&s',
        alt: '',
        createdAt: new Date(),
        updatedAt: null,
      },
      coverImage: {
        url: '',
        alt: '',
        createdAt: new Date(),
        updatedAt: null,
      },
      totalFollowers: 1222,
      totalEvents: 4,
    },
  },
  // },
  // {
  //   id: '2',
  //   createdAt: new Date(),

  //   name: 'Tribute to Hans Zimmer & John Williams by Moonlight: Edinburgh Late Concert',
  //   headline:
  //     "An immersive tribute to Hans Zimmer and John William's most iconic music with a live chamber orchestra in a moon-lit setting.",
  //   refundPolicy: null,
  //   location: {
  //     id: '1',
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //     address: "The Queen's Hall 85-89 Clerk Street Newington EH8 9JG",
  //     town: 'Newington',
  //     country: 'United Kingdom',
  //   },
  //   about: null,
  //   ticketType: 'E-Ticket',
  //   image: {
  //     createdAt: new Date(),
  //     updatedAt: null,
  //     url: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F474159559%2F242199527412%2F1%2Foriginal.20230321-150233?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C45%2C1920%2C960&s=9e530666ab5b38546da77181a9140a38',
  //     alt: '',
  //   },
  //   organisation: {
  //     id: '1',
  //     name: 'London Film Music Orchestra',
  //     createdAt: new Date(),
  //     updatedAt: null,
  //     about: '',
  //     logo: {
  //       url: '',
  //       alt: '',
  //       createdAt: new Date(),
  //       updatedAt: null,
  //     },
  //     coverImage: {
  //       url: '',
  //       alt: '',
  //       createdAt: new Date(),
  //       updatedAt: null,
  //     },
  //     totalFollowers: 1222,
  //     totalEvents: 4,
  //   },
  //   price: {
  //     total: 34.99,
  //     currencyUnit: 'GBP',
  //   },
  //   dateOfEvent: new Date(),
  //   tags: ['Cat', 'Dog'],
  //   duration: {
  //     length: 6,
  //     unit: 'hours',
  //   },
  // },
  // {
  //   id: '11',
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  //   name: 'Tribute to Hans Zimmer & John Williams by Moonlight: Edinburgh Late Concert',
  //   headline:
  //     "An immersive tribute to Hans Zimmer and John William's most iconic music with a live chamber orchestra in a moon-lit setting.",
  //   refundPolicy: null,
  //   location: {
  //     id: '1',
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //     address: "The Queen's Hall 85-89 Clerk Street Newington EH8 9JG",
  //     town: 'Newington',
  //     country: 'United Kingdom',
  //   },
  //   about: null,
  //   ticketType: 'E-Ticket',
  //   image: {
  //     createdAt: new Date(),
  //     updatedAt: null,
  //     url: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F480366049%2F246300133119%2F1%2Foriginal.20230329-121804?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C40%2C1280%2C640&s=a27328d1217491c02b123b12e034b9b1',
  //     alt: '',
  //   },
  //   price: {
  //     total: 34.99,
  //     currencyUnit: 'GBP',
  //   },
  //   dateOfEvent: new Date(),
  //   tags: ['Cat', 'Dog'],
  //   duration: {
  //     length: 6,
  //     unit: 'hours',
  //   },
  //   organisation: {
  //     id: '1',
  //     name: 'London Film Music Orchestra',
  //     createdAt: new Date(),
  //     updatedAt: null,
  //     about: '',
  //     logo: {
  //       url: '',
  //       alt: '',
  //       createdAt: new Date(),
  //       updatedAt: null,
  //     },
  //     coverImage: {
  //       url: '',
  //       alt: '',
  //       createdAt: new Date(),
  //       updatedAt: null,
  //     },
  //     totalFollowers: 1222,
  //     totalEvents: 4,
  //   },
  // },
  // {
  //   id: '21',
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  //   name: 'Tribute to Hans Zimmer & John Williams by Moonlight: Edinburgh Late Concert',
  //   headline:
  //     "An immersive tribute to Hans Zimmer and John William's most iconic music with a live chamber orchestra in a moon-lit setting.",
  //   refundPolicy: null,
  //   location: {
  //     id: '1',
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //     address: "The Queen's Hall 85-89 Clerk Street Newington EH8 9JG",
  //     town: 'Newington',
  //     country: 'United Kingdom',
  //   },
  //   about: null,
  //   ticketType: 'E-Ticket',
  //   image: {
  //     createdAt: new Date(),
  //     updatedAt: null,
  //     url: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F480363969%2F246300133119%2F1%2Foriginal.20230329-121555?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C289%2C1278%2C639&s=27c2d0a38cefa80c1e458b6e9e3df6e5',
  //     alt: '',
  //   },
  //   organisation: {
  //     id: '1',
  //     name: 'London Film Music Orchestra',
  //     createdAt: new Date(),
  //     updatedAt: null,
  //     about: '',
  //     logo: {
  //       url: '',
  //       alt: '',
  //       createdAt: new Date(),
  //       updatedAt: null,
  //     },
  //     coverImage: {
  //       url: '',
  //       alt: '',
  //       createdAt: new Date(),
  //       updatedAt: null,
  //     },
  //     totalFollowers: 1222,
  //     totalEvents: 4,
  //   },
  //   price: {
  //     total: 34.99,
  //     currencyUnit: 'GBP',
  //   },
  //   dateOfEvent: new Date(),
  //   tags: ['Cat', 'Dog'],
  //   duration: {
  //     length: 6,
  //     unit: 'hours',
  //   },
  // },
];

export default eventsData;

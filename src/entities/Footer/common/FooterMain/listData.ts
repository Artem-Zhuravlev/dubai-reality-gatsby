interface ListData {
  title?: string;
  list: Array<{
    to: string;
    value: string;
  }>
}

export const listData: ListData[] = [
  {
    title: 'Buy',
    list: [
      {
        to: '/buy/apartment-in-dubai',
        value: 'Apartment in Dubai'
      },
      {
        to: '/buy/house-in-dubai',
        value: 'House in Dubai'
      },
      {
        to: '/buy/apartments-in-dubai',
        value: 'Apartments in Dubai'
      },
      {
        to: '/buy/loft-in-dubai',
        value: 'Loft in Dubai'
      },
      {
        to: '/buy/penthouse-in-dubai',
        value: 'Penthouse in Dubai'
      },
      {
        to: '/buy/villa-in-dubai',
        value: 'Villa in Dubai'
      }
    ]
  },
  {
    title: 'Services',
    list: [
      {
        to: '/services/property-management',
        value: 'Property management in Dubai, UAE'
      },
      {
        to: '/services/sell-property',
        value: 'Sell property in Dubai, UAE'
      },
      {
        to: '/services/rent-property',
        value: 'Rent property in Dubai, UAE'
      },
      {
        to: '/services/investments',
        value: 'Investments in Dubai, UAE'
      },
      {
        to: '/services/real-estate-for-cryptocurrency',
        value: 'Real estate for cryptocurrency in Dubai'
      },
      {
        to: '/services/moving-to-dubai',
        value: 'Moving to Dubai, UAE'
      }
    ]
  },
  {
    title: 'Information',
    list: [
      {
        to: '/information/video',
        value: 'Video'
      },
      {
        to: '/information/podcasts',
        value: 'Podcasts'
      },
      {
        to: '/information/laws',
        value: 'Laws'
      },
      {
        to: '/information/questions',
        value: 'Questions and answers'
      },
      {
        to: '/information/books',
        value: 'Books'
      }
    ]
  },
  {
    title: 'About company',
    list: [
      {
        to: '/about-company/jobs',
        value: 'Jobs '
      },
      {
        to: '/about-company/licenses',
        value: 'Licenses'
      },
    ]
  }
];
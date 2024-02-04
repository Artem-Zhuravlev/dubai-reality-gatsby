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
        to: 'apartment-in-dubai',
        value: 'Apartment in Dubai'
      },
      {
        to: 'house-in-dubai',
        value: 'House in Dubai'
      },
      {
        to: 'apartments-in-dubai',
        value: 'Apartments in Dubai'
      },
      {
        to: 'loft-in-dubai',
        value: 'Loft in Dubai'
      },
      {
        to: 'penthouse-in-dubai',
        value: 'Penthouse in Dubai'
      },
      {
        to: 'villa-in-dubai',
        value: 'Villa in Dubai'
      }
    ]
  },
  {
    title: 'Services',
    list: [
      {
        to: 'property-management-in-dubai',
        value: 'Property management in Dubai, UAE'
      },
      {
        to: 'sell-property-in-dubai',
        value: 'Sell property in Dubai, UAE'
      },
      {
        to: 'rent-property-in-dubai',
        value: 'Rent property in Dubai, UAE'
      },
      {
        to: 'investments-in-dubai',
        value: 'Investments in Dubai, UAE'
      },
      {
        to: 'real-estate-for-cryptocurrency-in-dubai',
        value: 'Real estate for cryptocurrency in Dubai'
      },
      {
        to: 'moving-to-dubai',
        value: 'Moving to Dubai, UAE'
      }
    ]
  },
  {
    title: 'Information',
    list: [
      {
        to: 'video',
        value: 'Video'
      },
      {
        to: 'podcasts',
        value: 'Podcasts'
      },
      {
        to: 'laws',
        value: 'Laws'
      },
      {
        to: 'questions-and-answers',
        value: 'Questions and answers'
      },
      {
        to: 'books',
        value: 'Books'
      },
      {
        to: 'articles',
        value: 'Articles'
      }
    ]
  },
  {
    title: 'About company',
    list: [
      {
        to: 'jobs',
        value: 'Jobs '
      },
      {
        to: 'licenses',
        value: 'Licenses'
      },
      {
        to: 'why-we-are',
        value: 'Why are we'
      },
      {
        to: 'questions-and-answers',
        value: 'Questions and answers'
      },
      {
        to: 'real-estate-agency',
        value: 'Real estate agency'
      }
    ]
  }
];
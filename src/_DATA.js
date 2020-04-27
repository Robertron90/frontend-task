const DATA = [
  {
    name: 'Luxury',
    dates: [
      { date: '4/20/2020', currentPrice: 100, recommendedPrice: 150 },
      { date: '4/21/2020', currentPrice: 250, recommendedPrice: 200 },
      { date: '4/22/2020', currentPrice: 200, recommendedPrice: 200 },
    ],
  },
  {
    name: 'Standard For Two',
    dates: [
      { date: '4/20/2020', currentPrice: 100, recommendedPrice: 150 },
      { date: '4/21/2020', currentPrice: 150, recommendedPrice: 200 },
      { date: '4/22/2020', currentPrice: 200, recommendedPrice: 250 },
    ],
  },
  {
    name: 'Standard For Three',
    dates: [
      { date: '4/20/2020', currentPrice: 100, recommendedPrice: 150 },
      { date: '4/21/2020', currentPrice: 150, recommendedPrice: 200 },
      { date: '4/22/2020', currentPrice: 200, recommendedPrice: 250 },
    ],
  },
  {
    name: 'Twin',
    dates: [
      { date: '4/20/2020', currentPrice: 100, recommendedPrice: 150 },
      { date: '4/21/2020', currentPrice: 150, recommendedPrice: 200 },
      { date: '4/22/2020', currentPrice: 200, recommendedPrice: 250 },
    ],
  },
];

export const fetchData = () =>
  new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(DATA);
    }, 1000);
  });

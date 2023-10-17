const seattle = {
  minHourlyCustomers: 23,
  maxhourlyCustomer: 65,
  cookieAvg: 6.3,
  projectedSales: [],
  generateCustomers: function() {
    let min = Math.ceil(this.minHourlyCustomers);
    let max = Math.floor(this.maxhourlyCustomer);

    return Math.floor(Math.random() * (max-min) + min);
  },
};

const tokyo = {
  minHourlyCustomers: 3,
  maxhourlyCustomer: 24,
  cookieAvg: 1.2,
  projectedSales: [],
  generateCustomers: function() {
    let min = Math.ceil(this.minHourlyCustomers);
    let max = Math.floor(this.maxhourlyCustomer);

    return Math.floor(Math.random() * (max-min) + min);
  },
};

const dubai = {
  minHourlyCustomers: 11,
  maxhourlyCustomer: 38,
  cookieAvg: 3.7,
  projectedSales: [],
  generateCustomers: function() {
    let min = Math.ceil(this.minHourlyCustomers);
    let max = Math.floor(this.maxhourlyCustomer);

    return Math.floor(Math.random() * (max-min) + min);
  },
};

const paris = {
  minHourlyCustomers: 20,
  maxhourlyCustomer: 38,
  cookieAvg: 2.3,
  projectedSales: [],
  generateCustomers: function() {
    let min = Math.ceil(this.minHourlyCustomers);
    let max = Math.floor(this.maxhourlyCustomer);

    return Math.floor(Math.random() * (max-min) + min);
  },
};

const lima = {
  minHourlyCustomers: 2,
  maxhourlyCustomer: 16,
  cookieAvg: 4.6,
  projectedSales: [],
  generateCustomers: function() {
    let min = Math.ceil(this.minHourlyCustomers);
    let max = Math.floor(this.maxhourlyCustomer);

    return Math.floor(Math.random() * (max-min) + min);
  },
};

// Function to calculate the projected sales of a location

function calculateSales (city) {
  let salesProjection = [];

  for (let i = 6; i <=20; i++) {
    let cookiesSold = Math.trunc(city.generateCustomers() * city.cookieAvg);

    if (i < 12) {
      salesProjection.push(i + 'am: ' + cookiesSold + ' cookies');
    } else if (i === 12) {
      salesProjection.push(i + 'pm: ' + cookiesSold + ' cookies');
    } else {
      salesProjection.push((i-12) + 'pm: ' + cookiesSold + ' cookies');
    }
  }

  return salesProjection;
}

seattle.projectedSales = calculateSales(seattle);
tokyo.projectedSales = calculateSales(tokyo);
dubai.projectedSales = calculateSales(dubai);
paris.projectedSales = calculateSales(paris);
lima.projectedSales = calculateSales(lima);

console.log(seattle.projectedSales);
console.log(tokyo.projectedSales);
console.log(dubai.projectedSales);
console.log(paris.projectedSales);
console.log(lima.projectedSales);

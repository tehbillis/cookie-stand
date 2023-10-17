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

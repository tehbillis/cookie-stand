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

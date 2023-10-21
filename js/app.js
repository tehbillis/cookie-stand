const locations = [];

class Location {
  constructor (min, max, avg) {
    this.minHourlyCustomers = min;
    this.maxhourlyCustomers = max;
    this.cookieAvg = avg;
    this.projectedSales = this.calculateSales();
    locations.push(this);
  }

  generateCustomers() {
    let min = Math.ceil(this.minHourlyCustomers);
    let max = Math.floor(this.maxhourlyCustomers);

    return Math.floor(Math.random() * (max-min) + min);
  }

  calculateSales () {
    let salesProjection = [];
    let salesTotal = 0;

    for (let i = 6; i <=20; i++) {
      let cookiesSold = Math.trunc(this.generateCustomers() * this.cookieAvg);

      salesTotal += cookiesSold;

      if (i < 12) {
        salesProjection.push(i + 'am: ' + cookiesSold + ' cookies');
      } else if (i === 12) {
        salesProjection.push(i + 'pm: ' + cookiesSold + ' cookies');
      } else {
        salesProjection.push((i-12) + 'pm: ' + cookiesSold + ' cookies');
      }
    }

    salesProjection.push('Total: ' + salesTotal + ' cookies');

    return salesProjection;
  }
}

const seattle = new Location(23, 65, 6.3);
const tokyo = new Location(3, 24, 1.2);
const dubai = new Location(11, 38, 3.7);
const paris = new Location(20, 38, 2.3);
const lima = new Location(2, 16, 4.6);

console.log(locations);

const locations = [];

class Location {
  constructor (name, min, max, avg) {
    this.name = name;
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
    let salesProjection = document.createElement('tr');
    let cookiesTotal = document.createElement('td');
    let salesTotal = 0;

    // Add the location name to the table row
    salesProjection.appendChild(document.createElement('td')).innerText = this.name;

    // Add sales data to the table row
    for (let i = 6; i <=20; i++) {
      let cookiesSold = Math.trunc(this.generateCustomers() * this.cookieAvg);
      let hourlyCookies = document.createElement('td');
      salesTotal += cookiesSold;

      if (i < 12) {
        hourlyCookies.innerText = i + 'am: ' + cookiesSold + ' cookies';
      } else if (i === 12) {
        hourlyCookies.innerText = i + 'pm: ' + cookiesSold + ' cookies';
      } else {
        hourlyCookies.innerText = (i-12) + 'pm: ' + cookiesSold + ' cookies';
      }

      salesProjection.appendChild(hourlyCookies);
    }

    // Add total to table row
    salesProjection.appendChild(cookiesTotal).innerText = 'Total: ' + salesTotal + ' cookies';

    console.log(salesProjection);

    return salesProjection;
  }
}


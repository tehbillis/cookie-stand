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

    for (let i = 6; i <=20; i++) {
      let cookiesSold = Math.trunc(this.generateCustomers() * this.cookieAvg);
      let hourlyCookies = document.createElement('td');
      salesTotal += cookiesSold;

      if (i < 12) {
        //salesProjection.push(i + 'am: ' + cookiesSold + ' cookies');
        hourlyCookies.innerText = i + 'am: ' + cookiesSold + ' cookies';
      } else if (i === 12) {
        //salesProjection.push(i + 'pm: ' + cookiesSold + ' cookies');
        hourlyCookies.innerText = i + 'pm: ' + cookiesSold + ' cookies';
      } else {
        //salesProjection.push((i-12) + 'pm: ' + cookiesSold + ' cookies');
        hourlyCookies.innerText = (i-12) + 'pm: ' + cookiesSold + ' cookies';
      }

      salesProjection.appendChild(hourlyCookies);
    }

    //salesProjection.push('Total: ' + salesTotal + ' cookies');
    salesProjection.appendChild(cookiesTotal).innerText = 'Total: ' + salesTotal + ' cookies';

    console.log(salesProjection);

    return salesProjection;
  }
}


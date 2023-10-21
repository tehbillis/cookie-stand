const locations = [];

class Location {
  constructor (name, min, max, avg) {
    this.name = name;
    this.minHourlyCustomers = min;
    this.maxhourlyCustomers = max;
    this.cookieAvg = avg;
    this.render();
    locations.push(this);
  }

  generateCustomers() {
    let min = Math.ceil(this.minHourlyCustomers);
    let max = Math.floor(this.maxhourlyCustomers);

    return Math.floor(Math.random() * (max-min) + min);
  }

  render () {
    let salesProjection = document.createElement('tr');
    let salesTotal = 0;

    // Add the location name to the table row
    salesProjection.appendChild(document.createElement('td')).innerText = this.name;

    // Add sales data to the table row
    for (let i = 0; i <=14; i++) {
      let cookiesSold = Math.trunc(this.generateCustomers() * this.cookieAvg); //Calculate cookies sold
      salesTotal += cookiesSold; //Add to our running total
      salesProjection.appendChild(document.createElement('td')).innerText = cookiesSold; //Append the data
    }

    salesProjection.appendChild(document.createElement('td')).innerText = salesTotal; // Add running total to table row

    document.getElementById('locationsTable').appendChild(salesProjection);

    return salesProjection;
  }
}

// Function to create header

function createSalesHeader() {
  let headerRow = document.createElement('tr');

  headerRow.appendChild(document.createElement('th')).innerText = ' ';

  for (let i = 6; i <=20; i++) {
    if (i < 12) {
      headerRow.appendChild(document.createElement('th')).innerText = i + ':00am';
    } else if (i === 12) {
      headerRow.appendChild(document.createElement('th')).innerText = i + ':00pm';
    } else {
      headerRow.appendChild(document.createElement('th')).innerText = (i - 12) + ':00pm';
    }
  }

  headerRow.appendChild(document.createElement('th')).innerText = 'Daily Location Total';

  document.getElementById('locationsTable').appendChild(headerRow);
}

// TODO: function to create footer

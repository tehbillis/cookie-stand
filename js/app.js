
class Location {
  constructor (name, min, max, avg) {
    this.name = name;
    this.minHourlyCustomers = min;
    this.maxhourlyCustomers = max;
    this.cookieAvg = avg;
    this.render();
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
    for (let i = 0; i <14; i++) {
      let cookiesSold = Math.trunc(this.generateCustomers() * this.cookieAvg); //Calculate cookies sold
      salesTotal += cookiesSold; //Add to our running total
      salesProjection.appendChild(document.createElement('td')).innerText = cookiesSold; //Append the data
    }

    salesProjection.appendChild(document.createElement('td')).innerText = salesTotal; // Add running total to table row

    document.getElementById('locationsTable').appendChild(salesProjection);
  }
}

// Function to create header

function createSalesHeader() {
  let headerRow = document.createElement('tr');

  headerRow.appendChild(document.createElement('th')).innerText = ' ';

  for (let i = 6; i <20; i++) {
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

// Function to create footer

function createSalesFooter() {
  let footerRow = document.createElement('tr');
  let totals = [];
  const salesTable = document.getElementById('locationsTable');

  footerRow.appendChild(document.createElement('th')).innerText = 'Totals';

  // Loop through the rows
  for (let i = 1; i < salesTable.rows.length; i++) { 
    let salesRow = salesTable.rows[i].getElementsByTagName('td');

    // Loop through the column and add the values up.
    for (let j = 1; j < salesRow.length; j++) { 
      if (totals[j-1] === undefined) { // If the variable doesn't exist in the array, set it to zero so that it does exist.
        totals[j-1] = 0;
      }
      totals[j-1] += parseInt(salesRow[j].innerText);
    }
  }

  for (const total in totals) {
    footerRow.appendChild(document.createElement('th')).innerText = totals[total];
  }

  document.getElementById('locationsTable').appendChild(footerRow);
}

// Function to create a new location

function createNewLocation(event) {
  event.preventDefault();

  const table = document.getElementById('locationsTable');
  const form = document.querySelector('form');
  const name = form.elements['name'];
  const min = form.elements['min'];
  const max = form.elements['max'];
  const avg = form.elements['avg'];

  if(name.value === '' || min.value === '' || max.value === '' || avg.value === '') {
    alert('Please fill in all boxes.');
  } else {
    table.removeChild(table.lastElementChild);

    const newLocation = new Location(name.value, min.value, max.value, avg.value);

    createSalesFooter();

  }
}
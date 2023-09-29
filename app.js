const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

const table = document.getElementById("salesData");

function randomNum(max, min) {
  return Math.floor(Math.random() * max - min + 1);
}

function CookieStore(location, minCust, maxCust, average) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = average;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookiesSold = 0;
}

CookieStore.prototype.calculateSales = function () {
  for (let i = 0; i < hours.length; i++) {}
};

const hourCustomers = randomNumber(this.minCust, this.maxCust);
this.customersPerHour.push(hourCustomers);

const hourCookiesSold = Math.floor(hourCustomers * this.avgCookiesPerCust);
this.CookiesPerHour.push(hourCookiesSold);

this.totalCookieSold = this.totalCookieSold + hourCookiesSold;

CookieStore.prototype.render = function () {
  this.calculateSales();

  const tr = document.createElement("tr");

  const th = document.createElement("th");
  th.textContent = this.location;
  tr.appendChild(th);

  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    const td = document.createElement("td");
    td.textContent = this.totalCookieSold;
    tr.appendChild(totalTd);

    table.appendChild(tr);
  }
};

const seattle = new CookieStore("Seattle", 23, 65, 6.3);
const tokyo = new CookieStore("Tokyo", 3, 24, 1.2);
const dubai = new CookieStore("Dubai", 11, 38, 3.7);
const paris = new CookieStore("Paris", 20, 38, 2.3);
const lima = new CookieStore("Lima", 2, 16, 4.6);

const headerRow = document.createElement("tr");
const blandTd = document.createElement("td");
headerRow.appendChild(blankTd)

for(let i = 0; i< hours.length; i++) 

const th = document.createElement("th");
th.textContent = hours[i];
headerRow.appendChild(th)

const totalHeading = document.createElement("th");
totalHeading.textContent = "Total";
headerRow.appendChild(totalHeading)

table.appendChild(headerRow)

seattle.render()
tokyo.render()
dubai.render()
paris.render()
lima.render()



const Seattle = {
  location: "Seattle",
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const hourCustomers = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(hourCustomers);

      const hourCookiesSold = Math.floor(
        hourCustomers * this.avgCookiesPerCust
      );
      this.cookiesPerHour.push(hourCookiesSold);

      this.totalCookieSold = this.totalCookieSold + hourCookiesSold;
      console.log(this.totalCookieSold);
    }
  },
};

const Tokyo = {
  location: "Tokyo",
  minCust: 3,
  maxCust: 24,
  avgCookiesPerCust: 1.2,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const hourCustomers = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(hourCustomers);

      const hourCookiesSold = Math.floor(
        hourCustomers * this.avgCookiesPerCust
      );
      this.cookiesPerHour.push(hourCookiesSold);
      this.totalCookieSold = this.totalCookieSold + hourCookiesSold;
    }
  },
};

const Dubai = {
  location: "Dubai",
  minCust: 11,
  maxCust: 38,
  avgCookiesPerCust: 3.7,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const hourCustomers = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(hourCustomers);

      const hourCookiesSold = Math.floor(
        hourCustomers * this.avgCookiesPerCust
      );
      this.cookiesPerHour.push(hourCookiesSold);
      this.totalCookieSold = this.totalCookieSold + hourCookiesSold;
    }
  },
};

const Paris = {
  location: "Paris",
  minCust: 20,
  maxCust: 38,
  avgCookiesPerCust: 2.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const hourCustomers = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(hourCustomers);

      const hourCookiesSold = Math.floor(
        hourCustomers * this.avgCookiesPerCust
      );
      this.cookiesPerHour.push(hourCookiesSold);
      this.totalCookieSold = this.totalCookieSold + hourCookiesSold;
    }
  },
};

const Lima = {
  location: "Lima",
  minCust: 2,
  maxCust: 16,
  avgCookiesPerCust: 4.6,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const hourCustomers = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(hourCustomers);

      const hourCookiesSold = Math.floor(
        hourCustomers * this.avgCookiesPerCust
      );
      this.cookiesPerHour.push(hourCookiesSold);
      this.totalCookieSold = this.totalCookieSold + hourCookiesSold;
    }
  },
};

var carList = [                   //Created a array of objects to store the carDetails
  {
    carName: "Ford Figo",
    carModel: "Manual",
    manYear: 2000,
    price: 500000,
  },
  {
    carName: "Polo",
    carModel: "DCT",
    manYear: 2002,
    price: 250000,
  },
  {
    carName: "Tesla",
    carModel: "CVT",
    manYear: 2020,
    price: 900000,
  },
  {
    carName: "WagonR",
    carModel: "Manual",
    manYear: 2000,
    price: 250000,
  },
  {
    carName: "Audi",
    carModel: "CVT",
    manYear: 2019,
    price: 500000,
  },
  {
    carName: "benz",
    carModel: "DCT",
    manYear: 2018,
    price: 50000,
  },
  {
    carName: "maruti 800",
    carModel: "Manual",
    manYear: 1999,
    price: 50000,
  },
  {
    carName: "Ford",
    carModel: "DCT",
    manYear: 2000,
    price: 50000,
  },
  {
    carName: "Audi Q4",
    carModel: "CVT",
    manYear: 2010,
    price: 554635,
  },
  {
    carName: "BMW",
    carModel: "DCT",
    manYear: 2013,
    price: 555500,
  },
];

console.log("\nNumber of cars in list are: " + carList.length + "\n");  //  Total number of cars

for (var i = 0; i < carList.length; i++) {                            //  filter with car name
  if (carList[i].carName == "BMW") {
    console.log("Your car match is found: " + carList[i].carName);
  }
}
console.log("\n"); 
console.log("Cars with Manual Tranmsmission are:");                   //  Filter using carmodel == "manual"
for (var i = 0; i < carList.length; i++) {
  if (carList[i].carModel == "Manual") {
    console.log(carList[i].carName);
  }
}

console.log("\n");
console.log("Cars with CVT Tranmsmission are:");                      //  Filter using carmodel == "CVT"
for (var i = 0; i < carList.length; i++) {
  if (carList[i].carModel == "CVT") {
    console.log(carList[i].carName);
  }
}

console.log("\n");
console.log("Cars with DCT Tranmsmission are:");                      //  Filter using carmodel == "DCT"
for (var i = 0; i < carList.length; i++) {
  if (carList[i].carModel == "DCT") {
    console.log(carList[i].carName);
  }
}

console.log("\n");
console.log("Cars manufactured after 2010 are:");                   //Filter usiing manufactured Year
for (var i = 0; i < carList.length; i++) {
  if (carList[i].manYear >= 2010) {
    console.log(carList[i].carName);
  }
}

var currentDate = new Date();                                     //initiating Date object with current Date and time

console.log("\nToday's Date is: \n" + currentDate + "\n");


var datelastmonth = new Date();                                   //initiating Date object
datelastmonth.setMonth(datelastmonth.getMonth() - 1);             //setting the month to last month
console.log("\nLast month date from current date: \n" + datelastmonth);

var dateNextmonth = new Date();                                   //initiated Date object for next month
dateNextmonth.setMonth(dateNextmonth.getMonth() + 2, 0);          // set month by getting current month + 2 and decreasing the day to go back one month
console.log("\nTime And Date for last day of next month:\n" +dateNextmonth);
 
console.log("\nThank you")
 


//------------------------------Trying another method-----------------------------------------------------------------


  
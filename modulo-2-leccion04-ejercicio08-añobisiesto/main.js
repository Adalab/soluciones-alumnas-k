const year = 2023;
if (year % 4 === 0) {
  console.log("Este año es bisiesto");
} else {
  console.log(`El siguiente año bisiesto es ${year + (4 - (year % 4))}`);
}

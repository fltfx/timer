//intake only the necessary arguments
var myArgs = process.argv.slice(2);

if (myArgs.length === 0) {
  //if array is empty
  console.log('No numbers were provided. Please enter correct times for beep.');
  process.exit();
}

//Sort array into ascending times
myArgs.sort(function(a, b){return a-b});
//console.log(myArgs)

for (let time of myArgs) {
  let timeInS = Number(time)*1000;
  //console.log(timeInS);
  if ((time > 0 ) && (Number.isNaN(timeInS) === false)) {
    setTimeout(() => {
      //process.stdout.write('\x07');
      process.stdout.write('.');
    }, timeInS);
  }
}

const args = process.argv.slice(2);
// console.log(args);

const timer = function(args) {
  const noNegativeArgs = args.filter((el) => el > 0 && !isNaN(Number(el)));

  if (args.length === 0) {
    process.exit();
  }
  for (const delay of noNegativeArgs) {
    setTimeout(() => {
      console.log(`* ${delay} seconds`);
      process.stdout.write("\x07");
    }, delay);
  }
};
timer(args);
// };
// node timer1.js 10 300 50 150 900
// node timer1.js 10 3 5 15 9
// node timer1.js 10 3 -5 -15 9
// node timer1.js 10 3 it 15 9
// node timer1.js

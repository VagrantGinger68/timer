const args = process.argv.slice(2);

const timer = function(args) {
  if (args.length === 0) {
    return;
  }

  for (let num of args) {
    if (num < 0 || isNaN(num)) {
      continue;
    }
    setTimeout(() => {
      // console.log(num);
      process.stdout.write('\x07');
    }, num * 1000);
  }
};

timer(args);





const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter countdown seconds: ', (input) => {
  rl.close();
  const total = Number(input);

  if (isNaN(total) || total <= 0) {
    console.log('Please enter a valid positive number.');
    return;
  }

  let remaining = total;
  let stopped = false;

  // Countdown using setInterval
  const timer = setInterval(() => {
    if (stopped) return;

    console.log(remaining);
    if (remaining === 0) {
      console.log('Countdown Complete!');
      process.exit(0);
    }
    remaining--;
  }, 1000);

  setTimeout(() => {
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding('utf8');

    process.stdin.on('data', (chunk) => {
      if (chunk.toString().toLowerCase().includes('s')) {
        clearInterval(timer);
        stopped = true;
        console.log('\nCountdown stopped by user!');
        process.exit(0);
      }
    });
  }, 10);
});
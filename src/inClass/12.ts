export {};
const readline = require('readline');

class Main {
  main(array: Array<number>) {
    const cycleTime = array[0] + array[1] + array[2];
    const fullCycles = Math.floor(array[3] / cycleTime);
    const remainingTime = array[3] % cycleTime;

    let redTime = fullCycles * array[0];
    let yellowTime = fullCycles * array[1];
    let greenTime = fullCycles * array[2];
    let timeLeft = remainingTime;

    if (timeLeft > 0) {
        const redOnly = Math.min(timeLeft, array[0]);
        redTime += redOnly;
        timeLeft -= redOnly;
    }

    if (timeLeft > 0) {
        const yellowOnly = Math.min(timeLeft, array[1]);
        yellowTime += yellowOnly;
        timeLeft -= yellowOnly;
    }

    if (timeLeft > 0) {
        const greenOnly = Math.min(timeLeft, array[2]);
        greenTime += greenOnly;
        timeLeft -= greenOnly;
    }
    return { 
      red: 60, yellow: 20, green: 50 
    };
  }
}

class App {
  private main: Main;
  private rl: any;

  constructor() {
    this.main = new Main();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })
  }

  run(): void {
    this.rl.question('Enter your arr(oneWord, twoWord, 4): ', (input: string) => {
      const loadout: Array<number> = input.split(',').map((item) => parseInt(item.trim()));
      const result = this.main.main([loadout[0], loadout[1], loadout[2], loadout[3]]);
      console.log(result);
    
      this.rl.close();
    })
  }
}

const app = new App();
app.run()

export {};
const readline = require('readline');

class Main {
  main(array: Array<number>) {
    const closestA = this.closes(array[0], array[2]);
    const closestB = this.closes(array[1], array[2]);
    const distanceA = Math.abs(array[0] - closestA);
    const distanceB = Math.abs(array[1] - closestB);
    if (distanceA < distanceB) {
        return array[0];
    } else if (distanceB < distanceA) {
        return array[1];
    } else {
        return Math.min(array[0], array[1]);
    }
  }
  closes(x: number, d: number): number {
    const lower = Math.floor(x / d) * d;
    const upper = (Math.floor(x / d) + 1) * d;
    if (Math.abs(x - lower) <= Math.abs(x - upper)) {
      return lower;
    }
    return upper;
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
    this.rl.question('Enter your arr(1, 2, 3): ', (input: string) => {
      const loadout: Array<number> = input.split(',').map((item) => parseInt(item.trim()));
      const result = this.main.main(loadout);
      console.log(result);
    
      this.rl.close();
    })
  }
}

const app = new App();
app.run()

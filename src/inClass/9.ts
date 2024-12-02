export {};
const readline = require('readline');

class Main {
  main(array: Array<string>) {
    let result: Array<string> = []
    if (array[0].length === array[1].length) {
      return array
    } 
    return array[0].length < array[1].length ? [`${'0'.repeat(array[1].length - array[0].length)}${array[0]}`, array[1]]
    : [array[0], `${'0'.repeat(array[0].length - array[1].length)}${array[1]}`]
  };
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
    this.rl.question('Enter your arr(123, 1): ', (input: string) => {
      const loadout = input.split(',').map((item) => item.trim())
      const result = this.main.main(loadout);
      console.log(result.join(' '));
    
      this.rl.close();
    })
  }
}

const app = new App();
app.run()
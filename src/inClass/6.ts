export {};
const readline = require('readline');

class Main {
  main(string: string): string {
    return string.length < 5 ? 'Too short message' : string.length > 5 && string.length <= 29 ? `Привет, ${string}` : string.length > 30 && string.length < 50 ? 'Too tall' : 'undefiend'
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
    this.rl.question('Enter your message: ', (input: string) => {
      const loadout: string = input;
      const result: string = this.main.main(loadout);
      console.log(result);
    
      this.rl.close();
    })
  }
}

const app = new App();
app.run()
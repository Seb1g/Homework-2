export {};
const readline = require('readline');

interface inputArr {
  oneStr: string;
  twoStr: string;
};

class SplitString {
  private cache: Array<string> = [];
  splitStr (arr: Array<inputArr>): string {
    return `${arr[0].oneStr} ${arr[0].twoStr}`
  };
  data (str?: string): Array<string> {
    if (str) {
      this.cache.push(str);
    }
    return [...this.cache];
  };
};

class App {
  private splitStr: SplitString;
  private rl: any;
  constructor () {
    this.splitStr = new SplitString();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  };
  run(): void {
    this.rl.question('Please, Enter one string: ', (oneStr: string) => {
      this.rl.question('Please, Enter two string: ', (twoStr: string) => {
        const inputArr: Array<inputArr> = [{oneStr: oneStr, twoStr: twoStr}];
        const preResult: string = this.splitStr.splitStr(inputArr);

        this.splitStr.data(preResult);

        this.rl.question('You wand continue (yes/no): ', (threeStr: string) => {
          if (threeStr === 'yes') {
            this.run();
          } else if (threeStr === 'no') {
            const result: Array<string> = this.splitStr.data();
            console.log(result);
            this.rl.close();
          } else {
            console.log('Error');
            this.rl.close();
          }
        })
      });
    });
  };
};

const app = new App();
app.run();
export { };

const func = (obj: { [key: number]: string }) => {
  let result: Array<string> = []
  let flag: number = 0;
  for (let i = 0; i < Object.keys(obj).length; i++) {
    for (let o = 0; o < Object.keys(obj).length; o++) {
      for (let p = 0; p < Object.keys(obj).length; p++) {
        for (let q = 0; q < Object.keys(obj).length; q++) {
          for (let d = 0; d < Object.keys(obj).length; d++) {
            for (let g = 0; g < Object.keys(obj).length; g++) {
              flag++;
              if (flag === 342) {
                result.push(obj[i], obj[o], obj[p], obj[q], obj[d], obj[g]);
              };
            };
          };
        };
      };
    };
  };
  return result;
};

const obj: { [key: number]: string } = { 0: 'Б', 1: 'К', 2: 'Ф'};
console.log(func(obj).join(''));
// function rotLeft(arr, rotations) {
//     const rotatedArray = arr.concat();
//     for (let i = 0; i < rotations; i++) {
//       const frontItem = rotatedArray.shift();
//       rotatedArray.push(frontItem);
//     }
//     return rotatedArray;
//   }
function rotLeft(a, d) {
  let l = a.length;

  let temp = [];

  for (let i = 0; i < l; i++) {
    temp[i] = a[i];
  }

  for (let i = 0; i < l - d; i++) {
    a[i] = temp[d + i];
  }

  for (let i = 0; i < d; i++) {
    a[i + (l - d)] = temp[i];
  }
  return a;
}

const numRotation = 3;
const sampleArray = [1, 2, 3, 4, 5];

// const expectedOutput = [4, 5, 1, 2, 3];

console.log(rotLeft(sampleArray, numRotation));
// console.log(expectedOutput);

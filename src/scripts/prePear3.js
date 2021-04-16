const prePear3 = (nameArray) => {
  let combs = [];
  let results = [];
  let t = nameArray.length / 3;

  let combination = (arr, data, start, end, index, r) => {
    if (index === r) {
      combs.push(JSON.parse(JSON.stringify(data)));
      return;
    }

    for (let i = start; i <= end && end - i + 1 >= r - index; i++) {
      data[index] = arr[i];
      combination(arr, data, i + 1, end, index + 1, r);
    }
  };

  combination(nameArray, [], 0, nameArray.length - 1, 0, 3);

  while (combs.length > 5) {
    let temp = [];
    let index = [];
    for (let i = 0; i < combs.length; i++) {
      if (check(temp, combs[i])) {
        temp.push(combs[i]);
        // index.push(i);
        combs.splice(i, 1);
      }
    }

    if (temp.length === t) {
      results.push(temp);
    }
    // for (let j = 0; j < index.length; j++) {
    //   combs.splice(index[j], 1);
    // }
  }

  return results;
};

const check = (arr1, arr2) => {
  arr1 = arr1.flat();
  let arr = arr1.concat(arr2);
  arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      return false;
    }
  }

  return true;
}
export default prePear3;

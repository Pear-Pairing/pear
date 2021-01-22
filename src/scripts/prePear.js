// takes in an array of anmes, returns a list of sprints of unique pairs
const prePear = (nameArray) => {
  // if (nameArray.length % 2 === 1) {
  //   nameArray.push('SOLO')
  // }
  const names = {};
  const sprints = {};
  names[nameArray[0]] = 0;
  for (let i = 0; i < nameArray.length - 1; i++) {
    names[nameArray[i + 1]] = 0;
    sprints[i] = {}
  }

  const results = Array.from(Array(nameArray.length - 1), () => []);

  // Since you only want pairs, there's no reason
  // to iterate over the last element directly
  for (let i = 0; i < nameArray.length - 1; i++) {
    // This is where you'll capture that last value
    for (let j = i + 1; j < nameArray.length; j++) {
      let sprint = Math.max(names[nameArray[i]], names[nameArray[j]]);
      while (sprints[sprint][nameArray[i]] || sprints[sprint][nameArray[j]]) {
        sprint = (sprint + 1) % (nameArray.length - 1)
      }
      results[sprint].push([nameArray[i], nameArray[j]]);
      sprints[sprint][nameArray[i]] = true;
      sprints[sprint][nameArray[j]] = true;
      names[nameArray[i]]++;
      names[nameArray[j]]++;
    }
  }

  return results;
}

// const names = ['tom', 'nancy', 'drew', 'mike', 'liz','timmy','jeff','Nina','a','b','c','e','t','g','q','i','u','7','8','9'];

// console.log(prePear(names));

export default prePear;

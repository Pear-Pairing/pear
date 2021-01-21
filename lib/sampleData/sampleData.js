const PairsView = {
  id: "ABCD",
  roster: [
    {
      name: "John Smith",
      id: "0"
    },
    {
      name: "Andrea Bowman",
      id: "1"
    },
    {
      name: "Marcus Sinclaire",
      id: "2"
    },
    {
      name: "Adrian Stevenson",
      id: "3"
    }
  ],
  possiblePairs: [
    [["0", "1"], ["2", "3"]],
    [["0", "2"], ["1", "3"]],
    [["0", "3"], ["1", "2"]]
  ],
  currentPairs: [
    ["0", "1"], ["2", "3"]
  ],
  expires: "12546736"
}



export default {
  PairsView
}
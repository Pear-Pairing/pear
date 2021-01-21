const PairsView = {
  id: "ABCD",
  roster: [
    {
      name: "Tim",
      id: "0"
    },
    {
      name: "Mary",
      id: "1"
    },
    {
      name: "Brad",
      id: "2"
    },
    {
      name: "Sue",
      id: "3"
    }
  ],
  possiblePairs: [
    [["0", "1"], ["2", "3"]],
    [["0", "2"], ["1", "3"]],
    [["0", "3"], ["1", "2"]]
  ],
  currentPairs: [
    [["0", "1"], ["2", "3"]]
  ],
  expires: "12546736"
}



export default {
  PairsView
}
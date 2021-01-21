const PairsView = {
  id: "ABCD",
  roster: {
    "001": {
      name: "Tim",
      id: "001"
    },
    "002": {
      name: "Mary",
      id: "002"
    },
    "003": {
      name: "Brad",
      id: "003"
    },
    "004": {
      name: "Sue",
      id: "004"
    }
  },
  possiblePairs: [
    [["001", "002"], ["003", "004"]],
    [["001", "003"], ["002", "004"]],
    [["001", "004"], ["002", "003"]]
  ],
  expires: "0000001"
}



export default {
  PairsView
}
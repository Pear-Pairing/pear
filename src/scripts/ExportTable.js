
const exportToTable = (currentPairs, roster, download) => {
  const rows = [["Partner1", "Partner2"]];
  for (let i = 0; i < currentPairs.pairs.length; i++) {
    rows.push([roster[currentPairs.pairs[i][0]].name, roster[currentPairs.pairs[i][1]].name]);
  }
  const csvContentRaw = rows.map(e => e.join(", ")).join("\n");
  const csvContent = "data:text/csv;charset=utf-8,"
    + csvContentRaw;


  const encodedUri = encodeURI(csvContent);

  if (download) {
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data.csv");
    document.body.appendChild(link);
    link.click();
  } else {
    document.getElementById("csvExport").value = csvContentRaw;
  }

}

export default exportToTable;



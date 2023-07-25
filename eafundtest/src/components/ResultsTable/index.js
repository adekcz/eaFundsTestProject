function ResultsTable({rows}) {
  let renderTableRow = function (row) {
    return (
      <tr>
        <td>{row.ID}</td>
        <td>{row["First name"]}</td>
        <td>{row["Last name"]}</td>
        <td>{row["Summary"]}</td>
        <td>{row["Submission date"]}</td>
        <td>{row["Payout amount"]}</td>
        <td>{row["Rating"]}</td>        
      </tr>
    );
  };

  const table =
    rows ? (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Summary</th>
            <th>Submission date</th>
            <th>Payout amount</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
            {rows.map((row) => { return (renderTableRow(row) ) }) }
        </tbody>
      </table>
    ) : (
      <></>
    );
  return table;
}

export { ResultsTable };

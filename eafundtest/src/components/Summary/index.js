//should do
// Total number of grants in fund
// Total payout amount in fund
// The median rating
// Number of grants that have a positive rating
// Sum of payout amount of grants that have a positive rating


function currencyToNumber(currencyString) {
    var numberString = currencyString.replace(/[^0-9.-]+/g,"");
    return parseFloat(numberString);
  }
  
  function computeMedianRating(data) {
    // Extract ratings into an array
    let ratings = data.map(item => item.Rating);
  
    // Sort the ratings in ascending order
    ratings.sort((a, b) => a - b);
  
    // Compute the median
    let median;
    if (ratings.length % 2 === 0) { // array length is even
      let midIndex = ratings.length / 2;
      median = (ratings[midIndex - 1] + ratings[midIndex]) / 2;
    } else { // array length is odd
      let midIndex = Math.floor(ratings.length / 2);
      median = ratings[midIndex];
    }
  
    return median;
  }

  function sumPositiveRatingsPayout(data) {
    // Filter data to only include items with positive rating
    let positiveRatings = data.filter(item => item.Rating > 0);
  
    // Sum the payout amount of these items
    let sum = positiveRatings.reduce((acc, item) => {
      let payout = currencyToNumber(item["Payout amount"]);
      return acc + payout;
    }, 0);
  
    return sum;
  }
  
function Summary({label, rows}) {
    let amountOfGrants = rows ? rows.length : 0;
    let totalPayout = rows ? rows.reduce((acc, item) => { return acc + currencyToNumber(item["Payout amount"])}, 0) : 0;
    let median = rows ? computeMedianRating(rows) : 0; 
    let positiveRatings = rows ? rows.filter(item => item.Rating > 0).length : 0;
    let payoutPositiveRatings = rows ? sumPositiveRatingsPayout(rows) : 0;
    
    return (
      <div className="infoTile">
        <h2> {label}</h2>
        <div>
          <p>Total number of grants in fund: {amountOfGrants}</p>
          <p>Total payout amount in fund {totalPayout}</p>
          <p>The median rating: {median}</p>
          <p>Number of grants that have a positive rating: {positiveRatings}</p>
          <p>Sum of payout amount of grants that have a positive rating: {payoutPositiveRatings}</p>
        </div>
      </div>
    );
  }
  
  export { Summary };
  

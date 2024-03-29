// Code your solution here
function findMatching(driver, search) {
    return driver.filter(
      (possibleMatch) => possibleMatch.toLowerCase() === search.toLowerCase()
    );
  }
  
  function fuzzyMatch(driver, testString) {
    return driver.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
  }
  
  function matchName(driver, soughtName) {
    return driver.filter((record) => record.name === soughtName);
  }

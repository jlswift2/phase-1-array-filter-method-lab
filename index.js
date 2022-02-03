function findMatching(array, string){
    return array.filter(driver => (driver.toLowerCase() === string.toLowerCase()))
}

function fuzzyMatch(array, string){
    return array.filter(driver => (driver.startsWith(string)))
}

function matchName(array, string){
    return array.filter(driver => driver["name"] === string)
}
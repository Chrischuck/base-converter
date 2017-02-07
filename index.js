function converter(number, base, baseTo) {
  // Checking to make sure each digit does not exceed its base
  for (let i = 0; i < number.length; i++) {
    if (base >= 2 && base <= 9) {
      if ( Number(number.charAt(i)) > base ) {
        return false
      }
    } else {
      break;
    }
  }
  // Converts from base n to decimal
  let decimal = 0
  let power = 0;
  for (let i = number.length - 1; i >= 0; i--) {
    decimal += ( Number(number.charAt(i)) * Math.pow(base, power) )
    power++
  }

  // Convert decimal to base n
  let mutatingDecimal = decimal
  let bases = []
  while (mutatingDecimal > 0) {
    const remainder = mutatingDecimal % baseTo
    bases.push(remainder)
    mutatingDecimal = (mutatingDecimal - remainder) / baseTo
  }

  let baseString = ''
  for (let i = bases.length - 1; i >= 0; i--) {
    baseString += bases[i]
  }
  return baseString
}

console.log(converter('1000', 4, 10))

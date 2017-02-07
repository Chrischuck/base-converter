function converter(number, base, baseTo) {
  for (let i = 0; i < number.length; i++) {
    if (base >= 2 && base <= 9) {
      if ( Number(number.charAt(i)) > base ) {
        return false
      }
    } else {
      break;
    }
  }
  // converts from base n to decimal
  let decimal = 0
  let power = 0;
  for (let i = number.length - 1; i >= 0; i--) {
    decimal += ( Number(number.charAt(i)) * Math.pow(base, power) )
    power++
  }

  // convert decimal to base n
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

console.log(converter('10', 10, 10))

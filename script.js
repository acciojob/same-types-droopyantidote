function isSameType(value1, value2) {
  //your js code he
	    // Check if both values are NaN
    if (Number.isNaN(value1) && Number.isNaN(value2)) {
        return true;
    }

    // Check if the values are not NaN and their types are the same
    if (!Number.isNaN(value1) && !Number.isNaN(value2)) {
        return typeof value1 === typeof value2;
    }

    // If one of the values is NaN and the other isn't, return false
    return false;

}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));

const lowerRange = 178416
const higherRange = 676461


function computePossibleAmountOfPasswords() {
    let counter = 0;
    for (let i = lowerRange; i <= higherRange; i++) {
        if (hasSixDigits(i) && hasTwoAdjacenDuplicatetDigits(i) && increasesLTR(i)) {
            counter++
        }
    }

    console.log(counter)
}

function hasSixDigits(num) {
    const numAsString = num.toString()
    return numAsString.length === 6
}

function hasTwoAdjacenDuplicatetDigits(num) {
    const numAsString = num.toString()
    for (let i = 0; i < numAsString.length - 1; i++) {
        if (
            numAsString[i] === numAsString[i + 1]
            && (numAsString.match(new RegExp(numAsString[i], "g")) || []).length === 2
        ) {
            return true
        }
    }

    return false
}

function increasesLTR(num) {
    const numAsString = num.toString()
    for (let i = 0; i < numAsString.length - 1; i++) {
        if (parseInt(numAsString[i]) > parseInt(numAsString[i + 1])) {
            return false
        }
    }

    return true
}

computePossibleAmountOfPasswords()
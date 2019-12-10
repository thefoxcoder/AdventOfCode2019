(function () {
    const opCodesImmutable = [3, 8, 1001, 8, 10, 8, 105, 1, 0, 0, 21, 38, 47, 64, 85, 106, 187, 268, 349, 430, 99999, 3, 9, 1002, 9, 4, 9, 1001, 9, 4, 9, 1002, 9, 4, 9, 4, 9, 99, 3, 9, 1002, 9, 4, 9, 4, 9, 99, 3, 9, 1001, 9, 3, 9, 102, 5, 9, 9, 1001, 9, 5, 9, 4, 9, 99, 3, 9, 101, 3, 9, 9, 102, 5, 9, 9, 1001, 9, 4, 9, 102, 4, 9, 9, 4, 9, 99, 3, 9, 1002, 9, 3, 9, 101, 2, 9, 9, 102, 4, 9, 9, 101, 2, 9, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 99, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 99]
    let opCodes = [...opCodesImmutable]

    Object.freeze(opCodesImmutable)
    let counter = 0
    let outputs = []

    let inputCodes: [number, number]
    let inputCodeIndex = 0
    let saveOutput = false
    let secondInput = 0

    for (let a = 0; a < 5; a++) {
        for (let b = 0; b < 5; b++) {
            for (let c = 0; c < 5; c++) {
                for (let d = 0; d < 5; d++) {
                    for (let e = 0; e < 5; e++) {
                        let firstInputList = [a, b, c, d, e]
                        
                        if (new Set(firstInputList).size < firstInputList.length) {
                            continue
                        }
                        for (let i = 0; i < 5; i++) {
                            inputCodes = [firstInputList[i], secondInput]
                            saveOutput = i === 4 ? true : false
                            compute()
                            counter = 0
                            inputCodeIndex = 0
                            opCodes = [...opCodesImmutable]
                        }
                        secondInput = 0
                    }
                }
            }
        }
    }

    // let firstInputList = [1,0,4,3,2]

    // for (let i = 0; i < 5; i++) {
    //     inputCodes = [firstInputList[i], secondInput]
    //     saveOutput = i === 4 ? true : false
    //     compute()
    //     counter = 0
    //     inputCodeIndex = 0
    //     opCodes = [...opCodesImmutable]
    // }

    console.log(Math.max(...outputs))

    function compute() {
        let instruction = numToDigits(opCodes[counter])
        counter++
        var opCode = getOpCode(instruction)
        var params = getParams(instruction)

        while (opCode != 99) {
            switch (opCode) {
                case 1: add(opCodes, counter, params)
                    counter += 3
                    break;
                case 2: multiply(opCodes, counter, params)
                    counter += 3
                    break;
                case 3: input(opCodes, counter)
                    counter += 1
                    break;
                case 4: output(opCodes, counter, params)
                    counter += 1
                    break;
                case 5: counter = jumpIfTrue(opCodes, counter, params) ? jumpIfTrue(opCodes, counter, params) : counter + 2
                    break;
                case 6: counter = jumpIfFalse(opCodes, counter, params) ? jumpIfFalse(opCodes, counter, params) : counter + 2
                    break;
                case 7: lessThan(opCodes, counter, params)
                    counter += 3;
                    break;
                case 8: equals(opCodes, counter, params)
                    counter += 3
                    break;
                default: throw new Error(`Invalid op code ${opCode} at position ${counter}`)
            }
            instruction = numToDigits(opCodes[counter])
            counter++
            opCode = getOpCode(instruction)
            params = getParams(instruction)
        }
    }

    function numToDigits(num) {
        const numAsStr = num.toString()
        const digits = []
        for (let i = 0; i < numAsStr.length; i++) {
            digits.push(parseInt(numAsStr[i]))
        }

        return digits
    }

    function getOpCode(instructionDigits) {
        return instructionDigits.length === 1
            ? instructionDigits[0]
            : parseInt(`${instructionDigits[instructionDigits.length - 2]}${instructionDigits[instructionDigits.length - 1]}`)
    }

    function getParams(digits) {
        return digits.slice(0, digits.length - 2)
    }

    function getParam1Mode(params) {
        const param = params[params.length - 1]

        return param != null ? param : null
    }

    function getParam2Mode(params) {
        const param = params[params.length - 2]

        return param != null ? param : null
    }

    function getParam3Mode(params) {
        const param = params[params.length - 3]

        return param != null ? param : null
    }

    function add(opCodes, counter, params) {
        const aMode = getParam1Mode(params)
        const bMode = getParam2Mode(params)
        const a = aMode === 1 ? opCodes[counter] : opCodes[opCodes[counter]]
        const b = bMode === 1 ? opCodes[counter + 1] : opCodes[opCodes[counter + 1]]
        const c = opCodes[counter + 2]
        opCodes[c] = a + b
    }

    function multiply(opCodes, counter, params) {
        const aMode = getParam1Mode(params)
        const bMode = getParam2Mode(params)
        const a = aMode === 1 ? opCodes[counter] : opCodes[opCodes[counter]]
        const b = bMode === 1 ? opCodes[counter + 1] : opCodes[opCodes[counter + 1]]
        opCodes[opCodes[counter + 2]] = a * b
    }

    function jumpIfTrue(opCodes, counter, params) {
        const aMode = getParam1Mode(params)
        const bMode = getParam2Mode(params)

        const a = aMode === 1 ? opCodes[counter] : opCodes[opCodes[counter]]
        const b = bMode === 1 ? opCodes[counter + 1] : opCodes[opCodes[counter + 1]]
        const retVal = a !== 0 ? b : false

        return retVal
    }

    function jumpIfFalse(opCodes, counter, params) {
        const aMode = getParam1Mode(params)
        const bMode = getParam2Mode(params)

        const a = aMode === 1 ? opCodes[counter] : opCodes[opCodes[counter]]
        const b = bMode === 1 ? opCodes[counter + 1] : opCodes[opCodes[counter + 1]]

        const retVal = a === 0 ? b : false

        return retVal
    }

    function lessThan(opCodes, counter, params) {
        const aMode = getParam1Mode(params)
        const bMode = getParam2Mode(params)

        const a = aMode === 1 ? opCodes[counter] : opCodes[opCodes[counter]]
        const b = bMode === 1 ? opCodes[counter + 1] : opCodes[opCodes[counter + 1]]
        const c = opCodes[counter + 2]

        if (a < b) {
            opCodes[c] = 1
        } else {
            opCodes[c] = 0
        }
    }

    function equals(opCodes, counter, params) {
        const aMode = getParam1Mode(params)
        const bMode = getParam2Mode(params)

        const a = aMode === 1 ? opCodes[counter] : opCodes[opCodes[counter]]
        const b = bMode === 1 ? opCodes[counter + 1] : opCodes[opCodes[counter + 1]]
        const c = opCodes[counter + 2]

        if (a === b) {
            opCodes[c] = 1
        } else {
            opCodes[c] = 0
        }
    }

    function input(opCodes, counter) {
        const a = opCodes[counter]
        const inputVal = inputCodes[inputCodeIndex]
        opCodes[a] = inputVal
        inputCodeIndex += 1
    }

    function output(opCodes, counter, params) {
        const a = opCodes[counter]
        const aMode = getParam1Mode(params)
        const result = aMode === 1 ? a : opCodes[a]
        secondInput = result

        if (saveOutput) {
            outputs.push(result)
        }
    }
})()
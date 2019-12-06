const opCodes = [
    3,225,1,225,6,6,1100,1,238,225,104,0,1,192,154,224,101,-161,224,224,4,224,102,8,223,223,101,5,224,224,1,223,224,223,1001,157,48,224,1001,224,-61,224,4,224,102,8,223,223,101,2,224,224,1,223,224,223,1102,15,28,225,1002,162,75,224,1001,224,-600,224,4,224,1002,223,8,223,1001,224,1,224,1,224,223,223,102,32,57,224,1001,224,-480,224,4,224,102,8,223,223,101,1,224,224,1,224,223,223,1101,6,23,225,1102,15,70,224,1001,224,-1050,224,4,224,1002,223,8,223,101,5,224,224,1,224,223,223,101,53,196,224,1001,224,-63,224,4,224,102,8,223,223,1001,224,3,224,1,224,223,223,1101,64,94,225,1102,13,23,225,1101,41,8,225,2,105,187,224,1001,224,-60,224,4,224,1002,223,8,223,101,6,224,224,1,224,223,223,1101,10,23,225,1101,16,67,225,1101,58,10,225,1101,25,34,224,1001,224,-59,224,4,224,1002,223,8,223,1001,224,3,224,1,223,224,223,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,1108,226,226,224,102,2,223,223,1005,224,329,101,1,223,223,107,226,226,224,1002,223,2,223,1005,224,344,1001,223,1,223,107,677,226,224,102,2,223,223,1005,224,359,101,1,223,223,7,677,226,224,102,2,223,223,1005,224,374,101,1,223,223,108,226,226,224,102,2,223,223,1006,224,389,101,1,223,223,1007,677,677,224,102,2,223,223,1005,224,404,101,1,223,223,7,226,677,224,102,2,223,223,1006,224,419,101,1,223,223,1107,226,677,224,1002,223,2,223,1005,224,434,1001,223,1,223,1108,226,677,224,102,2,223,223,1005,224,449,101,1,223,223,108,226,677,224,102,2,223,223,1005,224,464,1001,223,1,223,8,226,677,224,1002,223,2,223,1005,224,479,1001,223,1,223,1007,226,226,224,102,2,223,223,1006,224,494,101,1,223,223,1008,226,677,224,102,2,223,223,1006,224,509,101,1,223,223,1107,677,226,224,1002,223,2,223,1006,224,524,1001,223,1,223,108,677,677,224,1002,223,2,223,1005,224,539,1001,223,1,223,1107,226,226,224,1002,223,2,223,1006,224,554,1001,223,1,223,7,226,226,224,1002,223,2,223,1006,224,569,1001,223,1,223,8,677,226,224,102,2,223,223,1006,224,584,101,1,223,223,1008,677,677,224,102,2,223,223,1005,224,599,101,1,223,223,1007,226,677,224,1002,223,2,223,1006,224,614,1001,223,1,223,8,677,677,224,1002,223,2,223,1005,224,629,101,1,223,223,107,677,677,224,102,2,223,223,1005,224,644,101,1,223,223,1108,677,226,224,102,2,223,223,1005,224,659,101,1,223,223,1008,226,226,224,102,2,223,223,1006,224,674,1001,223,1,223,4,223,99,226
]

// Object.freeze(opCodes)

function compute(opCodes){
    let counter = 0
    let instruction = numToDigits(opCodes[counter])
    counter ++
    var opCode = getOpCode(instruction)
    var params = getParams(instruction)
    
    while(opCode != 99){
        switch(opCode){
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
            default: throw new Error(`Invalid op code ${opCode} at position ${counter}`)
        }
        instruction = numToDigits(opCodes[counter])
        counter ++
        opCode = getOpCode(instruction)
        params = getParams(instruction)
    }

    return opCodes[0]
}

function numToDigits(num){
    const numAsStr = num.toString()
    const digits = []
    for(let i = 0; i < numAsStr.length; i++){
        digits.push(parseInt(numAsStr[i]))
    }

    return digits
}

function getOpCode(instructionDigits){
    return instructionDigits.length === 1 
        ? instructionDigits[0]
        : parseInt(`${instructionDigits[instructionDigits.length - 2]}${instructionDigits[instructionDigits.length-1]}`)
}

function getParams(digits){
    return digits.slice(0, digits.length - 2)
}

function getParam1Mode(params){
    const param = params[params.length - 1]

    return param != null ? param : null
}

function getParam2Mode(params){
    const param = params[params.length - 2]

    return param != null ? param : null
}

function getParam3Mode(params){
    const param = params[params.length - 3]

    return param != null ? param : null
}

function add(opCodes, counter, params){
    const aMode = getParam1Mode(params)
    const bMode = getParam2Mode(params)
    const a = aMode === 1 ? opCodes[counter] : opCodes[opCodes[counter]]
    const b = bMode === 1 ? opCodes[counter+1] :  opCodes[opCodes[counter + 1]]
    const c = opCodes[counter + 2]
    opCodes[c] = a + b
}

function multiply(opCodes, counter, params){
    const aMode = getParam1Mode(params)
    const bMode = getParam2Mode(params)
    const a = aMode === 1 ? opCodes[counter] : opCodes[opCodes[counter]]
    const b = bMode === 1 ? opCodes[counter + 1] : opCodes[opCodes[counter + 1]]
    opCodes[opCodes[counter + 2]] = a * b
}

function input(opCodes, counter){
    const a = opCodes[counter]
    opCodes[a] = 1
}

function output(opCodes, counter, params){
    const a = opCodes[counter]
    const aMode = getParam1Mode(params)
    if(aMode === 1){
        console.log(opCodes[counter])
    } else {
        console.log(opCodes[a])
    }
}

compute(opCodes)
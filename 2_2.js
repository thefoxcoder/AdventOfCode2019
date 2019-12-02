const opCodes = [
    1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,19,5,23,2,23,6,27,1,27,5,31,2,6,31,35,1,5,35,39,2,39,9,43,1,43,5,47,1,10,47,51,1,51,6,55,1,55,10,59,1,59,6,63,2,13,63,67,1,9,67,71,2,6,71,75,1,5,75,79,1,9,79,83,2,6,83,87,1,5,87,91,2,6,91,95,2,95,9,99,1,99,6,103,1,103,13,107,2,13,107,111,2,111,10,115,1,115,6,119,1,6,119,123,2,6,123,127,1,127,5,131,2,131,6,135,1,135,2,139,1,139,9,0,99,2,14,0,0
]

Object.freeze(opCodes)

function start(){
    for(let noun = 0; noun <= 99; noun++){
        for(let verb = 0; verb <= 99; verb++){
            const input = prepareProgram(opCodes, noun, verb)
            const result = compute(input)

            if(result === 19690720){
                console.log(`Noun is ${noun}, Verb is ${verb}`)
                console.log(`100 * ${noun} + ${verb} = ${(100 * noun + verb)}`)
                return
            }
        }
    }
}

function compute(opCodes){
    let counter = 0
    let op = opCodes[counter]

    while(op != 99){
        switch(op){
            case 1: add(opCodes, counter)
                    break;
            case 2: multiply(opCodes, counter)
                    break;
            default: throw new Error(`Invalid op code ${op} at position ${counter}`)
        }
        counter += 4
        op = opCodes[counter]
    }

    return opCodes[0]
}

function prepareProgram(opCodes, noun, verb){
    const opCodesCopy = [...opCodes]
    opCodesCopy[1] = noun
    opCodesCopy[2] = verb
    return opCodesCopy
}

function add(opCodes, counter){
    const a = opCodes[opCodes[counter + 1]]
    const b = opCodes[opCodes[counter + 2]]
    opCodes[opCodes[counter + 3]] = a + b
}

function multiply(opCodes, counter){
    const a = opCodes[opCodes[counter + 1]]
    const b = opCodes[opCodes[counter + 2]]
    opCodes[opCodes[counter + 3]] = a * b
}

start()
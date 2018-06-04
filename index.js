
var fs = require('fs')
var solc = require('solc')
var template = require('./template.js')


var sol1 = fs.readFileSync(process.argv[2]).toString()
var input = {
	'1.sol':sol1,
}

var output = solc.compile({ sources: input }, 1)
//console.log(output)
var count = 0
for (var contractName in output.contracts){
	var fileName = contractName.split(":")[1] + '.json'
	console.log('Generating: '+fileName)
	var tmp = template.compileFromAbi(
          JSON.parse(output.contracts[contractName].interface),
          contractName.split(":")[1],
          output.contracts[contractName].bytecode
    )
 
    fs.writeFileSync(process.argv[3]+fileName,JSON.stringify(tmp,null,4))
}

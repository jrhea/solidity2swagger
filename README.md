# solidity2swagger

generate scaffolding code from your solidity contract

> template.js is based off of code in https://github.com/loyyal/sol2swagger

# how it works

given a solidity contract, it will generate a swagger json file and then use swagger-codegen to create generate the code. 

> NOTE: if swagger-codegen isn't installed the process will stop at creating the swagger JSON file.

# setup

### prerequisites

- java
- swagger-codegen

### setup

Just run the setup.sh script

```bash

./setup.sh

```

> NOTE: if you are running linux, then you will need to install java and swagger-codegen before running setup.sh. 

# instructions

```

./run [path_to_contract.sol] [swagger_output_path] [path_to_swagger.json] [path_to_codegen_output] 

```

> NOTE: Currently, the process works for a single contract.sol.  I just need to improve the argument parsing to allow for a contract with dependencies.


# example

```

./run './examples/voting/sc/contracts/Voting.sol' './examples/voting/' './examples/voting/Voting.json' './examples/voting/server' 

```

<img src=./images/swagger-doc />



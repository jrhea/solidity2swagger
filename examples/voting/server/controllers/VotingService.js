'use strict';

exports.votingCandidateListGET = function(args, res, next) {
  /**
   * get candidateList
   *
   *  String 
   * returns inline_response_200_2
   **/
  var examples = {};
  examples['application/json'] = {
  "" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.votingDeployPOST = function(args, res, next) {
  /**
   * post deploy
   * deploys the following bytecode 608060405234801561001057600080fd5b506040516102f23803806102f283398101604052805101805161003a906001906020840190610041565b50506100ab565b82805482825590600052602060002090810192821561007e579160200282015b8281111561007e5782518255602090920191600190910190610061565b5061008a92915061008e565b5090565b6100a891905b8082111561008a5760008155600101610094565b90565b610238806100ba6000396000f30060806040526004361061006c5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632f265cf78114610071578063392e66781461009f5780637021939f146100cb578063b13c744b146100e3578063cc9ab2671461010d575b600080fd5b34801561007d57600080fd5b50610089600435610127565b6040805160ff9092168252519081900360200190f35b3480156100ab57600080fd5b506100b7600435610153565b604080519115158252519081900360200190f35b3480156100d757600080fd5b506100896004356101a0565b3480156100ef57600080fd5b506100fb6004356101b5565b60408051918252519081900360200190f35b34801561011957600080fd5b506101256004356101d4565b005b600061013282610153565b151561013d57600080fd5b5060009081526020819052604090205460ff1690565b6000805b60015481101561019557600180548491908390811061017257fe5b600091825260209091200154141561018d576001915061019a565b600101610157565b600091505b50919050565b60006020819052908152604090205460ff1681565b60018054829081106101c357fe5b600091825260209091200154905081565b6101dd81610153565b15156101e857600080fd5b6000908152602081905260409020805460ff8082166001011660ff199091161790555600a165627a7a72305820baaa9110a0d2b09e8c7ebc02e4d30d7b5b4f9cbdc629f1334ae01357c92ffaeb0029
   *
   * returns inline_response_200_3
   **/
  var examples = {};
  examples['application/json'] = {
  "address" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.votingTotalVotesForGET = function(args, res, next) {
  /**
   * get totalVotesFor
   *
   * candidate String 
   * returns inline_response_200
   **/
  var examples = {};
  examples['application/json'] = {
  "" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.votingValidCandidateGET = function(args, res, next) {
  /**
   * get validCandidate
   *
   * candidate String 
   * returns inline_response_200_1
   **/
  var examples = {};
  examples['application/json'] = {
  "" : true
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.votingVoteForCandidateGET = function(args, res, next) {
  /**
   * get voteForCandidate
   *
   * candidate String 
   * returns Object
   **/
  var examples = {};
  examples['application/json'] = "{}";
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.votingVotesReceivedGET = function(args, res, next) {
  /**
   * get votesReceived
   *
   *  String 
   * returns inline_response_200
   **/
  var examples = {};
  examples['application/json'] = {
  "" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}


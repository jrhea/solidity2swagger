'use strict';

var url = require('url');

var Voting = require('./VotingService');

module.exports.votingCandidateListGET = function votingCandidateListGET (req, res, next) {
  Voting.votingCandidateListGET(req.swagger.params, res, next);
};

module.exports.votingDeployPOST = function votingDeployPOST (req, res, next) {
  Voting.votingDeployPOST(req.swagger.params, res, next);
};

module.exports.votingTotalVotesForGET = function votingTotalVotesForGET (req, res, next) {
  Voting.votingTotalVotesForGET(req.swagger.params, res, next);
};

module.exports.votingValidCandidateGET = function votingValidCandidateGET (req, res, next) {
  Voting.votingValidCandidateGET(req.swagger.params, res, next);
};

module.exports.votingVoteForCandidateGET = function votingVoteForCandidateGET (req, res, next) {
  Voting.votingVoteForCandidateGET(req.swagger.params, res, next);
};

module.exports.votingVotesReceivedGET = function votingVotesReceivedGET (req, res, next) {
  Voting.votingVotesReceivedGET(req.swagger.params, res, next);
};

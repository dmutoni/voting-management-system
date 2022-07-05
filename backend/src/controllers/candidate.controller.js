import Candidate from "../models/candidate.model.js";

const saveCandidate = async (req,res) => {
    try {
        const candidate = new Candidate({
            candidateName: req.body.candidateName,
            partyName: req.body.partyName,
            profileUrl: req.body.profileUrl,
            votes: 0,
            postTitle: req.body.postTitle,
            postDescription: req.body.postDescription,
        });
        const savedCandidate = await candidate.save();
        return res.status(201).json({
            success: true,
            message: 'Candidate created successfully',
            data: savedCandidate
        })
    }
    catch (err) {
        return res.status(400).json({
            message: 'Error creating candidate',
            error: err.message
        })
    }
}

const getCandidates = async (req,res) => {
    try {
        const candidates = await Candidate.find();
        return res.status(200).json({
            success: true,
            message: 'Candidates retrieved successfully',
            data: candidates
        })
    }
    catch (err) {
        return res.status(400).json({
            message: 'Error retrieving candidates',
            error: err.message
        })
    }
}

const getCandidate = async (req,res) => {
    try {
        const candidate = await Candidate.findById(req.params.id);
        if (!candidate) return res.status(404).json({
            message: 'Candidate not found',
            success: false
        });
        return res.status(200).json({
            success: true,
            message: 'Candidate retrieved successfully',
            data: candidate
        })
    }
    catch (err) {
        return res.status(400).json({
            message: 'Error retrieving candidate',
            error: err.message
        })
    }
}

const updateCandidate = async (req,res) => {
    try {
        const candidate = await Candidate.findById(req.params.id);
        if (!candidate) return res.status(404).json({
            message: 'Candidate not found',
            success: false
        });
        candidate.candidateName = req.body.candidateName;
        candidate.partyName = req.body.partyName;
        candidate.profileUrl = req.body.profileUrl;
        candidate.votes = req.body.votes;
        candidate.postTitle = req.body.postTitle;
        candidate.postDescription = req.body.postDescription;
        const savedCandidate = await candidate.save();
        if (savedCandidate) return res.status(200).json({
            success: true,
            message: 'Candidate updated successfully',
            data: savedCandidate
        })
    }
    catch (err) {
        return res.status(400).json({
            message: 'Error updating candidate',
            error: err.message
        })
    }
}

const deleteCandidate = async (req,res) => {
    try {
        const candidate = await Candidate.findById(req.params.id);
        if (!candidate) return res.status(404).json({
            message: 'Candidate not found',
            success: false
        });
        const deletedCandidate = await candidate.remove();
        if (deletedCandidate) return res.status(200).json({
            success: true,
            message: 'Candidate deleted successfully',
            data: deletedCandidate
        })
    }
    catch (err) {
        return res.status(400).json({
            message: 'Error deleting candidate',
            error: err.message
        })
    }
}

const getCandidateByPost = async (req,res) => {
    try {
        const candidate = await Candidate.find({postTitle: req.params.postTitle});
        return res.status(200).json({
            success: true,
            message: 'Candidate retrieved successfully',
            data: candidate
        })
    }
    catch (err) {
        return res.status(400).json({
            message: 'Error retrieving candidate',
            error: err.message
        })
    }
}

const getCandidateByParty = async (req,res) => {
    try {
        const candidate = await Candidate.find({partyName: req.params.partyName});
        return res.status(200).json({
            success: true,
            message: 'Candidate retrieved successfully',
            data: candidate
        })
    }
    catch (err) {
        return res.status(400).json({
            message: 'Error retrieving candidate',
            error: err.message
        })
    }
}

const incrementVotes = async (accountId) => {
    const account = await Account.findById(accountId);

    const request = {
        candidateName : account.candidateName,
        partyName : account.partyName,
        profileUrl: account.profileUrl,
        votes: account.votes + 1,
        postTitle: account.postTitle,
        postDescription: account.postDescription
    }


    await Account.findByIdAndUpdate( {_id: accountId}, request, { new: true})
}

const getCandidateByVotes = async (req,res) => {
    try {
        const candidate = await Candidate.find({votes: req.params.votes});
        return res.status(200).json({
            success: true,
            message: 'Candidate retrieved successfully',
            data: candidate
        })
    }
    catch (err) {
        return res.status(400).json({
            message: 'Error retrieving candidate',
            error: err.message
        })
    }
}

const getCandidateByCandidateName = async (req,res) => {
    try {
        const candidate = await Candidate.find({candidateName: req.params.candidateName});
        return res.status(200).json({
            success: true,
            message: 'Candidate retrieved successfully',
            data: candidate
        })
    }
    catch (err) {
        return res.status(400).json({
            message: 'Error retrieving candidate',
            error: err.message
        })
    }
}
export {
    saveCandidate,
    getCandidates,
    getCandidate,
    updateCandidate,
    deleteCandidate,
    getCandidateByPost,
    getCandidateByParty,
    getCandidateByVotes,
    incrementVotes,
}
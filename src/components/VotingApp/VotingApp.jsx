import React, { useState, useEffect } from 'react';
import styles from './VotingApp.module.css'

import CandidateForm from '../CandidateForm/CandidateForm'
import CandidateList from '../CandidateList/CandidateList';
import VoteSummary from '../VotesSummary/VotesSummary';

const VotingApp = ({}) => {
    const [candidates, setCandidates] = useState(() => {
        const savedCandidates = localStorage.getItem('listCandidates');
        return savedCandidates ? JSON.parse(savedCandidates) : [];
    });

    useEffect(() => {
        localStorage.setItem('listCandidates', JSON.stringify(candidates));
    }, [candidates]);

    const addCandidate = (name) => {
        const newCandidate = {
            id: Date.now(),
            name,
            votes: 0
        }

        setCandidates([...candidates, newCandidate])
    }

    const removeCandidate = (candidateId) => {
        const updatedCandidates = candidates.filter((candidate) => candidate.id !== candidateId)
        setCandidates(updatedCandidates)
    }

    const addVote = (candidateId) => {
        const updatedCandidates = candidates.map((candidate) => {
            if (candidate.id === candidateId) {
                return {...candidate, votes: candidate.votes + 1};
            }
            return candidate;
        });
        setCandidates(updatedCandidates);
    }

    return (
        <div className={styles.appContainer}>
            <div className={styles.header}>
                <p className={styles.title}>App Votos</p>
            </div>

            <CandidateForm addCandidate={addCandidate} />
            <CandidateList 
            candidates={candidates}
            removeCandidate={removeCandidate}
            addVote={addVote}
            />
            <VoteSummary />
        </div>
    )
}

export default VotingApp
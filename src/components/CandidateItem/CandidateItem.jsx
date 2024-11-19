import React, { useState } from 'react';
import styles from './CandidateItem.module.css'

const CandidateItem = ({key, candidate, removeCandidate, addVote}) => {

    const handleRemove = () => {
        removeCandidate(candidate.id)
    }

    const handleVote = () => {
        addVote(candidate.id)
    }

    return (
        <div className={styles.listItem}>
            <p 
            className={styles.name}>
                {candidate.name}
            </p>

            <p 
            className={styles.votes}>
                Votos: {candidate.votes}
            </p>

            <div className={styles.actions}>
                <p className={styles.voteButton} onClick={handleVote} >Votar</p>
                <p className={styles.deleteButton} onClick={handleRemove} >X</p>
            </div>
        </div>
    )
}

export default CandidateItem
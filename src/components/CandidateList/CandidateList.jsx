import React, { useState } from 'react';
import styles from './CandidateList.module.css'

import CandidateItem from '../CandidateItem/CandidateItem'

const CandidateForm = ({candidates, removeCandidate, addVote}) => {

    return (
        <>
        <div className={styles.header}>Candidatos</div>
        <div className={styles.listContainer}>
            <ul className={styles.list}>
                {
                    candidates.map((candidate) => (
                        <CandidateItem
                            key={candidate.id}
                            candidate={candidate}
                            removeCandidate={removeCandidate}
                            addVote={addVote}
                        />
                    ))
                }
            </ul>
        </div>
        </>
    )
}

export default CandidateForm
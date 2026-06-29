export default function Output({applicant}) {
    return (
        <div className="form-info">
            <div className="form-header form-section">
                <h2>{applicant.name}</h2>
                <p>{applicant.email} | {applicant.phoneNo}</p>
            </div>
            <div className="form-section">
                <div className="form-title-wrapper">
                    <h3>Educational Experience</h3>
                </div>
                <div className="form-description-wrapper">
                    {applicant.education.map(edu => {
                        return (
                            <div className="form-description-section" key={edu.id}>
                            <div>
                                <p>{edu.schoolName}</p>
                                <p>{edu.studyTitle}</p>
                            </div>
                            <p>{edu.studyDate}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            {
                applicant.experience.length > 0 &&
                <div className="form-section">
                    <div className="form-title-wrapper">
                        <h3>Professional Experience</h3>
                    </div>
                    <div className="form-description-wrapper">
                        {applicant.experience.map(exp => {
                            return (
                                <div key={exp.id}>
                                <div className="form-description-section">
                                    <div>
                                        <p>{exp.companyName}</p>
                                        <p>{exp.position}</p>
                                    </div>
                                    <p>{exp.fromDate} - {exp.toDate}</p>
                                </div>
                                <ul>
                                    {exp.responsibilities.map((r, rI) => <li key={`${rI}-${exp.id}`}>{r}</li>)}
                                </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
            
        </div>
    )
}
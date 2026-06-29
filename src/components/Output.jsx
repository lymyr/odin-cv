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
                            <div className="form-description-section">
                            <div key={edu.id}>
                                <p>{edu.schoolName}</p>
                                <p>{edu.studyTitle}</p>
                            </div>
                            <p>{edu.studyTitle}</p>
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
                                <>
                                <div className="form-description-section">
                                    <div key={exp.id}>
                                        <p>{exp.companyName}</p>
                                        <p>{exp.position}</p>
                                    </div>
                                    <p>{exp.fromDate} - {exp.toDate}</p>
                                </div>
                                <ul>
                                    {exp.responsibilities.map(r => <li>{r}</li>)}
                                </ul>
                                </>
                            )
                        })}
                    </div>
                </div>
            }
            
        </div>
    )
}
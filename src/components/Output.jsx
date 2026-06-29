import "../styles/Output.css"
import { format } from "date-fns"

function formatDate(date, formatType) {
    if (date == false) return ""
    return format(date, formatType);
}

export default function Output({applicant}) {
    return (
        <div className="form-info">
            <div className="form-header form-section">
                <h2>{applicant.name}</h2>
                <p>{applicant.email} {applicant.email != "" && applicant.phoneNo != "" ? "|" : ""} {applicant.phoneNo}</p>
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
                                <h4>{edu.schoolName}</h4>
                                <p>{edu.studyTitle}</p>
                            </div>
                            <p>{formatDate(edu.studyDate, "MMM yyyy")}</p>
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
                                        <h4>{exp.companyName}</h4>
                                        <p>{exp.position}</p>
                                    </div>
                                    <p>{formatDate(exp.fromDate, "MMM yyyy")} {exp.fromDate !="" && exp.toDate !="" ? "–" : ""} {formatDate(exp.toDate, "MMM yyyy")}</p>
                                </div>
                                <ul>
                                    {exp.responsibilities.map((r, rI) => {
                                        if (r != "") return <li key={`${rI}-${exp.id}`}>{r}</li>
                                    })}
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
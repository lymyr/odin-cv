import GroupField from "./GroupField.jsx";
import Input from "./Input";
import AddButton from "./Buttons/AddButton.jsx";
import "../styles/Form.css"

export default function Form({applicant, setApplicant}) {
    function addEducation() {
        setApplicant({...applicant, education: [...applicant.education, {
              id: crypto.randomUUID(),
              schoolName: "",
              studyTitle: "",
              studyDate: ""
            }
    ]})}

    function addExperience() {
        setApplicant({...applicant, experience: [...applicant.experience, {
              id: crypto.randomUUID(),
              companyName: "",
              position: "",
              responsibilities: [],
              fromDate: "",
              toDate: ""
            }
    ]})}

    function removeEdu(eduID) {
        setApplicant({
            ...applicant,
            education: applicant.education.filter(edu => edu.id !== eduID)
        })
    }

    function removeExp(expID) {
        setApplicant({
            ...applicant,
            experience: applicant.experience.filter(exp => exp.id !== expID)
        })
    }
    return (
        <form 
            onSubmit={
                (e) => e.preventDefault()
            }
        >
            <GroupField text="General Information">
                <Input 
                    label="Name" 
                    id="name" 
                    handleChange={
                        (e) => setApplicant({...applicant, name: e.target.value})
                    }
                    value={applicant.name}
                >
                </Input>
                <Input 
                    label="Email" 
                    id="email" 
                    type="email"
                    handleChange={
                        (e) => setApplicant({...applicant, email: e.target.value})
                    }
                    value={applicant.email}
                >
                </Input>
                <Input 
                    label="Phone Number" 
                    id="phone" 
                    type="tel"
                    handleChange={
                        (e) => setApplicant({...applicant, phoneNo: e.target.value})
                    }
                    value={applicant.phoneNo}
                >
                 </Input>
            </GroupField>

            <GroupField text="Educational Experience">
                {applicant.education.map((edu, i) => {
                    return (
                        <div className="input-wrapper" key={edu.id}>
                            {applicant.education.length > 1 && <button onClick={() => removeEdu(edu.id)}>X</button>}
                            <div>
                                <Input
                                    label="School Name"
                                    id={`name-${edu.id}`}
                                    handleChange={
                                        (e) => {
                                            const newEdu = [...applicant.education];
                                            newEdu[i] = {...newEdu[i], schoolName: e.target.value}
                                            setApplicant({...applicant, education:newEdu})
                                    }}
                                    value={applicant.education[i].schoolName}
                                >
                                </Input>
                                <Input
                                    label="Title of Study"
                                    id={`study-title-${edu.id}`}
                                    handleChange={
                                        (e) => {
                                            const newEdu = [...applicant.education];
                                            newEdu[i] = {...newEdu[i], studyTitle: e.target.value}
                                            setApplicant({...applicant, education:newEdu})
                                    }}
                                    value={applicant.education[i].studyTitle}
                                >
                                </Input>
                                <Input
                                    label="Date of Study"
                                    id={`study-date-${edu.id}`}
                                    type="date"
                                    handleChange={
                                        (e) => {
                                            const newEdu = [...applicant.education];
                                            newEdu[i] = {...newEdu[i], studyDate: e.target.value}
                                            setApplicant({...applicant, education:newEdu})
                                    }}
                                    value={applicant.education[i].studyDate}
                                >
                                </Input>
                            </div>
                        </div>
                        
                )})}
                <AddButton handleClick={addEducation}></AddButton>
            </GroupField>
            
            {
                applicant.experience.length === 0 ? 
                <AddButton text="Add Experience" handleClick={addExperience}></AddButton> :
                <GroupField text="Practical Experience">
                    {applicant.experience.map((exp, i) => {
                        return (
                            <div className="input-wrapper" key={exp.id}>
                                {<button onClick={() => removeExp(exp.id)}>X</button>}
                                <div>
                                    <Input 
                                        label="Company Name" 
                                        id={`company-name-${exp.id}`}
                                        handleChange={
                                            (e) => {
                                                const newExp = [...applicant.experience];
                                                newExp[i] = {...newExp[i], companyName: e.target.value}
                                                setApplicant({...applicant, experience:newExp})
                                        }}
                                        value={applicant.experience[i].companyName}
                                    >
                                    </Input>
                                    <Input 
                                        label="Position Title"
                                        id={`position-${exp.id}`}
                                        handleChange={
                                            (e) => {
                                                const newExp = [...applicant.experience];
                                                newExp[i] = {...newExp[i], position: e.target.value}
                                                setApplicant({...applicant, experience:newExp})
                                        }}
                                        value={applicant.experience[i].position}
                                    >
                                    </Input>
                                    <div className="input-label">
                                        <label htmlFor={`responsibilities-${exp.id}`}>Responsibilities</label>
                                        <textarea 
                                            wrap='soft' 
                                            rows={applicant.experience[i].responsibilities.length > 0 ? applicant.experience[i].responsibilities.length: 1}
                                            id={`responsibilities-${exp.id}`} 
                                            placeholder="Separate using 'enter' or new line"
                                            onChange={
                                                (e) => {
                                                    const newExp = [...applicant.experience];
                                                    newExp[i] = {...newExp[i], responsibilities: e.target.value.split(`\n`)}
                                                    setApplicant({...applicant, experience:newExp})
                                            }}
                                            value={applicant.experience[i].responsibilities.join(`\n`)}
                                        >
                                        </textarea>
                                    </div>
                                    <Input 
                                        label="From" 
                                        id={`work-start-date-${exp.id}`} 
                                        type="date"
                                        handleChange={
                                            (e) => {
                                                const newExp = [...applicant.experience];
                                                newExp[i] = {...newExp[i], fromDate: e.target.value}
                                                setApplicant({...applicant, experience:newExp})
                                        }}
                                        value={applicant.experience[i].fromDate}
                                    >
                                    </Input>
                                    <Input 
                                        label="To"
                                        id={`work-end-date-${exp.id}`}
                                        type="date"
                                        handleChange={
                                            (e) => {
                                                const newExp = [...applicant.experience];
                                                newExp[i] = {...newExp[i], toDate: e.target.value}
                                                setApplicant({...applicant, experience:newExp})
                                        }}
                                        value={applicant.experience[i].toDate}
                                    >
                                    </Input>
                                </div>
                            </div>
                    )})}
                    <AddButton handleClick={addExperience}></AddButton>
                </GroupField>
            }

        </form>
    )
}
import GroupField from "./GroupField.jsx";
import Input from "./Input";
import AddButton from "./Buttons/AddButton.jsx";
import "../styles/Form.css"
import { useState } from "react";

export default function Form({applicant, setApplicant}) {
    function addEducation() {
        setApplicant({...applicant, education: [...applicant.education, {
              id: crypto.randomUUID(),
              schoolName: null,
              studyTitle: null,
              studyDate: null
            }
    ]})}

    function addExperience() {
        setApplicant({...applicant, experience: [...applicant.experience, {
              id: crypto.randomUUID(),
              companyName: null,
              position: null,
              responsibilities: [],
              fromDate: null,
              toDate: null
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
                >
                </Input>
                <Input 
                    label="Email" 
                    id="email" 
                    type="email"
                    handleChange={
                        (e) => setApplicant({...applicant, email: e.target.value})
                    }
                >
                </Input>
                <Input 
                    label="Phone Number" 
                    id="phone" 
                    type="tel"
                    handleChange={
                        (e) => setApplicant({...applicant, phoneNo: e.target.value})
                    }
                >
                 </Input>
            </GroupField>

            <GroupField text="Educational Experience">
                {applicant.education.map(edu => {
                    return (
                        <div className="input-wrapper" key={edu.id}>
                            {applicant.education.length > 1 && <button onClick={() => removeEdu(edu.id)}>X</button>}
                            <div>
                                <Input
                                label="School Name"
                                id={`name-${edu.id}`}
                                handleChange={
                                    (e) => setApplicant({...applicant, name: e.target.value})
                                }
                                >
                                </Input>
                                <Input
                                    label="Title of Study"
                                    id={`study-title-${edu.id}`}
                                    handleChange={
                                        (e) => setApplicant({...applicant, email: e.target.value})
                                    }
                                >
                                </Input>
                                <Input
                                    label="Date of Study"
                                    id={`study-date-${edu.id}`}
                                    type="date"
                                    handleChange={
                                        (e) => setApplicant({...applicant, phoneNo: e.target.value})
                                    }
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
                    {applicant.experience.map(exp => {
                        return (
                            <div className="input-wrapper" key={exp.id}>
                                {<button onClick={() => removeExp(exp.id)}>X</button>}
                                <div>
                                    <Input label="Company Name" id={`company-name-${exp.id}`}></Input>
                                    <Input label="Position Title" id={`position-${exp.id}`}></Input>
                                    <div className="input-label">
                                        <label htmlFor={`responsibilities-${exp.id}`}>Responsibilities</label>
                                        <textarea wrap='soft' id={`responsibilities-${exp.id}`} placeholder="Separate using 'enter' or new line"></textarea>
                                    </div>
                                    <Input label="From" id={`work-start-date-${exp.id}`} type="date"></Input>
                                    <Input label="To" id={`work-end-date-${exp.id}`} type="date"></Input>
                                    
                                </div>
                            </div>
                    )})}
                    <AddButton handleClick={addExperience}></AddButton>
                </GroupField>
            }

        </form>
    )
}
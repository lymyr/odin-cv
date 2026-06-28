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
              schoolName: null,
              studyTitle: null,
              studyDate: null
            }
    ]})}
    
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
                <Input label="School Name" id="school"></Input>
                <Input label="Title of Study" id="study-title"></Input>
                <Input label="Date of Study" id="study-date" type="date"></Input>
                <AddButton></AddButton>
            </GroupField>
            
            {
                applicant.experience === "none" ? 
                <AddButton text="Add Experience"></AddButton> :
                <GroupField text="Practical Experience">
                    <Input label="Company Name" id="company-name"></Input>
                    <Input label="Position Title" id="position"></Input>
                    <Input label="From" id="work-start-date" type="date"></Input>
                    <Input label="To" id="work-end-date" type="date"></Input>
                </GroupField>
            }

        </form>
    )
}
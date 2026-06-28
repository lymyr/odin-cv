import GroupField from "./GroupField.jsx";
import Input from "./Input";
import "../styles/Form.css"
import { useState } from "react";

export default function Form() {    
    return (
        <form 
            onSubmit={
                (e) => e.preventDefault()
            }
        >
            <GroupField text="General Information">
                <Input label="Name" id="name"></Input>
                <Input label="Email" id="email" type="email"></Input>
                <Input label="Phone Number" id="phone" type="tel"></Input>
            </GroupField>
            <GroupField text="Educational Experience">
                <Input label="School Name" id="school"></Input>
                <Input label="Title of Study" id="study-title"></Input>
                <Input label="Date of Study" id="study-date" type="date"></Input>
            </GroupField>
            <GroupField text="Practical Experience">
                <Input label="Company Name" id="company-name"></Input>
                <Input label="Position Title" id="position"></Input>
                <Input label="From" id="work-start-date" type="date"></Input>
                <Input label="To" id="work-end-date" type="date"></Input>
            </GroupField>

        </form>
    )
}
import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Form from './components/Form.jsx'
import Output from './components/Output.jsx';

function App() {
  const [applicant, setApplicant] = useState({
      name: "",
      email: "",
      phoneNo: "",
      education: [
          {
              id: crypto.randomUUID(),
              schoolName: "",
              studyTitle: "",
              studyDate: ""
          }
      ],
      experience: []
  });

  const [userStatus, setUserStatus] = useState('typing');

  return (
    <>
      <Header userStatus={userStatus} setUserStatus={setUserStatus}></Header>
      {
        userStatus === 'typing' ? 
        <Form 
          applicant={applicant} 
          setApplicant={setApplicant}
        >
        </Form> :
        <Output applicant={applicant}></Output>
      }
    </>
  )
}

export default App

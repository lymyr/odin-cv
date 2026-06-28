import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Form from './components/Form.jsx'

function App() {
  const [applicant, setApplicant] = useState({
      name: null,
      email: null,
      phoneNo: null,
      education: [
          {
              id: crypto.randomUUID(),
              schoolName: null,
              studyTitle: null,
              studyDate: null
          }
      ],
      experience: "none"
  });

  return (
    <>
      <Header></Header>
      <Form 
        applicant={applicant} 
        setApplicant={setApplicant}
      >
      </Form>
    </>
  )
}

export default App

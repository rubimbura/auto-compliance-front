import { CCol,CCard, CCardBody, CButton } from "@coreui/react";
import TextField from "src/components/textfield";
import { useState } from 'react'
import SelectField from "src/components/selectField";







const UserAssessRegulation = () => {

  const [values, setValues] = useState('')
  
 
  const likelyHood = [
    "",
    {
      label: '1', 
      value: '1'
    },
    {
      label: '2', 
      value: '2'
    },
    {
      label: '3', 
      value: '3'
    },
    {
      label: '4', 
      value: '4'
    },
    {
      label: '5', 
      value: '5'
    },
  ]

  const inherentRiskLevel = [
    "",
    {
      label: '5',
      value: '5'
    },
    {
      label: '10',
      value: '10'
    },

  ]

  return(
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardBody style={{ padding: 20 }}>
          <div className="module-title-container">
            <span>Assess Regulation</span>
          </div>
          <div  className="add-form-row">
            <TextField label="Regulation Title" onChange={(text) =>{
              setValues({
                ...values,
                regulation_ref: text.target.value
              })
            }}/>
             <TextField style={{marginLeft: 10}} label="Regulation Title" onChange={(text) =>{
              setValues({
                ...values,
                regulation_ref: text.target.value
              })
              
            }}/>
          </div>
          <div className="add-form-row">
            <SelectField 
              label="Likely hood" 
              options={likelyHood} 
              onChange={(text) => {
                // setSelectedType(text.target.value)
                setValues({
                  ...values,
                  type: text.target.value
                })
              }}
            />
            <SelectField 
              label="Inherent Risk Level" 
              style={{marginLeft: 10}} 
              options={inherentRiskLevel} 
              onChange={(text) => {
                // setSelectedAuthority(text.target.value)
                setValues({
                  ...values,
                  issuing_authority: text.target.value
                })
              }}
            />
          </div>
          <div  className="add-form-row">
            <TextField 
              label="Cause of Risk" 
              onChange={(text) =>{
              setValues({
                ...values,
                regulation_ref: text.target.value
              })
            }}/>
             <TextField 
              style={{marginLeft: 10}} 
              label="Risk Impact" 
              onChange={(text) =>{
              setValues({
                ...values,
                regulation_ref: text.target.value
              })
            }}/>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
  )
}
export default UserAssessRegulation
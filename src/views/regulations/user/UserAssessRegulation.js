import { CCol,CCard, CCardBody, CButton } from "@coreui/react";
import TextField from "src/components/textfield";
import { useState } from 'react'
import SelectField from "src/components/selectField";
import { useSelfEvaluationMutation } from 'src/api'






const UserAssessRegulation = () => {

  const [values, setValues] = useState('')
  const [selfEvaluationMutation,{isLoading}] = useSelfEvaluationMutation()
  
 
  return(
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardBody style={{ padding: 20 }}>
          <div className="module-title-container">
            <span>Assess Regulation</span>
          </div>
          <div  className="add-form-row">
            <TextField label="Impact" onChange={(text) =>{
              setValues({
                ...values,
                imapct: text.target.value
              })
            }}/>
             <TextField style={{marginLeft: 10}} label="Impact rationale" onChange={(text) =>{
              setValues({
                ...values,
                impact_rationale: text.target.value
              })
              
            }}/>
          </div>
          <div className="add-form-row">
            <SelectField 
              label="Likely hood" 
              options={likelyHood} 
              onChange={(text) => {
                setValues({
                  ...values,
                  likelyhood: text.target.value
                })
              }}
            />
            <SelectField 
              label="Inherent Risk Level" 
              style={{marginLeft: 10}} 
              options={inherentRiskLevel} 
              onChange={(text) => {
                setValues({
                  ...values,
                  inherent_risk_level: text.target.value
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
                cause_of_risk: text.target.value
              })
            }}/>
             <TextField 
              style={{marginLeft: 10}} 
              label="Risk Impact" 
              onChange={(text) =>{
              setValues({
                ...values,
                risk_impact: text.target.value
              })
            }}/>
          </div>

          <div  className="add-form-row">
            <TextField 
              label="Controls" 
              onChange={(text) =>{
              setValues({
                ...values,
                controls: text.target.value
              })
            }}/>
             <SelectField 
              label="Control score" 
              style={{marginLeft: 10}} 
              options={inherentRiskLevel} 
              onChange={(text) => {
                setValues({
                  ...values,
                  control_score: text.target.value
                })
              }}
            />
          </div>

          <div  className="add-form-row">
            <TextField 
              label="Action plan" 
              onChange={(text) =>{
              setValues({
                ...values,
                action_plan: text.target.value
              })
            }}/>
             <SelectField 
              label="Resdual risk level score" 
              style={{marginLeft: 10}} 
              options={inherentRiskLevel} 
              onChange={(text) => {
                setValues({
                  ...values,
                  residual_risk_level_scor: text.target.value
                })
              }}
            />
          </div>

          <div className="Risk Quadrant">
            <TextField 
              label="Cause of Risk" 
              onChange={(text) =>{
              setValues({
                ...values,
                risk_quadrant: text.target.value
              })
            }}/>
             <TextField 
              style={{marginLeft: 10}} 
              label="Risk level" 
              onChange={(text) =>{
              setValues({
                ...values,
                risk_level: text.target.value
              })
            }}/>
          </div>

          <div className="Risk Quadrant">
            <TextField 
              label="Status by assignee" 
              onChange={(text) =>{
              setValues({
                ...values,
                status_by_assignee: text.target.value
              })
            }}/>
          </div>

        </CCardBody>
      </CCard>
    </CCol>
  )
}
export default UserAssessRegulation 


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
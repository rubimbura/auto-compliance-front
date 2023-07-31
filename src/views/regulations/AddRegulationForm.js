import {
  CCard,
  CCardBody,
  CCol,
  CInputGroup,
  CButton,
} from "@coreui/react";
import TextField from "src/components/textfield";
import SelectField from "src/components/selectField";
import TextArea from "src/components/textArea"; 
import { useState, useEffect } from 'react'
import { useAddRegulationMutation } from 'src/api'
import NotificationMessage from "src/components/NotificationMessage"



const AddRegulationForm = () => {

  const [selectedType, setSelectedType] = useState('')
  const [selectedAuthority, setSelectedAuthority] = useState('')
  const [message, setMessage] = useState({
    type: '',
    message: ''
  })

  const [addRegulationMutation, {data, isLoading, isSuccess, isError, error}] = useAddRegulationMutation()

  const [values, setValues] = useState({
    regulation_ref: "",
    effective_date: "",
    issuing_authority: "",
    issuing_date: "",
    repeal_date: "",
    general_impact: "",
    regulatory_digest: "",
    status: "",
  })

  const options = [
    "",
    { label: "Directive", value: "some" },
    { label: "Regulation", value: "2" },
    { label: "Law", value: "3" },
    { label: "Guidline", value: "3" },
    { label: "Other", value: "other" },
  ];

  const issuedAuthorityArr = [
    "",
    {label: 'BNR', value: 'bnr'},
    {label: 'Ministerial Order', value:'minesterial order'},
    {label: 'Rwanda Revenue Authority', value: 'rra'},
    {label: 'Other', value:'other'}
  ]


  const status = [
    "Active",
    { label: "Repealed", value: "repealed" },
  ]


  useEffect(()=> {
    if(isError){
      setMessage({
        type: 'danger',
        message: ''
      })
    }
    if(isSuccess){
      setMessage({
        type: 'success',
        message: data?.data[0]?.uiMessage
      })
    }
    const interval = setInterval(() => {
      setMessage({
        type: '',
        message: ''
      })
    }, 10000)
    return () => clearInterval(interval)
  },[isSuccess, isError])


  const handleSubmit = () => {
    var regulationsArr = []
    regulationsArr.push(values)
    addRegulationMutation({regulations:regulationsArr})
  }

  return (
    <CCol xs={12}>
     {message.type !== '' && <NotificationMessage message={message.message} type={message.type}/>}
      <CCard className="mb-4">
        <CCardBody style={{ padding: 20 }}>
          <div className="module-title-container">
            <span>Add Regulation </span>
          </div>
          <div  className="add-form-row">
            <TextField label="Regulation Title" onChange={(text) =>{
              setValues({
                ...values,
                regulation_ref: text.target.value
              })
            }}/>
            <SelectField 
              label="Status" 
              style={{marginLeft: 10}} 
              options={status}
              onChange={(text) => {
                setValues({
                  ...values,
                  status: text.target.value
                })
              }}
              />
          </div>
          <div className="add-form-row">
            <SelectField 
              label="Select Type" 
              options={options} 
              onChange={(text) => {
                setSelectedType(text.target.value)
                setValues({
                  ...values,
                  type: text.target.value
                })
              }}
              />
            <SelectField label="Issuing Authority" 
              style={{marginLeft: 10}} options={issuedAuthorityArr} 
              onChange={(text) => {
                setSelectedAuthority(text.target.value)
                setValues({
                  ...values,
                  issuing_authority: text.target.value
                })
              }}
              />
          </div>

          {selectedType === 'other' || selectedAuthority === 'other' ? <div  className="add-form-row" style={{backgroundColor:'#F5F8FB', padding: 20}}>
            {selectedType === 'other' && 
            <TextField 
              label="Enter other type" 
              style={{width: '50%'}}
              onChange={(text)=> setValues({
                ...values,
                type: text.target.value
              })}
              /> }
            {selectedAuthority === 'other' && 
            <TextField 
              className="ml-2 form-field" 
              label="Enter Issuing authority" 
              style={{width: '49.2%', display: 'flex', marginLeft: 'auto'}}
              onChange={(text) => {
                setValues({
                  ...values,
                  issuing_authority: text.target.value
                })
              }}
              />}
          </div>: null}

          <div  className="add-form-row">
            <TextField 
              label="Issuing Date" 
              type="date"
              onChange={(text) => {
                setValues({
                  ...values,
                  issuing_date: text.target.value
                })
              }}
              />
            <TextField 
              className="ml-2 form-field" 
              label="Effective Date" 
              type="date"
              onChange={(text) => {
                setValues({
                  ...values,
                  effective_date: text.target.value
                })
              }}
              />
          </div>
          <div className="add-form-row">
            <TextField 
              className="form-field" 
              label="Repeal Date" 
              type="date"
              onChange={(text) => {
                setValues({
                  ...values,
                  repeal_date: text.target.value
                })
              }}
              />
            <TextField className="form-field" label="Repeal Date" type="date" style={{visibility: 'hidden'}}/>
          </div>
          <div className="add-form-row">
            <TextArea 
              label="General Impact"
              onChange={(text) => {
                setValues({
                  ...values,
                  general_impact: text.target.value
                })
              }}
              />
            <TextArea 
              className="ml-2" 
              label="Regulatory Digest"
              onChange={(text) => {
                setValues({
                  ...values,
                  regulatory_digest: text.target.value
                })
              }}
              />
          </div>
  
          <CInputGroup className="mb-3">
            <div style={{ width: "49.5%" }}></div>
          </CInputGroup>
          <div className="submit-button-container">
            <CButton
              style={{
                backgroundColor: "#ECAA00",
                outline: "none",
                border: "none",
                color: "black",
                fontWeight: "bold",
                display: "flex",
                marginLeft: "auto",
                padding: "10px 40px",
              }}
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Submit
            </CButton>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
  );
};

export default AddRegulationForm;

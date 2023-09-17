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
import { useAddRegulationMutation, useUpdateRegulationMutation, useFetchGovernanceBodyQuery } from 'src/api'
import NotificationMessage from "src/components/NotificationMessage"
import { useLocation } from "react-router-dom";


const AddRegulationForm = () => {
  const location = useLocation();

  const state = location.state;

  const [selectedType, setSelectedType] = useState('')
  const [selectedAuthority, setSelectedAuthority] = useState('')
  const [message, setMessage] = useState({
    type: '',
    message: ''
  })

  const [addRegulationMutation, {data, isLoading, isSuccess, isError, error}] = useAddRegulationMutation()
  const [updateMutation, { data: updateDta, isLoading:updateLoader, isSuccess:updateSuccess, isError:updateIserror, error:updateError }] = useUpdateRegulationMutation();
  const {data: regulators} = useFetchGovernanceBodyQuery()
  const [values, setValues] = useState({
    status: 'Active'
  })

  useEffect(() => {
    if(state){
      setValues(state.details);
    }
  }, [state]);


  useEffect(()=> {
    if(isError || updateIserror){
      setMessage({
        type: 'danger',
        message: updateError?.data?.data[0]?.uiMessage
      })
    }
    if(isSuccess || updateSuccess){
      setMessage({
        type: 'success',
        message: data?.data[0]?.uiMessage || updateDta?.data[0]?.uiMessage
      })
    }
    const interval = setInterval(() => {
      setMessage({
        type: '',
        message: ''
      })
    }, 10000)
    return () => clearInterval(interval)
  },[isSuccess, isError, updateSuccess, updateIserror])

  const handleSubmit = () => {
    if(state){
      var regulationsArr = [];
      regulationsArr.push(values);
      updateMutation({ governances: regulationsArr });
      return
    }
    var regulationsArr = []
    regulationsArr.push(values)
    addRegulationMutation({governances:regulationsArr})
  }

  
  const issuedAuthorityArr = regulators?.data && regulators?.data[0]?.governanceBodies.map( el => ({
    label: el.name,
    value: el.id
  }))


  return (
    <CCol xs={12}>
     {message.type !== '' && <NotificationMessage message={message.message} type={message.type}/>}
      <CCard className="mb-4">
        <CCardBody style={{ padding: 20 }}>
          <div className="module-title-container">
            <span>Add Regulation </span>
          </div>
          <div  className="add-form-row">
            <TextField 
                label="Regulation Title" 
                onChange={(text) =>{
                setValues({
                  ...values,
                  reference: text.target.value,
                  title:text.target.value
                })
              }}
              value={values.reference}
            />
            <SelectField 
              label="Status" 
              style={{marginLeft: 10}} 
              options={status}
              onChange={(text) => {
                setValues({
                  ...values,
                  status: text.value
                })
              }}
              value={values.status}
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
                  typeId: text.target.value
                })
              }}
              value={values.typeId}
              />
            <SelectField label="Issuing Authority" 
              style={{marginLeft: 10}} options={issuedAuthorityArr} 
              onChange={(text) => {
                setSelectedAuthority(text.target.value)
                setValues({
                  ...values,
                  issuingAuthority: text.target.value
                })
              }}
              value={values.issuingAuthority}
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
                  issuingAuthority: text.target.value
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
                  issuingDate: text.target.value
                })
              }}
              value={values.issuingDate}
              />
            <TextField 
              className="ml-2 form-field" 
              label="Effective Date" 
              type="date"
              onChange={(text) => {
                setValues({
                  ...values,
                  effectiveDate: text.target.value
                })
              }}
              value={values.effectiveDate}
              />
          </div>

          <div className="add-form-row">
            
            <TextArea 
              className="ml-2" 
              label="Regulatory Digest/ Description"
              onChange={(text) => {
                setValues({
                  ...values,
                  description: text.target.value
                })
              }}
              value={values.description}
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
              disabled={isLoading || updateLoader} 
            >
              {state ? 'Update' : 'Submit'}
            </CButton>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
  );
};

export default AddRegulationForm;



const options = [
  "",
  { label: "Directive", value: "1" },
  { label: "Regulation", value: "2" },
  { label: "Law", value: "3" },
  { label: "Guidline", value: "4" },
  { label: "Other", value: "other" },
];


const status = [
  { label: "Active", value: "active" },
  { label: "Repealed", value: "repealed" },
]
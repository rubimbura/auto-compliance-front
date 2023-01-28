import {
    CButton,
    CModal,
    CModalBody,
    CModalFooter,
    CModalTitle,
  } from "@coreui/react";
  import close_icon from "../../../assets/images/close-icon.svg";
  import TextField from "src/components/textfield";
  import SelectField from "src/components/selectField";
  import { useState } from 'react'
  
  const AssignPeopleModal = ({ close, visible }) => {
  
    const [selectedOwner, setSelectedOwner] = useState('')
    const [selectedCoOwner, setSelectedCoOwner] = useState('')
  
    const names = [
        "",
        {label: 'head of compliance', value: 1},
        {label: 'head of compliance', value: 1},
        {label: 'head of compliance', value: 1},
        {label: 'head of compliance', value: 1},
        {label: 'Other', value: 'other'}
    ]
  
    const handleSelectedOwner = (e) => {
        setSelectedOwner(e.target.value)
    }  
    
    
    const handleSelectedCoOwner = (e) => {
        setSelectedCoOwner(e.target.value)
    }
  
    return (
      <>
        <CModal
          backdrop={true}
          visible={visible}
          size="lg"
          onClose={() => close()}
        >
          <div className="modal-header-container">
            <CModalTitle style={{ color: "white" }}>Assign People</CModalTitle>
            <img src={close_icon} onClick={close} style={{ cursor: "pointer" }} />
          </div>
          <CModalBody>

            <div style={{ padding: '20px', backgroundColor: '#F5F8FB', marginBottom: '30px'}}>
             <SelectField 
                label="Responsible owner" 
                options={names}
                onChange={handleSelectedOwner}
                />
             {selectedOwner === 'other' && <TextField label="Enter Owner name"/>}
             <TextField label="Email"/>
             <TextField label="Phone number"/>
            </div>

            <div style={{padding: '20px', backgroundColor: '#F5F8FB'}}>
             <SelectField 
                label="Responsible Co-owner" 
                options={names}
                onChange={handleSelectedCoOwner}

                />
             {selectedCoOwner === 'other' && <TextField label="Enter co-owner name"/>}
             <TextField label="Email"/>
             <TextField label="Phone number"/>
            </div>

          </CModalBody>
          <CModalFooter
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <CButton
              className="close-model-btn"
              style={{
                boder: "1px solid #9C9C9C",
                backgroundColor: "white",
                color: "black",
                padding: '10px 40px'
              }}
              onClick={() => close()}
            >
              Close
            </CButton>
            <CButton
              style={{
                backgroundColor: "#ECAA00",
                outline: "none",
                border: "none",
                color: "black",
                fontWeight: "bold",
                padding: "10px 40px",
              }}
              // onClick={handleArticalModal}
            >
              Submit
            </CButton>
          </CModalFooter>
        </CModal>
      </>
    );
  };
  
  export default AssignPeopleModal;
  
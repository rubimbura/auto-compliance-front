import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalTitle,
} from "@coreui/react";
import close_icon from "src/assets/images/close-icon.svg";
import TextField from "src/components/textfield";
import {  useState, useEffect } from "react";
import { useAddSubsidiaryMutation } from 'src/api'


const AddSubsidiaryModal = ({ close, visible, details }) => {

  const [values, setValues] = useState({});
  const [errors, setError] = useState({})
  const [errorText, setErrorText] = useState({})
  const [createMutation, {isLoading, error, isError, isSuccess}] = useAddSubsidiaryMutation()
  // const [updateMutation, { isLoading: updateLoader, isError: updateIsError, error: updateError, isSuccess: updateIsSuccess}] = useUpdateGovernanceBodyMutation()

  useEffect(() => {
    if(isSuccess){
      close()
      setValues({})
      setErrorText({})
      setError({})
    }
    if(isError){{
      setErrorText({
        ...errorText,
        response:(error.data?.data && error.data?.data[0]?.uiMessage)
      })
    }}
  },[isSuccess, isError])
  
  useEffect(() => {
    if(details){
      setValues(details)
    }
  },[details])

  const handleSubmit = (event) => {
    event.preventDefault()
    if(!values.name){
      setError({
        ...errors,
        name:true
      })
      setErrorText({
        ...errorText,
        name:'Name is required'
      })
      return
    }
    const payload = [{
      name:values.name,
      country: values.country
  
    }]
    createMutation({subsidiaries:payload})
  }

  return (
    <>
      <CModal
        backdrop={true}
        visible={visible}
        size="lg"
        onClose={() => close()}
      >
      <form onSubmit={handleSubmit}>
        <div className="modal-header-container">
          <CModalTitle style={{ color: "white" }}>{details ? 'Update a governance body' :  'Create a new governance body'}</CModalTitle>
          <img src={close_icon} onClick={close} style={{ cursor: "pointer" }} />
        </div>
        <CModalBody>
          <div style={{padding: '20px 0px'}}>
            <span style={{color: 'red'}}>{errorText.response}</span>
          </div>
            <TextField
              label="Name"
              type="text"
              value={values.name}
              onChange={(event) => {
                setValues({
                  ...values,
                  name: event.target.value,
                });
              }}
              error={errors.name}
              errorText={errorText.name}
            />
            <TextField
              label="Country"
              type="text"
              value={values.country}
              onChange={(event) => {
                setValues({
                  ...values,
                  country: event.target.value,
                });
              }}
              error={errors.name}
              errorText={errorText.name}
            />
        </CModalBody>
        <CModalFooter
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <CButton
            style={{
              backgroundColor: "#ECAA00",
              outline: "none",
              border: "none",
              color: "black",
              fontWeight: "bold",
              padding: "10px 40px",
            }}
            onClick={handleSubmit}
            disabled={isLoading}
          >
            Submit
          </CButton>
        </CModalFooter>
        </form>
      </CModal>
    </>
  );
};

export default AddSubsidiaryModal;



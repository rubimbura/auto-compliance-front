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
  import TextArea from "src/components/textArea";
  import { useCreatePermissionMutation } from 'src/api'

  
  const CreatePermissionModal = ({ close, visible }) => {

    const [values, setValues] = useState({});
    const [errors, setError] = useState({})
    const [errorText, setErrorText] = useState({})
    const [createMutation, {isLoading, error, isError, isSuccess}] = useCreatePermissionMutation()

  
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
          response:error.data?.data[0]?.uiMessage
        })
      }}
    },[isSuccess, isError])
  
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
      if(!values.description){
        setError({
            ...errors,
            description:true
          })
          setErrorText({
            ...errorText,
            description:'Description is required'
          })
          return
      }
      const payload = [{
        name:values.name,
        description:values.description
      }]
      createMutation({permissions:payload})
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
            <CModalTitle style={{ color: "white" }}>Create a new permission</CModalTitle>
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
              <TextArea
                label="Description"
                value={values.description}
                onChange={
                  (event) => {
                    setValues({
                      ...values,
                      description: event.target.value,
                    });
                  }
                }
                error={errors.description}
                errorText={errorText.description}

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
  
  export default CreatePermissionModal;
  
  
  
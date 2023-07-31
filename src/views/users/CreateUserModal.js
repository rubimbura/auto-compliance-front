import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalTitle,
} from "@coreui/react";
import close_icon from "src/assets/images/close-icon.svg";
import TextField from "src/components/textfield";
import { useEffect, useState } from "react";
import { useCreateUserMutation } from "src/api";
import SelectField from "src/components/selectField";
import { Checkbox } from "@mui/material";

const CreateUserModal = ({ close, visible }) => {
  const [addMutation, { data, error, isError, isSuccess }] = useCreateUserMutation();
  const [errorText, setError] = useState('')

  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    role: "",
    branch: '',
    otpEmail: false,
    otpSms: false,
    notificationEmail: false,
    notificationSms: false
  });

  useEffect(() => {
    setError('')
    setValues({
      first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    role: "",
    branch: '',
    otpEmail: false,
    otpSms: false,
    notificationEmail: false,
    notificationSms: false
    })
  },[])

  useEffect(() => {
    if(isError){
      setError(error.data?.data[0]?.uiMessage)
    }
    if(isSuccess){
      close()
    }
  },[isError, isSuccess])

  const handleAddArticle = () => {
    let payload = {
      users: [values]
    }
    addMutation(payload)
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
          <CModalTitle style={{ color: "white" }}>Add a new user</CModalTitle>
          <img src={close_icon} onClick={close} style={{ cursor: "pointer" }} />
        </div>
        <CModalBody>
          <div style={{padding: '20px 0px'}}>
            <span style={{color: 'red'}}>{errorText}</span>
          </div>
          <form>
            <TextField
              label="User name"
              type="text"
              value={values.user_name}
              onChange={(event) => {
                setValues({
                  ...values,
                  user_name: event.target.value,
                });
              }}
            />
            <TextField
              label="First name"
              type="text"
              value={values.first_name}
              onChange={(event) => {
                setValues({
                  ...values,
                  first_name: event.target.value,
                });
              }}
            />
            <TextField
              label="Last name"
              type="text"
              value={values.last_name}
              onChange={(event) => {
                setValues({
                  ...values,
                  last_name: event.target.value,
                });
              }}
            />
            <TextField
              label="Email"
              type="email"
              value={values.email}
              onChange={(event) => {
                setValues({
                  ...values,
                  email: event.target.value,
                });
              }}
            />

            <TextField
              label="Phone number"
              type="telephone"
              value={values.phone_number}
              onChange={(event) => {
                setValues({
                  ...values,
                  phone_number: event.target.value,
                });
              }}
            />

            <SelectField 
              label="Select Branch" 
              options={branchArr}
              onChange={(e) => 
                setValues({
                ...values,
                branch: e.target.value
              })}
            />

            <SelectField 
              label="Select Role" 
              options={RolesArr}
              onChange={(e) => setValues({
                ...values,
                role: e.target.value
              })}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: 20,
              }}
            >
              <div>
                <span>Otp Channel</span>
                <div style={{ display: "flex", gap: 30 }}>
                  <div>
                    <span style={{ fontSize: 12 }}>Email</span>
                    <Checkbox
                      value={values.otpEmail}
                      onChange={(e) => 
                      setValues({
                        ...values,
                        otpEmail: e.target.checked
                        })
                      }
                    />
                  </div>
                  <div>
                    <span style={{ fontSize: 12 }}>SMS</span>
                    <Checkbox
                       value={values.otpSms}
                       onChange={(e) => 
                       setValues({
                         ...values,
                          otpSms: e.target.checked
                         })
                       }
                    />
                  </div>
                </div>
              </div>
              <div>
                <span>Notification Channel</span>
                <div style={{ display: "flex", gap: 30 }}>
                  <div>
                    <span style={{ fontSize: 12 }}>Email</span>
                    <Checkbox 
                      value={values.notificationEmail}
                      onChange={(e) => 
                      setValues({
                        ...values,
                        notificationEmail: e.target.checked
                        })
                      }
                    />
                  </div>
                  <div>
                    <span style={{ fontSize: 12 }}>SMS</span>
                    <Checkbox 
                      value={values.notificationSms}
                      onChange={(e) => 
                      setValues({
                        ...values,
                        notificationSms: e.target.checked
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
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
            onClick={handleAddArticle}
            //   disabled={isLoading}
          >
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default CreateUserModal;



const branchArr = [
  "",
  {
    label: 'REMERA BRANCH',
    value: 'remera'   
  },
  {
    label: 'KIGALI BRANCH',
    value: 'kigali'   
  },
  {
    label: 'MUHANGA BRANCH',
    value: 'muhanga'   
  },
]

const RolesArr = [
  "",
  {
    label: 'ADMIN',
    value: 'admin'
  },
  {
    label: 'RETAIL',
    value: 'retails'
  },
]

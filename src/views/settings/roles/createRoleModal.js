import {
    CButton,
    CModal,
    CModalBody,
    CModalFooter,
    CModalTitle,
    CInputGroup,
    CFormText,
  } from "@coreui/react";
  import close_icon from "src/assets/images/close-icon.svg";
  import TextField from "src/components/textfield";
  import { useEffect, useState } from "react";
  import './index.scss'
  import AddIcon from '@mui/icons-material/Add';
  import RemoveIcon from '@mui/icons-material/Remove';
  import TextArea from "src/components/textArea";
  import { useCreateRoleMutation, useFetchPermissionsQuery, useFetchMenuQuery } from 'src/api'

  
  const CreateRoleModal = ({ close, visible }) => {

    const {data: availablePermissions} = useFetchPermissionsQuery()
    const {data: availableMenu} = useFetchMenuQuery()
    const [createMutation, {isLoading, error, isError, isSuccess}] = useCreateRoleMutation()
    const [values, setValues] = useState({});
    const [allPermissions, setAllPermissions] = useState()
    const [selectedPermissions, setSelectedPermissions]= useState([])
    const [errors, setError] = useState({})
    const [errorText, setErrorText] = useState({})
    const [menus, setMenus] = useState([])
    const [selectedMenus, setSelectedMenus] = useState([])

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

    useEffect(() => {
      if(availablePermissions){
        setAllPermissions(availablePermissions?.data[0]?.permissions)
      }
    },[availablePermissions])

    useEffect(() => {
      if(availableMenu){
        setMenus(availableMenu.menu)
      }
    },[availableMenu])


    const handleAddPermission = (item) => {
      const allPerm = allPermissions.filter(el => el.id !== item.id)
      setAllPermissions(allPerm)
      setSelectedPermissions([...selectedPermissions, item])
    }

    const handleRemovePermission = (item) => {
      setSelectedPermissions(() => selectedPermissions.filter(el =>  el.id !== item.id))
      setAllPermissions([...allPermissions, item])
    }

    const displayAllPermissions = allPermissions?.length > 0 && allPermissions.map((el, id) => {
      return(
        <div key={id} className="select-item-container" onClick={() => handleAddPermission (el)}>
          <span>{el.name}</span>
          <AddIcon style={{color: 'black', fontWeight: 'bold'}}/>
        </div>
      )
    })

    const displaySelectedPermissions = selectedPermissions.map((el, id) => {
      return(
        <div className="select-item-container-active" key={id} onClick={() => handleRemovePermission(el)}>
          <span>{el.name}</span>
          <RemoveIcon style={{color: 'white', fontWeight: 'bold'}}/>
        </div>
      )
    })


    const handleAddMenu = (item) => {
      const allMenu = menus.filter(el => el.id !== item.id)
      setMenus(allMenu)
      setSelectedMenus([...selectedMenus, item])
    }

    const handleRemoveMenu = (item) => {
      setSelectedMenus(() => selectedMenus.filter(el => el.id !== item.id))
      setMenus([...menus, item])
    }

    const displayAllMenus = menus?.length > 0 && menus.map((el, id) => {
      return(
        <div key={id} className="select-item-container" onClick={() => handleAddMenu (el)}>
          <span>{el.label}</span>
          <AddIcon style={{color: 'black', fontWeight: 'bold'}}/>
        </div>
      )
    })

    
    const displaySelectedMenus = selectedMenus.map((el, id) => {
      return(
        <div className="select-item-container-active" key={id} onClick={() => handleRemoveMenu(el)}>
          <span>{el.label}</span>
          <RemoveIcon style={{color: 'white', fontWeight: 'bold'}}/>
        </div>
      )
    })

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
      setErrorText({})
      setError({})
      const selectedPermIds = selectedPermissions.map(el => {
        return {permission_id: el.id}
      })
      const selectedMenuIds = selectedMenus.map( el => {
        return {menu_id: el.id}
      })
      const payload = [{
        name: values.name,
        description: values.description,
        permissions: selectedPermIds,
        menu:selectedMenuIds
      }]

      createMutation({roles: payload})
    }
  
    return (
      <>
        <CModal
          backdrop={true}
          visible={visible}
          size="xl"
          onClose={() => close()}
        >
        <form onSubmit={handleSubmit}>
          <div className="modal-header-container">
            <CModalTitle style={{ color: "white" }}>Create a new role</CModalTitle>
            <img src={close_icon} onClick={close} style={{ cursor: "pointer" }} />
          </div>
          <CModalBody style={{padding: '0px 30px'}}>
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
              />
              <div className="assign-permission-container">
                <CInputGroup>
                    <CFormText className="assign-text">Assign permissions</CFormText>
                </CInputGroup>
              </div>
              <div className="create-role-permision-container">
                <div className="first-row item-container"> 
                    {displayAllPermissions}
                </div>
                <div className="second-row item-container"> 
                  {displaySelectedPermissions}
                </div>
              </div>
              <div className="assign-permission-container">
                <CInputGroup>
                    <CFormText className="assign-text">Assign menu</CFormText>
                </CInputGroup>
              </div>
              <div className="create-role-permision-container">
                <div className="first-row item-container"> 
                   {displayAllMenus}
                </div>
                <div className="second-row item-container"> 
                  {displaySelectedMenus}
                </div>
              </div>
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
  
  export default CreateRoleModal;
  
  
  
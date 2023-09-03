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
  import { CheckBox } from "@mui/icons-material";
  import FormControlLabel from '@mui/material/FormControlLabel';
  import Checkbox from '@mui/material/Checkbox';
  
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
    const [menuItems, setMenuItems] = useState([])


  
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
        
        const updatedMenu = availableMenu.menu.map(item => ({
          ...item,
          children: item.children.map(child => ({
            ...child,
            isChecked: false,
          })),
        }))

        setMenuItems(updatedMenu)
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

    const handleCheckboxChange = (parentId, childId) => {
      const updatedMenuItems = [...menuItems]
      const parentItem = updatedMenuItems[parentId]
      const childItem = parentItem.children[childId]
      childItem.isChecked = !childItem.isChecked
      setMenuItems(updatedMenuItems)

      const allChildrenChecked = parentItem.children.every(child => child.isChecked)
      if(allChildrenChecked){
        const updatedItem = menuItems.filter((el, id) => id !== parentId )
        setMenuItems(updatedItem)
      }
      const existingParentIndex = selectedMenus.findIndex(item => item.id === parentItem.id)
      if (existingParentIndex !== -1) {
        const updatedSelectedMenus = [...selectedMenus];
        const existingParent = updatedSelectedMenus[existingParentIndex];
        existingParent.children = parentItem.children.filter(child => child.isChecked);
        updatedSelectedMenus[existingParentIndex] = existingParent;
        setSelectedMenus(updatedSelectedMenus)
    } else {
        const selectedChildren = parentItem.children.filter(child => child.isChecked)
        const updatedParentItem = {
          ...parentItem,
          children:selectedChildren
        }
        setSelectedMenus([...selectedMenus, updatedParentItem])
      }
    }

    const handleRemoveCheckBox = (parentId, childId) => {
      const updatedItem = [...selectedMenus]
      const parentItem = updatedItem[parentId]
      const childItem = parentItem.children[childId]
      childItem.isChecked = !childItem.isChecked
      setSelectedMenus(updatedItem)
      const allChildUnchecked = parentItem.children.every( child => !child.isChecked)
      if(allChildUnchecked){
        const updatedItem = selectedMenus.filter((el,id) => id !== parentId)
        setSelectedMenus(updatedItem)
        setMenuItems([...menuItems, parentItem])
      }
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
      const allMenu = menuItems.filter(el => el.id !== item.id)
      setMenuItems(allMenu)
      setSelectedMenus([...selectedMenus, item])
    }

    const handleRemoveMenu = (item) => {
      setSelectedMenus(() => selectedMenus.filter(el => el.id !== item.id))
      setMenuItems([...menuItems, item])
    }

    const displayAllMenus = menuItems?.length > 0 && menuItems.map((el, id) => {
      return(
        <div key={id} className="diplay-menu-item-container">
          <div onClick={() => handleAddMenu(el)}>
          <span>{el.label}</span>
            <AddIcon style={{color: 'black', fontWeight: 'bold'}}/>
          </div>
          {el.children?.length > 0 && el.children.map((val, idx) => {
            return(
              <FormControlLabel 
                control={<Checkbox 
                checked={val.isChecked} 
                onChange={() => handleCheckboxChange(id, idx)}/>} 
                label={val.label} 
              />
            )
          })}
        </div>
      )
    })

    
    const displaySelectedMenus = selectedMenus.map((el, id) => {
      return(
        <div className="diplay-menu-item-container-active" key={id}>
          <div onClick={() => handleRemoveMenu(el)}>
            <span>{el.label}</span>
            <RemoveIcon style={{color: 'white', fontWeight: 'bold'}}/>
          </div>
          {el.children?.length > 0 && el.children.map((val, idx) => {
            return(
              <FormControlLabel 
                control={<Checkbox 
                style={{color: 'white'}} 
                checked={val.isChecked} 
                onChange={() => handleRemoveCheckBox(id, idx)}/>} 
                label={val.label}
                
              />
            )
          })}
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
      const selectedPermIds = selectedPermissions.map(el => ({permission_id: el.id}))
      const updateMenu = selectedMenus.map( el=> ({
        ...el,
        children: el.children?.filter(val => val.isChecked) || []
      }))

      const payload = [{
        name: values.name,
        description: values.description,
        permissions: selectedPermIds,
        menu:updateMenu
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
                    <CFormText className="assign-text">Available menu</CFormText>
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
  
  
  
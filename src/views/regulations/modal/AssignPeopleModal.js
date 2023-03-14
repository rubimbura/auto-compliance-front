import {
    CButton,
    CModal,
    CModalBody,
    CModalFooter,
    CModalTitle,
  } from "@coreui/react";
  import close_icon from "../../../assets/images/close-icon.svg";
  import TextField from "src/components/textfield";
  import { useState, useEffect } from 'react'
import { useSearchUsersMutation, useCreateUserPerArticleMutation } from "src/api";
import close_icon_black from "../../../assets/images/close-icon-black.jpeg";
import NotificationMessage from "src/components/NotificationMessage";


  
  const AssignPeopleModal = ({ close, visible, article }) => {
  
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [skip, setSkip] = useState(true)
    const [values, setValues]= useState('')
    const [message, setMessage] = useState({
      show: false,
      message: '',
      type: ''
    })

    const [searchMutation, { data: searchedUsers }] = useSearchUsersMutation(searchTerm, {skip})
    const [createUserMutation, { data, isLoading, isSuccess, isError, error }] =
    useCreateUserPerArticleMutation()



    useEffect(() => {
      if(visible){
        setValues(article)
      }
    },[visible])

    useEffect(() => {
      if(isSuccess){
        setMessage({
          show: true,
          message: data?.data[0]?.uiMessage,
          type: 'success'
        })
      }

      if(isError){
        setMessage({
          show: true,
          message: error?.data?.data[0]?.uiMessage,
          type: 'danger'
        })
      }

    },[isSuccess, isError])


    const handleSeacrhClick = (person) => {
      setSearchResults([...searchResults, person]);
      setSearchTerm("");
    }
  
    const handleRemoveUser = (user) => {
      const updatedUser = searchResults.filter( el => el.id !== user.id)
      setSearchResults(updatedUser)
    }


    const handleSearchUser = (event) => {
      searchMutation(event.target.value)
      setSearchTerm(event.target.value)
    }



    const handleAssignUser = () => {
      const userIds = searchResults.map(el => {
        return {user_id: el.id, article_id: values.id}
      })
      const mergedArray = [...userIds]
      let payload = {
        articleUsers: mergedArray,
      }
      createUserMutation(payload)
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
          {message.show && <NotificationMessage type={message.type} message={message.message}/>}
          <CModalBody>

          <div className="add-article-asign-user-container">
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div style={{ width: "100%" }}>
                <TextField
                  label="Assign People"
                  placeholder="Search by username, firstname, lastname, email, or phonenumber"
                  value={searchTerm}
                  onChange={handleSearchUser}
                  isSearch={true}
                />
              </div>
            </div>

            {searchTerm !== "" && (
              <div className="search-container">
                {searchedUsers && searchedUsers.data[0] && searchedUsers.data[0].users?.map((el, id) => {
                  return (
                    <div className="item" key={el.id}>
                      <span onClick={() => handleSeacrhClick(el)}>
                        {el.username}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

            {searchResults.length > 0 && (
              <div className="searched-users-container">
                {searchResults.map((el) => (
                  <div className="user-ctn" key={el.id}>
                    <span>{`${el.first_name} ${el.last_name}`}</span>
                    <img src={close_icon_black} onClick={() => handleRemoveUser(el)}/>
                  </div>
                ))}
              </div>
            )}
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
              onClick={handleAssignUser}
              disabled={isLoading}
            >
              Submit
            </CButton>
          </CModalFooter>
        </CModal>
      </>
    );
  };
  
  export default AssignPeopleModal;
  
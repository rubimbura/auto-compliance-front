import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalTitle,
} from "@coreui/react";
import close_icon from "../../../assets/images/close-icon.svg";
import close_icon_black from "../../../assets/images/close-icon-black.jpeg";
import TextField from "src/components/textfield";
import SelectField from "src/components/selectField";
import { useState, useEffect } from "react";
import { useAddRegulationArticleMutation, useSearchUsersMutation } from "src/api";
import "./SearchBar.scss";
import NotificationMessage from "src/components/NotificationMessage";

const AddArticleModal = ({ close, visible, regulation_id }) => {
  const [values, setValues] = useState({
    article_no: "",
    action_required: "",
    assessment_frequency: "",
    action_frequency: "",
    impact: "",
    regulation_id: regulation_id,
    article_description: "",
  })

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [message, setMessage] = useState({
    type: '',
    message: '',
    show: false
  })

  const [addArticleMutation, { data, isLoading, isSuccess, isError, error }] =
    useAddRegulationArticleMutation()


  const [searchMutation, { data: searchedUsers }] = useSearchUsersMutation();


  const handleAddArticle = () => {
    const newIds = searchResults.map(el => {
      return {user_id: el.id}
    })
    let payload = {
      ...values,
      assigned_to: newIds
    }
    var articles = [];
    articles.push(payload);

    let sample = {
      articles: articles,
    };
    addArticleMutation(sample)
  }

  useEffect(() => {
    if(visible){
      setMessage('')
      setValues('')
    }
  },[visible])
  
  useEffect(() => {
    if(isSuccess){
      setMessage({
        type: 'ssuccess',
        message: data?.data[0]?.uiMessage,
        show: true
      })
    }
    if(isError){
      setMessage({
        type: 'danger',
        message: error?.data?.data[0]?.uiMessage,
        show: true
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


  return (
    <>
      <CModal
        backdrop={true}
        visible={visible}
        size="lg"
        onClose={() => close()}
      >
        <div className="modal-header-container">
          <CModalTitle style={{ color: "white" }}>Add an article</CModalTitle>
          <img src={close_icon} onClick={close} style={{ cursor: "pointer" }} />
        </div>
        <CModalBody>
          {message.show && <NotificationMessage type={message.type} message={message.message}/>}
          <TextField
            label="Article Number"
            value={values.article_no}
            onChange={(event) => {
              setValues({
                ...values,
                article_no: event.target.value,
              });
            }}
          />
          <TextField
            label="Article descrption"
            value={values.article_description}
            onChange={(event) => {
              setValues({
                ...values,
                article_description: event.target.value,
              });
            }}
          />
          <TextField
            label="Action Required"
            value={values.action_required}
            onChange={(event) => {
              setValues({
                ...values,
                action_required: event.target.value,
              });
            }}
          />

          <SelectField
            label="Self assessment frequency"
            options={assessmentFrequency}
            onChange={(event) => {
              setValues({
                ...values,
                assessment_frequency: event.target.value,
              });
            }}
          />
          <SelectField
            label="Action frequency"
            options={assessmentFrequency}
            onChange={(event) => {
              setValues({
                ...values,
                action_frequency: event.target.value,
              });
            }}
          />
          <TextField
            label="Impact"
            value={values.impact}
            onChange={(event) => {
              setValues({
                ...values,
                impact: event.target.value,
              });
            }}
          />

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
              {/* <div>search</div> */}
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
              padding: "10px 40px",
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
            onClick={handleAddArticle}
            disabled={isLoading}
          >
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default AddArticleModal;

const assessmentFrequency = [
  "",
  { label: "Daily", value: 1 },
  { label: "Weekly", value: 1 },
  { label: "Monthly", value: 1 },
  { label: "Quartely", value: 1 },
  { label: "Anual", value: 1 },
  // { label: "Other show date field", value: 1 },
];

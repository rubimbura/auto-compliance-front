import { CCard, CCardBody, CCol, CButton,CHeaderDivider } from "@coreui/react";
import { Row, Col } from "react-bootstrap";
import TextField from "src/components/textfield";
import TextArea from "src/components/textArea";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AddArticleModal from "./modal/AddArticleModal";
import Accordion from "src/components/accordion";
import { useUpdateRegulationMutation, useFetchRegulationArticlesQuery } from "src/api";
import ReactSelect from "src/components/selectField/ReactSelect";
import NotificationMessage from "src/components/NotificationMessage";



const ViewRegulationForm = () => {
  const location = useLocation();


  const { details } = location.state;
  const [articleModal, setArticalModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [selectedAuthority, setSelectedAuthority] = useState("");
  const [updateMutation, { data, isloading, isSuccess, isError }] =
    useUpdateRegulationMutation();
  const {data: articleData, isLoading} = useFetchRegulationArticlesQuery(details.id)
  const [message, setMessage] = useState({
    type: "",
    message: "",
  });

  const [values, setValues] = useState({
    regulation_ref: "",
    effective_date: "",
    issuing_authority: "",
    issuing_date: "",
    repeal_date: "",
    general_impact: "",
    regulatory_digest: "",
    status: "",
  });

  useEffect(() => {
    setValues(details);
  }, [details]);

  useEffect(() => {
    if (isSuccess) {
      setMessage({
        type: "success",
        message: data?.data[0]?.uiMessage,
      });
    }
    if(isError){
      setMessage({
        type: 'danger',
        message: ''
      })
    }
    if(isSuccess | isError){
      const interval = setInterval(() => {
        setMessage({
          type: '',
          message: ''
        })
      }, 10000)
      return () => clearInterval(interval)
    }
  }, [isSuccess, isError])

  const handleTypeChange = (e) => {
    setSelectedType(e.label);
    setValues({
      ...values,
      type: e.label
    })
  };

  const handleAuthorityChange = (e) => {
    setSelectedAuthority(e.label);
    setValues({
      ...values,
      issuing_authority: e.label
    })
  };

  const handleArticalModal = () => {
    setArticalModal(!articleModal);
  };

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleUpdate = () => {
    var regulationsArr = [];
    regulationsArr.push(values);
    updateMutation({ regulations: regulationsArr });
  };

  var displayArticles = []
  if(articleData?.data[0]?.articles){
    displayArticles = articleData?.data[0]?.articles.map(article=>{
      return(
        <Accordion article={article} details={details}/>
      )
    })
  }

  return (
    <>
    <CHeaderDivider /> 
    <CCol xs={12}>
      <div className="edit-link-container">
        <span onClick={handleEditMode}>{editMode ? "View Mode" : "Edit"}</span>
      </div>
      {message.type !== "" && (
        <NotificationMessage message={message.message} type={message.type} />
      )}
      <CCard className="mb-4">
        <CCardBody style={{ padding: '0px 30px' }}>
          {!editMode ? (
            <>
              <div className="module-title-container">
                <span>{details.title} </span>
              </div>
              <Row className="view-item-row">
                <Col className="item-column">
                  <span className="title">Regulation Reference</span>
                  <span className="value">{details.regulation_ref}</span>
                </Col>
                <Col className="item-column">
                  <span className="title">Issuing authority</span>
                  <span className="value">{details.issuing_authority}</span>
                </Col>
              </Row>

              <Row className="view-item-row">
                <Col className="item-column">
                  <span className="title">Issued date</span>
                  <span className="value">{details.issuing_date || "-"}</span>
                </Col>
                <Col className="item-column">
                  <span className="title">Effective date</span>
                  <span className="value">{details.effective_date || "-"}</span>
                </Col>
              </Row>

              <Row className="view-item-row">
                <Col className="item-column">
                  <span className="title">Repealed date</span>
                  <span className="value">{details.repeal_date}</span>
                </Col>
                <Col className="item-column">
                  <span className="title">General Impact</span>
                  <span className="value">{details.general_impact}</span>
                </Col>
              </Row>

              <Row className="view-item-row">
                <Col className="item-column">
                  <span className="title">Regulatory Digest</span>
                  <span className="value">{details.regulatory_digest}</span>
                </Col>
                <Col className="item-column">
                  <span className="title">Status</span>
                  <span className="value">{details.status}</span>
                </Col>
              </Row>
            </>
          ) : (
            <>
              <div
                style={{ width: "100%", display: "flex", alignItems: "center" }}
              >
                <div style={{ width: "50%" }}>
                  <TextField
                    label="Regulation Title"
                    value={values.regulation_ref}
                    onChange={(text) => {
                      setValues({
                        ...values,
                        regulation_ref: text.target.value,
                      });
                    }}
                  />
                </div>
                <div style={{ width: "50%" }}>
                  <ReactSelect
                    label="Status"
                    placeholder="Select Status"
                    value={{ label: values.status, value: "1234" }}
                    options={status}
                    onChange={(e) => {
                      setValues({
                        ...values,
                        status: e.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="add-form-row">
                <div style={{width: '50%'}}>
                  <ReactSelect
                    label="Select Type"
                    options={options}
                    onChange={handleTypeChange}
                    value={{label:values.type , value: '123'}}
                  />
                </div>
                <div style={{width: '50%'}}>
                  <ReactSelect
                    label="Issuing Authority"
                    style={{ marginLeft: 10 }}
                    options={issuedAuthorityArr}
                    onChange={handleAuthorityChange}
                    value={{label: values.issuing_authority, value: '123'}}
                  />
                </div>
              </div>

              {selectedType?.toLocaleLowerCase() === "other" || selectedAuthority?.toLocaleLowerCase() === "other" ? (
                <div
                  className="add-form-row"
                  style={{ backgroundColor: "#F5F8FB", padding: 20 }}
                >
                  {selectedType?.toLocaleLowerCase() === "other" && (
                    <TextField
                      label="Enter other type"
                      style={{ width: "50%" }}
                      onChange={(e) => {
                        setValues({
                          ...values,
                          type: e.target.value
                        })
                      } }
                    />
                  )}
                  {selectedAuthority?.toLocaleLowerCase() === "other" && (
                    <TextField
                      className="ml-2 form-field"
                      label="Enter Issuing authority"
                      style={{
                        width: "49.2%",
                        display: "flex",
                        marginLeft: "auto",
                      }}
                      onChange={(e) => {
                        setValues({
                          ...values,
                          issuing_authority: e.target.value
                        })
                      }}
                    />
                  )}
                </div>
              ) : null}

              <div className="add-form-row">
                <TextField
                  label="Issuing Date"
                  type="date"
                  value={values.issuing_date}
                  onChange={(text) => {
                    setValues({
                      ...values,
                      issuing_date: text.target.value,
                    });
                  }}
                />
                <TextField
                  className="ml-2 form-field"
                  label="Effective Date"
                  type="date"
                  value={values.effective_date}
                  onChange={(text) => {
                    setValues({
                      ...values,
                      effective_date: text.target.value,
                    });
                  }}
                />
              </div>
              <div className="add-form-row">
                <TextField
                  className="form-field"
                  label="Repeal Date"
                  type="date"
                  value={values.repeal_date}
                  onChange={(text) => {
                    setValues({
                      ...values,
                      repeal_date: text.target.value,
                    });
                  }}
                />
                <TextField
                  className="form-field"
                  label="Repeal Date"
                  type="date"
                  style={{ visibility: "hidden" }}
                />
              </div>
              <div className="add-form-row">
                <TextArea
                  label="General Impact"
                  value={values.general_impact}
                  onChange={(text) => {
                    setValues({
                      general_impact: text.target.value,
                    });
                  }}
                />
                <TextArea
                  className="ml-2"
                  label="Regulatory Digest"
                  value={values.regulatory_digest}
                  onChange={(text) => {
                    setValues({
                      regulatory_digest: text.target.value,
                    });
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                  paddingBottom: 50,
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
                  onClick={handleUpdate}
                  disabled={isloading}
                >
                  Update
                </CButton>
              </div>
            </>
          )}

          <div className="add-articles-container">
            <div className="articles-container">
              <span> Articles </span>
            </div>
            <CButton
              style={{
                backgroundColor: "#ECAA00",
                outline: "none",
                border: "none",
                color: "black",
                fontWeight: "bold",
                padding: "10px 40px",
              }}
              onClick={handleArticalModal}
            >
              Add Article
            </CButton>
          </div>
          <div>
            {displayArticles}
          </div>
        </CCardBody>
      </CCard>
      <AddArticleModal
        visible={articleModal}
        close={() => setArticalModal(false)}
        regulation_id={details.id}
      />
    </CCol>
    </>
  );
};

export default ViewRegulationForm;

const options = [
  { label: "Directive", value: "some" },
  { label: "Regulation", value: "2" },
  { label: "Law", value: "3" },
  { label: "Guidline", value: "3" },
  { label: "Other", value: "other" },
];

const issuedAuthorityArr = [
  { label: "BNR", value: "bnr" },
  { label: "Ministerial Order", value: "minesterial order" },
  { label: "Rwanda Revenue Authority", value: "rra" },
  { label: "Other", value: "other" },
];

const status = [
  {
    label: "Active",
    value: "Active",
  },
  {
    label: "Repealed",
    value: "Repealed",
  },
];

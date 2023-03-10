import { CCard, CCardBody, CCol, CButton } from "@coreui/react";
import { Row, Col } from "react-bootstrap";
import TextField from "src/components/textfield";
import SelectField from "src/components/selectField";
import TextArea from "src/components/textArea";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AddArticleModal from "./modal/AddArticleModal";
import Accordion from "src/components/accordion";
import { useUpdateRegulationMutation } from "src/api";
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
    const interval = setInterval(() => {
      setMessage({
        type: '',
        message: ''
      })
    }, 10000)
    return () => clearInterval(interval)
  }, [isSuccess, isError])

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleAuthorityChange = (e) => {
    setSelectedAuthority(e.target.value);
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

  return (
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
                {/* <div className="status-container">
                  <div className="icon"></div>
                  <span>Edit</span>
                </div> */}
              </div>
              <Row className="view-item-row">
                <Col className="item-column">
                  <span className="title">Regulation type</span>
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
              {/* <div className="add-form-row">
                <TextField
                  label="Regulation Title"
                  value={values.regulation_ref}
                  onChange={(text) => {
                    setValues({
                      ...values,
                      regulation_ref: text.target.value
                    })
                  }}
                />
                <SelectField
                  label="Status"
                  style={{ marginLeft: 10 }}
                  options={status}
                />
              </div> */}
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
                <SelectField
                  label="Select Type"
                  options={options}
                  onChange={handleTypeChange}
                />
                <SelectField
                  label="Issuing Authority"
                  style={{ marginLeft: 10 }}
                  options={issuedAuthorityArr}
                  onChange={handleAuthorityChange}
                  value="any v alue"
                />
              </div>

              {selectedType === "other" || selectedAuthority === "other" ? (
                <div
                  className="add-form-row"
                  style={{ backgroundColor: "#F5F8FB", padding: 20 }}
                >
                  {selectedType === "other" && (
                    <TextField
                      label="Enter other type"
                      style={{ width: "50%" }}
                    />
                  )}
                  {selectedAuthority === "other" && (
                    <TextField
                      className="ml-2 form-field"
                      label="Enter Issuing authority"
                      style={{
                        width: "49.2%",
                        display: "flex",
                        marginLeft: "auto",
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
            <Accordion />
            <Accordion />
          </div>
        </CCardBody>
      </CCard>
      <AddArticleModal
        visible={articleModal}
        close={() => setArticalModal(false)}
      />
    </CCol>
  );
};

export default ViewRegulationForm;

const options = [
  "",
  { label: "Directive", value: "some" },
  { label: "Regulation", value: "2" },
  { label: "Law", value: "3" },
  { label: "Guidline", value: "3" },
  { label: "Other", value: "other" },
];

const issuedAuthorityArr = [
  "",
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

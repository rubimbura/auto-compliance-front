import { CCard, CCardBody, CCol, CInputGroup, CButton } from "@coreui/react";
import TextField from "src/components/textfield";
import DataTable from "src/components/dataTable";
import { articleHeaders } from "src/components/dataTable/TableHeaders";
import AssignPeopleModal from "./modal/AssignPeopleModal";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";

const ViewRegulationArticle = () => {
  const [showModal, setModal] = useState(false);

  const data = [
    {
      title: "Head of Compliance",
      type: "Directive",
      date: "12-02-2",
      issuedAuthority: "BNR",
      actions: "none",
      status: "Active",
      complied: "Yes",
    },
    {
      title: "Head of ICT",
      status: "Inactive",
      type: "Regulation",
      date: "12-02-2",
      issuedAuthority: "BNR",
      actions: "none",
      complied: "Yes",
    },
    {
      title: "Head of Business",
      status: "Active",
      type: "Law",
      date: "12-02-2",
      complied: "No",
      issuedAuthority: "BNR",
    },
  ];

  const details = {
    title: "compliance",
  };

  const handlePeopleModal = () => {
    setModal(true);
  };

  return (
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardBody style={{ padding: 20 }}>
          <>
            <div className="module-title-container">
              <span>{details.title} </span>
            </div>
            <Row className="view-item-row">
              <Col className="item-column">
                <span className="title">Regulation type</span>
                <span className="value">{details.title}</span>
              </Col>
              <Col className="item-column">
                <span className="title">Issuing authority</span>
                <span className="value">{details.title}</span>
              </Col>
            </Row>

            <Row className="view-item-row">
              <Col className="item-column">
                <span className="title">Issued date</span>
                <span className="value">{details.title}</span>
              </Col>
              <Col className="item-column">
                <span className="title">Effective date</span>
                <span className="value">{details.title}</span>
              </Col>
            </Row>

            <Row className="view-item-row">
              <Col className="item-column">
                <span className="title">Repealed date</span>
                <span className="value">{details.title}</span>
              </Col>
              <Col className="item-column">
                <span className="title">General Impact</span>
                <span className="value">{details.title}</span>
              </Col>
            </Row>

            <Row className="view-item-row">
              <Col className="item-column">
                <span className="title">Regulatory Digest</span>
                <span className="value">{details.title}</span>
              </Col>
            </Row>
          </>
          <div className="add-articles-container">
            <div className="articles-container">
              <span> Assigned People </span>
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
              onClick={handlePeopleModal}
            >
              Assign People
            </CButton>
          </div>
          <DataTable data={data} headers={articleHeaders} />
        </CCardBody>
      </CCard>
      <AssignPeopleModal visible={showModal} close={() => setModal(false)} />
    </CCol>
  );
};

export default ViewRegulationArticle;

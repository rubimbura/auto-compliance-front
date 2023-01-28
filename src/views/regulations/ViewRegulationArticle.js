import { CCard, CCardBody, CCol, CButton } from "@coreui/react";
import DataTable from "src/components/dataTable";
import { articleHeaders } from "src/components/dataTable/TableHeaders";
import AssignPeopleModal from "./modal/AssignPeopleModal";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useLocation } from 'react-router-dom'

const ViewRegulationArticle = () => {
  const [showModal, setModal] = useState(false);
  const location = useLocation()
  const { article, details: sample} = location.state


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


  const handlePeopleModal = () => {
    setModal(true);
  };


  return (
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardBody style={{ padding: '20px 30px' }}>
          <>
            <Row className="view-item-row">
              <Col className="item-column">
                <span className="title">Article Number</span>
                <span className="value">{article.article_no}</span>
              </Col>
              <Col className="item-column">
                <span className="title">Article Description</span>
                <span className="value">{article.description || '-'}</span>
              </Col>
            </Row>

            <Row className="view-item-row">
              <Col className="item-column">
                <span className="title">Action required</span>
                <span className="value">{article.action_required}</span>
              </Col>
              <Col className="item-column">
                <span className="title">Impact</span>
                <span className="value">{article.impact || '-'}</span>
              </Col>
            </Row>

            <Row className="view-item-row">
              <Col className="item-column">
                <span className="title">Self Assessment Frequency</span>
                <span className="value">{article.nu || '-'}</span>
              </Col>
              <Col className="item-column">
                <span className="title">Action Frequency</span>
                <span className="value">{article.action_frequency}</span>
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
          <DataTable data={article?.assigned_to} headers={articleHeaders} />
        </CCardBody>
      </CCard>
      <AssignPeopleModal visible={showModal} close={() => setModal(false)} />
    </CCol>
  );
};

export default ViewRegulationArticle;

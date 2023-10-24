import { CCard, CCardBody, CCol, CButton,CHeaderDivider } from "@coreui/react";
import { Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import AddArticleModal from "./modal/AddArticleModal";
import Accordion from "src/components/accordion";
import { useFetchRegulationArticlesQuery } from "src/api";



const ViewRegulationForm = () => {
  const location = useLocation();

  const { details } = location.state;
  const [articleModal, setArticalModal] = useState(false);
  const {data: articleData, isLoading} = useFetchRegulationArticlesQuery(details.id)
 
  const handleArticalModal = () => {
    setArticalModal(!articleModal);
  };

  var displayArticles = []
  if(articleData?.data[0]?.obligations){
    displayArticles = articleData?.data[0]?.obligations.map(article=>{
      return(
        <Accordion article={article} details={details}/>
      )
    })
  }

  return (
    <>
    <CHeaderDivider /> 
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardBody style={{ padding: '0px 30px' }}>
              <div className="module-title-container">
                <span>{details.title} </span>
              </div>
              <Row className="view-item-row">
                <Col className="item-column">
                  <span className="title">Reference</span>
                  <span className="value">{details.reference}</span>
                </Col>
                <Col className="item-column">
                  <span className="title">Issuing authority</span>
                  <span className="value">{details.issuingAuthority}</span>
                </Col>
              </Row>

              <Row className="view-item-row">
                <Col className="item-column">
                  <span className="title">Issued date</span>
                  <span className="value">{details.createdTime || "-"}</span>
                </Col>
                <Col className="item-column">
                  <span className="title">Effective date</span>
                  <span className="value">{details.effectiveDate || "-"}</span>
                </Col>
              </Row>

              <Row className="view-item-row">
                <Col className="item-column">
                  <span className="title">Repealed date</span>
                  <span className="value">{details.repeal_date}</span>
                </Col>
                {/* <Col className="item-column">
                  <span className="title">General Impact</span>
                  <span className="value">{details.general_impact}</span>
                </Col> */}
                <Col className="item-column">
                  <span className="title">Description</span>
                  <span className="value">{details.description}</span>
                </Col>
              </Row>

              <Row className="view-item-row">
                <Col className="item-column">
                  <span className="title">Description</span>
                  <span className="value">{details.regulatory_digest}</span>
                </Col>
                <Col className="item-column">
                  <span className="title">Status</span>
                  <span className="value">{details.status}</span>
                </Col>
              </Row>
          <div className="add-articles-container">
            <div className="articles-container">
              <span> Obligations </span>
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
              Add Obligation
            </CButton>
          </div>
          <div style={{padding: '10px 0px 30px'}}>
            {displayArticles}
          </div>
        </CCardBody>
      </CCard>
      <br/>
      <br/>
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



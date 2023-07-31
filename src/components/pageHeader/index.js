import { CButton, CCard } from "@coreui/react";
import "./index.scss";

const PageHeaderContainer = ({hasDasborad, handleAddButton, buttonTitle}) => {
  return (
    <div className="page-header-container">
      {hasDasborad && <div className="statistics-container">
        <div className="card-container total">
          <span className="title">Total Regulations:</span>
          <span className="value">30</span>
        </div>
        <div className="card-container success">
          <span className="title ">Complied:</span>
          <span className="value">5</span>
        </div>
        <div className="card-container pending">
          <span className="title">Pending:</span>
          <span className="value">10</span>
        </div>
        <div className="card-container failed">
          <span className="title">Non Complied:</span>
          <span className="value">15</span>
        </div>
      </div>}
      <CButton
        style={{
          backgroundColor: "#ECAA00",
          outline: "none",
          border: "none",
          color: "black",
          fontWeight: "bold",
          marginLeft: 'auto'
        }}
        // onClick={() => navigate("/regulations/new-regulation")}
        onClick={handleAddButton}
      >
        {buttonTitle}
      </CButton>
    </div>
  );
};

export default PageHeaderContainer;

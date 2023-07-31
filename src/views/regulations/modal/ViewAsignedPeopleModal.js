import {
  CModal,
  CModalBody,
  CModalTitle,
} from "@coreui/react";
import close_icon from "../../../assets/images/close-icon.svg";


const ViewAssignedPeopleModal = ({ close, visible, data }) => {
  return (
    <CModal
        backdrop={true}
        visible={visible}
        size="lg"
        onClose={() => close()} 
    >
      <div className="modal-header-container">
        <CModalTitle style={{ color: "white" }}>{data.last_name} {data.first_name}</CModalTitle>
        <img src={close_icon} onClick={close} style={{ cursor: "pointer" }} />
      </div>
      <CModalBody>
      <div style={{ display: 'flex', minWidth: '70%', padding: 20, borderBottom: '1px dashed #CACCD4' }}>
          <span style={{color:'#838AA2'}}>Lastname : </span>
          <span style={{ marginLeft: 30 }}>{data.last_name}</span>
        </div>
        <div style={{ display: 'flex', minWidth: '70%', padding: 20, borderBottom: '1px dashed #CACCD4' }}>
          <span style={{color:'#838AA2'}}>Firstname : </span>
          <span style={{ marginLeft: 30 }}>{data.first_name}</span>
        </div>
        <div style={{ display: 'flex', minWidth: '70%', padding: 20, borderBottom: '1px dashed #CACCD4' }}>
          <span style={{color:'#838AA2'}}>email : </span>
          <span style={{ marginLeft: 30 }}>{data.email}</span>
        </div>
        <div style={{ display: 'flex', minWidth: '70%', padding: 20, borderBottom: '1px dashed #CACCD4' }}>
          <span style={{color:'#838AA2'}}>Phone number : </span>
          <span style={{ marginLeft: 30 }}>{data.phone_number}</span>
        </div>
        <div style={{ display: 'flex', minWidth: '70%', padding: 20, borderBottom: '1px dashed #CACCD4' }}>
          <span style={{color:'#838AA2'}}>Branch : </span>
          <span style={{ marginLeft: 30 }}>{data.branch}</span>
        </div>
      </CModalBody>
    </CModal>
  );
};

export default ViewAssignedPeopleModal;

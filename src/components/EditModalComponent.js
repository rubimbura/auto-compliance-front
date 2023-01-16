import { CButton, CModal, CModalBody, CInputGroup, CModalTitle, CFormInput, } from '@coreui/react'
import close_icon from '../assets/images/close-icon.svg'


const EditModalComponent = ({ visible, close, title, editData, setEditData }) => {
  

  return (
    <>
      <CModal backdrop={true} visible={visible} size="lg" onClose={() => close()}>
        <div className="modal-header-container">
          <CModalTitle style={{ color: 'white' }}>{title}</CModalTitle>
          <img src={close_icon} onClick={close} style={{ cursor: 'pointer' }} />
        </div>
        <CModalBody>

        <CInputGroup className="mb-4 mt-2" size="lg">
              <CFormInput
                placeholder="Names"
                value={editData.names}
                aria-label="createdBy"
                style={{ boxShadow: 'none' }}
                aria-describedby="basic-addon1"
                onChange={(e)=>{
                    setEditData({
                      ...editData,
                      names: e.target.value
                  })
                }}
              />
        </CInputGroup>
        <CInputGroup className="mb-4 mt-2" size="lg">
            <CFormInput
                placeholder="Email"
                value={editData.email}
                aria-label="createdBy"
                style={{ boxShadow: 'none' }}
                aria-describedby="basic-addon1"
                onChange={(e)=>{
                    setEditData({
                      ...editData,
                      email: e.target.value
                  })
                }}
              />
        </CInputGroup>
        <CInputGroup className="mb-4 mt-2" size="lg">
            <CFormInput
                placeholder="Phone number"
                value={editData.telephone}
                aria-label="createdBy"
                style={{ boxShadow: 'none' }}
                aria-describedby="basic-addon1"
                onChange={(e)=>{
                    setEditData({
                      ...editData,
                      telephone: e.target.value
                  })
                }}
              />
        </CInputGroup>

        <CInputGroup className="mb-4 mt-2" size="lg">
            <CFormInput
                placeholder="national Id"
                value={editData.documentId}
                aria-label="createdBy"
                style={{ boxShadow: 'none' }}
                aria-describedby="basic-addon1"
                onChange={(e)=>{
                    setEditData({
                      ...editData,
                      documentId: e.target.value
                  })
                }}
              />
        </CInputGroup>
        <CInputGroup className="mb-4 mt-2" size="lg">
            <CFormInput
                placeholder="Document type name"
                value={editData.documentTypeName }
                aria-label="createdBy"
                style={{ boxShadow: 'none' }}
                aria-describedby="basic-addon1"
                onChange={(e)=>{
                    setEditData({
                      ...editData,
                      documentTypeName: e.target.value
                  })
                }}
              />
        </CInputGroup>

        <CInputGroup className="mb-4 mt-2" size="lg">
            <CFormInput
                placeholder="Profile type name"
                value={editData.profileTypeName}
                aria-label="createdBy"
                style={{ boxShadow: 'none' }}
                aria-describedby="basic-addon1"
                onChange={(e)=>{
                    setEditData({
                      ...editData,
                      profileTypeName: e.target.value
                  })
                }}
              />
        </CInputGroup>
            
        </CModalBody>
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding:20
          }}
        >
          <CButton
            className="close-model-btn"
            style={{
              boder: '1px solid #9C9C9C',
              backgroundColor: 'white',
              color: 'black',
            }}
            onClick={() => close()}
          >
            Close
          </CButton>
        </div>
      </CModal>
    </>
  )
}

export default EditModalComponent

import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalTitle,
} from "@coreui/react";
import close_icon from "../../../assets/images/close-icon.svg";
import TextArea from "src/components/textArea";
import TextField from "src/components/textfield";
import SelectField from "src/components/selectField";

const AddArticleModal = ({ close, visible }) => {


    const names = [
        "",
        {label: 'head of compliance', value: 1},
        {label: 'head of compliance', value: 1},
        {label: 'head of compliance', value: 1},
        {label: 'head of compliance', value: 1},
    ]


    const assessmentFrequency = [
      "",
      {label: 'Daily', value: 1},
      {label: 'Weekly', value: 1},
      {label: 'Monthly', value: 1},
      {label: 'Quartely', value: 1},
      {label: 'Anual', value: 1},
      {label: 'Other show date field', value: 1},
  ]

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
          <TextField label="Article Number"/>
          <TextField label="Article descrption"/>
          <TextField label="Action Required"/>
          <SelectField label="Responsible owner" options={names}/>
          <TextField label="Email"/>
          <TextField label="Phone number"/>
          
          <SelectField label="Responsible Co-owner" options={names}/>
          <SelectField label="Self assessment frequency" options={assessmentFrequency}/>
          <SelectField label="Action frequency" options={assessmentFrequency}/>
          <TextField label="Impact"/>

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
            // onClick={handleArticalModal}
          >
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default AddArticleModal;

import {
  CInputGroup,
  CFormTextarea,
} from "@coreui/react";

const TextArea = (props) => {
  return (
    <CInputGroup className={`mb-4 ${props.className}`}>
      <CFormTextarea
        id="exampleFormControlTextarea1"
        rows="3"
        size="lg"
        style={{ width: "100%", borderRadius: '8px', color: '#838AA2', fontSize: '16px'}}
        label={props.label}
        onChange={props.onChange}
        value={props.value}
      ></CFormTextarea>
    </CInputGroup>
  );
};

export default TextArea;

import {
  CFormInput,
  CInputGroup,
} from "@coreui/react";




const TextField = (props) => {
  return (
    <CInputGroup className={`mb-4 ${props.className}`} style={{display: 'flex', flexDirection: 'column', ...props.style}}>
      <CFormInput
        aria-label="Username"
        style={{ width: "100%",borderRadius: '8px', color:'#838AA2', fontSize: '16px'}}
        size="lg"
        label={props.label}
        type={props.type}
        disabled={props.disabled}
        value={props.value}
        onChange={props.onChange}
        className="form-input-textfield"
      />
    </CInputGroup>
  );
};

export default TextField;

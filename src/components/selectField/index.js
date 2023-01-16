import {
  CInputGroup,
  CFormSelect,
} from "@coreui/react"

const SelectField = (props) => {
  return (
    <CInputGroup className={`mb-4 ${props.className}`} style={{display: 'flex', flexDirection: 'column', width: '100%', ...props.style}}>
      <CFormSelect
        aria-label="Default select example"
        options={props.options}
        style={{ width: "100%", borderRadius: '8px',color: '#838AA2', fontSize: '16px' }}
        size="lg"
        label={props.label}
        disabled={props.disabled}
        value={props.value}
        onChange={props.onChange}
      />
    </CInputGroup>
  )
}

export default SelectField

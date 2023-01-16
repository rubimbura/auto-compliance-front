import React from 'react'
import Select from 'react-select'



const ReactSelect = ({onChange, value, label, placeholder, options}) => (
    <div style={{marginLeft: 6}}>
        <span style={{marginBottom: 15,paddingBottom: 20}}>{label}</span>
        <Select 
            options={options} 
            onChange={onChange} 
            value={value} 
            placeholder={placeholder} 
            styles={customStyles}
            components={{
                IndicatorSeparator: () => null
            }}
        />
    </div>
)

export default ReactSelect


const customStyles = {
    control: (provided, state) => ({
      ...provided,
      height: 42,
      border: state.isFocused ? '' : '1px solid #E6E8EF',
      borderRadius: '8px',
      margin: '0px 0px 20px 0px',
      padding: '0px 8px'
    }),
  }
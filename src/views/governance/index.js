import React, { useEffect, useState } from 'react'
import { CCard, CCardBody,  CCol } from '@coreui/react'
import DataTable from 'src/components/dataTable'
import { RegulationsHeaders } from 'src/components/dataTable/TableHeaders'
import { useNavigate } from 'react-router-dom'
import { 
  useLazyFetchGovernancesQuery, 
  useFetchGovernanceBodyQuery,
  useFetchTypesQuery 
} from 'src/api'
import Paginations from 'src/components/pagination'
import { useDispatch } from 'react-redux'
import { regulation } from 'src/slices/Regulation'
import PageHeaderContainer from 'src/components/pageHeader'
import FilterComponent from 'src/components/filters'
import SearchContainer from 'src/components/searchContainer'


const Regulation = () => {
 const navigate = useNavigate()
 const dispatch = useDispatch()

 const [fetchGovernances, {data, isLoading}] = useLazyFetchGovernancesQuery()
 const {data: governanceBody} = useFetchGovernanceBodyQuery('')
 const {data: types} = useFetchTypesQuery()
 const [filterValues, setFilterValues] = useState({
  governanceBody:'',
  type:'',
  searchValue: ''
 })

 useEffect(() => {
  fetchGovernances('p=0&r=50')
 },[])


  const handleViewItem = (data) => {
    navigate('/regulations/view-regulation', {state: {details: data}})
    dispatch(regulation(data))
  }

  const handleAddButton = () => {
      navigate('/governances/new-governance-body')
  }
  const handleUpdateItem = (data) => {
      navigate('/governances/new-governance-body', {state: {details:data}})
  }
  const formatGovernanceBodies = governanceBody?.data?.[0]?.governanceBodies?.map((el) => {
    return(
      {
        label: el.name,
        id:el.id
      }
    )
  }) || []

  const formatTypes = types?.content?.map((el) => {
    return(
      {
        label: el.name,
        id:el.id
      }
    )
  }) || []

  formatGovernanceBodies.unshift({label: 'All', id:'all'})
  formatTypes.unshift({label: 'All', id:'all'})

  const handleBodyChange = (item) => {
    setFilterValues({
      ...filterValues,
      governanceBody: item
    })
    fetchGovernances(`p=0&r=50&governanceBody=${item}&type=${filterValues.type}&sv=${filterValues.searchValue}`)
  }

  const handleTypeChange = (item) => {
    setFilterValues({
      ...filterValues,
      type: item
    })
    fetchGovernances(`p=0&r=50&governanceBody=${filterValues.governanceBody}&type=${item}&sv=${filterValues.searchValue}`)
  }

  const handleSearchValues = (item) => {
    setFilterValues({
      ...filterValues,
      searchValue:item
    })
  }

  const handleSearch = () => {
    fetchGovernances(`p=0&r=50&governanceBody=${filterValues.governanceBody}&type=${filterValues.type}&sv=${filterValues.searchValue}`)
  }

  return (
    <CCol xs={12}>
      <PageHeaderContainer buttonTitle="Add a governance" handleAddButton={handleAddButton}/>
      <div className='search-filters-page-container'>
        <div className='d-flex filters-page-container' >
          <FilterComponent 
            label="Governance Body"
            menuItems={formatGovernanceBodies}
            handleChange={handleBodyChange}
          />
          <FilterComponent 
            label="Type"
            menuItems={formatTypes}
            handleChange={handleTypeChange}
          />
          {/* <FilterComponent label="Issuing Date"/>
          <FilterComponent label="Effective Date"/> */}
        </div>
        <div>
          <SearchContainer 
            handleSearch={handleSearch} 
            placeholder="Search by name"
            handleChange={handleSearchValues}
            isLoading={isLoading}
          />
        </div>
      </div>
      <CCard className="mb-4">
        <CCardBody>
          <DataTable
            headers={RegulationsHeaders}
            data={data?.data[0]?.governances}
            handleViewItem={handleViewItem}
            isLoading={isLoading}
            handleUpdateItem={handleUpdateItem}
            hasViewBtn={true}
            hasEditBtn={true}
          />
        </CCardBody>
      </CCard>
      <Paginations page={0}/>
    </CCol>
  )
}

export default Regulation

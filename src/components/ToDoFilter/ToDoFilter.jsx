import React from 'react'
import { FilterButton, FilterButtonContainer, FiltersContainer,  ItemsLeft } from './ToDoFilter.components'

const ToDoFilter = () => {
  return (
    <FiltersContainer>
        <ItemsLeft />
        <FilterButtonContainer>
          <FilterButton action={()=> {}} active="All" filter='All'/>
          <FilterButton action={()=> {}} active="All" filter='Active'/>
          <FilterButton action={()=> {}} active="All" filter='Complete'/>
        </FilterButtonContainer>

        <button className='text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in'>
          Clear Complete
        </button>
    </FiltersContainer>
  )
}

export default ToDoFilter
import React from 'react'

const Pagination = ({peoplePerPage,totalPersons,paginate}) => {
    
    const pageNumbers = [];

    for(let i= 1; i<= Math.ceil(totalPersons/peoplePerPage);i++){
         pageNumbers.push(i)
    }
    console.log(pageNumbers,'hai pagination')
    

  return (
    <nav style={{display:"flex",flexDirection:"row",alignSelf:"center",gap:"5px"}}>
      
        {pageNumbers.map(number => (
          <div key={number}>
            <button className='button ' onClick={() => paginate(number)}>{number}</button>
            </div>
            
          
        ))}
      
    </nav>
  )
}

export default Pagination
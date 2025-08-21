import React from 'react'

const Application_02 = (data) => {
    console.log(data)
  return (
    <div>
        {/* <h1>name:{data.s1.name}</h1>
        <h2>age:{data.s1.age}</h2> */}

        {
            data.s1.map((x)=>(
                <>
                
                <h1>{x.name}</h1>
                
                </>
                
            ))
        }
    </div>
  )
}

export default Application_02
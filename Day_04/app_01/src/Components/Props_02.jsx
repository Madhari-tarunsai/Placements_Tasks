// import React from 'react'

// const Props_02 = (prop) => {
//     console.log(prop)
//   return (
//   <>
//   {prop.map((x, index) => (
//         <p key={index}>{x.name}</p>
//       ))}
//   </>
//   )
// }

// export default Props_02
import React from 'react'

const Props_02 = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map((x, index) => (
        <p key={index}>{x.name}</p>
      ))}
    </>
  )
}

export default Props_02

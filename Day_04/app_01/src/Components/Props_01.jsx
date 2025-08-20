// import React from 'react'

// const Props_01 = () => {
//     let s1={
//         name:"tarunsai",
//         age:90
//     }
//     console.log(s1)
//   return (
//     <div prop={s1.name}>Props_01</div>
//   )
// }

// export default Props_01
import React from 'react'

const Props_01 = ({ s1 }) => {
  console.log(s1);
  return (
    <div>
      Props_01 → {s1.name}, {s1.age}
    </div>
  )
}

export default Props_01

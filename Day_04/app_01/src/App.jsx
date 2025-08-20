// import React from 'react'
// import Props_01 from './Components/Props_01'
// import Props_02 from './Components/Props_02'


// const App = () => {
//   return (
//     <div>
//       <Props_01/>
//       <Props_02/>
//     </div>
//   )
// }

// export default App
import React from 'react'
import Props_01 from './Components/Props_01'
import Props_02 from './Components/Props_02'

const App = () => {
  let s1 = { name: "tarunsai", age: 90 }
  let people = [
    { name: "Alice" },
    { name: "Bob" },
    { name: "Charlie" }
  ]

  return (
    <div>
      {/* Passing s1 to Props_01 */}
      <Props_01 s1={s1} />

      {/* Passing array to Props_02 */}
      <Props_02 data={people} />
    </div>
  )
}

export default App

// import {BrowserRouter , Routes , Route } from "react-router-dom"
// import Layout from "./Layout"
// import Service from "./pages/Service"
// import Home from "./pages/Home"
// import About from "./pages/About"
// import Contact from "./pages/Contact"

// export default function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout/>}>
//       <Route index element={<Home/>}/>
//       <Route path="about" element={<About/>}/>
//       <Route path="contact" element={<Contact/>}/>
//       <Route path="service" element={<Service/>}/>
//       </Route>
//     </Routes>
//     </BrowserRouter>
//   )
// }

// import React from 'react'
// import Basic from './EventClass/Basic'

// export default function App() {
//   return (
//     <div>
//       <Basic/>

//     </div>
//   )
// }

// import React from 'react'
// import Counter from './UseState/Counter'

// export default function App() {
//   return (
//     <div>
//       <Counter/>
//     </div>
//   )
// }
import React from 'react'
import Counter from './UseState/Counter'
import Reducer from './UseState/Reducer'
import Effect from './UseState/Effect'
import Callbacks from './UseState/Callback'
export default function App() {
  return (
    <div>
      <Effect/>
      <Counter/>
      <Reducer/>
      <Callbacks/>
     </div>
  )
}



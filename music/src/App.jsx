import Form from "./components/Form"
import Formold from "./components/Formold"
import Home from "./components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/form" element={<Form />} />
  <Route path="/formold" element={<Formold />} />

</Routes>
</BrowserRouter>
    </>
  )
}

export default App

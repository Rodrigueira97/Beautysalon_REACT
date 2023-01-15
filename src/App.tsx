import { Header } from "./components/Header"
import "./App.css"
import { Home } from "./components/Home"
import { About } from "./components/About"
import { Depositions } from "./components/Depositions"
import { Contact } from "./components/Contact"
import { Services } from "./components/Services"
import { Rodape } from "./components/Rodape"


export function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Depositions />
      <Contact />
      <Rodape />
    </div>
  )
}
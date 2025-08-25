import { useEffect, useState } from "react"
import { SelectedPage } from "../utils/shared.ts"
import Background from "./Background.tsx"
import Introduction from "./Introduction.tsx"
import Navbar from "./Navbar.tsx"
import Home from "./Home.tsx"

  
function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home); 
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  
    useEffect(() => { 
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home); 
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  })

  return <div className="app bg-scroll">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <Introduction setSelectedPage={setSelectedPage}/>
      <Background setSelectedPage={setSelectedPage}/>
    </div>
}

export default App

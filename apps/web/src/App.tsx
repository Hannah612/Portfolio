import { useEffect, useState } from "react"
import { SelectedPage } from "../utils/shared.ts"
import Background from "./Background.tsx"
import Introduction from "./Introduction.tsx"
import Navbar from "./Navbar.tsx"
import Home from "./Home.tsx"

  
function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home); //typescript inferred types can find the type for you by default, but better to be explicit
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  
    useEffect(() => { //useEffect updates dynamically 
    const handleScroll = () => {
      if (window.scrollY === 0) {
        //at top of page 
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home); //selected page will change color in navbar if mobile menu item modal is open
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll); //window type objects should have event listener 
    return () => window.removeEventListener("scroll", handleScroll); //remove when leave the page 
  })

  return <div className="app bg-scroll">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <Introduction setSelectedPage={setSelectedPage}/>
      <Background/>
    </div>
}

export default App

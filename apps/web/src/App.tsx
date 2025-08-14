import { useEffect, useState } from "react"
import { SelectedPage } from "../utils/shared.ts"
import Background from "./Background.tsx"
import Introduction from "./Introduction.tsx"
import MainPage from "./MainPage.tsx"
import Navbar from "./Navbar.tsx"

  
function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.MainPage); //typescript inferred types can find the type for you by default, but better to be explicit
    const [_, setIsTopOfPage] = useState<boolean>(true);
  
    useEffect(() => { //useEffect updates dynamically 
    const handleScroll = () => {
      if (window.scrollY === 0) {
        //at top of page 
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.MainPage); //selected page will change color in navbar if mobile menu item modal is open
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll); //window type objects should have event listener 
    return () => window.removeEventListener("scroll", handleScroll); //remove when leave the page 
  })

  return <div className="app bg-scroll">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <MainPage/>
      <Introduction/>
      <Background/>
    </div>
}

export default App

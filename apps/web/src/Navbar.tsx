import { useState } from "react"
import Link from "../utils/Link"
import type { SelectedPage } from "../utils/shared"
import useMediaQuery from "../utils/useMediaQuery"
import { Bars3Icon } from "@heroicons/react/24/solid"

type Props = {
    selectedPage: SelectedPage
    setSelectedPage: (selectedPage: SelectedPage) => void
    isTopOfPage: boolean
}

const Navbar = ({selectedPage, isTopOfPage, setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between";  
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)"); 
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground =  isTopOfPage ? "" : "bg-coral";


  return <nav>
        <div
            className={`${flexBetween} fixed top-0 z-50 w-full py-6 ${navbarBackground}`} 
        >
            <div className={`${flexBetween} mx-auto w-5/6`}> 
                <div className={`${flexBetween} w-full gap-16`}>
                    <div className={`${flexBetween} w-full`}>

                    { isAboveMediumScreens ? (
                        <div className={`${flexBetween} w-full`}> 
                            <div className={`${flexBetween} gap-8 text-sm`}> 
                                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
                                <Link page="Introduction" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page="Background" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            </div>
                        </div>
                         )
                        : (
                            <button className="rounded-full bg-secondary-500 p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <Bars3Icon className="h-6 w-6 text-white"/>
                            </button>  
                        )}
                    </div>
                </div>
            </div>
        </div>

             {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-coral drop-shadow-xl">
                <div className="flex justify-end p-12">
                    {/* <button onClick={() => setIsMenuToggled(false)}>
                        <XMarkIcon className="h-6 w-6 text-white"/>
                    </button> */}
                </div>
                <div className="ml-[33%] flex flex-col gap-10 text-xl">
                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
                    <Link page="Background" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                </div>
            </div>
        )}
    </nav>
}

export default Navbar
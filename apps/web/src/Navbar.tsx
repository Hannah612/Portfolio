import Link from "../utils/Link"
import type { SelectedPage } from "../utils/shared"

type Props = {
    selectedPage: SelectedPage
    setSelectedPage: (selectedPage: SelectedPage) => void
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between"; //common layout to align items left and right in navbar  



  return <nav>
        <div //45:00 in video
            className={`${flexBetween} fixed top-0 z-50 w-full py-6`} //flexBetween spaces all the nav bar elements correctly, fixed sticky top navbar
        >
            <div className={`${flexBetween} mx-auto w-5/6`}> 
                {/*mx-auto is centers in middle, then inner div rep 83% of width (5/6 percentage) */}
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* Left side img */}
                    {/* <img alt="logo" src={Logo}/> */}
                    {/* Right side img */}
                        <div className={`${flexBetween} w-full`}> {/*div for the button */}
                            <div className={`${flexBetween} gap-8 text-sm`}> {/*gap = gap between each element*/}
                                {/*links */}
                                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
                                <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            </div>
                        </div>
               
                </div>
            </div>
        </div>
    </nav>
}

export default Navbar
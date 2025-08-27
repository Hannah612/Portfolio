import { SelectedPage } from "../utils/shared";
import TitleContent from "../utils/TitleContent"
import { motion } from "framer-motion"
import mountainsImg from "../assets/mountainsImg.jpg"


type Props = { setSelectedPage: (selectedPage: SelectedPage) => void}

const Introduction = ({setSelectedPage}: Props) => {
  return <section id="introduction" className="py-32 md:h-full">
    <motion.div className="" onViewportEnter={() => setSelectedPage(SelectedPage.Introduction)}>
      <TitleContent title="Introduction">
          Hello there! My name is Hannah and I am a recent graduate of Carleton University in Ottawa, Ontario. I am currently looking for a fitting job in my field of 
          expertise, full-stack development. My most recent projects use React, JavaScript, SQL, NodeJs, Springboot, and simliar technologies, as noted above.
      </TitleContent>
      <img className="rounded-full z-0 mx-auto mt-10" alt="mountainsImg" src={mountainsImg}></img>
    </motion.div>

</section>
  
}

export default Introduction;
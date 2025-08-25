import { SelectedPage } from "../utils/shared";
import TitleContent from "../utils/TitleContent"
import { motion } from "framer-motion"

type Props = { setSelectedPage: (selectedPage: SelectedPage) => void}

const Introduction = ({setSelectedPage}: Props) => {
  return <section id="introduction" className="py-32 md:h-full">
    <motion.div className="" onViewportEnter={() => setSelectedPage(SelectedPage.Introduction)}>
      <TitleContent title="Introduction">
          Hello there! My name is Hannah and I am a recent graduate of Carleton University in Ottawa, Ontario. I am currently looking for a fitting job in the field of 
          expertise, web development. I have experience in React, JavaScript, SQL, NodeJs, Springboot, and other simliar web technologies, as noted above.
      </TitleContent>
    </motion.div>

</section>
  
}

export default Introduction;
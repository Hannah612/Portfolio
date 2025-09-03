import { motion } from "framer-motion";
import { SelectedPage } from "../utils/shared";
import TitleContent from "../utils/TitleContent";

type Props = { setSelectedPage: (selectedPage: SelectedPage) => void}

//add tabs in front of paragraphs 
const PreviousEmployments = ({setSelectedPage}: Props) => {
  return <section id="previousemployments" className="py-20 h-full">
    <motion.div
      
      onViewportEnter={() => setSelectedPage(SelectedPage.PreviousEmployments)}
      >
      <TitleContent title="Previous Employments">
        Previous Employments
      </TitleContent>
    </motion.div>

</section>
}

export default PreviousEmployments;
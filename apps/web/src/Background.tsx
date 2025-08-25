import { motion } from "framer-motion";
import { SelectedPage } from "../utils/shared";
import TitleContent from "../utils/TitleContent";

type Props = { setSelectedPage: (selectedPage: SelectedPage) => void}

const Background = ({setSelectedPage}: Props) => {
  return <section id="background" className="py-32">
    <motion.div className="" onViewportEnter={() => setSelectedPage(SelectedPage.Background)}>
    
      <TitleContent title="Background">
        <p>
          My interest in computer science began in high school, where I first learned the fundamental programming basics using Python.
          After creating a few school projects involving simple beginner programs and games, I was able to learn Java and the elementary data structure theories
          such as arrays, lists, and relative uses.
        </p>
        <p>
          <br></br>
          I decided to continue pursuing computer science during post-secondary school due to my increasing interest, which is where I delved deeper into familiar concepts during my first and second year. In my second year specifically,
          I was introduced to web development, focusing on RESTful apis, databases, NodeJs, and other significant approaches. I began to focus more on the subject of web development, and I explored other technologies on my own time as well as during relative projects in school or work. 
          Additionally, I was able to secure an internship with Ross Video relative to full-stack web development - the topic I was greatly interested in. When I first started with the company, autodidactism was a necessary skill in order to learn quickly and adapt to the copmany environment and software. Technologies that I had to 
          quickly learn (or improve upon) included JavaScript, Java, ReactJs, Redux, NodeJs. I was also exposed to automated testing, which include popular frameworks such as JUnit, and Selenium. I would later take a course specializing in software quality assurance, which helped me further understand how these frameworks can be used.
        </p>
        <p>
          <br></br>
          In my last year of university, I was able to choose more specialized topics in web development, which is where I took a course focusing on recommender systems, social network anaylsis, and reputation and influence of e-commerce systems such as Amazon. Since AI is a trending topic in software development, I also decided to take a course concentrating on machine learning, which touched on generative AIs, camera systems. In the course, I used technologies such as PyTorch, and TensorFlow.
          After graduating in May 2025, I am currently searching for a job in the web development field. In the meantime, I am working on side projects to learn new frameworks/libraries or improve my current knowledge. Browse my <a className="text-light-pink" href="https://github.com/Hannah612">Github</a> to see what I'm currently working on!
        </p>
      </TitleContent>
    </motion.div>
</section>
}

export default Background;
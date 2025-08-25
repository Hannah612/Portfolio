import coffeeImg from "../assets/coffeeImg.jpg"
import { SelectedPage } from "../utils/shared";
import { motion } from "framer-motion"

type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
}

function Home ({setSelectedPage} : Props) {

  const links = [
      {id: 1, title: "Todo App", link: "https://github.com/Hannah612/toDo"},
      {id: 2, title: "Nature App", link: "https://nature-app-kappa.vercel.app/"},
  ]

  const familiar = [
    {id: 1, item: "JavaScript"},
    {id: 2, item: "ReactJS"},
    {id: 3, item: "Node.js"},
    {id: 4, item: "Springboot"},
    {id: 5, item: "Java"},
    {id: 6, item: "SQL"},
    {id: 7, item: "Selenium"},
    {id: 8, item: "JUnit"},
    {id: 9, item: "Python"},
  ]

  const textPositioning = 'mr-[300px] md:mr-[900px]';
  return <section id="home" className=" h-full">


    <motion.div className="relative flex justify-center ml-32 md:ml-60"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
>
      <div className="absolute font-recursive z-10">
        <h4 className={`${textPositioning} mt-60 text-7xl`}>Hannah Ng</h4>
        <p className={`${textPositioning} mt-5 bg-light-pink text-gray-700`}>Web Developer</p>
        <h3 className={`subtitle ${textPositioning} text-sm`}>Recent Projects</h3>
        <div className="ml-5">
          <ul className="mx-auto list-disc">
            {links.map((linkObj) => 
              <li key={linkObj.id}>
                <a className="hover:text-gray-600" target="_blank" href={linkObj.link}>
                  {linkObj.title}
                </a>
              </li>
            )}
          </ul>
        </div>

        <h3 className="subtitle mr-[500px] mt-[30px] text-sm">Familiar Languages and Technologies</h3>
        <div className="ml-5">
          <ul className="mx-auto list-disc">
            {familiar.map((familiarObj) => 
              <li key={familiarObj.id}>
                <p>{familiarObj.item}</p>
              </li>
            )}
          </ul>
        </div>


      </div>

      <img className="absolute rounded-full z-0 mt-20" alt="coffeeImg" src={coffeeImg}></img>
    </motion.div>

  </section>
    
}

export default Home;
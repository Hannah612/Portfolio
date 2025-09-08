import { motion } from "framer-motion";
import { SelectedPage } from "../utils/shared";
import TitleContent from "../utils/TitleContent";

type Props = { setSelectedPage: (selectedPage: SelectedPage) => void}


//add tabs in front of paragraphs 
const PreviousEmployments = ({setSelectedPage}: Props) => {

  const previousWork = [{
    id: 1, 
    position: "Software Developer Co-op – Robotics", 
    date: "September 2023 – September 2024 (1 yr, 1 mos)", 
    company: "Ross Video", 
    location: "Ottawa, Ontario",
    description: [
      "Contributed to the development of an interface using JavaScript and ReactJS to map out the boundaries and layout of an area onto a robot, which is intended to be used for stadiums and venues of various sizes",
      "Helped configure controls onto a robotic joystick using Java, designed to control robotic cameras inside a planned location",
      "Regularly collaborated with team members to fix bugs in code and agree on the best way to incorporate new features",
    ]
  },
  {
    id: 2, 
    position: "Data Analyst - Student", 
    date: "May 2022 – August 2023 (1 yr, 4 mos)", 
    company: "Canada Border Services Agency | Agence des services frontaliers du Canada · Co-op Canada Border Services Agency | Agence des services frontaliers du Canada · Co-op", 
    location: "Ottawa, Ontario",
    description: [
      "Used PowerBI to summarize data within tables and charts, which were then used by managers to present information to higher-ups",
      "Developed efficient strategies to complete requests within a reasonable timeframe, strengthening confidence within the team and ensuring that the team was reliable",
      "Used intermediate concepts in Excel such as pivot tables, formulas, and equations for various tasks, simplifying the task and hand and making it quicker to complete",
    ]
  },
  {
    id: 3, 
    position: "Ocean Import Coordinator", 
    date: "May 2021 – August 2021 (4 mos)", 
    company: "Kerry Logistics", 
    location: "Mississauga, Ontario",
    description: [
      "Helped senior staff with daily tracking of logistical containers in the process of shipping by maintaining an excel sheet with container status information, keeping relevant information organized for easy reference to data",
      "Sent multiple delivery orders to truckers stating the delivery information and location of container drop offs using the Forwarder Logic system, showing a reliable amount of work and efficiency under a strict time limit",
      "Updated containers in various company-based software that had completed their current route and landed back in the initial dock, which ensured all shipments were safely delivered and all exported containers were returned",
    ]
  }
]

  return <section id="previousemployments" className="py-20 h-full">
    <motion.div
      
      onViewportEnter={() => setSelectedPage(SelectedPage.PreviousEmployments)}
      >
      <TitleContent title="Previous Employments">
        <div className="ml-5">
          <ul className="">
            {previousWork.map((obj) => 
              <li key={obj.id} className="list-none">
                <div className="flex font-bold underline">
                  <p>
                    {`${obj.position}`}
                  </p>
                  <p className="ml-auto">
                    {obj.date}
                  </p>
                </div>
                <p className="flex font-bold">
                  {`${obj.company}`}
                </p>
                <ul className="list-disc">
                  {obj.description.map((des) => 
                    <li  key={obj.id} className="">
                      <p className="pl-10 pr-5">
                        {`${des}`}
                      </p>
                    </li>
                  )}
                </ul>
              </li>
            )}
          </ul>
        </div>

      </TitleContent>
    </motion.div>

</section>
}

export default PreviousEmployments;
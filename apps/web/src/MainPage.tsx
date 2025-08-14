import {titleStyle} from "../utils/shared"
import coffeeImg from "../assets/coffeeImg.jpg"

const MainPage = () => {

  const links = [
      {id: 1, title: "Todo App", link: "https://to-8tvl637wg-hans-projects-d6a4c041.vercel.app/"},
      {id: 2, title: "Nature App", link: "https://nature-app-kappa.vercel.app/"},
  ]

  return <section id="mainPage" className=" h-full">
    <div className="flex"> 
    </div>

    <div className="relative flex justify-end">
      <h4 className="font-recursive text-7xl mx-auto mt-60 text-center z-10">Hannah's Portfolio</h4>
      <img className="absolute rounded-full z-0" alt="coffeeImg" src={coffeeImg}></img>

      {/* <p className="absolute my-auto ml-3">Welcome to my portfolio! Here you will have access to my recently deployed personal projects.</p> */}
      
    </div>
{/* 
    <div className="flex">
      <p className="my-auto ml-3">Welcome to my portfolio! Here you will have access to my recently deployed personal projects.</p>
      <img className="w-56 rounded-full" src={coffeeImg}></img>
    </div> */}

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
  </section>
    
}

export default MainPage;
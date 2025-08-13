import {titleStyle} from "../utils/shared"

const MainPage = () => {

  const links = [
      {id: 1, title: "Todo App", link: "https://to-8tvl637wg-hans-projects-d6a4c041.vercel.app/"},
      {id: 2, title: "Nature App", link: "https://nature-app-kappa.vercel.app/"},
  ]

  return <section id="mainPage" className=" h-full">
    <div className="flex"> 
      <h4 className={titleStyle}>Hannah's Portfolio</h4>
    </div>
      <p className="ml-3">Welcome to my portfolio! Here you will have access to my recently deployed personal projects.</p>

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
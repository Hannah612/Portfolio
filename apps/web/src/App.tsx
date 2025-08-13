import Background from "./Background.tsx"
import Introduction from "./Introduction.tsx"
import MainPage from "./MainPage.tsx"

function App() {
  return <div className="app bg-scroll">
      <MainPage/>
      <Introduction/>
      <Background/>
    </div>
}

export default App

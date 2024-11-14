import LeftSideBar from "./components/LeftSideBar"
import Middle from "./components/Middle"
import TopNav from "./components/TopNav"

function App() {
  return (
    <div>
      {/* Top Nav */}
      <div className="h-[64px]">
        <TopNav/>
      </div>
      {/* MAIN */}
      <div className='grid grid-cols-6 min-h-screen'>
        <div className='border-2 border-t-0'><LeftSideBar /></div>
        <div className="col-span-5"><Middle/></div>
        {/* <div className='border-2 border-t-0 col-span-3'>Middle</div>
        <div className='border-2 border-t-0 col-span-2'><RightSideBar /></div> */}
      </div>
    </div>
  )
}

export default App

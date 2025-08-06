import Sidebar from "./components/Sidebar"
import TopBar from "./components/TopBar"
import ChatWindow from "./components/ChatWindow"

const App = () => {
  return (
    <>
    <div className="h-screen w-screen flex flex-col">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <ChatWindow />
      </div>
    </div>
    </>
  )
}

export default App

import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <Header />
      <div className="min-h-[calc(100vh-400px)]">
        <Outlet />
      </div>
      <footer>Footer</footer>
    </div>
  )
}
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import MyFooter from "./components/MyFooter";

export default function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header />
      <div className="min-h-custom">
        <Outlet />
      </div>
      <MyFooter />
    </div>
  )
}
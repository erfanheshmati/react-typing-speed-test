import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <header>Navbar</header>
      <Outlet />
      <footer>Footer</footer>
    </>
  )
}
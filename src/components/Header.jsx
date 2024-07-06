import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="/">
                <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">TypingCat</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Link to="/typing-speed-test">
                    <Button>Get started</Button>
                </Link>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="/" active>Home</Navbar.Link>
                <Navbar.Link href="#">About</Navbar.Link>
                <Navbar.Link href="#">Services</Navbar.Link>
                <Navbar.Link href="#">Pricing</Navbar.Link>
                <Navbar.Link href="#">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

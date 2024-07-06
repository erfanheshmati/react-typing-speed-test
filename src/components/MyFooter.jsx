import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export default function MyFooter() {
    return (
        <Footer container className="bg-blue-800">
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <Footer.Brand
                            href="/"
                            src="/logo.png"
                            alt="Logo"
                            name="TypingCat"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="about" className="text-white" />
                            <Footer.LinkGroup col className="text-white">
                                <Footer.Link href="#">Flowbite</Footer.Link>
                                <Footer.Link href="#">Tailwind CSS</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" className="text-white" />
                            <Footer.LinkGroup col className="text-white">
                                <Footer.Link href="#">Github</Footer.Link>
                                <Footer.Link href="#">Discord</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" className="text-white" />
                            <Footer.LinkGroup col className="text-white">
                                <Footer.Link href="#">Privacy Policy</Footer.Link>
                                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="https://erfanweb.vercel.app" by="Developed By Erfan Heshmati" year={2024} className="text-white" />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="#" icon={BsFacebook} className="text-white" />
                        <Footer.Icon href="#" icon={BsInstagram} className="text-white" />
                        <Footer.Icon href="#" icon={BsTwitter} className="text-white" />
                        <Footer.Icon href="#" icon={BsGithub} className="text-white" />
                        <Footer.Icon href="#" icon={BsDribbble} className="text-white" />
                    </div>
                </div>
            </div>
        </Footer>
    )
}

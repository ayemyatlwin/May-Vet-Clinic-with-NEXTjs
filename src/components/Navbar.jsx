import Image from "next/image";
import bell from "../images/notifications.png"
import logo from "../images/Logo(2).png"
import userPhoto from "../images/user_image.png"


const Navbar = () => {
  return (
    <nav className="  ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Image src={logo}  className="h-12 mr-3" alt="Logo" />
        <div className="flex items-center gap-5 ">
          <Image className=" pr-3 h-5 " src={bell} alt="" />
          <Image
            src={userPhoto}
            className="w-8 h-8 rounded-full"
            alt="profile photo"
          />
          <div className="px-3">
            <h1 className=" text-sm">Lisa</h1>
            <span className=" text-xs">operator</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

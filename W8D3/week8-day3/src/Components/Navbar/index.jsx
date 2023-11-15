import "./index.css"
import { PhoneFilled } from "@ant-design/icons"

function Navbar() {

    function openSideNav(e) {
        console.log(e.target);
    }

  return (
    <nav>
        <div className="navTitleBox">

            <h2 className='navTitle'>Pulse<span className='titleDot'>.</span></h2>

            <i onClick={()=>openSideNav()} className="fa-solid fa-bars toggle"></i>

            <ul className="sideNav">
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
        </div>

        <div className="navigataions">

            <ul className="navList">
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html">Home</a></li>
            </ul>

        </div>

        <div className="reservations">

            <p className="reservationsHolder"><span className="resWord">Reservations</span><PhoneFilled />652-345 3222 11</p>

        </div>

    </nav>
  )
}

export default Navbar
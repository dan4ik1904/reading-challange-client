import './Nav.css'
// import book from '../../assets/images/book.png'
// import classmates from '../../assets/images/classmates.png'
// import home from '../../assets/images/home.png'
// import me from '../../assets/images/me.png'
// import top from '../../assets/images/top.png'
import { Link } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { FaMedal } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaUserCircle } from 'react-icons/fa'


function Nav() {

  return (
    <div className="mobile__bottom">
      <div className="nav container">
          <Link to={'/'}>
            <IoHome color='white' fontSize={'40px'}/>
          </Link>
          <Link to={'/mybooks'}>
            <ImBooks color='white' fontSize={'40px'}/>
          </Link>
          <Link to={'/top'}>
            <FaMedal color='white' fontSize={'40px'}/>
          </Link>
          <Link to={'/classmates'}>
            <BsFillPeopleFill color='white' fontSize={'40px'}/>
          </Link>
          <Link to={'/me'}>
            <FaUserCircle fontSize={'40px'} color="white" />
          </Link>
      </div>
    </div>
  )
}

export default Nav;

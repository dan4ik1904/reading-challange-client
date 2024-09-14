import './Nav.css'
import book from '../../assets/images/book.png'
import classmates from '../../assets/images/classmates.png'
import home from '../../assets/images/home.png'
import me from '../../assets/images/me.png'
import top from '../../assets/images/top.png'
import { Link } from 'react-router-dom'


function Nav() {

  return (
    <div className="mobile__bottom">
      <div className="nav container">
          <Link to={'/'}>
              <img src={home} alt="" />
          </Link>
          <Link to={'/mybooks'}>
                <img src={book} alt="" />
          </Link>
          <Link to={'/top'}>
                <img src={top} alt="" />
          </Link>
          <Link to={'/classmates'}>
                <img src={classmates} alt="" />
          </Link>
          <Link to={'/me'}>
                <img src={me} alt="" />
          </Link>
      </div>
    </div>
  )
}

export default Nav;

import './Header.css'
import Logo from './Logo'

function Header() {
    return (
      <div className='header-container'>
        <Logo />
        <label className='header-titulo'>Farmárcia</label>
      </div>
    )
  }
  
  export default Header
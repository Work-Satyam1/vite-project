import nike from "../assets/image.png"
const Nav=()=>{

return <>


<nav>
  <div className="logo">
 <img className="nike" src={nike} alt="Nile logo"/>
  </div>
  <ul>
    <li href="#">Menu</li>
    <li href="#">Location</li>
    <li href="#">About</li>
    <li href="#">Contact</li>

  </ul>

  <button>Login</button>
</nav>
</>

}

export default Nav;
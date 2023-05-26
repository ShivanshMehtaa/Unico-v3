import { useEffect, useState, useContext } from "react";
import { Link ,Navigate, useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/Context";
import Cart from "../Cart/Cart";
import WebFont from 'webfontloader';

import "./Header.scss";
const Header = () => {
    const Navigate = useNavigate() ;

    const[scrolled,setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [log , setLog] = useState(false) ;
    // let log = 'login' ;
    const getuser = ()=>{

        
        if((localStorage.length)===2){
            // console.log("hn hn user hai") ;
            setLog(true) ;
            
            setLog("user") ;
            
        }
        else{
            // console.log("nhi user nhi hai login kro") ;
        }
    }

    const handleScroll = () =>{
        const offset = window.scrollY;
        if(offset>200){
            setScrolled(true);
        }
        else{
            setScrolled(false)
        }
    }

    function fun(){
        Navigate('/login') ;
    }

    useEffect(()=>{
        getuser();
        window.addEventListener("scroll", handleScroll)
    },[]);
    useEffect(() => {
   WebFont.load({
     google: {
       families: ['Droid Sans', 'Chilanka']
     }
   });
  }, []);

    return (
        <>
            <header className={`main-header ${scrolled ? 'sticky-header' : ' '}`}>
                <div className="header-content">
                    <div className="center"><Link className="linkcenter" to="/">Unico Foods</Link></div>
                    
                    <oll className="left">
            
                        <li><Link className="link" to="/">Home</Link></li>
            
                       <div class="dropdown">
                            <button class="dropbtn">Categories ⬇️
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="dropdown-content font-loader">
                                <li><Link className="linkd" to="/allProducts">allProducts</Link></li>
                                <li><Link className="linkd" to="/Millet-Meusli">Millet-Meusli</Link></li>
                                <li><Link className="linkd" to="/Millet-Laddo">Millet-Laddo</Link></li>
                                <li><Link className="linkd" to="/Millet-Bar">Millet-Bar</Link></li>

                            </div>
                        </div>
                        <li><Link className="link" to="/contact">Contact US</Link></li>
                    </oll>
                    
                    <div className="right">
                        <TbSearch onClick={()=>setShowSearch(true)}/>
                        <Link className="link" to = {localStorage.user ? '/user' : '/login'}  ><AiOutlineUser/></Link>
                        <span className="cart-icon" onClick={()=>setShowCart(true)}>
                            <CgShoppingCart/>
                            <span>5</span>
                        </span>
                    </div>
                </div> 
            </header>
            {
                showCart && <Cart setShowCart={setShowCart}/>
            }
            {
                showSearch && <Search setShowSearch={setShowSearch}/>
            }
        </>
    );
};

export default Header;

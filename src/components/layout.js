import Global from "../styles/globalStyeles";
import { GlobalContainer } from "../styles/Container";
import Search from "./search";
import Navigation from "./navigation";
import {NavLink, Outlet} from 'react-router-dom'



function Layout({pages}) {
    let b = []
    function massiv () {
        if(pages){
            for (let izi=1; izi<=pages; izi++) {
                b.push(izi)
            }
        }
    }
    massiv();
   
    const GetPages =()=>{
      return ( b.map(item=>(
            <NavLink key={item} style={({isActive})=>({color: isActive ? 'green' : 'black', textDecoration: 'none', padding: '4px'})} to={`/pages/${item}`} >{item}</NavLink>
        )))
        
    }
  return (
    <GlobalContainer>
      <Global/>
      <Search/>
      
      <Outlet/>
      <Navigation pages={pages}>
        <div>
        <GetPages/>

        </div>
        
      </Navigation>
      
    </GlobalContainer>
  );
}

export default Layout;
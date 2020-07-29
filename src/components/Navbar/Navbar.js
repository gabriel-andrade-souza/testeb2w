import React from 'react';
import './style.css';


function Navbar(){
	return (
		<div>

		<nav className="navbar navbar-dark bg-primary">
            <div class="box">

            
                  <form>
                    <input type="search" id="buscar" placeholder="Buscar Pokemon" />
                    <button id="busca"  type="button" onclick="alert('Busca realizada')"></button>
                  </form>
                    </div>
              <div class="box2">
                 
                  
                  <button id="car-ico"  type="button" onclick="alert('Busca realizada')"></button> 
                  
                  </div>
        
         </nav>
		</div>



		)

}

export default Navbar;
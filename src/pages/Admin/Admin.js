
import React from "react"
import { Tabs, Avatar } from 'antd';
import {Container, Col} from "react-bootstrap"
import { useState, useEffect} from "react";
import jwtDecode from "jwt-decode";
import {getAccessToken,getRefreshToken, logout} from "../../api/auth.js";
  
  
function Admin(){
  
  const [user, setUser] = useState({user: "" });
    
      useEffect(() => {
        checkUserLogin(setUser);
      }, []);
      
    console.log(user)
     
  
  function checkUserLogin(setUser) {
    const accessToken = getAccessToken();
  
    if (!accessToken) {
      const refreshToken = getRefreshToken();
      if (!refreshToken) {
          logout();
          setUser({
            user: null,
          });
        } 
      } else {
        setUser({
          user: jwtDecode(accessToken)
        });
      }
  }
 

  let name=user.user.name

console.log(name)

    const { TabPane } = Tabs;

    return(
        <>
        <h2>Estamos en Admin</h2> 
        <Container>
         <Col>  
         <Tabs tabPosition={"left"}>
          <TabPane tab="Usuario" key="1">
          <div>
          <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900"  >Perfil de {user.user.name}</h3>
       </div>
    </div>
    <div className="mt-5 md:mt-0 md:col-span-2">
      <div action="#" method="POST">
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div className="row g-3">
  <div className="col-auto">
    <input type="text" readOnly className="form-control-plaintext" id="usuario" value={user.user.name} />
  </div>
  <div className="col-auto">
    <input type="text" className="form-control" id="inputUser" placeholder={user.user.name}/>
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3">Modificar</button>
  </div>
</div>
<div className="row g-3">
  <div className="col-auto">
    <input type="text" readOnly className="form-control-plaintext" id="staticEmail2" value="Email"/>
  </div>
  <div className="col-auto">
    <input type="text" className="form-control" id="inputEmail" placeholder="Email"/>
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3">Modificar</button>
  </div>
</div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Photo
              </label>
              <div className="mt-1 flex items-center">
                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                <Avatar size={104} src="https://image.flaticon.com/icons/png/512/33/33771.png" />
                </span>
                <button type="submit" className="btn btn-primary mb-3">Modificar</button>
              </div>
            </div>         
          </div>          
        </div>
      </div>
    </div>
  </div>
</div>
          </TabPane>
          <TabPane tab="Mis Recetas" key="2">
            Content of Tab 2
          </TabPane>
          <TabPane tab="Nueva receta" key="3">
            Content of Tab 3
          </TabPane>
          <TabPane tab="Recetas guardadas" key="4">
            Content of Tab 4
          </TabPane>
        </Tabs> 
        </Col> 
        </Container>   
        </>
        )
}

export default Admin
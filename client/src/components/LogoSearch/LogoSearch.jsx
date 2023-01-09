import React, { useEffect, useState } from 'react'
import './LogoSearch.css'
import Logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
import { getUserData } from '../../api/UserRequest'

const LogoSearch = ({setNewUser}) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await getUserData(query);
      console.log(data,'kitti')
      setData(data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);

  return (
  <div className="LogoSearch dropdown">
    <img src={Logo} alt="" />
    <div className="Search">
        <input type="text" placeholder='#Explore' onChange={(e) => setQuery(e.target.value.toLowerCase())}/>
        <div className="s-icon">
            <UilSearch/>
        </div>
    </div>
    <div class="dropdown-content">
      {data.map((person)=>(
        <>
      <p onClick={()=>setNewUser(person)} style={{cursor:"pointer"}}>{person.firstname}</p>
      <hr />
      </>
      ))}
    
    
  </div>
  </div>
    )
}
    
export default LogoSearch
import React, { useEffect, useState } from "react";
import "./Header.css";
import { FaUser } from "react-icons/fa";
import { VscGear } from "react-icons/vsc";
import Apiaright from "./Apiaright";


const HeaderApi = ({setShow,show,setCount,count}) => {
  const [posts, setPosts] = useState([]);
  // const[show,setShow]=useState(true )
  const fetchPosts = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <div className="container">
      {posts.map((post) => {
        return (
          <div className="gurupidi">
            <div className="userecon">
            <FaUser className="usericon"/>
            <button onClick={show} className="button"><svg xmlns="http://www.w3.org/2000/svg" width="50" viewBox="0 0 20 20" height="50" fill="none" class="svg-icon"><g stroke-width="1.5" stroke-linecap="round" stroke="rgb(132 204 22)"><circle r="2.5" cy="10" cx="10"></circle><path fill-rule="evenodd" d="m8.39079 2.80235c.53842-1.51424 2.67991-1.51424 3.21831-.00001.3392.95358 1.4284 1.40477 2.3425.97027 1.4514-.68995 2.9657.82427 2.2758 2.27575-.4345.91407.0166 2.00334.9702 2.34248 1.5143.53842 1.5143 2.67996 0 3.21836-.9536.3391-1.4047 1.4284-.9702 2.3425.6899 1.4514-.8244 2.9656-2.2758 2.2757-.9141-.4345-2.0033.0167-2.3425.9703-.5384 1.5142-2.67989 1.5142-3.21831 0-.33914-.9536-1.4284-1.4048-2.34247-.9703-1.45148.6899-2.96571-.8243-2.27575-2.2757.43449-.9141-.01669-2.0034-.97028-2.3425-1.51422-.5384-1.51422-2.67994.00001-3.21836.95358-.33914 1.40476-1.42841.97027-2.34248-.68996-1.45148.82427-2.9657 2.27575-2.27575.91407.4345 2.00333-.01669 2.34247-.97026z" clip-rule="evenodd"></path></g></svg></button>
            </div>
           
        <div className="borderr"></div>
          <div className="hero">
           <div>
           <h4 className="IDE"># ID: {post.id}</h4>
            <h5 className="IDE2"># NAME: {post.name} </h5>
            <h5 className="IDE3"> # USER: {post.username}</h5>
           </div>
           <div id="hero_btn1" className="hero_btn 1">
              <button  onClick={(id="") => setShow (!show ) } >USER TODOS</button>
              <button  onClick={() => setShow(!show)} >GALRY</button>
            </div>
          </div>
            <div className="Api_btn"> 
             <div className="usertodos">
              <button className="user"  onClick={(id="") => setShow (!show ) } >USER TODOS</button>
             </div>
              <div className="galary">
              <button className="user" onClick={() => setShow(!show)} >GALRY</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HeaderApi;

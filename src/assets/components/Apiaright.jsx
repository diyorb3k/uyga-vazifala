import React, { useEffect, useState } from 'react'
import './Apiaright.css'
const Apiaright = ({toogle,count}) => {
    const[postlar,setPostlar]=useState([])
    const[albom,setAlbom]=useState([])
// .................................
const fetchCount = async ()=>{
    try {
        const res= await fetch('https://jsonplaceholder.typicode.com/photos')
        const data = await res.json()
        setAlbom(data)
    } catch (error) {

        console.log(err );
        
    }
   
}


useEffect(()=>{
    fetchCount()
},[])
    // ....................
   const fetchPosts =async ()=>{
    try {
        const res =await fetch('https://jsonplaceholder.typicode.com/albums')
        const datat = await res .json()
        setPostlar(datat);
    } catch (error) {
        console.log(err.mesage);
        
    }
   }
   useEffect (() => {
    fetchPosts()
   },[] )

//    Albom API


  return (
    <div className='bicontaioner'>
       

      <div className={`albom ${toogle ? "show" : ""}`}>
         
       {
        albom.map(albo => (
            <div className='albo'>
                <img className='albo_img' src={albo.url}  alt="" />
                <p className='apia' key={albo.id}><span className='want'>albom id</span> : {albo.albumId}</p>
                <p className='apia'><span className='want'>title</span> : {albo.title}</p>
            </div>
        ))
       }
      </div>
       
      <div className="taytil ">
           
           {
            postlar.map((postlar)=>(
                <div className='malumot'>
                   <p className='posth1'>post <span className='ide'>: {postlar.userId}</span></p>
                   <p className='posth1'>title <span  className='ide'>: {postlar.title}</span></p> 
                </div>
            ))
           }
        </div>
        </div>
  )
}

export default Apiaright
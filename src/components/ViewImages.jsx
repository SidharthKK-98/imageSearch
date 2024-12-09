import React, { useState,useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function ViewImages({submitValue}) {

    const search=submitValue
    console.log(search);
    

    const [data,setData]=useState([])

    const [page,setPage]=useState(1)
    
    console.log(data);
    
    const handleInfinteScroll=()=>{
      
        if(  window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight){
            setPage((prev)=>prev+1)
          }

      
    }

    
        useEffect(() => {
            if(search){
            axios.get(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=mJ6kI6t7xaPpgvU9j2YxgLkbCGlL3XBQ3JzwsJwblko`).then(res=>{
             const card=res.data.results
             setData(card)
            }).catch((err)=>{
                console.log(err);
                
            })
        }
        }, [search])

        useEffect(() => {
          if(page>1){
          axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=${search}&client_id=mJ6kI6t7xaPpgvU9j2YxgLkbCGlL3XBQ3JzwsJwblko`).then(res=>{
           const card=res.data.results
           setData((prev)=>[...prev,...card])
          }).catch((err)=>{
              console.log(err);
              
          })
      }
      }, [page])

        useEffect(() => {
         
          window.addEventListener("scroll",handleInfinteScroll)

        }, [])
        
        
            // console.log(res.data.results);
            
            
        
    

  return (
    <div>
      <div className="container mt-5">
      <div className="row rows ">

        {
            data?.map(items=>(

                            <div key={items.id} className="col-lg-3 col-sm-12 mt-5 ">
                            <Card style={{ width: '18rem' }} className='shadow mt-5'>
                                    <Card.Img variant="top" src={items.urls.full} style={{ height: '12rem', objectFit: '100% 100%' }} />
                                    
                                    {/* <Card.Body>
                                         <Card.Title>{items.alt_description || 'Untitled'}</Card.Title>
                                    </Card.Body> */}
                                </Card>
                            </div>
                         

            ))
        }
        </div>
      </div>
    </div>
  )
}

export default ViewImages

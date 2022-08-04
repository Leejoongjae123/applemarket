import React from 'react';
import {useEffect, useState} from 'react'
import {addDoc,collection, doc, getDocs,query,onSnapshot,orderBy} from 'firebase/firestore'
import {dbService} from '../firebase'

export default function ProductList () {
  const [products,setProducts]=useState([])

  const getProducts=async ()=>{
    const q=query(collection(dbService,"product"))
    const querySnapshot=await getDocs(q);
    querySnapshot.forEach((doc)=>{
      setProducts((prev)=>[doc.data(),...prev])
    })
  }

  useEffect(() => {
    getProducts()
  }, []);  
  
  return (
    <div>
      {products.map((elem)=>{
        return (
        <div className="container mt-3">
          <div className="product">
            {/* <div className="thumbnail" style="background-image: url('https://via.placeholder.com/350')"></div> */}
            <div className="thumbnail" style={{backgroundImage:`url(${elem.URL})`}}></div>
            <div className="flex-grow-1 p-4">
              <h5 className="title">{elem.제목}</h5>
              <p className="date">{elem.게시일}</p>
              <p className="price">{elem.가격}원</p>
              <p className="float-end">♡0</p>
            </div>
          </div>
        </div>  
        )
      })}      
    </div>
  );
}

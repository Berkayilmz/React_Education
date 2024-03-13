import { useState, useEffect, useTransition, useRef, useMemo, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Text from './components/Text'
import Button from './components/Button'
import React from 'react'
import Input from './components/input'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Detail from './pages/Detail'
import Home from './pages/Home'
import Counter from './components/Counter'
import axios from 'axios'

function App() {

  const inputRef = useRef(0);

  const [count1,setCount1]=useState(0);
  const [textChange,setTextChange]=useState("");

  const [count2,setCount2]=useState(0);

  const focusFunc = () => {
    inputRef.current.focus();
  }

  const largeDataFunc=useMemo(()=>{
    [...new Array(1000000)].forEach((item)=>{})
    return count1*3;
  },[])
  
  const decrement=useCallback(()=>{
    setCount2(count2-1);
  },[count2])

  //State'ler ile artırma işlemi yaptığımızda sayfayı tekrar render ederiz fakat
  // Ref ile yaptığımızda bu artırma işlemi için sayfayı tekrar render etmeye gerek kalmaz!

  //Yani bir state güncellendiğinde sayfa ReRender olur. Eğer bu işlemi Ref ile yaparsak ve sadece 
  //Current değerine göre ayarlamalar yaparsak sayfayı reRender etmekten kurtuluruz. Böylece alt 
  //taraftaki herhangi bir state ya da yapının değişmesini engellemiş oluruz.


  //--------UseMemo
  // Büyük veriyi bir kere sayfaya çekip, kenarda hafızada tutup, işimize yaradığında kullanmaya yarar
  // Böylece sayfa her render edildiğinde büyük bir fonksiyon ya da veriyi işlemekten sistemi alıkoyarız.
  // Geriye bir fonksion dönmez

  //--------UseCallBack
  // UseMemo ile benzerdir. Geriye fonksion döndürür.

  //--------React.memo
  //Sayfada bir işlem yapıldığında her seferinde terkar render'lanmasını istemediğimiz
  // komponentler için kullanılır. const counter=React.memo(()=>{}) şeklinde kullanılır.
  // BKZ: src/components/Counter.jsx

  //--------REDUX
  //State'leri bir component'te oluşturduğumuzda farklı bir component'te kullanmamız kolay yoldan pek mümkün
  // değildir. Redux kullanarak state'leri farklı bir yerde tanımlayıp tüm component'lerden erişimi
  // mümkün kılabiliriz.

  return (
    <>
   
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>

      

      {/* <div>{count1}</div>
      <button onClick={()=>setCount1(count1 + 1)}>Artır</button><br />
      {largeDataFunc}<br/>

      

      <div>{count2}</div>
      <Counter decrement={decrement}/><br />
      
      <input type="text" onChange={e=>setTextChange(e.target.value)} /> */}

    
    </>
  );
}

export default App

import React, { createContext, useEffect, useState } from 'react'
import Nav from './components/Nav'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import axios from 'axios'
export const Context = createContext()
import Wish from './components/Wish'
import View from './components/View'

const App = () => {
const [data,setData] = useState([])
const[input,setInput] = useState('')
const[page,setPage] = useState(1)
const[likeArr,setLikeArr] = useState([])


   async function apiCall(){
   let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=913436e2989364cd46db75bdf5fbc1ec`
   if(input){
    url=`https://api.themoviedb.org/3/search/movie?page=${page}&query=${input}&api_key=913436e2989364cd46db75bdf5fbc1ec`
    setPage(1)
   }

    try {
        const responce = await axios.get(url)
        setData(responce.data.results)
    } catch (error) {
      console.log(error.message);
      
    }

} 



useEffect(()=>{

  
apiCall()
},[input,page])

  return (
   <Context.Provider value={{setInput,data,page,setPage,likeArr,setLikeArr,input}}>
     <div>
      <Router>
      <Nav />     
<Routes>
  <Route path='/' element={ <Home />} />
  <Route path='/wish' element={ <Wish/> } />
  <Route path='/view/:val' element={ <View/> } />
</Routes>
      </Router>

    </div>
   </Context.Provider>
  )
}

export default App
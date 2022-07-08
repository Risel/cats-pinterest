import React, { useState, useEffect } from "react";
import { getCats } from "../store/thunks/catsThunk";
import { useSelector,useDispatch } from "react-redux";
import CatList from "../components/CatList";
import "../styles/home.scss"

const Home = () => {
  const {cats, isLoading} = useSelector((state)=>state.cats);
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useDispatch();
  

  useEffect(() => {
    if(!cats.length){
      dispatch(getCats(15))
    }
  }, []);
  
  useEffect(() => {
    if(isFetching){
      dispatch(getCats(15))
      setIsFetching(false)
    }
  }, [isFetching]);
  
  useEffect(()=>{
    document.addEventListener('scroll',scrollHandler)
    return function() {document.removeEventListener('scroll',scrollHandler)}
  },[])

  function scrollHandler(e) {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) < 100
    ) {
      setIsFetching(true);
    }
  }
  

  return <>
    <CatList cats={cats}/>
    {
      isLoading 
      ? 
      <div className="home__loading">Загружаем котиков...</div>
      :
      ''
    }
  </>;
};

export default Home;

import React, {useEffect, useRef} from "react";
import { useSelector } from "react-redux";
import CatList from "../components/CatList";

const Favourites = () => {
  const {cats} = useSelector((state)=>state.cats)
  const favCats = cats.filter((cat)=>cat.isFavourite)
  const json = JSON.stringify(favCats)
  localStorage.setItem('favourites', json)
  const favData = JSON.parse(localStorage.getItem('favourites'));
 
  return <CatList cats = {favData}/>
};

export default Favourites;

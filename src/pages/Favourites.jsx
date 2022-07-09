import React, {useEffect, useRef} from "react";
import { useSelector } from "react-redux";
import CatList from "../components/CatList";

const Favourites = () => {
  const {cats} = useSelector((state)=>state.cats)
  const favCats = cats.filter((cat)=>cat.isFavourite)
  
 
  return <CatList cats = {favCats}/>
};

export default Favourites;

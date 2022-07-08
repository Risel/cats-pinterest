import React from "react";
import SingleCat from "./SingleCat";
import styles from './CatList.module.scss'

const CatList = ({cats}) => {
  return <div className={styles.list}>
  {cats.map((cat,index)=>(
    <SingleCat cat={cat} key={`${cat.id}_${index}`}/>
  ))}
  </div>;
};

export default CatList;

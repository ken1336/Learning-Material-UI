import React, { Component, Fragment } from "react";

export default function Home() {
    const a = () => 0 - Math.random(Date.now())
    const array = Array
    .apply(0,Array(45))
    .map((v,i) =>i+1)
    .sort(a)
    //.slice(0,6);
    console.log(array);
    const showArray = array.map(v=><span>{v+' '}</span>)
    
    console.log(a())
    console.log(a())
    console.log(a())
  return <div>{}</div>;
}

"use client";
import { useEffect } from "react";

export default function UseStickyHeader(){
  useEffect(()=>{
    const header = document.querySelector('.site-header');
    const hero = document.querySelector('.hero');
    if(!header || !hero) return;
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          header.classList.remove('is-sticky');
        } else {
          header.classList.add('is-sticky');
        }
      })
    },{root:null,threshold:0,rootMargin:'-80px 0px 0px 0px'});
    observer.observe(hero);
    return ()=>observer.disconnect();
  },[]);
  return null;
}

"use client";
import { useEffect } from "react";

export default function ClientHeroInjector(){
  useEffect(()=>{
    const setHeroVideo = ()=>{
      try{
        const hero = document.querySelector('.hero');
        if(!hero) return;
        const vid = hero.querySelector('video');
        if(!vid) return;
        const src = vid.querySelector('source');
        if(src && src.getAttribute('src') !== '/watermarked_preview.mp4'){
          src.setAttribute('src','/watermarked_preview.mp4');
          (vid as HTMLVideoElement).poster = '/watermarked_preview.mp4';
          // reload the video element so the new source is used
          try{(vid as HTMLVideoElement).load(); (vid as HTMLVideoElement).play().catch(()=>{});}catch(e){}
        }
      }catch(e){}
    }
    // run after load and shortly after mount
    window.addEventListener('load', setHeroVideo);
    const t = setTimeout(setHeroVideo, 200);
    setHeroVideo();
    return ()=>{window.removeEventListener('load', setHeroVideo); clearTimeout(t)};
  },[]);
  return null;
}

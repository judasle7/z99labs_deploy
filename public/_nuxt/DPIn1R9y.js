import{_ as i,u as c}from"./BbRkUZcB.js";import{l as d,r as x,n as u,p as e,q as a,e as s,A as m,B as g,C as f,H as b,m as h,G as _}from"./CNrwSWa_.js";const y={class:"flex justify-center items-center px-3 w-screen h-screen bg-app bg-no-repeat bg-cover"},w={class:"w-[96px] h-[30px] mx-auto mb-6"},v={class:"flex justify-center items-center mb-6"},k={type:"submit",class:"inline-flex items-center h-[32px] rounded-[8px] border border-solid border-[#44E48E] py-1.5 px-2 mx-auto"},U=d({__name:"login",setup(E){const o=c(),n=x(""),r=()=>{localStorage.setItem("token",n.value),_("/")};return(B,t)=>{const l=i;return h(),u("div",y,[e("form",{onSubmit:b(r,["prevent"]),class:"flex flex-col text-white bg-[#1C1C1E] w-[534px] h-[230px] max-w-full rounded-[12px] border-solid border-[#28282A] border py-5 px-4"},[e("div",w,[a(l,{src:`${s(o).baseURL}/images/logo.png`,alt:"logo",width:"96px",height:"30px",loading:"lazy"},null,8,["src"])]),e("div",v,[a(l,{src:`${s(o).baseURL}/images/leaf.png`,alt:"leaf",width:"24px",height:"24px",loading:"lazy"},null,8,["src"]),t[1]||(t[1]=e("h2",{class:"mx-2 uppercase font-bold text-[18px]"},"Enter your key",-1)),a(l,{src:`${s(o).baseURL}/images/leaf.png`,alt:"leaf",width:"24px",height:"24px",loading:"lazy"},null,8,["src"])]),m(e("input",{type:"text",class:"bg-[#28282B] py-1 px-2 rounded-[8px] text-center mb-6 focus:outline-none focus:placeholder-transparent",placeholder:"...","onUpdate:modelValue":t[0]||(t[0]=p=>f(n)?n.value=p:null)},null,512),[[g,s(n)]]),e("button",k,[a(l,{src:`${s(o).baseURL}/images/bolt.png`,alt:"bolt",width:"14px",height:"14px",loading:"lazy"},null,8,["src"]),t[2]||(t[2]=e("span",{class:"ml-1 uppercase font-bold text-[12px] leading-[20px]"},"Enter now!",-1))])],32)])}}});export{U as default};
import React from "react";

const App = () => {
  return (
    <div className="bg-red-300 text-center h-screen w-screen relative">
      {/* <h1>{import.meta.env.VITE_CHATGPTKEY}</h1> */}
      <div className="container absolute border-red-500 border-2 w-[30%]  h-[40%] left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rounded-xl">
      <h1 className="text-2xl font-bold p-1">Umashnakar UIkey</h1>
      <h2>Web Devlopper</h2>

<p className="px-3 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsa placeat provident inventore totam maxime temporibus ab, ut similique obcaecati facere, labore velit corporis illo? Ullam fuga eum consequatur pariatur?</p>
      <button className="px-4 py-2 bg-slate-700 text-white text-2xl rounded mt-6">Contact Me  </button>
      </div>
    
    </div>
  );
};

export default App;

// fisrt type of export
// only single export default
// at the import time of default we can chang the name of exports

// second type od export is const export
// export const a=a;
// export const b=b;
// import {a,b} from "/main.jsx"


// reconcialation is done with the help of vertual dom 
// there if two type 
// rerander  and updation
// in rerander => update all  pag when there are majoraty changes 
// in update =>in this minary change occure and things are change ,not all page  

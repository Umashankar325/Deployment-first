import React from "react";

const App = () => {
  return (
    <div className="bg-red-300">
      <h1>{import.meta.env.VITE_CHATGPTKEY}</h1>
      <div className="text-2xl">App</div>
      <div>App</div>
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

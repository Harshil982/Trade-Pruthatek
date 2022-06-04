import React from "react";


const DateComp = () => {

  const handledemo = () =>{
    console.log("first")
  }
  

  return (
    <>
      <input
        type="date"
        className="w-100 px-3 py-1 border rounded text-muted"
        onChange={handledemo}
      />
    </>
  );
};

export default DateComp;

import React, { createContext, useState } from 'react'

export const myContext = createContext("");

function Context({children}) {

    const [src, setSrc] = useState("");
    const [data, setData] = useState("테스트용1");
    const [hehe, setHehe] = useState("테스트용2");

    const testNum = () => {
        console.log("유후")
    }

  return (

    <myContext.Provider value={{src, setSrc, data, setData, hehe, setHehe, testNum}}>
        {children}
    </myContext.Provider>

  )

}

export default Context

//데이터를 중앙에서 정리하는 
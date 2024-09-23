import { createContext, useEffect, useState } from "react";


export let UserContext= createContext();



export default function UserContextProvider({children}) {

const [usereData, setUsereData] = useState(null);


useEffect(()=> {

   if (localStorage.getItem('userToken')!==null) {
      setUsereData(localStorage.getItem('userToken'))
   }
  
},[])

  return <UserContext.Provider value={{usereData, setUsereData}}>


            {children}


  </UserContext.Provider>


}

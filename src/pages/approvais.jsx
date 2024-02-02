import React,{useContext} from 'react'
import HeaderTitle from "../components/general/headerTitle";

const Approvais = () => {

  const {setHeaderTitle} = useContext(HeaderTitle);
  setHeaderTitle("Approvais");

  

  return (
    <div className='
                relative   
                top-20
                md:left-56
                md:w-[1300px]
                w-full
                bg-red-500
                z-5
                p-3
          
    '>
        approvaisJJJJJJJ
    </div>
  )
}

export default Approvais
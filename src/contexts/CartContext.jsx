import React ,{createContext , useState} from 'react'

export const useCart = createContext()


export const UseCartContext = (props)=>{

    const [Items, setItems] = useState([])
    const [cartCount, setcartCount] = useState(0)
    const [showCartModal, setshowCartModal] = useState(false)

    
    return(
        <useCart.Provider value={{Items , setItems , cartCount , setcartCount , showCartModal , setshowCartModal}}>
        {props.children}
        </useCart.Provider>
    )
}
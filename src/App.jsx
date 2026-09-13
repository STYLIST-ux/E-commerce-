import { useState} from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import CartDrawer from "./components/CartDrawer"



const App = () => {

  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || []
  })
  
  return (
    <>
      <Header 
        setIsCartOpen={setIsCartOpen}
        cart={cart}
        setCart={setCart}
      />
      
      <Hero 
        cart={cart}
        setCart={setCart}
        setIsCartOpen={setIsCartOpen}
      />

      <CartDrawer 
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cart={cart}
        setCart={setCart}
      />
    </>
  )
}

export default App;
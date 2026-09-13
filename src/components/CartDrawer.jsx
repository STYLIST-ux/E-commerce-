import { X } from "lucide-react"
import { useEffect, useState } from "react"

const CartDrawer = ({ isCartOpen, setIsCartOpen,cart, setCart }) => {

  const [customerName, setCustomerName] = useState("")
  const [customerLocation, setCustomerLocation] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")
  const [ orderNote, setOrderNote ] = useState("")
  const [orderSent, setOrderSent] = useState(false)
    
  function increaseQuantity(id) {
    const updatedCart = cart.map(item => {
      if(item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }else return item
    })
    setCart(updatedCart)
  }

  function decreaseQuantity(id) {
    const updatedCart = cart.map(item => {
      if(item.id === id) {
        return {
          ...item,
          quantity: item.quantity > 1 ? item.quantity - 1 : 1
        }
      }else return item
    })
    setCart(updatedCart)
  }

  function removeItem(id) {
    const updatedCart = cart.filter(item => item.id !== id)
    setCart(updatedCart)
  }


  const subtotal = cart.reduce((total,item) => {
    return total + item.price * item.quantity
  },0) 

  const [checkoutOpen, setCheckoutOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem("cart",JSON.stringify(cart))
  },[cart])

  function sendOrder() {

    if (!customerName) {
      alert("Please enter your name")
      return
    }

    if (!customerLocation) {
      alert("Please enter your delivery location")
      return
    }

    if (!/^\d{10,15}$/.test(customerPhone)) {
      alert("Please enter a valid phone number")
      return
    }
    
    const orderTime = new Date().toLocaleString()
    const productsText = cart.map(item =>
    ` ${item.title} * ${item.quantity} - $${(item.price 
      * item.quantity).toFixed(2)}`
    ).join("\n")
    
    const message = `
       NEW STYLIST ORDER
        
      Customer: ${customerName}
      Location: ${customerLocation}
      Phone: ${customerPhone}
      Note: ${orderNote || "None"}
        
      PRODUCTS
      ${productsText}

        
      Total: $${subtotal.toFixed(2)}
      Order time: ${orderTime}
      `

    const phoneNumber = "2348066659871"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setOrderSent(true)
    setCustomerName("")
    setCustomerLocation("")
    setCustomerPhone("")
    setOrderNote("")
  }
  
  return (
    <>
      <div 
        onClick={() => setIsCartOpen(false)}
        className={`
        fixed
        inset-0
        bg-[rgba(0, 0, 0, 0.65)]
        backdrop-blur-[4px]
        z-90
        transition-opacity
        duration-[0.25s]
        ease
        ${isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}>
        {/**
         * cart drawer backdrop
         cart drawer
         *
         */}
      </div>
      <aside className={`
        fixed
        top-0
        right-0
        bottom-0
        w-full
        max-w-[400px]
        bg-[#0d1117]
        border-l
        border-l-[var(--border)]
        z-100
        [transition:transform_0.5s_cubic-bezier(0.16, 1, 0.3, 1)]
        flex
        flex-col
        shadow-[-12px_0_32px_rgba(0, 0, 0, 0.6)]
        ${isCartOpen ? "translate-x-0" : "translate-x-full"}
        `}>
        <div className="
          p-5
          border-b
          border-b-[var(--border)]
          flex
          justify-between
          items-center
          ">
          <h3 className="
            text-[1rem]
            font-bold
            ">Your STYLIST Cart</h3>
          <button
            onClick={() => setIsCartOpen(false)}
            className="
            bg-none
            border-none
            text-[var(--text-muted)]
            cursor-pointer
            text-[1.25rem]
            ">
            <X />
          </button>
        </div>
    
        <div className="
          flex-1
          overflow-y-auto
          p-5
          flex
          flex-col
          gap-[1rem]
          ">
          {/**
           * <!-- Dynamic cart items -->
           cart-items 
           *
           */}

          {cart.length === 0 ? (
            <p className="
              text-center
              text-[var(--text-muted)]
              text-[0.85rem]
              my-auto
              ">
              Your shopping cart is currently empty.
            </p>
          ) : (
            cart.map(item => {
              return (
              <div className="
                flex
                gap-[0.85rem]
                bg-[rgba(18, 22, 29, 0.5)]
                border
                border-[var(--border)]
                rounded-[var(--radius-md)]
                p-[0.75rem]
                relative 
                ">
                <img className="
                  w-[60px]
                  h-[60px]
                  object-cover
                  rounded-[var(--radius-sm)]
                  bg-[#161b22]
                  " src={item.image} alt={item.title} />
                <div className="
                  flex-1
                  flex-col
                  flex
                  justify-between
                  ">
                  <div>
                    <div className="
                      font-bold
                      text-[0.85rem]
                      ">{item.title}</div>
                    <div className="
                        text-[var(--text-muted)]
                      text-[0.8rem]
                      ">${item.price}</div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="
                      absolute
                      top-3
                      right-3
                      flex
                      items-center
                      justify-center
                      w-7
                      h-7
                      rounded-[var(--radius-sm)]
                      border
                      border-[var(--border)]
                      bg-[rgba(240,246,252,0.04)]
                      text-[var(--text-muted)]
                      cursor-pointer
                      transition-all
                      duration-150
                      hover:text-[var(--text)]
                      hover:bg-[rgba(240,246,252,0.08)]
                      hover:border-[rgba(240,246,252,0.15)]
                      ">
                      <X />
                    </button>
                  </div>
                  <div className="
                    flex
                    items-center
                    gap-[0.5rem]
                    mt-[0.3rem]
                    ">
                    <button 
                      onClick={() => decreaseQuantity(item.id)}
                      className="
                      bg-[rgba(240, 246, 252, 0.05)]
                      border
                      border-[var(--border)]
                      w-[22px]
                      h-[22px]
                      rounded-[4px]
                      flex
                      items-center
                      justify-center
                      cursor-pointer
                      text-[0.8rem]
                      ">-</button>
                    <span className="
                        text-[0.8rem]
                      font-bold
                      ">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="
                      bg-[rgba(240, 246, 252, 0.05)]
                      border
                      border-[var(--border)]
                      w-[22px]
                      h-[22px]
                      rounded-[4px]
                      flex
                      items-center
                      justify-center
                      cursor-pointer
                      text-[0.8rem]
                      ">+</button>
                  </div>
                </div>
              </div>
              )
            })
          )}
        </div>
    
        <div className="
          p-5
          border-t
          border-t-[var(--border)]
          bg-[rgba(7, 9, 12, 0.9)]
          ">
          {/**
           * footer
           *
           */}
          <div className="
            flex
            justify-between
            text-[0.85rem]
            text-[var(--text-muted)]
            mb-[0.5rem]
            ">
            <span>Subtotal</span>
            <span className="cart-subtotal">${subtotal.toFixed(2)}</span>
          </div>
          <div className="
            text-[0.85rem]
            mb-[0.5rem]
            text-[var(--text-muted)]
            flex
            justify-between
            items-center
            ">
            <span>Estimated Shipping</span>
            <span>Free</span>
          </div>
          <div className="
            text-[var(--text)]
            font-bold
            text-[1rem]
            mt-3
            pt-3
            border-t
            border-t-[var(--border)]
            flex
            justify-between
            items-center
            ">
            <span>Total</span>
            <span className="cart-total">${subtotal.toFixed(2)}</span>
          </div>
          <button 
            onClick={() => {
              setOrderSent(false)
              setCheckoutOpen(true)
            }}
            className="
            w-full
            text-black
            bg-[var(--accent)]
            border-none
            p-[0.85rem]
            rounded-[var(--radius-md)]
            text-[0.9rem]
            font-bold
            cursor-pointer
            mt-4
            transition-filter
            duration-[0.15s]
            ease
            hover:brightness-[1.1]
            ">Proceed to Checkout</button>
        </div>
      </aside>
      
      {checkoutOpen && (
        <div className="
          fixed
          inset-0
          z-[110]
          flex
          items-center
          justify-center
          bg-[rgba(0,0,0,0.7)]
          backdrop-blur-[6px]
          p-5
        ">
          {orderSent ? (
          <>
            <div className="absolute inset-0 pointer-events-none">
              <span className="
                absolute
                top-1/2
                left-1/2
                text-[var(--accent)]
                [animation:burst_0.8s_ease-out_forwards]
                " style={{
                  "--x" : "-120px",
                  "--y" : "-100px"
                }}>âś¦</span>
              <span
                className="
                  absolute
                  top-1/2
                  left-1/2
                  text-[var(--accent)]
                  opacity-0
                  [animation:burst_0.8s_ease-out_forwards]
                "
                style={{
                  "--x": "120px",
                  "--y": "-100px"
                }}
              >
                âś¦
              </span>
              
              <span
                className="
                  absolute
                  top-1/2
                  left-1/2
                  text-[var(--accent)]
                  opacity-0
                  [animation:burst_0.8s_ease-out_forwards]
                "
                style={{
                  "--x": "-120px",
                  "--y": "100px"
                }}
              >
                âś¦
              </span>
              
              <span
                className="
                  absolute
                  top-1/2
                  left-1/2
                  text-[var(--accent)]
                  opacity-0
                  [animation:burst_0.8s_ease-out_forwards]
                "
                style={{
                  "--x": "120px",
                  "--y": "100px"
                }}
              >
                âś¦
              </span>
            </div>
            <div className="
              relative
              w-full
              max-w-[450px]
              bg-[#0d1117]
              border
              border-[var(--border)]
              rounded-[var(--radius-lg)]
              shadow-[0_20px_60px_rgba(0,0,0,0.7)]
              p-8
              text-center
            ">
              <div className="
                w-16
                h-16
                mx-auto
                mb-5
                rounded-full
                bg-[var(--accent-glow)]
                border
                border-[var(--accent)]
                flex
                items-center
                justify-center
                text-2xl
              ">
                âś“
              </div>
            
              <h2 className="text-xl font-bold mb-2">
                Order Ready đźŽ‰
              </h2>
            
              <p className="text-sm text-[var(--text-muted)]">
                Your order details have been prepared and opened in WhatsApp.
              </p>
              <button
                onClick={() => setCheckoutOpen(false)}
                className="
                  w-full
                  mt-6
                  p-3
                  rounded-[var(--radius-md)]
                  bg-[var(--accent)]
                  text-black
                  font-bold
                  cursor-pointer
                  hover:brightness-[1.1]
                "
              >
                Done
              </button>
            </div>
          </>
          ) : (
          <div className="
            w-full
            max-w-[450px]
            bg-[#0d1117]
            border
            border-[var(--border)]
            rounded-[var(--radius-lg)]
            shadow-[0_20px_60px_rgba(0,0,0,0.7)]
            p-6
          ">
            <div className="
              flex
              items-center
              justify-between
              pb-4
              border-b
              border-[var(--border)]
            ">
              <h2 className="text-lg font-bold">
                Complete Your Order
              </h2>
      
              <button
                onClick={() => setCheckoutOpen(false)}
                className="
                  flex
                  items-center
                  justify-center
                  w-8
                  h-8
                  rounded-[var(--radius-sm)]
                  border
                  border-[var(--border)]
                  bg-[rgba(240,246,252,0.04)]
                  text-[var(--text-muted)]
                  cursor-pointer
                  transition-all
                  duration-150
                  hover:text-[var(--text)]
                  hover:bg-[rgba(240,246,252,0.08)]
                "
              >
                <X size={17} />
              </button>
            </div>
            <div className="mt-5">
              <label className="
                block
                text-[0.8rem]
                font-semibold
                text-[var(--text-muted)]
                mb-2
              ">
                Full Name
              </label>
            
              <input
                type="text"
                placeholder="Enter your name"
                value={customerName}
onChange={(e) => setCustomerName(e.target.value)}
                className="
                  w-full
                  bg-[rgba(240,246,252,0.04)]
                  border
                  border-[var(--border)]
                  rounded-[var(--radius-md)]
                  p-3
                  text-[var(--text)]
                  outline-none
                  focus:border-[var(--border-focus)]
                "
              />
            </div>
            <div className="mt-4">
              <label className="
                block
                text-[0.8rem]
                font-semibold
                text-[var(--text-muted)]
                mb-2
              ">
                Delivery Location
              </label>
            
              <input
                type="text"
                placeholder="Enter your delivery location"
                value={customerLocation}
onChange={(e) => setCustomerLocation(e.target.value)}
                className="
                  w-full
                  bg-[rgba(240,246,252,0.04)]
                  border
                  border-[var(--border)]
                  rounded-[var(--radius-md)]
                  p-3
                  text-[var(--text)]
                  outline-none
                  focus:border-[var(--border-focus)]
                "
              />
              </div>
            <div className="mt-4">
              <label className="
                block
                text-[0.8rem]
                font-semibold
                text-[var(--text-muted)]
                mb-2
              ">
                Phone Number
              </label>
            
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="
                  w-full
                  bg-[rgba(240,246,252,0.04)]
                  border
                  border-[var(--border)]
                  rounded-[var(--radius-md)]
                  p-3
                  text-[var(--text)]
                  outline-none
                  focus:border-[var(--border-focus)]
                "
              />
              </div>
              <div className="mt-4">
                <label className="
                  block
                  text-[0.8rem]
                  font-semibold
                  text-[var(--text-muted)]
                  mb-2
                ">
                  Order Note
                </label>
              
                <textarea
                  placeholder="Any special instructions? (Optional)"
                  value={orderNote}
                  onChange={(e) => setOrderNote(e.target.value)}
                  rows="3"
                  className="
                    w-full
                    bg-[rgba(240,246,252,0.04)]
                    border
                    border-[var(--border)]
                    rounded-[var(--radius-md)]
                    p-3
                    text-[var(--text)]
                    outline-none
                    resize-none
                    focus:border-[var(--border-focus)]
                  "
                />
              </div>
              <button
                onClick={sendOrder}
                className="
                  w-full
                  mt-5
                  p-3
                  rounded-[var(--radius-md)]
                  bg-[var(--accent)]
                  text-black
                  font-bold
                  cursor-pointer
                  hover:brightness-[1.1]
                "
              >
                Send Order on WhatsApp
              </button>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default CartDrawer;
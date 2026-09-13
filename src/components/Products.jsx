import { useState } from "react"
import products from '../data/products.js'
import { Star, X } from "lucide-react"

function Products( { cart , setCart, setIsCartOpen ,search}) {

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false)
  

  function handleCart(product) {
    const existingItem = cart.find(item => item.id === product.id)


    if(existingItem) {
      const updatedItem = cart.map(item => {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      })
      setCart(updatedItem)
    }else {
      setCart([
      ...cart,{
        ...product,
        quantity: 1
      }
    ])
    }
    setIsCartOpen(true)
  }

  const filteredProducts = products.filter(item => {
    return item.title.toLowerCase().includes(search.toLowerCase())
  })
  
  return (
    <div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
        {/**
         * products grid container 
         *product card
         *
         */}
        {filteredProducts.map(product => {
          return (
            <article key={product.id} className="
              bg-[var(--card-bg)]
              [backdrop-filter:var(--glass-blur)]
              border
              border-[var(--border)]
              rounded-[var(--radius-lg)]
              shadow-[var(--glass-shadow)]
              flex
              flex-col
              [transition:border-color_0.2s_ease,background-color_0.2s_ease]
              relative
              hover:border-[rgba(227, 179, 65, 0.3)]
              hover:bg-[var(--card-bg-hover)] 
              group">
                <div className="
                  w-full 
                  h-[180px] 
                  bg-[rgba(7, 9, 12, 0.6)]
                  rounded-t-[var(--radius-md)] 
                  rounded-r-[var(--radius-md)]
                  overflow-hidden
                  mb-[0.85rem]
                  relative
                  ">
                  <img className="
                    w-full 
                    h-full 
                    object-cover 
                    transition-transform
                    duration-300
                    group-hover:scale-[1.04]" src={product.image} alt={product.title} loading="lazy" />
                  <button 
                    onClick={() => {
                      setSelectedProduct(product)
                      setIsQuickViewOpen(true)
                    }} 
                    className="
                    absolute
                    bottom-0.5
                    left-[50%]
                    translate-x-[-50%]
                    md:translate-y-[10px]
                    opacity-100
                    md:opacity-0
                    bg-[rgba(7, 9, 12, 0.9)]
                    [backdrop-filter:blur(8px)]
                    border
                    border-[var(--border)]
                    text-[var(--text)]
                    py-[0.35rem]
                    px-[0.75rem]
                    rounded-[var(--radius-sm)]
                    cursor-pointer
                    text-[0.75rem]
                    font-light
                    [transition:all_0.2s_ease]
                    md:group-hover:opacity-100
                    md:group-hover:translate-y-0
                    ">Quick View</button>
                </div>
                <div className="
                  px-4
                  flex
                  justify-between
                  items-center
                  mb-[0.35rem]
                  ">
                  <span className="
                    text-[0.65rem]
                    text-[var(--text-muted)]
                    uppercase
                    tracking-[0.05em]
                    font-bold
                    ">{product.category}</span>
                  <span className="
                    flex 
                    items-center 
                    gap-[0.2rem]
                    text-[0.75rem]
                    text-[var(--accent)]
                    ">
                    <Star size={14}/>
                    {product.rating}</span>
                </div>
                <h3 className="
                  text-[0.9rem]
                  font-medium
                  text-[var(--text)]
                  px-4
                  mb-3
                  leading-[1.3]
                  ">{product.title}</h3>
                <div className="
                  flex
                  justify-between
                  items-center
                  mt-auto
                  px-4
                  py-2
                  border-t
                  border-t-[var(--border)]
                  ">
                  <span className="
                    text-[0.95rem]
                    font-bold
                    text-[var(--text)]
                    ">${product.price}</span>
                  <button 
                    onClick={() => handleCart(product)}
                    className="
                    bg-[rgba(240, 246, 252, 0.06)]
                    text-[var(--text)]
                    border
                    border-[var(--border)]
                    py-[0.45rem]
                    px-[0.75rem]
                    rounded-[var(--radius-sm)]
                    text-[0.78rem]
                    font-medium
                    cursor-pointer
                    transition-all
                    duration-[0.15s]
                    ease
                    hover:bg-[var(--accent)]
                    hover:text-black
                    border-[var(--accent)]
                    ">Add to Cart</button>
                </div>
              </article>
          )
        })}
      </div>
      {selectedProduct && (
        <div 
          onClick={() => setIsQuickViewOpen(false)}
          className={`
          fixed
          inset-0
          bg-[rgba(0, 0, 0, 0.8)]
          backdrop-blur-[6px]
          z-100
          transition-opacity
          duration-[0.2s]
          ease
          flex
          items-center
          justify-center
          p-4
          ${isQuickViewOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `}>
          {/**
           * modal backdrop
           * modal card
           *
           */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="
            bg-[#0d1117]
            border
            border-[var(--border)]
            rounded-[var(--radius-lg)]
            max-w-[550px]
            w-full
            p-6
            shadow-[0_20px_40px_rgba(0,0,0,0.8)]
            relative
            flex
            md:flex-col
            gap-[1.5rem]
            ">
            <button
              onClick={() => setIsQuickViewOpen(false)}
              className="
              absolute
              top-3
              right-3
              md:top-8
              md:right-8
              bg-none
              border-none
              text-[var(--text-muted)]
              cursor-pointer
              text-[1.25rem]
              ">
              <X />
            </button>
            <img className="
              w-[180px]
              h-[180px]
              md:w-full
              md:h-full
              object-cover
              rounded-[var(--radius-md)]
              bg-[#161b22]
              " src={selectedProduct.image} alt="" />
            <div className="
              flex-1
              flex
              flex-col
              gap-[0.5rem]
              ">
              <span className="
                text-[0.65rem]
                text-[var(--text-muted)]
                uppercase
                tracking-[0.05em]
                font-bold
                ">{selectedProduct.category}</span>
              <h3 className="
                text-[1.1rem]
                font-semibold
                text-[var(--text)]
                leading-[1.3]
                
                "  style={{
          fontSize: "1.1rem"}}>{selectedProduct.title}</h3>
              <div className="
                  flex
                  items-center
                  gap-1
                  text-[0.8rem]
                  text-[var(--accent)]
                ">
                <Star size={14} fill="currentColor"/>
                {selectedProduct.rating}
              </div>
              <p className="
                text-[0.82rem]
                text-[var(--text-muted)]
                leading-[1.5]
                " >{selectedProduct.description}</p>
              <div style={{
          marginTop: "auto",
          display: "flex",
          justifyContent: "space-between",
            alignItems: "center" ,
          paddingTop: "0.5rem"}}>
                <span className="product-price"  style={{fontSize: "1.1rem"}}>${selectedProduct.price}</span>
                <button 
                  onClick={() => handleCart(selectedProduct)}
                  className="
                  bg-[rgba(240, 246, 252, 0.06)]
                    text-[var(--text)]
                    border
                    border-[var(--border)]
                    py-[0.45rem]
                    px-[0.75rem]
                    rounded-[var(--radius-sm)]
                    text-[0.78rem]
                    font-medium
                    cursor-pointer
                    transition-all
                    duration-[0.15s]
                    ease
                    hover:bg-[var(--accent)]
                    hover:text-black
                    border-[var(--accent)]
                  ">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Products;
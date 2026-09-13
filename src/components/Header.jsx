import { useState } from "react"
import { X } from "lucide-react"


function Header({ setIsCartOpen, cart }) {

  const [menuOpen , setMenuOpen ] = useState(false)

  const cartCount = cart.reduce((total, item) => {
    return total + item.quantity
  }, 0)
  
  return (
    <>
      {/*  <!-- Sidebar Drawer Navigation -->*/}
      {/**
       * backdrop 
       *
       */}
      <div onClick={() => setMenuOpen(false)} className={`fixed inset-0 bg-[rgba(0, 0, 0, 0.75)] backdrop-blur-[4px] z-[95] ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} [transition:opacity_0.25s_ease]`}></div>
      <aside className={`block md:hidden fixed top-0 left-0 bottom-0 w-[280px] bg-[#0d1117] z-[100] border-r border-[var(--border)] ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col p-6 `}>
        {/**
         * menu-header
         *
         */}
        <div className="flex justify-between items-center mb-8 pb-3 border-b border-[var(--border)]">
          <span style={{
            fontWeight: 800,
            fontSize: "1.1rem",
            letterSpacing: "0.05em",
            color: "var(--accent)"
          }}>MENU</span>
          <button className="cart-close" 
            onClick={() => setMenuOpen(false)}>
            <X />
          </button>
        </div>
        {/**
         * menu links
         *
         */}
        <ul className="list-none flex flex-col gap-5">
          <li><a onClick={() => setMenuOpen(false)} className="text-[var(--text)] decoration-0 text-[1rem] font-bold" href="#">Store Home</a></li>
          <li><a onClick={() => setMenuOpen(false)} className="text-[var(--text)] decoration-0 text-[1rem] font-bold" href="#deals">Today's Deals</a></li>
          <li><a onClick={() => setMenuOpen(false)} className="text-[var(--text)] decoration-0 text-[1rem] font-bold"  href="#products">All Products</a></li>
          <li><a onClick={() => setMenuOpen(false)}  className="text-[var(--text)] decoration-0 text-[1rem] font-bold" href="#">Customer Service</a></li>
          <li><a onClick={() => setMenuOpen(false)} className="text-[var(--text)] decoration-0 text-[1rem] font-bold" href="#">Account & Orders</a></li>
        </ul>
      </aside>

      {/*<!-- Amazon-Style Header -->*/}
      <header className="sticky top-0 z-50 bg-[rgba(7,9,12,0.95)] [backdrop-filter:var(--glass-blur)] border border-[var(--border)]">
        {/* nav container*/}
        <div className="max-w-[1200px] mx-auto p-[0.75rem_1.25rem_0.5rem_1.25rem] flex flex-col gap-[0.65rem]">
          
          {/*<!-- Top Row: Hamburger + STYLIST Brand Logo + Nav Links + Cart -->*/}
          <div className="flex justify-between items-center gap-4">
            
            <div className="flex items-center gap-[0.85rem]">
              {/*<!-- Hamburger Button beside logo -->*/}
              <button 
                onClick={() => setMenuOpen(true)}
                className="bg-none text-[var(--text)] cursor-pointer flex flex-col justify-center gap-1 p-[0.25rem] rounded-[var(--radius-sm)]" aria-label="Open Navigation Menu">
                <span className="hover:bg-[var(--accent)] block w-[20px] h-[2px] bg-[var(--text)] rounded-[2px] transition-all duration-200 ease-in-out"></span>
                <span className="hover:bg-[var(--accent)] block w-[20px] h-[2px] bg-[var(--text)] rounded-[2px] transition-all duration-200 ease-in-out"></span>
                <span className="hover:bg-[var(--accent)] block w-[20px] h-[2px] bg-[var(--text)] rounded-[2px] transition-all duration-200 ease-in-out"></span>
              </button>
              
                {/*<!-- STYLIST Logo with Amazon Smile Arrow -->*/}
              <a href="#" className="flex flex-col items-start no-underline">
                <svg className="w-[135px] h-[32px] block" viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text 
                    x="0" 
                    y="22" 
                    fontFamily="'Inter', sans-serif" 
                    fontWeight="900"
                    fontSize="24" 
                    fill="#F0F6FC" 
                    letterSpacing="1.5">STYLIST</text>
                  <path 
                    d="M 12 26 Q 70 36 132 23" 
                    stroke="#E3B341" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    fill="none" />
                  <path 
                    d="M 126 20 L 134 23 L 130 28" 
                    fill="#E3B341" 
                    stroke="#E3B341"
                    strokeWidth="1.5" 
                    strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <ul className="hidden md:flex  gap-6">
              <li><a href="#" className="hover:text-[var(--text)] text-[var(--text-muted)] no-underline text-[0.88rem] font-medium transition-colors duration-150 ease">Store</a></li>
              <li><a href="#deals" className="hover:text-[var(--text)] text-[var(--text-muted)] no-underline text-[0.88rem] font-medium transition-colors duration-150 ease">Deals</a></li>
              <li><a href="#products" className="hover:text-[var(--text)] text-[var(--text-muted)] no-underline text-[0.88rem] font-medium transition-colors duration-1500 ease">Catalog</a></li>
            </ul>

            {/**
             * cart button
             *
             */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="bg-[rgba(240, 246, 252, 0.05)] border border-1 border-[var(--border)] text-[var(--text)] rounded-[var(--radius-md)] cursor-pointer flex items-center gap-0.5 text-[0.85rem] font-bold  p-2 [transition:background-color_0.15s_ease,border-color_o.15s_ease] hover:bg-[rgba(240, 246, 252, 0.1)] border-[var(--border-focus)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              Cart
              {/**
               * badge
               *
               */}
              <span className="bg-[var(--accent)] text-black text-[0.7rem] font-extrabold px-[0.45rem] py-[0.15rem] rounded-[10px]">{cartCount}</span>
            </button>
          </div>

          <div className="w-full">
            <div className="relative w-full flex">
              <svg className="absolute left-[0.85rem] top-[50%] translate-y-[-50%] w-[16px] h-[16px] stroke-[var(--text-muted)]" viewBox="0 0 24 24" fill="none" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input className="w-full bg-[rgba(18, 22, 29, 0.9)] border border border-[var(--border)] p-[0.65rem_1rem_0.65rem_2.5rem] text-[var(--text)] rounded-[var(--radius-md)] text-[0.9rem] outline-none [transition:border-color_0.15s_ease,background-color_0.15s_ease] focus:border-[var(--border-focus)] bg-[rgba(18, 22, 29, 0.98)] shadow-[0 0 0 2px var(--accent-glow)]" type="text" placeholder="Search STYLIST store, audio, desk gear..." />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;
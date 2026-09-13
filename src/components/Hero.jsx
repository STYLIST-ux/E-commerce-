import Products from "./Products"
import { useState } from "react"


const details = [
  {
    badge: "Limited Deal",
    title: "Desk Setup Bundle",
    desc: "Save 15% when matching an Ultrawide Desk Mat with any Mechanical Keyboard"
  },
  {
    badge: "STYLIST Prime",
    title: "Express Shipping",
    desc: "Complimentary priority shipping on all orders over $100."
  },
  {
    badge: "New Arrival",
    title: "Magnetic Power Hub",
    desc: "3-in-1 modular fast-charging stand in matte obsidian metal."
  }
]


function Hero({ cart, setCart, setIsCartOpen,search}) {
  
  const [category, setCategory] = useState("all")
  
  return (
    <main className="max-w-[1200px] mx-auto px-8 py-7 flex flex-col gap-[2.5rem]">
      {/**
     * main container
     *
     */}
      <section className ="
        bg-[var(--card-bg)] 
        [backdrop-filter:var(--glass-blur)] 
        border border-[var(--border)] 
        rounded-[var(--radius-lg)] 
        py-10 px-8 shadow-[var(--glass-shadow)]
        relative overflow-hidden 
        before:content-[''] 
        before:absolute 
        before:top-0 
        before:left-0 
        before:w-full 
        before:h-[2px] 
        before:bg-[linear-gradient(90deg,_transparent,_var(--accent),_transparent)]">
        {/**
         *Hero
         *
         */}
        <div className="max-w-[580px]">
          {/**
           * hero tag
           *
           */}
          <div className="
            text-[0.72rem] 
            uppercase 
            tracking-[0.15em]
            text-[var(--accent)]
            font-bold
            mb-3">Curated Dark Aesthetic</div>
          <h1 className="
            text-[2.25rem]
            tracking-[-0.02em]
            font-extrabold
            leading-[1.2]
            mb-4">Engineered essentials for modern creators.</h1>
          <p className="
            text-[var(--text-muted)]
            text-[0.95rem]
            leading-[1.6]
            mb-[1.75rem]">Explore high-fidelity audio, precision desk gear, smart wearables, and sleek everyday items.</p>
          <a href="#products" className="
            bg-[var(--accent)]
            text-black
            border-none
            py-[0.75rem]
            px-[1.35rem]
            rounded-[var(--radius-md)]
            cursor-pointer
            font-bold
            text-[0.88rem]
            [transition:transform_0.15s_ease,_filter_0.15s_ease]
            no-underline
            inline-block
            hover:translate-y-[-1px]
            hover:brightness-[1.1]">Explore Catalog</a>
        </div>
    </section>
      {/**
       * banner grid
       * deal card
       * deal badge, deal title, deal description 
       *
       */}
      <section className="
        grid 
        md:grid-cols-3 
        grid-cols-1
        gap-5">
        {details.map(item => {
          return (
            <div key={item.title} className="
              bg-[rgba(18, 22, 29, 0.5)]
              border
              border-[var(--border)]
              rounded-[var(--radius-md)]
              p-5
              flex
              flex-col
              gap-[0.4rem]">
              <span className="
                uppercase
                text-[0.65rem]
                tracking-[0.08em]
                font-bold
                text-[var(--accent)]
                bg-[var(--accent-glow)]
                p-[0.3rem]
                rounded-[var(--radius-sm)]
                w-fit
                border
                border-[rgba(227, 179, 65, 0.25);]
                ">{item.badge}</span>
              <div className="
                text-[0.95rem]
                font-bold">{item.title}</div>
              <p className="
                text-[0.8rem]
                text-[var(--text-muted)]">{item.desc}</p>
            </div>
          )
        })}
      </section>
      {/**
       * products 
       *filter bar
       */}
      <section>
        <div className="
          flex
          justify-between
          items-center 
          flex-wrap
          gap-4
          mb-6">
          <h2 className="
            text-[1.25rem]
            font-bold
            tracking-[-0.01em]">Curated Marketplace</h2>
          <div className="
            flex
            gap-2
            flex-wrap">
            <button className="
              bg-[rgba(18, 22, 29, 0.6)]
              border 
              border-[var(--border)]
              py-[0.45rem]
              px-[0.85rem]
              rounded-[var(--radius-md)]
              font-medium
              cursor-pointer
              [transition:all_0.15s_ease] 
              hover:text-[var(--text)]
              hover:border-[rgba(240, 246, 252, 0.15)]" data-category="all"
              onClick={() => setCategory("all")}>All Items</button>
            <button className="
              bg-[rgba(18, 22, 29, 0.6)]
              border 
              border-[var(--border)]
              py-[0.45rem]
              px-[0.85rem]
              rounded-[var(--radius-md)]
              font-medium
              cursor-pointer
              [transition:all_0.15s_ease] 
              hover:text-[var(--text)]
              hover:border-[rgba(240, 246, 252, 0.15)]"  data-category="tech" onClick={() => setCategory("tech")}>Tech & Gear</button>
            <button className="
              bg-[rgba(18, 22, 29, 0.6)]
              border 
              border-[var(--border)]
              py-[0.45rem]
              px-[0.85rem]
              rounded-[var(--radius-md)]
              font-medium
              cursor-pointer
              [transition:all_0.15s_ease] 
              hover:text-[var(--text)]
              hover:border-[rgba(240, 246, 252, 0.15)]" data-category="audio" onClick={() => setCategory("audio")}>Audio</button>
            <button className="
              bg-[rgba(18, 22, 29, 0.6)]
              border 
              border-[var(--border)]
              py-[0.45rem]
              px-[0.85rem]
              rounded-[var(--radius-md)]
              font-medium
              cursor-pointer
              [transition:all_0.15s_ease] 
              hover:text-[var(--text)]
              hover:border-[rgba(240, 246, 252, 0.15)]"  data-category="desk" onClick={() => setCategory("desk")}>Desk & Workspace</button>
            <button className="
              bg-[rgba(18, 22, 29, 0.6)]
              border 
              border-[var(--border)]
              py-[0.45rem]
              px-[0.85rem]
              rounded-[var(--radius-md)]
              font-medium
              cursor-pointer
              [transition:all_0.15s_ease] 
              hover:text-[var(--text)]
              hover:border-[rgba(240, 246, 252, 0.15)]"  data-category="lifestyle" onClick={() => setCategory("lifestyle")}>Lifestyle</button>
          </div>
        </div>
  
        {/* <!-- Products generated dynamically -->*/}
        <Products 
          cart={cart}
          setCart={setCart}
          setIsCartOpen={setIsCartOpen}
          search={search}
          category={category}
        />
    </section>
    </main>
  )
}

export default Hero;
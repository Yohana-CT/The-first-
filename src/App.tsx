import { CartSummary } from "./components/CartSummary";
import { Header } from "./components/Header";
import { ProductCard } from "./components/ProductCard";
import { products } from "./data/products";
import { useCart } from "./hooks/useCart";

function App() {
  const cart = useCart();

  return (
    <div className="min-h-screen bg-[#f7f6f2] text-[#263a32]">
      <Header itemCount={cart.itemCount} />

      <main>
        <section
          className="relative mx-auto grid max-w-7xl overflow-hidden bg-[#e8e7df] md:grid-cols-2"
          id="inicio"
        >
          <div className="flex flex-col justify-center px-7 py-14 sm:px-12 md:px-16 md:py-24">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-[#69776a]">
              MENOS, PERO MEJOR
            </p>
            <h1 className="mt-5 max-w-lg font-serif text-5xl leading-[1.08] tracking-[-0.04em] text-[#263a32] sm:text-6xl">
              Vestir sin complicaciones.
            </h1>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#656d64]">
              Prendas bien hechas, materiales nobles y diseños para acompañarte
              todos los días.
            </p>
            <a
              className="mt-8 inline-flex w-fit border-b border-[#263a32] pb-2 text-[10px] font-semibold tracking-[0.14em] transition hover:border-[#718274] hover:text-[#718274]"
              href="#coleccion"
            >
              DESCUBRE LA COLECCIÓN <span className="ml-3">↗</span>
            </a>
          </div>
          <div className="relative min-h-72 overflow-hidden md:min-h-[480px]">
            <img
              alt="Estilo relajado con prendas de tonos naturales"
              className="absolute inset-0 h-full w-full object-cover"
              fetchPriority="high"
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85"
            />
            <div className="absolute bottom-5 right-5 bg-[#f7f6f2]/90 px-4 py-3 text-[9px] tracking-[0.14em] text-[#263a32]">
              COLECCIÓN 2026
            </div>
          </div>
        </section>

        <section
          className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20"
          id="coleccion"
        >
          <div className="mb-9 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.18em] text-[#858980]">
                SELECCIÓN DE TEMPORADA
              </p>
              <h2 className="mt-2 font-serif text-3xl text-[#263a32] sm:text-4xl">
                Favoritos para siempre
              </h2>
            </div>
            <span className="hidden text-xs text-[#858980] sm:block">
              {products.length} prendas
            </span>
          </div>

          <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-7">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                onAdd={cart.addToCart}
                product={product}
              />
            ))}
          </div>
        </section>

        <section className="border-y border-[#e9e7e1] bg-[#efeee8]">
          <div className="mx-auto grid max-w-7xl gap-5 px-5 py-10 sm:grid-cols-3 sm:px-8">
            {[
              ["MATERIALES CONSCIENTES", "Algodón y lino seleccionados."],
              ["HECHO PARA DURAR", "Diseño atemporal, calidad cuidada."],
              ["ENVÍOS A TODO EL PERÚ", "Tu pedido, directo a tu puerta."],
            ].map(([title, detail]) => (
              <div className="text-center" key={title}>
                <h3 className="text-[10px] font-semibold tracking-[0.13em]">
                  {title}
                </h3>
                <p className="mt-2 text-xs text-[#777d75]">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="mx-auto max-w-xl">
            <CartSummary
              items={cart.items}
              onChangeQuantity={cart.changeQuantity}
              onRemove={cart.removeFromCart}
              subtotal={cart.subtotal}
            />
          </div>
        </section>
      </main>

      <footer className="bg-[#263a32] px-5 py-8 text-center text-[10px] tracking-[0.14em] text-white/75">
        © 2026 NÓRD · DISEÑADO PARA TODOS LOS DÍAS
      </footer>
    </div>
  );
}

export default App;

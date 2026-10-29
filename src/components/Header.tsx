interface HeaderProps {
  itemCount: number;
}

export function Header({ itemCount }: HeaderProps) {
  return (
    <>
      <div className="bg-[#263a32] px-4 py-2 text-center text-[10px] font-medium tracking-[0.16em] text-white sm:text-xs">
        ENVÍO GRATIS EN PEDIDOS DESDE S/ 250
      </div>
      <header className="border-b border-[#e9e7e1] bg-[#f7f6f2]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a
            className="font-serif text-3xl font-semibold tracking-[0.18em] text-[#263a32]"
            href="#inicio"
            aria-label="NÓRD, ir al inicio"
          >
            NÓRD
          </a>
          <nav className="hidden items-center gap-8 text-xs font-medium tracking-[0.12em] text-[#5b625c] md:flex">
            <a className="transition hover:text-[#263a32]" href="#coleccion">
              MUJER
            </a>
            <a className="transition hover:text-[#263a32]" href="#coleccion">
              HOMBRE
            </a>
            <a className="transition hover:text-[#263a32]" href="#coleccion">
              NUEVA COLECCIÓN
            </a>
          </nav>
          <a
            className="flex items-center gap-2 text-sm text-[#263a32]"
            href="#carrito"
            aria-label={`Carrito, ${itemCount} productos`}
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 8H6" />
              <circle cx="10" cy="21" r="1" />
              <circle cx="18" cy="21" r="1" />
            </svg>
            <span className="hidden sm:inline">Carrito</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#263a32] px-1 text-[10px] text-white">
              {itemCount}
            </span>
          </a>
        </div>
      </header>
    </>
  );
}

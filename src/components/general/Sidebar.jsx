import "@/styles/sidebar.css";


export default function Sidebar({
  innerRef = null,
  className = "",
  innerClassName = "",
  children,
  isOpen = false,
}) {

  return (
    <aside
      className={`
        ${className}
        sidebar-cont
        w-full h-full
        fixed inset-0 z-20
        overlay-black-50
        transition-opacity duration-300
        ${isOpen ? 
          "active opacity-100 after:opacity-50" :
          "opacity-0 pointer-events-none after:opacity-0 after:pointer-events-none"
        }
      `}
    >
      <div
        ref={innerRef}
        className={`
          ${innerClassName}
          sidebar
          h-[inherit]
          relative z-20 
          flex flex-col gap-8
          overflow-y-auto
          shadow-lg
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {children}
      </div>
    </aside>
  );
}
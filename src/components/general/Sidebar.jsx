import "@/styles/sidebar.css";


export default function Sidebar({
  innerRef = null,
  className = "",
  innerClassName = "",
  children,
  isOpen = false,
  persistent = {
    value: false,
    position: "0"
  },
  position = {
    left: true,
    right: false 
  }
}) {

  return (
    <aside
      className={`
        ${className}
        sidebar-cont
        w-full h-full
        ${persistent?.value ? "sticky" : "fixed inset-0 z-20 overlay-black-50"}
        transition-opacity duration-300
        ${isOpen ?
          `active opacity-100 after:opacity-50` :
          "w-0 opacity-0 pointer-events-none after:opacity-0 after:pointer-events-none"
        }
      `}
      style={{ top: persistent?.value ? persistent?.position : "0" }}
    >
      <div
        ref={innerRef}
        className={`
          ${innerClassName}
          sidebar
          h-screen
          ${persistent.value ?
            "static" :
            `absolute top-0 ${position?.right ? "right-0" : "left-0"}`
          }
          z-20
          flex flex-col
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
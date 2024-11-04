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
        w-full h-full fixed z-20
        overlay-black-50 after:-z-20
        transition-opacity duration-300
        ${isOpen && "active"}
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <div
        ref={innerRef}
        className={`
          ${innerClassName}
          sidebar
          h-[inherit]
          flex flex-col gap-8
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {children}
      </div>
    </aside>
  );
}
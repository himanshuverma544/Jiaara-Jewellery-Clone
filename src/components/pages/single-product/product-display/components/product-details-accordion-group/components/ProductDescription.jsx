export default function ProductDescription({ className = "" }) {

  return (
    <div className={`description ${className} px-[5vw] pb-5 md:px-[4vw]`}>
      <ul className="flex flex-col gap-5 text-xs text-gray-800 xl:text-sm">
        <li type="disc">
          Jiaara Brass Collection offers a unique appeal with a break from the traditional styles we&apos;re used to seeing. If you want to shake things up this season, consider accessorizing with brass.
        </li>
        <li type="disc">
          Perfect Gift: A perfect gift on the occasions like Wedding, Valentines, Birthdays etc. for all beautiful girls and Women!
        </li>
        <li type="disc">
          LONG LASTING & SKIN FRIENDLY: - The Earring set is made up of high-quality material that will suit all skin type and will not harm your skin even in a long run. Anti-Allergic and Safe for Skin.
        </li>
        <li type="disc">
          JEWELLERY CARE: Keep the jewellery away from direct heat, water, perfumes, deodorants, and other strong chemicals as they may react with the metal or plating. Store the jewellery when not in use in a storage box or a cloth pouch to retain its shine.
        </li>
        <li type="disc">
          There might be a minor colour variation between actual product and image shown on screen due to lighting on the photography.
        </li>
      </ul>      
    </div>
  );
}

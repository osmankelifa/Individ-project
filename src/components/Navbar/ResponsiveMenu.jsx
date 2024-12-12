import { Navlinks } from "./Navbar";

const ResponsiveMenu = () => {
  const showMenu = Navlinks.some((link) => link.showMenu);

  console.log("showMenu", showMenu);
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white  px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <div>
            <h1 className="text-sm text-slate-500"></h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {Navlinks.map((data, index) => (
              <li key={index}>
                <a href={data.link} className="mb-5 inline-block">
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default ResponsiveMenu;

export default function Navbar() {
    return (
      <nav className="bg-black text-white px-6 py-4 shadow fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">🏀 Basketball Site</h1>
          <ul className="flex space-x-6 text-sm">
            <li><a href="#basketball" className="hover:text-orange-400">Home</a></li>
            <li><a href="#rules" className="hover:text-orange-400">Rules</a></li>
            <li><a href="#teams" className="hover:text-orange-400">Teams</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  
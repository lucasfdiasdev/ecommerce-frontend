interface INavMobile {
  onClick: () => void;
}
const NavMobile: React.FC<INavMobile> = ({ onClick }) => {
  return (
    <section
      id="overlay"
      onClick={onClick}
      className="w-screen h-screen fixed top-0 left-0 right-0 bg-red-500 z-10"
    >
      <div></div>
      <nav className="px-4 sm:px-8 z-20">
        <div className="screen-max-width">
          <div>Navbar</div>
        </div>
      </nav>
    </section>
  );
};

export default NavMobile;

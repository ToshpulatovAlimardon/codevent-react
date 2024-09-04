import "./Topbar.css";

const Topbar = () => {
  return (
    <>
      {/* Topbar  */}
      <div className="topbar">
        <div className="logo">
          <span>CODEVENT</span>
        </div>
        {/* NAVBAR */}
        <input type="checkbox" id="navbar-status" />
        <label className="navbar-toggler" htmlFor="navbar-status">
          <i className="bx bx-menu"></i>
        </label>

        <div className="navbar">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#dastur">Dastur</a>
          <a href="#resume">Resume</a>
          <a href="#contacts">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Topbar;

function Icon({ type }) {
  if (type === "sun") {
    return <svg viewBox="0 0 24 24" className="icon" aria-hidden="true"><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
  }
  if (type === "moon") {
    return <svg viewBox="0 0 24 24" className="icon" aria-hidden="true"><path d="M20.5 14.7A8.5 8.5 0 0 1 9.3 3.5 8.5 8.5 0 1 0 20.5 14.7Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>;
  }
  if (type === "close") {
    return <svg viewBox="0 0 24 24" className="icon" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
  }
  return <svg viewBox="0 0 24 24" className="icon" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
}

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const items = [["About","about"],["Skills","skills"],["Education","education"],["Projects","projects"],["Contact","contact"]];
  const close = () => setMenuOpen(false);

  return (
    <header className="navbar-wrap">
      <nav className="navbar" aria-label="Main navigation">
        <a href="#top" className="brand" onClick={close}>Salman<span>.</span></a>
        <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          {items.map(([label,id]) => <a key={id} href={`#${id}`} onClick={close}>{label}</a>)}
          <a className="nav-resume" href="/Salman-Anik-CV.pdf" download onClick={close}>Resume</a>
          <button className="theme-toggle" type="button" onClick={() => setDarkMode(v => !v)} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}><Icon type={darkMode ? "sun" : "moon"} /></button>
        </div>
        <button className="mobile-menu-button" type="button" onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}><Icon type={menuOpen ? "close" : "menu"} /></button>
      </nav>
    </header>
  );
}

import React from "react";
export default Navbar;
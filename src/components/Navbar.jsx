import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";
import { getText } from "../locales/index";

const Navbar = () => {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);
  const [navbar, setNavbar] = useState(false);
  const [burger, setBurger] = useState(false);
  const location = useLocation();
  const [isPartnersDropdownOpen, setIsPartnersDropdownOpen] = useState(false);

  const handlePartnersDropdownHover = (state) => {
    setIsPartnersDropdownOpen(state);
  };

  useEffect(() => {
    const isActive = localStorage.getItem("navbarActive");
    if (isActive) {
      setNavbar(true);
    }
  }, []);

  const changeNavbar = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = burger ? "hidden" : "auto";
  }, [burger]);

  const handleLinkClick = (path) => {
    localStorage.setItem("activeLink", path);
  };

  const handleOpenMobileNav = () => {
    setBurger((prevBurger) => !prevBurger);
  };



  const navVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: custom * 0.1,
      },
    }),
  };

  return (
    <>
      <div className={`navBar ${navbar ? "active" : ""}`}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="col-lg-2 col-md-4 col-6">
              <div className="logo">
                <a href="/">
                  <img
                    className="w-100 logoblack"
                    src="/img/logo.png"
                    alt="logo"
                  />
                </a>
              </div>
            </div>

            <div
              className={`d-flex nav-menu-pc justify-content align-items-center`}
            >
              <ul className="nav-menu">
                <li onClick={() => handleLinkClick("/about")}>
                  <Link
                    to="/about"
                    className={`${location.pathname === "/about" ? "active-link" : ""
                      }`}
                  >
                    {getText("aboutUs")}
                  </Link>
                </li>
                <li onClick={() => handleLinkClick("/space-camp-trip")}>
                  <Link
                    to="/space-camp-trip"
                    className={`${location.pathname === "/space-camp-trip" ? "active-link" : ""
                      }`}
                  >
                    {/* {getText("aboutUs")} */}
                    Uzay Kampı Gezisi
                  </Link>
                </li>
                <li onClick={() => handleLinkClick("/space-workshops")}>
                  <Link
                    to="/space-workshops"
                    className={`${location.pathname === "/space-workshops" ? "active-link" : ""
                      }`}
                  >
                    Uzay Atölyeleri
                  </Link>
                </li>
                <li onClick={() => handleLinkClick("/space-projects")} style={{ display: "flex", alignItems: "center" }}
                  onMouseEnter={() => handlePartnersDropdownHover(true)}
                  onMouseLeave={() => handlePartnersDropdownHover(false)}>
                  <Link
                    to="/space-projects"
                    className={`${location.pathname === "/space-projects" ? "active-link" : ""
                      }`}
                  >
                    {/* {getText("aboutUs")} */}
                    Uzay Projeleri
                  </Link>

                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: isPartnersDropdownOpen ? 1 : 0,
                      y: isPartnersDropdownOpen ? 0 : -30,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`dropdown-menu ${isPartnersDropdownOpen ? "show" : ""}`}
                  >
                    <li onClick={() => handleLinkClick("/curriculum-development")}>
                      <Link
                        to="/curriculum-development"
                        className={`${location.pathname === "/curriculum-development"
                          ? "active-link"
                          : ""
                          }`}
                      >
                        Müfredat Geliştirme
                      </Link>
                    </li>

                    <li onClick={() => handleLinkClick("/training-the-educator")}>
                      <Link
                        to="/training-the-educator"
                        className={`${location.pathname === "/training-the-educator" ? "active-link" : ""
                          }`}
                      >
                        Eğitimcinin Eğitimi
                      </Link>
                    </li>

                    <li onClick={() => handleLinkClick("/awareness-activities")}>
                      <Link
                        to="/awareness-activities"
                        className={`${location.pathname === "/awareness-activities" ? "active-link" : ""
                          }`}
                      >
                        Farkındalık Etkinlikleri
                      </Link>
                    </li>

                    <li onClick={() => handleLinkClick("/book-publishing")}>
                      <Link
                        to="/book-publishing"
                        className={`${location.pathname === "/book-publishing" ? "active-link" : ""
                          }`}
                      >
                        Kitap Yayıncılığı
                      </Link>
                    </li>

                    <li onClick={() => handleLinkClick("/online-education-platform")}>
                      <Link
                        to="/online-education-platform"
                        className={`${location.pathname === "/online-education-platform" ? "active-link" : ""
                          }`}
                      >
                        Online Eğitim Platformu
                      </Link>
                    </li>

                  </motion.ul>
                </li>

                <li>
                  <Link
                    to="/contacts"
                    className={`${location.pathname === "/contacts" ? "active-link" : ""
                      }`}
                  >
                    İletişim
                  </Link>
                </li>
              </ul>
              <div className="siteLang d-flex align-items-center">
                <img
                  src={selectedFlag}
                  style={{ width: "20px", objectFit: "cover" }}
                />
                <select
                  onChange={(e) => changeLanguage(e.target.value)}
                  value={selectedLanguage}
                >
                  <option value="uz">Oʻzbek</option>
                  <option value="en">English</option>
                  <option value="tr">Türkçe</option>
                </select>
              </div>
            </div>

            <div
              onClick={handleOpenMobileNav}
              className={`burger pr-4 ml-auto d-flex d-lg-none`}
            >
              {burger ? (
                <img src="/img/opened-burger.png" alt="burger" />
              ) : (
                <img src="/img/burger.svg" alt="burger" />
              )}
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className={`mobNav`}
        initial="hidden"
        animate={burger ? "visible" : "hidden"}
        exit="exit"
        variants={navVariants}
      >
        <div className="all-menu">
          <motion.ul className="nav-menu">
            {[
              { to: "/", text: getText("home") },
              { to: "/about", text: getText("aboutUs") },
              { to: "/services", text: getText("services") },
              { to: "/contacts", text: getText("contacts") },
              { to: "/question", text: getText("question") },
            ].map((item, index) => (
              <motion.li
                key={item.to}
                variants={itemVariants}
                custom={index + 1}
              >
                <Link onClick={() => setBurger(false)} to={item.to}>
                  {item.text}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            className="siteLang d-flex align-items-center"
            variants={itemVariants}
            custom={5}
          >
            <div className="all-menu">
              <ul className="nav-mobile-menu">
                {[
                  {
                    img: "/img/turkey.png",
                    text: "Turkish",
                    val: "tr",
                  },
                  {
                    img: "/img/uzb.png",
                    text: "O'zbek",
                    val: "uz",
                  },
                  {
                    img: "/img/usa.png",
                    text: "English",
                    val: "en",
                  },
                ].map((lang, index) => (
                  <motion.li
                    key={lang.text}
                    variants={itemVariants}
                    custom={index + 6}
                  >
                    <a
                      href="#"
                      className="flag-div"
                      onClick={() => {
                        changeLanguage(lang.val);
                        setBurger(false);
                      }}
                    >
                      <img
                        src={lang.img}
                        alt={lang.alt}
                        style={{ width: "20px", objectFit: "cover" }}
                      />
                      {lang.text}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;

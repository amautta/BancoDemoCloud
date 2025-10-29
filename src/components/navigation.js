import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <nav id="navigation-main" className="navigation-container">
        <div className="navigation-wrapper">
          <div className="navigation-content">
            <a href="/">
              <div
                aria-label="Banco Demo Cloud - Inicio"
                className="navigation-logo"
              >
                <div className="navigation-logo-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="8"
                      y="12"
                      width="24"
                      height="20"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      fill="none"
                    ></rect>
                    <path
                      d="M8 18h24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    ></path>
                    <circle
                      cx="14"
                      cy="24"
                      r="1.5"
                      fill="currentColor"
                    ></circle>
                    <path
                      d="M18 24h8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </div>
                <div className="navigation-logo-text">
                  <span className="navigation-logo-primary">
                    Banco Demo Cloud
                  </span>
                </div>
              </div>
            </a>
            <div className="navigation-links">
              <a href="#productos-servicios">
                <div className="navigation-link">
                  <span>
                    {' '}
                    Productos y Servicios
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
              <a href="#seguros">
                <div className="navigation-link">
                  <span>Seguros</span>
                </div>
              </a>
              <a href="#beneficios">
                <div className="navigation-link">
                  <span>Beneficios</span>
                </div>
              </a>
              <a href="#ayuda">
                <div className="navigation-link">
                  <span>Ayuda</span>
                </div>
              </a>
            </div>
            <div className="navigation-actions">
              <button className="btn btn-primary">Ingresa a tu Cuenta</button>
            </div>
            <button
              id="navigation-toggle"
              aria-label="Abrir menú"
              aria-expanded="false"
              className="navigation-toggle"
            >
              <span className="navigation-navigation-toggle-icon1 navigation-toggle-icon-open">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 5h16M4 12h16M4 19h16"
                  ></path>
                </svg>
              </span>
              <span className="navigation-navigation-toggle-icon2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m18 6l-12 12m0-12l12 12"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div id="navigation-mobile-menu" className="navigation-mobile-menu">
          <div className="navigation-mobile-content">
            <a href="#productos-servicios">
              <div className="navigation-mobile-link">
                <span>
                  {' '}
                  Productos y Servicios
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </a>
            <a href="#seguros">
              <div className="navigation-mobile-link">
                <span>Seguros</span>
              </div>
            </a>
            <a href="#beneficios">
              <div className="navigation-mobile-link">
                <span>Beneficios</span>
              </div>
            </a>
            <a href="#ayuda">
              <div className="navigation-mobile-link">
                <span>Ayuda</span>
              </div>
            </a>
            <div className="navigation-mobile-actions">
              <button className="btn btn-primary btn-lg">
                Ingresa a tu Cuenta
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-link, .navigation-link::after, .navigation-toggle, .navigation-mobile-menu, .navigation-mobile-link, .navigation-logo {
  transition: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<script defer data-name="navigation">
(function(){
  const navigationToggle = document.getElementById("navigation-toggle")
  const navigationMobileMenu = document.getElementById("navigation-mobile-menu")
  const navigationMobileLinks = navigationMobileMenu.querySelectorAll(
    ".navigation-mobile-link"
  )

  function toggleMobileMenu() {
    const isExpanded = navigationToggle.getAttribute("aria-expanded") === "true"

    navigationToggle.setAttribute("aria-expanded", !isExpanded)
    navigationMobileMenu.classList.toggle("navigation-mobile-menu-active")

    if (!isExpanded) {
      navigationToggle.setAttribute("aria-label", "Cerrar menú")
      document.body.style.overflow = "hidden"
    } else {
      navigationToggle.setAttribute("aria-label", "Abrir menú")
      document.body.style.overflow = ""
    }
  }

  function closeMobileMenu() {
    navigationToggle.setAttribute("aria-expanded", "false")
    navigationToggle.setAttribute("aria-label", "Abrir menú")
    navigationMobileMenu.classList.remove("navigation-mobile-menu-active")
    document.body.style.overflow = ""
  }

  navigationToggle.addEventListener("click", toggleMobileMenu)

  navigationMobileLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu)
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth > 767) {
      closeMobileMenu()
    }
  })

  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      navigationToggle.getAttribute("aria-expanded") === "true"
    ) {
      closeMobileMenu()
      navigationToggle.focus()
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation

import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer id="footer-banco" className="footer-main">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand-col">
              <div className="footer-brand">
                <div className="footer-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm5-7h.01M2 8v1a2 2 0 0 0 2 2h1"
                    ></path>
                  </svg>
                  <span className="footer-brand-name">Banco Demo Cloud</span>
                </div>
                <p className="footer-brand-tagline">
                  {' '}
                  Tu aliado financiero de confianza desde 1985
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="footer-security-badges">
                <div className="footer-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    ></path>
                  </svg>
                  <span>Sitio Seguro</span>
                </div>
                <div className="footer-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <rect
                        width="18"
                        height="11"
                        x="3"
                        y="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </g>
                  </svg>
                  <span>Encriptación 256-bit</span>
                </div>
              </div>
            </div>
            <div className="footer-nav-col">
              <h3 className="footer-nav-title">Productos y Servicios</h3>
              <ul className="footer-nav-list">
                <li>
                  <a href="#cuentas">
                    <div className="footer-nav-link">
                      <span>Cuentas Corrientes</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#tarjetas">
                    <div className="footer-nav-link">
                      <span>Tarjetas de Crédito</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#creditos">
                    <div className="footer-nav-link">
                      <span>Créditos de Consumo</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#hipotecarios">
                    <div className="footer-nav-link">
                      <span>
                        {' '}
                        Créditos Hipotecarios
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#inversiones">
                    <div className="footer-nav-link">
                      <span>Inversiones</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#ahorro">
                    <div className="footer-nav-link">
                      <span>Cuenta de Ahorro</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-nav-col">
              <h3 className="footer-nav-title">Seguros</h3>
              <ul className="footer-nav-list">
                <li>
                  <a href="#seguro-vida">
                    <div className="footer-nav-link">
                      <span>Seguro de Vida</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#seguro-auto">
                    <div className="footer-nav-link">
                      <span>Seguro de Auto</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#seguro-hogar">
                    <div className="footer-nav-link">
                      <span>Seguro de Hogar</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#seguro-salud">
                    <div className="footer-nav-link">
                      <span>Seguro de Salud</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#seguro-viaje">
                    <div className="footer-nav-link">
                      <span>Seguro de Viaje</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-nav-col">
              <h3 className="footer-nav-title">Beneficios</h3>
              <ul className="footer-nav-list">
                <li>
                  <a href="#descuentos">
                    <div className="footer-nav-link">
                      <span>
                        {' '}
                        Descuentos Exclusivos
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#viajes">
                    <div className="footer-nav-link">
                      <span>Viajes y Turismo</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#entretenimiento">
                    <div className="footer-nav-link">
                      <span>
                        {' '}
                        Entretenimiento
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#gastronomia">
                    <div className="footer-nav-link">
                      <span>Gastronomía</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#deportes">
                    <div className="footer-nav-link">
                      <span>Deportes</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-nav-col">
              <h3 className="footer-nav-title">Ayuda</h3>
              <ul className="footer-nav-list">
                <li>
                  <a href="#centro-ayuda">
                    <div className="footer-nav-link">
                      <span>Centro de Ayuda</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#preguntas">
                    <div className="footer-nav-link">
                      <span>
                        {' '}
                        Preguntas Frecuentes
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#sucursales">
                    <div className="footer-nav-link">
                      <span>
                        {' '}
                        Sucursales y Cajeros
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#contacto">
                    <div className="footer-nav-link">
                      <span>Contacto</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#reclamos">
                    <div className="footer-nav-link">
                      <span>Libro de Reclamos</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-contact-section">
            <div className="footer-contact-grid">
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
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
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                    ></path>
                  </svg>
                </div>
                <div className="footer-contact-info">
                  <h4 className="footer-contact-label">Atención al Cliente</h4>
                  <p className="footer-contact-value">600 200 3000</p>
                  <p className="footer-contact-subtext">
                    Lun - Vie: 9:00 - 18:00
                  </p>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    </g>
                  </svg>
                </div>
                <div className="footer-contact-info">
                  <h4 className="footer-contact-label">Email</h4>
                  <p className="footer-contact-value">
                    contacto@bancodemocloud.com
                  </p>
                  <p className="footer-contact-subtext">
                    Respuesta en 24 horas
                  </p>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468m12.356-4.842a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
                      <circle cx="10" cy="10" r="3"></circle>
                    </g>
                  </svg>
                </div>
                <div className="footer-contact-info">
                  <h4 className="footer-contact-label">Oficina Central</h4>
                  <p className="footer-contact-value">Av. Principal 1234</p>
                  <p className="footer-contact-subtext">Santiago, Chile</p>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M12 6v6l4 2"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </g>
                  </svg>
                </div>
                <div className="footer-contact-info">
                  <h4 className="footer-contact-label">Atención 24/7</h4>
                  <p className="footer-contact-value">Emergencias</p>
                  <p className="footer-contact-subtext">600 200 4000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-social-newsletter">
            <div className="footer-social-section">
              <h3 className="footer-social-title">Síguenos</h3>
              <div className="footer-social-links">
                <a href="#facebook">
                  <div aria-label="Facebook" className="footer-social-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#twitter">
                  <div aria-label="Twitter" className="footer-social-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#instagram">
                  <div aria-label="Instagram" className="footer-social-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="#linkedin">
                  <div aria-label="LinkedIn" className="footer-social-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                        <circle cx="4" cy="4" r="2"></circle>
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-newsletter">
              <h3 className="footer-newsletter-title">
                Suscríbete a nuestro boletín
              </h3>
              <p className="footer-newsletter-text">
                {' '}
                Recibe las últimas noticias y promociones exclusivas
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <form
                id="footer-newsletter-form"
                className="footer-newsletter-form"
              >
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  required="true"
                  aria-label="Email para newsletter"
                  className="footer-newsletter-input"
                />
                <button
                  type="submit"
                  className="footer-newsletter-btn btn btn-primary"
                >
                  {' '}
                  Suscribirse
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="footer-legal-links">
                <a href="#terminos">
                  <div className="footer-legal-link">
                    <span>
                      {' '}
                      Términos y Condiciones
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
                <span className="footer-legal-separator">|</span>
                <a href="#privacidad">
                  <div className="footer-legal-link">
                    <span>
                      {' '}
                      Política de Privacidad
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
                <span className="footer-legal-separator">|</span>
                <a href="#cookies">
                  <div className="footer-legal-link">
                    <span>Política de Cookies</span>
                  </div>
                </a>
                <span className="footer-legal-separator">|</span>
                <a href="#seguridad">
                  <div className="footer-legal-link">
                    <span>Seguridad</span>
                  </div>
                </a>
                <span className="footer-legal-separator">|</span>
                <a href="#tarifas">
                  <div className="footer-legal-link">
                    <span>Tarifas</span>
                  </div>
                </a>
              </div>
              <p className="footer-copyright">
                {' '}
                © 2025 Banco Demo Cloud. Todos los derechos reservados.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="footer-certifications">
                <span className="footer-cert-text">Supervisado por:</span>
                <span className="footer-cert-badge">SBIF</span>
                <span className="footer-cert-badge">CMF</span>
              </div>
            </div>
          </div>
        </div>
        <button
          id="footer-back-to-top"
          aria-label="Volver arriba"
          className="footer-back-to-top"
        >
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
              d="m18 15l-6-6l-6 6"
            ></path>
          </svg>
        </button>
        <div aria-hidden="true" className="footer-decorative-line"></div>
        <div aria-hidden="true" className="footer-gradient-overlay"></div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.footer-nav-link, .footer-contact-item, .footer-social-link, .footer-back-to-top, .footer-badge {
  transition: none;
}
.footer-nav-link:hover {
  transform: none;
}
.footer-contact-item:hover, .footer-social-link:hover, .footer-back-to-top:hover {
  transform: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="footer-container4">
        <div className="footer-container5">
          <Script
            html={`<script defer data-name="footer">
(function(){
  // Back to Top Button functionality
  const backToTopBtn = document.getElementById("footer-back-to-top")

  function handleScroll() {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop

    if (scrollPosition > 300) {
      backToTopBtn.classList.add("footer-visible")
    } else {
      backToTopBtn.classList.remove("footer-visible")
    }
  }

  window.addEventListener("scroll", handleScroll)

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Newsletter form submission
  const newsletterForm = document.getElementById("footer-newsletter-form")

  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const emailInput = newsletterForm.querySelector(".footer-newsletter-input")
    const email = emailInput.value

    // Simulate submission (replace with actual API call)
    if (email) {
      alert(
        "¡Gracias por suscribirte! Recibirás nuestras últimas noticias y promociones."
      )
      emailInput.value = ""
    }
  })

  // Smooth scroll for internal links
  const footerLinks = document.querySelectorAll('.footer-nav-link[href^="#"]')

  footerLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href")

      // Only handle hash links, not external links
      if (href.startsWith("#") && href.length > 1) {
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          e.preventDefault()
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    })
  })

  // Add entrance animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  const contactItems = document.querySelectorAll(".footer-contact-item")
  contactItems.forEach((item, index) => {
    item.style.opacity = "0"
    item.style.transform = "translateY(20px)"
    item.style.transition = \`opacity 0.6s ease \${
      index * 0.1
    }s, transform 0.6s ease \${index * 0.1}s\`
    observer.observe(item)
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer

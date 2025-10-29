import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Shoddy Pertinent Vulture</title>
        <meta property="og:title" content="Shoddy Pertinent Vulture" />
      </Helmet>
      <Navigation></Navigation>
      <div className="home-container11">
        <div className="home-container12">
          <Script
            html={`<style>
#hero-section {
  position: relative;
  width: 100%;
  overflow: hidden;
}
#noticias-promociones {
  max-width: var(--content-max-width);
  margin: var(--section-gap) auto;
  padding: 0 var(--spacing-lg);
}
#beneficios-destacados {
  max-width: var(--content-max-width);
  margin: var(--section-gap) auto;
  padding: var(--spacing-3xl);
  background: var(--color-surface);
  border-radius: var(--border-radius-lg);
}
@media (max-width: 991px) {
#beneficios-destacados {
  padding: var(--spacing-2xl);
}
}
@media (max-width: 767px) {
#beneficios-destacados {
  padding: var(--spacing-lg);
}
}
#descubre-beneficios {
  max-width: var(--content-max-width);
  margin: var(--section-gap) auto;
  padding: 0 var(--spacing-lg);
}
#productos-servicios {
  max-width: var(--content-max-width);
  margin: var(--section-gap) auto;
  padding: var(--spacing-lg);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-level-1);
}
@media (max-width: 479px) {
#productos-servicios {
  padding: var(--spacing-lg);
}
}
#ayuda-rapida {
  max-width: var(--content-max-width);
  margin: var(--section-gap) auto;
  padding: 0 var(--spacing-lg);
}
@media (prefers-reduced-motion: reduce) {
*, *::before, *::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
  scroll-behavior: auto !important;
}
.benefit-card:hover, .promo-card:hover, .descubre-card:hover, .producto-card:hover {
  transform: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <section
        id="hero-section"
        role="banner"
        aria-label="Banco Demo Cloud Hero"
      >
        <div className="hero-wrapper">
          <div className="hero-backplate"></div>
          <div className="hero-scrim"></div>
          <nav aria-label="Primary navigation" className="hero-nav">
            <a href="#productos">
              <div className="nav-link">
                <span>Productos y Servicios</span>
              </div>
            </a>
            <a href="#seguros">
              <div className="nav-link">
                <span>Seguros</span>
              </div>
            </a>
            <a href="#beneficios">
              <div className="nav-link">
                <span>Beneficios</span>
              </div>
            </a>
            <a href="#ayuda">
              <div className="nav-link">
                <span>Ayuda</span>
              </div>
            </a>
          </nav>
          <div className="hero-content-panel">
            <div className="hero-grid">
              <div className="hero-left">
                <h1 className="home-hero-title">Banco Demo Cloud</h1>
                <p className="hero-slogan">
                  {' '}
                  Confianza financiera en la nube — Soluciones claras, procesos
                  seguros
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="hero-cta-cluster">
                  <button
                    aria-label="Acceder a demostración"
                    className="btn btn-primary btn-lg"
                  >
                    {' '}
                    Acceder a Demo
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                  <button
                    aria-label="Conocer más sobre servicios"
                    className="btn btn-lg btn-outline"
                  >
                    {' '}
                    Conocer Más
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                </div>
              </div>
              <div className="hero-right">
                <p className="hero-blurb">
                  {' '}
                  Bienvenido a la demostración oficial de Banco Demo Cloud:
                  transparencia, tecnología y servicio profesional para que
                  pruebes cómo gestionamos tus finanzas con estándares bancarios
                  reales.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="hero-badges">
                  <span className="badge">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      className="home-badge-icon1"
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
                    <span>
                      {' '}
                      Seguridad Bancaria
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span className="badge">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      className="home-badge-icon2"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 6L9 17l-5-5"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Procesos Certificados
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span className="badge">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      className="home-badge-icon3"
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
                    <span>
                      {' '}
                      Soporte 24/7
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="noticias-promociones"
        role="region"
        aria-labelledby="noticias-title"
      >
        <div className="noticias-container">
          <div className="featured-card">
            <div className="featured-content">
              <h2 id="noticias-title" className="section-title">
                {' '}
                Noticias y Promociones
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h2>
              <h3 className="featured-subhead">
                {' '}
                Tus tarjetas Banco Demo Cloud te llevan a Disney
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h3>
              <p className="featured-body">
                {' '}
                Aprovecha beneficios exclusivos en compras y financiamiento con
                cuotas especiales. Consulta condiciones y fechas límite en tu
                sucursal virtual.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <button
                aria-label="Ver más sobre promoción Disney"
                className="btn btn-primary"
              >
                {' '}
                Ver Promoción
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
            <div className="featured-image">
              <img
                src="https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Pago con tarjeta de crédito en terminal"
              />
              <div className="image-scrim"></div>
            </div>
          </div>
          <div className="promo-grid">
            <div className="promo-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="promo-icon"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                  <path d="M2 10h20"></path>
                </g>
              </svg>
              <h3 className="promo-title">Cuenta Corriente Joven</h3>
              <p className="promo-body">
                {' '}
                Abre tu cuenta y recibe cupones de hasta 40% en las mejores
                tiendas del país. Alta digital rápida, sin costos de
                mantenimiento el primer año.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <button
                aria-label="Abrir cuenta joven"
                className="btn btn-outline btn-sm"
              >
                {' '}
                Abrir Cuenta
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
              <p className="promo-legal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  className="home-legal-icon1"
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
                <span>
                  {' '}
                  Sujeto a verificación de identidad
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
            <div className="promo-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="promo-icon"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M19 5L5 19"></path>
                  <circle cx="6.5" cy="6.5" r="2.5"></circle>
                  <circle cx="17.5" cy="17.5" r="2.5"></circle>
                </g>
              </svg>
              <h3 className="promo-title">Créditos a tu medida</h3>
              <p className="promo-body">
                {' '}
                Consulta por crédito de consumo o crédito hipotecario con
                asesoría personalizada. Simuladores en línea, tasas competitivas
                y procesos seguros.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <button
                aria-label="Simular crédito"
                className="btn btn-outline btn-sm"
              >
                {' '}
                Simular Crédito
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
              <p className="promo-legal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  className="home-legal-icon2"
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
                <span>
                  {' '}
                  Evaluación crediticia requerida
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
            <div className="promo-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="promo-icon"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                  <circle cx="17" cy="18" r="2"></circle>
                  <circle cx="7" cy="18" r="2"></circle>
                </g>
              </svg>
              <h3 className="promo-title">Delivery &amp; Entretenimiento</h3>
              <p className="promo-body">
                {' '}
                Descuentos y ofertas especiales en pizzerías, plataformas de
                streaming y cines asociados al usar tu tarjeta Banco Demo Cloud.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <button
                aria-label="Ver beneficios delivery"
                className="btn btn-outline btn-sm"
              >
                {' '}
                Ver Beneficios
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
              <p className="promo-legal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  className="home-legal-icon3"
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
                <span>
                  {' '}
                  Comercios participantes aplican
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
            <div className="promo-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="promo-icon"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8L4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1l3 2l2 3l1-1v-3l3-2l3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2"
                ></path>
              </svg>
              <h3 className="promo-title">Viajes y Deporte</h3>
              <p className="promo-body">
                {' '}
                Descuentos en agencias de viaje, preventas en conciertos y
                promociones en tiendas deportivas para clientes premium.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <button
                aria-label="Ver beneficios viajes"
                className="btn btn-outline btn-sm"
              >
                {' '}
                Ver Beneficios
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
              <p className="promo-legal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  className="home-legal-icon4"
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
                <span>
                  {' '}
                  Sujeto a disponibilidad
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
          </div>
          <div className="news-ribbon">
            <div className="news-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="news-icon"
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
              <span>
                {' '}
                Nueva política de seguridad digital
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="news-divider"></div>
            <div className="news-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="news-icon"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <rect width="18" height="4" x="3" y="8" rx="1"></rect>
                  <path d="M12 8v13m7-9v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5a2.5 2.5 0 0 1 0 5"></path>
                </g>
              </svg>
              <span>
                {' '}
                Promociones especiales para clientes corporativos
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="news-divider"></div>
            <div className="news-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="news-icon"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719"
                ></path>
              </svg>
              <span>
                {' '}
                Mantente informado con alertas instantáneas
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </section>
      <section
        id="beneficios-destacados"
        role="region"
        aria-labelledby="beneficios-destacados-title"
      >
        <div className="beneficios-container">
          <div className="featured-benefit">
            <h2 id="beneficios-destacados-title" className="section-title">
              {' '}
              Beneficios Destacados
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <p className="featured-subcopy">
              {' '}
              Disfruta descuentos y experiencias exclusivas con tu cuenta y
              tarjetas Banco Demo Cloud. Seleccionamos aliados de confianza para
              ofrecer ventajas reales que acompañen tu vida profesional y
              personal.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <button
              aria-label="Explorar todos los beneficios"
              className="btn btn-primary"
            >
              {' '}
              Explorar Beneficios
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </button>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  className="benefit-icon"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="m12 14l-1 1m2.75 3.25l-1.25 1.42m5.275-14.016a15.68 15.68 0 0 0-12.121 12.12M18.8 9.3a1 1 0 0 0 2.1 7.7"></path>
                    <path d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"></path>
                  </g>
                </svg>
              </div>
              <h3 className="benefit-title">Pizza Premium</h3>
              <p className="benefit-body">
                {' '}
                Hasta 30% en delivery y take-away en cadenas y pizzerías gourmet
                seleccionadas. Pedido rápido, factura digital y acumulación de
                puntos.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <span className="benefit-meta">
                Disponible con todas las tarjetas
              </span>
              <button
                aria-label="Activar beneficio pizza"
                className="btn btn-outline btn-sm"
              >
                {' '}
                Activar
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  className="benefit-icon"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M9 18V5l12-2v13"></path>
                    <circle cx="6" cy="18" r="3"></circle>
                    <circle cx="18" cy="16" r="3"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="benefit-title">Conciertos &amp; Eventos</h3>
              <p className="benefit-body">
                {' '}
                Acceso preferencial y descuentos en entradas para salas
                principales. Compra segura y opciones de pago en cuotas sin
                interés.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <span className="benefit-meta">Exclusivo clientes premium</span>
              <button
                aria-label="Activar beneficio conciertos"
                className="btn btn-outline btn-sm"
              >
                {' '}
                Activar
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  className="benefit-icon"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8L4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1l3 2l2 3l1-1v-3l3-2l3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2"
                  ></path>
                </svg>
              </div>
              <h3 className="benefit-title">Viajes Corporativos</h3>
              <p className="benefit-body">
                {' '}
                Descuentos en vuelos, hoteles y paquetes con seguro incluido.
                Gestión dedicada para viajes de negocio y beneficios exclusivos.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <span className="benefit-meta">Cuentas empresariales</span>
              <button
                aria-label="Activar beneficio viajes"
                className="btn btn-outline btn-sm"
              >
                {' '}
                Activar
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  className="benefit-icon"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <circle cx="18.5" cy="17.5" r="3.5"></circle>
                    <circle cx="5.5" cy="17.5" r="3.5"></circle>
                    <circle cx="15" cy="5" r="1"></circle>
                    <path d="M12 17.5V14l-3-3l4-3l2 3h2"></path>
                  </g>
                </svg>
              </div>
              <h3 className="benefit-title">Deporte y Bienestar</h3>
              <p className="benefit-body">
                {' '}
                Promociones en gimnasios, centros deportivos y tiendas de
                equipamiento. Pagos programados y reportes para control de
                gastos.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <span className="benefit-meta">Todas las cuentas</span>
              <button
                aria-label="Activar beneficio deporte"
                className="btn btn-outline btn-sm"
              >
                {' '}
                Activar
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  className="benefit-icon"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                    <circle cx="17" cy="18" r="2"></circle>
                    <circle cx="7" cy="18" r="2"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="benefit-title">Delivery y Comida</h3>
              <p className="benefit-body">
                {' '}
                Convenios con plataformas y restaurantes locales: promociones
                por consumo con tarjeta y cupones acumulables.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <span className="benefit-meta">
                {' '}
                Disponible con tarjetas de débito y crédito
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <button
                aria-label="Activar beneficio delivery"
                className="btn btn-outline btn-sm"
              >
                {' '}
                Activar
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  className="benefit-icon"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M7 3v18M3 7.5h4M3 12h18M3 16.5h4M17 3v18m0-13.5h4m-4 9h4"></path>
                  </g>
                </svg>
              </div>
              <h3 className="benefit-title">Cine &amp; Entretenimiento</h3>
              <p className="benefit-body">
                {' '}
                Entradas y combos con precios preferenciales y salas VIP en
                cadenas aliadas. Integración con beneficios corporativos.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <span className="benefit-meta">Todas las cuentas</span>
              <button
                aria-label="Activar beneficio cine"
                className="btn btn-outline btn-sm"
              >
                {' '}
                Activar
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="descubre-beneficios"
        role="region"
        aria-labelledby="descubre-title"
      >
        <div className="descubre-container">
          <div className="descubre-featured">
            <h2 id="descubre-title" className="section-title">
              {' '}
              Descubre los mejores beneficios de Banco Demo Cloud
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <p className="descubre-subcopy">
              {' '}
              Accede ahora a devoluciones, descuentos exclusivos y ofertas
              diseñadas para optimizar tus gastos y recompensar tu fidelidad.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <button
              aria-label="Ver beneficios y activar ofertas"
              className="btn btn-primary btn-lg"
            >
              {' '}
              Ver Beneficios y Activar Ofertas
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </button>
          </div>
          <div className="descubre-cards">
            <div className="descubre-card">
              <div className="card-image-wrapper">
                <img
                  src="https://images.pexels.com/photos/7621136/pexels-photo-7621136.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Pago contactless con tarjeta"
                />
                <div className="card-backplate">
                  <h3 className="card-title">Devoluciones por compras</h3>
                </div>
              </div>
              <p className="card-body">
                {' '}
                Recupera hasta un porcentaje fijo en comercios aliados y recibe
                el reembolso directo en tu cuenta.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <span className="card-meta">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  className="home-meta-icon1"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 6L9 17l-5-5"
                  ></path>
                </svg>
                <span>
                  {' '}
                  Automático
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <button
                aria-label="Activar devoluciones"
                className="btn btn-outline btn-sm"
              >
                {' '}
                Activar
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
            <div className="descubre-card">
              <div className="card-image-wrapper">
                <img
                  src="https://images.pexels.com/photos/6214452/pexels-photo-6214452.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Laptop y tarjeta de crédito"
                />
                <div className="card-backplate">
                  <h3 className="card-title">Ofertas por categoría</h3>
                </div>
              </div>
              <p className="card-body">
                {' '}
                Descuentos exclusivos en Pizza, Conciertos, Viajes, Deporte,
                Delivery y Cine con socios verificados.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <span className="card-meta">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  className="home-meta-icon2"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 6L9 17l-5-5"
                  ></path>
                </svg>
                <span>
                  {' '}
                  6 categorías
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <button
                aria-label="Ver ofertas por categoría"
                className="btn btn-outline btn-sm"
              >
                {' '}
                Ver Ofertas
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
            <div className="descubre-card">
              <div className="card-image-wrapper">
                <img
                  src="https://images.pexels.com/photos/7621144/pexels-photo-7621144.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Pago con tarjeta contactless"
                />
                <div className="card-backplate">
                  <h3 className="card-title">Cupones jóvenes</h3>
                </div>
              </div>
              <p className="card-body">
                {' '}
                Beneficios especiales para cuentas jóvenes con hasta 40% en
                tiendas seleccionadas.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <span className="card-meta">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  className="home-meta-icon3"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 6L9 17l-5-5"
                  ></path>
                </svg>
                <span>
                  {' '}
                  Hasta 40% OFF
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <button
                aria-label="Obtener cupones jóvenes"
                className="btn btn-outline btn-sm"
              >
                {' '}
                Obtener Cupones
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
            <div className="descubre-card">
              <div className="card-image-wrapper">
                <img
                  src="https://images.pexels.com/photos/5716000/pexels-photo-5716000.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Profesionales analizando informes financieros"
                />
                <div className="card-backplate">
                  <h3 className="card-title">Crédito preferencial</h3>
                </div>
              </div>
              <p className="card-body">
                {' '}
                Acceso prioritario a condiciones exclusivas para consumo e
                hipotecario al ser cliente activo.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <span className="card-meta">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  className="home-meta-icon4"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 6L9 17l-5-5"
                  ></path>
                </svg>
                <span>
                  {' '}
                  Clientes activos
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <button
                aria-label="Consultar crédito"
                className="btn btn-outline btn-sm"
              >
                {' '}
                Consultar
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="productos-servicios"
        role="region"
        aria-labelledby="productos-title"
      >
        <div className="productos-container">
          <h2 id="productos-title" className="section-title">
            {' '}
            Productos y Servicios Destacados
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h2>
          <div className="productos-grid">
            <div className="producto-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                className="producto-icon"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                  <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                </g>
              </svg>
              <h3 className="producto-title">Cuentas Corporativas</h3>
              <p className="producto-benefit">
                {' '}
                Soluciones contables y operativas para empresas: cuentas
                corrientes y ahorro con integración contable, conciliación
                automática y límites multicuentas.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="producto-badges">
                <span className="producto-badge">Digital</span>
                <span className="producto-badge">Soporte 24/7</span>
              </div>
              <button
                aria-label="Abrir cuenta corporativa"
                className="btn btn-primary btn-sm"
              >
                {' '}
                Abrir Cuenta
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
            <div className="producto-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                className="producto-icon"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                  <path d="M2 10h20"></path>
                </g>
              </svg>
              <h3 className="producto-title">Cuentas Personales Premium</h3>
              <p className="producto-benefit">
                {' '}
                Cuentas diseñadas para profesionales: tarjetas con control de
                gasto, banca móvil avanzada, transferencias inmediatas y
                protección contra fraudes.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="producto-badges">
                <span className="producto-badge">Premium</span>
                <span className="producto-badge">Beneficios</span>
              </div>
              <button
                aria-label="Abrir cuenta premium"
                className="btn btn-primary btn-sm"
              >
                {' '}
                Abrir Cuenta
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
            <div className="producto-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                className="producto-icon"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M19 5L5 19"></path>
                  <circle cx="6.5" cy="6.5" r="2.5"></circle>
                  <circle cx="17.5" cy="17.5" r="2.5"></circle>
                </g>
              </svg>
              <h3 className="producto-title">Crédito de Consumo</h3>
              <p className="producto-benefit">
                {' '}
                Crédito ágil con tasas competitivas y plazos flexibles.
                Simulador transparente, aprobación y desembolso digital, y
                asesoría financiera personalizada.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="producto-badges">
                <span className="producto-badge">Rápido</span>
                <span className="producto-badge">Flexible</span>
              </div>
              <button
                aria-label="Simular crédito de consumo"
                className="btn btn-primary btn-sm"
              >
                {' '}
                Simular
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
            <div className="producto-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                className="producto-icon"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </g>
              </svg>
              <h3 className="producto-title">Crédito Hipotecario</h3>
              <p className="producto-benefit">
                {' '}
                Financiamiento para vivienda con procesos claros y
                acompañamiento experto. Productos con esquemas de pago
                adaptables y seguimiento digital.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="producto-badges">
                <span className="producto-badge">Preaprobación</span>
                <span className="producto-badge">Asesoría</span>
              </div>
              <button
                aria-label="Simular crédito hipotecario"
                className="btn btn-primary btn-sm"
              >
                {' '}
                Simular
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
            <div className="producto-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                className="producto-icon"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                  <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                </g>
              </svg>
              <h3 className="producto-title">Líneas de Crédito Empresas</h3>
              <p className="producto-benefit">
                {' '}
                Crédito revolvente y préstamos a mediano plazo para capital de
                trabajo, inversiones y expansión. Evaluación financiera
                especializada.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="producto-badges">
                <span className="producto-badge">Empresarial</span>
                <span className="producto-badge">Revolvente</span>
              </div>
              <button
                aria-label="Consultar línea de crédito empresarial"
                className="btn btn-primary btn-sm"
              >
                {' '}
                Consultar
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
            <div className="producto-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                className="producto-icon"
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
              <h3 className="producto-title">Seguros Bancarios</h3>
              <p className="producto-benefit">
                {' '}
                Protección respaldada por socios aseguradores: seguros de vida,
                hogar, vehículos y protección de tarjetas. Contratación rápida
                desde banca digital.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="producto-badges">
                <span className="producto-badge">Protección</span>
                <span className="producto-badge">Rápido</span>
              </div>
              <button
                aria-label="Contratar seguro"
                className="btn btn-primary btn-sm"
              >
                {' '}
                Contratar
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="ayuda-rapida" role="region" aria-labelledby="ayuda-heading">
        <div className="help-section">
          <h2 id="ayuda-heading" className="section-title">
            Ayuda Rápida
          </h2>
          <div className="help-grid">
            <div className="help-column help-faqs">
              <h3 className="help-column-title">Preguntas Frecuentes</h3>
              <div className="faq-item">
                <button
                  aria-expanded="false"
                  aria-controls="ans-1"
                  id="q-1"
                  className="faq-question"
                >
                  <span>¿Qué es Banco Demo Cloud?</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="home-faq-chevron1"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m6 9l6 6l6-6"
                    ></path>
                  </svg>
                </button>
                <div id="ans-1" aria-hidden="true" className="faq-answer">
                  <p>
                    {' '}
                    Banco Demo Cloud es una plataforma de demostración bancaria
                    diseñada para mostrar integraciones, flujos de productos y
                    comunicaciones seguras entre clientes, empresas y el banco,
                    sin operaciones reales.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="faq-item">
                <button
                  aria-expanded="false"
                  aria-controls="ans-2"
                  id="q-2"
                  className="faq-question"
                >
                  <span>¿Puedo realizar operaciones reales en la demo?</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="home-faq-chevron2"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m6 9l6 6l6-6"
                    ></path>
                  </svg>
                </button>
                <div id="ans-2" aria-hidden="true" className="faq-answer">
                  <p>
                    {' '}
                    No. Las cuentas y transacciones en esta demostración son
                    ficticias y solo sirven para probar procesos, interfaces y
                    comunicaciones.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="faq-item">
                <button
                  aria-expanded="false"
                  aria-controls="ans-3"
                  id="q-3"
                  className="faq-question"
                >
                  <span>¿Cómo inicio una demostración guiada?</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="home-faq-chevron3"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m6 9l6 6l6-6"
                    ></path>
                  </svg>
                </button>
                <div id="ans-3" aria-hidden="true" className="faq-answer">
                  <p>
                    {' '}
                    Solicita una demo guiada desde Productos y Servicios o
                    contáctanos por Ayuda. Un especialista coordinará una sesión
                    en vivo para mostrar flujos de cuentas, créditos y canales
                    seguros.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="faq-item">
                <button
                  aria-expanded="false"
                  aria-controls="ans-4"
                  id="q-4"
                  className="faq-question"
                >
                  <span>¿Qué canales de soporte están disponibles?</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="home-faq-chevron4"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m6 9l6 6l6-6"
                    ></path>
                  </svg>
                </button>
                <div id="ans-4" aria-hidden="true" className="faq-answer">
                  <p>
                    {' '}
                    Soporte por chat en vivo, correo electrónico y sesiones
                    programadas con especialistas. Los tiempos de respuesta y
                    horarios aparecen en la sección de Ayuda.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="help-column help-resources">
              <h3 className="help-column-title">Recursos Rápidos</h3>
              <div className="resource-card">
                <h4 className="resource-title">Guías Resumidas</h4>
                <ul className="resource-list">
                  <li>
                    <span>Inicio rápido</span>
                  </li>
                  <li>
                    <span>Simular un pago</span>
                  </li>
                  <li>
                    <span>Solicitar un crédito de prueba</span>
                  </li>
                  <li>
                    <span>Configurar notificaciones</span>
                  </li>
                </ul>
              </div>
              <div className="resource-card">
                <h4 className="resource-title">Tutoriales en Video</h4>
                <p className="resource-description">
                  {' '}
                  Series breves orientadas a ejecutivos, desarrolladores y
                  equipos de seguridad.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <button
                  aria-label="Ver tutoriales"
                  className="btn btn-outline btn-sm"
                >
                  {' '}
                  Ver Tutoriales
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
              </div>
              <div className="resource-card">
                <h4 className="resource-title">Contacto Directo</h4>
                <div className="contact-methods">
                  <div className="contact-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      className="contact-icon"
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
                    <span>soporte.demo@bancodeocloud.com</span>
                  </div>
                  <div className="contact-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      className="contact-icon"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719"
                      ></path>
                    </svg>
                    <span>Chat en vivo: L-V, 09:00–18:00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="help-column help-support">
              <h3 className="help-column-title">Soporte Profesional</h3>
              <div className="support-status">
                <span aria-live="polite" className="status-chip">
                  <span className="home-status-indicator"></span>
                  <span>
                    {' '}
                    En línea
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="support-card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="support-icon"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"></path>
                  </g>
                </svg>
                <h4 className="support-title">¿Necesitas ayuda inmediata?</h4>
                <p className="support-description">
                  {' '}
                  Nuestro equipo está disponible para resolver consultas
                  técnicas y comerciales.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <button
                  aria-label="Iniciar chat en vivo"
                  className="btn btn-primary"
                >
                  {' '}
                  Iniciar Chat
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
              </div>
              <div className="support-card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="support-icon"
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
                <h4 className="support-title">Solicitar Demo Guiada</h4>
                <p className="support-description">
                  {' '}
                  Agenda una sesión personalizada con un especialista para
                  explorar funcionalidades avanzadas.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <button
                  aria-label="Agendar demostración guiada"
                  className="btn btn-outline"
                >
                  {' '}
                  Agendar Demo
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="home-container19">
        <div className="home-container20">
          <Script
            html={`<style>
        @keyframes panelEntrance {from {opacity: 0;
transform: translateY(8px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes badgeEntrance {from {opacity: 0;
transform: translateY(6px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes pulse {0%,100% {opacity: 1;}
50% {opacity: 0.5;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container21">
        <div className="home-container22">
          <Script
            html={`<script defer data-name="homepage-interactions">
(function(){
  // FAQ Accordion functionality
  const faqButtons = document.querySelectorAll(".faq-question")

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true"
      const answerId = button.getAttribute("aria-controls")
      const answer = document.getElementById(answerId)

      // Close all other FAQs
      faqButtons.forEach((otherButton) => {
        if (otherButton !== button) {
          otherButton.setAttribute("aria-expanded", "false")
          const otherAnswerId = otherButton.getAttribute("aria-controls")
          const otherAnswer = document.getElementById(otherAnswerId)
          if (otherAnswer) {
            otherAnswer.setAttribute("aria-hidden", "true")
          }
        }
      })

      // Toggle current FAQ
      button.setAttribute("aria-expanded", !expanded)
      if (answer) {
        answer.setAttribute("aria-hidden", expanded)
      }
    })
  })

  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href")
      if (href && href.startsWith("#")) {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    })
  })

  // Card entrance animations on scroll
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

  const animatedCards = document.querySelectorAll(
    ".benefit-card, .promo-card, .descubre-card, .producto-card"
  )
  animatedCards.forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transitionDelay = \`\${index * 0.05}s\`
    observer.observe(card)
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home-container23">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon99"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text43">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home

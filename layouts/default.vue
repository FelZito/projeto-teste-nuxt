<template>

  <div vw class="enabled">
    <div vw-access-button class="active"></div>
    <div vw-plugin-wrapper>
      <div class="vw-plugin-top-wrapper"></div>
    </div>
  </div>

  <div>
    <div class="th-menu-wrapper onepage-nav">
      <div class="th-menu-area text-center">
        <button class="th-menu-toggle"><i class="fal fa-times"></i></button>
        <div class="mobile-logo">
          <a href="index.html"><img :src="`https://directus.i9sellz.com.br/assets/${prefeitura.logo}`" alt="Logo"></a>
        </div>
        <div class="th-mobile-menu">
          <ul>
            <li class="menu-item-has-children mega-menu-wrap">
              <a class="active" href="index.html">Home</a>

              <ul class="sub-menu">
                <li><a href="index.html">Home Consulting</a></li>
                <li><a href="home-cloud.html">Home Cloud</a></li>
                <li><a href="home-ai-machine.html">Home Ai-Machine</a></li>
                <li><a href="home-startup.html">Home Startup</a></li>
                <li><a href="home-cybersecurity.html">Home Cybersecurity</a></li>
                <li><a href="home-sass.html">SaaS Business Product</a></li>
                <li><a href="home-tech-support.html">Tech Support Services</a></li>
                <li><a href="home-software-development.html">Home Software-Development</a></li>
                <li><a href="home-app-development.html">Web & App Development</a></li>
                <li><a href="home-it-solutions.html">Home It Solutions</a></li>
                <li><a href="home-digital-transformation.html">Home Digital Transformation</a></li>
                <li><a href="home-data-analytics.html">Home Data Analytics & Big</a></li>
                <li><a href="home-blockchain-fintech.html">Home Blockchain & Fintech</a></li>
              </ul>
            </li>
            <li class="menu-item-has-children">
              <a href="#">About Us</a>
              <ul class="sub-menu">
                <li><a href="about.html">About Us</a></li>
                <li><a href="about2.html">About Us 2</a></li>
              </ul>
            </li>
            <li class="menu-item-has-children">
              <a href="#">Pages</a>
              <ul class="sub-menu">
                <li class="menu-item-has-children">
                  <a href="#">Shop</a>
                  <ul class="sub-menu">
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="shop-details.html">Shop Details</a></li>
                    <li><a href="cart.html">Cart Page</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
                    <li><a href="wishlist.html">Wishlist</a></li>
                  </ul>
                </li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="case-study.html">Case Study</a></li>
                <li><a href="case-study-details.html">Case Study Details</a></li>
                <li><a href="career.html">Career</a></li>
                <li><a href="career-details.html">Career Details</a></li>
                <li><a href="team-guide.html">Team</a></li>
                <li><a href="team-guider-details.html">Team Details</a></li>
                <li><a href="faq.html">Faq Page</a></li>
                <li><a href="price.html">Price Package</a></li>
                <li><a href="error.html">Error Page</a></li>
              </ul>
            </li>
            <li class="menu-item-has-children">
              <a href="#">Our Services</a>
              <ul class="sub-menu">
                <li><a href="service.html">Services</a></li>
                <li><a href="service-details.html">Service Details</a></li>
              </ul>
            </li>
            <li class="menu-item-has-children">
              <a href="#">Projects</a>
              <ul class="sub-menu">
                <li><a href="project-grid.html">Project Grid</a></li>
                <li><a href="project-details.html">Project Details</a></li>
              </ul>
            </li>
            <li class="menu-item-has-children">
              <a href="#">Blog</a>
              <ul class="sub-menu">
                <li><a href="blog.html">Blog</a></li>
                <li><a href="blog-grid.html">Blog Grid</a></li>
                <li><a href="blog-details.html">Blog Details</a></li>
              </ul>
            </li>
            <li class="menu-item-has-children">
              <a href="contact.html">Contact us</a>
              <ul class="sub-menu">
                <li><a href="contact.html">Contact Us</a></li>
                <li><a href="contact-2.html">Contact Us Two</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <header class="th-header header-layout1">
      <div class="header-top" style="background-color: var(--theme-color) !important;">
        <div class="container th-container">
          <div class="row justify-content-center justify-content-xl-between align-items-center">
            <div class="col-auto d-none d-md-block">
              <div class="header-links">
                <ul>
                  <li class="d-none d-xl-inline-block">
                    <span style="color: white;">{{ prefeitura.nome }}</span>
                  </li>
                  <li class="d-none d-xl-inline-block"><i class="fa-regular fa-clock" style="color: white;"></i>
                    <span style="color: white;">Segunda à Sexta: 8h - 17h</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-auto">
              <div class="header-right style2">
                <div class="header-links">
                  <ul>
                    <li class="d-none d-md-inline-block"><a href="faq.html" style="color: white;">Ouvidoria/SIC</a></li>
                    <li class="d-none d-md-inline-block" style="color: white;"><a href="contact.html"
                        style="color: white;">Transparência</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sticky-wrapper">
        <!-- Main Menu Area -->
        <div class="menu-area">
          <div class="container th-container">
            <div class="row align-items-center justify-content-between">
              <div class="col-auto">
                <div class="header-logo">
                  <a href="/">
                    <img :src="`https://directus.i9sellz.com.br/assets/${prefeitura.logo}`" alt="{{ prefeitura.nome }}"
                      width="200" />
                  </a>
                </div>
              </div>
              <div class="col-auto me-xxl-auto">
                <nav class="main-menu d-none d-xl-inline-block">
                  <ul>
                    <li class="menu-item-has-children">
                      <a href="#">Institucional</a>
                      <ul class="sub-menu">
                        <li><a href="/prefeitura">A Prefeitura</a></li>
                        <li><a href="/prefeitura/prefeito">Prefeito</a></li>
                        <li><a href="/prefeitura/prefeito">Vice-Prefeito</a></li>
                      </ul>
                    </li>
                    <li class="menu-item">
                      <a href="/secretarias">Secretarias</a>
                    </li>
                    <li class="menu-item">
                      <a href="/carta-de-servico">Carta de Serviço</a>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">Transparência</a>
                      <ul class="sub-menu">
                        <li class="menu-item-has-children">
                          <a href="#">Shop</a>
                          <ul class="sub-menu">
                            <li><a href="shop.html">Shop</a></li>
                            <li><a href="shop-details.html">Shop Details</a></li>
                            <li><a href="cart.html">Cart Page</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                            <li><a href="wishlist.html">Wishlist</a></li>
                          </ul>
                        </li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="case-study.html">Case Study</a></li>
                        <li><a href="case-study-details.html">Case Study Details</a></li>
                        <li><a href="career.html">Career</a></li>
                        <li><a href="career-details.html">Career Details</a></li>
                        <li><a href="team-guide.html">Team</a></li>
                        <li><a href="team-guider-details.html">Team Details</a></li>
                        <li><a href="faq.html">Faq Page</a></li>
                        <li><a href="price.html">Price Package</a></li>
                        <li><a href="error.html">Error Page</a></li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">Notícias</a>
                      <ul class="sub-menu">
                        <li><a href="service.html">Services</a></li>
                        <li><a href="service-details.html">Service Details</a></li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">Acesso à informação</a>
                      <ul class="sub-menu">
                        <li><a href="project-grid.html">Project Grid</a></li>
                        <li><a href="project-details.html">Project Details</a></li>
                      </ul>
                    </li>

                  </ul>
                </nav>
                <button type="button" class="th-menu-toggle d-block d-xl-none"><i class="far fa-bars"></i></button>
              </div>
              <div class="col-auto d-none d-xl-block">
                <div class="header-button">
                  <button type="button" class="icon-btn searchBoxToggler">
                    <img src="/assets/img/icon/search.svg" alt="icon">
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="logo-bg" data-mask-src="/assets/img/logo_bg_mask.png"></div>
        </div>
      </div>
    </header>

    <NuxtPage />

    <div class="space-bottom space-top">
      <div class="container">
        <div class="contact-map style2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sAngfuztheme!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
            allowfullscreen="" loading="lazy"></iframe>
          <div class="contact-icon">
            <img src="/assets/img/icon/location-dot3.svg" alt="">
          </div>
        </div>
      </div>
    </div>

    <footer class="footer-wrapper bg-title footer-layout2 footer-layout5 space-top"
      style="background-color: var(--theme-color) !important;">
      <div class="widget-area">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-md-6 col-xl-3">
              <div class="widget footer-widget">
                <div class="th-widget-about">
                  <div class="about-logo">
                    <a href="index.html"><img :src="`https://directus.i9sellz.com.br/assets/${prefeitura.logo}`"
                        alt="{{ prefeitura.nome }}" width="200" /></a>
                  </div>
                  <div class="th-social">
                    <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://www.whatsapp.com/"><i class="fab fa-whatsapp"></i></a>
                    <a href="https://instagram.com/"><i class="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-auto">
              <div class="widget widget_nav_menu footer-widget">
                <h3 class="widget_title">Mapa do site</h3>
                <div class="menu-all-pages-container">
                  <ul class="menu">

                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About us</a></li>
                    <li><a href="service.html">Our Service</a></li>
                    <li><a href="contact.html">Terms of Service</a></li>
                    <li><a href="service.html">News & Media</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-auto">
              <div class="widget footer-widget">
                <h3 class="widget_title">Get In Touch</h3>
                <div class="th-widget-contact">
                  <div class="info-box_text">
                    <div class="icon">
                      <img src="/assets/img/icon/phone.svg" alt="img">
                    </div>
                    <div class="details">
                      <p><a href="tel:+01234567890" class="info-box_link">+01 234 567 890</a></p>
                      <p><a href="tel:+09876543210" class="info-box_link">+09 876 543 210</a></p>
                    </div>
                  </div>
                  <div class="info-box_text">
                    <div class="icon">
                      <img src="/assets/img/icon/envelope.svg" alt="img">
                    </div>
                    <div class="details">
                      <p><a href="mailto:mailinfo00@atek.com" class="info-box_link">mailinfo00@atek.com</a></p>
                      <p><a href="mailto:support24@atek.com" class="info-box_link">support24@atek.com</a></p>
                    </div>
                  </div>
                  <div class="info-box_text">
                    <div class="icon"><img src="/assets/img/icon/location-dot.svg" alt="img"></div>
                    <div class="details">
                      <p><a href="https://maps.app.goo.gl/QyH2fFoJ9fii93mt7" target="_blank">789 Inner Lane, Holy park,
                          California, USA</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-wrap">
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div class="col-md-6">
              <p class="copyright-text">Copyright © 2025 <a href="index.html">Atek</a>. All rights reserved.</p>
            </div>
            <div class="col-md-6 text-end d-none d-md-block">
              <div class="footer-links">
                <ul>
                  <li><a href="about.html">Terms &amp; Conditions</a></li>
                  <li><a href="about.html">Careers</a></li>
                  <li><a href="about.html">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watchEffect } from 'vue'
import { useHead } from '#imports'
import axios from 'axios'

const prefeitura = ref([])
const tema = ref({})
const corPrincipal = ref('#C0C0C0') // Valor padrão

onMounted(async () => {
  try {
    const res = await axios.get('/api/prefeitura')
    prefeitura.value = Array.isArray(res.data) ? res.data[0] : res.data
    console.log('Prefeitura:', prefeitura.value)
    await nextTick()
  } catch (e) {
    console.error('Erro ao buscar entidade:', e)
  }

  try {
    const res = await axios.get('/api/tema')
    tema.value = Array.isArray(res.data) ? res.data[0] : res.data
    console.log('Tema:', tema.value)
    if (tema.value?.cor_principal) {
      corPrincipal.value = tema.value.cor_principal
    }
  } catch (e) {
    console.error('Erro ao buscar tema:', e)
  }
})

onMounted(() => {
  if (process.client) {
    const initVLibras = () => {
      if (window.VLibras) {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
      } else {
        // Tenta novamente depois de um tempo se não carregou ainda
        setTimeout(initVLibras, 500);
      }
    };
    initVLibras();
  }
});

// Atualiza o <head> dinamicamente com a cor quando `corPrincipal` mudar
watchEffect(() => {
  useHead({
    style: [
      {
        children: `
          :root {
            --theme-color: ${corPrincipal.value};
            --primary-color: ${corPrincipal.value};
          }
        `,
        type: 'text/css',
        id: 'theme-vars'
      }
    ]
  })
})

// Cabeçalho inicial (resto do conteúdo)
useHead({
  title: 'Prefeitura de Santa Inês',
  meta: [
    { name: 'author', content: 'Atek' },
    { name: 'description', content: 'Prefeitura de Santa Inês' },
    { name: 'keywords', content: 'Prefeitura de Santa Inês' },
    { name: 'robots', content: 'INDEX,FOLLOW' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
    { name: 'theme-color', content: '#ffffff' }
  ],
  link: [
    { rel: 'manifest', href: '/assets/img/favicons/manifest.json' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/img/favicons/apple-icon-180x180.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/img/favicons/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/img/favicons/favicon-16x16.png' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@200..1000&family=Plus+Jakarta+Sans:wght@200..800&display=swap'
    },
    { rel: 'stylesheet', href: '/assets/css/bootstrap.min.css' },
    { rel: 'stylesheet', href: '/assets/css/fontawesome.min.css' },
    { rel: 'stylesheet', href: '/assets/css/magnific-popup.min.css' },
    { rel: 'stylesheet', href: '/assets/css/swiper-bundle.min.css' },
    { rel: 'stylesheet', href: '/assets/css/style.css' }
  ],
  script: [
    { src: '/assets/js/vendor/jquery-3.7.1.min.js', body: true },
    { src: '/assets/js/swiper-bundle.min.js', body: true },
    { src: '/assets/js/bootstrap.min.js', body: true },
    { src: '/assets/js/jquery.magnific-popup.min.js', body: true },
    { src: '/assets/js/jquery.counterup.min.js', body: true },
    { src: '/assets/js/circle-progress.js', body: true },
    { src: '/assets/js/jquery-ui.min.js', body: true },
    { src: '/assets/js/imagesloaded.pkgd.min.js', body: true },
    { src: '/assets/js/isotope.pkgd.min.js', body: true },
    { src: '/assets/js/nice-select.min.js', body: true },
    { src: '/assets/js/wow.min.js', body: true },
    { src: '/assets/js/gsap.min.js', body: true },
    { src: '/assets/js/ScrollTrigger.min.js', body: true },
    { src: '/assets/js/SplitText.js', body: true },
    { src: '/assets/js/lenis.min.js', body: true },
    { src: '/assets/js/main.js', body: true },
    {
      src: 'https://vlibras.gov.br/app/vlibras-plugin.js',
      body: true
    }
  ]
})
</script>

<template>
  <div>
    <header class="th-header header-layout1">
      <div class="sticky-wrapper">
        <!-- Main Menu Area -->
        <div class="menu-area">
          <div class="container th-container">
            <div class="row align-items-center justify-content-between">
              <div class="col-auto">
                <div class="header-logo">
                  <a href="/">
                    <img :src="`https://directus.i9sellz.com.br/assets/${prefeitura.logo}`" alt="{{ prefeitura.nome }}" width="200" />
                  </a>
                </div>
              </div>
              <div class="col-auto me-xxl-auto">
                <nav class="main-menu d-none d-xl-inline-block">
                  <ul>
                    <li class="menu-item-has-children mega-menu-wrap">
                      <a class="active" href="index.html">Institucional</a>
                      <ul class="mega-menu mega-menu-content allow-natural-scroll">
                        <li>
                          <div class="container">
                            <div class="row gy-4">
                              <div class="col-lg-3">
                                <div class="mega-menu-box">
                                  <div class="mega-menu-img">
                                    <img src="/assets/img/pages/home-consulting.jpg" alt="Home One">
                                    <div class="btn-wrap">
                                      <a href="index.html" class="th-btn">View Demo</a>
                                    </div>
                                  </div>
                                  <h3 class="mega-menu-title"><a href="home-consulting.html"><span>01.</span>Home
                                      Consulting</a></h3>
                                </div>
                              </div>
                              <div class="col-lg-3">
                                <div class="mega-menu-box">
                                  <div class="mega-menu-img">
                                    <img src="/assets/img/pages/home-cloud.jpg" alt="Home Two">
                                    <div class="btn-wrap">
                                      <a href="home-cloud.html" class="th-btn ">View Demo</a>
                                    </div>
                                  </div>
                                  <h3 class="mega-menu-title"><a href="home-cloud.html"><span>02.</span>Home Cloud</a>
                                  </h3>
                                </div>
                              </div>
                              <div class="col-lg-3">
                                <div class="mega-menu-box">
                                  <div class="mega-menu-img">
                                    <img src="/assets/img/pages/home-ai.jpg" alt="Home Three">
                                    <div class="btn-wrap">
                                      <a href="home-ai-machine.html" class="th-btn ">View Demo</a>
                                    </div>
                                  </div>
                                  <h3 class="mega-menu-title"><a href="home-ai-machine.html"><span>03.</span>Home
                                      Ai-Machine</a>
                                  </h3>
                                </div>
                              </div>
                              <div class="col-lg-3">
                                <div class="mega-menu-box">
                                  <div class="mega-menu-img">
                                    <img src="/assets/img/pages/startup.jpg" alt="Home Four">
                                    <div class="btn-wrap">
                                      <a href="home-startup.html" class="th-btn ">View Demo</a>
                                    </div>
                                  </div>
                                  <h3 class="mega-menu-title"><a href="home-startup.html"><span>04.</span>Home
                                      Startup</a>
                                  </h3>
                                </div>
                              </div>
                              <div class="col-lg-3">
                                <div class="mega-menu-box">
                                  <div class="mega-menu-img">
                                    <img src="/assets/img/pages/home-cybersecurity.jpg" alt="Home Five">
                                    <div class="btn-wrap">
                                      <a href="home-cybersecurity.html" class="th-btn ">View Demo</a>
                                    </div>
                                  </div>
                                  <h3 class="mega-menu-title"><a href="home-cybersecurity.html"><span>05.</span>Home
                                      Cybersecurity</a>
                                  </h3>
                                </div>
                              </div>
                              <div class="col-lg-3">
                                <div class="mega-menu-box">
                                  <div class="mega-menu-img">
                                    <img src="/assets/img/pages/home-sass.jpg" alt="Home Six">
                                    <div class="btn-wrap">
                                      <a href="home-sass.html" class="th-btn ">View Demo</a>
                                    </div>
                                  </div>
                                  <h3 class="mega-menu-title"><a href="home-sass.html"><span>06.</span>SaaS Business
                                      Product</a>
                                  </h3>
                                </div>
                              </div>
                              <div class="col-lg-3">
                                <div class="mega-menu-box">
                                  <div class="mega-menu-img">
                                    <img src="/assets/img/pages/home-tech-support.jpg" alt="Home Seven">
                                    <div class="btn-wrap">
                                      <a href="home-tech-support.html" class="th-btn ">View
                                        Demo</a>
                                    </div>
                                  </div>
                                  <h3 class="mega-menu-title"><a href="home-tech-support.html"><span>07.</span>Tech
                                      Support Services</a></h3>
                                </div>
                              </div>
                              <div class="col-lg-3">
                                <div class="mega-menu-box">
                                  <div class="mega-menu-img">
                                    <img src="/assets/img/pages/software-deve.jpg" alt="Home Eight">
                                    <div class="btn-wrap">
                                      <a href="home-software-development.html" class="th-btn ">View Demo</a>
                                    </div>
                                  </div>
                                  <h3 class="mega-menu-title"><a
                                      href="home-software-development.html"><span>08.</span>Home
                                      Software-Development</a>
                                  </h3>
                                </div>
                              </div>
                              <div class="col-lg-3">
                                <div class="mega-menu-box">
                                  <div class="mega-menu-img">
                                    <img src="/assets/img/pages/app-development.jpg" alt="Home Nine">
                                    <div class="btn-wrap">
                                      <a href="home-app-development.html" class="th-btn ">View Demo</a>
                                    </div>
                                  </div>
                                  <h3 class="mega-menu-title"><a href="home-app-development.html"><span>09.</span>Web &
                                      App Development</a>
                                  </h3>
                                </div>
                              </div>
                              <div class="col-lg-3">
                                <div class="mega-menu-box">
                                  <div class="mega-menu-img">
                                    <img src="/assets/img/pages/it-solutions.jpg" alt="Home Ten">
                                    <div class="btn-wrap">
                                      <a href="home-it-solutions.html" class="th-btn ">View Demo</a>
                                    </div>
                                  </div>
                                  <h3 class="mega-menu-title"><a href="home-it-solutions.html"><span>10.</span>Home It
                                      Solutions</a>
                                  </h3>
                                </div>
                              </div>
                              <div class="col-lg-3">
                                <div class="mega-menu-box">
                                  <div class="mega-menu-img">
                                    <img src="/assets/img/pages/digital-transformation.jpg" alt="Home Eleven">
                                    <div class="btn-wrap">
                                      <a href="home-digital-transformation.html" class="th-btn">View Demo</a>
                                    </div>
                                  </div>
                                  <h3 class="mega-menu-title"><a
                                      href="home-digital-transformation.html"><span>11.</span>Home Digital
                                      Transformation</a>
                                  </h3>
                                </div>
                              </div>
                              <div class="col-lg-3">
                                <div class="mega-menu-box">
                                  <div class="mega-menu-img">
                                    <img src="/assets/img/pages/data-analytics.jpg" alt="Home Twelf">
                                    <div class="btn-wrap">
                                      <a href="home-data-analytics.html" class="th-btn ">View Demo</a>
                                    </div>
                                  </div>
                                  <h3 class="mega-menu-title"><a href="home-data-analytics.html"><span>12.</span>Home
                                      Data Analytics & Big</a>
                                  </h3>
                                </div>
                              </div>
                              <div class="col-lg-3">
                                <div class="mega-menu-box">
                                  <div class="mega-menu-img">
                                    <img src="/assets/img/pages/blockchain-fintech.jpg" alt="Home ten">
                                    <div class="btn-wrap">
                                      <a href="home-blockchain-fintech.html" class="th-btn ">View Demo</a>
                                    </div>
                                  </div>
                                  <h3 class="mega-menu-title"><a
                                      href="home-blockchain-fintech.html"><span>13.</span>Home
                                      Blockchain & Fintech</a>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">Secretarias</a>
                      <ul class="sub-menu">
                        <li><a href="about.html">About Us 1</a></li>
                        <li><a href="about2.html">About Us 2</a></li>
                      </ul>
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
  </div>
</template>

<script setup>
import { useHead } from '#imports'
import { ref, onMounted, nextTick } from 'vue'
import axios from 'axios'

const prefeitura = ref([])

onMounted(async () => {
  try {
    const res = await axios.get('/api/entidade')

    prefeitura.value = Array.isArray(res.data) ? res.data[0] : res.data

    console.log('Prefeitura:', prefeitura.value)

    await nextTick()
    await apply({ directusUrl: 'https://directus.i9sellz.com.br/' })
  } catch (e) {
    console.error(e)
  }
})
useHead({
  title: 'Atek - It Business and Consulting Service',
  meta: [
    { name: 'author', content: 'Atek' },
    { name: 'description', content: 'Atek - It Business and Consulting Service Html Template' },
    { name: 'keywords', content: 'Atek - It Business and Consulting Service Html Template' },
    { name: 'robots', content: 'INDEX,FOLLOW' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
    { name: 'theme-color', content: '#ffffff' }
  ],
  link: [
    // Favicons
    { rel: 'manifest', href: '/assets/img/favicons/manifest.json' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/img/favicons/apple-icon-180x180.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/img/favicons/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/img/favicons/favicon-16x16.png' },

    // Google Fonts
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@200..1000&family=Plus+Jakarta+Sans:wght@200..800&display=swap'
    },

    // CSS files
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
    { src: '/assets/js/main.js', body: true }
  ]
})


</script>

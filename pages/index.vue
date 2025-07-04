<template>
  <div class="th-hero-wrapper hero-1" id="hero">
    <div class="swiper th-slider hero-slider-1" id="heroSlide1"
      data-slider-options='{"effect":"fade","menu": ["", "", ""],"heroSlide1": {"swiper-container": {"pagination": {"el": ".swiper-pagination", "clickable": true }}}}'>
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="hero-inner">
            <div class="th-hero-bg" data-bg-src="/assets/img/hero/hero-1.png">
            </div>
            <div class="hero-1-shape d-none d-lg-block" data-ani="slideinleft" data-ani-delay="0.4s">
              <img src="/assets/img/hero/hero-1.png" alt="hero-shape" style="height: 802px; width: 1920px;">
            </div>
            <div class="container">
              <div class="row">
                <div class="col-xl-9 col-lg-8">
                  <div class="hero-style1">
                    <h1 class="hero-title" data-ani="slideinup" data-ani-delay="0.4s">
                      Prefeitura de Santa Inês lança projeto de pesquisa</h1>
                    <p class="hero-text text-white" data-ani="slideinup" data-ani-delay="0.6s">As inscrições iniciam na próxima sexta-feira.</p>
                    <div class="btn-group" data-ani="slideinup" data-ani-delay="0.8s">
                      <a href="contact.html" class="th-btn style7 th-icon">
                        Ler mais <i class="fa-light fa-arrow-right-long"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="hero-inner">
            <div class="th-hero-bg" data-bg-src="/assets/img/hero/hero-2.png/">
            </div>
            <div class="hero-1-shape d-none d-lg-block" data-ani="slideinleft" data-ani-delay="0.4s">
              <img src="/assets/img/hero/hero-2.png" alt="hero-shape" style="height: 802px; width: 1920px;">
            </div>
            <div class="container">
              <div class="row">
                <div class="col-xl-9 col-lg-8">
                  <div class="hero-style1">
                    <h1 class="hero-title" data-ani="slideinup" data-ani-delay="0.4s">
                      Secretaria de Meio ambiente realiza mutirão de limpeza na praia.</h1>
                    <p class="hero-text text-white" data-ani="slideinup" data-ani-delay="0.6s">Agentes de limpeza operam em toda a orla da cidade.</p>
                    <div class="btn-group" data-ani="slideinup" data-ani-delay="0.8s">
                      <a href="contact.html" class="th-btn style7 th-icon">
                        Ler mais <i class="fa-light fa-arrow-right-long"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="th-swiper-custom">
        <button data-slider-prev="#heroSlide1" class="slider-arrow slider-prev"><img
            src="/assets/img/icon/right-arrow.svg" alt=""></button>
        <div class="slider-pagination"></div>
        <button data-slider-next="#heroSlide1" class="slider-arrow slider-next"><img
            src="/assets/img/icon/left-arrow.svg" alt=""></button>
      </div>

    </div>
  </div>


  <!-- Secretarias -->
  <section class="project-area position-relative overflow-hidden space" id="project-sec">
    <div class="container">
      <div class="project-titlebox">
        <div class="row">
          <div class="col-md-8 col-xl-8">
            <div class="title-area text-center text-md-start">
              <h2 class="sec-title text-anime-style-3">Secretarias</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="slider-area slider-drag-wrap">
        <div class="swiper th-slider has-shadow"
          data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"},"1300":{"slidesPerView":"4"}}}'>
          <div class="swiper-wrapper">

            <div class="swiper-slide" v-for="secretaria in secretarias" :key="secretaria.id">
              <div class="project-item2 style2 th-ani gsap-cursor">
                <div class="project-img" data-mask-src="/assets/img/shape/sv-shape.png">
                  <img :src="`https://directus.i9sellz.com.br/assets/${secretaria.foto_secretario}`" alt="image">
                </div>
                <div class="project-content">
                  <h3 class="box-title">
                    <a href="service-details.html">{{ secretaria.descricao }}</a>
                  </h3>
                  <span class="sub-title">{{ secretaria.nome_secretario }}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Blog section -->
  <section class="overflow-hidden space bg-smoke" id="blog-sec">
    <div class="container">
      <div class="mb-30 text-center text-lg-start">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-7">
            <div class="title-area mb-md-0">
              <h2 class="sec-title text-anime-style-3">Últimas notícias</h2>
            </div>
          </div>
          <div class="col-lg-auto wow fadeInUp" data-wow-delay=".3s">
            <a href="blog.html" class="th-btn style4 th-radius th-icon">Ver mais notícias <i
                class="fa-light fa-arrow-right-long"></i></a>
          </div>
        </div>
      </div>
      <div class="slider-area">
        <div class="swiper th-slider has-shadow" id="blogSlider1"
          data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'>
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="noticia in noticias" :key="noticia.id">
              <div class="blog-box th-ani">
                <div class="blog-img global-img">
                  <img :src="`https://directus.i9sellz.com.br/assets/${noticia.imagem}`" alt="blog image" />
                </div>
                <div class="blog-box_content">
                  <div class="blog-meta">
                    <a class="author" href="blog.html">{{ formatarData(noticia.date_created) }}</a>
                    <a href="blog.html">{{ noticia.tempo_leitura }}</a>
                  </div>
                  <h3 class="box-title">
                    <a href="blog-details.html" class="noticia-titulo"
                      :data-directus="setAttr({ collection: 'noticias', item: noticia.id, fields: ['titulo', 'capa'], mode: 'popover' })">{{
                        noticia.titulo }}</a>
                  </h3>
                  <a href="blog-details.html" class="th-btn style4 th-radius th-icon">Ler mais
                    <i class="fa-light fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="shape-mockup shape1 d-none d-xxl-block" data-bottom="5%" data-left="3%">
      <img src="/assets/img/shape/blog-1-shape.png" alt="shape">
    </div>
    <div class="shape-mockup shape2 d-none d-xl-block" data-top="28%" data-right="5%">
      <img src="/assets/img/shape/ab-1-shape-1.png" alt="shape">
    </div>

  </section>

</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import axios from 'axios'
import { apply, setAttr } from '@directus/visual-editing'

const noticias = ref([])
const secretarias = ref([])

function formatarData(dataISO) {
  const d = new Date(dataISO)
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
}

onMounted(async () => {
  try {
    const res = await axios.get('/api/noticias')
    const noticias_res = await axios.get('/api/secretarias/')

    noticias.value = res.data
    secretarias.value = noticias_res.data

    console.log('Noticias:', noticias.value)
    console.log('Secretarias:', secretarias.value)

    await nextTick()
    await apply({ directusUrl: 'https://directus.i9sellz.com.br/' })
  } catch (e) {
    console.error(e)
  }
})
</script>

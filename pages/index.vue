<template>
  <div class="th-hero-wrapper hero-1" id="hero">
    <div class="swiper th-slider hero-slider-1" id="heroSlide1"
      data-slider-options='{"effect":"fade","menu": ["", "", ""],"heroSlide1": {"swiper-container": {"pagination": {"el": ".swiper-pagination", "clickable": true }}}}'>
      <div class="swiper-wrapper" style="height: 802px;">
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
                    <p class="hero-text text-white" data-ani="slideinup" data-ani-delay="0.6s">As inscrições iniciam na
                      próxima sexta-feira.</p>
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
            <div class="th-hero-bg" data-bg-src="/assets/img/hero/hero-2.png">
            </div>
            <div class="hero-1-shape d-none d-lg-block" data-ani="slideinleft" data-ani-delay="0.4s">
              <img src="/assets/img/hero/hero-2.png" alt="hero-shape" style="height: 802px; width: 1920px;">
            </div>
            <div class="container">
              <div class="row">
                <div class="col-xl-9 col-lg-8">
                  <div class="hero-style1">
                    <h1 class="hero-title" data-ani="slideinup" data-ani-delay="0.4s">
                      Cidade terá primeiro centro de coleta seletiva da região</h1>
                    <p class="hero-text text-white" data-ani="slideinup" data-ani-delay="0.6s">As centrais iniciarão na
                      próxima quinta-feira (28)</p>
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


  <div class="service-area bg-top-center position-relative space overflow-hidden" id="service-sec"
    data-bg-src="assets/img/bg/line-pattern2.png">
    <div class="container">
      <div class="row">
        <div class="service-list-area">
          <div class="service-list-wrap sv-list2" :class="{ active: index === 0 }" v-for="(noticia, index) in noticias" :key="noticia.id">
            <div class="service-list" :style="{
              backgroundImage: `url(https://directus.i9sellz.com.br/assets/${noticia.imagem})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }">
              <div class="service-content">
                <h4 class="box-title">
                  <a href="service-details.html">{{ noticia.titulo }}</a>
                </h4>
              </div>
              <NuxtLink :to="`/noticias/${noticia.slug}`" class="th-btn style2">
                Ler mais <i class="fa-light fa-arrow-right-long"></i>
              </NuxtLink>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>

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
              <div class="blog-box th-ani"
                :data-directus="setAttr({ collection: 'noticias', item: noticia.id, fields: ['titulo', 'imagem'], mode: 'popover' })">
                <div class="blog-img global-img">
                  <img :src="`https://directus.i9sellz.com.br/assets/${noticia.imagem}`" alt="blog image" />
                </div>
                <div class="blog-box_content">
                  <div class="blog-meta">
                    <a class="author" href="blog.html">{{ formatarData(noticia.date_created) }}</a>
                    <a href="blog.html">{{ noticia.tempo_leitura }}</a>
                  </div>
                  <h3 class="box-title">
                    <NuxtLink :to="`/noticias/${noticia.slug}`"
                      :data-directus="setAttr({ collection: 'noticias', item: noticia.id, fields: ['titulo', 'capa'], mode: 'popover' })">
                      {{ noticia.titulo }}
                    </NuxtLink>
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

  <!-- Prefeitura -->
  <div class="about-area space-bottom mt-4">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="title-area text-center">
            <h2 class="sec-title mb-20 text-anime-style-3">Prefeitura</h2>
          </div>
        </div>
      </div>

      <div class="row gy-4 align-items-center text-center">
        <div class="col-lg-6">
          <img :src="`https://directus.i9sellz.com.br/assets/${prefeitura.foto_prefeito}`" :alt="prefeitura.prefeito"
            class="img-prefeito mb-3" />
          <h3 class="box-title text-anime-style-2">
            {{ prefeitura.prefeito }}
          </h3>
        </div>
        <div class="col-lg-6">
          <img :src="`https://directus.i9sellz.com.br/assets/${prefeitura.foto_vice_prefeito}`"
            :alt="prefeitura.vice_prefeito" class="img-prefeito mb-3" />
          <h3 class="box-title text-anime-style-2">{{ prefeitura.vice_prefeito }}</h3>
        </div>
      </div>
    </div>
  </div>




  <!-- Secretarias -->
  <section class="project-area position-relative overflow-hidden bg-top-center space"
    style="background-color: var(--theme-color);">
    <div class="container">
      <div class="title-area text-center">
        <h2 class="sec-title mb-20 text-anime-style-3" style="color: white;">Secretarias</h2>
      </div>
      <div class="team-inner team-slider-1">
        <div class="row gy-30 justify-content-center">
          <!-- Single Item -->
          <div class="col-xl-3 col-md-6" v-for="secretaria in secretarias" :key="secretaria.id">
            <div class="th-team team-box team-inner-box">
              <div class="team-img">
                <img :src="`https://directus.i9sellz.com.br/assets/${secretaria.foto_secretario}`" alt="Secretario"
                  style="width: 200px; height: 200px;">
              </div>
              <div class="team-content">
                <div class="media-body">
                  <h3 class="box-title"><a href="team-guider-details.html">{{ secretaria.descricao }}</a></h3>
                  <span class="team-desig">{{ secretaria.nome_secretario }}</span>
                  <div class="th-social">
                    <a target="_blank" href="https://facebook.com/"><i class="fab fa-facebook-f"></i></a>
                    <a target="_blank" href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
                    <a target="_blank" href="https://instagram.com/"><i class="fab fa-instagram"></i></a>
                    <a target="_blank" href="https://linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
                    <a target="_blank" href="https://youtube.com/"><i class="fa-brands fa-youtube"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="slider-area">
        <div class="swiper th-slider" id="projectSlider"
          data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"},"1300":{"slidesPerView":"3"}}}'>
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="secretaria in secretarias" :key="secretaria.id">
              <div class="project-item">
                <div class="box-img global-img" style="height: 506px;">
                  <img :src="`https://directus.i9sellz.com.br/assets/${secretaria.foto_secretario}`" alt="image">
                </div>
                <div class="box-content">
                  <h3 class="box-title"><a href="project-details.html">{{ secretaria.nome_secretario }}</a></h3>
                  <p class="box-text">{{ secretaria.descricao }}</p>
                </div>
              </div>
            </div>

          </div>

        </div>
        <button data-slider-prev="#projectSlider" class="slider-arrow slider-prev">
          <img src="/assets/img/icon/right-arrow2.svg" alt="">
        </button>
        <button data-slider-next="#projectSlider" class="slider-arrow slider-next">
          <img src="/assets/img/icon/left-arrow2.svg" alt="">
        </button>
      </div> -->
    </div>

  </section>


  <!-- Serviços -->
  <div class="container my-5">
    <div class="title-area text-center">
      <h2 class="sec-title mb-20 text-anime-style-3">Serviços e Informações</h2>
    </div>

    <div class="slider-area mt-4 position-relative">
      <div class="swiper th-slider" id="serviceSlider7"
        data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":1},"768":{"slidesPerView":2},"992":{"slidesPerView":3},"1200":{"slidesPerView":4},"1300":{"slidesPerView":5}}}'>
        <div class="swiper-wrapper">

          <!-- Slide 1 -->
          <div class="swiper-slide card-service-item">
            <div class="service-card-modern">
              <div class="icon-box">📂</div>
              <h3><a href="service.html">Portal do Servidor</a></h3>
            </div>
          </div>

          <!-- Slide 2 -->
          <div class="swiper-slide card-service-item">
            <div class="service-card-modern">
              <div class="icon-box">📊</div>
              <h3><a href="service.html">Execução Orçamentária e Financeira</a></h3>
            </div>
          </div>

          <!-- Slide 3 -->
          <div class="swiper-slide card-service-item">
            <div class="service-card-modern">
              <div class="icon-box">💰</div>
              <h3><a href="service.html">Folha de Pagamento</a></h3>
            </div>
          </div>

          <!-- Slide 4 -->
          <div class="swiper-slide card-service-item">
            <div class="service-card-modern">
              <div class="icon-box">🏛️</div>
              <h3><a href="service.html">Sistema Tributário</a></h3>
            </div>
          </div>

          <!-- Slide 5 -->
          <div class="swiper-slide card-service-item">
            <div class="service-card-modern">
              <div class="icon-box">📑</div>
              <h3><a href="service.html">Licitações</a></h3>
            </div>
          </div>

          <!-- Slide 6 -->
          <div class="swiper-slide card-service-item">
            <div class="service-card-modern">
              <div class="icon-box">📬</div>
              <h3><a href="service.html">E-SIC</a></h3>
            </div>
          </div>

        </div>

        <!-- Setas -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>
  </div>



  <section class="slider-area space-top">
    <div class="swiper mySlider">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="https://painel.siganet.net.br/upload/0000021958/cms/images/thumbs/1140x150_65fc7b3a68450df80249b8af68d38d9f.png"
            alt="Banner 1" class="w-100" />
        </div>
        <div class="swiper-slide">
          <img
            src="https://painel.siganet.net.br/upload/0000000399/cms/images/thumbs/1140x150_547d19f690d8159ae2658443ddb670dd.png"
            alt="Banner 2" class="w-100" />
        </div>
      </div>

      <!-- Navigation -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>

      <!-- Pagination (opcional) -->
      <div class="swiper-pagination"></div>
    </div>
  </section>



  <!-- <section class="team-area3 position-relative bg-top-center space" data-bg-src="/assets/img/bg/team_bg_2.jpg">
    <div class="container z-index-common">
      <div class="title-area text-center">
        <h2 class="sec-title text-anime-style-3">Secretarias</h2>
      </div>
      <div class="slider-area">
        <div class="swiper th-slider teamSlider3 has-shadow" id="teamSlider3"
          data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'>
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="secretaria in secretarias" :key="secretaria.id">
              <div class="th-team team-grid">
                <div class="team-img">
                  <img src="/assets/img/team/team_img_bg_2_1.jpg" alt="Team">
                </div>
                <div class="team-img2">
                  <img :src="`https://directus.i9sellz.com.br/assets/${secretaria.foto_secretario}`" alt="image">
                </div>
                <div class="team-content">
                  <div class="media-body">
                    <h3 class="box-title"><a href="team-guider-details.html">{{ secretaria.nome_secretario }}</a></h3>
                    <span class="team-desig">{{ secretaria.descricao }}</span>
                    <div class="th-social">
                      <a target="_blank" href="https://facebook.com/"><i class="fab fa-facebook-f"></i></a>
                      <a target="_blank" href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
                      <a target="_blank" href="https://linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
                      <a target="_blank" href="https://youtube.com/"><i class="fab fa-youtube"></i></a>
                      <a target="_blank" href="https://instagram.com/"><i class="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div class="slider-pagination"></div>

        </div>
        <button data-slider-prev="#teamSlider3" class="slider-arrow slider-prev"><img
            src="/assets/img/icon/right-arrow2.svg" alt=""></button>
        <button data-slider-next="#teamSlider3" class="slider-arrow slider-next"><img
            src="/assets/img/icon/left-arrow2.svg" alt=""></button>
      </div>
    </div>
  </section> -->

  <!-- Secretarias -->
  <!-- <section class="project-area position-relative overflow-hidden space" id="project-sec">
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
  </section> -->



</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import axios from 'axios'
import { apply, setAttr } from '@directus/visual-editing'

const noticias = ref([])
const secretarias = ref([])
const prefeitura = ref([])

function formatarData(dataISO) {
  const d = new Date(dataISO)
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
}

onMounted(async () => {
  try {
    const res = await axios.get('/api/noticias')
    const noticias_res = await axios.get('/api/secretarias/')
    const prefeitura_res = await axios.get('/api/prefeitura')

    noticias.value = res.data
    secretarias.value = noticias_res.data
    prefeitura.value = Array.isArray(prefeitura_res.data) ? prefeitura_res.data[0] : prefeitura_res.data

    console.log('Noticias:', noticias.value)
    console.log('Secretarias:', secretarias.value)
    console.log('Prefeitura:', prefeitura.value)

    await nextTick()
    await apply({ directusUrl: 'https://directus.i9sellz.com.br/' })
  } catch (e) {
    console.error(e)
  }
})

onMounted(() => {
  try {
    new Swiper('.mySlider', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  } catch (err) {
    console.error('Erro ao iniciar swiper:', err)
  }
})




</script>

<style scoped>
.slider-area {
  max-width: 1140px;
  margin: 0 auto;
  position: relative;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* Alinha as setas verticalmente ao centro */
.swiper-button-next,
.swiper-button-prev {
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

/* Esconde texto da seta padrão (acessibilidade) */
.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 16px;
  font-weight: bold;
}

/* Animação ao passar o mouse */
.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: rgba(0, 0, 0, 0.7);
  transform: translateY(-50%) scale(1.1);
}

/* Reposicionamento das setas */
.swiper-button-next {
  right: 10px;
}

.swiper-button-prev {
  left: 10px;
}

/* Paginação opcional customizada */
.swiper-pagination-bullet {
  background: white;
  opacity: 0.6;
}

.swiper-pagination-bullet-active {
  background: #007aff;
  opacity: 1;
}

.service-card-modern {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  padding: 30px 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.service-card-modern:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.service-card-modern .icon-box {
  font-size: 36px;
  margin-bottom: 15px;
  color: #007bff;
}

.service-card-modern h3 {
  font-size: 18px;
  font-weight: 600;
}

.service-card-modern a {
  color: #333;
  text-decoration: none;
}

.service-card-modern a:hover {
  color: #007bff;
}

.card-service-item {
  height: 150px;
}

.img-prefeito {
  max-width: 320px;
  width: 100%;
  height: auto;
  border-radius: 12px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

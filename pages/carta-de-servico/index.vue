<template>

  <div class="breadcumb-wrapper " style="background-color: var(--theme-color);">
    <div class="container">
      <div class="breadcumb-content">
        <h1 class="breadcumb-title">Carta de Serviços</h1>
        <ul class="breadcumb-menu">
          <li><a href="/">Home</a></li>
          <li>Carta de Serviço</li>
        </ul>
      </div>
    </div>
  </div>

  <section class="position-relative bg-top-center overflow-hidden space-top" id="service-sec">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="title-area service-title-box text-center">
                        <h2 class="sec-title  text-anime-style-3">Lista de cartas de serviços</h2>
                    </div>
                </div>
            </div>
            <div class="service-area">
                <div class="row gy-30 justify-content-center">
                    <div class="col-xl-3 col-md-6">
                        <div class="service-box service-style-1">
                            <div class="service-content">
                                <h3 class="box-title">
                                    <a href="service-details.html">IT Strategy & Planning</a>
                                </h3>
                                <p class="service-box_text">Assessing current IT infrastructure and aligning it with business goals. Developing a roadmap.</p>
                                <a class="th-btn style4" href="service-details.html">
                                    Acessar <i class="fa-light fa-arrow-right-long"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-md-6">
                        <div class="service-box service-style-1">
                            <div class="service-content">
                                <h3 class="box-title">
                                    <a href="service-details.html">Web Development</a>
                                </h3>
                                <p class="service-box_text">Assessing current IT infrastructure and aligning it with business goals. Developing a roadmap.</p>
                                <a class="th-btn style4" href="service-details.html">
                                    Acessar <i class="fa-light fa-arrow-right-long"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-md-6">
                        <div class="service-box service-style-1">
                            <div class="service-content">
                                <h3 class="box-title">
                                    <a href="service-details.html">Cloud Consulting</a>
                                </h3>
                                <p class="service-box_text">Assessing current IT infrastructure and aligning it with business goals. Developing a roadmap.</p>
                                <a class="th-btn style4" href="service-details.html">
                                    Acessar <i class="fa-light fa-arrow-right-long"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-md-6">
                        <div class="service-box service-style-1">
                            <div class="service-content">
                                <h3 class="box-title">
                                    <a href="service-details.html">Machine Learning</a>
                                </h3>
                                <p class="service-box_text">Assessing current IT infrastructure and aligning it with business goals. Developing a roadmap.</p>
                                <a class="th-btn style4" href="service-details.html">
                                    Acessar <i class="fa-light fa-arrow-right-long"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-md-6">
                        <div class="service-box service-style-1">
                            <div class="service-content">
                                <h3 class="box-title">
                                    <a href="service-details.html">House Renovation</a>
                                </h3>
                                <p class="service-box_text">Assessing current IT infrastructure and aligning it with business goals. Developing a roadmap.</p>
                                <a class="th-btn style4" href="service-details.html">
                                    Acessar <i class="fa-light fa-arrow-right-long"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-md-6">
                        <div class="service-box service-style-1">
                            <div class="service-content">
                                <h3 class="box-title">
                                    <a href="service-details.html">Material Supply</a>
                                </h3>
                                <p class="service-box_text">Assessing current IT infrastructure and aligning it with business goals. Developing a roadmap.</p>
                                <a class="th-btn style4" href="service-details.html">
                                    Acessar <i class="fa-light fa-arrow-right-long"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-md-6">
                        <div class="service-box service-style-1">
                            <div class="service-content">
                                <h3 class="box-title">
                                    <a href="service-details.html">General Contracting</a>
                                </h3>
                                <p class="service-box_text">Assessing current IT infrastructure and aligning it with business goals. Developing a roadmap.</p>
                                <a class="th-btn style4" href="service-details.html">
                                    Acessar <i class="fa-light fa-arrow-right-long"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-md-6">
                        <div class="service-box service-style-1">
                            <div class="service-content">
                                <h3 class="box-title">
                                    <a href="service-details.html">Architecture Design</a>
                                </h3>
                                <p class="service-box_text">Assessing current IT infrastructure and aligning it with business goals. Developing a roadmap.</p>
                                <a class="th-btn style4" href="service-details.html">
                                    Acessar <i class="fa-light fa-arrow-right-long"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import axios from 'axios'
import { apply, setAttr } from '@directus/visual-editing'
import { NuxtLink } from '#components'

const noticias = ref([])


onMounted(async () => {
  try {
    const res = await axios.get('/api/noticias')

    noticias.value = res.data

    console.log('Noticias:', noticias.value)

    await nextTick()
    await apply({ directusUrl: 'https://directus.i9sellz.com.br/' })
  } catch (e) {
    console.error(e)
  }
})
</script>

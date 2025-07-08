<template>

  <div class="breadcumb-wrapper " style="background-color: var(--theme-color);">
    <div class="container">
      <div class="breadcumb-content">
        <h1 class="breadcumb-title">Últimas notícias</h1>
        <ul class="breadcumb-menu">
          <li><a href="/">Home</a></li>
          <li>Últimas noticias</li>
        </ul>
      </div>
    </div>
  </div>

  <section class="blog-area space space-extra2-bottom">
    <div class="container">
      <div class="blog-area">
        <div class="row gy-30 justify-content-center">
          <div class="col-xl-4 col-md-6" v-for="noticia in noticias" :key="noticia.id">
            <div class="blog-box th-ani">
              <div class="blog-img global-img">
                <img :src="`https://directus.i9sellz.com.br/assets/${noticia.imagem}`" alt="blog image" />
              </div>
              <div class="blog-box_content">
                <div class="blog-meta">
                  <a class="author" href="blog.html">July 05, 2025</a>
                </div>
                <h3 class="box-title">
                  <NuxtLink :to="`/noticias/${noticia.slug}`"
                    :data-directus="setAttr({ collection: 'noticias', item: noticia.id, fields: ['titulo', 'capa'], mode: 'popover' })">
                    {{ noticia.titulo }}
                  </NuxtLink>
                </h3>
                <a href="blog-details.html" class="th-btn style4 th-icon mb-10">Ler mais <i
                    class="fa-light fa-arrow-right-long"></i></a>
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

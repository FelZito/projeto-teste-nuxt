<template>
    <div class="breadcumb-wrapper " style="background-color: var(--theme-color);">
        <div class="container">
            <div class="breadcumb-content">
                <h1 class="breadcumb-title">{{ noticia.titulo }}</h1>
                <ul class="breadcumb-menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/noticias">Notícias</a></li>
                    <li>{{ noticia.titulo }}</li>
                </ul>
            </div>
        </div>
    </div>

    <section class="th-blog-wrapper blog-details space-top space-extra-bottom">
        <div class="container">
            <div class="row">
                <div class="col-xxl-8 col-lg-7">
                    <div class="th-blog blog-single">
                        <div class="blog-img">
                            <img :src="`https://directus.i9sellz.com.br/assets/${noticia.imagem}`" alt="Blog Image">
                        </div>
                        <div class="blog-content" v-html="noticia.conteudo"></div>
                    </div>
                </div>
                <div class="col-xxl-4 col-lg-5">
                    <aside class="sidebar-area">
                        <div class="widget  ">
                            <h3 class="widget_title">Últimos posts</h3>
                            <div class="recent-post-wrap">
                                <div class="recent-post" v-for="item in noticias" :key="item.id">
                                    <div class="media-img">
                                        <NuxtLink :to="`/noticias/${item.slug}`">
                                            <img :src="`https://directus.i9sellz.com.br/assets/${item.imagem}`"
                                                alt="Blog Image" style="width: 85px; height: 85px;" />
                                        </NuxtLink>
                                        
                                    </div>
                                    <div class="media-body">
                                        <div class="recent-post-meta">
                                            <a href="blog.html"><i class="fa-solid fa-calendar-days" style="font-size: 12px;"></i>{{ formatarData(noticia.date_created) }}</a>
                                        </div>
                                        <h4 class="post-title">
                                            <NuxtLink :to="`/noticias/${item.slug}`" style="font-size: 14px;">
                                                {{ item.titulo }}
                                            </NuxtLink>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="widget widget_tag_cloud  ">
                            <h3 class="widget_title">Popular Tags</h3>
                            <div class="tagcloud">
                                <a href="blog.html">Advice</a>
                                <a href="blog.html">Technology</a>
                                <a href="index.html">Atek</a>
                                <a href="blog.html">Ux/Ui</a>
                                <a href="blog.html">Consulting</a>
                                <a href="blog.html">Solution</a>
                                <a href="blog.html">Health</a>
                                <a href="blog.html">IT Solution</a>
                                <a href="blog.html">Cloud</a>
                            </div>
                        </div>
                        <div class="widget widget_banner  " data-bg-src="assets/img/bg/widget_banner.jpg">
                            <div class="widget-banner position-relative text-center">
                                <span class="icon"><i class="fa-solid fa-phone"></i></span>
                                <span class="text">Need Help? Call Here</span>
                                <a class="phone" href="tel:+25669872564">+256 6987 2564</a>
                                <a href="contact.html" class="th-btn style6">Get A Quote <i
                                        class="fa-light fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import axios from 'axios'

const route = useRoute()
const slug = route.params.slug

const noticia = ref({})
const noticias = ref({})

onMounted(async () => {
    const { data } = await axios.get(`/api/noticias/${slug}`)
    noticia.value = data
})

onMounted(async () => {
  try {
    const res = await axios.get('/api/noticias')
    noticias.value = res.data
    await nextTick()
    await apply({ directusUrl: 'https://directus.i9sellz.com.br/' })
  } catch (e) {
    console.error(e)
  }
})

function formatarData(data) {
  const d = new Date(data)
  const dia = String(d.getDate()).padStart(2, '0')
  const mes = String(d.getMonth() + 1).padStart(2, '0')
  const ano = d.getFullYear() // Agora com 4 dígitos
  return `${dia}/${mes}/${ano}`
}

useHead({
    title: noticia.value.titulo,
}
)
</script>
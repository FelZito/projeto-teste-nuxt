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
                            <img :src="`https://directus.i9sellz.com.br/assets/${noticia.imagem}`" alt="blog image">
                        </div>
                        <div class="blog-content" v-html="noticia.conteudo"></div>
                    </div>
                </div>
                <div class="col-xxl-4 col-lg-5">
                    <aside class="sidebar-area">
                        <div class="widget widget_search  ">
                            <form class="search-form">
                                <input type="text" placeholder="Buscar notícias">
                                <button type="submit"><i class="far fa-search"></i></button>
                            </form>
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

onMounted(async () => {
    const { data } = await axios.get(`/api/noticias/${slug}`)
    noticia.value = data
})

useHead({
    title: noticia.value.titulo,
}
)
</script>
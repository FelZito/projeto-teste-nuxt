<template>



    <div class="breadcumb-wrapper" style="background-color: var(--theme-color);">
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
                        <h2 class="sec-title text-anime-style-3">Lista de cartas de serviços</h2>
                    </div>
                </div>
            </div>

            <div>
                <p><strong>Lei 13.460, de 26 de junho de 2017</strong></p>
                <P>O compromisso de atender com eficiência e efetividade às demandas da sociedade está presente nesta Carta. O documento traz a descrição dos principais serviços oferecidos, as formas de acessá-los e os padrões de qualidade de atendimento.
É também um instrumento de transparência. Com ela, o cidadão poderá acompanhar e avaliar o desempenho da entidade no cumprimento de sua missão e cobrar a prestação de um serviço mais eficiente e adequado às suas necessidades.</P>
            </div>
            
            <hr class="my-4" />

            <!-- FILTROS -->
            <div class="mb-4 bg-light p-4 rounded shadow-sm">
                <div class="row g-3 align-items-end">
                    <!-- Campo de busca -->
                    <div class="col-md-4">
                        <label class="form-label">Pesquise pelo título ou descrição</label>
                        <input type="text" v-model="busca" class="form-control" placeholder="Digite aqui..." />
                    </div>

                    <!-- Filtro por categoria -->
                    <div class="col-md-4">
                        <label class="form-label">Filtrar por categoria</label>
                        <select v-model="categoriaSelecionada" class="form-select">
                            <option value="">Todas</option>
                            <option v-for="categoria in categorias" :key="categoria" :value="categoria">
                                {{ categoria }}
                            </option>
                        </select>
                    </div>

                    <!-- Filtro por órgão -->
                    <div class="col-md-4">
                        <label class="form-label">Filtrar por órgão</label>
                        <select v-model="orgaoSelecionado" class="form-select">
                            <option value="">Todos</option>
                            <option v-for="orgao in orgaos" :key="orgao" :value="orgao">
                                {{ orgao }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>



            <div class="service-area">
                <div class="d-flex flex-column gap-4">
                    <div class="service-box service-style-1 w-100" v-for="carta in cartas" :key="carta.id">
                        <div class="service-content">
                            <h3 class="box-title">
                                <a href="service-details.html">{{ carta.titulo }}</a>
                            </h3>
                            <p class="service-box_text">{{ carta.legenda }}</p>
                            <a class="th-btn style4" href="service-details.html">
                                Acessar <i class="fa-light fa-arrow-right-long"></i>
                            </a>
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

const cartas = ref([])


onMounted(async () => {
    try {
        const res = await axios.get('/api/carta-servico')

        cartas.value = res.data

        console.log('Cartas:', cartas.value)

        await nextTick()
        await apply({ directusUrl: 'https://directus.i9sellz.com.br/' })
    } catch (e) {
        console.error(e)
    }
})
</script>
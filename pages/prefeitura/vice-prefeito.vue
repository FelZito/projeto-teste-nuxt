<template>
  <div class="breadcumb-wrapper " style="background-color: var(--theme-color);">
    <div class="container">
      <div class="breadcumb-content">
        <h1 class="breadcumb-title">Vice-Prefeito</h1>
        <ul class="breadcumb-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/prefeitura">Prefeitura</a></li>
          <li>Vice-Prefeito</li>
        </ul>
      </div>
    </div>
  </div>

  <section class="team-details-area space">
    <div class="container">
      <div class="team-details">
        <div class="row gy-5">
          <div class="col-xxl-5">
            <div class="th-team team-grid">
              <div class="team-img m-auto text-center text-xxl-start">
                <img :src="`https://directus.i9sellz.com.br/assets/${prefeitura.foto_vice_prefeito}`" alt="Team">
              </div>
            </div>
          </div>
          <div class="col-xxl-7">
            <div class="team-right ms-xxl-5 ps-xxl-3">
              <div class="team-content mb-25 d-md-flex justify-content-between">
                <div class="media-body">
                  <h3 class="box-title"><a href="team-details.html">{{ prefeitura.vice_prefeito }}</a></h3>
                </div>
                <div class="th-social team-social">
                  <a target="_blank" href="https://facebook.com/"><i class="fab fa-facebook-f"></i></a>
                  <a target="_blank" href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
                  <a target="_blank" href="https://linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
                  <a target="_blank" href="https://youtube.com/"><i class="fab fa-youtube"></i></a>
                  <a target="_blank" href="https://instagram.com/"><i class="fab fa-instagram"></i></a>
                </div>
              </div>
              <p class="team-dsc mb-30">
                {{ prefeitura.descricao_vice_prefeito }}
              </p>
            </div>
          </div>
          <!-- <div class="col-xl-8 ps-3 ps-xl-5 pe-xl-4">
                    <div class="team-about">
                        <h2 class="team-about_title">About Me</h2>
                        <p class="team-about_text mb-25">Venenatis purus egestas lorem aenean enim bibendum. Ac pharetra
                            egestas eget gravida turpis senectus. Sed blandit ipsum orci odio egestas egestas sed
                            bibendum. Rhoncus est proin euismod condimentum eget a tristique integer viverra. Enim sed
                            nunc magna consequat consectetur vestibulum odio posuere. Mattis nisl aenean auctor morbi
                            suspendisse diam adipiscing. Tellus egestas amet tellus phasellus.</p>
                        <p class="team-about_text mb-25"> Ornare aliquam ac a pellentesque ante. Morbi maecenas odio
                            integer adipiscing ridiculus mauris. Ornare in sit et tortor orci massa eu ultricies. Sit
                            fermentum faucibu.</p>
                        <h5 class="box-title">5 Years of Experiences</h5>
                        <p class="team-about_text mb-25"> Venenatis purus egestas lorem aenean enim bibendum. Ac
                            pharetra egestas eget gravida turpis senectus. Sed blandit ipsum orci odio egestas egestas
                            sed bibendum. Rhoncus est proin euismod condimentum eget a tristique integer viverra.</p>
                        <div class="counter-box-wrap">
                                                        <div class="counter-box">
                                <h2 class="counter-box_number"><span
                                        class="counter-number">2</span>K+                                </h2>
                                <span class="counter-box_title">Total Guide</span>
                            </div>
                                                        <div class="counter-box">
                                <h2 class="counter-box_number"><span
                                        class="counter-number">65</span>+                                </h2>
                                <span class="counter-box_title">Total Services</span>
                            </div>
                                                        <div class="counter-box">
                                <h2 class="counter-box_number"><span
                                        class="counter-number">79</span>+                                </h2>
                                <span class="counter-box_title">Award Won</span>
                            </div>
                                                        <div class="counter-box">
                                <h2 class="counter-box_number"><span
                                        class="counter-number">120</span>+                                </h2>
                                <span class="counter-box_title">Total Event</span>
                            </div>
                                                    </div>
                    </div>
                </div> -->
        </div>
        <!-- <h2 class="box-title mb-30">Contact With Me</h2>
            <div class="row gy-4 justify-content-center">
                <div class="col-xl-4 col-lg-6">
                    <div class="about-contact-grid style2">
                        <div class="about-contact-icon">
                            <img src="assets/img/icon/location-dot2.svg" alt="">
                        </div>
                        <div class="about-contact-details">
                            <h6 class="box-title">Our Address</h6>
                            <p class="about-contact-details-text">2690 Hiltona Street Victoria</p>
                            <p class="about-contact-details-text">Road, New York, Canada</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6">
                    <div class="about-contact-grid">
                        <div class="about-contact-icon">
                            <img src="assets/img/icon/call.svg" alt="">
                        </div>
                        <div class="about-contact-details">
                            <h6 class="box-title">Phone Number</h6>
                            <p class="about-contact-details-text"><a href="tel:01234567890">+01 234 567 890</a></p>
                            <p class="about-contact-details-text"><a href="tel:01234567890">+09 876 543 210</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6">
                    <div class="about-contact-grid">
                        <div class="about-contact-icon">
                            <img src="assets/img/icon/mail.svg" alt="">
                        </div>
                        <div class="about-contact-details">
                            <h6 class="box-title">Email Address</h6>
                            <p class="about-contact-details-text"><a
                                    href="mailto:mailinfo00@atek.com">mailinfo00@atek.com</a></p>
                            <p class="about-contact-details-text"><a
                                    href="mailto:support24@atek.com">support24@atek.com</a></p>
                        </div>
                    </div>
                </div>
            </div> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick} from 'vue'
import axios from 'axios'

const prefeitura = ref([])

onMounted(async () => {
  try {
    const res = await axios.get('/api/prefeitura')
    prefeitura.value = Array.isArray(res.data) ? res.data[0] : res.data
    console.log('Prefeitura:', prefeitura.value)
    await nextTick()
  } catch (e) {
    console.error('Erro ao buscar entidade:', e)
  }

})

</script>
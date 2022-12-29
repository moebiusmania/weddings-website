<script setup lang="ts">
const title: string = "Matrimonio di Lucia e Francesco";
const date: string = new Date(2022, 11, 28, 11).toISOString().replaceAll("-", "").split("T")[0];
const location: string = "Chiesa del Carmine, Largo Carmine, 71016 San severo FG";
const link: string = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${date}/${date}&location=${encodeURI(location)}`;
</script>


<template>
  <header id="fh5co-header" class="fh5co-cover" role="banner" style="background-image:url(images/photo8.jpg);"
    data-stellar-background-ratio="0.5">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2 text-center">
          <div class="display-t">
            <div class="display-tc animate-box" data-animate-effect="fadeIn">
              <h1>Lucia &amp; Francesco</h1>
              <!-- <h2>Ci sposiamo tra</h2>
              <Countdown />
              <p><a :href="link" target="_blank" rel="noopener nofollow" class="btn btn-default btn-sm">Save the
                  date</a></p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.btn.btn-default.btn-sm {
  opacity: 0.8;
}
</style>
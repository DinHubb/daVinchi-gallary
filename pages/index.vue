<script setup>
// import Lightgallery from "lightgallery/vue";
// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";
// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";
// const plugins = [lgThumbnail, lgZoom];
</script>

<template>
  <div class="flex flex-col">
    <p class="max-w-[960px] self-center text-center mb-12">
      "В магазине представлены работы художника Сергея Чертова. Каждая картина
      сможет украсить ваш дом или стать прекрасным подарком для ваших близких и
      друзей. Картины Сергея отражают красоту и гармонию русской природы,
      которая всегда была и остается источником вдохновения для многих
      художников."
    </p>
    <div class="mb-10">
      <swiper-container
        slides-per-view="1"
        speed="500"
        css-mode="true"
        navigation="true"
        pagination="true"
      >
        <swiper-slide class="h-[550px] w-[700px]">
          <div
            class="__gallary-option bg-[url(https://static.tildacdn.com/tild6538-3366-4137-b232-626237613661/picture.jpeg)] bg-no-repeat bg-center bg-contain"
          ></div>
        </swiper-slide>
        <swiper-slide class="h-[550px] w-[700px]">
          <div
            class="__gallary-option bg-[url(https://static.tildacdn.com/tild3432-3963-4366-b137-363236323664/picture3.jpeg)] bg-no-repeat bg-center bg-contain"
          ></div>
        </swiper-slide>
        <swiper-slide class="h-[550px] w-[700px]">
          <div
            class="__gallary-option bg-[url(https://static.tildacdn.com/tild3636-6163-4762-b561-306438303533/picture5.jpeg)] bg-no-repeat bg-center bg-contain"
          ></div>
        </swiper-slide>
        <swiper-slide class="h-[550px] w-[700px]">
          <div
            class="__gallary-option bg-[url(https://static.tildacdn.com/tild3530-6339-4533-b433-366438383764/picture8.jpeg)] bg-no-repeat bg-center bg-contain"
          ></div>
        </swiper-slide>
        <swiper-slide class="h-[550px] w-[700px]">
          <div
            class="__gallary-option bg-[url(https://static.tildacdn.com/tild3838-3761-4330-b739-636534376361/IMG_7121.jpg)] bg-no-repeat bg-center bg-contain"
          ></div>
        </swiper-slide>
      </swiper-container>
    </div>
    <nuxt-link
      to="/catalog"
      class="self-center border-2 border-black rounded-[30px] px-6 py-2 text-lg font-bold"
    >
      <a href="">Перейти в каталог</a>
    </nuxt-link>
  </div>
</template>

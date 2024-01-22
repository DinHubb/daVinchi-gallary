<script setup>
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
const plugins = [lgThumbnail, lgZoom];
</script>

<template>
  <h1
    class="self-center text-center mb-12 text-3xl font-semibold text-gray-800"
  >
    Дабро пожаловать в daVinci Gallary
  </h1>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <lightgallery
      class="grid gap-4"
      :settings="{ speed: 500, plugins: plugins }"
    >
      <div
        class="transition duration-200 hover:scale-105"
        data-src="https://arthive.net/res/media/img/orig/work/f5a/7487297.webp"
      >
        <img
          class="h-auto max-w-full rounded-lg cursor-zoom-in"
          src="https://arthive.net/res/media/img/orig/work/f5a/7487297.webp"
          alt=""
        />
      </div>
      <div
        class="transition duration-200 hover:scale-105"
        data-src="https://arthive.net/res/media/img/oy400/work/cb5/494162.webp"
      >
        <img
          class="h-auto max-w-full rounded-lg cursor-zoom-in"
          src="https://arthive.net/res/media/img/oy400/work/cb5/494162.webp"
          alt=""
        />
      </div>
      <div
        class="transition duration-200 hover:scale-105"
        data-src="https://arthive.net/res/media/img/oy800/work/71b/77715.webp"
      >
        <img
          class="h-auto max-w-full rounded-lg cursor-zoom-in"
          src="https://arthive.net/res/media/img/oy800/work/71b/77715.webp"
          alt=""
        />
      </div>
    </lightgallery>
    <lightgallery
      class="grid gap-4"
      :settings="{ speed: 500, plugins: plugins }"
    >
      <div
        class="transition duration-200 hover:scale-105"
        data-src="https://arthive.net/res/media/img/oy800/work/20f/407851.webp"
      >
        <img
          class="h-auto max-w-full rounded-lg cursor-zoom-in"
          src="https://arthive.net/res/media/img/oy800/work/20f/407851.webp"
          alt=""
        />
      </div>
      <div
        class="transition duration-200 hover:scale-105"
        data-src="https://arthive.net/res/media/img/oy1200/work/864/378925@2x.webp"
      >
        <img
          class="h-auto max-w-full rounded-lg cursor-zoom-in"
          src="https://arthive.net/res/media/img/oy1200/work/864/378925@2x.webp"
          alt=""
        />
      </div>
      <div
        class="transition duration-200 hover:scale-105"
        data-src="https://arthive.net/res/media/img/oy800/article/bc9/7522748@2x.webp"
      >
        <img
          class="h-auto max-w-full rounded-lg cursor-zoom-in"
          src="https://arthive.net/res/media/img/oy800/article/bc9/7522748@2x.webp"
          alt=""
        />
      </div>
    </lightgallery>
    <lightgallery
      class="grid gap-4"
      :settings="{ speed: 500, plugins: plugins }"
    >
      <div
        class="transition duration-200 hover:scale-105"
        data-src="https://arthive.net/res/media/img/oy1200/work/1e8/378913.webp"
      >
        <img
          class="h-auto max-w-full rounded-lg cursor-zoom-in"
          src="https://arthive.net/res/media/img/oy1200/work/1e8/378913.webp"
          alt=""
        />
      </div>
      <div
        class="transition duration-200 hover:scale-105"
        data-src="https://arthive.net/res/media/img/oy800/work/c4d/405819.webp"
      >
        <img
          class="h-auto max-w-full rounded-lg cursor-zoom-in"
          src="https://arthive.net/res/media/img/oy800/work/c4d/405819.webp"
          alt=""
        />
      </div>
      <div
        class="transition duration-200 hover:scale-105"
        data-src="https://arthive.net/res/media/img/oy1200/work/9c8/273617.webp"
      >
        <img
          class="h-auto max-w-full rounded-lg cursor-zoom-in"
          src="https://arthive.net/res/media/img/oy1200/work/9c8/273617.webp"
          alt=""
        />
      </div>
    </lightgallery>
    <lightgallery
      class="grid gap-4"
      :settings="{ speed: 500, plugins: plugins }"
    >
      <div
        class="transition duration-200 hover:scale-105"
        data-src="https://arthive.net/res/media/img/oy1200/work/154/375398.webp"
      >
        <img
          class="h-auto max-w-full rounded-lg cursor-zoom-in"
          src="https://arthive.net/res/media/img/oy1200/work/154/375398.webp"
          alt=""
        />
      </div>
      <div
        class="transition duration-200 hover:scale-105"
        data-src="https://arthive.net/res/media/img/oy1200/work/5f4/382200.webp"
      >
        <img
          class="h-auto max-w-full rounded-lg cursor-zoom-in"
          src="https://arthive.net/res/media/img/oy1200/work/5f4/382200.webp"
          alt=""
        />
      </div>
      <div
        class="transition duration-200 hover:scale-105"
        data-src="https://arthive.net/res/media/img/oy800/work/bf8/396785@2x.webp"
      >
        <img
          class="h-auto max-w-full rounded-lg cursor-zoom-in"
          src="https://arthive.net/res/media/img/oy800/work/bf8/396785@2x.webp"
          alt=""
        />
      </div>
    </lightgallery>
  </div>
</template>
<!-- <div class="flex flex-col">
  <p
    class="self-center text-center mb-12 text-3xl font-semibold text-gray-800"
  >
    Дабро пожаловать в daVinci Gallary
  </p>
  <div class="mb-10">
    <swiper-container
      slides-per-view="1"
      speed="500"
      css-mode="true"
       class="scale-105"
    >
      <swiper-slide class="h-[550px] w-[700px]">
        <a
          href="https://static.tildacdn.com/tild6538-3366-4137-b232-626237613661/picture.jpeg"
          class="__gallary-option bg-[url(https://static.tildacdn.com/tild6538-3366-4137-b232-626237613661/picture.jpeg)] bg-no-repeat bg-center bg-contain cursor-zoom-in"
        ></a>
      </swiper-slide>
      <swiper-slide class="h-[550px] w-[700px]">
        <a
          href="https://static.tildacdn.com/tild3432-3963-4366-b137-363236323664/picture3.jpeg"
          class="__gallary-option bg-[url(https://static.tildacdn.com/tild3432-3963-4366-b137-363236323664/picture3.jpeg)] bg-no-repeat bg-center bg-contain cursor-zoom-in"
        ></a>
      </swiper-slide>
      <swiper-slide class="h-[550px] w-[700px]">
        <a
          href="https://static.tildacdn.com/tild3636-6163-4762-b561-306438303533/picture5.jpeg"
          class="__gallary-option bg-[url(https://static.tildacdn.com/tild3636-6163-4762-b561-306438303533/picture5.jpeg)] bg-no-repeat bg-center bg-contain cursor-zoom-in"
        ></a>
      </swiper-slide>
      <swiper-slide class="h-[550px] w-[700px]">
        <a
          href="https://static.tildacdn.com/tild3530-6339-4533-b433-366438383764/picture8.jpeg"
          class="__gallary-option bg-[url(https://static.tildacdn.com/tild3530-6339-4533-b433-366438383764/picture8.jpeg)] bg-no-repeat bg-center bg-contain cursor-zoom-in"
        ></a>
      </swiper-slide>
      <swiper-slide class="h-[550px] w-[700px]">
        <a
          href="https://static.tildacdn.com/tild3838-3761-4330-b739-636534376361/IMG_7121.jpg"
          class="__gallary-option bg-[url(https://static.tildacdn.com/tild3838-3761-4330-b739-636534376361/IMG_7121.jpg)] bg-no-repeat bg-center bg-contain cursor-zoom-in"
        ></a>
      </swiper-slide>
    </swiper-container>
  </div>
  <nuxt-link
    to="/catalog"
    class="self-center border-2 border-black rounded-[30px] px-6 py-2 text-lg font-bold transition duration-200 hover:bg-gray-800 hover:text-white active:opacity-55"
  >
    <a href="">Перейти в каталог</a>
  </nuxt-link>
</div> -->

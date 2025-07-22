import Header from '#src/components/header.gjs';
import Footer from '#src/components/footer.gjs';

<template>
  <div class="cover-container">
    <Header @gravatar={{@model.gravatar}} @links={{@model.links}} />
    {{outlet}}
    <Footer @city={{@model.city}} />
  </div>
</template>

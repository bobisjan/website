import Header from '../components/header';
import Footer from '../components/footer';

<template>
  <div class="cover-container">
    <Header @gravatar={{@model.gravatar}} @links={{@model.links}} />
    {{outlet}}
    <Footer @city={{@model.city}} />
  </div>
</template>

<template>
  <main class="cover">
    <h1>{{@model.name}}</h1>
    <p>Development on&nbsp;<a
        href={{@model.project.url}}
        class="link"
        target="_blank"
        rel="noopener noreferrer"
      >{{@model.project.title}}</a>
      at&nbsp;<a
        href={{@model.company.url}}
        class="link"
        target="_blank"
        rel="noopener noreferrer"
      >{{@model.company.title}}</a></p>
  </main>
</template>

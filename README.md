<h3 align="center"> 
  Vue Flippable Card Carousel
</h3>

<h4 align="center">
  <a href="https://vue-flippable-card-carousel.vercel.app/">View Demo</a>
</h4>

---

<img src="https://user-images.githubusercontent.com/4216651/129351493-eb6574d0-e57d-43ae-927e-840820db3ef1.png" alt="carousel-introduction" width="100%"/>

|                                                                        Web                                                                         |                                                                       Mobile                                                                        |
| :------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/4216651/128390005-f5d2c529-9ad7-4aa9-8d6e-1a09942db935.gif" alt="carousel-web" width="1050" /> | <img src="https://user-images.githubusercontent.com/4216651/129352181-39c0e0ff-d652-467c-b534-9dfb4cdeaf4f.gif" alt="carousel-mobile" width="300"/> |

## About The Project

This project is a documentation of the study to develop the Carousel style visual interaction.

<p>
  <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=Vue%2Ejs&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178c6?style=flat-square&logo=TypeScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=flat-square&logo=Tailwind%20CSS&logoColor=white"/>
  <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"/>
  <img src="https://img.shields.io/badge/Font%20Awesome-528DD7?style=flat-square&logo=Font%20Awesome&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat-square&logo=Yarn&logoColor=white"/>
</p>

### Built With

- Vue
- TypeScript
- Tailwind CSS
- SCSS
- Vue2 Touch Event
- Fontawesome
- Yarn

## Getting Started

### Prerequisites

- Before you start, install `Yarn` package to global.

  ```sh
  npm install --global yarn
  ```

- Docker install required

  https://www.docker.com/get-started

### Installation

#### Local

1.  Clone the repo

    ```sh
    git clone https://github.com/VannsKang/Vue-Flippable-Card-Carousel.git
    ```

2.  Install NPM packages

    ```sh
    yarn install
    ```

3.  Run the project

    ```sh
    yarn serve
    ```

4.  Build the package

    ```sh
    yarn build
    ```

#### Docker

1.  Run the Docker inside `./docker` folder

    ```sh
    docker-compose up
    ```

## Introduction

1. There are `App` and child component `FlippableCard`

2. You can control the `Flippable Card Carousel` in various way

   - Rotate the card:

     - Click or Tap(Mobile) the arrow icons
     - Click or Tap(Mobile) the next or previous card face
     - Use key `ArrowRgiht` and `ArrowLeft`
     - Slide left or right on the carousel area (Mobile)

- Flip the card:

  - Mouse over the center card
  - Use key `ArrowUp` and `ArrowDown`
  - Tap the center card & tap outside the center card (Mobile)

## Project Tree

```js
.
├── public
├── src/
│   ├── assets
│   ├── components/
│   │   ├── index.ts
│   │   └── FlippableCard.vue
│   ├── styles/
│   │   ├── mixin.scss
│   │   └── index.css
│   ├── typings/
│   │   └── index.ts
│   ├── App.vue
│   ├── custom.d.ts
│   ├── main.ts
│   └── ...
├── tailwind.config.js
├── tsconfig.json
├── package.json
├── vue.config.js
└── ...
```

## NPM Packages

#### packages

```
dependencies:
core-js 3.21.1
vue 2.6.14
vue2-touch-events 3.2.2

devDependencies:
@fortawesome/fontawesome-svg-core 1.3.0
@fortawesome/free-regular-svg-icons 6.0.0
@fortawesome/free-solid-svg-icons 6.0.0
@fortawesome/vue-fontawesome 2.0.6
@typescript-eslint/eslint-plugin 5.15.0
@typescript-eslint/parser 5.15.0
@vue/cli-plugin-babel 5.0.1
@vue/cli-plugin-eslint 5.0.1
@vue/cli-plugin-typescript 5.0.1
@vue/cli-service 5.0.1
@vue/eslint-config-typescript 9.1.0
autoprefixer 10.4.2
eslint 7.32.0
eslint-plugin-vue 8.5.0
postcss 8.4.8
sass 1.49.9
sass-loader 12.6.0
tailwindcss 3.0.23
typescript 4.5.5
vue-template-compiler 2.6.14
```

## ETC

This project is optimized & tested in `Chrome`.

---

<h3 align="center">
Developed by SOOM
</h3>

<h4 align="center">
<a href="https://www.soomlog.tech/">Soomlog.tech</a>
</h4>

<template>
  <main class="page_not_found">
    <div class="status">
      <picture>
        <img class="background_alert" :src="alert" alt="Alert logo" />
      </picture>
      <h1>
        <span class="status_code">404</span>
      </h1>
      <h2>
        <span class="status_message">Il semblerait que vous vous soyez égaré en chemin</span>
      </h2>
    </div>
  </main>
</template>

<script>
import alert from "@/assets/images/logos/alert.svg";

export default {
  name: "404",
  data() {
    return {
      alert,
    };
  },
  metaInfo() {
    return {
      title: "Page non trouvée (404) - Shiatsu Thérapeutique Nathalie de Loeper",
      meta: [
        {
          name: "description",
          content:
            "Page non trouvée. Retournez à l'accueil pour découvrir les services de shiatsu thérapeutique de Nathalie de Loeper à Saint-Cyr-l'École (78).",
        },
        {
          name: "robots",
          content: "noindex, nofollow",
        },
        {
          property: "og:title",
          content: "Page non trouvée (404) - Shiatsu Thérapeutique",
        },
        {
          property: "og:description",
          content:
            "Page non trouvée. Retournez à l'accueil pour découvrir les services de shiatsu thérapeutique.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://www.shiatsutherapie78.info/404",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/vars.scss";
@import "@/styles/mixin.scss";

.page_not_found {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 90px 0;
  width: 100%;

  @include laptop {
    padding: 0;
    width: 500px;
  }

  .status {
    background-color: #96c796;
    border-radius: 50%;
    box-shadow: 0 0 110px 0px #969696;
    height: 350px;
    position: relative;
    width: 350px;

    @include laptop {
      height: 450px;
      width: 450px;
    }

    .background_alert {
      opacity: 0.9;
      position: relative;
      right: 30%;
      height: 50%;
      z-index: 2;

      @include laptop {
        height: 65%;
      }
    }
    h1 {
      bottom: 30%;
      left: 20%;
      position: relative;
      z-index: 1;

      @include laptop {
        bottom: 35%;
        left: 25%;
      }
    }
    h2 {
      bottom: 15%;
      left: -2%;
      position: relative;

      @include laptop {
        bottom: 20%;
        left: 10%;
      }
    }
    .status_code,
    .status_message {
      background-color: $meadow-green;
      box-decoration-break: clone;
      color: $white;
      font-family: "Arbutus Slab", sans-serif;
      letter-spacing: 1px;
      opacity: 0.9;
      padding: 0 20px;
    }
    .status_code {
      background-color: #e07e83;
      border-radius: 8px;
      font-family: sans-serif;
      font-size: 5rem;
      font-weight: 900;
      line-height: 50px;
      letter-spacing: 10px;

      @include laptop {
        font-size: 7rem;
        line-height: 70px;
      }
    }
    .status_message {
      font-size: 1.5rem;
      line-height: 40px;
      box-shadow: 0 0 0 1px #9c9c9c;

      @include laptop {
        font-size: 2.4rem;
        line-height: 55px;
      }
    }
  }
}
</style>

<template>
  <main>
    <section class="contact-me">
      <address>
        <h3>Nathalie de Loeper</h3>
        <a href="tel:+33612387928">
          <i class="fontawesome-phone"></i> 06 12 38 79 28
        </a>
        <span class="contact-separator">-</span>
        <a href="mailto:natloeper@gmail.com">
          <i class="fontawesome-envelope"></i> natloeper@gmail.com
        </a>
      </address>
    </section>
    <section class="find-me">
      <h2 class="fontawesome-globe">Adresses</h2>
      <Address
        v-if="google"
        :mapConfig="saintCyrLecole.mapConfig"
        :fullAddress="saintCyrLecole.fullAddress"
        :google="google"
      />
      <Address
        v-if="google"
        :mapConfig="bouloire.mapConfig"
        :fullAddress="bouloire.fullAddress"
        :google="google"
      />
    </section>
  </main>
</template>

<script>
const Address = () => import('@/components-ui/Address');
import GoogleMapsApiLoader from 'google-maps-api-loader';

export default {
  components: {
    Address,
  },
  data() {
    return {
      apiKey: process.env.VUE_APP_GOOGLE_API_KEY,
      google: null,
      bouloire: {
        mapConfig: {
          center: {
            lat: 47.97291,
            lng: 0.568361,
          },
        },
        fullAddress: ['La Grenouille', 'Route de Coudrecieux', '72440 Bouloire'],
      },
      saintCyrLecole: {
        mapConfig: {
          center: {
            lat: 48.8092,
            lng: 2.05809,
          },
        },
        fullAddress: ['5 rue Jean Zay', '78210 Saint-Cyr-l\'Ecole'],
      },
    };
  },
  async mounted() {
    const googleMapApi = await GoogleMapsApiLoader({ apiKey: this.apiKey });
    this.google = googleMapApi;
  },
};
</script>

<style lang="scss">
@import "@/main.scss";

main {
  display: flex;
  flex-flow: wrap row;

  section {
    width: 100%;
    margin: 0 auto;
    text-align: justify;
    position: sticky;
    background-color: white;

    &.find-me {
      top: 70px;

      @include laptop {
        width: 70%;
        display: flex;
        flex-flow: wrap row;
      }
    }
    h2 {
      margin: 20px 0;
      width: 100%;

      @include laptop {
        width: 100%;
      }
    }
    address {
      box-sizing: border-box;
      margin: 10px 0;
      padding: 10px 20px;
      display: flex;
      align-content: space-around;
      flex-flow: row wrap;

      @include tablet {
        justify-content: center;
      }

      h3,
      a,
      p {
        font-size: 1.1rem;

        @include tablet {
          font-size: 1.3rem;
        }
        @include laptop {
          font-size: 1.4rem;
        }
      }
      h3,
      a {
        letter-spacing: 1px;
      }
      h3 {
        margin-bottom: 15px;
        font-weight: bold;

        @include tablet {
          width: 100%;
          text-align: center;
        }
      }
      a {
        height: 20px;
        padding: 0 10px 5px;
        color: $jungle-green;
        transition: 0.2s;
        box-shadow: 0 0px 0px 0px #c7c7c7;

        &:hover {
          box-shadow: 0 3px 5px -3px #9c9c9c;
        }
        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }
      .contact-separator {
        display: none;
        @include tablet {
          display: initial;
          margin: 0 10px;
        }
      }
    }
  }
}
</style>
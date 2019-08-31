<template>
  <main id="contact">
    <address>
      <section class="contact">
        <h3>Nathalie de Loeper</h3>
        <a href="tel:+33612387928">06 12 38 79 28</a>
        <span>-</span>
        <a href="mailto:natloeper@gmail.com">natloeper@gmail.com</a>
      </section>
      <h2>Adresses</h2>
      <Address v-if="google" :mapConfig="saintCyrLecole.mapConfig" :fullAddress="saintCyrLecole.fullAddress" :google="google">
        <template slot-scope="{ google, map }"></template>
      </Address>
      <Address v-if="google" :mapConfig="bouloire.mapConfig" :fullAddress="bouloire.fullAddress" :google="google">
        <template slot-scope="{ google, map }"></template>
      </Address>
    </address> 
  </main>
</template>

<script>
import Address from '@/components-ui/Address';
import GoogleMapsApiLoader from 'google-maps-api-loader';

export default {
  components: {
    Address
  },
  data() {
    return {
      apiKey: 'AIzaSyBIpZM5Rd2uy9aYV3_DByJrYS1okNf3dJY',
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
            lat : 48.8092,
            lng : 2.05809
          },
        },
        fullAddress: ['5 rue Jean Zay', '78210 Saint-Cyr-l\'Ecole'],
      },
    }
  },
  async mounted() {
    const googleMapApi = await GoogleMapsApiLoader({apiKey: this.apiKey})
    this.google = googleMapApi
  },
}
</script>

<style lang="scss">
@import '@/main.scss';
main#contact {
  display: flex;
  
  address {
    width: 100%;
    margin: 0 auto;
    text-align: justify;
    
    @include tablet {
      width: 60%;
      display: flex;
      flex-flow: wrap row;
      justify-content: space-around;
    }
    @include laptop {
      width: 70%;
      align-content: flex-start;
    }
  
    h2 {
      margin: 20px 0;
      width: 100%;
    }
    section {
      box-sizing: border-box;
      margin: 10px 0;
      padding: 10px 20px;

      &.contact {
        @include laptop {
          display: flex;
          justify-content: center;
          flex-flow: row wrap;
        }
      }
      h3, a, p {
        font-size: 1.1rem;

        @include tablet {
          font-size: 1.3rem;
        }
        @include laptop {
          font-size: 1.4rem;
        }
      }
      h3, a {
        letter-spacing: 1px;
      }
      h3 {
        margin-bottom: 15px;
        
        @include tablet {
          width: 100%;
          text-align: center;
        }
      }
      a {
        text-decoration: underline;
        color: $jungle-green;
        
        @include tablet {
          display: inline;
        }
      }
      span {
        display: none;
        @include tablet {
          display: initial;
          margin: 0 10px;
        }
      }
      p {
        line-height: 28px;
        color: $gray;
      }
    }
  }
}
</style>
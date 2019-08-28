<template>
  <main id="contact">
    <address>
      <h2>Coordonnées</h2>
      <section class="contact">
        <h3>Nathalie de Loeper</h3>
        <a href="tel:+33612387928">06 12 38 79 28</a>
        <span>-</span>
        <a href="mailto:natloeper@gmail.com">natloeper@gmail.com</a>
      </section>
      <h2>Adresses</h2>
      <Address :mapsApiAddressName="saintCyrLecole.mapApiName" :fullAddress="saintCyrLecole.fullAddress"/>
      <Address :mapsApiAddressName="bouloire.mapApiName" :fullAddress="bouloire.fullAddress"/>
    </address> 
  </main>
</template>

<script>
import Address from '@/components-ui/Address';

export default {
  components: {
    Address
  },
  data() {
    return {
      bouloire: {
        mapApiName: 'nathaliedeloeper,bouloire',
        fullAddress: ['La Grenouille', 'Route de Coudrecieux', '72440 Bouloire'],
      },
      saintCyrLecole: {
        mapApiName: 'deloepershiatsu,saint-cyr-lecole',
        fullAddress: ['5 rue Jean Zay', '78210 Saint-Cyr-l\'Ecole'],
      },
    }
  }
}
</script>

<style lang="scss">
@import '@/main.scss';
main#contact {
  display: flex;
  
  address {
    margin: auto;
    text-align: justify;
    
    @include tablet {
      width: 70%;
      display: flex;
      flex-flow: wrap row;
      justify-content: space-around;
    }
    @include laptop {
      width: 70%;
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
        text-decoration: underline;
        
        @include tablet {
          width: 100%;
          text-align: center;
        }
      }
      a {
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
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
      <Address :location="saintCyrLecole" />
      <Address :location="bouloire" />
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import Address from '@/components-ui/Address.vue';
import insideStCyrWebp from '@/assets/images/pictures/nathalie_cabinet_saint-cyr-lecole.webp';
import insideStCyrWebpMobile from '@/assets/images/pictures/nathalie_cabinet_saint-cyr-lecole-mobile.webp';
import insideStCyr from '@/assets/images/pictures/nathalie_cabinet_saint-cyr-lecole.jpg';
import insideBouloireWebp from '@/assets/images/pictures/inside_bouloire.webp';
import insideBouloireWebpMobile from '@/assets/images/pictures/inside_bouloire-mobile.webp';
import insideBouloire from '@/assets/images/pictures/inside_bouloire.jpg';

export default Vue.extend({
  name: 'Contacts',
  components: {
    Address,
  },
  data() {
    return {
      bouloire: {
        description: 'Cabinet - vue intérieur',
        direction:
          'https://www.google.com/maps/dir/?api=1&destination=Nathalie+de+loeper+shiatsu+bouloire&travelmode=driving',
        fullAddress: [
          'La Grenouille',
          'Route de Coudrecieux',
          '72440 Bouloire',
        ],
        image: {
          imageWebp: insideBouloireWebp,
          imageWebpMobile: insideBouloireWebpMobile,
          defaultImage: insideBouloire,
        },
      },
      saintCyrLecole: {
        description: 'Cabinet - vue intérieur',
        direction:
          'https://www.google.com/maps/dir/?api=1&destination=Nathalie+de+loeper+shiatsu+saint+cyr+lecole&travelmode=driving',
        fullAddress: ['5 rue Jean Zay', '78210 Saint Cyr l‘Ecole'],
        image: {
          imageWebp: insideStCyrWebp,
          imageWebpMobile: insideStCyrWebpMobile,
          defaultImage: insideStCyr,
        },
      },
    };
  },
  metaInfo() {
    return {
      title: 'Contact',
      meta: [
        {
          name: 'description',
          content:
            'Vous souhaitez passer le pas et découvrir les bienfaits du shiatsu ? Prenez RDV dés maintenant',
        },
      ],
    };
  },
});
</script>

<style lang="scss">
@import url(https://weloveiconfonts.com/api/?family=fontawesome);
@import '@/styles/vars.scss';
@import '@/styles/mixin.scss';

main {
  display: flex;
  flex-flow: wrap row;
  justify-content: center;

  section {
    width: 100%;
    margin: 0 auto;
    position: sticky;
    background-color: white;

    &.find-me {
      top: 70px;

      @include laptop {
        width: 55%;
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
      align-items: center;
      flex-direction: column;

      @include tablet {
        flex-flow: wrap row;
        justify-content: center;
        align-items: center;
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
        @include mobile {
          &:not(:last-child) {
            margin-bottom: 10px;
          }
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

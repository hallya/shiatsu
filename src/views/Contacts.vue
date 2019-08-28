<template>
  <main>
    <address>
      <h2>Coordonnées</h2>
      <section>
        <h3>Nathalie de Loeper</h3>
        <a href="tel:+33612387928">06 12 38 79 28</a>
        <a href="mailto:natloeper@gmail.com">natloeper@gmail.com</a>
      </section>
      <h2>Adresses</h2>
      <section class="address">
        <img src="https://maps.googleapis.com/maps/api/staticmap?center=deloepershiatsu,saint-cyr-lecole&zoom=17&size=800x400&maptype=roadmap&key=AIzaSyBIpZM5Rd2uy9aYV3_DByJrYS1okNf3dJY" alt="Plan d'accès au cabinet de Saint-Cyr-l'Ecole">
        <p>5 rue Jean Zay</p>
        <p>78210 Saint-Cyr-l'Ecole</p>
      </section>
      <section class="address">
        <img src="https://maps.googleapis.com/maps/api/staticmap?center=nathaliedeloeper,bouloire&zoom=17&size=800x400&maptype=roadmap&key=AIzaSyBIpZM5Rd2uy9aYV3_DByJrYS1okNf3dJY" alt="Plan d'accès au cabinet de Saint-Cyr-l'Ecole">
        <p>La Grenouille</p>
        <p>Route de Coudrecieux</p>
        <p>72440 Bouloire</p>
      </section>
    </address> 
  </main>
</template>

<style lang="scss">
@import '@/main.scss';

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

      &.address {
        border: 1px solid $light-gray;
        border-radius: 8px;
        padding: 0 0 10px;

        @include laptop {
          width: 45%;
        }

        p {
          padding: 0 20px;
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
      }
      a {
        color: $jungle-green;
      }
      a:not(:last-child) {
        margin-bottom: 10px;
      }
      img {
        width: 100%;
      }
      p {
        line-height: 28px;
        color: $gray;
      }
    }
  }
</style>
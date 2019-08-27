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
      <section>
        <p>5 rue Jean Zay</p>
        <p>78210 Saint-Cyr-l'Ecole</p>
      </section>
      <section>
        <p>La Grenouille</p>
        <p>Route des Loges</p>
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
    
    h2 {
      margin: 0 0 20px;
    }
    section {
      box-sizing: border-box;
      margin: 10px 0;
      border: 1px solid $light-gray;
      border-radius: 8px;
      padding: 10px 20px;

      h3, a, p {
        font-size: 1.1rem;
      }
      h3, a {
        letter-spacing: 1px;
      }
      h3 {
        margin-bottom: 15px;
      }
      a {
        color: $jungle-green;
      }
      a:not(:last-child) {
        margin-bottom: 10px;
      }
      p {
        line-height: 28px;
        color: $gray;
      }
    }
  }
</style>
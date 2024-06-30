<template>
  <footer id="footer">
    <a
      class="footer-icon"
      href="https://www.facebook.com/nathaliedeloeper/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img v-bind:src="facebook" alt="facebook link" />
    </a>
    <a
      class="footer-icon"
      href="https://www.linkedin.com/in/nathalie-de-loeper-shiatsu-97910988/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img v-bind:src="linkedIn" alt="linkedIn link" />
    </a>
  </footer>
</template>

<script>
import facebook from "@/assets/images/logos/facebook_logo.svg";
import linkedIn from "@/assets/images/logos/linkedin_logo.svg";

export default {
  name: "Footer",
  data() {
    return {
      facebook,
      linkedIn,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/vars.scss";

#footer {
  flex: 0 1 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 50px;

  a {
    height: 30px;
    width: 30px;
    margin: 0 10px;
    transition: 0.2s;
    filter: grayscale(0);

    &:hover {
      filter: grayscale(1);
    }

    &#koifaire {
      height: 30px;
      width: auto;
      position: absolute;
      right: 10px;
      bottom: 20px;

      img {
        height: 100%;
        width: auto;
      }
    }
    &.footer-icon {
      position: relative;
      img {
        position: absolute;
        transition: 0.2s ease-in;
      }
    }
    picture {
      img {
        width: 100%;
      }
    }
  }
}
</style>

<template>
  <div class="definition">
    <dt v-on:click="isDescriptionShown = !isDescriptionShown" :class="isOpen">
      <h2>{{ definition.title }}</h2>
      <button :class="buttonState" :aria-label="buttonActionLabel"></button>
    </dt>
    <dd :class="isOpen">
      <Picture
        :image="definition.images"
        :loadImage="isDescriptionShown"
        description
      />
      <p
        v-for="(paragraph, index) of definition.description"
        :key="`${definition.title} - paragraphe ${index}`"
        v-html="paragraph"
      ></p>
    </dd>
  </div>
</template>

<script lang="ts">
import Picture from '@/components-ui/Picture/Picture.vue';

export default {
  name: 'Definition',
  components: {
    Picture,
  },
  props: {
    definition: Object,
  },
  data() {
    return {
      isDescriptionShown: false,
      imageLoaded: false,
    };
  },
  computed: {
    isOpen() {
      return this.isDescriptionShown && 'open';
    },
    buttonState() {
      return this.isDescriptionShown
        ? 'toggleDescription close'
        : 'toggleDescription';
    },
    buttonActionLabel() {
      return this.isDescriptionShown
        ? 'Fermer la description'
        : 'Ouvrir la description';
    },
  },
};
</script>

<style lang="scss">
@import '@/main.scss';

.definition {
  margin-bottom: 5px;

  @include laptop {
    dd {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;

      picture {
        width: 55%;
      }
      p:first-of-type {
        width: 40%;
      }
    }

    &:nth-child(odd) {
      dd {
        flex-direction: row-reverse;
      }
    }
    &:nth-child(even) {
      dd {
        flex-direction: row;
      }
    }
  }
  dt {
    cursor: pointer;
    position: sticky;
    top: 65px;
    margin-bottom: 0px;
    background-color: white;
    box-shadow: -101vw 1px 0px 1px transparent;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.5s;

    &:focus-within {
      box-shadow: calc(-100vw + 75vw) 1px 0px 1px $focused;
    }
    &:hover {
      @include laptop {
        box-shadow: calc(-100vw + 75vw) 1px 0px 1px $jungle-green;
      }
    }
    &.open {
      box-shadow: 0vw 1px 0px 1px $jungle-green;
    }
    @include tablet {
      padding: 5px 15vw;
    }
    @include laptop {
      padding: 5px 25vw;
    }
    h2 {
      text-align: left;
      margin-bottom: 5px;
      color: $jungle-green;
      font-size: 1.4rem;
      width: 85%;
    }

    .toggleDescription {
      position: relative;
      width: 20px;
      height: 20px;
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;

      &:before,
      &:after {
        content: '';
        position: absolute;
        background-color: $jungle-green;
        border-radius: 10px;
        will-change: transform;
        transition: transform 0.25s ease-out;
      }
      &:before {
        top: 0;
        left: calc(50% + 1px);
        width: 2px;
        height: 100%;
        margin-left: -2px;
      }

      &:after {
        top: calc(50% + 1px);
        left: 0;
        width: 100%;
        height: 2px;
        margin-top: -2px;
      }

      &.close {
        &:before {
          transform: rotate(90deg);
        }

        &:after {
          transform: rotate(180deg);
        }
      }
      &:focus {
        &:before,
        &:after {
          background-color: $focused;
        }
      }
    }
  }

  dd {
    max-height: 0px;
    height: auto;
    width: calc(100% - 10px);
    margin: 0 5px;
    border-radius: 8px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    padding: 0 0 5px;
    text-align: justify;
    overflow: hidden;
    box-sizing: border-box;
    transition: 0.5s;

    &.open {
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      max-height: 3000px;
      transition: all 0.5s, opacity 0.2s 0s;

      picture {
        img {
          opacity: 1;
        }
      }
      p {
        opacity: 1;
        transition: opacity 0.2s 0.2s;
      }
    }

    @include tablet {
      padding: 0 15vw 20px;
    }
    @include laptop {
      padding: 0 25vw 20px;
    }
    picture {
      img,
      source {
        opacity: 0;
        width: 100%;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
      }
    }
    p {
      box-sizing: border-box;
      width: 100%;
      padding: 0 10px;
      opacity: 0;
      font-size: 1rem;
      margin-top: 10px;
      line-height: 24px;
      transition: opacity 0.2s;

      &:first-of-type {
        margin-top: 0;
      }
      @include laptop {
        padding: 0;
      }
      strong {
        font-weight: bold;
      }
      a {
        display: inline;
        text-decoration: underline;
      }
    }
  }
}
</style>

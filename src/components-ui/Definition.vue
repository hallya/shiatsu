<template>
  <div class="definition">
    <dt :class="`${isDescriptionShown ? 'open' : ''}`">
      <h2>{{title}}</h2>
      <button 
        v-on:click="isDescriptionShown = !isDescriptionShown"
        :class="`toggleDescription ${isDescriptionShown ? ' close' : ''}`">
      </button>
    </dt>
    <dd :class="isDescriptionShown ? 'open' : ''">
      <picture v-if="image">
        <img :src="image" alt="">
      </picture>
      <p 
        v-for="(paragraph, index) of description"
        :key="`${title} - paragraphe ${index}`">
          {{paragraph}}
      </p>
    </dd>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'Definition',
  props: {
    title: String,
    description: Array,
    image: String,
  },
  data() {
    return {
      isDescriptionShown: false
    }
  },
};
</script>

<style lang="scss">
@import '@/main.scss';

.definition {
  margin-bottom: 5px;
  dt {
    position: sticky;
    top: 65px;
    margin-bottom: 0px;
    background-color: white;
    box-shadow: -101vw 1px 0px 1px $jungle-green;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: .5s;

    &.open {
      box-shadow: 0vw 1px 0px 1px $jungle-green;
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
        content: "";
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
    // box-shadow: 0px -5px 8px -13px lightgrey, 0 -2px 0 -.5px lightgray;
    transition: .5s;

    &.open {
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      max-height: 3000px;
      // box-shadow: 0px -5px 8px -13px lightgrey, 0 0 0 1px lightgray;
      transition: all .5s, opacity .2s .0s;

      img {
        opacity: 1;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
      }
      p {
        opacity: 1;
        transition: opacity .2s .2s;
      }
    }
    img {
      opacity: 0;
      width: 100%;
    }
    p {
      padding: 0 10px;
      opacity: 0;
      font-size: 1rem;
      margin-top: 10px;
      line-height: 24px;
      transition: opacity .2s;
    }
  }
}
</style>
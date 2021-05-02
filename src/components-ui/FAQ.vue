<template>
  <section
    :aria-describedby="`${index}-description`"
    :aria-labelledby="`${index}-title`"
    class="definition"
  >
    <div
      :class="`faqQuestionContainer ${isOpen}`"
      v-on:click="isDescriptionShown = !isDescriptionShown"
    >
      <h2 :id="`${index}-title`" class="definitionTitle">
        {{ definition.question }}
      </h2>
      <button :class="buttonState" :aria-label="buttonActionLabel" />
    </div>
    <div :class="`definitionDescriptionContainer ${isOpen}`">
      <div v-if="definition.images" class="picture">
        <Picture :image="definition.images" :loadImage="isDescriptionShown" description />
      </div>
      <div :id="`${index}-description`" class="description">
        <p
          :key="`${definition.question} - paragraphe ${index}`"
          v-for="(paragraph, index) of definition.answer"
          v-html="paragraph"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Picture from "@/components-ui/Picture/Picture.vue";

export default {
  name: "Definition",
  components: {
    Picture,
  },
  props: {
    index: Number,
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
      return this.isDescriptionShown && "open";
    },
    buttonState() {
      return this.isDescriptionShown ? "toggleDescription close" : "toggleDescription";
    },
    buttonActionLabel() {
      return this.isDescriptionShown ? "Fermer la description" : "Ouvrir la description";
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/vars.scss";
@import "@/styles/mixin.scss";
.definition {
  margin: 0;

  .description {
    align-items: center;
    display: grid;
    padding: 16px 0;
    row-gap: 16px;
  }
  @include laptop {
    .definitionDescriptionContainer {
      .picture {
        width: 55%;
      }
    }

    &:nth-child(odd) {
      .definitionDescriptionContainer {
        picture {
          margin-left: auto;
        }
      }
    }
    &:nth-child(even) {
      .definitionDescriptionContainer {
        picture {
          margin-right: auto;
        }
      }
    }
  }
  .faqQuestionContainer {
    align-items: center;
    background-color: white;
    box-shadow: -101vw 1px 0px 1px transparent;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    margin: 0px auto;
    padding: 5px 10px;
    position: sticky;
    top: 108px;
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
      top: 105px;
    }
    @include laptop {
      padding: 5px 25vw;
      top: 115px;
    }
    .definitionTitle {
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
      &:focus {
        &:before,
        &:after {
          background-color: $focused;
        }
      }
    }
  }

  .definitionDescriptionContainer {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-radius: 8px;
    box-sizing: border-box;
    margin: 0 auto;
    max-height: 0px;
    overflow: hidden;
    padding: 0;
    text-align: justify;
    transition: 0.5s;
    width: calc(100% - 10px);

    &.open {
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
      width: 70vw;
    }
    @include laptop {
      width: 50vw;
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
      margin: 0;
      opacity: 0;
      padding: 0;
      transition: opacity 0.2s;

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

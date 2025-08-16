export default {
  install(Vue) {
    Vue.prototype.$injectSchema = function(schema) {
      const existingScript = document.querySelector(
        `script[data-schema-id="${schema["@id"] || "default"}"]`,
      );
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema-id", schema["@id"] || "default");
      script.textContent = JSON.stringify(schema, null, 2);

      document.head.appendChild(script);
    };

    Vue.prototype.$clearSchemas = function() {
      const schemaScripts = document.querySelectorAll("script[data-schema-id]");
      schemaScripts.forEach((script) => script.remove());
    };

    Vue.mixin({
      mounted() {
        if (this.$options.schema) {
          this.$injectSchema(this.$options.schema);
        }
      },
      beforeDestroy() {
        if (this.$options.schema) {
          this.$clearSchemas();
        }
      },
    });
  },
};

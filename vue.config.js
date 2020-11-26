require('events').EventEmitter.defaultMaxListeners = 50;

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/style.scss";`
      }
    }
  }
};
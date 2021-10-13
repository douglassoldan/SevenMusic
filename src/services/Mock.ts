// import slide from './Slide.json';
const slide = require('./Slide.json');

export default {
  async fetchSlides() {
    return await slide;
  },
};

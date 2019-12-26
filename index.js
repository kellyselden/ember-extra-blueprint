'use strict';

module.exports = {
  name: require('./package').name,

  locals(options) {
    let name = options.entity.name;

    return {
      name
    };
  }
};

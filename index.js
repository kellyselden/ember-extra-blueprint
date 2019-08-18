'use strict';

module.exports = {
  description: require('./package').name,

  locals(options) {
    let name = options.entity.name;

    return {
      name
    };
  }
};

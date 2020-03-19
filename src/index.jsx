const noOp = () => {}

if (typeof window !== `undefined`) {
  module.exports = require('./useScrollPosition')
} else {
  module.exports = noOp
}
const tap = require('tap')
const constants = require('./constants')

tap.test('constants', test => {
  test.equal(constants.TILE_SIZE, 32, 'Tile size is 32')
  test.equal(constants.WORLD_WIDTH, 15, 'World width is 15')
  test.equal(constants.WORLD_HEIGHT, 11, 'World height is 11')

  test.equal(constants.KEY_LEFT, 37)
  test.equal(constants.KEY_RIGHT, 39)
  test.equal(constants.KEY_UP, 38)
  test.equal(constants.KEY_DOWN, 40)
  test.equal(constants.KEY_ONE, 49)
  test.equal(constants.KEY_TWO, 50)
  test.equal(constants.KEY_THREE, 51)
  test.equal(constants.KEY_FOUR, 52)

  test.end()
})

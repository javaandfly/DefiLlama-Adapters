const { getUniTVL } = require('../helper/unknownTokens')

module.exports = {
  misrepresentedTokens: true,
  manta: { tvl: getUniTVL({ factory: '0x60Ad4aB0659C3b83320f3D43d3797553b55D52c6', useDefaultCoreAssets: true,  }), },
}

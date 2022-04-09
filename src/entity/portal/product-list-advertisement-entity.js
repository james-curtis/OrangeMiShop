class ProductAdvertisementEntity {
  /**
   * @type {String} 第一条广告URL，必须
   */
  firstAd

  /**
   * @type {?String} 第二条广告URL
   */
  secondAd

  /**
   * @description 广告实体
   * @param {String} ad1 第一条广告URL，必须
   * @param {String} ad2 第二条广告URL
   */
  constructor({ firstAd, secondAd }) {
    this.firstAd = firstAd
    this.secondAd = secondAd ?? null
  }
}
export default ProductAdvertisementEntity

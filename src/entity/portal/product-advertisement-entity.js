class ProductAdvertisementEntity {
  /**
   * @type {String} 广告标题，用于alt和title属性
   */
  title

  /**
   * @type {String} 图片链接
   */
  url

  /**
   * @description 两个产品列表块之间的插入广告
   * @param {String} title 广告标题，用于alt和title属性
   * @param {String} url 图片链接
   */
  constructor({ title, url }) {
    this.title = title
    this.url = url
  }
}
export default ProductAdvertisementEntity

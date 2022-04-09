class ProductItemEntity {
  /**
   * @type {String} 产品名称
   */
  title
  /**
   * @type {String} 产品图片URL
   */
  picture

  /**
   * @type {String|null} 产品描述
   */
  description

  /**
   * @type {Number} 产品价格
   */
  price

  /**
   * @type {(Number|false)} 产品折后价，若无折扣即false，若有折扣即折后价
   */
  discountPrice

  /**
   * @type {Boolean} 是否显示详细，默认true
   */
  isShowDetail

  /**
   * 单个产品
   * @param {String} title 产品名称
   * @param {String} picture 产品图片URL 
   * @param {String|null} description 产品描述
   * @param {Number} price 产品价格
   * @param {(Number|Boolean)} discountPrice 产品折后价，若无折扣即false，若有折扣即折后价
   */
  constructor({ title, picture, description, price, discountPrice, isShowDetail }) {
    this.title = title
    this.picture = picture
    this.description = description ?? null
    this.price = price
    this.discountPrice = discountPrice ?? false
    this.isShowDetail = isShowDetail ?? true
  }
}

export default ProductItemEntity

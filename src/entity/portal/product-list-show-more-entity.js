class ProductListShowMoreEntity {
  /**
   * @type {String} 标题
   */
  title

  /**
   * @type {String|null} 下面的一行小字部分
   */
  tips

  /**
   * @type {String|null} 跳转链接
   */
  url

  /**
   * @description 显示更多对应的实体对象
   * @param {String} title 标题
   * @param {String|null} tips 下面的一行小字部分
   * @param {String|null} url 跳转链接
   */
  constructor({ title, tips, url }) {
    this.title = title ?? '浏览更多'
    this.tips = tips ?? null
    this.url = url ?? null
  }
}
export default ProductListShowMoreEntity

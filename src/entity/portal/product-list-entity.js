import ProductAdvertisementEntity from "./product-list-advertisement-entity"
import ProductCategoryEntity from "./product-list-category-entity"
import ProductListShowMoreEntity from "./product-list-show-more-entity"
class ProductListEntity {
  /**
   * @type {String} 产品列表的标题
   */
  title

  /**
   * @type {ProductAdvertisementEntity} 广告
   */
  ad

  /**
   * @type {ProductCategoryEntity[]} 产品分类列表
   */
  productCategoryList

  /**
   * @type {(ProductListShowMoreEntity[]|null)} 显示浏览更多
   */
  showMoreList


  /**
   * @description 产品列表实体
   * @param {String} title 产品列表的标题
   * @param {ProductAdvertisementEntity} ad 广告
   * @param {ProductCategoryEntity[]} productCategoryList 产品分类列表
   * @param {(ProductListShowMoreEntity[]|null)} showMore 显示浏览更多
   */
  constructor({ title, ad, productCategoryList, showMoreList }) {
    this.title = title
    this.ad = ad
    this.productCategoryList = productCategoryList
    this.showMoreList = showMoreList ?? null

  }
}
export default ProductListEntity

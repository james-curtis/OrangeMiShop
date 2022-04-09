import ProductItemEntity from "./product-item-entity"
class ProductCategoryEntity {
  /**
   * @type {String} 产品分类名称
   */
  categoryName

  /**
   * @type {ProductItemEntity[]} 产品列表
   */
  productList

  /**
   * 产品分类列表
   * @param {String} categoryName 产品分类名称 
   * @param {ProductItemEntity[]} productList 产品列表
   */
  constructor({ categoryName, productList }) {
    this.categoryName = categoryName
    this.productList = productList
  }
}
export default ProductCategoryEntity

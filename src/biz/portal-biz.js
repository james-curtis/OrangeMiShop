import portalApi from "@/api/portal-api"
import ProductListEntity from '@/entity/portal/product-list-entity'
import ProductItemEntity from "@/entity/portal/product-item-entity"
import ProductCategoryEntity from "@/entity/portal/product-list-category-entity"
import ProductListAdvertisementEntity from "@/entity/portal/product-list-advertisement-entity"
import ProductListShowMoreEntity from '@/entity/portal/product-list-show-more-entity'
import ProductAdvertisementEntity from "@/entity/portal/product-advertisement-entity"
import PortalBlockTypeEnumConstant from "@/constants/portal-block-type-enum-constant";
import VideoItemEntity from "@/entity/portal/video-item-entity"
import VideoListEntity from "@/entity/portal/video-list-entity"

class PortalBiz {
  /**
   * @description 查询产品列表
   * @returns {Array.<ProductListEntity|ProductListAdvertisementEntity>}
   */
  async queryPortalBlocks() {
    let re = await portalApi.queryPortalBlocks()
    console.log(re)
    let productListEntityArr = []
    for (let productListItem of re.data) {
      if (productListItem.type == PortalBlockTypeEnumConstant.getProductShowBlockType()) {
        let productCategoryList = []
        let showMoreList = []
        for (let productCategoryItem of productListItem.productCategoryList) {
          let productList = []
          for (let productItem of productCategoryItem.productList) {
            productList.push(new ProductItemEntity(productItem))
          }
          productCategoryList.push(new ProductCategoryEntity({
            categoryName: productCategoryItem.categoryName,
            productList: productList
          }))
        }
        if (productListItem.showMore)
          for (let productShowMoreItem of productListItem.showMore) {
            showMoreList.push(new ProductListShowMoreEntity(productShowMoreItem))
          }
        productListEntityArr.push(new ProductListEntity({
          title: productListItem.title,
          ad: new ProductListAdvertisementEntity(productListItem.ad),
          productCategoryList,
          showMoreList: showMoreList.length != 0 ? showMoreList : null
        }))
      } else if (productListItem.type == PortalBlockTypeEnumConstant.getAdvertisementBlockType()) {
        productListEntityArr.push(new ProductAdvertisementEntity(productListItem))
      } else if (productListItem.type == PortalBlockTypeEnumConstant.getVideoBLockType()) {
        let viedoItemArr = []
        for (let item of productListItem.videoList) {
          viedoItemArr.push(new VideoItemEntity(item))
        }
        productListEntityArr.push(new VideoListEntity({
          title: productListItem.title,
          videoList: viedoItemArr
        }))


      }
    }
    return productListEntityArr
  }
}
export default PortalBiz

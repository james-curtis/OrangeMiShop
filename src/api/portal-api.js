import { productApiURL } from "@/constants/api-url-constant";
import { baseAxios } from "@/lib/http";

export default {
  /**
   * @description 查询产品列表
   */
  queryPortalBlocks: () => {
    return baseAxios.get(productApiURL.queryPortalBlocks)
  }
}

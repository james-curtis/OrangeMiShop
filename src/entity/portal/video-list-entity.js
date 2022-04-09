import VideoItemEntity from "./video-item-entity"
class VideoListEntity {
  /**
   * @type {String} 整个视频组的标题
   */
  title

  /**
   * @type {VideoItemEntity[]} 视频项目数组
   */
  videoList

  /**
   * @description 视频列表实体
   * @param {String} title 整个视频组的标题
   * @param {VideoItemEntity[]} videoList 视频项目数组
   */
  constructor({ title, videoList }) {
    this.title = title
    this.videoList = videoList
  }
}

export default VideoListEntity

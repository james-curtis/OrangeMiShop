class VideoItemEntity {
  /**
   * @type {String} 封面
   */
  thumb

  /**
   * @type {String} 视频标题
   */
  title

  /**
   * @type {String} 视频描述
   */
  description

  /**
   * @type {String|null} 视频URL
   */
  url

  /**
   * @description 单个视频项目实体
   * @param {String} thumb 封面
   * @param {String} title 视频标题
   * @param {String} description 视频描述
   * @param {String|null} url 视频URL
   */
  constructor({ thumb, title, description, url }) {
    this.thumb = thumb
    this.title = title
    this.description = description
    this.url = url ?? null
  }
}
export default VideoItemEntity

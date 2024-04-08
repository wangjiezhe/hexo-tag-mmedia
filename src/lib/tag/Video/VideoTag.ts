class VideoTag extends BaseTag {
  config: VideoConfig;

  constructor(hexo: any, config: VideoConfig, contents: JSON) {
    super(hexo, config, contents);
    this.config = config;
  }

  generate(): string {
    let video_data = merge(this.config.data, this.contents);
    let video_config = `<video${this.config.pjax ? ' class="pjax"' : ''} id="${this.tag_id}" ${this.parse(
      video_data
    )}></video>`;
    this.result += video_config;
    return this.result;
  }
}

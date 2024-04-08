class AudioTag extends BaseTag {
  config: AudioConfig;

  constructor(hexo: any, config: AudioConfig, contents: JSON) {
    super(hexo, config, contents);
    this.config = config;
  }

  generate(): string {
    let data = merge(this.config.data, this.contents);;
    let audio_config = `<audio${this.config.pjax ? ' class="pjax"' : ''} id="${this.tag_id}" ${this.parse(data)}></audio>`;
    this.result += audio_config;
    return this.result;
  }
}

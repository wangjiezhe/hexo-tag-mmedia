abstract class BaseConfig {
  abstract data: { [key: string]: string | number | boolean | JSON };
  pjax: boolean = config_default.pjax || false;
}

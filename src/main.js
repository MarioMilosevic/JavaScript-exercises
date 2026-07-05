class Config {
  constructor() {
    this.name = "config";
  }

  createConfig() {
    if (!this.name) return new Config();
    else return this.name;
  }

  getConfigName() {
    return this.name;
  }
}

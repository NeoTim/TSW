/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const winston = require("winston");
const OpenPlatformPlugin = require("@tswjs/open-platform-plugin");

module.exports = {
  plugins: [
    new OpenPlatformPlugin({
      appid: "tsw1282",
      appkey: "Meb5txDXHnTJbZFyrmKFmZc6",
      reportStrategy: "always",
      // 只支持同步写法
      getUid: (request) => "xxx",
      getProxyInfo: () => ({
        port: 80,
        name: "2.0demo",
        group: "TSW",
        groupName: "TSW团队",
        desc: "2.0demo测试环境",
        order: 30,
        owner: "demoUser",
        alphaList: ["demoUser"]
      })
    })
  ],
  winstonTransports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "debug.log", level: "debug" })
  ]
};

# test_agent_wx

一个基于原生微信小程序的密码找回与重置流程示例项目，使用 Skyline 渲染器、自定义导航栏和多页面串联方式实现找回密码体验。

## 项目概览

- 技术栈：原生微信小程序、WXML、WXSS、JavaScript
- 渲染模式：`skyline`
- 组件框架：`glass-easel`
- 导航方式：自定义导航栏 + 页面跳转流程

当前项目围绕“忘记密码”场景实现了一套完整页面链路，适合作为登录找回流程原型或小程序页面开发练习项目。

## 页面流程

项目当前包含以下页面：

1. `pages/index/index`：首页 / 入口页
2. `pages/forgot-password/forgot-password`：输入邮箱进入找回流程
3. `pages/verify-code/verify-code`：输入 5 位验证码
4. `pages/password-reset/password-reset`：进入密码重置确认页
5. `pages/set-password/set-password`：设置新密码
6. `pages/password-success/password-success`：密码修改成功页

整体流程如下：

`首页 -> 忘记密码 -> 验证码 -> 重置密码 -> 设置新密码 -> 成功页`

## 目录结构

```text
test_agent_wx/
|-- app.js
|-- app.json
|-- app.wxss
|-- project.config.json
|-- sitemap.json
|-- components/
|   `-- navigation-bar/
|       |-- navigation-bar.js
|       |-- navigation-bar.json
|       |-- navigation-bar.wxml
|       `-- navigation-bar.wxss
`-- pages/
    |-- index/
    |-- forgot-password/
    |-- verify-code/
    |-- password-reset/
    |-- set-password/
    `-- password-success/
```

## 核心特性

- 使用 `navigationStyle: "custom"` 实现自定义导航体验
- 封装了 `components/navigation-bar` 组件，处理返回、标题和安全区适配
- `verify-code` 页面实现了 5 位验证码输入态管理
- 使用 `wx.navigateTo`、`wx.navigateBack`、`wx.reLaunch` 组织页面跳转和回退逻辑
- 启用 `lazyCodeLoading: "requiredComponents"`，减少非必要代码加载

## 开发方式

当前项目没有引入 `npm` 或其他 CLI 构建层，推荐直接通过微信开发者工具开发和调试。

### 本地运行

1. 打开微信开发者工具
2. 选择导入项目
3. 项目目录选择：`C:\Users\Administrator\Desktop\test_agent_wx`
4. 使用开发者工具进行编译、预览和真机调试

### 代码检查

- 使用编辑器 ESLint 插件读取 `.eslintrc.js`
- 重点检查页面跳转、`setData` 调用和组件属性传递

## 配置说明

`app.json` 当前关键配置如下：

- `renderer: "skyline"`
- `style: "v2"`
- `componentFramework: "glass-easel"`
- `navigationStyle: "custom"`

这意味着项目依赖较新的小程序渲染与组件能力，布局、导航和真机表现应优先在微信开发者工具与真实设备上联合验证。

## 手动测试建议

每次改动后，至少验证以下内容：

1. 首页是否能正确进入找回密码流程
2. 忘记密码页输入邮箱后按钮是否按预期可用
3. 验证码页输入 5 位数字时高亮和跳转是否正常
4. 各页面返回逻辑是否符合预期
5. 设置新密码后是否能进入成功页
6. 自定义导航栏在不同设备安全区下是否显示正常

## 后续可扩展方向

- 接入真实邮箱验证码发送与校验接口
- 为密码输入增加格式校验与错误提示
- 增加登录页、注册页和账号体系接口对接
- 补充状态管理、请求封装和环境配置
- 增加更完整的异常流与接口失败处理

## 注意事项

- 不要提交真实 AppID、密钥或生产环境配置
- 如果后续接入网络请求，需提前在微信小程序后台配置 HTTPS 合法域名
- 涉及用户数据、验证码和密码时，需要补充隐私合规与安全校验逻辑

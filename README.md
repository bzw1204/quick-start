
# electron-template

<p align="center">
  <img src="build/icon.png" alt="Electron Template Logo" width="200"/>
</p>

## 📝 项目简介

一个基于 Electron + Vue 3 + TypeScript 的桌面应用程序模板，为跨平台桌面应用开发提供强大的基础架构。该模板集成了现代前端工具链和优化的开发体验，让你可以快速构建高性能、美观的桌面应用。

## ✨ 特性

- 🚀 **技术栈**: Electron + Vue 3 + TypeScript + Vite
- 📦 **热重载**: 开发过程中的实时更新
- 🎨 **UI 框架**: 集成 NaiveUI 组件库
- 🔧 **开发工具**: TypeScript 类型检查，ESLint + Prettier 代码格式化
- 🧩 **插件系统**: 丰富的 Vite 插件支持
- 💻 **跨平台**: 支持 Windows、macOS 和 Linux
- 🔍 **自动导入**: 使用 unplugin-auto-import 提高开发效率
- 🎯 **UnoCSS**: 原子化 CSS 引擎
- 🛠️ **自定义标题栏**: 使用 @electron-uikit/titlebar
- 📊 **日志系统**: 集成 electron-log

## 🚀 快速开始

### 前提条件

- Node.js 16+
- pnpm 7+

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

### 构建应用

```bash
# 构建所有平台
pnpm build

# 构建并不打包（仅输出目录）
pnpm build:unpack

# 仅构建 Windows 版本
pnpm build:win

# 仅构建 macOS 版本
pnpm build:mac

# 仅构建 Linux 版本
pnpm build:linux
```

## 📁 项目结构

```
electron-template/
├── build/                  # 构建资源和配置
├── src-electron/           # Electron 主进程和预加载脚本
│   ├── index.ts            # 主进程入口
│   ├── preload/            # 预加载脚本
│   ├── manager/            # 窗口管理等模块
│   └── worker/             # 工作进程
├── src/                    # 渲染进程代码 (Vue 应用)
├── resources/              # 应用资源文件
├── electron.vite.config.ts # Electron-Vite 配置
├── electron-builder.yml    # Electron-Builder 配置
└── tsconfig*.json          # TypeScript 配置
```

## 🛠️ 技术详解

### 主进程

主进程 (`src-electron/index.ts`) 是 Electron 应用的入口，负责创建窗口、处理系统交互和生命周期管理。该模板优化了主进程配置，提供了以下功能：

- 自定义无边框窗口
- 安全配置优化
- 针对 Windows 7 系统的特殊处理
- 多进程支持

### 预加载脚本

预加载脚本 (`src-electron/preload`) 实现了渲染进程和主进程的安全通信桥接，同时提供了DOM就绪状态检测等实用功能。

### 渲染进程

渲染进程基于 Vue 3 构建，集成了:
- 组件自动导入
- NaiveUI 组件库
- UnoCSS 原子化 CSS
- Vue Router 路由管理

### 构建系统

使用 electron-vite 和 electron-builder 构建和打包应用：
- 支持 Windows (NSIS 安装程序)
- 支持 macOS (DMG)
- 支持 Linux (AppImage、Snap、Deb)

## 📄 配置文件

### electron-builder.yml

负责应用打包配置，包括:
- 应用ID和产品名称
- 构建资源目录
- 打包格式和目标平台
- 构建钩子
- 发布配置

### .npmrc

配置了国内镜像源，加速依赖安装:
```
electron_mirror=https://npmmirror.com/mirrors/electron/
electron_builder_binaries_mirror=https://npmmirror.com/mirrors/electron-builder-binaries/
```

## 🧩 编码规范

项目使用 ESLint 和 Prettier 进行代码风格管理，集成了 git hooks 来确保代码质量:
- 提交前进行类型检查
- 推送前进行代码格式化和 lint 检查

## 🔄 持续集成/持续部署

该模板支持自动更新，配置为通用提供程序，可以轻松集成到 CI/CD 工作流中。

## 📜 许可证

[MIT License](LICENSE)

## 🤝 贡献指南

欢迎提交 Issues 和 Pull Requests！

---

```json:package.json
{
  "description": "一个基于 Electron + Vue 3 + TypeScript 的现代化桌面应用程序模板，集成了 Vite 和 NaiveUI，提供了完整的开发和构建流程，适用于快速构建高性能跨平台桌面应用"
}
```

以上是优化后的 description 内容，它更加全面地描述了项目的技术栈和价值。

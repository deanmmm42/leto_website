# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述
这是一个基于Next.js 15构建的LetoAI企业官网，使用React 19、TypeScript和Tailwind CSS。主要展示LetoAI公司的三大业务领域：电商行业AI解决方案、教育行业AI评估、海外工具产品开发。

## 开发命令
- `npm run dev` - 启动开发服务器 (localhost:3000)
- `npm run build` - 构建生产版本
- `npm run lint` - 运行ESLint代码检查
- `npm start` - 启动生产服务器

## 技术栈架构
### 前端框架
- **Next.js 15** (App Router) - React全栈框架
- **React 19** - UI库
- **TypeScript** - 类型安全
- **Tailwind CSS** - 原子化CSS框架

### UI组件库
- **Radix UI** - 无障碍的原子组件
- **shadcn/ui** - 基于Radix UI的设计系统
- **Framer Motion** - 动画库
- **Lucide React** - 图标库

### 项目结构
```
/app                    # Next.js App Router页面
  /contact             # 联系我们页面
  /solutions           # 解决方案页面组
    /ecommerce         # 电商解决方案
    /education         # 教育解决方案  
    /global-tools      # 海外工具解决方案
/components            # React组件
  /ui                  # shadcn/ui基础组件
  /contact             # 联系表单相关组件
  /kokonutui           # 第三方UI组件
/config               # 配置文件
  text.ts             # 网站文案配置中心
/lib                  # 工具函数
/hooks                # 自定义React hooks  
/public               # 静态资源
/styles               # 全局样式
```

## 关键配置文件
- `components.json` - shadcn/ui配置，定义组件路径别名
- `tailwind.config.ts` - Tailwind配置，包含LetoAI品牌色彩系统
- `config/text.ts` - 网站所有文案的统一配置中心
- `next.config.mjs` - Next.js配置，禁用构建时的ESLint和TypeScript检查

## 品牌色彩系统
项目使用自定义的LetoAI品牌色彩：
- 暖色调渐变：`#F75C03` (深橙) → `#FFB100` (橙黄) → `#F15BB5` (粉红)
- 冷色调渐变：`#F15BB5` (紫粉) → `#8E8EFF` (淡蓝紫) → `#00BBF9` (青蓝)
- 主色：`#F75C03` (深橙)
- 强调色：`#00BBF9` (青蓝)

## 开发规范
- 所有组件使用TypeScript编写
- 使用Tailwind CSS进行样式编写
- 文案统一在`config/text.ts`中管理，便于维护和国际化
- 组件按功能模块组织，UI基础组件放在`/components/ui`
- 路径别名：`@/*` 指向项目根目录

## 部署配置
- 图片优化已禁用 (`unoptimized: true`)
- ESLint和TypeScript构建检查已禁用
- 支持暗色主题，使用class策略切换主题
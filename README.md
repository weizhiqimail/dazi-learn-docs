# Dazi-Learn-Docs

一个面向技术知识学习与习题练习的静态网站。项目当前收录AWS-CLF-C02云从业者认证的系统知识、架构场景、分类题解和719道练习题，后续可以继续增加其他技术领域与考试模块。

## 在线访问

- 主站（Cloudflare Pages）：[https://dazi-learn-docs.pages.dev/](https://dazi-learn-docs.pages.dev/)
- 备用站（GitHub Pages）：[https://weizhiqimail.github.io/dazi-learn-docs/](https://weizhiqimail.github.io/dazi-learn-docs/)
- AWS-CLF-C02文档：[https://dazi-learn-docs.pages.dev/docs/aws/clf-c02](https://dazi-learn-docs.pages.dev/docs/aws/clf-c02)
- AWS-CLF-C02做题模式：[https://dazi-learn-docs.pages.dev/practice/aws-clf-c02](https://dazi-learn-docs.pages.dev/practice/aws-clf-c02)

## 当前内容

- C1～C6完整知识文档，包括基础概念、核心服务、GlobalShop架构场景、719题分类解析、统计和考前复习。
- 719道AWS-CLF-C02练习题，支持单选题和多选题。
- 按知识分类筛选题目，提交答案后显示正确答案与解析。
- 支持随机顺序、错题记录和题目收藏；个人数据保存在浏览器本地。
- 文档和题库采用模块化结构，可继续扩展AWS其他认证或新的技术学习模块。

## 技术栈

- Docusaurus 3
- React 19
- TypeScript
- MDX/Markdown
- Cloudflare Pages
- GitHub Pages

## 本地运行

```bash
npm ci
npm start
```

默认开发地址为`http://localhost:3000/`。

## 检查与构建

```bash
npm run typecheck
npm run build
npm run serve
```

`npm run check`可以依次完成类型检查和生产构建。静态文件输出到`build`目录。

## 主要目录

```text
docs/aws/clf-c02/              AWS-CLF-C02知识文档
src/components/QuizEngine/     通用做题组件
src/pages/practice/            各学习模块的做题页面
static/data/                    题库数据
.github/workflows/             Cloudflare与GitHub-Pages部署工作流
```

做题组件与题库数据相互分离。新增学习模块时，可以复用`QuizEngine`，并为模块提供符合统一结构的题库JSON。

## 部署

Cloudflare Pages为当前主要访问入口，生产构建命令为`npm run build`，输出目录为`build`。

仓库同时包含Cloudflare Pages和GitHub Pages工作流。部署所需配置位于`.github/workflows`；Cloudflare工作流需要在GitHub仓库中配置`CLOUDFLARE_API_TOKEN`和`CLOUDFLARE_ACCOUNT_ID`。

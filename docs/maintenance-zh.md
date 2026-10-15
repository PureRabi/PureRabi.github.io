# 学术主页：部署与维护

源码位置：`/Users/yzliang/Documents/MyBlog`。
目标账号按已连接的 `PureRabi` 配置；目标仓库 `PureRabi/purerabi.github.io`，预计网址 `https://purerabi.github.io`。这是部署后的地址，目前尚未发布。

## 当前状态

已下载并定制 Academic Pages 原版模板，保留 MIT 许可证和主题布局。已清除示例论文、文章、经历、联系人和 PDF，配置简介、研究、论文、简历、笔记导航，增加 GitHub Actions 构建与部署、Mac/Windows 换行规范。页面采用中英双语标题与栏目；姓名、学校、职位、简介、研究方向、联系邮箱均留空，供你填写。每个页面可在同一文件中分别填写中文和英文，避免维护两套重复页面。

已检查 YAML、页面元数据及导航路径。尚未执行完整 Jekyll 构建和浏览器预览：本机只有系统 Ruby 2.6，模板的 Jekyll 4.4 需要更新的 Ruby；GitHub Actions 已指定 Ruby 3.3。

## 软件：推荐的轻量方案

1. 两台电脑都安装 [GitHub Desktop](https://desktop.github.com/download/)。Mac 下载与你的芯片对应的版本（Apple silicon 或 Intel），打开下载文件并移到 Applications；Windows 下载 64-bit 安装程序并运行。两端登录同一个 GitHub 账号。
2. 编辑器使用 [Visual Studio Code](https://code.visualstudio.com/)。Mac 已检测到安装；Windows 下载官方 Windows 安装包即可。用 File → Open Folder 打开源码目录。
3. 日常编辑和上传不需要安装 Ruby、Node.js 或 Docker；构建由 GitHub Actions 完成。少量文字也可以直接在 GitHub 网页编辑。

## 首次发布：只剩推送源码

已确认你创建了公开空仓库 `PureRabi/PureRabi.github.io`，并已将 Pages 的 Source 设为 GitHub Actions。本地分支为 `master`，origin 已配置。

助手通过当前 GitHub 连接写入 README 时，GitHub 返回 `403 Resource not accessible by integration`，没有文件上传成功。本机 Git 的 HTTPS 登录也尚未配置。这是目前阻止上传的原因。

推荐用 GitHub Desktop 完成首次登录和推送：

1. 安装 [GitHub Desktop](https://desktop.github.com/download/)，登录 PureRabi。
2. File → Add Local Repository → 选择 `/Users/yzliang/Documents/MyBlog`。
3. 本地源码已提交，直接 **Push origin**；如显示 Publish branch，则点击发布该分支。目标应是 `PureRabi/PureRabi.github.io`，不要发布到 Academic Pages 原模板仓库。
4. 打开仓库 Actions → Build and deploy academic homepage。推送到 master 会自动开始构建。
5. build 和 deploy 都成功后，从 Settings → Pages 点击 Visit site，或访问 `https://purerabi.github.io`。以实际部署结果为准，目前尚未确认上线。

也可以检查 GitHub → Settings → Applications 中用于 Codex/ChatGPT 的连接是否包含这个新仓库，再重新连接；若连接获得写权限，助手可继续上传。

不要把 `.git`、`_site` 或 `vendor` 文件夹手动上传到 GitHub；GitHub Desktop 会按仓库配置管理需要提交的文件。无需发送密码或访问令牌。

## Mac 和 Windows 同步

GitHub 远程仓库保存统一版本。Mac 使用 `Documents/MyBlog`；Windows 第一次用 GitHub Desktop → File → Clone repository → URL，输入 `https://github.com/PureRabi/purerabi.github.io`，本地路径可选 `C:\Users\你的用户名\Documents\MyBlog`。

每次切换电脑都执行：

1. 开始修改前：Fetch origin；出现 Pull origin 时点击拉取。
2. 用 VS Code 修改内容并保存。
3. 在 Desktop 检查改动，填写说明，Commit to master。
4. Push origin，确认上传成功后再换电脑。
5. GitHub Actions 自动更新网页。

两台电脑不要同时修改同一文件。若出现冲突，保留需要的内容、解决冲突后提交；不要用强制推送解决。不要把正在使用的 Git 仓库放入 OneDrive/iCloud/Dropbox 的自动同步目录，避免多个同步机制同时改写 `.git`。如果系统已把 Documents 自动备份到云盘，请为仓库选一个不受云盘同步的目录，或先排除该文件夹。

## 内容在哪里修改

| 内容 | 文件 |
| --- | --- |
| 姓名、单位、邮箱、Scholar/ORCID 链接、头像 | `_config.yml` 中的 `author` |
| 网站标题、地址、仓库 | `_config.yml` 顶部 |
| 首页简介 | `_pages/about.md` |
| 研究方向与项目 | `_pages/research.md` |
| 简历文字 | `_pages/cv.md` |
| 论文记录 | `_publications/`，每篇一个 Markdown 文件 |
| 笔记 | `_posts/YYYY-MM-DD-short-title.md` |
| PDF 简历和论文附件 | `files/` |
| 导航 | `_data/navigation.yml` |

将头像放在 `images/`，再将 `author.avatar` 改成对应文件名。上传 `files/cv.pdf` 后，可在简历页添加 `[Download CV]({{ '/files/cv.pdf' | relative_url }})`。

### 新增论文示例

新建 `_publications/2026-01-01-example.md`。以下只是格式，请用真实信息替换日期、标题、期刊、引用和链接后再提交。

```markdown
---
title: "论文真实标题"
collection: publications
category: manuscripts
permalink: /publication/example-paper
date: 2026-01-01
venue: "真实期刊或会议名称"
paperurl: "https://doi.org/真实DOI"
citation: "作者. 标题. 期刊, 年份."
---

简要介绍论文的问题、方法和结果。
```

会议论文可将 category 改为 `conferences`。PDF 上传到 `files/` 后，paperurl 也可写为完整网址 `https://purerabi.github.io/files/文件名.pdf`。

### 新增笔记示例

新建 `_posts/2026-10-15-first-note.md`，日期需改成实际发布日期：

```markdown
---
title: "笔记标题"
date: 2026-10-15
permalink: /posts/first-note/
tags:
  - research
---

正文使用 Markdown。
```

## 可选：离线预览

只有你需要“上传前在本机预览”才需要额外环境。先完成在线部署最省事。

模板支持 Docker Desktop：从 [Docker 官方页面](https://www.docker.com/products/docker-desktop/) 安装适合系统的版本；Windows 根据安装向导启用 WSL 2。安装并启动后，在仓库目录运行 `docker compose up --build`，打开 `http://localhost:4000`。该路径尚未在你的电脑验证，不是当前发布的前置条件。

## 参考

- [Academic Pages 原模板与说明](https://github.com/academicpages/academicpages.github.io)
- [GitHub Pages 创建与命名规则](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [GitHub Pages 自定义工作流](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [GitHub Desktop 克隆仓库](https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop)

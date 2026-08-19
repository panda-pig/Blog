---
slug: macos-chatgpt-codex-flickering-fix
lang: zh
title: "macOS 上 ChatGPT Codex 页面持续闪烁、无法点击：我的排查过程与有效方案"
description: "ChatGPT 桌面端的 Codex 页面持续闪烁、无法操作，重装和重启都无效。记录我如何在保留本地项目与任务数据的前提下，通过备份 ~/.codex 并重新登录 Codex 恢复正常。"
date: 2026-07-28
tags: ["ChatGPT", "Codex", "macOS", "故障排查"]
draft: true
---

最近在 Mac 上使用新版 ChatGPT 桌面应用时，我遇到了一个非常影响使用的问题：点击左侧的 Codex 标签后，整个页面开始持续闪烁，界面像在不断刷新，所有按钮都无法点击。

具体症状包括：

- Chat 和其他页面可以正常打开
- 一进入 Codex 首页就开始闪烁
- 还没进入任何具体项目，页面就已经无法操作
- 重新下载安装 ChatGPT 无效
- 重启 Mac 无效
- 禁用 GPU 渲染无效
- 移走本地配置后虽然不再闪烁，但原来的项目和任务记录也少了很多

经过多次排查，我最后的判断是：**Codex 本地数据仍然存在，但登录认证状态出现了异常，客户端反复经历加载、认证失败和刷新，最终形成了闪烁循环。**

这不是官方的故障结论，而是根据排查现象得出的推断。不过，沿着这个方向处理后，我在保留原有本地数据的前提下恢复了正常使用。

## 一、先备份 Codex 本地数据

在做任何修改之前，建议先备份本地的 `~/.codex` 文件夹。

这个目录里可能包含：

- 本地项目记录
- 历史会话
- 任务信息
- Codex 配置
- 项目路径和索引

**不要一上来就删除整个目录。**

先完全退出 ChatGPT：

```bash
osascript -e 'quit app "ChatGPT"'
```

然后在终端执行：

```bash
tar --no-xattrs \
  --exclude='.codex/ipc' \
  -czf ~/Desktop/codex_backup.tar.gz \
  -C ~ .codex
```

这条命令会把 `.codex` 文件夹压缩到桌面，文件名为：

```text
codex_backup.tar.gz
```

之所以排除 `.codex/ipc`，是因为这个目录里可能包含运行时使用的 socket 文件，例如 `ipc.sock`。这类临时通信文件可能无法正常压缩，而且不属于项目和任务数据，无需备份。

备份后，可以执行下面的命令检查压缩包是否正常：

```bash
tar -tzf ~/Desktop/codex_backup.tar.gz >/dev/null && echo "Backup OK"
```

如果终端显示：

```text
Backup OK
```

说明压缩包可以被正常读取。确认备份成功后，再继续后面的操作。

## 二、不要直接删除整个 `~/.codex`

排查过程中，我测试过把整个 `.codex` 文件夹临时移走：

```bash
mv ~/.codex ~/.codex_backup
```

再次启动后，ChatGPT 会自动创建一个新的空 `.codex` 目录。此时：

- Codex 页面不再闪烁
- 但原来的大量项目、任务和历史记录也不显示了

恢复旧目录后：

- 项目和任务重新出现
- 闪烁问题也重新出现

这说明问题确实与旧目录中的某些状态有关，但直接删除整个目录并不是理想方案，因为它会影响本地记录。

因此，我后续的处理方向变成了：**保留 `.codex` 中的项目和任务数据，只刷新登录认证状态。**

> 如果你也要用“移走目录”的方式做排查，请确保 ChatGPT 已完全退出，并且不要覆盖已经存在的 `~/.codex_backup`。在完成压缩备份前，不建议执行这一步。

## 三、确认 Codex CLI 已经安装

在终端执行：

```bash
which codex
```

如果返回类似下面的路径：

```text
/opt/homebrew/bin/codex
```

或者：

```text
/Users/你的用户名/.nvm/versions/node/.../bin/codex
```

说明 Codex CLI 已经安装。

还可以查看当前版本：

```bash
codex --version
```

以及当前登录状态：

```bash
codex login status
```

如果显示：

```text
Logged in using ChatGPT
```

说明 CLI 当前已经通过 ChatGPT 账号登录。即使这里显示已登录，在认证状态异常时，退出后重新登录仍然值得尝试。

## 四、退出并重新登录 Codex

这是最终对我有效的步骤。

先执行：

```bash
codex logout
```

然后重新登录：

```bash
codex login
```

终端会引导你打开浏览器并登录 ChatGPT 账号。完成登录后，再次确认状态：

```bash
codex login status
```

如果显示：

```text
Logged in using ChatGPT
```

说明重新登录成功。

随后重新打开 ChatGPT：

```bash
open -a "ChatGPT"
```

再次进入 Codex 页面。我的情况是在保留原有 `.codex` 数据的前提下，重新登录后恢复了正常：

- 原来的项目和任务仍然存在
- Codex 页面不再闪烁
- 所有按钮可以正常点击
- 切换账号后也可以正常使用

## 五、我尝试过但没有效果的方法

在找到有效方案前，我还测试了以下几种常见处理方式。

### 1. 重新下载安装 ChatGPT

对我的情况无效。

重新安装通常只会替换应用本体，不会自动清理用户目录中的 `~/.codex`。因此，旧的配置、状态和认证信息仍然可能被新安装的应用读取。

### 2. 重启 Mac

对我的情况无效。

如果问题来自持久化的本地状态或认证信息，单纯重启系统并不会改变这些数据。

### 3. 禁用 GPU

我尝试过：

```bash
open -a "ChatGPT" --args --disable-gpu
```

页面仍然持续闪烁。因此，我遇到的问题并不是单纯的 GPU 硬件加速或图形渲染问题。

### 4. 只修改 `config.toml`

我还尝试过把配置文件临时改名：

```bash
mv ~/.codex/config.toml ~/.codex/config.toml.bak
```

这可以用来排除单个配置文件异常，但没有彻底解决我的闪烁问题，说明问题并不只由 `config.toml` 引起。

### 5. 删除整个 `.codex`

使用全新的 `.codex` 的确能让页面正常启动，但大量本地项目和任务记录也会暂时消失。

除非已经完成可靠备份，否则不建议这样做。即便备份完成，也应该优先尝试影响范围更小的重新登录。

## 六、最终解决流程

整个流程可以简化为五步。

### 第一步：退出 ChatGPT

```bash
osascript -e 'quit app "ChatGPT"'
```

### 第二步：备份 Codex 本地数据

```bash
tar --no-xattrs \
  --exclude='.codex/ipc' \
  -czf ~/Desktop/codex_backup.tar.gz \
  -C ~ .codex
```

### 第三步：验证备份

```bash
tar -tzf ~/Desktop/codex_backup.tar.gz >/dev/null && echo "Backup OK"
```

看到 `Backup OK` 后再继续。

### 第四步：重新登录 Codex

```bash
codex logout
codex login
```

### 第五步：重新打开 ChatGPT

```bash
open -a "ChatGPT"
```

## 七、结论

这次问题的关键并不是重新安装应用，也不是删除全部本地数据。对我来说，更合适的处理方式是：

1. 先完整备份 `~/.codex`
2. 保留原有项目和任务数据
3. 退出并重新登录 Codex
4. 让客户端刷新失效或异常的认证状态

最终真正解决问题的是：

```bash
codex logout
codex login
```

同时保留原来的：

```text
~/.codex
```

如果你也遇到以下情况：

- Codex 页面不停闪烁
- 整个页面无法点击
- 重装应用无效
- 禁用 GPU 无效
- 使用新的 `.codex` 后恢复正常，但旧项目消失

可以优先尝试本文的处理方法。操作之前，一定先备份本地 `.codex` 数据，避免项目和任务记录丢失。

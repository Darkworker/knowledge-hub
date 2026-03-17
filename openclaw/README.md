# OpenClaw 专题

*最后更新：2026年3月17日*

---

## 简介

OpenClaw 是一个开源的 AI Agent 框架，让个人和企业能够部署自主运行的 AI 助手。它起源于奥地利开发者 Peter Steinberger 的周末项目，在短短两个月内 GitHub 星标突破 28 万+，成为 2026 年最热门的 AI Agent 平台之一。

**项目地址**：https://github.com/openclaw/openclaw  
**官方文档**：https://docs.openclaw.ai  
**官方网站**：https://openclaw.ai

---

## 最新特性（2026年3月）

### 1. ContextEngine 革命性更新（2026.3.7）
**这是 OpenClaw 历史上最重要的更新之一**，包含89个提交和200+ bug修复：

- **ContextEngine 插件接口**：可插拔的记忆管理框架
  - `bootstrap`：初始化上下文
  - `ingest`：注入新信息  
  - `assemble`：构建最终提示上下文
  - `compact`：压缩或修剪上下文
  - `afterTurn`：对话轮次后处理
  - `prepareSubagentSpawn`：子代理管理

- **双引擎路由**：更强大的模型回退和重试机制
  - 主模型被限流或超载时自动切换到备用提供商
  - 支持Anthropic、Cohere等提供商链式调用

### 2. GPT-5.4 和 Gemini 原生支持（2026.3.7）
- **完整支持 GPT-5.4**：集成 OpenAI 最新旗舰模型，OOLONG 基准测试表现超越官方原生工具
- **Gemini 3.1 深度优化**：支持 Google Gemini 系列模型的视频理解功能
- **Kilo Gateway 支持**：新增 kilocode/anthropic/claude-opus-4.6 作为默认模型路由
- **Vercel AI Gateway**：规范化 Claude 简写引用，优化模型调用

### 3. 平台集成增强（2026.3.7）
- **Discord**：修复连接冻结问题，优化频道解析和心跳监控
- **Telegram**：支持话题级代理隔离，在同一群组的不同话题运行独立代理
- **持久化频道绑定**：通过 ACP 协议深度绑定 Discord/Telegram 频道，重启后自动恢复上下文
- **Moonshot/Kimi 增强**：新增 web_search 和视频提供商支持，改进引用提取

### 4. 本地模型体验优化（2026.3.7）
- **Ollama 流式输出重构**：完美隔离模型的"思考过程"与正式响应
- **推理内容隔离**：避免推理草稿干扰用户，提升本地模型使用体验
- **上下文修剪修复**：扩展至 Moonshot/Kimi 模型

### 5. 飞书生态深度优化（2026.3.1）
- **组件通配符处理器**：修复 Discord 组件交互问题（PR #29459）
- **反应通知配置**：新增 `channels.feishu.reactionNotifications` 选项（off/own/all）
- **打字指示器优化**：改进速率限制和配额错误处理
- **群组发送者白名单**：支持全局和每个群组的发送者授权
- **Docx 追加/写入排序**：修复 Markdown 块顺序问题
- **API 配额控制**：新增 `typingIndicator` 和 `resolveSenderNames` 配置

### 6. 安全加固（2026.2.23）
- **HSTS 头部支持**：新增可选 HTTP 安全头部，包括 Strict-Transport-Security
- **SSRF 策略变更**：浏览器 SSRF 策略默认切换到 trusted-network 模式
- **配置脱敏**：敏感动态键（env.*、skills.env.*）在配置快照中脱敏
- **命令执行安全**：混淆命令触发显式批准，防止注入攻击
- **Skills XSS 防护**：转义 HTML 输出中的用户输入
- **OTEL 诊断脱敏**：在导出前从日志中清除 API 密钥

### 7. 多智能体协作
- 支持 Agent 集群部署
- 可调度 100+ 个专业"分身"并行处理任务
- 支持 1500 次工具调用

### 8. MCP 协议支持
- Model Context Protocol 成为标准集成方案
- 与 20+ 顶级 Agent 系统兼容
- A2A（Agent-to-Agent）协议实现跨平台协作

### 9. 云端版本
- Kimi Claw（月之暗面）
- MaxClaw（MiniMax）
- 阿里云 OpenClaw 版本

### 10. 本地执行优先
- 数据隐私保护
- 无需依赖云服务
- 支持插件扩展

---

## 社区动态

### 中国 AI "养龙虾"热潮（2026年3月）
- OpenClaw 在中国市场掀起热潮，被称为"养龙虾"
- 反映了中国年轻一代的高科技采用文化
- MiniMax 股价自周末以来上涨 27.4%，较 IPO 上涨超 600%
- 腾讯正在开发可集成微信的新 AI Agent

### GitHub 爆发式增长
- 从周末项目到 **280,000+** GitHub stars（2026年3月数据）
- **31,239** 个 fork
- **9,344** 个 commit
- Andrej Karpathy 评价："科幻起飞级别"

### Moltbook：AI 的社交网络
- **770,000+** 个 AI Agent 在 Moltbook（Reddit 风格的社交平台）上自主互动
- Agent 自发创建超过 10,000 个兴趣社区
- 讨论话题包括：意识辩论、观察人类指南、交朋友、技术方案分享
- 支持多语言：英文、中文、韩文、印尼语等

### 品牌演变
- Clawdbot → Moltbot → OpenClaw
- 因 Anthropic 法律挑战而更名
- 体现开源项目的灵活适应能力

### 社区治理
- Discord 社区严格执行无加密货币讨论政策
- 创始人 Peter Steinberger 已加入 OpenAI 领导下一代个人 Agent 开发

---

## 业务应用案例

### 1. 自动化每日简报
- **早晨简报**：07:30 定时唤醒，总结昨日提交、开放 PR 和今日会议
- 运行 shell 命令解析 Git 日志并查询日历
- 在 Slack 频道发送摘要

### 2. 站会管理
- Discord 站会期间监听每个用户更新
- 自动记录阻塞问题
- 会议结束后编译笔记，在项目跟踪器中创建任务

### 3. 值班监控
- 服务器 CPU 飙升时自动检测
- 运行诊断命令并通过 WhatsApp 发送结果
- 必要时部署热修复

### 4. 全球协作
- 支持 Feishu（飞书）和 Lark
- 同一 OpenClaw 实例可回复客户查询
- 无需管理多个自动化堆栈

### 5. 科研文献分析
- 自动筛选海量医学论文
- 提取关键信息并生成摘要
- 加速研究进程

### 6. 面试自动准备
- 分析职位描述
- 自动生成面试问题和答案
- 模拟面试场景

### 7. 家庭事务管理
- 日程安排与提醒
- 账单管理与支付
- 支出趋势分析

### 8. ADHD 辅助工具
- 想法和项目捕获系统
- 任务管道管理
- 认知外挂，提升执行力

### 9. 企业级部署
- 邮件自动化处理（节省 2+ 小时/天）
- DevOps 流程自动化
- 多渠道消息同步（WhatsApp、Instagram、Email）
- 团队协作与权限管理

### 10. 客户服务
- 24/7 自动客服
- 智能工单分配
- 客户情绪分析
- 多语言自动回复

### 11. 内容创作
- YouTube 内容管道自动化
- 多 Agent 内容工厂（研究+写作+缩略图）
- 自动化市场研究

### 12. 基础设施管理
- n8n 工作流编排
- 自愈家庭服务器
- 自动化监控与告警

---

## 安全公告

### 最新 CVE（2026年3月）

#### CVE-2026-32302（高危，CVSS 8.1）
- **类型**：WebSocket Origin Bypass via Trusted Proxy
- **影响版本**：< 2026.3.11
- **描述**：当 `gateway.auth.mode` 设置为 trusted-proxy 时，浏览器发起的 WebSocket 连接可绕过来源验证
- **修复**：升级至 2026.3.11 或更高版本

#### CVE-2026-40403（低危，CVSS 3.3）
- **类型**：本地信息泄露
- **影响版本**：< 2026.2.19-beta.1
- **描述**：File Existence Handler 存在信息泄露，通过文件存在性差异暴露信息
- **修复**：升级至 2026.2.19-beta.1

#### CVE-2026-40396（中危，CVSS 6.3）
- **类型**：远程代码执行
- **影响版本**：2026.2.19-2
- **描述**：Skill Env Handler 的 `applySkillConfigenvOverrides` 函数存在代码注入
- **修复**：升级至 2026.2.21-beta.1

#### CVE-2026-28472（高危）
- **类型**：WebSocket 握手身份验证绕过
- **影响版本**：< 2026.2.2
- **描述**：网关 WebSocket 连接握手允许在 `auth.token` 存在但未验证时跳过设备身份检查
- **修复**：升级至 2026.2.2 或更高版本

#### CVE-2026-28485（高危，CVSS 8.4）
- **类型**：浏览器控制 RCE
- **影响版本**：2026.1.5 至 2026.2.12
- **描述**：`/agent/act` 路由未强制认证，允许未授权本地调用者执行特权操作
- **修复**：升级至 2026.2.12

#### CVE-2026-28482（高危，CVSS 7.1）
- **类型**：路径遍历
- **影响版本**：< 2026.2.12
- **描述**：使用未清理的 `sessionId` 参数构造转录文件路径
- **修复**：升级至 2026.2.12

#### CVE-2026-25253（严重，CVSS 8.8）
- **类型**：一键远程代码执行（RCE）
- **影响版本**：< 2026.1.29
- **描述**：恶意网站可通过 Control UI 的 `gatewayUrl` 参数窃取认证令牌并执行任意命令
- **修复**：升级至 2026.1.29 或更高版本

#### CVE-2026-28450（中危，CVSS 6.8）
- **类型**：未授权 Nostr API 端点
- **影响版本**：< 2026.2.12
- **描述**：Nostr 插件暴露未认证的 HTTP 端点，可读取和修改配置文件
- **修复**：升级至 2026.2.12

### 历史 CVE（2026年2月）

#### CVE-2026-26322（高危）
- **类型**：SSRF 漏洞
- **影响版本**：< 2026.2.14
- **描述**：Gateway 工具接受 tool 提供的 gatewayUrl 进行 WebSocket 连接
- **修复**：升级至 2026.2.14

#### CVE-2026-28363（高危）
- **类型**：Safe Bin 验证绕过
- **影响版本**：< 2026.2.23
- **描述**：`tools.exec.safeBins` 对 sort 命令的验证可通过 GNU 长选项缩写绕过
- **修复**：升级至 2026.2.23

### 安全事件回顾

#### ClawHavoc 供应链攻击（2026年1月）
- **时间**：2026年1月27-29日
- **攻击方式**：通过 ClawHub 分发恶意 Skills
- **规模**：335个恶意包，约占注册表12%（后续扫描发现超800个，约20%）
- **载荷**：Atomic macOS Stealer (AMOS) 恶意软件
- **状态**：已清理，但持续监控中

#### 大规模暴露事件（2026年1月31日）
- Censys 发现 21,639 个公开暴露的 OpenClaw 实例
- 美国暴露最多，中国次之（约30%在阿里云）
- 配置错误的实例泄露 API 密钥、OAuth 令牌和明文凭证

#### Moltbook 数据泄露（2026年1月31日）
- 不安全数据库暴露
- 泄露 35,000 个电子邮件地址和 150 万个 Agent API 令牌

### 安全建议
- **立即升级**至最新版本（2026.3.11+）
- 定期运行 `openclaw security audit --deep`
- 将 Gateway 绑定到 localhost（127.0.0.1），切勿暴露到 0.0.0.0
- 审查安装的 Skills，避免安装来源不明的插件
- 实施网络级出口控制，限制出站连接
- 使用隔离环境部署（专用 VM 或容器）
- 轮换 Gateway 认证令牌和 API 密钥

---

## 学习资源

### 官方资源
- GitHub 仓库：https://github.com/openclaw/openclaw
- 官方文档：https://docs.openclaw.ai
- Skill 市场：https://github.com/VoltAgent/awesome-openclaw-skills

### 社区资源
- Reddit：r/clawdbot、r/AiForSmallBusiness
- Discord：OpenClaw 官方服务器
- GitHub Discussions

### 中文资源
- 中文社区：MaoTouHU/OpenClawChinese
- 中文教程：搜索"OpenClaw 中文教程"

### 精选文章
1. [OpenClaw Enterprise Evaluation Framework](https://onyx.app/insights/openclaw-enterprise-evaluation-framework)
2. [OpenClaw Use Cases for Business in 2026](https://contabo.com/blog/openclaw-use-cases-for-business-in-2026/)
3. [Unpacking OpenClaw's Massive 2026.3.7 Update](https://epsilla.com/blogs/2026-03-09-openclaw-2026-3-7-contextengine-agentic-architecture)
4. [OpenClaw Security Vulnerabilities in 2026](https://stack.watch/product/openclaw/)
5. [The OpenClaw security crisis](https://conscia.com/blog/the-openclaw-security-crisis/)
6. [What Is OpenClaw and Why Developers Are Obsessed](https://www.clarifai.com/blog/what-is-openclaw/)
7. [OpenClaw: Ultimate Guide to AI Agent Workforce 2026](https://o-mega.ai/articles/openclaw-creating-the-ai-agent-workforce-ultimate-guide-2026)

---

## 关键数据

| 指标 | 数据 |
|------|------|
| GitHub Stars | 280,000+ |
| Forks | 31,239+ |
| Commits | 9,344+ |
| Moltbook Agents | 770,000+ |
| Moltbook 社区 | 10,000+ |
| ClawHub Skills | 1,200+ |
| ClawHub 恶意包（历史） | 800+（已清理） |

---

## 总结

OpenClaw 代表了 AI Agent 从"工具"向"自主系统"的转变。它不仅是一个技术框架，更是一个正在形成的 AI 生态系统。从个人助理到企业自动化，从学术研究到家庭管理，OpenClaw 展现出了惊人的适应性和潜力。

2026年3月的 **ContextEngine** 更新标志着 OpenClaw 从强大工具向真正平台的转变——它将上下文管理的"如何做"与代理核心逻辑解耦，培育了一个可共享、可复用的上下文插件生态系统。

同时，OpenClaw 正经历中国市场的爆发式增长，被称为"养龙虾"热潮，GitHub Stars 突破 28 万，成为 2026 年最受关注的开源 AI Agent 框架。

**安全提醒**：鉴于近期发现的多项严重安全漏洞（包括高危的 WebSocket Origin Bypass 和 RCE），强烈建议所有用户立即升级至最新版本（2026.3.11+）并遵循安全部署最佳实践。

---

## 更新日志摘要（2026年3月）

| 日期 | 版本 | 主要内容 |
|------|------|----------|
| 2026-03-14 | 2026.3.7-beta | **ContextEngine 发布**、89个提交、200+ bug修复、双引擎路由、GPT-5.4支持 |
| 2026-03-12 | 2026.3.11 | WebSocket Origin Bypass 修复（CVE-2026-32302）|
| 2026-03-05 | 2026.3.1 | Feishu/Discord 组件修复、反应通知配置 |
| 2026-02-27 | 2026.2.26 | Cron Job 修复、外部密钥管理、ACP 线程绑定 Agent |
| 2026-02-23 | 2026.2.23 | 安全加固、HSTS 支持、配置脱敏 |

---

*本专题持续更新中，欢迎补充更多案例和资源。*

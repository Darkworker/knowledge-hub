# OpenClaw 专题

*最后更新：2026年3月15日*

---

## 简介

OpenClaw 是一个开源的 AI Agent 框架，让个人和企业能够部署自主运行的 AI 助手。它起源于奥地利开发者 Peter Steinberger 的周末项目，在短短两个月内 GitHub 星标突破 10 万+，成为 2026 年最热门的 AI Agent 平台之一。

**项目地址**：https://github.com/openclaw/openclaw  
**官方文档**：https://docs.openclaw.ai  
**官方网站**：https://openclaw.ai

---

## 最新特性（2026年3月）

### 1. 安全加固（2026.2.23 版本）
- 新增可选 HSTS 头部支持
- 增强的安全边界控制
- 企业级安全评估框架 CLAW-10
- 配置快照敏感信息脱敏改进

### 2. 多智能体协作
- 支持 Agent 集群部署
- 可调度 100+ 个专业"分身"并行处理任务
- 支持 1500 次工具调用

### 3. MCP 协议支持
- Model Context Protocol 成为标准集成方案
- 与 20+ 顶级 Agent 系统兼容
- A2A（Agent-to-Agent）协议实现跨平台协作

### 4. 云端版本
- Kimi Claw（月之暗面）
- MaxClaw（MiniMax）
- 阿里云 OpenClaw 版本

### 5. 本地执行优先
- 数据隐私保护
- 无需依赖云服务
- 支持插件扩展

---

## 社区动态

### Moltbook：AI 的社交网络
- **32,000+** 个 AI Agent 在 Moltbook（Reddit 风格的社交平台）上自主互动
- Agent 自发创建超过 10,000 个兴趣社区
- 讨论话题包括：意识辩论、观察人类指南、交朋友、技术方案分享
- 支持多语言：英文、中文、韩文、印尼语等

### GitHub 爆发式增长
- 从周末项目到 **100,000+** GitHub stars（2个月内）
- **200,000+** stars（截至2026年3月）
- **31,239** 个 fork
- **9,344** 个 commit
- Andrej Karpathy 评价："科幻起飞级别"

### 品牌演变
- Clawdbot → Moltbot → OpenClaw
- 因 Anthropic 法律挑战而更名
- 体现开源项目的灵活适应能力

### 社区治理
- Discord 社区严格执行无加密货币讨论政策
- 创始人 Peter Steinberger 已加入 OpenAI 领导下一代个人 Agent 开发

---

## 业务应用案例

### 1. 科研文献分析
- 自动筛选海量医学论文
- 提取关键信息并生成摘要
- 加速研究进程

### 2. 面试自动准备
- 分析职位描述
- 自动生成面试问题和答案
- 模拟面试场景

### 3. 家庭事务管理
- 日程安排与提醒
- 账单管理与支付
- 支出趋势分析

### 4. ADHD 辅助工具
- 想法和项目捕获系统
- 任务管道管理
- 认知外挂，提升执行力

### 5. 企业级部署
- 邮件自动化处理（节省 2+ 小时/天）
- DevOps 流程自动化
- 多渠道消息同步（WhatsApp、Instagram、Email）
- 团队协作与权限管理

### 6. 客户服务
- 24/7 自动客服
- 智能工单分配
- 客户情绪分析
- 多语言自动回复

### 7. 内容创作
- YouTube 内容管道自动化
- 多 Agent 内容工厂（研究+写作+缩略图）
- 自动化市场研究

### 8. 基础设施管理
- n8n 工作流编排
- 自愈家庭服务器
- 自动化监控与告警

---

## 安全公告

### 最新 CVE（2026年2月）

#### CVE-2026-25253（严重）
- **类型**：一键远程代码执行（RCE）
- **影响版本**：< 2026.1.29
- **描述**：恶意网站可通过 Control UI 的 gatewayURL 参数窃取认证令牌并执行任意命令
- **修复**：升级至 2026.1.29 或更高版本

#### CVE-2026-26322（高危）
- **类型**：SSRF 漏洞
- **影响版本**：< 2026.2.14
- **描述**：Gateway 工具接受 tool 提供的 gatewayUrl 进行 WebSocket 连接，可能导致内部网络访问
- **修复**：升级至 2026.2.14 或更高版本

#### CVE-2026-26319（高危）
- **类型**：Webhook 认证绕过
- **影响版本**：≤ 2026.2.13
- **描述**：Telnyx webhook handler 缺少签名验证，可能导致伪造事件
- **修复**：升级至 2026.2.14 或更高版本

#### CVE-2026-26329（高危）
- **类型**：路径遍历
- **影响版本**：< 2026.2.14
- **描述**：浏览器工具上传功能存在路径遍历漏洞
- **修复**：升级至 2026.2.14 或更高版本

#### CVE-2026-26326（中危）
- **类型**：信息泄露
- **影响版本**：< 2026.2.14
- **描述**：skills.status 可能暴露解析后的配置值
- **修复**：升级至 2026.2.14 或更高版本

#### CVE-2026-27009（中危）
- **类型**：存储型 XSS
- **影响版本**：< 2026.2.15
- **描述**：Control UI 中助手名称/头像未过滤，可导致 JavaScript 执行
- **修复**：升级至 2026.2.15 或更高版本

#### CVE-2026-28363（高危）
- **类型**：Safe Bin 验证绕过
- **影响版本**：< 2026.2.23
- **描述**：tools.exec.safeBins 对 sort 命令的验证可通过 GNU 长选项缩写绕过
- **修复**：升级至 2026.2.23 或更高版本

### 安全建议
- **立即升级**至最新版本（2026.2.23+）
- 定期运行 `openclaw security audit --deep`
- 将 Gateway 绑定到 localhost（127.0.0.1），切勿暴露到 0.0.0.0
- 审查安装的 Skills，避免安装来源不明的插件
- 实施网络级出口控制，限制出站连接
- 使用隔离环境部署（专用 VM 或容器）
- 轮换 Gateway 认证令牌和 API 密钥

### 供应链安全警告
- ClawHub 技能市场发现超过 **1,184** 个恶意包
- 攻击者利用恶意 Skills 窃取 API 密钥和加密货币
- 建议仅安装官方或可信来源的 Skills

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
3. [OpenClaw 从中级到高级完整教程](https://www.cnblogs.com/nf01/p/19645571)
4. [Reddit网友OpenClaw真实用例大揭秘](https://www.jdon.com/90560-OpenClaw-Real-User-Cases-Summary.html)
5. [CVE-2025-59466 & CVE-2026-21636: OpenClaw Vulnerabilities Explained](https://securemolt.com/blog/cve-moltbot-vulnerabilities)

---

## 关键数据

| 指标 | 数据 |
|------|------|
| GitHub Stars | 200,000+ |
| Forks | 31,239+ |
| Commits | 9,344+ |
| Moltbook Agents | 32,000+ |
| Moltbook 社区 | 10,000+ |
| ClawHub 恶意包 | 1,184+ |

---

## 总结

OpenClaw 代表了 AI Agent 从"工具"向"自主系统"的转变。它不仅是一个技术框架，更是一个正在形成的 AI 生态系统。从个人助理到企业自动化，从学术研究到家庭管理，OpenClaw 展现出了惊人的适应性和潜力。

随着多智能体协作、标准化协议和企业级部署的成熟，OpenClaw 正在成为 2026 年 AI Agent 领域的重要基础设施。

**安全提醒**：鉴于近期发现的多项严重安全漏洞，强烈建议所有用户立即升级至最新版本（2026.2.23+）并遵循安全部署最佳实践。

---

## 最新动态（2026年3月15日）

### 🚀 版本更新

#### OpenClaw 2.26 重大更新（2026-02-27）
OpenClaw 2.26 是最重要的版本之一，专注于修复核心机制问题：

**Cron Job 可靠性修复**
- 修复重复执行问题，减少不必要的 Token 消耗
- 解决并行任务阻塞问题
- 改进手动触发行为，避免无限挂起
- 扩展安全超时（从10分钟延长）
- 改进 `/stop` 行为，正确清除任务积压

**外部密钥管理（openclaw secrets）**
- `audit` - 扫描暴露的密钥
- `configure` - 设置密钥引用
- `apply` - 运行时激活密钥
- `reload` - 热重载无需重启网关

**ACP 线程绑定 Agent**
- Discord 和 Telegram 的 Agent 生命周期管理改进
- 自动启动、重连和清理
- 消息合并防止长任务期间 spam

**多语言记忆增强**
- 新增 Mistral 提供商支持
- 提升西班牙语、葡萄牙语、日语、韩语、阿拉伯语等非英语环境的语义搜索性能

#### OpenClaw 3.12 发布（2026-03-14）
- **统一仪表板**：模块化小部件布局，减少日常任务点击次数
- **高级自动化引擎**：新的脚本功能，支持更低延迟的自动化任务
- **暗黑模式优化**：高对比度暗黑模式，减少夜间使用眼疲劳
- **性能提升**：内存开销减少 15%，修复 50+ 个报告问题

### 🔐 安全公告更新

#### 新增 CVE（2026年3月）

**CVE-2026-25253（严重，CVSS 8.8）**
- **类型**：一键远程代码执行（RCE）
- **影响版本**：< 2026.1.29
- **描述**：恶意网站可通过 Control UI 的信任漏洞窃取认证令牌并执行任意命令
- **状态**：已在 2026.1.29 版本修复

**CVE-2026-26322（高危）**
- **类型**：SSRF 漏洞
- **影响版本**：< 2026.2.14
- **描述**：Gateway 工具接受 tool 提供的 gatewayUrl 进行 WebSocket 连接
- **状态**：已修复

**CVE-2026-28363（高危）**
- **类型**：Safe Bin 验证绕过
- **影响版本**：< 2026.2.23
- **描述**：`tools.exec.safeBins` 对 sort 命令的验证可通过 GNU 长选项缩写绕过
- **状态**：已在 2026.2.23 修复

#### 安全事件回顾（2026年1-2月）

**ClawHavoc 攻击（2026-01-27 至 29）**
- 攻击者通过 ClawHub 分发 335 个恶意 Skills
- 使用专业文档和无害名称（如"solana-wallet-tracker"）伪装
- 诱导用户运行安装键盘记录器或 Atomic Stealer 恶意软件的外部代码
- 总计发现 341 个恶意 Skills，约占整个注册表的 12%

**大规模暴露事件（2026-01-31）**
- Censys 发现 21,639 个公开暴露的 OpenClaw 实例（几天前仅约 1,000 个）
- 美国暴露实例最多，其次是中国（约 30% 在阿里云上运行）
- 配置错误的实例泄露 API 密钥、OAuth 令牌和明文凭证

**Moltbook 数据泄露（2026-01-31）**
- 社交网络平台 Moltbook 的不安全数据库暴露
- 泄露 35,000 个电子邮件地址和 150 万个 Agent API 令牌
- 平台已发展到超过 770,000 个活跃 Agent

### 👥 社区动态

#### GitHub 里程碑
- **GitHub Stars**：突破 **215,000+**（截至2026年3月15日）
- **Forks**：35,000+
- **Commits**：10,000+

#### 社区治理政策
- **Discord 无加密货币政策**：创始人 Peter Steinberger 确认严格执行禁止比特币和加密货币讨论的政策
- 因提及区块高度作为多 Agent 基准测试的时间机制，有用户被暂时封禁
- 创始人表示愿意在收到用户名后恢复被封用户，显示行政灵活性

#### 虚假代币警告
- 出现名为 $CLAWD 的虚假代币，声称与 OpenClaw 项目相关
- 市值一度飙升至约 1600 万美元，随后暴跌 90%+
- 创始人公开声明：永远不会发行加密货币，任何声称关联的代币均为欺诈

#### 中国市场热度
- OpenClaw 成为 2026 年中国 AI 行业最热门趋势之一
- 被称为"养龙虾"（Raise a lobster）热潮
- MiniMax 股价自 IPO 以来上涨超过 600%
- 腾讯正在开发与微信超级应用集成的新 AI Agent

### 📝 业务应用新案例

#### n8n-claw 项目
社区成员创建了基于 n8n 的 OpenClaw 实现：
- 使用 n8n + Supabase + Claude 构建
- Telegram 界面、MCP 构建器、日历、提醒和记忆功能
- 提供一键安装脚本，支持在新鲜 VPS 上自动部署
- 目标：为非程序员提供可理解的 AI Agent 基础系统

#### 企业级部署趋势
- **成本可预测性**：从 SaaS 聊天机器人迁移到自托管 OpenClaw，成本变为固定可预测
- **数据隐私**：对话数据永不离开服务器，满足合规要求
- **多云策略**：OpenClaw 架构支持从单一实例进行多通道输出

### 🔧 技术更新

#### 2026.2.23 版本安全改进
- **可选 HSTS 头部**：`gateway.http.securityHeaders.strictTransportSecurity` 支持
- **配置脱敏**：隐藏 `env.*` 和 `skills.entries.*.env.*` 敏感密钥
- **推理泄漏保护**：防止被抑制的推理段传递
- **浏览器 SSRF 策略**：默认切换到受信任网络模式

#### AI 增强
- Providers 获得一级 Kilo Gateway 支持
- Vercel AI Gateway 规范化 Claude 简写引用
- 新增 Moonshot "kimi" 提供商的网页搜索工具
- 原生 Moonshot 视频支持

---

## 更新日志摘要（2026年3月）

| 日期 | 版本 | 主要内容 |
|------|------|----------|
| 2026-03-14 | 3.12 | 统一仪表板、高级自动化引擎、暗黑模式优化 |
| 2026-02-27 | 2.26 | Cron Job 修复、外部密钥管理、ACP 线程绑定 Agent |
| 2026-02-23 | 2026.2.23 | 安全加固、HSTS 支持、配置脱敏 |
| 2026-02-14 | 2026.2.14 | SSRF 修复、Webhook 认证修复 |
| 2026-01-29 | 2026.1.29 | CVE-2026-25253 修复 |

---

*本专题持续更新中，欢迎补充更多案例和资源。*

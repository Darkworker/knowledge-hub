# Cloudflare Access 配置指南

## 配置步骤清单

### 第一步：准备工作
- [ ] 注册 Cloudflare 账号：https://dash.cloudflare.com/sign-up
- [ ] 准备你的邮箱地址（用于接收验证码）

### 第二步：添加域名（如果还没有）
1. 登录 Cloudflare Dashboard
2. 点击 "Add a Site"
3. 输入你的域名（如：darkworker.github.io 或自定义域名）
4. 选择 Free Plan
5. 按照提示修改 DNS 解析（如果需要）

### 第三步：开启 Access 保护
1. 左侧菜单选择 **Zero Trust**
2. 选择 **Access** > **Applications**
3. 点击 **Add an application**
4. 选择 **Self-hosted**

### 第四步：应用配置
填写以下信息：

| 字段 | 值 |
|------|-----|
| Application Name | OpenClaw Knowledge Hub |
| Session Duration | 24 hours |
| Domain | darkworker.github.io/knowledge-hub/openclaw/blogs/ |

### 第五步：添加身份验证
1. 选择 **Identity providers**
2. 点击 **Add new**
3. 选择 **One-time PIN**
4. 输入你的邮箱地址
5. 点击 **Save**

### 第六步：创建访问策略
1. 点击 **Add a rule**
2. Rule name: "Allow Admin Access"
3. Action: **Allow**
4. Configure rules:
   - Selector: **Emails**
   - Value: 你的邮箱地址（如：xxx@example.com）
5. 点击 **Save application**

### 第七步：测试
1. 打开浏览器无痕模式
2. 访问：https://darkworker.github.io/knowledge-hub/openclaw/blogs/
3. 应该会跳转到 Cloudflare 验证页面
4. 输入你的邮箱，接收验证码
5. 验证成功后即可访问

---

## 配置完成后

### 添加更多用户（可选）
1. 进入 Access > Applications
2. 选择你的应用
3. 编辑 Policies
4. 添加更多邮箱地址

### 查看访问日志
1. 进入 Zero Trust > Logs > Access
2. 可以看到谁在什么时间访问了网站

---

## 故障排除

**问题：验证页面不显示**
- 检查 DNS 是否正确解析到 Cloudflare
- 确认域名配置正确

**问题：收不到验证码**
- 检查垃圾邮件文件夹
- 确认邮箱地址输入正确

**问题：验证通过后还是无法访问**
- 清除浏览器缓存
- 检查 Session Duration 设置

---

## 安全建议

1. **定期查看访问日志**，发现异常及时处理
2. **限制用户列表**，不要开放给所有人
3. **设置合理的 Session 时长**，平衡安全和便利性
4. **启用 MFA**（如果可用）

---

配置完成后，AI 助手页面就会被 Cloudflare Access 保护，只有验证过的用户才能访问。
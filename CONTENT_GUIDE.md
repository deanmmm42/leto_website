# LetoAI网站文案配置指南

本文档记录了网站所有文字内容的配置位置和修改方法。通过修改`config/text.ts`文件，可以统一管理所有页面的文案内容。

## 配置文件结构

所有文案内容都存储在 `/config/text.ts` 中，按模块组织：

- `common` - 通用文字（品牌名、按钮文字等）
- `navigation` - 导航菜单
- `home` - 首页Hero轮播区域
- `solutions` - 首页解决方案板块
- `achievements` - 首页成就数据板块  
- `mission` - 首页使命板块
- `contact` - 联系我们表单
- `footer` - 页脚内容
- `ecommerce` - 电商解决方案页面
- `education` - 教育解决方案页面
- `globalTools` - 全球工具解决方案页面

## 修改流程

1. **编辑文案内容**：在`config/text.ts`中修改对应的文字
2. **自动生效**：保存后网站会自动更新显示
3. **无需重启**：修改配置文件不需要重启开发服务器

## 详细配置映射

### 首页 (/)

#### 1. Header导航区域
```typescript
// config/text.ts
navigation.menuItems[0].name        // "首页"
navigation.menuItems[1].name        // "解决方案" 
navigation.menuItems[1].subItems    // 子菜单：电商行业、教育行业、海外工具
navigation.menuItems[2].name        // "联系"
common.cta.experience               // "立即体验"
```

#### 2. Hero轮播区域
```typescript
// config/text.ts  
home.hero.carousels[0].badge        // "AI数字化未来愿景"
home.hero.carousels[0].title1       // "AI数字化"
home.hero.carousels[0].title2       // "未来愿景" 
home.hero.carousels[0].description  // 第一个轮播的描述文字

home.hero.carousels[1].*            // 第二个轮播内容
home.hero.carousels[2].*            // 第三个轮播内容

common.cta.explore                  // "开始探索"
common.cta.learnMore               // "了解更多"
```

#### 3. 解决方案板块
```typescript
// config/text.ts
solutions.title                     // "解决方案"
solutions.description               // 板块描述
solutions.cards[0].title           // "电商行业"
solutions.cards[0].description     // 电商卡片描述
solutions.cards[0].buttonText      // "了解更多"
solutions.cards[1].*               // 教育行业卡片
solutions.cards[2].*               // 海外工具卡片
```

#### 4. 成就数据板块
```typescript
// config/text.ts
achievements.title                  // "我们的成就"
achievements.description            // 板块描述
achievements.data[0].number        // "50+"
achievements.data[0].title         // "头部企业"
achievements.data[0].description   // "抖音、平安、美团"
achievements.data[1-3].*           // 其他三个数据卡片
```

#### 5. 使命板块
```typescript
// config/text.ts
mission.title                      // "我们的使命"
mission.content                    // 使命描述段落
mission.points[0].title           // "AI技术重塑"
mission.points[0].description     // 第一个要点描述
mission.points[1-3].*             // 其他三个要点
mission.cta                       // "携手共创AI未来"
```

#### 6. 联系我们板块
```typescript
// config/text.ts
contact.title                     // "联系我们"
contact.description              // "我们期待与您的合作"
contact.form.title              // "发送信息"  
contact.form.name.label         // "姓名"
contact.form.name.placeholder   // 输入框提示文字
contact.form.email.*            // 邮箱字段
contact.form.subject.*          // 主题字段
contact.form.message.*          // 信息字段
contact.form.submit             // "发送信息"
```

#### 7. Footer区域
```typescript  
// config/text.ts
footer.companyName               // "四川省乐途智行科技有限公司"
footer.tagline                   // 公司标语
footer.quickLinks.title         // "快速链接"
footer.quickLinks.links         // 链接数组
footer.solutions.*              // 解决方案链接
footer.resources.*              // 资源链接  
footer.legal.copyright          // 版权信息
footer.legal.links             // 法律链接
```

### 电商解决方案页面 (/solutions/ecommerce)

#### 1. Hero区域
```typescript
// config/text.ts
ecommerce.hero.badge            // "电商行业AI解决方案"
ecommerce.hero.title1           // "数字权益智能营销"
ecommerce.hero.title2           // "驱动GMV百亿级增长"
ecommerce.hero.description      // Hero区域描述
ecommerce.hero.metrics[0].number    // "300%+"
ecommerce.hero.metrics[0].label     // "营销投资回报率"
ecommerce.hero.metrics[1-2].*       // 其他两个数据
ecommerce.hero.buttons.primary      // "免费咨询方案"
ecommerce.hero.buttons.secondary    // "查看成功案例"
```

#### 2. 痛点挑战区域
```typescript
// config/text.ts
ecommerce.challenges.title      // "电商营销面临的核心挑战"  
ecommerce.challenges.subtitle   // "电商行业痛点"
ecommerce.challenges.items[0]   // "获客成本高：流量红利消失，拉新越来越难？"
ecommerce.challenges.items[1-3] // 其他三个挑战
```

#### 3. 服务区域
```typescript
// config/text.ts
ecommerce.services.title                    // "我们的服务"
ecommerce.services.items[0].title          // "AI欺诈检测"
ecommerce.services.items[0].description    // 简短描述
ecommerce.services.items[0].details        // 详细描述
ecommerce.services.items[1-4].*            // 其他四个服务
```

#### 4. 核心产品区域
```typescript
// config/text.ts
ecommerce.coreProducts.title                        // "核心产品"
ecommerce.coreProducts.items[0].title              // "数字权益营销平台"
ecommerce.coreProducts.items[0].description        // 产品描述
ecommerce.coreProducts.items[0].target             // 目标客户
ecommerce.coreProducts.items[0].advantages[0]      // "AI智能营销：..."
ecommerce.coreProducts.items[0].advantages[1-3]    // 其他优势
ecommerce.coreProducts.items[1].*                  // "AI风控系统"产品
```

#### 5. 成功案例区域
```typescript  
// config/text.ts
ecommerce.cases.title                       // "成功案例"
ecommerce.cases.items[0].title             // "抖音极速版"
ecommerce.cases.items[0].subtitle          // "金币补贴拉新促活解决方案"
ecommerce.cases.items[0].tag               // "头部案例"
ecommerce.cases.items[0].description       // 案例描述
ecommerce.cases.items[0].metrics[0]        // "日活跃用户：5000万+"
ecommerce.cases.items[0].metrics[1-3]      // 其他数据
ecommerce.cases.items[1].*                 // "平安好车主"案例
```

#### 6. 技术优势区域
```typescript
// config/text.ts
ecommerce.techAdvantages.title              // "领先的技术优势"
ecommerce.techAdvantages.items[0].title    // "10亿级私有数据"
ecommerce.techAdvantages.items[0].description // 描述
ecommerce.techAdvantages.items[1-3].*      // 其他三个优势
```

#### 7. CTA区域
```typescript
// config/text.ts
ecommerce.cta.title                // "准备开启您的数字化转型之旅？"
ecommerce.cta.button               // "立即咨询"
```

### 教育解决方案页面 (/solutions/education)

#### 1. Hero区域
```typescript
// config/text.ts
education.hero.badge               // "教育行业AI解决方案" 
education.hero.title1              // "AI赋能智慧教育"
education.hero.title2              // "让每个学生都能精准成长"
education.hero.description         // 描述
education.hero.metrics[0].number   // "300%+"
education.hero.metrics[0].label    // "评价效率提升"
education.hero.metrics[1-2].*      // 其他数据
education.hero.buttons.primary     // "立即咨询"
education.hero.buttons.secondary   // "查看成功案例"
```

#### 2. 痛点挑战区域
```typescript
// config/text.ts
education.challenges.title                  // "教育管理面临的核心挑战"
education.challenges.items[0].title        // "如何科学衡量学生？"
education.challenges.items[0].subtitle     // "评价难题"
education.challenges.items[0].description  // 详细描述
education.challenges.items[1].*            // 第二个挑战
```

#### 3. 核心产品区域
```typescript
// config/text.ts
education.coreProducts.title                        // "核心产品"
education.coreProducts.items[0].title              // "综合素养评价系统"
education.coreProducts.items[0].subtitle           // "告别唯分数论，构建学生360°成长画像"
education.coreProducts.items[0].description        // 产品描述
education.coreProducts.items[0].features[0]        // "多维度数据采集：..."
education.coreProducts.items[0].features[1-3]      // 其他功能
education.coreProducts.items[1].*                  // "智能题库+个性化辅导系统"
```

#### 4. 用户价值区域
```typescript
// config/text.ts
education.userValues.title                   // "为教育创造的核心价值"
education.userValues.subtitle               // "多维度价值体现"
education.userValues.items[0].title         // "教学效率革命性提升"
education.userValues.items[0].description   // 描述
education.userValues.items[0].benefit       // "教师工作效率提升60%+"
education.userValues.items[1-3].*           // 其他价值
education.userValues.dimensions[0]          // "教师层面：减轻评价负担，提升教学质量"
education.userValues.dimensions[1-3]        // 其他维度
```

#### 5. 成功案例区域
```typescript
// config/text.ts
education.cases.title                        // "成功案例"
education.cases.items[0].title              // "综合素养评价系统应用"
education.cases.items[0].organization       // "某知名AI试点学校"
education.cases.items[0].description        // 案例描述
education.cases.items[0].results[0]         // "评价维度：从1个扩展至15个维度"
education.cases.items[0].results[1-3]       // 其他结果
education.cases.items[1].*                  // 第二个案例
```

#### 6. 技术优势区域
```typescript
// config/text.ts
education.techAdvantages.title              // "技术优势"
education.techAdvantages.items[0].title    // "AI算法引擎"
education.techAdvantages.items[0].description // 描述
education.techAdvantages.items[1-3].*      // 其他优势
```

#### 7. CTA区域
```typescript
// config/text.ts
education.cta.title                // "准备革新您的教育管理方式？"
education.cta.button               // "立即咨询"
```

### 海外工具解决方案页面 (/solutions/global-tools)

#### 1. Hero区域
```typescript
// config/text.ts
globalTools.hero.badge                      // "海外工具AI解决方案"
globalTools.hero.title1                     // "全球AI工具生态"
globalTools.hero.title2                     // "让AI触手可及"
globalTools.hero.description                // 描述
globalTools.hero.features[0].label          // "全球化"
globalTools.hero.features[0].description    // "多语言支持"
globalTools.hero.features[1-2].*            // 其他特性
globalTools.hero.buttons.primary            // "立即体验"
globalTools.hero.buttons.secondary          // "了解产品功能"
```

#### 2. 痛点挑战区域
```typescript  
// config/text.ts
globalTools.challenges.title        // "海外工具开发面临的核心挑战"
globalTools.challenges.items[0]     // "技术壁垒高：AI算法复杂难以移动端部署？"
globalTools.challenges.items[1-3]   // 其他三个挑战
```

#### 3. 应用场景区域
```typescript
// config/text.ts
globalTools.applications.title                      // "我们的应用场景"
globalTools.applications.description                // 区域描述
globalTools.applications.items[0].title            // "智能相册清理"
globalTools.applications.items[0].englishTitle     // "Super Cleanup / Smart Cleaner"
globalTools.applications.items[0].slogan           // "Reclaim Your Phone's Storage, Intelligently."
globalTools.applications.items[0].features[0]      // "AI智能识别重复、模糊、截图等低质量照片"
globalTools.applications.items[0].features[1-4]    // 其他功能
globalTools.applications.items[1].*                // "血压/心率智能检测"应用
globalTools.applications.items[1].disclaimer       // 免责声明
```

#### 4. 技术优势区域
```typescript
// config/text.ts
globalTools.techAdvantages.title                   // "驱动创新的技术优势"
globalTools.techAdvantages.description             // 区域描述
globalTools.techAdvantages.items[0].title         // "移动端AI优化技术"
globalTools.techAdvantages.items[0].description   // 描述
globalTools.techAdvantages.items[1-5].*           // 其他五个优势
```

#### 5. 用户价值区域
```typescript
// config/text.ts  
globalTools.userValues.title                       // "为全球用户创造的核心价值"
globalTools.userValues.items[0].title             // "便捷高效的AI体验"
globalTools.userValues.items[0].description       // 描述
globalTools.userValues.items[1-3].*               // 其他三个价值
```

#### 6. 开发流程区域
```typescript
// config/text.ts
globalTools.developmentProcess.title               // "开发流程"
globalTools.developmentProcess.steps[0].title     // "市场调研"
globalTools.developmentProcess.steps[0].description // 描述
globalTools.developmentProcess.steps[1-3].*       // 其他步骤
```

#### 7. CTA区域  
```typescript
// config/text.ts
globalTools.cta.title                // "准备体验全球AI工具的魅力？"
globalTools.cta.button               // "立即咨询"
```

## 使用示例

### 修改首页标题
```typescript
// 在 config/text.ts 中
export const home = {
  hero: {
    carousels: [
      {
        badge: "AI数字化未来愿景",  // 修改这里
        title1: "AI数字化",          // 修改这里
        title2: "未来愿景",          // 修改这里
        description: "新的描述文字", // 修改这里
      },
      // ...
    ]
  }
}
```

### 修改按钮文字
```typescript
// 在 config/text.ts 中
export const common = {
  cta: {
    explore: "开始探索",      // 修改这里
    learnMore: "了解更多",    // 修改这里
    contact: "联系我们",      // 修改这里
    demo: "预约产品演示",     // 修改这里
    experience: "立即体验",   // 修改这里
  }
}
```

### 修改电商页面内容
```typescript
// 在 config/text.ts 中
export const ecommerce = {
  hero: {
    title1: "新的主标题",           // 修改主标题
    description: "新的描述文字",    // 修改描述
    buttons: {
      primary: "新的按钮文字",      // 修改主按钮
      secondary: "新的次按钮"       // 修改次按钮
    }
  },
  // ...
}
```

## 注意事项

1. **保持格式**：修改文字时请保持JSON格式正确，注意逗号和引号
2. **中文引号**：避免使用中文引号""，使用英文引号""  
3. **特殊字符**：包含引号的文字需要使用转义字符 `\"`
4. **数组索引**：数组从0开始，`[0]`表示第一个元素
5. **重启服务**：通常不需要重启，但如果修改没有生效，可以重启开发服务器

## 文件路径速查

- **配置文件**: `/config/text.ts`
- **首页**: `/app/page.tsx`
- **电商页面**: `/app/solutions/ecommerce/page.tsx`  
- **教育页面**: `/app/solutions/education/page.tsx`
- **海外工具页面**: `/app/solutions/global-tools/page.tsx`
- **组件目录**: `/components/`

通过这个配置系统，你可以轻松管理网站的所有文字内容，无需深入了解代码结构。
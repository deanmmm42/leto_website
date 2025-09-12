// 网站通用文本
export const common = {
  brandName: "LetoAI",
  tagline: "智慧正在重新定义商业",
  cta: {
    explore: "开始探索",
    learnMore: "了解更多",
    contact: "联系我们",
    demo: "预约产品演示",
    experience: "立即体验",
  },
  backToHome: "返回",
}

// 导航菜单
export const navigation = {
  menuItems: [
    { name: "首页", href: "/" },
    { 
      name: "解决方案", 
      href: "/solutions/ecommerce",
      subItems: [
        { name: "AI营销", href: "/solutions/ecommerce" },
        { name: "AI教育", href: "/solutions/education" },
        { name: "AI工具", href: "/solutions/global-tools" },
      ]
    },
    { name: "联系", href: "/#contact" },
  ],
}

// 首页文本
export const home = {
  hero: {
    carousels: [
      {
        badge: "AI数字化未来愿景",
        title1: "AI数字化",
        title2: "未来愿景",
        description: "洞察人工智能发展趋势，为企业提供前瞻性AI解决方案，引领数字化转型新浪潮，共创智能化商业未来",
      },
      {
        badge: "多元化解决方案矩阵",
        title1: "多元化解决",
        title2: "方案矩阵",
        description: "深耕三大核心业务领域，为客户提供电商营销、教育评估、海外工具的专业化AI解决方案，满足不同行业的数字化需求",
      },
      {
        badge: "海外工具产品",
        title1: "海外工具",
        title2: "产品",
        description: "基础设施级AI技术驱动，专业打造海外移动应用产品，为全球用户提供智能化工具体验",
      }
    ]
  },
}

// 解决方案概览部分
export const solutions = {
  title: "解决方案",
  description: "我们为不同行业提供专业的AI技术解决方案",
  cards: [
    {
      title: "AI营销",
      description: "AI大模型赋能，为互联网平台提供智能营销解决方案",
      href: "/solutions/ecommerce",
      buttonText: "了解更多"
    },
    {
      title: "AI教育", 
      description: "AI驱动的学生综合素养评价与个性化辅导解决方案",
      href: "/solutions/education",
      buttonText: "了解更多"
    },
    {
      title: "AI工具",
      description: "专业AI技术打造创新海外工具产品",
      href: "/solutions/global-tools", 
      buttonText: "了解更多"
    },
  ],
}

// 成就数据部分
export const achievements = {
  title: "我们的成就",
  description: "基于真实业务数据的行业领先表现",
  data: [
    {
      number: "30+",
      title: "头部企业",
      description: "平安、太平洋、人保"
    },
    {
      number: "1亿+",
      title: "年GMV", 
      description: "销售总额"
    },
    {
      number: "25项",
      title: "专利软著",
      description: "知识产权"
    },
    {
      number: "ISO9001",
      title: "ISO9001",
      description: "质量体系"
    }
  ],
}

// 我们的使命部分
export const mission = {
  title: "我们的使命",
  content: "以AI技术重塑传统行业，为电商营销、教育评估、海外工具三大领域提供智能化解决方案，让人工智能助力各行各业，为客户创造更多商业价值，让AI改变世界。",
  points: [
    {
      title: "AI技术重塑",
      description: "运用前沿AI技术，深度变革传统行业运作模式"
    },
    {
      title: "多领域覆盖",
      description: "电商营销、教育评估、海外工具三大核心应用领域"
    },
    {
      title: "智能化方案",
      description: "为各行各业提供定制化的AI智能解决方案"
    },
    {
      title: "价值创造",
      description: "助力客户实现商业价值最大化，推动行业发展"
    }
  ],
  cta: "携手共创AI未来"
}

// 联系我们部分
export const contact = {
  title: "联系我们", 
  description: "我们期待与您的合作",
  form: {
    title: "发送信息",
    name: {
      label: "姓名",
      placeholder: "请输入您的姓名",
    },
    email: {
      label: "邮箱", 
      placeholder: "请输入您的邮箱",
    },
    subject: {
      label: "主题",
      placeholder: "请输入消息主题", 
    },
    message: {
      label: "信息",
      placeholder: "请描述您的详细需求",
    },
    submit: "发送信息",
  },
  info: {
    address: {
      title: "📍 地址",
      content: "四川省成都市高新区天府二街领地环球金融中心A808",
    },
    email: {
      title: "✉️ 邮箱",
      content: "contact@letoai.tech", 
    },
    workingHours: {
      title: "🕐 工作时间",
      weekdays: "周一至周五：9:00 - 18:00",
      saturday: "周六：10:00 - 15:00", 
    },
  },
}

// 页脚文本
export const footer = {
  companyName: "四川省乐途智行科技有限公司",
  tagline: "智慧正在重新定义商业，为客户打造最前沿的AI解决方案，实现业务的创新发展。",
  quickLinks: {
    title: "快速链接",
    links: [
      { name: "首页", href: "/" },
      { name: "解决方案", href: "/solutions/ecommerce" },
      { name: "联系", href: "/#contact" },
    ],
  },
  solutions: {
    title: "解决方案",
    links: [
      { name: "AI营销", href: "/solutions/ecommerce" },
      { name: "AI教育", href: "/solutions/education" },
      { name: "AI工具", href: "/solutions/global-tools" },
    ],
  },
  resources: {
    title: "资源",
    links: [
      { name: "博客", href: "/#contact" },
      { name: "案例研究", href: "/#contact" },
      { name: "白皮书", href: "/#contact" },
      { name: "帮助中心", href: "/#contact" },
      { name: "隐私政策", href: "/#contact" },
    ],
  },
  legal: {
    copyright: "© 2025 LetoAI. 保留所有权利. | 蜀ICP备2022030426号",
    links: [
      { name: "隐私政策", href: "/#" },
      { name: "服务条款", href: "/#" },
      { name: "Cookie 政策", href: "/#" },
    ],
  },
}

// 电商解决方案页面
export const ecommerce = {
  hero: {
    badge: "电商行业AI解决方案",
    title1: "数字权益智能营销",
    title2: "驱动GMV百亿级增长",
    description: "基于私有化AI大模型，为头部企业提供安全、高效的拉新促活与用户留存方案",
    metrics: [
      { number: "300%+", label: "营销投资回报率", key: "ROI" },
      { number: "5000万+", label: "日活跃用户", key: "用户" },
      { number: "99.7%", label: "风控准确率", key: "准确率" }
    ],
    buttons: {
      primary: "免费咨询方案",
      secondary: "查看成功案例"
    }
  },
  challenges: {
    title: "电商营销面临的核心挑战",
    subtitle: "电商行业痛点",
    items: [
      "获客成本高：流量红利消失，拉新越来越难？",
      "用户不活跃：用户留存率低，如何提升生命周期价值？", 
      "营销欺诈多：\"羊毛党\"猖獗，营销预算大量流失？",
      "运营效率低：依赖人工处理，流程复杂，响应慢？"
    ]
  },
  services: {
    title: "我们的服务",
    items: [
      {
        title: "AI欺诈检测",
        description: "智能风险控制，保障交易安全",
        details: "基于机器学习算法，实时监测异常行为，智能识别欺诈风险，为平台提供全方位的安全保障。"
      },
      {
        title: "AI智能客服", 
        description: "24/7智能响应，提升服务效率",
        details: "智能对话系统，支持多轮对话和情感识别，显著提升客户服务质量，降低人力成本。"
      },
      {
        title: "AI运营策略",
        description: "数据驱动决策，优化营销效果",
        details: "基于用户画像分析，提供个性化营销策略，优化用户转化路径，提升整体运营效果。"
      },
      {
        title: "AI业务报告",
        description: "智能洞察分析，支持战略决策", 
        details: "自动生成业务分析报告，提供深度数据洞察，为管理层战略决策提供科学支撑。"
      },
      {
        title: "AI数据保护",
        description: "多重安全防护，确保信息安全",
        details: "采用先进加密技术，建立完善的数据安全体系，确保客户信息和交易数据的绝对安全。"
      }
    ]
  },
  coreProducts: {
    title: "核心产品",
    items: [
      {
        title: "数字权益营销平台",
        description: "整合全品类虚拟商品，打造一站式权益中心。",
        target: "为互联网平台提供拉新促活工具，为金融保险企业提供客户增值服务。",
        advantages: [
          "AI智能营销：基于LLM大模型的智能营销策略生成，精准匹配用户需求，提升营销转化效果",
          "海量数据支撑：10亿级私有训练数据，覆盖全行业营销场景和完整的用户画像分析", 
          "全品类商品覆盖：50+虚拟商品类型，话费、油卡、Q币等完整数字权益生态体系",
          "成熟运营体系：100+成功案例实践验证，从产品供应到运营服务的全链条专业支持"
        ]
      },
      {
        title: "AI风控系统",
        description: "基于10亿级私有数据和深度学习模型，实时识别和拦截欺诈行为。",
        target: "保障营销资金安全，提升ROI。",
        advantages: [
          "实时风险监控：7×24小时不间断智能监测，毫秒级风险识别和即时预警响应",
          "多维度深度分析：整合用户行为、交易模式、设备指纹等多维度数据进行综合风险评估",
          "自学习持续优化：AI算法持续学习最新欺诈模式，风控识别准确率不断自我提升", 
          "全面合规保障：严格符合金融监管标准要求，确保平台业务合规安全运营"
        ]
      }
    ]
  },
  cases: {
    title: "成功案例",
    items: [
      
      {
        title: "平安好车主",
        subtitle: "车主权益服务平台",
        tag: "权益服务",
        description: "为大型保险集团打造专业车主权益服务平台，提供代驾、保养、洗车、道路救援等全方位车主专享服务体系",
        metrics: [
          "服务覆盖：全国300+城市",
          "权益种类：8大类200+项生活消费权益",
          "用户满意度：98%+",
          "续保转化率：显著改善"
        ]
      }
    ]
  },
  techAdvantages: {
    title: "领先的技术优势",
    items: [
      {
        title: "10亿级私有数据",
        description: "基于多年大客户服务经验积累，沉淀超大规模行业数据资源，为客户提供深度定制化的算法模型和数据分析支持。"
      },
      {
        title: "开源LLM模型", 
        description: "采用业界领先的开源LLM大语言模型，结合深度学习算法持续优化，实现行业特定场景的快速商业化落地应用。"
      },
      {
        title: "5大AI应用",
        description: "AI欺诈检测、AI智能客服、AI运营策略、AI业务报告、AI数据保护等五大成熟AI核心应用产品。"
      },
      {
        title: "行业领先地位",
        description: "成功服务抖音、平安、美团等50+知名头部客户，在数字权益智能营销领域确立行业领导者地位。"
      }
    ]
  },
  cta: {
    title: "准备开启您的数字化转型之旅？",
    button: "立即咨询"
  }
}

// 教育解决方案页面
export const education = {
  hero: {
    badge: "教育行业AI解决方案",
    title1: "AI赋能智慧教育",
    title2: "让每个学生都能精准成长",
    description: "基于AI大模型技术，为教育机构提供综合素养评价与个性化教学双引擎系统",
    metrics: [
      { number: "300%+", label: "评价效率提升", key: "效率" },
      { number: "50%+", label: "学习效果提升", key: "效果" },
      { number: "98%+", label: "用户满意度", key: "满意度" }
    ],
    buttons: {
      primary: "立即咨询",
      secondary: "查看成功案例"
    }
  },
  challenges: {
    title: "教育管理面临的核心挑战",
    items: [
      {
        title: "如何科学衡量学生？",
        subtitle: "评价难题",
        description: "传统分数无法体现综合能力，政策要求多维度评价。"
      },
      {
        title: "如何实现因材施教？", 
        subtitle: "教学难题",
        description: "\"大班额\"教学难以兼顾个体差异，学生学习效率瓶颈。"
      }
    ]
  },
  coreProducts: {
    title: "核心产品",
    items: [
      {
        title: "综合素养评价系统",
        subtitle: "告别唯分数论，构建学生360°成长画像",
        description: "基于多维度数据采集与AI智能分析，为学生建立全面、客观、科学的综合素养评价体系，助力教育机构实现科学化教育管理。",
        features: [
          "多维度数据采集：学业成绩、课堂表现、作业完成度、参与度等全方位记录",
          "智能化分析引擎：AI算法深度解析学生行为模式，识别优势与不足",
          "可视化成长报告：直观展示学生成长轨迹，为个性化教育提供数据支撑",
          "家校协同平台：实时分享学生表现，促进家校共育合作"
        ]
      },
      {
        title: "智能题库+个性化辅导系统",
        subtitle: "AI精准赋能，让因材施教成为可能",
        description: "结合大数据与人工智能技术，为每个学生提供个性化学习路径与专属辅导方案，真正实现\"千人千面\"的教育模式。",
        features: [
          "智能推荐算法：基于学生知识掌握情况，精准推荐适配习题",
          "自适应学习路径：动态调整学习内容难度，确保最佳学习效果",
          "弱项专项突破：AI识别知识薄弱环节，提供针对性强化训练",
          "学习进度跟踪：实时监控学习状态，及时调整教学策略"
        ]
      }
    ]
  },
  userValues: {
    title: "为教育创造的核心价值",
    subtitle: "多维度价值体现",
    items: [
      {
        title: "教学效率革命性提升",
        description: "AI技术自动化处理繁重的评价统计工作，教师更专注教学创新",
        benefit: "教师工作效率提升60%+"
      },
      {
        title: "教育评价客观公正化", 
        description: "基于数据的科学评价体系，避免主观偏见，确保评价公正性",
        benefit: "评价准确性提升75%+"
      },
      {
        title: "学生个性化发展保障",
        description: "精准识别每个学生的特长与不足，提供个性化成长指导",
        benefit: "学生学习效果提升50%+"
      },
      {
        title: "教育决策科学化支撑", 
        description: "为学校管理层提供数据驱动的决策支持，优化教育资源配置",
        benefit: "管理决策效率提升80%+"
      }
    ],
    dimensions: [
      "教师层面：减轻评价负担，提升教学质量",
      "学生层面：个性化成长，全面发展", 
      "家长层面：透明化了解，参与教育",
      "学校层面：科学化管理，提升声誉"
    ]
  },
  cases: {
    title: "成功案例",
    items: [
      {
        title: "综合素养评价系统应用",
        organization: "某知名AI试点学校",
        description: "通过部署我们的综合素养评价系统，该校实现了学生评价从单一分数向多维度综合素养的转变，获得了教育主管部门的高度认可。",
        results: [
          "评价维度：从1个扩展至15个维度",
          "教师满意度：95%以上",
          "家长认可度：90%以上", 
          "评价效率：提升300%+"
        ]
      },
      {
        title: "个性化教辅系统应用",
        organization: "某知名私立学校",
        description: "采用我们的智能题库与个性化辅导系统后，该校学生的学习效果显著提升，在各类考试中表现优异。",
        results: [
          "学习效果：平均提升50%+",
          "作业完成质量：提升40%+", 
          "学生满意度：92%+",
          "教学效率：提升60%+"
        ]
      }
    ]
  },
  techAdvantages: {
    title: "技术优势",
    items: [
      {
        title: "AI算法引擎",
        description: "自研深度学习算法，精准识别学生学习模式和知识掌握情况"
      },
      {
        title: "大数据处理能力",
        description: "海量教育数据实时处理与分析，为个性化教学提供数据支撑"
      },
      {
        title: "高标准数据安全", 
        description: "严格遵循教育数据保护规范，确保学生隐私信息绝对安全"
      },
      {
        title: "灵活兼容的平台",
        description: "支持与各种教学管理系统无缝集成，降低部署成本"
      }
    ]
  },
  cta: {
    title: "准备革新您的教育管理方式？",
    button: "立即咨询"
  }
}

// 海外工具解决方案页面
export const globalTools = {
  hero: {
    badge: "海外工具AI解决方案",
    title1: "全球AI工具生态",
    title2: "让AI触手可及",
    description: "构建世界一流AI工具矩阵，连接全球AI开发者和用户，让每个人都能享受AI技术带来的便利和创新体验",
    features: [
      { icon: "globe", label: "全球化", description: "多语言支持" },
      { icon: "shield", label: "隐私安全", description: "本地化处理" },
      { icon: "cpu", label: "AI优化", description: "边缘计算" }
    ],
    buttons: {
      primary: "立即体验",
      secondary: "了解产品功能"
    }
  },
  challenges: {
    title: "海外工具开发面临的核心挑战",
    items: [
      "技术壁垒高：AI算法复杂难以移动端部署？",
      "用户体验差：全球化本地化适配困难？", 
      "隐私安全忧虑：云端AI处理数据风险大？",
      "竞争激烈：如何在红海市场脱颖而出？"
    ]
  },
  applications: {
    title: "我们的应用场景",
    description: "专注移动端AI应用开发，涵盖智能相册管理、健康监测、生产力工具等多个实用场景，为全球用户提供便捷智能的移动应用体验。",
    items: [
      {
        title: "智能相册清理",
        englishTitle: "Super Cleanup / Smart Cleaner",
        slogan: "Reclaim Your Phone's Storage, Intelligently.",
        features: [
          "AI智能识别重复、模糊、截图等低质量照片",
          "一键批量清理，释放存储空间", 
          "安全备份机制，重要照片永不丢失",
          "智能相册整理，照片分类井然有序",
          "隐私保护优先，所有处理本地完成"
        ]
      },
      {
        title: "血压/心率智能检测",
        englishTitle: "BP & Heart Rate Monitor", 
        slogan: "Your Personal Health Companion, on Your Phone.",
        features: [
          "AI算法精准测量血压和心率数据",
          "健康趋势分析，长期健康状况跟踪",
          "个性化健康建议，专业医疗指导",
          "数据同步云端，多设备无缝衔接", 
          "紧急预警功能，异常指标及时提醒"
        ],
        disclaimer: "本应用仅供健康监测参考，不可替代专业医疗诊断"
      }
    ]
  },
  techAdvantages: {
    title: "驱动创新的技术优势",
    description: "我们的核心技术实力体现在以下几个关键维度：",
    items: [
      {
        title: "移动端AI优化技术",
        description: "专门针对移动设备优化的轻量级AI算法，确保在有限硬件资源下的高效运行"
      },
      {
        title: "边缘计算架构", 
        description: "本地化AI处理能力，减少网络延迟，保护用户隐私，提升响应速度"
      },
      {
        title: "跨平台适配能力",
        description: "支持iOS、Android等多平台无缝运行，确保全球用户获得一致体验"
      },
      {
        title: "AI模型轻量化",
        description: "通过模型压缩和量化技术，在保证精度的同时大幅减少模型大小"
      },
      {
        title: "用户体验优化",
        description: "基于全球用户反馈持续优化产品体验，确保产品易用性和实用性"
      },
      {
        title: "多语言国际化",
        description: "支持50+种语言本地化，为全球用户提供母语级别的使用体验"
      }
    ]
  },
  userValues: {
    title: "为全球用户创造的核心价值",
    items: [
      {
        title: "便捷高效的AI体验",
        description: "将复杂的AI技术转化为简单易用的工具，让每个用户都能轻松享受AI带来的便利"
      },
      {
        title: "隐私安全有保障", 
        description: "坚持本地化处理原则，用户数据不上云，确保个人隐私绝对安全"
      },
      {
        title: "持续创新的产品体验",
        description: "基于用户反馈快速迭代，不断推出新功能，保持产品的领先性"
      },
      {
        title: "全球化服务能力",
        description: "多语言支持，全球用户统一高品质服务，无地域限制"
      }
    ]
  },
  developmentProcess: {
    title: "开发流程",
    steps: [
      {
        title: "市场调研",
        description: "深入调研全球用户需求，识别AI技术应用机会"
      },
      {
        title: "AI模型训练", 
        description: "基于收集的数据训练专业AI模型，优化算法效果"
      },
      {
        title: "产品开发",
        description: "将AI技术集成到用户友好的移动应用产品中"
      },
      {
        title: "全球发布",
        description: "在全球应用商店发布产品，为用户提供AI工具服务"
      }
    ]
  },
  cta: {
    title: "准备体验全球AI工具的魅力？",
    button: "立即咨询"
  }
}


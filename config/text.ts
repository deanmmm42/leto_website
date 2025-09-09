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
        { name: "电商行业", href: "/solutions/ecommerce" },
        { name: "教育行业", href: "/solutions/education" },
        { name: "海外工具", href: "/solutions/global-tools" },
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
      title: "电商行业",
      description: "AI大模型赋能，为互联网平台提供智能营销解决方案",
      href: "/solutions/ecommerce",
      buttonText: "了解更多"
    },
    {
      title: "教育行业", 
      description: "AI驱动的学生综合素养评价与个性化辅导解决方案",
      href: "/solutions/education",
      buttonText: "了解更多"
    },
    {
      title: "海外工具",
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
      number: "50+",
      title: "头部企业",
      description: "抖音、平安、美团"
    },
    {
      number: "2亿+",
      title: "年GMV", 
      description: "销售总额"
    },
    {
      number: "35项",
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
  content: "以AI技术重塑传统行业，为电商营销、教育评估、海外工具三大领域提供智能化解决方案，让人工智能助力各行各业，为客户创造更多商业价值，让AI改变世界。"
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
      { name: "电商行业", href: "/solutions/ecommerce" },
      { name: "教育行业", href: "/solutions/education" },
      { name: "海外工具", href: "/solutions/global-tools" },
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


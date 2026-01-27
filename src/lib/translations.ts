export type Language = 'zh' | 'en';

export interface Translations {
  nav: {
    home: string;
    products: string;
    about: string;
    blog: string;
    contact: string;
    getStarted: string;
  };
  home: {
    badge: string;
    badgeSubtitle: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: {
      conversion: string;
      conversionLabel: string;
      cycle: string;
      cycleLabel: string;
      savings: string;
      savingsLabel: string;
      languages: string;
      languagesLabel: string;
    };
    services: {
      title: string;
      subtitle: string;
      marketInsight: {
        title: string;
        subtitle: string;
        description: string;
        badge: string;
        link: string;
      };
      smartOutreach: {
        title: string;
        subtitle: string;
        description: string;
        badge: string;
        link: string;
      };
      dataSync: {
        title: string;
        subtitle: string;
        description: string;
        badge: string;
        link: string;
      };
      industry: {
        title: string;
        subtitle: string;
        description: string;
        badge: string;
        link: string;
      };
    };
    advantages: {
      title: string;
      ai: {
        title: string;
        description: string;
      };
      global: {
        title: string;
        description: string;
      };
      efficient: {
        title: string;
        description: string;
      };
      data: {
        title: string;
        description: string;
      };
    };
    about: {
      badge: string;
      title: string;
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
      learnMore: string;
      stats: {
        conversion: string;
        conversionLabel: string;
        cycle: string;
        cycleLabel: string;
        savings: string;
        savingsLabel: string;
        languages: string;
        languagesLabel: string;
      };
    };
    cta: {
      title: string;
      subtitle: string;
      description: string;
      industries: string;
      features: string;
      primary: string;
      secondary: string;
      location: string;
      tagline: string;
    };
  };
  footer: {
    product: string;
    company: string;
    resources: string;
    legal: string;
    links: {
      product: {
        services: string;
        marketInsight: string;
        smartOutreach: string;
        dataSync: string;
      };
      company: {
        about: string;
        blog: string;
        careers: string;
        contact: string;
      };
      resources: {
        industry: string;
        solutions: string;
        support: string;
        cases: string;
      };
      legal: {
        privacy: string;
        terms: string;
        cookies: string;
      };
    };
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  zh: {
    nav: {
      home: '首页',
      products: '解决方案',
      about: '关于我们',
      blog: '新闻动态',
      contact: '联系我们',
      getStarted: '获取方案',
    },
    home: {
      badge: '武汉 · 智慧IT服务',
      badgeSubtitle: 'Smart IT Solutions',
      title: '畅连科技',
      titleHighlight: '· 智联未来',
      subtitle: '武汉畅连科技有限公司是一家专注于智慧IT解决方案的高新技术企业，致力于为政府、企业提供网络建设、系统集成、软件开发、IT运维等一站式信息化服务',
      ctaPrimary: '了解解决方案',
      ctaSecondary: '联系我们',
      stats: {
        conversion: '50+',
        conversionLabel: '专业技术团队',
        cycle: '8年',
        cycleLabel: '行业服务经验',
        savings: '500+',
        savingsLabel: '成功案例',
        languages: '24/7',
        languagesLabel: '全天候服务',
      },
      services: {
        title: '一站式IT解决方案',
        subtitle: '以技术创新驱动数字化转型，为您的业务保驾护航',
        marketInsight: {
          title: '网络建设',
          subtitle: '企业网络基础设施',
          description: '提供企业局域网、广域网、无线网络的规划设计与建设，打造安全稳定的网络环境',
          badge: '网络',
          link: '了解详情',
        },
        smartOutreach: {
          title: '系统集成',
          subtitle: '软硬件一体化方案',
          description: '整合服务器、存储、安全设备等IT资源，构建高效协同的信息化系统',
          badge: '集成',
          link: '了解详情',
        },
        dataSync: {
          title: '云计算服务',
          subtitle: '弹性云端解决方案',
          description: '提供云迁移、云部署、混合云架构设计，助力企业轻松上云',
          badge: '云服务',
          link: '了解详情',
        },
        industry: {
          title: 'IT运维服务',
          subtitle: '专业运维保障',
          description: '7×24小时运维监控、故障响应、定期巡检，确保业务系统持续稳定运行',
          badge: '运维',
          link: '了解详情',
        },
      },
      advantages: {
        title: '以客户为中心，以技术为根本，以服务为保障',
        ai: {
          title: '技术领先',
          description: '持续跟进前沿技术，具备云计算、大数据等专业能力',
        },
        global: {
          title: '服务全面',
          description: '从咨询规划到实施运维的全生命周期服务',
        },
        efficient: {
          title: '响应迅速',
          description: '7×24小时技术支持，快速响应客户需求',
        },
        data: {
          title: '品质保障',
          description: '严格的项目管理体系，确保交付质量',
        },
      },
      about: {
        badge: '关于畅连',
        title: '专业IT服务，畅连未来',
        paragraph1: '武汉畅连科技有限公司位于武汉，是一家专业的IT服务企业，专注于为政府机关、企事业单位提供优质的信息化解决方案。',
        paragraph2: '公司秉承"专业、高效、创新、共赢"的经营理念，以客户需求为导向，以技术创新为驱动，持续为客户创造价值。',
        paragraph3: '我们拥有一支经验丰富的技术团队，具备网络工程、系统集成、软件开发、IT运维等多领域专业能力，是您值得信赖的IT合作伙伴。',
        learnMore: '了解更多',
        stats: {
          conversion: '50+',
          conversionLabel: '技术团队',
          cycle: '8年',
          cycleLabel: '专业经验',
          savings: '500+',
          savingsLabel: '成功案例',
          languages: '99.9%',
          languagesLabel: '客户满意度',
        },
      },
      cta: {
        title: '开启数字化转型之旅',
        subtitle: '让我们一起探讨如何通过专业IT服务助力您的业务发展',
        description: '',
        industries: '服务覆盖政府、教育、医疗、金融、制造等行业',
        features: '网络建设 · 系统集成 · 云计算 · IT运维 · 软件开发',
        primary: '获取解决方案',
        secondary: '了解更多',
        location: '武汉 · 智慧IT服务商',
        tagline: '专业服务 · 技术领先 · 值得信赖',
      },
    },
    footer: {
      product: '服务项目',
      company: '公司',
      resources: '资源',
      legal: '法律',
      links: {
        product: {
          services: '核心服务',
          marketInsight: '网络建设',
          smartOutreach: '系统集成',
          dataSync: '云计算服务',
        },
        company: {
          about: '关于畅连',
          blog: '新闻动态',
          careers: '加入我们',
          contact: '联系我们',
        },
        resources: {
          industry: '行业方案',
          solutions: '解决方案',
          support: '技术支持',
          cases: '成功案例',
        },
        legal: {
          privacy: '隐私政策',
          terms: '服务条款',
          cookies: 'Cookie政策',
        },
      },
      copyright: '武汉畅连科技有限公司',
    },
  },
  en: {
    nav: {
      home: 'Home',
      products: 'Solutions',
      about: 'About',
      blog: 'News',
      contact: 'Contact',
      getStarted: 'Get Started',
    },
    home: {
      badge: 'Wuhan · Smart IT Solutions',
      badgeSubtitle: '智慧IT服务',
      title: 'Changlian Tech',
      titleHighlight: '· Connect Future',
      subtitle: 'Wuhan Changlian Technology Co., Ltd. is a high-tech enterprise focusing on smart IT solutions, providing one-stop information services including network construction, system integration, software development, and IT operations.',
      ctaPrimary: 'Explore Solutions',
      ctaSecondary: 'Contact Us',
      stats: {
        conversion: '50+',
        conversionLabel: 'Professional Team',
        cycle: '8 Years',
        cycleLabel: 'Industry Experience',
        savings: '500+',
        savingsLabel: 'Successful Cases',
        languages: '24/7',
        languagesLabel: 'Service Support',
      },
      services: {
        title: 'One-Stop IT Solutions',
        subtitle: 'Driving digital transformation with technological innovation',
        marketInsight: {
          title: 'Network Construction',
          subtitle: 'Enterprise Infrastructure',
          description: 'Planning, design and construction of enterprise LAN, WAN, and wireless networks for secure and stable connectivity.',
          badge: 'Network',
          link: 'Learn More',
        },
        smartOutreach: {
          title: 'System Integration',
          subtitle: 'Hardware-Software Solutions',
          description: 'Integrating servers, storage, security devices and IT resources to build efficient collaborative systems.',
          badge: 'Integration',
          link: 'Learn More',
        },
        dataSync: {
          title: 'Cloud Services',
          subtitle: 'Elastic Cloud Solutions',
          description: 'Cloud migration, deployment, and hybrid cloud architecture design to help enterprises embrace the cloud.',
          badge: 'Cloud',
          link: 'Learn More',
        },
        industry: {
          title: 'IT Operations',
          subtitle: 'Professional Support',
          description: '24/7 monitoring, incident response, and regular inspections to ensure continuous stable operation.',
          badge: 'Operations',
          link: 'Learn More',
        },
      },
      advantages: {
        title: 'Customer-centric, Technology-driven, Service-guaranteed',
        ai: {
          title: 'Leading Technology',
          description: 'Keeping up with cutting-edge technologies including cloud computing and big data',
        },
        global: {
          title: 'Comprehensive Service',
          description: 'Full lifecycle service from consultation to implementation and operations',
        },
        efficient: {
          title: 'Rapid Response',
          description: '24/7 technical support with quick response to customer needs',
        },
        data: {
          title: 'Quality Assurance',
          description: 'Strict project management system to ensure delivery quality',
        },
      },
      about: {
        badge: 'About Changlian',
        title: 'Professional IT Services, Connecting the Future',
        paragraph1: 'Wuhan Changlian Technology Co., Ltd. is a professional IT service enterprise located in Wuhan, focusing on providing quality information solutions for government agencies and enterprises.',
        paragraph2: 'Adhering to the business philosophy of "Professional, Efficient, Innovative, Win-win", we are customer-oriented and technology-driven to continuously create value for customers.',
        paragraph3: 'We have an experienced technical team with professional capabilities in network engineering, system integration, software development, and IT operations, making us your trusted IT partner.',
        learnMore: 'Learn More',
        stats: {
          conversion: '50+',
          conversionLabel: 'Tech Team',
          cycle: '8 Years',
          cycleLabel: 'Experience',
          savings: '500+',
          savingsLabel: 'Cases',
          languages: '99.9%',
          languagesLabel: 'Satisfaction',
        },
      },
      cta: {
        title: 'Start Your Digital Transformation',
        subtitle: 'Let us explore how professional IT services can help your business grow',
        description: '',
        industries: 'Serving government, education, healthcare, finance, manufacturing and more',
        features: 'Network · Integration · Cloud · Operations · Software',
        primary: 'Get Solutions',
        secondary: 'Learn More',
        location: 'Wuhan · Smart IT Service Provider',
        tagline: 'Professional · Leading · Trustworthy',
      },
    },
    footer: {
      product: 'Services',
      company: 'Company',
      resources: 'Resources',
      legal: 'Legal',
      links: {
        product: {
          services: 'Core Services',
          marketInsight: 'Network',
          smartOutreach: 'Integration',
          dataSync: 'Cloud Services',
        },
        company: {
          about: 'About Changlian',
          blog: 'News',
          careers: 'Careers',
          contact: 'Contact',
        },
        resources: {
          industry: 'Industries',
          solutions: 'Solutions',
          support: 'Support',
          cases: 'Case Studies',
        },
        legal: {
          privacy: 'Privacy Policy',
          terms: 'Terms of Service',
          cookies: 'Cookie Policy',
        },
      },
      copyright: 'Wuhan Changlian Technology Co., Ltd.',
    },
  },
};

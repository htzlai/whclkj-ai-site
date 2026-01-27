'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';

const categoriesZh = ['全部', '网络建设', '系统集成', '云计算', '软件开发', 'IT运维'];
const categoriesEn = ['All', 'Network', 'Integration', 'Cloud', 'Software', 'Operations'];

const productsZh = [
  {
    id: 1,
    name: '企业网络规划与建设',
    description: '为企业量身定制局域网、广域网、无线网络方案，打造安全高效的网络基础设施。',
    category: '网络建设',
    features: ['网络架构设计', '交换路由部署', '无线覆盖方案', '网络安全防护'],
    icon: '🌐',
  },
  {
    id: 2,
    name: 'IT基础设施集成',
    description: '整合服务器、存储、网络、安全等IT资源，构建统一高效的信息化基础平台。',
    category: '系统集成',
    features: ['服务器部署', '存储方案', '虚拟化平台', '统一管理'],
    icon: '🔧',
  },
  {
    id: 3,
    name: '企业上云解决方案',
    description: '提供公有云、私有云、混合云架构设计与迁移服务，助力企业数字化转型。',
    category: '云计算',
    features: ['云迁移规划', '云架构设计', '多云管理', '成本优化'],
    icon: '☁️',
  },
  {
    id: 4,
    name: '企业管理软件开发',
    description: '定制开发OA办公系统、ERP管理系统、CRM客户系统等企业级应用软件。',
    category: '软件开发',
    features: ['需求分析', '定制开发', '系统集成', '持续维护'],
    icon: '💻',
  },
  {
    id: 5,
    name: 'IT运维外包服务',
    description: '提供7×24小时专业IT运维服务，包括监控、巡检、故障处理、优化建议。',
    category: 'IT运维',
    features: ['实时监控', '故障响应', '定期巡检', '性能优化'],
    icon: '🛠️',
  },
  {
    id: 6,
    name: '网络安全解决方案',
    description: '部署防火墙、入侵检测、漏洞扫描等安全设备，构建多层次网络安全防护体系。',
    category: '网络建设',
    features: ['边界防护', '入侵检测', '漏洞管理', '安全审计'],
    icon: '🛡️',
  },
  {
    id: 7,
    name: '数据中心建设',
    description: '规划设计企业级数据中心，包括机房建设、供配电、制冷、监控等配套设施。',
    category: '系统集成',
    features: ['机房规划', '供配电系统', '精密空调', '动环监控'],
    icon: '🏢',
  },
  {
    id: 8,
    name: '移动应用开发',
    description: '开发iOS、Android原生应用及跨平台应用，满足企业移动办公需求。',
    category: '软件开发',
    features: ['原生开发', '跨平台方案', 'API对接', '持续迭代'],
    icon: '📱',
  },
];

const productsEn = [
  {
    id: 1,
    name: 'Enterprise Network Solutions',
    description: 'Customized LAN, WAN, and wireless solutions for secure and efficient network infrastructure.',
    category: 'Network',
    features: ['Architecture Design', 'Switch & Router', 'Wireless Coverage', 'Security'],
    icon: '🌐',
  },
  {
    id: 2,
    name: 'IT Infrastructure Integration',
    description: 'Integrating servers, storage, network, and security resources into a unified platform.',
    category: 'Integration',
    features: ['Server Deployment', 'Storage Solutions', 'Virtualization', 'Unified Management'],
    icon: '🔧',
  },
  {
    id: 3,
    name: 'Cloud Migration Solutions',
    description: 'Public, private, and hybrid cloud architecture design and migration services.',
    category: 'Cloud',
    features: ['Migration Planning', 'Architecture Design', 'Multi-cloud', 'Cost Optimization'],
    icon: '☁️',
  },
  {
    id: 4,
    name: 'Enterprise Software Development',
    description: 'Custom development of OA, ERP, CRM and other enterprise applications.',
    category: 'Software',
    features: ['Requirements Analysis', 'Custom Development', 'Integration', 'Maintenance'],
    icon: '💻',
  },
  {
    id: 5,
    name: 'IT Operations Outsourcing',
    description: '24/7 professional IT operations including monitoring, inspection, and incident handling.',
    category: 'Operations',
    features: ['Real-time Monitoring', 'Incident Response', 'Regular Inspection', 'Optimization'],
    icon: '🛠️',
  },
  {
    id: 6,
    name: 'Network Security Solutions',
    description: 'Deploy firewalls, IDS, vulnerability scanning for multi-layer security protection.',
    category: 'Network',
    features: ['Perimeter Defense', 'Intrusion Detection', 'Vulnerability Management', 'Audit'],
    icon: '🛡️',
  },
  {
    id: 7,
    name: 'Data Center Construction',
    description: 'Enterprise data center planning including facility, power, cooling, and monitoring.',
    category: 'Integration',
    features: ['Facility Planning', 'Power System', 'Precision Cooling', 'Monitoring'],
    icon: '🏢',
  },
  {
    id: 8,
    name: 'Mobile App Development',
    description: 'iOS, Android native and cross-platform applications for enterprise mobility.',
    category: 'Software',
    features: ['Native Development', 'Cross-platform', 'API Integration', 'Iteration'],
    icon: '📱',
  },
];

export default function ProductsPage() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(language === 'zh' ? '全部' : 'All');
  
  const categories = language === 'zh' ? categoriesZh : categoriesEn;
  const products = language === 'zh' ? productsZh : productsEn;
  const allLabel = language === 'zh' ? '全部' : 'All';

  const filteredProducts = activeCategory === allLabel
    ? products
    : products.filter(p => p.category === activeCategory);

  const texts = {
    zh: {
      badge: '解决方案',
      title: '智慧IT解决方案',
      subtitle: '以技术创新驱动数字化转型，为政府、教育、医疗、金融、制造等行业提供专业IT服务',
      learnMore: '了解详情',
      customTitle: '需要定制化解决方案？',
      customDesc: '我们的技术专家将深入了解您的需求，为您量身定制最优解决方案。',
      customBtn: '免费咨询',
    },
    en: {
      badge: 'Solutions',
      title: 'Smart IT Solutions',
      subtitle: 'Driving digital transformation with innovation for government, education, healthcare, finance, and manufacturing.',
      learnMore: 'Learn More',
      customTitle: 'Need a Custom Solution?',
      customDesc: 'Our technical experts will understand your needs and create the optimal solution for you.',
      customBtn: 'Free Consultation',
    }
  };
  
  const t = texts[language];

  return (
    <div className="min-h-screen px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <Badge variant="secondary" size="md" className="mb-4">
            {t.badge}
          </Badge>
          <h1 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            {t.title}
          </h1>
          <p className="mx-auto max-w-2xl text-[var(--color-text-muted)]">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                rounded-full px-5 py-2 text-sm font-medium transition-all
                ${activeCategory === category
                  ? 'bg-gradient-primary text-white shadow-lg'
                  : 'bg-[var(--color-bg-card)] text-[var(--color-text-muted)] hover:text-white hover:bg-[var(--color-bg-card-hover)]'
                }
              `}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filteredProducts.map((product) => (
              <Card 
                key={product.id} 
                variant="default"
                className="relative overflow-hidden group"
              >
                <CardHeader>
                  <div className="mb-3 text-4xl transition-transform group-hover:scale-110">{product.icon}</div>
                  <Badge variant="secondary" size="sm" className="mb-3 w-fit">
                    {product.category}
                  </Badge>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription className="text-sm">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                        <svg className="h-4 w-4 text-[var(--color-primary-light)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" className="w-full">
                    {t.learnMore}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card variant="gradient" className="text-center">
            <div className="py-8">
              <h2 className="mb-4 text-2xl font-bold text-white">
                {t.customTitle}
              </h2>
              <p className="mb-6 text-[var(--color-text-muted)]">
                {t.customDesc}
              </p>
              <Button size="lg">{t.customBtn}</Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

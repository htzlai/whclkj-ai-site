'use client';

import { motion } from 'framer-motion';
import Card, { CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { useLanguage } from '@/contexts/LanguageContext';

const timelineZh = [
  {
    year: '2016',
    title: '公司成立',
    description: '重庆硕之达科技有限公司在重庆正式成立，开启IT服务创业之路。',
  },
  {
    year: '2018',
    title: '业务拓展',
    description: '完成首个大型系统集成项目，团队扩展至20人，业务覆盖网络、系统、运维。',
  },
  {
    year: '2020',
    title: '云服务升级',
    description: '成立云计算服务部门，获得多家云厂商合作伙伴认证，助力企业上云。',
  },
  {
    year: '2022',
    title: '规模壮大',
    description: '累计服务客户超300家，团队扩展至40人，荣获多项行业资质认证。',
  },
  {
    year: '2024',
    title: '智慧升级',
    description: '推出智慧IT整体解决方案，服务客户突破500家，技术团队超50人。',
  },
];

const timelineEn = [
  {
    year: '2016',
    title: 'Company Founded',
    description: 'Wuhan Changlian Technology officially established, starting the IT service journey.',
  },
  {
    year: '2018',
    title: 'Business Expansion',
    description: 'Completed first large-scale integration project, team grew to 20, covering network, system, and operations.',
  },
  {
    year: '2020',
    title: 'Cloud Service Upgrade',
    description: 'Established cloud computing department, obtained certifications from major cloud vendors.',
  },
  {
    year: '2022',
    title: 'Scale Growth',
    description: 'Served over 300 customers, team expanded to 40, obtained multiple industry certifications.',
  },
  {
    year: '2024',
    title: 'Smart Upgrade',
    description: 'Launched smart IT solutions, served over 500 customers, tech team exceeded 50.',
  },
];

const valuesZh = [
  {
    icon: '🎯',
    title: '专业',
    description: '深耕IT领域，持续积累技术能力，为客户提供专业可靠的服务。',
  },
  {
    icon: '⚡',
    title: '高效',
    description: '快速响应客户需求，高效执行项目交付，节省客户时间成本。',
  },
  {
    icon: '💡',
    title: '创新',
    description: '紧跟技术发展趋势，持续创新服务模式，引领行业发展方向。',
  },
  {
    icon: '🤝',
    title: '共赢',
    description: '与客户建立长期合作关系，实现客户、员工、企业三方共赢。',
  },
];

const valuesEn = [
  {
    icon: '🎯',
    title: 'Professional',
    description: 'Deep expertise in IT, continuously accumulating technical capabilities for reliable services.',
  },
  {
    icon: '⚡',
    title: 'Efficient',
    description: 'Rapid response to customer needs, efficient project delivery, saving customer time.',
  },
  {
    icon: '💡',
    title: 'Innovative',
    description: 'Following technology trends, continuously innovating service models, leading industry development.',
  },
  {
    icon: '🤝',
    title: 'Win-Win',
    description: 'Building long-term partnerships with customers for mutual success.',
  },
];

const statsZh = [
  { value: '50+', label: '技术团队' },
  { value: '500+', label: '服务客户' },
  { value: '8年', label: '行业经验' },
  { value: '99.9%', label: '客户满意度' },
];

const statsEn = [
  { value: '50+', label: 'Tech Team' },
  { value: '500+', label: 'Customers' },
  { value: '8 Yrs', label: 'Experience' },
  { value: '99.9%', label: 'Satisfaction' },
];

export default function AboutPage() {
  const { language } = useLanguage();
  
  const timeline = language === 'zh' ? timelineZh : timelineEn;
  const values = language === 'zh' ? valuesZh : valuesEn;
  const stats = language === 'zh' ? statsZh : statsEn;

  const texts = {
    zh: {
      badge: '关于我们',
      title: '畅连科技，智联未来',
      subtitle: '重庆硕之达科技有限公司是一家专业的IT服务企业，专注于为政府机关、企事业单位提供优质的信息化解决方案。',
      missionTitle: '我们的使命',
      mission: '以客户为中心，以技术为根本，以服务为保障。致力于成为中部地区最具影响力的IT服务商，帮助每一位客户实现数字化转型，畅连智慧未来。',
      journeyTitle: '发展历程',
      valuesTitle: '核心价值观',
      statsTitle: '数据见证实力',
    },
    en: {
      badge: 'About Us',
      title: 'Changlian Tech, Connect the Future',
      subtitle: 'Wuhan Changlian Technology is a professional IT service enterprise, focusing on providing quality information solutions for government and enterprises.',
      missionTitle: 'Our Mission',
      mission: 'Customer-centric, technology-driven, service-guaranteed. Committed to becoming the most influential IT service provider in central China, helping every customer achieve digital transformation.',
      journeyTitle: 'Our Journey',
      valuesTitle: 'Core Values',
      statsTitle: 'Numbers Tell Our Story',
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
          className="mb-16 text-center"
        >
          <Badge variant="secondary" size="md" className="mb-4">
            {t.badge}
          </Badge>
          <h1 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            {t.title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[var(--color-text-muted)]">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent>
                  <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-[var(--color-text-muted)]">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <Card variant="gradient" glow className="p-8 lg:p-12">
            <div className="text-center">
              <h2 className="mb-4 text-2xl font-bold text-white lg:text-3xl">
                {t.missionTitle}
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-[var(--color-text-muted)]">
                {t.mission}
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="mb-12 text-center text-2xl font-bold text-white lg:text-3xl">
            {t.journeyTitle}
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-secondary)] md:left-1/2 md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                    <Card hover={false}>
                      <CardContent>
                        <Badge variant="primary" className="mb-2">{item.year}</Badge>
                        <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                        <p className="text-sm text-[var(--color-text-muted)]">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary md:left-1/2 md:-translate-x-1/2">
                    <div className="h-3 w-3 rounded-full bg-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-12 text-center text-2xl font-bold text-white lg:text-3xl">
            {t.valuesTitle}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="group">
                <CardContent className="text-center">
                  <div className="mb-4 text-5xl transition-transform group-hover:scale-110">{value.icon}</div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{value.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

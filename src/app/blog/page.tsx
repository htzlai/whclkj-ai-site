'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Input from '@/components/ui/Input';
import { useLanguage } from '@/contexts/LanguageContext';

const categoriesZh = ['全部', '公司动态', '技术分享', '行业资讯', '项目案例'];
const categoriesEn = ['All', 'Company', 'Technology', 'Industry', 'Cases'];

const blogPostsZh = [
  {
    id: 1,
    title: '畅连科技荣获年度优秀IT服务商称号',
    excerpt: '凭借专业的技术服务和优质的项目交付，我司在年度IT服务商评选中脱颖而出。',
    category: '公司动态',
    author: '市场部',
    date: '2024年1月',
    featured: true,
  },
  {
    id: 2,
    title: '某大型企业数据中心项目成功交付',
    excerpt: '为客户设计并实施的新一代数据中心项目正式投入运营，获得客户高度认可。',
    category: '项目案例',
    author: '项目部',
    date: '2024年1月',
    featured: true,
  },
  {
    id: 3,
    title: '企业上云最佳实践指南',
    excerpt: '分享企业云迁移的关键步骤、常见问题及解决方案，助力企业顺利上云。',
    category: '技术分享',
    author: '云服务团队',
    date: '2023年12月',
    featured: false,
  },
  {
    id: 4,
    title: '2024年IT基础设施发展趋势',
    excerpt: '解读云计算、边缘计算、零信任安全等技术趋势对企业IT架构的影响。',
    category: '行业资讯',
    author: '技术研究部',
    date: '2023年12月',
    featured: false,
  },
  {
    id: 5,
    title: '某政务系统网络升级改造项目',
    excerpt: '完成政务中心核心网络升级，实现万兆骨干、千兆桌面的高速网络架构。',
    category: '项目案例',
    author: '网络工程部',
    date: '2023年11月',
    featured: false,
  },
  {
    id: 6,
    title: 'IT运维自动化实践分享',
    excerpt: '介绍如何通过自动化工具提升运维效率，降低人为错误，保障系统稳定运行。',
    category: '技术分享',
    author: '运维团队',
    date: '2023年11月',
    featured: false,
  },
];

const blogPostsEn = [
  {
    id: 1,
    title: 'Changlian Tech Awarded Excellent IT Service Provider',
    excerpt: 'With professional technical services and quality project delivery, our company stood out in the annual IT service provider selection.',
    category: 'Company',
    author: 'Marketing',
    date: 'Jan 2024',
    featured: true,
  },
  {
    id: 2,
    title: 'Large Enterprise Data Center Project Delivered',
    excerpt: 'The next-generation data center project designed and implemented for the customer is now in operation, highly recognized by the client.',
    category: 'Cases',
    author: 'Project Team',
    date: 'Jan 2024',
    featured: true,
  },
  {
    id: 3,
    title: 'Enterprise Cloud Migration Best Practices',
    excerpt: 'Sharing key steps, common issues and solutions for enterprise cloud migration to help enterprises embrace the cloud.',
    category: 'Technology',
    author: 'Cloud Team',
    date: 'Dec 2023',
    featured: false,
  },
  {
    id: 4,
    title: '2024 IT Infrastructure Trends',
    excerpt: 'Interpreting the impact of cloud computing, edge computing, zero trust security on enterprise IT architecture.',
    category: 'Industry',
    author: 'Research',
    date: 'Dec 2023',
    featured: false,
  },
  {
    id: 5,
    title: 'Government System Network Upgrade Project',
    excerpt: 'Completed government center core network upgrade, achieving 10G backbone and gigabit desktop high-speed architecture.',
    category: 'Cases',
    author: 'Network Team',
    date: 'Nov 2023',
    featured: false,
  },
  {
    id: 6,
    title: 'IT Operations Automation Practices',
    excerpt: 'How to improve operations efficiency with automation tools, reduce human errors, and ensure system stability.',
    category: 'Technology',
    author: 'Ops Team',
    date: 'Nov 2023',
    featured: false,
  },
];

export default function BlogPage() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(language === 'zh' ? '全部' : 'All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = language === 'zh' ? categoriesZh : categoriesEn;
  const blogPosts = language === 'zh' ? blogPostsZh : blogPostsEn;
  const allLabel = language === 'zh' ? '全部' : 'All';

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === allLabel || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const texts = {
    zh: {
      badge: '新闻动态',
      title: '新闻与资讯',
      subtitle: '了解畅连科技的最新动态、技术分享和行业洞察',
      featured: '推荐阅读',
      allArticles: '全部文章',
      noResults: '未找到相关文章',
      noResultsDesc: '请尝试调整搜索条件或筛选类别',
      search: '搜索文章...',
    },
    en: {
      badge: 'News',
      title: 'News & Updates',
      subtitle: 'Stay updated with Changlian Tech\'s latest news, technical insights, and industry trends',
      featured: 'Featured',
      allArticles: 'All Articles',
      noResults: 'No articles found',
      noResultsDesc: 'Try adjusting your search or filter to find what you\'re looking for.',
      search: 'Search articles...',
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

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`
                    rounded-full px-4 py-2 text-sm font-medium transition-all
                    ${activeCategory === category
                      ? 'bg-gradient-primary text-white'
                      : 'bg-[var(--color-bg-card)] text-[var(--color-text-muted)] hover:text-white'
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="w-full md:w-64">
              <Input
                placeholder={t.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="mb-6 text-xl font-semibold text-white">{t.featured}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredPosts.map((post) => (
                <Card key={post.id} variant="gradient" glow className="group cursor-pointer">
                  <CardHeader>
                    <div className="mb-3 flex items-center gap-2">
                      <Badge variant="primary">{post.category}</Badge>
                    </div>
                    <CardTitle className="text-xl transition-colors group-hover:text-[var(--color-accent-light)]">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-[var(--color-text-dim)]">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Posts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="mb-6 text-xl font-semibold text-white">
            {activeCategory === allLabel ? t.allArticles : activeCategory}
          </h2>
          
          {filteredPosts.length === 0 ? (
            <Card className="py-12 text-center">
              <CardContent>
                <div className="mb-4 text-4xl">🔍</div>
                <h3 className="mb-2 text-lg font-semibold text-white">{t.noResults}</h3>
                <p className="text-[var(--color-text-muted)]">
                  {t.noResultsDesc}
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post) => (
                <Card key={post.id} className="group cursor-pointer">
                  <CardHeader>
                    <Badge variant="secondary" className="mb-3 w-fit">{post.category}</Badge>
                    <CardTitle className="transition-colors group-hover:text-[var(--color-accent-light)]">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex items-center justify-between">
                    <span className="text-sm text-[var(--color-text-dim)]">{post.date}</span>
                    <span className="text-sm text-[var(--color-text-dim)]">{post.author}</span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

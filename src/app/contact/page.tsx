'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Card, { CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import { useLanguage } from '@/contexts/LanguageContext';

const contactInfoZh = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: '电子邮箱',
    value: 'contact@whclkj.com',
    href: 'mailto:contact@whclkj.com',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: '联系电话',
    value: '027-XXXXXXXX',
    href: 'tel:027XXXXXXXX',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: '公司地址',
    value: '武汉市洪山区光谷软件园',
    href: '#',
  },
];

const contactInfoEn = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'contact@whclkj.com',
    href: 'mailto:contact@whclkj.com',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '027-XXXXXXXX',
    href: 'tel:027XXXXXXXX',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'Optics Valley Software Park, Hongshan District, Wuhan',
    href: '#',
  },
];

const faqsZh = [
  {
    question: '你们提供哪些IT服务？',
    answer: '我们提供网络建设、系统集成、云计算服务、软件开发、IT运维外包等全方位IT解决方案。',
  },
  {
    question: '服务响应时间是多久？',
    answer: '我们提供7×24小时技术支持，紧急故障15分钟内响应，一般问题2小时内响应。',
  },
  {
    question: '是否提供免费咨询？',
    answer: '是的，我们提供免费的IT咨询服务，帮助您了解需求并制定最优解决方案。',
  },
];

const faqsEn = [
  {
    question: 'What IT services do you provide?',
    answer: 'We provide network construction, system integration, cloud computing, software development, IT operations outsourcing and other comprehensive IT solutions.',
  },
  {
    question: 'What is your response time?',
    answer: 'We provide 24/7 technical support, urgent issues within 15 minutes, general issues within 2 hours.',
  },
  {
    question: 'Do you offer free consultation?',
    answer: 'Yes, we provide free IT consultation services to help you understand your needs and develop optimal solutions.',
  },
];

export default function ContactPage() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = language === 'zh' ? contactInfoZh : contactInfoEn;
  const faqs = language === 'zh' ? faqsZh : faqsEn;

  const texts = {
    zh: {
      badge: '联系我们',
      title: '与我们取得联系',
      subtitle: '无论您有任何IT需求或合作意向，都欢迎随时联系我们，我们将尽快回复。',
      contactInfo: '联系方式',
      faq: '常见问题',
      messageSent: '消息已发送！',
      thankYou: '感谢您的咨询，我们会尽快与您联系。',
      sendAnother: '发送新消息',
      name: '姓名',
      namePlaceholder: '请输入姓名',
      email: '邮箱',
      emailPlaceholder: '请输入邮箱',
      company: '公司',
      companyPlaceholder: '请输入公司名称',
      subject: '咨询主题',
      subjectPlaceholder: '请选择咨询主题',
      message: '详细描述',
      messagePlaceholder: '请详细描述您的需求...',
      send: '提交咨询',
      followUs: '关注我们',
    },
    en: {
      badge: 'Contact',
      title: 'Get in Touch',
      subtitle: 'Whether you have any IT needs or cooperation intentions, please feel free to contact us.',
      contactInfo: 'Contact Information',
      faq: 'Frequently Asked Questions',
      messageSent: 'Message Sent!',
      thankYou: 'Thank you for your inquiry. We will contact you soon.',
      sendAnother: 'Send Another Message',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      company: 'Company',
      companyPlaceholder: 'Your company',
      subject: 'Subject',
      subjectPlaceholder: 'Select subject',
      message: 'Message',
      messagePlaceholder: 'Describe your needs in detail...',
      send: 'Submit Inquiry',
      followUs: 'Follow Us',
    }
  };

  const t = texts[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardContent>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="mb-4 text-5xl">✅</div>
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      {t.messageSent}
                    </h3>
                    <p className="text-[var(--color-text-muted)]">
                      {t.thankYou}
                    </p>
                    <Button 
                      className="mt-6" 
                      variant="secondary"
                      onClick={() => setSubmitted(false)}
                    >
                      {t.sendAnother}
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <Input
                        label={t.name}
                        name="name"
                        placeholder={t.namePlaceholder}
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <Input
                        label={t.email}
                        name="email"
                        type="email"
                        placeholder={t.emailPlaceholder}
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      <Input
                        label={t.company}
                        name="company"
                        placeholder={t.companyPlaceholder}
                        value={formData.company}
                        onChange={handleChange}
                      />
                      <Input
                        label={t.subject}
                        name="subject"
                        placeholder={t.subjectPlaceholder}
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Textarea
                      label={t.message}
                      name="message"
                      placeholder={t.messagePlaceholder}
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      isLoading={isSubmitting}
                    >
                      {t.send}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <Card>
              <CardContent>
                <h3 className="mb-6 text-lg font-semibold text-white">
                  {t.contactInfo}
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-white/5"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-white">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-[var(--color-text-dim)]">{info.label}</p>
                        <p className="font-medium text-white">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardContent>
                <h3 className="mb-6 text-lg font-semibold text-white">
                  {t.faq}
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-[var(--color-border)] pb-4 last:border-0 last:pb-0">
                      <h4 className="mb-2 font-medium text-white">{faq.question}</h4>
                      <p className="text-sm text-[var(--color-text-muted)]">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social */}
            <Card className="bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10">
              <CardContent className="text-center">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {t.followUs}
                </h3>
                <div className="flex justify-center gap-4">
                  {['微信', '微博', '抖音'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="flex h-10 items-center justify-center rounded-full bg-white/10 px-4 text-sm text-white transition-colors hover:bg-white/20"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

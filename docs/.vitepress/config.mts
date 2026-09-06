import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'th-TH',
  title: 'Microsoft Agent-a-thon 2026',
  titleTemplate: ':title | Microsoft Agent-a-thon 2026',
  description: 'คู่มือกิจกรรมและแบบฝึกหัดสำหรับผู้เข้าร่วม Microsoft Agent-a-thon 2026',
  base: '/ms-agent-a-thon-2026/',
  cleanUrls: true,
  ignoreDeadLinks: [/^\/files\/.*\.(?:docx|xlsx|pdf|pptx|zip)$/],
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#0f6cbd' }],
  ],
  themeConfig: {
    siteTitle: 'Agent-a-thon 2026',
    nav: [
      { text: 'หน้าแรก', link: '/' },
      { text: 'Frontier', link: '/01-frontier-transformation/' },
      { text: 'Microsoft Agents', link: '/02-get-started-with-agents/' },
      { text: 'Agent Builder', link: '/03-agent-builder/' },
      { text: 'Hackathon', link: '/04-hackathon-kickoff/' },
    ],
    sidebar: {
      '/01-frontier-transformation/': [
        {
          text: 'Frontier Transformation',
          items: [
            { text: 'ภาพรวม', link: '/01-frontier-transformation/' },
            { text: 'EX-01 Work IQ', link: '/01-frontier-transformation/ex-01-work-iq' },
            { text: 'EX-02 Memory', link: '/01-frontier-transformation/ex-02-memory' },
            { text: 'EX-03 Excel managed Skill', link: '/01-frontier-transformation/ex-03-excel-managed-skill' },
            { text: 'EX-04 Researcher Critique and Council', link: '/01-frontier-transformation/ex-04-researcher-critique-council' },
          ],
        },
      ],
      '/02-get-started-with-agents/': [
        {
          text: 'Get Started with Agents',
          items: [
            { text: 'ภาพรวม', link: '/02-get-started-with-agents/' },
            { text: 'EX-05 Researcher Work and Web', link: '/02-get-started-with-agents/ex-05-researcher-work-and-web' },
            { text: 'EX-06 Analyst', link: '/02-get-started-with-agents/ex-06-analyst' },
          ],
        },
      ],
      '/03-agent-builder/': [
        {
          text: 'Agent Builder',
          items: [
            { text: 'ภาพรวม', link: '/03-agent-builder/' },
            { text: 'EX-07 Busy Day Guide', link: '/03-agent-builder/ex-07-busy-day-guide' },
            { text: 'EX-08 Focus Time Campaign Kit', link: '/03-agent-builder/ex-08-focus-time-campaign-kit' },
          ],
        },
      ],
      '/04-hackathon-kickoff/': [
        {
          text: 'Hackathon Kick-off',
          items: [
            { text: 'ภาพรวม', link: '/04-hackathon-kickoff/' },
            { text: 'Hackathon Instructions', link: '/04-hackathon-kickoff/hackathon-instructions' },
          ],
        },
      ],
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'ค้นหา',
            buttonAriaLabel: 'ค้นหาในคู่มือ',
          },
          modal: {
            noResultsText: 'ไม่พบผลลัพธ์',
            resetButtonTitle: 'ล้างคำค้นหา',
            footer: {
              selectText: 'เลือก',
              navigateText: 'เลื่อน',
              closeText: 'ปิด',
            },
          },
        },
      },
    },
    outline: {
      level: [2, 3],
      label: 'ในหน้านี้',
    },
    docFooter: {
      prev: false,
      next: false,
    },
    lastUpdated: {
      text: 'อัปเดตล่าสุด',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short',
      },
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/teerasej/ms-agent-a-thon-2026' },
    ],
    footer: {
      message: 'Participant learning materials for Microsoft Agent-a-thon 2026',
    },
  },
})

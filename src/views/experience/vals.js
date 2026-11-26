// Page data and view state, ported from the design mockup.
export const initialState = {};

export function computeVals() {
const SH_L = !!(this.state && this.state.light);
const SHELL = { rootCls: SH_L ? 'theme light' : 'theme', isLight: SH_L, isDark: !SH_L, themeLabel: SH_L ? 'Switch to dark mode' : 'Switch to light mode', toggleTheme: () => this.setState({ light: !SH_L }),
menuOpen: !!(this.state && this.state.menu), menuExp: (this.state && this.state.menu) ? 'true' : 'false', openMenu: () => this.setState({ menu: true }), closeMenu: () => this.setState({ menu: false }),
tab_home: 'false', tab_work: 'false', tab_ai: 'false', tab_contact: 'false', go_home: () => {}, go_work: () => {}, go_ai: () => {}, go_contact: () => {} };

const tc = ['#8B8CFF', '#38BDF8', '#F5C451', '#4ADE80', '#F472B6', '#FB923C', '#A78BFA', '#22D3EE', '#FACC15', '#34D399', '#F87171', '#C084FC'];
return { ...SHELL,
mix: [
{ t: 'Product companies', i: '◆', c: '#8B8CFF', f: '6', bg: 'rgba(139,140,255,0.12)', border: '#2E2E4A', sub: 'IN-HOUSE · LONG-TERM OWNERSHIP', d: 'Own a product for years: roadmap, scale, performance and the team around it.', items: [{ n: 'University Living', w: '5 live products · 2024–now' }, { n: 'GuruQ · M & J Edtech', w: 'EdTech marketplace · Team Lead' }] },
{ t: 'Client & agency delivery', i: '◎', c: '#FB923C', f: '5', bg: 'rgba(251,146,60,0.12)', border: '#3A2A1C', sub: 'DEADLINES · STAKEHOLDERS · SCOPE', d: 'Turn a brief into a live product on time, for clients across industries.', items: [{ n: 'OOFFRR · Primo Group', w: 'Local-deals platform · team of 8' }, { n: 'EssayCorp · NeedAssignmentHelp', w: 'AMICI · design + dev' }, { n: 'HPL Additives · 8OM client sites', w: 'Corporate + agency work' }] },
{ t: 'My own AI products', i: '✦', c: '#F5C451', f: '3', bg: 'rgba(245,196,81,0.12)', border: '#3A3115', sub: 'BUILT, SHIPPED, MAINTAINED', d: 'Ideas I take from zero to working software, with AI at the core.', items: [{ n: 'Hardware Store POS', w: 'Claude vision · real shop' }, { n: 'ContentGuard AI', w: 'Multi-provider LLM' }, { n: 'Offline research agent', w: 'LangChain + Llama 3' }] }
],
orbit: tc.map((c, i) => { const a = (i / tc.length) * Math.PI * 2; return { c, x: Math.round(Math.cos(a) * 130) + 'px', y: Math.round(Math.sin(a) * 130) + 'px' }; }),
jobs: [
{ c: '#8B8CFF', when: 'Oct 2024 – Present', where: 'Noida', role: 'Senior Software Engineer', co: 'University Living · AI & full stack', b: ['Own 5 live platforms: University Living, Uninist, StudentTenant, UL Blog and Uninist Blog', 'Shipped 55+ Jira tickets in 18 weeks, keep PageSpeed at 95+, and own technical SEO', 'Leading the StudentTenant v2 rewrite: 35 modules, a parity harness and Docker', 'Built the frontend of Livi, University Living\'s AI accommodation chatbot (Claude and GPT, with RAG over property data): chat widget, launcher and guided flows', 'Integrated LeadSquared CRM, plus WhatsApp messaging and emailers with GupShup, DoubleTick and Node.js', 'Won the Stellar Award (Jul–Sep 2025) and the Rising Star Award (Apr 2025)'], s: ['Next.js', 'Node.js', 'TypeScript', 'LLM chat UI', 'MongoDB', 'MySQL', 'AWS', 'Docker'] },
{ c: '#38BDF8', when: '2022 – 2024', where: 'Faridabad', role: 'Senior Full Stack Developer', co: 'HPL Security', b: ['Designed, built and launched the HPL Additives platform for a brand that is 50+ years old', 'Owned it from requirements to AWS deployment and post-launch'], s: ['Next.js', 'Tailwind', 'MySQL', 'AWS'] },
{ c: '#F5C451', when: 'Nov 2019 – 2022', where: 'Faridabad', role: 'Senior Full Stack Developer / UI Team Lead', co: 'M & J Edtech', b: ['Led a team of 12+ (engineers, graphic designers, SEO), from client meetings and task assignment to go-live', 'Ran sprints, delegation, code reviews and mentoring', 'Built React component libraries adopted product-wide', 'Delivered GuruQ, a tutoring marketplace, on the MERN stack and AWS'], s: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'AWS', 'Jira'] },
{ c: '#F5C451', when: 'Jan 2018 – Nov 2019', where: 'Dwarka, Delhi', role: 'Sr. Software Developer', co: 'Primo Group', b: ['Built OOFFRR, a Magicpin-style local-deals platform, in a team of 8: Angular frontend, CodeIgniter (PHP) backend, MySQL and REST APIs', 'Shaped the application architecture, refactored code into reusable components, and reviewed code for the team'], s: ['Angular', 'CodeIgniter', 'PHP', 'MySQL', 'REST APIs'] },
{ c: '#FDBA74', when: 'Sep 2017 – Jan 2018', where: 'Kalkaji, Delhi', role: 'Web Developer', co: '8OM Internet', b: ['Built and shipped client websites'], s: ['PHP', 'JavaScript', 'jQuery'] },
{ c: '#FBBF77', when: 'Feb 2016 – Sep 2017', where: 'Dwarka Mor, Delhi', role: 'Web Developer', co: 'AMICI Global Solutions', b: ['EssayCorp (2016): owned all design and development modules in a team of 3', 'NeedAssignmentHelp (2016–17): owned design and development, including quote and lead-capture flows', 'Client sites in PHP/MySQL and WordPress, plus a custom CMS'], s: ['PHP', 'jQuery', 'AJAX', 'Bootstrap', 'WordPress'] }
],
roles: [
{ t: 'Engineers', c: '#C7C8FF', bg: 'rgba(139,140,255,0.12)' },
{ t: 'Graphic designers', c: '#F9A8D4', bg: 'rgba(244,114,182,0.10)' },
{ t: 'SEO team', c: '#86EFAC', bg: 'rgba(74,222,128,0.10)' }
],
flow: [
{ n: '01', t: 'Client meeting', s: 'Requirements and expectations', c: '#F5C451', d: '.1s' },
{ n: '02', t: 'Scope & tasks', s: 'Broken into Jira tickets', c: '#C7C8FF', d: '.22s' },
{ n: '03', t: 'Assign', s: 'Right person, right task', c: '#C7C8FF', d: '.34s' },
{ n: '04', t: 'Design', s: 'With graphic designers', c: '#F9A8D4', d: '.46s' },
{ n: '05', t: 'Build & review', s: 'Engineers + PR reviews', c: '#7DD3FC', d: '.58s' },
{ n: '06', t: 'SEO check', s: 'With the SEO team', c: '#86EFAC', d: '.7s' },
{ n: '07', t: 'Go live', s: 'Release and client sign-off', c: '#4ADE80', d: '.82s' }
],
lead: [
{ n: '01 · PLAN', t: 'Sprints that land', d: 'I ran sprint planning and task delegation in Jira so 12+ people knew what to ship and why.' },
{ n: '02 · REVIEW', t: 'Code reviews as teaching', d: 'Every PR was a chance to raise the bar on quality, consistency and performance.' },
{ n: '03 · BUILD', t: 'Shared foundations', d: 'I built React component libraries and patterns the whole product adopted, so features shipped faster.' },
{ n: '04 · GROW', t: 'Mentoring', d: 'I coached developers through architecture and delivery while still shipping myself.' }
],
integ: [
{ t: 'LeadSquared CRM', k: 'LEADS', c: '#4ADE80', glow: 'rgba(74,222,128,0.10)', d: 'I integrated LeadSquared so every website enquiry is captured straight into the sales CRM and reaches a counsellor.', tools: 'Lead Capture API · Node.js' },
{ t: 'GupShup & DoubleTick', k: 'WHATSAPP', c: '#4ADE80', glow: 'rgba(74,222,128,0.10)', d: 'WhatsApp and transactional messaging for booking confirmations, lead nurturing and notifications, wired up with Node.js.', tools: 'Node.js · templates · webhooks' },
{ t: 'Custom emailers', k: 'EMAIL', c: '#38BDF8', glow: 'rgba(56,189,248,0.10)', d: 'Booking, payment, enquiry and book-now emails, plus a trigger right after lead submission.', tools: 'HTML email · Node.js' },
{ t: 'Statsig, Meta Pixel & Zoho SalesIQ', k: 'GROWTH', c: '#F472B6', glow: 'rgba(244,114,182,0.10)', d: 'Experiments, conversion tracking and live chat on the marketing sites.', tools: 'Next.js · analytics' }
],
live: [
{ t: 'University Living', h: 'universityliving.com', u: 'https://www.universityliving.com/' },
{ t: 'UL Blog', h: 'universityliving.com/blog', u: 'https://www.universityliving.com/blog/' },
{ t: 'Uninist', h: 'uninist.com', u: 'https://uninist.com/' },
{ t: 'Uninist Blog', h: 'uninist.com/blog', u: 'https://uninist.com/blog' },
{ t: 'ULInfinity', h: 'ulinfinity.com', u: 'https://ulinfinity.com/' },
{ t: 'StudentTenant', h: 'studenttenant.com', u: 'https://www.studenttenant.com/' },
{ t: 'HPL Additives', h: 'hpladditives.com', u: 'https://hpladditives.com/' }
]
};
}

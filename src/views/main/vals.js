// Page data and view state, ported from the design mockup.
export const initialState = {};

export function computeVals() {
const VARHEX = {'var(--c07070A)': '#07070A','var(--c0B0B0F)': '#0B0B0F','var(--c0B0B10)': '#0B0B10','var(--c0B0B14)': '#0B0B14','var(--c0D0D12)': '#0D0D12','var(--c0D0D14)': '#0D0D14','var(--c0F0F13)': '#0F0F13','var(--c101022)': '#101022','var(--c111116)': '#111116','var(--c121218)': '#121218','var(--c131319)': '#131319','var(--c15151A)': '#15151A','var(--c15151B)': '#15151B','var(--c15152A)': '#15152A','var(--c16161C)': '#16161C','var(--c17171D)': '#17171D','var(--c1A1A20)': '#1A1A20','var(--c1B1B22)': '#1B1B22','var(--c1C1C24)': '#1C1C24','var(--c1C3540)': '#1C3540','var(--c1E3A4A)': '#1E3A4A','var(--c1E4A63)': '#1E4A63','var(--c1F1F27)': '#1F1F27','var(--c1F1F2A)': '#1F1F2A','var(--c1F3A2A)': '#1F3A2A','var(--c1F4D33)': '#1F4D33','var(--c24242D)': '#24242D','var(--c26262F)': '#26262F','var(--c26263A)': '#26263A','var(--c2A2440)': '#2A2440','var(--c2A2A36)': '#2A2A36','var(--c2A2A40)': '#2A2A40','var(--c2E2E38)': '#2E2E38','var(--c2E2E4A)': '#2E2E4A','var(--c33333D)': '#33333D','var(--c34345A)': '#34345A','var(--c3A1E1E)': '#3A1E1E','var(--c3A2030)': '#3A2030','var(--c3A2A1C)': '#3A2A1C','var(--c3A2E1E)': '#3A2E1E','var(--c3A3115)': '#3A3115','var(--c3B3B55)': '#3B3B55','var(--c4A4A66)': '#4A4A66','var(--c4ADE80)': '#4ADE80','var(--c67E8F9)': '#67E8F9','var(--c6E6E78)': '#6E6E78','var(--c7DD3FC)': '#7DD3FC','var(--c7EE2A8)': '#7EE2A8','var(--c86EFAC)': '#86EFAC','var(--c8B8B94)': '#8B8B94','var(--c93C5FD)': '#93C5FD','var(--cA1A1AA)': '#A1A1AA','var(--cBBF7D0)': '#BBF7D0','var(--cC4B5FD)': '#C4B5FD','var(--cC7C8FF)': '#C7C8FF','var(--cC9C9D1)': '#C9C9D1','var(--cD4D4D8)': '#D4D4D8','var(--cD4D4FF)': '#D4D4FF','var(--cDDD6FE)': '#DDD6FE','var(--cE4E4E7)': '#E4E4E7','var(--cEDEDEF)': '#EDEDEF','var(--cF5C451)': '#F5C451','var(--cFBBF77)': '#FBBF77','var(--cFDBA74)': '#FDBA74','var(--cFFD58A)': '#FFD58A'};
const O = [
['UL', 'University Living', 'PropTech · Global · 2024–now', '#8B8CFF'],
['Un', 'Uninist', 'UK student housing', '#38BDF8'],
['ST', 'StudentTenant', 'UK lettings platform', 'var(--cF5C451)'],
['UI', 'ULInfinity', 'Student services', '#F472B6'],
['HPL', 'HPL Security', 'HPL Additives · 2022–24', '#22D3EE'],
['MJ', 'M & J Edtech', 'EdTech · Team Lead', '#A78BFA'],
['GQ', 'GuruQ', 'Tutoring marketplace', '#C084FC'],
['PS', 'Primo Group', 'Sr. Software Developer · 2018–19', '#FACC15'],
['GOV', 'Government projects', 'DoT India · TCOE India', 'var(--c4ADE80)'],
['AM', 'AMICI Global Solutions', 'EssayCorp · NeedAssignmentHelp · 2016–17', '#FB923C'],
['OF', 'OOFFRR', 'Local-deals platform · Primo Group', '#F87171'],
['8OM', '8OM Internet', 'Web Developer · 2017–18', 'var(--cF5C451)']
];
const hex = (c, a) => { const n = parseInt((VARHEX[c] || c).slice(1), 16); return 'rgba(' + (n >> 16) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + a + ')'; };
const orgs = O.map(([m, t, s, c]) => ({ m, t, s, c, bg: hex(c, 0.14), border: hex(c, 0.22) }));
const S = [['Government & public sector', 'var(--c4ADE80)'], ['EdTech', '#A78BFA'], ['PropTech', '#8B8CFF'], ['UK housing', '#38BDF8'], ['Manufacturing', '#22D3EE'], ['Retail & SMB', 'var(--cF5C451)'], ['AI products', 'var(--cFBBF77)'], ['Marketplaces', '#F472B6']];
const sectors = S.map(([t, c]) => ({ t, c, bg: hex(c, 0.08), border: hex(c, 0.3) }));
const team = ['#8B8CFF', '#38BDF8', 'var(--cF5C451)', 'var(--c4ADE80)', '#F472B6', '#FB923C', '#A78BFA', '#22D3EE', '#FACC15', '#34D399', '#F87171', '#C084FC'];
const CO = [
{ id: 'ul', m: 'UL', name: 'University Living', years: '2024 – now', c: '#8B8CFF', sites: [
{ img: '/img/c27e24505df7eb9554b6ff33d06cf7a9.jpg', host: 'universityliving.com', u: 'https://www.universityliving.com/', t: 'University Living', k: 'FLAGSHIP · GLOBAL', r: 'Role: Senior Software Engineer · AI & full stack', d: 'A global marketplace for student housing. I build flows from the homepage to booking, integrate property and payment APIs, ship zero-downtime releases, and own technical SEO.', st: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB'] },
{ img: '/img/d025a10724ad1a777b9f1f733deff577.jpg', host: 'uninist.com', u: 'https://uninist.com/', t: 'Uninist', k: 'UK · PROPTECH', r: 'Full stack', d: 'UK student accommodation: city and residence pages, enquiry flows, and campaign pages.', st: ['Next.js', 'TypeScript', 'AWS'] },
{ img: '/img/b6d5c837d772dc50f974bfda7d15514a.jpg', host: 'studenttenant.com', u: 'https://www.studenttenant.com/', t: 'StudentTenant', k: 'UK · LETTINGS', r: 'Full stack · v2 rewrite', d: 'Live Symfony platform, now being rewritten in Node + Next.js.', st: ['Symfony', 'Prisma', 'Docker'] },
{ img: '/img/9abea008ac769bf4d0cea8111d35f518.jpg', host: 'ulinfinity.com', u: 'https://ulinfinity.com/', t: 'ULInfinity', k: 'STUDENT SERVICES', r: 'Full stack', d: 'Flights, airport pickup, banking and deals: student essentials, with experiments and tracking.', st: ['Next.js 14', 'Statsig'] },
{ img: '/img/43bb0e907e1a8c8052a32e562fb36ace.jpg', host: 'universityliving.com/blog', u: 'https://www.universityliving.com/blog/', t: 'UL Blog', k: 'CONTENT · SEO', r: 'Owner', d: 'Study-abroad resource hub: search, schema, sitemaps and LCP fixes.', st: ['WordPress', 'PHP', 'CWV'] },
{ img: '/img/079f3c6354d14651edb81956a90e884d.jpg', host: 'uninist.com/blog', u: 'https://uninist.com/blog/', t: 'Uninist Blog', k: 'CONTENT · SEO', r: 'Owner', d: 'A new theme rollout, plus ongoing technical SEO and fixes.', st: ['WordPress', 'PHP'] }
] },
{ id: 'amici', m: 'AM', name: 'AMICI Global Solutions', years: '2016 – 2017', c: '#FB923C', sites: [
{ img: '/img/75510a7300a35370871a9a1858a63b4b.jpg', host: 'amicicorp.net', u: 'https://www.amicicorp.net/', t: 'AMICI Global Solutions', k: 'AGENCY', r: 'Role: Web Developer', d: 'My first company, a digital agency in Dwarka. I worked here as a Web Developer on the company’s own platforms and on client sites.', st: ['PHP', 'MySQL', 'WordPress'] },
{ img: '/img/ccd528adca3a33f3615fc10032140f16.jpg', host: 'needassignmenthelp.com', u: 'https://www.needassignmenthelp.com/', t: 'NeedAssignmentHelp', k: 'ED-SERVICES', r: 'Design + development · 2016–17', d: 'I owned design and development end to end in a team of 3, including quote and lead-capture flows.', st: ['PHP', 'jQuery', 'AJAX', 'Bootstrap'] },
{ img: '/img/8c3dd582ece60d45f03cf0bc81c97336.jpg', host: 'essaycorp.com', u: 'https://www.essaycorp.com/', t: 'EssayCorp', k: 'ED-SERVICES', r: 'Design + development · 2016', d: 'A global academic-services platform. I owned all design and development modules in a team of 3.', st: ['PHP', 'jQuery', 'AJAX', 'Bootstrap'] }
] },
{ id: 'mj', m: 'MJ', name: 'M & J Edtech', years: '2019 – 2022', c: '#A78BFA', sites: [
{ img: '/img/3e9a4b3446ae2956d527503ed9b759ef.jpg', host: 'GuruQ', u: '#', still: true, cta: 'Product · EdTech', t: 'GuruQ', k: 'EDTECH PRODUCT', r: 'Role: Team Lead (DM-IT)', d: 'A tutoring marketplace that connects tutors and students. I led frontend architecture and full-stack delivery on MERN and AWS, from the first commit to launch.', st: ['React', 'Node.js', 'MongoDB', 'AWS'] }
] },
{ id: 'hpl', m: 'HPL', name: 'HPL Security', years: '2022 – 2024', c: '#22D3EE', sites: [
{ img: '/img/f383f3a17e16b3efdfae2bd4cbe308f5.jpg', host: 'hpladditives.com', u: 'https://hpladditives.com/', t: 'HPL Additives', k: 'MANUFACTURING', r: 'Role: Built solo', d: 'Corporate platform for a polymer-additives leader that is 50+ years old. I owned it from requirements to AWS launch and post-launch.', st: ['Next.js', 'Tailwind', 'MySQL', 'AWS'] }
] }
];
const AI = [
{ t: 'Livi, AI accommodation assistant', k: 'UNIVERSITY LIVING · LLM CHATBOT', s: '● LIVE', sc: '#4ADE80', d: 'The chatbot students use on University Living to find a room near campus in their budget, or reach a live agent for bookings, payments and visas. Answers come from LLMs (Claude and GPT) with RAG over live property data.', role: 'Frontend · chat widget, launcher, guided flows, live-agent option', tags: ['Claude', 'GPT', 'RAG · property data', 'React', 'Next.js'], href: 'https://www.universityliving.com', cta: 'universityliving.com ↗', sample: 'Sample chat' },
{ t: 'Paper-bill scanner', k: 'VISION · REAL SHOP', s: '● LIVE', sc: '#4ADE80', d: "Claude vision reads a supplier's handwritten bill and pre-fills the stock-in form. A human approves before anything is saved.", tags: ['Claude vision', 'Schema-validated JSON', 'Node.js', 'PWA'], href: '/projects', cta: 'See full project details →', sample: 'Sample values' },
{ t: 'ContentGuard AI', k: 'LLM PRODUCT', s: '● SHIPPED', sc: '#4ADE80', d: 'AI detection, plagiarism, grammar and fact-check. Switch OpenAI, Anthropic or Grok with one setting, with heuristics as fallback.', tags: ['OpenAI', 'Anthropic', 'Grok', 'Next.js 16', 'Zod'], href: '/projects', cta: 'See the project →', sample: 'Sample report' },
{ t: 'Offline research agent', k: 'LOCAL AGENT', s: '◐ EXPERIMENT', sc: '#F5C451', d: 'LangChain ReAct agent on a local Llama 3. It searches the web with no cloud and no API bill.', tags: ['LangChain', 'Llama 3', 'Ollama', 'ReAct'], href: '/projects', cta: 'See the project →', sample: 'Sample run' },
{ t: 'GenAI chatbot & image generator', k: 'GEN-AI', s: '● SHIPPED', sc: '#4ADE80', d: 'Chat and image apps on the OpenAI API, with tiktoken keeping every prompt inside its token budget.', tags: ['OpenAI API', 'tiktoken', 'Node.js'], href: '/projects', cta: 'See the project →', sample: 'Sample chat' },
{ t: 'Ask-my-AI: LLM chat & voice bot', k: 'RAG + VOICE', s: '◌ BUILDING', sc: '#8B8CFF', d: 'Recruiters will ask by text or voice and get answers from my resume and projects, with sources.', tags: ['RAG', 'LLM', 'Voice'], href: '#contact', cta: 'Coming to this site →', sample: 'Preview' }
];
const aiSel = () => { const v = (this.state && this.state.ai !== undefined) ? this.state.ai : 0; return v < 0 ? -1 : v; };
const hx = (c, a) => { const n = parseInt((VARHEX[c] || c).slice(1), 16); return 'rgba(' + (n >> 16) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + a + ')'; };
const cur = CO.find(x => x.id === ((this.state && this.state.co) || 'ul')) || CO[0];
const f0 = cur.sites[0];
const feat = { ...f0, still: !!f0.still, scroll: !f0.still, cta: f0.cta || 'Visit live ↗' };
return {
coTabs: CO.map(x => { const on = x.id === cur.id; return { m: x.m, name: x.name, years: x.years, count: x.sites.length + (x.sites.length > 1 ? ' sites' : ' site'), c: x.c, mbg: hx(x.c, 0.16), sel: on ? 'true' : 'false', border: on ? x.c : 'var(--c24242D)', bg: on ? hx(x.c, 0.10) : 'var(--c0F0F13)', fg: on ? 'var(--cEDEDEF)' : 'var(--cA1A1AA)', pick: () => this.setState({ co: x.id }) }; }),
co: cur,
feat,
rest: cur.sites.slice(1).map(s => ({ ...s, c: cur.c })),
hasRest: cur.sites.length > 1,
coUpper: cur.name.toUpperCase(),
proof: [
{ n: '9 yrs', l: 'shipping to production', c: 'var(--cEDEDEF)' },
{ n: '50+', l: 'projects delivered', c: 'var(--cC7C8FF)' },
{ n: '12+', l: 'people led', c: 'var(--cFFD58A)' },
{ n: '5', l: 'live platforms owned', c: 'var(--c86EFAC)' }
],
orbitTech: ['Next.js', 'Node.js', 'AWS', 'Docker', 'Claude', 'React', 'TypeScript', 'MySQL'].map((t, i, arr) => ({ t, a: (i * 360 / arr.length) + 'deg', na: (-i * 360 / arr.length) + 'deg', c: ['var(--cC7C8FF)', 'var(--c86EFAC)', 'var(--cFDBA74)', 'var(--c7DD3FC)', 'var(--cFFD58A)', 'var(--c93C5FD)', 'var(--cC4B5FD)', 'var(--c67E8F9)'][i] })),
aiList: AI.map((x, i) => { const cur = (this.state && this.state.ai !== undefined) ? this.state.ai : 0; const open = cur === i; return { ...x, n: '0' + (i + 1), open, exp: open ? 'true' : 'false', rot: open ? 'rotate(180deg)' : 'rotate(0deg)', role: x.role || false, toggle: () => this.setState({ ai: i }) }; }),
aiCur: AI[Math.max(0, (this.state && this.state.ai !== undefined && this.state.ai >= 0) ? this.state.ai : 0)],
aiv0: aiSel() === 0, aiv1: aiSel() === 1, aiv2: aiSel() === 2, aiv3: aiSel() === 3, aiv4: aiSel() === 4, aiv5: aiSel() === 5,
menuOpen: !!(this.state && this.state.menu),
menuExp: (this.state && this.state.menu) ? 'true' : 'false',
openMenu: () => this.setState({ menu: true }),
closeMenu: () => this.setState({ menu: false }),
tab_home: ((this.state && this.state.tab) || 'home') === 'home' ? 'true' : 'false',
tab_work: (this.state && this.state.tab) === 'work' ? 'true' : 'false',
tab_ai: (this.state && this.state.tab) === 'ai' ? 'true' : 'false',
tab_contact: (this.state && this.state.tab) === 'contact' ? 'true' : 'false',
go_home: () => this.setState({ tab: 'home' }), go_work: () => this.setState({ tab: 'work' }), go_ai: () => this.setState({ tab: 'ai' }), go_contact: () => this.setState({ tab: 'contact' }),
rootCls: (this.state && this.state.light) ? 'theme light' : 'theme',
isLight: !!(this.state && this.state.light),
isDark: !(this.state && this.state.light),
themeLabel: (this.state && this.state.light) ? 'Switch to dark mode' : 'Switch to light mode',
toggleTheme: () => this.setState({ light: !(this.state && this.state.light) }),

orgs: orgs.concat(orgs),
sectors: sectors.concat(sectors).concat(sectors),
plats: ['University Living', 'Uninist', 'StudentTenant', 'UL Blog', 'Uninist Blog'],
team,
leadTags: ['Sprint planning', 'Code reviews', 'Mentoring', 'Delegation', 'Architecture'],
career: [
{ y: 'Feb 2016 – Sep 2017', co: 'AMICI Global Solutions', role: 'Web Developer', city: 'Dwarka, Delhi', dom: 'Ed-services', win: 'Owned design and development of EssayCorp and NeedAssignmentHelp.', col: 'var(--cFBBF77)', ring: 'rgba(251,191,119,0.15)', border: 'var(--c3A2E1E)', mt: '225px', d: '.3s', badge: 'FIRST JOB' , dur: '1 yr 7 mos' },
{ y: 'Sep 2017 – Jan 2018', co: '8OM Internet', role: 'Web Developer', city: 'Kalkaji, Delhi', dom: 'Web agency', win: 'Built and shipped client websites.', col: 'var(--cFDBA74)', ring: 'rgba(253,186,116,0.15)', border: 'var(--c3A2E1E)', mt: '180px', d: '.5s', badge: '' , dur: '4 mos' },
{ y: 'Jan 2018 – Nov 2019', co: 'Primo Group', role: 'Sr. Software Developer', city: 'Dwarka, Delhi', dom: 'Local commerce', win: 'Built OOFFRR, a local-deals platform, with Angular and CodeIgniter in a team of 8.', col: 'var(--cF5C451)', ring: 'rgba(245,196,81,0.15)', border: 'var(--c3A3115)', mt: '135px', d: '.7s', badge: 'SENIOR' , dur: '1 yr 10 mos' },
{ y: 'Nov 2019 – 2022', co: 'M & J Edtech', role: 'Senior Full Stack / UI Team Lead', city: 'Faridabad', dom: 'EdTech', win: 'Led 12+ people and delivered GuruQ, a tutoring marketplace, on MERN and AWS.', col: '#8B8CFF', ring: 'rgba(139,140,255,0.16)', border: 'var(--c2E2E4A)', mt: '90px', d: '.9s', badge: 'TEAM LEAD' , dur: '2+ yrs' },
{ y: '2022 – 2024', co: 'HPL Security', role: 'Senior Full Stack Developer', city: 'Faridabad', dom: 'Manufacturing', win: 'Built and launched the HPL Additives platform alone, from requirements to AWS.', col: '#38BDF8', ring: 'rgba(56,189,248,0.15)', border: 'var(--c1E3A4A)', mt: '45px', d: '1.1s', badge: '' , dur: '~2 yrs' },
{ y: 'Oct 2024 – Now', co: 'University Living', role: 'Senior Software Engineer', city: 'Noida', dom: 'PropTech · AI · Global', win: 'Own 5 live platforms, PageSpeed 95+, and a Symfony → Node rewrite. 2 awards in 2025.', col: 'var(--c4ADE80)', ring: 'rgba(74,222,128,0.15)', border: 'var(--c1F4D33)', mt: '0px', d: '1.3s', badge: 'CURRENT' , dur: '2 yrs 1 mo' }
],
ninety: [
{ day: '30', tag: 'LEARN & SHIP', c: '#38BDF8', ring: 'rgba(56,189,248,0.14)', border: 'rgba(56,189,248,0.4)', d: '.1s', t: 'Learn the system, ship something small', b: ['Read the codebase, infra and release flow', 'Ship a real fix or feature in week one', 'Find quick wins in performance and SEO'] },
{ day: '60', tag: 'OWN', c: '#8B8CFF', ring: 'rgba(139,140,255,0.16)', border: 'rgba(139,140,255,0.45)', d: '.3s', t: 'Own a module end to end', b: ['Take one product area from ticket to production', 'Tighten reviews, CI gates and Core Web Vitals', 'Ship AI features where they add real value'] },
{ day: '90', tag: 'MULTIPLY', c: 'var(--c4ADE80)', ring: 'rgba(74,222,128,0.14)', border: 'rgba(74,222,128,0.4)', d: '.5s', t: 'Raise the team’s output', b: ['Mentor, document and share patterns', 'Propose the next technical bet with a plan', 'Be someone you can hand anything to'] }
],
prime: [
{ name: 'AI & LLMs', tag: 'MOST IN DEMAND', c: 'var(--cF5C451)', border: 'var(--c3A3115)', bg: 'rgba(245,196,81,0.05)', items: [['LLM APIs (OpenAI · Claude)', 1], ['AI agents (LangChain)', 1], ['Vision models', 0], ['Structured outputs', 0], ['LangChain · Ollama', 0], ['Prompt engineering', 1]] },
{ name: 'Frontend', tag: 'CORE', c: 'var(--cC7C8FF)', border: 'var(--c2E2E4A)', bg: 'rgba(139,140,255,0.05)', items: [['TypeScript', 1], ['React', 1], ['Next.js App Router', 1], ['Tailwind', 1], ['Core Web Vitals', 1], ['Framer Motion', 0]] },
{ name: 'Backend', tag: 'CORE', c: 'var(--c7DD3FC)', border: 'var(--c1E3A4A)', bg: 'rgba(56,189,248,0.05)', items: [['Node.js', 1], ['Express', 1], ['REST APIs', 1], ['Prisma · Zod', 0], ['MySQL · PostgreSQL', 1], ['MongoDB', 0]] },
{ name: 'Cloud & DevOps', tag: 'SHIP IT', c: 'var(--c86EFAC)', border: 'var(--c1F4D33)', bg: 'rgba(74,222,128,0.05)', items: [['AWS (EC2 · S3 · CodeDeploy)', 1], ['Docker · Compose', 1], ['CI/CD pipelines', 0], ['Linux · Nginx', 0], ['Git flow · PR reviews', 1]] },
{ name: 'Integrations & tools', tag: 'DAY TO DAY', c: 'var(--cF9A8D4)', border: 'var(--c3A2030)', bg: 'rgba(244,114,182,0.05)', items: [['LeadSquared CRM', 1], ['GupShup · DoubleTick', 1], ['Zoho SalesIQ', 0], ['Statsig · Meta Pixel', 0], ['Jira · Slack', 1], ['Bitbucket · GitHub', 1], ['Figma · Postman', 0]] }
].map((g, gi) => { const openI = (this.state && this.state.sg !== undefined) ? this.state.sg : 0; const open = openI === gi; return { ...g, open, exp: open ? 'true' : 'false', rot: open ? 'rotate(180deg)' : 'rotate(0deg)', count: g.items.length + ' skills', toggle: () => this.setState({ sg: open ? -1 : gi }), items: g.items.map(([t, h]) => ({ t, hot: h ? g.c : 'var(--c26262F)' })) }; }),
};
}

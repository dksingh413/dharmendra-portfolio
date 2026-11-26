// Page data and view state, ported from the design mockup.
export const initialState = {};

export function computeVals() {
const SH_L = !!(this.state && this.state.light);
const SHELL = { rootCls: SH_L ? 'theme light' : 'theme', isLight: SH_L, isDark: !SH_L, themeLabel: SH_L ? 'Switch to dark mode' : 'Switch to light mode', toggleTheme: () => this.setState({ light: !SH_L }),
menuOpen: !!(this.state && this.state.menu), menuExp: (this.state && this.state.menu) ? 'true' : 'false', openMenu: () => this.setState({ menu: true }), closeMenu: () => this.setState({ menu: false }),
tab_home: 'false', tab_work: 'false', tab_ai: 'false', tab_contact: 'false', go_home: () => {}, go_work: () => {}, go_ai: () => {}, go_contact: () => {} };

const stars = [];
for (let i = 0; i < 36; i++) stars.push({ x: ((i * 37) % 100) + '%', y: ((i * 53) % 55) + '%', d: ((i % 7) * 0.4).toFixed(1) + 's' });
const B = [['HTML', '#7C2D12', '#FED7AA'], ['CSS', '#7C2D12', '#FED7AA'], ['Bootstrap', '#78350F', '#FDE68A'], ['jQuery', '#78350F', '#FDE68A'], ['PHP + MySQL', '#713F12', '#FEF08A'], ['My own CMS', '#4C1D95', '#DDD6FE'], ['WordPress', '#4C1D95', '#DDD6FE'], ['CodeIgniter', '#3B0764', '#E9D5FF'], ['Angular', '#1E3A8A', '#BFDBFE'], ['React · Node · MongoDB', '#0C4A6E', '#BAE6FD'], ['Next.js · AWS · Docker · AI', '#14532D', '#BBF7D0']];
const tc = ['#8B8CFF', '#38BDF8', '#F5C451', '#4ADE80', '#F472B6', '#FB923C', '#A78BFA', '#22D3EE', '#FACC15', '#34D399', '#F87171', '#C084FC'];
return { ...SHELL, 
stars,
bricks: B.map((b, i) => ({ t: b[0], bg: b[1], fg: b[2], d: (0.4 + i * 0.28).toFixed(2) + 's', ml: (i % 2 ? 24 : 0) + 'px' })),
act2: [
{ t: 'HTML & CSS: first websites', y: 'Before 2016', d: 'Small sites, built by hand.' },
{ t: 'Bootstrap + jQuery', y: 'Before 2016', d: 'Responsive and interactive.' },
{ t: 'PHP + MySQL', y: '2016', d: 'Dynamic, database-driven sites.' },
{ t: 'My own CMS', y: '2016', d: 'Clients managed their own content.' },
{ t: 'WordPress', y: '2016–17', d: 'Blogs and business sites, faster.' }
],
act3: [
{ t: 'First job: AMICI Global Solutions', y: '2016–17', d: 'Owned design and development of EssayCorp and NeedAssignmentHelp.' },
{ t: '8OM Internet', y: '2017–18', d: 'Web developer for client websites.' },
{ t: 'Primo Group: OOFFRR', y: '2018–19', d: 'Sr. Software Developer: Angular + CodeIgniter, team of 8.' }
],
team: tc.map((c, i) => ({ c, d: (0.3 + i * 0.12).toFixed(2) + 's' })),
now: [
{ n: '5', l: 'live platforms I own' },
{ n: '95+', l: 'PageSpeed' },
{ n: '2', l: 'awards in 2025' },
{ n: '4', l: 'AI builds shipped' }
]
};
}

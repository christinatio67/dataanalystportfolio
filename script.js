const projects = [
  {
    title: "NYC Property Sales Analysis | Empire Realty Analytics",
    eyebrow: "REAL ESTATE ANALYTICS / CASE STUDY",
    tools: "Tools: SQL, Excel, Tableau Public, PowerPoint",
    summary: "A case study analysing 84,548 NYC property sales records from September 2016 to August 2017. The work focuses on transaction activity, pricing patterns, and borough-level market trends.",
    work: [
      "Cleaned and analysed 84,548 property sales records; document the exact number of invalid records removed after final validation.",
      "Used SQL and spreadsheet models to examine sales volume, median price, and price per square foot by borough, property type, and month.",
      "Designed an interactive Tableau dashboard and an executive presentation, reconciling figures across the analysis outputs."
    ],
    results: [
      "Key finding: add one quantified insight after validating the dashboard and underlying calculations.",
      "Project period: add month and year."
    ],
    links: [
      { label: "Open Tableau dashboard", url: "https://public.tableau.com/app/profile/christina.tio.trisnasari/viz/NYCRealEstateMarketActivitySep2016-Sep2017_17903890589120/Dashboard" }
    ]
  },
  {
    title: "Advanced Steam Game Analysis",
    eyebrow: "GAME ANALYTICS / CASE STUDY",
    tools: "Tools: Python, pandas, Tableau",
    summary: "A case study exploring Steam game data to understand how game and market characteristics relate to performance, player engagement, and ratings.",
    work: [
      "Cleaned and prepared the Steam game dataset for exploratory analysis.",
      "Explored relationships between available variables such as price, genre, release timing, reviews, and playtime.",
      "Presented the analysis through a Tableau dashboard."
    ],
    results: [
      "Key finding: add a quantified result supported by the completed analysis.",
      "Recommendation: specify the action for publishers or developers once the strongest drivers have been validated."
    ],
    links: [
      { label: "Open Tableau dashboard", url: "https://public.tableau.com/app/profile/christina.tio.trisnasari/viz/AdvanceSteamGame/Dashboard1" }
    ]
  },
  {
    title: "DFR Fault Analysis App | Personal Project",
    eyebrow: "POWER SYSTEMS / PERSONAL PROJECT",
    tools: "Tools: Python, Streamlit, Machine Learning, COMTRADE data",
    summary: "A web application designed to support digital fault recorder (DFR) analysis by reading COMTRADE files, plotting fault waveforms, and estimating likely fault cause and location.",
    work: [
      "Built a workflow to load and visualize raw COMTRADE fault records.",
      "Added fault-cause and fault-location estimation features to support engineering investigation.",
      "Included automated PDF reporting and a shareable summary containing feeder, fault time, estimated cause, and estimated location."
    ],
    results: [
      "Impact: quantify the reduction in manual analysis time only after measuring it against a documented baseline.",
      "Project period: add month and year."
    ],
    links: [
      { label: "Open app (local network)", url: "http://192.168.1.6:8501", local: true }
    ]
  },
  {
    title: "RevoHospital Revenue and Operational Efficiency Dashboard | RevoU",
    eyebrow: "HEALTHCARE ANALYTICS / CASE STUDY",
    tools: "Tools: Tableau, SQL",
    summary: "An interactive dashboard case study combining hospital revenue and operational indicators to help assess performance and identify opportunities to improve efficiency.",
    work: [
      "Built an interactive Tableau dashboard using SQL-prepared data.",
      "Bring together revenue and operational KPIs; list the exact measures included in the final dashboard."
    ],
    results: [
      "Key finding: add a quantified insight from the completed dashboard.",
      "Recommendation: add the specific operational or revenue action supported by the analysis.",
      "Project period: add month and year."
    ],
    links: [
      { label: "Open Tableau dashboard", url: "https://public.tableau.com/app/profile/christina.tio.trisnasari/viz/RevoHospitalRevenueandOperationalEfficiencyDashboard_17897487120910/Dashboard1" }
    ]
  }
];

const modal=document.getElementById('projectModal');
document.querySelectorAll('.project-open').forEach(btn=>btn.addEventListener('click',()=>{
  const p=projects[Number(btn.dataset.project)];
  document.getElementById('modalEyebrow').textContent=p.eyebrow;
  document.getElementById('modalTitle').textContent=p.title;
  document.getElementById('modalTools').textContent=p.tools;
  document.getElementById('modalSummary').textContent=p.summary;
  document.getElementById('modalWork').innerHTML=p.work.map(x=>`<li>${x}</li>`).join('');
  document.getElementById('modalResults').innerHTML=p.results.map(x=>`<li>${x}</li>`).join('');
  document.getElementById('modalLinks').innerHTML=p.links.map(x=>`<a class="button button-primary" href="${x.url}" target="_blank" rel="noreferrer">${x.label} <span>↗</span></a>${x.local?'<small class="local-link-note">Available only when the app host is reachable on your local network.</small>':''}`).join('');
  modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
}));
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.getElementById('modalClose').addEventListener('click',closeModal);
document.getElementById('modalBackdrop').addEventListener('click',closeModal);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
 const filter=btn.dataset.filter;
 document.querySelectorAll('.project-card').forEach(card=>card.classList.toggle('hidden',filter!=='all'&&card.dataset.category!==filter));
}));
document.getElementById('themeToggle').addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.setItem('portfolio-theme',document.body.classList.contains('dark')?'dark':'light')});
if(localStorage.getItem('portfolio-theme')==='dark')document.body.classList.add('dark');
const menu=document.getElementById('nav'),toggle=document.getElementById('menuToggle');
toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-window.innerHeight;document.getElementById('progress').style.width=(max>0?window.scrollY/max*100:0)+'%'});
document.getElementById('year').textContent=new Date().getFullYear();

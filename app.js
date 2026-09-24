/* AudConnect 2026 app logic. Images live in index.html (window IMG). */
/* ============ Event content: edit this block to reuse the app next year ============ */
const EVENT={kicker:"AUDCONNECT 2026",theme:"Driving Efficiency, Enhancing Care",date:"10 October 2026",time:"12:30 to 6:00 PM",lunch:"Lunch from 12:30 to 2:00 PM",room:"Level 3, Room 300-302",venue:"Suntec Singapore",cpe:"Participation in this event is recognised with 4 CPE points under Pillar 1 of the SAPS CPE program.",host:"Society for Audiology Professionals Singapore"};
const SPEAKERS={
  sg:{name:"Dr. Sharad Govil",role:"President",org:"SAPS",bio:[]},
  su:{name:"Su Junqiang",role:"Vice-President",org:"SAPS",bio:[]},
  jo:{name:"Jessica Ong",role:"Clinical Specialist",org:"Cochlear",bio:["Jessica holds a Master of Audiology and a Bachelor of Biomedical Science from the University of Auckland. With clinical experience across New Zealand and Singapore, she has extensive experience supporting patients with complex hearing loss and hearing implants. In her role with Cochlear, Jessica partners with clinicians and healthcare teams across the country to support cochlear implant services, foster strong clinical partnerships, and improve access to implantable hearing solutions and outcomes for people with significant hearing loss."]},
  rh:{name:"Dr. Rebecca Heywood",role:"Senior Consultant ENT Surgeon",org:"The ENT Clinic",bio:["Dr Rebecca Heywood is a UK-trained ENT specialist and fellowship-trained Ear and Hearing Surgeon based at The ENT Clinic in Singapore. With over 25 years of experience across the UK, Australia and Singapore, she cares for adults and children with a wide range of ear and hearing problems, with particular expertise in hearing restoration and implantable hearing technologies.","She has established and led cochlear implant services, contributed to hearing research and implant development, and participated in World Health Organization ear and hearing care initiatives. Rebecca is also an active researcher and educator, passionate about improving hearing health and helping people stay connected throughout life."]},
  ct:{name:"Chermaine Teo",role:"Founder & Audiologist",org:"Faith Hearing Specialists",bio:["Chermaine Teo is the Founder and Audiologist of Faith Hearing Specialists, Singapore. She holds a Master of Audiology from the University of Southampton, UK, and received clinical training in cochlear implantation at the Southampton Auditory Implant Centre.","Her clinical interests include cochlear implants, tinnitus, and the rehabilitation of individuals with long-standing hearing loss and auditory deprivation. Her work includes cochlear implant assessment, mapping and rehabilitation, as well as supporting individuals with severe and debilitating tinnitus. Based in private practice, Chermaine sees patients from Singapore and overseas and also travels regionally to provide audiological care. Her caseload includes individuals with diverse hearing histories, with a particular interest in those seeking hearing intervention after many years of hearing loss or auditory deprivation."]},
  tt:{name:"Tammy Toh",role:"Growth Associate",org:"Heidi",bio:["Tammy is a Clinical Growth Associate at Heidi, where she partners with clinicians and healthcare organisations to understand their pain points, tailor onboarding and support, and build workflow-specific templates that reduce documentation burden and improve efficiency. Having previously worked in healthcare organisations, she understands firsthand the administrative pressures clinicians face.","Heidi is building an AI Care Partner to expand clinical capacity by automating administrative work, including documentation, form filling, and task management, so clinicians can focus on patient care. Today, Heidi supports more than 2 million consultations each week across 110 languages and 190 countries."]},
  at:{name:"Adam Tan",role:"Head of Audiology Services",org:"Singapore General Hospital",bio:["Adam Tan serves as the Head of Audiology Services at Singapore General Hospital, where he actively drives quality improvement and process transformation. As a GROSS (Get Rid of Silly Stuff) coach, he empowers teams to cut through operational bottlenecks by introducing practical digital and automation tools like Excel VBA, Pair Assistant, Power Automate, and Robotic Process Automations. Having led multiple successful quality improvement projects over the years, Adam's focus on eliminating redundant work earned top prizes at the SGH GROSS Awards. He also contributes to health system innovation through SingHealth's Allied Health Data and Innovation Taskforce."]},
  al:{name:"Alan Tseng",role:"Senior Audiologist",org:"Singapore General Hospital",bio:["Tseng Chien Chih Alan is a Senior Audiologist at Singapore General Hospital with a keen interest in healthcare innovation and digital transformation. He has been actively involved in quality improvement initiatives, contributing to projects that leverage Microsoft automation, VBA coding, robotic process automation (RPA), and AI tools. Through collaboration between Clinical Operations and Digital/Data teams, he supports the development of efficient and sustainable clinical workflows."]},
  th:{name:"Teoh Hui Yee",role:"Senior Audiologist",org:"Singapore General Hospital",bio:["Teoh Hui Yee is an audiologist at Singapore General Hospital, interested in bridging clinical practice with digital health and technology. As part of the department's digital health and data portfolio, she works with the team to explore how digital solutions can improve workflows and support more efficient healthcare delivery. She is actively involved in designing and implementing workflow automation using Microsoft Power Automate, translating day-to-day operational challenges into practical digital solutions."]},
  ls:{name:"Lee Si Ting",role:"Senior Audiologist",org:"Ng Teng Fong General Hospital",bio:[]},
  fm:{name:"Fu Manjia",role:"Senior Audiologist",org:"Ng Teng Fong General Hospital",bio:[]},
  lz:{name:"Lee Zu Xuan",role:"Senior Audiologist",org:"Amazing Hearing Group",bio:["Lee Zu Xuan is an experienced audiologist with a strong academic foundation and a diverse professional background. He holds a Bachelor's degree in Biomedical Engineering and a Master's degree in Audiology from the National University of Singapore (NUS). Zu Xuan has developed a well-rounded career in audiology, with previous roles as a Product Audiologist at GN Group and at Cochlear Limited. He currently serves as Senior Audiologist at Amazing Hearing Group, where he continues to apply his clinical and technical expertise to deliver high-quality patient care."]},
};
const SPK_ORDER=["sg","su","jo","rh","ct","tt","ls","fm","at","al","th","lz"];
const SOCIETY={vision:"To be the leading voice in advancing audiology practice and hearing care for patients in Singapore.",mission:"To connect, support, and empower audiology professionals through learning, networking and advocacy.",values:["Ethical","Competent","Integrity","Social Responsibility","United"]};
const COMMITTEE=[["c_sg","Sharad Govil","President"],["c_su","Su Junqiang","Vice-President"],["c_id","Isshani Devaraj","Treasurer"],["c_ls","Lee Si Ting","Secretary"],["c_af","Augustin Fiala","Public Affairs Officer"],["c_ck","Charis Koh","Social Activities Officer"],["c_ss","Sadrina Shah","Assistant Treasurer"],["c_kh","Kavya Hedge","Assistant Secretary"]];
const SESSIONS=[
  {id:"reg",time:"12:30",end:"14:00",title:"Registration & Lunch",sub:"Exhibition booths and posters open"},
  {id:"t1",n:"01",time:"14:00",end:"14:20",title:"Shaping the Future of Audiology",sub:"Opening Address and SAPS Self-Regulation Update",spk:["sg","su"],by:"Dr. Sharad Govil & Su Junqiang",rate:true},
  {id:"t2",n:"02",time:"14:20",end:"14:50",title:"Transforming NextGen Hearing Care",sub:"Cochlear™ Nucleus® Nexa™ System",spk:["jo","rh","ct"],by:"Jessica Ong, Cochlear; Dr. Rebecca Heywood, The ENT Clinic & Chermaine Teo, Faith Hearing",rate:true},
  {id:"t3",n:"03",time:"14:50",end:"15:10",title:"Smarter Documentation & Evidence-Based Care",sub:"Reducing documentation and supporting evidence-informed care in Allied Health",spk:["tt"],by:"Tammy Toh, Heidi",rate:true},
  {id:"t4",n:"04",time:"15:10",end:"15:30",title:"Automated Audiometry Setup in Local Setting",sub:"Experience at Ng Teng Fong General Hospital",spk:["ls","fm"],by:"Lee Si Ting & Fu Manjia, NTFGH",rate:true},
  {id:"t5",n:"05",time:"15:30",end:"16:00",title:"Amplifying Efficiency, Simplifying Workflows",sub:"The SGH GROSS x AI Story",spk:["at","al","th"],by:"Adam Tan, Alan Tseng & Teoh Hui Yee, SGH",rate:true},
  {id:"tea",time:"16:00",end:"16:30",title:"Tea Break",sub:"Exhibition booths and posters"},
  {id:"t6",n:"06",time:"16:30",end:"17:00",title:"Digital Health in Private Audiology Practice",sub:"From patient engagement to rehabilitation",spk:["lz"],by:"Lee Zu Xuan, Amazing Hearing",rate:true},
  {id:"panel",n:"",time:"17:00",end:"17:20",title:"Panel Discussion",sub:"From innovation to implementation: Perspectives from the field",spk:["sg","jo","at","ls","lz"],by:"Dr. Sharad Govil, Jessica Ong, Adam Tan, Lee Si Ting & Lee Zu Xuan",rate:true},
  {id:"award",time:"17:20",end:"17:40",title:"Excellence Award",sub:"Recognising excellence and contribution to the audiology profession. Appreciation to speakers and poster presenters, followed by the group photo.",spk:["sg"],by:"Dr. Sharad Govil"},
  {id:"close",time:"17:40",end:"17:45",title:"Closing",sub:""},
];
const TRIVIA=[
  {q:"Auracast broadcast audio is built on which Bluetooth standard?",o:["Bluetooth Classic","Bluetooth LE Audio","Bluetooth 2.1 EDR","Bluetooth Mesh"],a:1},
  {q:"The 2024 Lancet Commission links roughly what share of dementia cases to hearing loss?",o:["2%","7%","15%","25%"],a:1},
  {q:"In which year did the US FDA's over the counter hearing aid rule take effect?",o:["2019","2021","2022","2024"],a:2},
  {q:"World Hearing Day falls on which date?",o:["3 March","10 October","1 June","25 September"],a:0},
  {q:"Normal conversation is typically around what level?",o:["30 dB","60 dB","85 dB","100 dB"],a:1},
];

/* ============ Live connection ============ */
const SB_URL="https://jmvqaqxhycvxpaseiwap.supabase.co";
const SB_KEY="sb_publishable_v1AwIJu0a4xESgtlLrvX9w_9k14vUyn";
const sb=window.supabase.createClient(SB_URL,SB_KEY,{auth:{persistSession:false,autoRefreshToken:false}});
const POLL={id:"p1",q:"Where could AI save your clinic the most time?",o:["Documentation","Hearing testing","Patient follow up","Fitting and fine tuning"]};
const CLOUD_Q="One word for audiology in 2030";
const EVENT_DATE="2026-10-10";

let S={
  token:null,me:null,committee:false,reg:{member:null},tab:"prog",qaSession:"t1",qaSort:"top",playSeg:"photos",
  q:[],myVotes:new Set(),myQs:new Set(),pollCounts:POLL.o.map(()=>0),myPoll:null,words:[],myWord:null,
  board:[],myTrivia:null,trivia:{i:0,picked:null,score:0},photos:[],likes:{},myLikes:new Set(),
  stage:{view:"photos",pinned_question:null,poll_open:true,cloud_open:true},ratings:{},feedback:null,nps:null,
  admin:false,adTab:"over",ad:null,attQ:"",stageLocal:null
};
try{S.token=localStorage.getItem("ac26_token")}catch(e){}

/* ============ Helpers ============ */
const $=s=>document.querySelector(s);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const mins=t=>{const[h,m]=t.split(":").map(Number);return h*60+m};
const fmt=t=>{let[h,m]=t.split(":").map(Number);h=h>12?h-12:h;return `${h}:${String(m).padStart(2,"0")}`};
const sgNow=()=>{const p=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Singapore",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).formatToParts(new Date());const g=t=>p.find(x=>x.type===t).value;return {date:`${g("year")}-${g("month")}-${g("day")}`,time:`${g("hour")}:${g("minute")}`}};
const TEST_NOW=new URLSearchParams(location.search).get("now");
function nowSession(){const n=sgNow();const t=TEST_NOW||(n.date===EVENT_DATE?n.time:null);if(!t)return null;return SESSIONS.find(s=>mins(t)>=mins(s.time)&&mins(t)<mins(s.end))}
const ini=n=>n.replace(/^Dr\.?\s+/,"").split(/\s+/).map(w=>w[0]).slice(0,2).join("").toUpperCase();
const photo=(k,size)=>{const src=IMG[k]||IMG["c_"+k];const st=size?`style="width:${size}px;height:${size}px"`:"";return src?`<img class="ph" src="${src}" alt="" ${st}>`:`<span class="ph ini" ${st}>${ini(SPEAKERS[k].name)}</span>`};
const rateable=()=>SESSIONS.filter(s=>s.rate);
const photoSrc=p=>p.storage_path.startsWith("static/")?IMG[p.storage_path.slice(7)]:`${SB_URL}/storage/v1/object/public/photos/${p.storage_path}`;
const errMsg=e=>{const m=(e&&(e.message||e.error_description))||"";if(/company name/i.test(m))return "Please enter your company name";if(/closed/i.test(m))return m.charAt(0).toUpperCase()+m.slice(1);if(/not checked in/i.test(m))return "Please check in again";if(/Failed to fetch|NetworkError|network/i.test(m))return "No connection. Please try again";return "Something went wrong. Please try again"};
async function rpc(fn,args){const {data,error}=await sb.rpc(fn,args);if(error)throw error;return data}

/* ============ Loading shared data ============ */
async function loadPublic(){
  const [q,v,p,w,t,ph,lk,st]=await Promise.all([
    sb.from("questions").select("id,session_id,author_name,body,answered,created_at"),
    sb.from("question_votes").select("question_id"),
    sb.from("poll_votes").select("option_index").eq("poll_id",POLL.id),
    sb.from("words").select("word"),
    sb.from("trivia_scores").select("display_name,score,finished_at").order("score",{ascending:false}).order("finished_at").limit(10),
    sb.from("photos").select("id,author_name,caption,storage_path,created_at").order("created_at",{ascending:false}),
    sb.from("photo_likes").select("photo_id"),
    sb.from("stage_state").select("*").eq("id",1).maybeSingle()
  ]);
  if(q.data){const c={};(v.data||[]).forEach(r=>c[r.question_id]=(c[r.question_id]||0)+1);S.q=q.data.map(x=>({...x,votes:c[x.id]||0}))}
  if(p.data){const pc=POLL.o.map(()=>0);p.data.forEach(r=>{if(pc[r.option_index]!=null)pc[r.option_index]++});S.pollCounts=pc}
  if(w.data)S.words=w.data.map(r=>r.word);
  if(t.data)S.board=t.data;
  if(ph.data)S.photos=ph.data;
  if(lk.data){const l={};lk.data.forEach(r=>l[r.photo_id]=(l[r.photo_id]||0)+1);S.likes=l}
  if(st.data)S.stage=st.data;
}
async function loadMine(){
  const d=await rpc("my_state",{p_token:S.token});
  const p=d.profile;S.me={fn:p.first_name,ln:p.last_name,co:p.company,member:p.saps_member===true?"yes":p.saps_member===false?"no":null};
  S.myVotes=new Set(d.question_votes||[]);S.myQs=new Set(d.my_questions||[]);
  S.myPoll=(d.poll_votes||{})[POLL.id]??null;S.myWord=d.word;S.myTrivia=d.trivia;
  S.myLikes=new Set(d.photo_likes||[]);S.ratings=d.ratings||{};S.feedback=d.feedback;
  S.committee=p.committee===true;
}
async function loadAdmin(){if(!S.committee)return;S.ad=await rpc("admin_dashboard",{p_token:S.token})}

let _t=null;
function refreshSoon(){clearTimeout(_t);_t=setTimeout(async()=>{try{await loadPublic();if(S.admin||$("#stage").classList.contains("open"))await loadAdmin()}catch(e){}softRender()},350)}
function softRender(){
  // Avoid wiping what someone is typing
  const a=document.activeElement;if(a&&(a.tagName==="TEXTAREA"||(a.tagName==="INPUT"&&a.type!=="checkbox"))&&!$("#stage").classList.contains("open"))return;
  if($("#sheetBg").classList.contains("open"))return renderStageIfOpen();
  render();renderStageIfOpen();
}
function renderStageIfOpen(){if($("#stage").classList.contains("open"))Stage()}
function subscribe(){
  sb.channel("live").on("postgres_changes",{event:"*",schema:"public"},refreshSoon).subscribe();
  setInterval(refreshSoon,20000);
}

function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("show");clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove("show"),2200)}
function sheet(h){$("#sheet").innerHTML='<div class="grab"></div>'+h;$("#sheetBg").classList.add("open")}
function close(){$("#sheetBg").classList.remove("open")}
$("#sheetBg").addEventListener("click",e=>{if(e.target.id==="sheetBg")close()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){close();$("#stage").classList.remove("open")}});
const I={
 prog:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
 qa:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12z"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.5M12 16.5h.01"/></svg>',
 play:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 4.6L18.5 9l-4.6 1.9L12 15.5l-1.9-4.6L5.5 9l4.6-1.4z"/><path d="M19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8zM5 16l.6 1.4 1.4.6-1.4.6L5 20l-.6-1.4L3 18l1.4-.6z"/></svg>',
 fb:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/></svg>',
 me:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M8 17c.8-1.8 2.2-2.6 4-2.6s3.2.8 4 2.6"/></svg>',
 cam:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13.5" r="3.5"/></svg>',
 heart:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.8 4.5c2.1 0 3.6 1.2 5.2 3 1.6-1.8 3.1-3 5.2-3 3.8 0 5.9 3.9 4.4 7.3C19.5 16.4 12 21 12 21z"/></svg>',
 up:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m6 15 6-6 6 6"/></svg>',
 star:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2.8 2.9 5.9 6.5.9-4.7 4.6 1.1 6.4L12 17.6l-5.8 3 1.1-6.4-4.7-4.6 6.5-.9z"/></svg>',
 cal:'<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M7 14h2M11 14h2M15 14h2M7 17h2M11 17h2"/></svg>',
 pin:'<svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>'
};
const Hero=()=>`<div class="hero"><img class="logo-big" src="${IMG.logo}" alt="Society for Audiology Professionals Singapore">
  <div class="kick"><span>${EVENT.kicker}</span></div><img class="ngimg" src="${IMG.ng}" alt="NextGen Audiology"><div class="tl">${EVENT.theme.toUpperCase()}</div>
  <div class="facts"><div class="fact"><span class="ico">${I.cal}</span><span><b>10 OCT 2026</b><span class="small muted">${EVENT.time}</span></span></div>
  <div class="fact"><span class="ico">${I.pin}</span><span><b>SUNTEC SINGAPORE</b><span class="small muted">${EVENT.room}</span></span></div></div></div>`;


const Brand=()=>`<div class="hero" style="padding-top:0"><img class="logo-big" src="${IMG.logo}" alt="Society for Audiology Professionals Singapore">
  <div class="kick"><span>${EVENT.kicker}</span></div><img class="ngimg" src="${IMG.ng}" alt="NextGen Audiology"><div class="tl">${EVENT.theme.toUpperCase()}</div></div>`;
/* ============ Screens ============ */
function Register(){
  if(!S.showForm)return `<main class="landing">
  <svg class="swoosh" viewBox="0 0 300 260" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><filter id="bl" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="5"/></filter><linearGradient id="sw" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#FF2E45" stop-opacity=".9"/><stop offset="1" stop-color="#FF2E45" stop-opacity="0"/></linearGradient></defs>
  <path d="M-10,150 C60,120 110,70 170,-10" stroke="#FF1F3A" stroke-width="7" fill="none" filter="url(#bl)" opacity=".9"/>
  ${[...Array(14)].map((_,i)=>`<path d="M-10,${120+i*6} C${50+i*3},${95+i*5} ${100+i*4},${45+i*4} ${150+i*6},-10" stroke="${i%3?"#FFFFFF":"url(#sw)"}" stroke-opacity="${i%3?.12:.8}" stroke-width="${i%3?.6:1.4}" fill="none"/>`).join("")}
  <path d="M-10,150 C60,120 110,70 170,-10" stroke="#FFD0D6" stroke-width="1.6" fill="none"/></svg>
  <div class="lp">
    <div class="lp-logo"><img src="${IMG.logo}" alt="Society for Audiology Professionals Singapore"></div>
    <div class="lp-kick"><i class="lp-dot"></i><span>${EVENT.kicker}</span></div>
    <img class="lp-ng" src="${IMG.ng}" alt="NextGen Audiology">
    <div class="lp-tl">DRIVING EFFICIENCY, ENHANCING CARE</div>
    <div class="lp-facts"><div class="lp-f"><span class="ico">${I.cal}</span><div><b>10 OCT 2026</b><span>12:30 – 6:00 PM</span><em>Lunch from 12:30</em></div></div>
    <div class="lp-f"><span class="ico">${I.pin}</span><div><b>SUNTEC</b><span>Level 3</span><em>Room 300-302</em></div></div></div>
    <button class="btn big" data-a="showform">CHECK IN</button>
  </div></main>`;
  const m=S.reg.member;return `<main>
  <button class="hdr-btn" data-a="hideform" style="margin-top:16px">‹ Back</button>
  <div style="text-align:center;margin-top:10px"><img class="logo-img" style="width:72px;height:72px" src="${IMG.logo}" alt=""></div>
  <div class="rule-h" style="margin-top:18px">Check In</div>
  <label class="lbl" for="fn">First name</label><input id="fn" class="field" autocomplete="given-name" value="${esc(S.reg.fn||"")}">
  <label class="lbl" for="ln">Last name</label><input id="ln" class="field" autocomplete="family-name" value="${esc(S.reg.ln||"")}">
  <label class="lbl">SAPS member</label><div class="yn" role="radiogroup"><button data-mem="yes" aria-pressed="${m==="yes"}">Yes</button><button data-mem="no" aria-pressed="${m==="no"}">No</button></div>
  <label class="lbl" for="co">Company</label><input id="co" class="field" autocomplete="organization" list="cos" value="${esc(S.reg.co||"")}">
  <datalist id="cos">${(S.cos||[]).map(c=>`<option value="${esc(c)}">`).join("")}</datalist>
  <p class="small muted" style="margin-top:6px">Checked in before? Enter the same details to pick up where you left off.</p>
  <div style="height:14px"></div><button class="btn" data-a="checkin" ${S.busy?"disabled":""}>${S.busy?"CHECKING IN...":"CHECK IN"}</button></main>`}
function Prog(){const now=nowSession();return Hero()+`
  ${now?`<div class="redbox" style="margin-top:22px"><span class="small" style="font-weight:800;letter-spacing:.08em"><span class="dot"></span>HAPPENING NOW</span><span class="sess-title" style="margin-top:6px">${esc(now.title)}</span><span class="small muted">${esc(now.by||now.sub)}</span>
  ${now.rate?`<div style="display:flex;gap:8px;margin-top:12px"><button class="btn" data-qa="${now.id}">ASK A QUESTION</button><button class="btn ghost" data-rate="${now.id}">RATE TALK</button></div>`:""}</div>`:""}
  <div class="rule-h">Programme</div>
  <div class="prog">${SESSIONS.map(s=>`<button class="row ${now&&now.id===s.id?"live":""}" data-sess="${s.id}">
    ${s.n?`<span class="num">${s.n}</span>`:`<span class="num dim">${fmt(s.time)}</span>`}
    <span style="flex:1"><span class="sess-title" ${s.n?"":'style="color:#fff"'}>${esc(s.title)}</span>${s.sub?`<span class="sess-sub small">${esc(s.sub)}</span>`:""}${s.by?`<span class="sess-by">${esc(s.by)}</span>`:""}
    ${s.n?`<span class="sess-time">${fmt(s.time)} to ${fmt(s.end)} PM${S.ratings[s.id]?' <span class="pill ok">Rated</span>':""}</span>`:""}</span></button>`).join("")}</div>
  <p class="small muted" style="margin-top:14px;font-style:italic;text-align:center">${EVENT.cpe}</p>
  <div class="rule-h">Meet Our Speakers</div>
  <div class="spk-grid">${SPK_ORDER.map(k=>`<button class="spk" data-spk="${k}">${photo(k)}<span class="n">${esc(SPEAKERS[k].name)}</span><span class="r">${esc(SPEAKERS[k].role)},<br>${esc(SPEAKERS[k].org)}</span></button>`).join("")}</div>
  ${About()}`}

function Sess(id){const s=SESSIONS.find(x=>x.id===id);return `<span class="sess-time" style="margin:0">${fmt(s.time)} to ${fmt(s.end)} PM</span>
  <h2 style="margin:6px 0 4px;font-size:21px;text-transform:uppercase;font-weight:900;color:var(--red-t)">${esc(s.title)}</h2>
  ${s.sub?`<p>${esc(s.sub)}</p>`:""}
  ${(s.spk||[]).map(k=>`<button class="item" data-spk="${k}" style="padding:10px 0">${photo(k,48)}<span><b style="display:block">${esc(SPEAKERS[k].name)}</b><span class="small muted">${esc([SPEAKERS[k].role,SPEAKERS[k].org].filter(Boolean).join(", "))}</span></span></button>`).join("")}
  <p class="small muted">${EVENT.room}, ${EVENT.venue}</p>
  ${s.rate?`<div style="display:flex;gap:8px;margin-top:10px"><button class="btn" data-qa="${id}">QUESTIONS</button><button class="btn ghost" data-rate="${id}">${S.ratings[id]?"RATED":"RATE"}</button></div>`:""}`}

function About(){return `<div class="rule-h">About the Society</div>
  <div class="about"><div class="ab"><span class="ab-t">Vision</span><p>${esc(SOCIETY.vision)}</p></div>
  <div class="ab"><span class="ab-t">Mission</span><p>${esc(SOCIETY.mission)}</p></div>
  <div class="ab"><span class="ab-t">Core Values</span><div class="vals">${SOCIETY.values.map(v=>`<span>${esc(v)}</span>`).join("")}</div></div></div>
  <div class="rule-h">2025-2026 Committee</div>
  <div class="spk-grid comm">${COMMITTEE.map(([k,n,r])=>`<div class="spk"><img class="ph" src="${IMG[k]}" alt=""><span class="n">${esc(n)}</span><span class="r">${esc(r)}</span></div>`).join("")}</div>`}
function Spk(k){const v=SPEAKERS[k];const ss=SESSIONS.filter(s=>(s.spk||[]).includes(k));return `<div style="text-align:center">${photo(k,110)}
  <h2 style="margin:16px 0 2px;font-size:22px;text-transform:uppercase;font-weight:900">${esc(v.name)}</h2><p class="muted">${esc([v.role,v.org].filter(Boolean).join(", "))}</p></div>
  ${(v.bio||[]).map(p=>`<p class="bio">${esc(p)}</p>`).join("")}
  <div class="rule-h" style="margin-top:18px">Speaking At</div>${ss.map(s=>`<p><span class="sess-title">${esc(s.title)}</span><span class="small muted">${fmt(s.time)} to ${fmt(s.end)} PM</span></p>`).join("")}
  <button class="btn ghost" data-a="close">CLOSE</button>`}
function Cert(){return `<div class="certwrap"><div class="pcert" role="img" aria-label="Certificate of attendance for ${esc(S.me.fn)} ${esc(S.me.ln)}">
  <img class="lg" src="${IMG.clogo}" alt="">
  <div class="ttl">CERTIFICATE OF ATTENDANCE</div>
  <div class="l1 it">This is to certify that</div>
  <div class="nm">${esc(S.me.fn)} ${esc(S.me.ln)}</div>
  <div class="body it">attended AudConnect 2026: NextGen Audiology, Driving Efficiency, Enhancing Care<br>held on 10 October 2026 at Suntec Singapore</div>
  <div class="sig"><div class="s">Sharad Govil</div><div class="ln"></div><div class="n">Dr. Sharad Govil, AuD<br>President, SAPS</div></div>
  <img class="seal" src="${IMG.cseal}" alt="">
  </div></div>
  <p class="small muted" style="margin-top:10px;text-align:center;font-style:italic">${EVENT.cpe}</p>
  <div style="height:8px"></div><button class="btn ghost" data-a="close">DONE</button>`}

function QA(){const qs=S.q.filter(q=>q.session_id===S.qaSession).sort((a,b)=>S.qaSort==="top"?(a.answered-b.answered)||b.votes-a.votes:b.id-a.id);
  return `<h1 class="page-title">Q&amp;A</h1><p class="tag">Ask the speakers</p>
  <label class="lbl" for="qs">Session</label>
  <select id="qs" class="field">${rateable().map(s=>`<option value="${s.id}" ${s.id===S.qaSession?"selected":""}>${s.n?s.n+"  ":""}${esc(s.title)}</option>`).join("")}</select>
  <div style="height:12px"></div><textarea id="qt" class="field" rows="3" maxlength="240" placeholder="Type your question for the speaker"></textarea>
  <label style="display:flex;gap:8px;align-items:center;margin:10px 0" class="small"><input type="checkbox" id="anon"> Ask anonymously</label>
  <button class="btn" data-a="ask">SEND QUESTION</button>
  <div class="seg" style="margin-top:22px"><button data-sort="top" aria-pressed="${S.qaSort==="top"}">Most popular</button><button data-sort="new" aria-pressed="${S.qaSort==="new"}">Newest</button></div>
  <div class="list">${qs.length?qs.map(q=>`<div class="q"><button class="up" data-up="${q.id}" aria-pressed="${S.myVotes.has(q.id)}" aria-label="Upvote">${I.up}${q.votes}</button><div style="flex:1"><div>${esc(q.body)}</div><div class="small muted">${esc(q.author_name)}${q.answered?' <span class="pill ok">Answered</span>':""}</div></div></div>`).join(""):`<div class="q"><span class="muted">No questions yet. Be the first to ask.</span></div>`}</div>`}

function Engage(){const g=S.playSeg;return `<h1 class="page-title">Engage</h1><p class="tag">Join in live</p><div style="height:14px"></div>
  <div class="seg"><button data-seg="photos" aria-pressed="${g==="photos"}">Photos</button><button data-seg="poll" aria-pressed="${g==="poll"}">Poll</button><button data-seg="cloud" aria-pressed="${g==="cloud"}">Words</button><button data-seg="quiz" aria-pressed="${g==="quiz"}">Trivia</button></div>
  ${g==="photos"?Photos():g==="poll"?Poll():g==="cloud"?Cloud():Quiz()}`}
function Photos(){return `<label class="upl" for="pfile">${I.cam}<b>Take or upload a photo</b><span class="small muted">Share your AudConnect moments. The best ones appear on the big screen.</span></label>
  <input id="pfile" type="file" accept="image/*" style="position:absolute;left:-9999px" aria-label="Choose a photo">
  <p class="small muted" style="margin:12px 0;text-align:center">Posting elsewhere too? Tag <b style="color:#fff">#AudConnect2026</b></p>
  <div class="feed">${S.photos.map(p=>`<div class="post"><img src="${photoSrc(p)}" alt="${esc(p.caption||"Event photo")}" loading="lazy"><div class="meta">
  <div style="display:flex;justify-content:space-between;align-items:center;gap:10px"><b>${esc(p.author_name)}</b><button class="like" data-like="${p.id}" aria-pressed="${S.myLikes.has(p.id)}" aria-label="Like">${I.heart}${S.likes[p.id]||0}</button></div>
  ${p.caption?`<p class="small" style="margin:6px 0 0">${esc(p.caption)}</p>`:""}</div></div>`).join("")}</div>`}
function PhotoCompose(){return `<img src="${S._pendingUrl}" alt="" style="width:100%;max-height:50vh;object-fit:contain;border-radius:12px;background:#000">
  <label class="lbl" for="pcap">Caption (optional)</label><input id="pcap" class="field" maxlength="120" placeholder="Say something about this moment">
  <p class="small muted" style="margin-top:10px">Photos are visible to everyone at the event. Please ask before posting photos of others.</p>
  <button class="btn" data-a="postphoto" id="pbtn">POST PHOTO</button>`}
function Poll(){const t=S.pollCounts.reduce((a,b)=>a+b,0),vt=S.myPoll!==null||!S.stage.poll_open;return `<div class="box"><p style="font-weight:800;font-size:17px">${esc(POLL.q)}</p><p class="small muted">${t} vote${t===1?"":"s"} so far.${S.stage.poll_open?" Results show on the big screen.":" Voting is closed."}</p>
  ${POLL.o.map((o,i)=>{const pc=t?Math.round(S.pollCounts[i]/t*100):0;return `<button class="opt" data-poll="${i}" aria-pressed="${S.myPoll===i}" ${vt?"disabled":""}>${vt?`<i class="fill" style="width:${pc}%"></i>`:""}<span style="display:flex;justify-content:space-between"><span>${esc(o)}${S.myPoll===i?" ✓":""}</span>${vt?`<strong>${pc}%</strong>`:""}</span></button>`}).join("")}</div>`}
function wordCounts(){const c={};S.words.forEach(w=>{const k=w.charAt(0).toUpperCase()+w.slice(1).toLowerCase();c[k]=(c[k]||0)+1});return Object.entries(c).sort((a,b)=>b[1]-a[1]).slice(0,40)}
function cloudHtml(big){const e=wordCounts();if(!e.length)return `<span class="muted" style="font-size:${big?24:14}px">Be the first to add a word</span>`;const mx=e[0][1];const c=["var(--red-t)","#fff","var(--grey)"];
  return e.map(([w,n],i)=>`<span style="font-size:${14+Math.round(n/mx*(big?52:26))}px;color:${c[i%3]}">${esc(w)}</span>`).join("")}
function Cloud(){return `<div class="box"><p style="font-weight:800;font-size:17px">${CLOUD_Q}</p><div class="cloud">${cloudHtml()}</div>
  ${S.myWord?`<p class="small muted" style="text-align:center">You added "${esc(S.myWord)}". Watch for it on the big screen.</p>`:S.stage.cloud_open?`<div style="display:flex;gap:8px"><input id="wd" class="field" maxlength="18" placeholder="One word"><button class="btn" style="width:auto" data-a="word">ADD</button></div>`:`<p class="small muted" style="text-align:center">The word cloud is closed.</p>`}</div>`}
function Quiz(){
  const myName=S.me.fn+" "+(S.me.ln||"").charAt(0)+".";
  const lb=`<div class="rule-h">Leaderboard</div><div class="list">${S.board.length?S.board.map((r,i)=>`<div class="lb ${r.display_name===myName&&S.myTrivia!=null?"me":""}"><span class="r">${i+1}</span><span style="flex:1;font-weight:700">${esc(r.display_name)}</span><strong>${r.score}</strong></div>`).join(""):`<div class="lb"><span class="muted">No scores yet</span></div>`}</div><p class="small muted" style="margin-top:10px">Top scorers are announced at the closing. Fastest time breaks a tie.</p>`;
  if(S.myTrivia!=null)return `<div class="box" style="text-align:center"><p class="tag">Your score</p><div style="font-size:60px;font-weight:900;line-height:1">${S.myTrivia}/${TRIVIA.length}</div></div>${lb}`;
  const t=S.trivia,q=TRIVIA[t.i];return `<div class="box"><p class="tag">Question ${t.i+1} of ${TRIVIA.length}</p><p style="font-weight:800;font-size:17px;margin:6px 0 12px">${esc(q.q)}</p>
  ${q.o.map((o,i)=>{let c="";if(t.picked!==null){if(i===q.a)c="right";else if(i===t.picked)c="wrong"}return `<button class="opt ${c}" data-ans="${i}" ${t.picked!==null?"disabled":""}><span>${esc(o)}</span></button>`}).join("")}
  ${t.picked!==null?`<button class="btn" data-a="next">${t.i+1<TRIVIA.length?"NEXT QUESTION":"SEE MY SCORE"}</button>`:""}</div>${lb}`}

function Rate(id){const s=SESSIONS.find(x=>x.id===id);const r=S.ratings[id]||{};return `<span class="sess-title" style="font-size:17px">${esc(s.title)}</span>
  <p class="small muted" style="margin-top:10px">How useful was this for your practice?</p>
  <div class="stars">${[1,2,3,4,5].map(n=>`<button class="star ${r.stars>=n?"on":""}" data-star="${n}" data-sid="${id}" aria-label="${n} star${n>1?"s":""}">${I.star}</button>`).join("")}</div>
  <label class="lbl" for="rc">Anything the speaker should know? (optional)</label><textarea id="rc" class="field" rows="3">${esc(r.comment||"")}</textarea>
  <div style="height:12px"></div><button class="btn" data-a="saverate" data-sid="${id}" id="rsave" ${r.stars?"":"disabled"}>SAVE RATING</button>`}

function FB(){const done=rateable().filter(s=>S.ratings[s.id]).length;return `<h1 class="page-title">Feedback</h1><p class="tag">Help shape AudConnect 2027</p>
  <p class="muted" style="margin-top:12px">Rate each session and the event. Completing the event feedback unlocks your attendance certificate.</p>
  <div class="rule-h">Sessions</div><div class="list">${rateable().map(s=>`<button class="item" data-rate="${s.id}"><span class="num" style="font-size:20px;min-width:30px">${s.n||"P"}</span><span style="flex:1;font-weight:700;font-size:14px">${esc(s.title)}</span>${S.ratings[s.id]?`<span class="pill ok">${S.ratings[s.id].stars} ★</span>`:'<span class="pill">Rate</span>'}</button>`).join("")}</div>
  <p class="small muted" style="margin-top:8px">${done} of ${rateable().length} rated</p>
  <div class="rule-h">The Event</div>
  ${S.feedback?`<div class="box"><span class="pill ok">Thank you</span><p style="margin-top:10px">Your feedback is in. Your certificate is ready in the Me tab.</p></div>`:
  `<div class="box"><label class="lbl" style="margin-top:0">How likely are you to recommend AudConnect to a colleague?</label>
  <div class="nps">${[...Array(11).keys()].map(n=>`<button data-nps="${n}" aria-pressed="${S.nps===n}">${n}</button>`).join("")}</div>
  <div class="small muted" style="display:flex;justify-content:space-between;margin-top:4px"><span>Not likely</span><span>Very likely</span></div>
  <label class="lbl" for="f1">What topic should we cover next year?</label><input id="f1" class="field" maxlength="300">
  <label class="lbl" for="f2">Anything we should do differently?</label><textarea id="f2" class="field" rows="3" maxlength="1000"></textarea>
  <div style="height:14px"></div><button class="btn" data-a="overall">SUBMIT FEEDBACK</button></div>`}`}

function Me(){const m=S.me;return `<h1 class="page-title">My Badge</h1><div style="height:14px"></div>
  <div class="badge"><div class="band"><img class="logo-img" src="${IMG.logo}" alt="">AUDCONNECT 2026</div><div class="body">
  <div class="nm">${esc(m.fn)}<br>${esc(m.ln)}</div><p class="muted" style="margin-top:8px">${esc(m.co)}</p>
  <p style="margin-top:12px"><span class="pill">${m.member==="yes"?"SAPS Member":"Guest"}</span> ${S.committee?'<span class="pill">Organiser</span> ':""}<span class="pill ok">Checked in</span></p></div></div>
  <div class="rule-h">Certificate</div>
  ${S.feedback?`<button class="btn" data-a="cert">VIEW CERTIFICATE</button>`:`<div class="box"><p class="small">Unlocks when you submit the event feedback.</p><button class="btn ghost" data-tab="fb">GO TO FEEDBACK</button></div>`}
  <div class="rule-h">Organisers</div>${S.committee?`<button class="btn" data-a="admin">OPEN ORGANISER DASHBOARD</button>`:`<button class="btn" data-a="orgcode">ORGANISER ONLY</button><p class="small muted" style="margin-top:8px">For the SAPS committee. You'll need the organiser code.</p>`}
  <div style="height:18px"></div><button class="btn ghost" data-a="signout">NOT YOU? CHECK IN AS SOMEONE ELSE</button>`}

function OrgCode(){return `<h2 style="margin-top:0;font-weight:900;text-transform:uppercase">Organiser only</h2>
  <p class="small muted">Enter the organiser code from the SAPS committee.</p>
  <label class="lbl" for="oc">Organiser code</label><input id="oc" class="field" autocomplete="off" autocapitalize="characters" spellcheck="false">
  <div style="height:14px"></div><button class="btn" data-a="unlock" id="obtn">UNLOCK</button>`}
/* ============ Stage screen (LED wall) ============ */
function Stage(){const v=S.stageLocal||S.stage.view;let body="";
  if(v==="poll"){const t=S.pollCounts.reduce((a,b)=>a+b,0);body=`<h3>${esc(POLL.q)}</h3>${POLL.o.map((o,i)=>{const pc=t?Math.round(S.pollCounts[i]/t*100):0;return `<div class="srow"><div class="lab"><span>${esc(o)}</span><span>${pc}%</span></div><div class="bar"><i style="width:${pc}%"></i></div></div>`}).join("")}<p class="muted">${t} votes</p>`}
  if(v==="cloud")body=`<h3>${CLOUD_Q}</h3><div class="cloud" style="gap:10px 28px">${cloudHtml(true)}</div>`;
  if(v==="qa"){const s=nowSession();const sid=s&&s.rate?s.id:S.qaSession;const ss=SESSIONS.find(x=>x.id===sid);const pin=S.q.find(q=>q.id===S.stage.pinned_question);const qs=pin?[pin]:S.q.filter(q=>q.session_id===sid&&!q.answered).sort((a,b)=>b.votes-a.votes).slice(0,4);body=`<h3>${pin?"Now answering":"Top questions"}<br><span style="font-size:.5em;color:var(--red-t)">${esc(pin?SESSIONS.find(x=>x.id===pin.session_id).title:ss.title)}</span></h3>${qs.map(q=>`<div class="sq"><b>${q.votes}</b><span>${esc(q.body)}</span></div>`).join("")||"<p>No questions yet</p>"}`}
  if(v==="photos"){const ps=S.photos.slice(0,6);body=`<h3>Photo wall <span style="font-size:.5em;color:var(--red-t)">#AudConnect2026</span></h3><div class="wall">${ps.map(p=>`<figure><img src="${photoSrc(p)}" alt=""><figcaption>${esc(p.author_name)}</figcaption></figure>`).join("")}</div>`}
  if(v==="lb"){body=`<h3>Trivia leaderboard</h3>${S.board.map((r,i)=>`<div class="sq"><b>${i+1}</b><span style="flex:1">${esc(r.display_name)}</span><span>${r.score}</span></div>`).join("")||"<p>No scores yet</p>"}`}
  $("#stage").innerHTML=`<div class="hd"><div class="logo-row"><img class="logo-img" style="width:48px;height:48px" src="${IMG.logo}" alt=""><div class="wordmark">AUDCONNECT 2026<b>NEXTGEN AUDIOLOGY</b></div></div><span class="muted" style="font-weight:600">Join in at audconnect2026.com</span></div>
  <div class="main">${body}</div><div class="ctl">${[["photos","Photos"],["poll","Poll"],["cloud","Word cloud"],["qa","Questions"],["lb","Leaderboard"]].map(([k,l])=>`<button data-stage="${k}" aria-pressed="${v===k}">${l}</button>`).join("")}<button data-a="stageclose">Exit</button></div>`}

/* ============ Organiser dashboard (SAPSADMIN check in only) ============ */
function Admin(){const t=S.adTab;const tabs=[["over","Overview"],["qa","Q&A"],["eng","Engage"],["fb","Feedback"],["att","Attendees"]];
  return `<div class="app"><header class="top"><div class="logo-row"><img class="logo-img" src="${IMG.logo}" alt=""><div class="wordmark">AUDCONNECT 2026<b>ORGANISER</b></div></div><button class="hdr-btn" data-a="adexit">Exit</button></header>
  <main><div class="seg" style="margin-top:14px;overflow-x:auto">${tabs.map(([k,l])=>`<button data-adtab="${k}" aria-pressed="${t===k}">${l}</button>`).join("")}</div>
  ${S.ad?{over:AdOver,qa:AdQA,eng:AdEng,fb:AdFB,att:AdAtt}[t]():'<p class="muted">Loading...</p>'}</main></div>`}
function AdOver(){const A=S.ad.attendees,n=A.length,mem=A.filter(a=>a.saps_member).length,now=nowSession();
  const byCo={};A.forEach(a=>byCo[a.company]=(byCo[a.company]||0)+1);const top=Object.entries(byCo).sort((a,b)=>b[1]-a[1]).slice(0,6);const mx=top.length?top[0][1]:1;
  const pv=S.ad.poll_votes.filter(v=>v.poll_id===POLL.id).length;
  return `<div class="kpis"><div class="kpi red"><div class="v">${n}</div><div class="l">Checked in</div></div>
  <div class="kpi"><div class="v">${S.ad.feedback.length}</div><div class="l">Feedback forms</div></div>
  <div class="kpi"><div class="v">${mem}</div><div class="l">SAPS members</div></div><div class="kpi"><div class="v">${n-mem}</div><div class="l">Guests</div></div>
  <div class="kpi"><div class="v">${S.ad.questions.filter(q=>!q.hidden).length}</div><div class="l">Questions asked</div></div><div class="kpi"><div class="v">${pv}</div><div class="l">Poll votes</div></div></div>
  ${now?`<div class="rule-h">Now</div><div class="redbox"><span class="small" style="font-weight:800;letter-spacing:.08em"><span class="dot"></span>ON STAGE</span><span class="sess-title" style="margin-top:6px">${esc(now.title)}</span><span class="small muted">${esc(now.by||"")}</span></div>`:""}
  <div class="rule-h">Stage Screen</div><div class="box"><p class="small muted">Choose what the LED wall shows. Open the stage screen on the laptop connected to the LED wall.</p>
  <div class="acts">${[["photos","Photo wall"],["poll","Poll results"],["cloud","Word cloud"],["qa","Top questions"],["lb","Leaderboard"]].map(([k,l])=>`<button class="act ${S.stage.view===k?"on":""}" data-adstage="${k}">${l}</button>`).join("")}</div>
  <div style="height:12px"></div><button class="btn" data-a="stage">OPEN STAGE SCREEN</button></div>
  <div class="rule-h">Who's Here</div><div class="box">${top.length?top.map(([c,v])=>`<div style="margin-bottom:10px"><div class="small" style="display:flex;justify-content:space-between"><span>${esc(c)}</span><b>${v}</b></div><div class="hbar"><i style="width:${v/mx*100}%"></i></div></div>`).join(""):'<span class="muted small">No check ins yet</span>'}</div>`}
function AdQA(){const qs=S.ad.questions.filter(q=>q.session_id===S.qaSession).sort((a,b)=>(a.answered-b.answered)||b.votes-a.votes);const pin=S.stage.pinned_question;
  return `<label class="lbl" for="aqs" style="margin-top:0">Session</label><select id="aqs" class="field">${rateable().map(s=>`<option value="${s.id}" ${s.id===S.qaSession?"selected":""}>${s.n?s.n+"  ":""}${esc(s.title)} (${S.ad.questions.filter(q=>q.session_id===s.id&&!q.hidden).length})</option>`).join("")}</select>
  <p class="small muted" style="margin-top:10px">Ranked by upvotes. Put the best one on screen, then mark it answered once the speaker responds.</p>
  <div class="list">${qs.length?qs.map(q=>`<div class="q" style="${q.hidden?"opacity:.4":""}"><div class="up" style="cursor:default">${I.up}${q.votes}</div><div style="flex:1"><div>${esc(q.body)}</div><div class="small muted">${esc(q.author_name)}${q.answered?' <span class="pill ok">Answered</span>':""}${pin===q.id?' <span class="pill">On screen</span>':""}${q.hidden?' <span class="pill" style="background:#555">Hidden</span>':""}</div>
  <div class="acts"><button class="act ${pin===q.id?"on":""}" data-pin="${q.id}">${pin===q.id?"Remove from screen":"Show on screen"}</button><button class="act" data-ans2="${q.id}" data-v="${!q.answered}">${q.answered?"Mark unanswered":"Mark answered"}</button><button class="act" data-hide="${q.id}" data-v="${!q.hidden}">${q.hidden?"Unhide":"Hide"}</button></div></div></div>`).join(""):`<div class="q"><span class="muted">No questions for this session yet.</span></div>`}</div>`}
function AdEng(){const t=S.pollCounts.reduce((a,b)=>a+b,0);
  return `<div class="rule-h" style="margin-top:6px">Photos</div><div class="box"><p class="small muted">Hide anything unsuitable. Hidden photos disappear from phones and the big screen.</p>
  <div class="thumbs">${S.ad.photos.map(p=>`<div class="thumb" style="${p.hidden?"opacity:.35":""}"><img src="${photoSrc(p)}" alt="" loading="lazy"><button class="act ${p.hidden?"":"on"}" data-hidephoto="${p.id}" data-v="${!p.hidden}">${p.hidden?"Unhide":"Hide"}</button></div>`).join("")||'<span class="muted small">No photos yet</span>'}</div>
  <div class="acts" style="margin-top:12px"><button class="act" data-adstage="photos">Show photo wall on screen</button></div></div>
  <div class="rule-h">Live Poll</div><div class="box"><p style="font-weight:800">${esc(POLL.q)}</p>
  ${POLL.o.map((o,i)=>{const pc=t?Math.round(S.pollCounts[i]/t*100):0;return `<div style="margin-bottom:8px"><div class="small" style="display:flex;justify-content:space-between"><span>${esc(o)}</span><b>${S.pollCounts[i]} (${pc}%)</b></div><div class="hbar"><i style="width:${pc}%"></i></div></div>`}).join("")}
  <div class="acts"><button class="act ${S.stage.poll_open?"on":""}" data-a="togpoll">${S.stage.poll_open?"Voting open":"Voting closed"}</button><button class="act" data-adstage="poll">Show on screen</button></div></div>
  <div class="rule-h">Word Cloud</div><div class="box"><p class="small muted">Tap a word to hide it if it's inappropriate.</p>
  <div class="acts">${S.ad.words.map(w=>`<button class="act" style="${w.hidden?"opacity:.4;text-decoration:line-through":""}" data-hideword="${w.id}" data-v="${!w.hidden}">${esc(w.word)} ${w.hidden?"↺":"✕"}</button>`).join("")||'<span class="muted small">No words yet</span>'}</div>
  <div class="acts" style="margin-top:12px"><button class="act ${S.stage.cloud_open?"on":""}" data-a="togcloud">${S.stage.cloud_open?"Accepting words":"Closed"}</button><button class="act" data-adstage="cloud">Show on screen</button></div></div>
  <div class="rule-h">Trivia</div><div class="box"><p class="small muted">Winners are announced at the Excellence Award segment.</p>
  <div class="acts"><button class="act" data-adstage="lb">Show leaderboard on screen</button></div></div>`}
function AdFB(){const sc=S.ad.feedback.map(f=>f.nps);const pro=sc.filter(x=>x>=9).length,det=sc.filter(x=>x<=6).length;const nps=sc.length?Math.round((pro-det)/sc.length*100):null;
  const R={};S.ad.ratings.forEach(r=>{(R[r.session_id]=R[r.session_id]||[]).push(r)});
  const comments=[...S.ad.feedback.flatMap(f=>[f.improve,f.next_topic?"Next year: "+f.next_topic:null]),...S.ad.ratings.map(r=>r.comment?(SESSIONS.find(s=>s.id===r.session_id)||{}).n?`Talk ${SESSIONS.find(s=>s.id===r.session_id).n}: ${r.comment}`:`Panel: ${r.comment}`:null)].filter(Boolean).slice(0,40);
  return `<div class="kpis"><div class="kpi red"><div class="v">${nps==null?"–":(nps>0?"+":"")+nps}</div><div class="l">Net Promoter Score</div></div><div class="kpi"><div class="v">${sc.length}</div><div class="l">Event feedback forms</div></div></div>
  <div class="rule-h">Session Ratings</div><div class="list">${rateable().map(s=>{const rs=R[s.id]||[];const avg=rs.length?rs.reduce((a,r)=>a+r.stars,0)/rs.length:0;
    return `<div class="item"><span class="num" style="font-size:20px;min-width:30px">${s.n||"P"}</span><span style="flex:1"><b style="display:block;font-size:13px">${esc(s.title)}</b><span class="small muted">${rs.length?rs.length+" rating"+(rs.length>1?"s":""):"Not rated yet"}</span></span>${rs.length?`<b style="color:var(--gold)">${avg.toFixed(1)} ★</b>`:""}</div>`}).join("")}</div>
  <div class="rule-h">Comments</div><div class="list">${comments.map(c=>`<div class="item small">${esc(c)}</div>`).join("")||'<div class="item small muted">No comments yet</div>'}</div>
  <div style="height:14px"></div><button class="btn ghost" data-a="exportfb">EXPORT FEEDBACK (CSV)</button>`}
function AdAtt(){const q=S.attQ.toLowerCase();const list=S.ad.attendees.filter(a=>!q||(a.first_name+" "+a.last_name+" "+a.company).toLowerCase().includes(q));
  const tm=d=>new Date(d).toLocaleTimeString("en-SG",{timeZone:"Asia/Singapore",hour:"numeric",minute:"2-digit"});
  return `<input id="attq" class="field" placeholder="Search name or company" value="${esc(S.attQ)}" aria-label="Search attendees">
  <p class="small muted" style="margin:10px 0">${list.length} checked in</p>
  <div class="list"><table class="tbl">${list.slice(0,60).map(a=>`<tr><td><b>${esc(a.first_name)} ${esc(a.last_name)}</b><br><span class="muted">${esc(a.company)}</span></td><td style="text-align:right;white-space:nowrap"><span class="pill ${a.saps_member?"":"ok"}">${a.saps_member?"Member":"Guest"}</span><br><span class="muted small">${tm(a.checked_in_at)}</span></td></tr>`).join("")||'<tr><td class="muted">No check ins yet</td></tr>'}</table></div>
  ${list.length>60?`<p class="small muted" style="margin-top:8px">Showing 60 of ${list.length}. Search to find someone.</p>`:""}
  <div style="height:14px"></div><button class="btn ghost" data-a="exportatt">EXPORT ATTENDANCE (CSV)</button>
  <p class="small muted" style="margin-top:10px">Use the attendance export for CPE point records. Walk ins can check in on any phone at the desk.</p>`}

function downloadCSV(name,rows){const csv=rows.map(r=>r.map(v=>`"${String(v??"").replace(/"/g,'""')}"`).join(",")).join("\r\n");
  const a=document.createElement("a");a.href=URL.createObjectURL(new Blob(["\ufeff"+csv],{type:"text/csv"}));a.download=name;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},500)}

/* ============ Render ============ */
function render(){
  if(S.admin){$("#root").innerHTML=Admin();const a=$("#aqs");if(a)a.onchange=e=>{S.qaSession=e.target.value;render()};const aq=$("#attq");if(aq)aq.oninput=e=>{S.attQ=e.target.value;const p=e.target.selectionStart;render();const n=$("#attq");n.focus();n.setSelectionRange(p,p)};return}
  if(!S.me){$("#root").innerHTML=`<div class="app" style="padding-bottom:0">${Register()}</div>`;return}
  const tabs={prog:["Programme",Prog],qa:["Q&A",QA],play:["Engage",Engage],fb:["Feedback",FB],me:["Me",Me]};
  $("#root").innerHTML=`<div class="app"><header class="top"><div class="logo-row"><img class="logo-img" src="${IMG.logo}" alt="SAPS"><div class="wordmark">AUDCONNECT 2026<b>NEXTGEN AUDIOLOGY</b></div></div><button class="hdr-btn" data-tab="me">${esc(S.me.fn)}</button></header><main>${tabs[S.tab][1]()}</main></div>
  <nav class="tabs" aria-label="Main"><div class="in">${Object.entries(tabs).map(([k,[l]])=>`<button data-tab="${k}" ${S.tab===k?'aria-current="page"':""}>${I[k]}${l}</button>`).join("")}</div></nav>`;
  const qs=$("#qs");if(qs)qs.onchange=e=>{S.qaSession=e.target.value;render()};
}
const keepReg=()=>{const g=id=>{const el=$("#"+id);return el?el.value:""};S.reg.fn=g("fn");S.reg.ln=g("ln");S.reg.co=g("co")};
async function act(fn,args,ok){try{await rpc(fn,args);if(ok)toast(ok)}catch(e){toast(errMsg(e))}await loadPublic().catch(()=>{});render()}
async function adminAct(fn,args,ok){try{await rpc(fn,{p_token:S.token,...args});if(ok)toast(ok)}catch(e){toast(errMsg(e))}await Promise.all([loadPublic(),loadAdmin()]).catch(()=>{});render();renderStageIfOpen()}

document.addEventListener("click",async e=>{
  const b=e.target.closest("button");if(!b)return;const d=b.dataset;
  if(d.tab){S.tab=d.tab;close();render();scrollTo(0,0);return}
  if(d.mem){keepReg();S.reg.member=d.mem;render();return}
  if(d.sess){sheet(Sess(d.sess));return}
  if(d.spk){sheet(Spk(d.spk));return}
  if(d.qa){S.qaSession=d.qa;S.tab="qa";close();render();scrollTo(0,0);return}
  if(d.rate){sheet(Rate(d.rate));return}
  if(d.star){S._draft={id:d.sid,stars:+d.star};$("#sheet").querySelectorAll(".star").forEach((s,i)=>s.classList.toggle("on",i<+d.star));$("#rsave").disabled=false;return}
  if(d.sort){S.qaSort=d.sort;render();return}
  if(d.up){const id=+d.up;const had=S.myVotes.has(id);had?S.myVotes.delete(id):S.myVotes.add(id);const q=S.q.find(x=>x.id===id);if(q)q.votes+=had?-1:1;render();
    try{await rpc("toggle_question_vote",{p_token:S.token,p_question:id})}catch(x){toast(errMsg(x))}return}
  if(d.seg){S.playSeg=d.seg;render();return}
  if(d.like){const id=+d.like;const had=S.myLikes.has(id);had?S.myLikes.delete(id):S.myLikes.add(id);S.likes[id]=(S.likes[id]||0)+(had?-1:1);render();
    try{await rpc("toggle_photo_like",{p_token:S.token,p_photo:id})}catch(x){toast(errMsg(x))}return}
  if(d.poll){const i=+d.poll;S.myPoll=i;S.pollCounts[i]++;render();try{await rpc("cast_poll_vote",{p_token:S.token,p_poll:POLL.id,p_option:i});toast("Vote in")}catch(x){S.myPoll=null;toast(errMsg(x))}await loadPublic().catch(()=>{});render();return}
  if(d.ans){S.trivia.picked=+d.ans;if(+d.ans===TRIVIA[S.trivia.i].a)S.trivia.score++;render();return}
  if(d.nps){S.nps=+d.nps;document.querySelectorAll("[data-nps]").forEach(x=>x.setAttribute("aria-pressed",+x.dataset.nps===S.nps));return}
  if(d.stage){if(S.committee){S.stageLocal=null;await adminAct("admin_set_stage",{p_view:d.stage,p_pinned:null,p_poll_open:null,p_cloud_open:null})}else{S.stageLocal=d.stage;Stage()}return}
  if(d.adtab){S.adTab=d.adtab;render();scrollTo(0,0);return}
  if(d.adstage){await adminAct("admin_set_stage",{p_view:d.adstage,p_pinned:null,p_poll_open:null,p_cloud_open:null},"Stage screen updated");return}
  if(d.pin){const id=+d.pin;const on=S.stage.pinned_question===id;await adminAct("admin_set_stage",on?{p_view:null,p_pinned:null,p_poll_open:null,p_cloud_open:null,p_clear_pin:true}:{p_view:"qa",p_pinned:id,p_poll_open:null,p_cloud_open:null});return}
  if(d.ans2){const id=+d.ans2,v=d.v==="true";if(v&&S.stage.pinned_question===id)await rpc("admin_set_stage",{p_token:S.token,p_view:null,p_pinned:null,p_poll_open:null,p_cloud_open:null,p_clear_pin:true}).catch(()=>{});await adminAct("admin_update_question",{p_id:id,p_answered:v,p_hidden:null});return}
  if(d.hide){await adminAct("admin_update_question",{p_id:+d.hide,p_answered:null,p_hidden:d.v==="true"});return}
  if(d.hidephoto){await adminAct("admin_set_hidden",{p_kind:"photo",p_id:+d.hidephoto,p_hidden:d.v==="true"});return}
  if(d.hideword){await adminAct("admin_set_hidden",{p_kind:"word",p_id:+d.hideword,p_hidden:d.v==="true"});return}
  switch(d.a){
    case "checkin":{keepReg();const r=S.reg;
      if(!r.fn.trim()){toast("Add your first name");return}if(!r.ln.trim()){toast("Add your last name");return}
      if(!r.member){toast("Tell us if you're a SAPS member");return}if(!r.co.trim()){toast("Add your company");return}
      S.busy=true;render();
      try{const res=await rpc("check_in",{p_first:r.fn,p_last:r.ln,p_company:r.co,p_member:r.member==="yes"});
        S.token=res.token;try{localStorage.setItem("ac26_token",S.token)}catch(x){}
        await loadMine();S.busy=false;S.tab="prog";render();scrollTo(0,0);
        toast(res.returning?`Welcome back, ${res.first_name}`:"You're checked in. Enjoy lunch!")}
      catch(x){S.busy=false;render();toast(errMsg(x))}break}
    case "showform":S.showForm=true;render();scrollTo(0,0);rpc("company_suggestions",{}).then(c=>{S.cos=c||[];const dl=$("#cos");if(dl)dl.innerHTML=S.cos.map(v=>`<option value="${esc(v)}">`).join("")}).catch(()=>{});setTimeout(()=>{const f=$("#fn");f&&f.focus()},50);break;
    case "hideform":keepReg();S.showForm=false;render();break;
    case "close":close();break;
    case "signout":try{localStorage.removeItem("ac26_token")}catch(x){}location.reload();break;
    case "ask":{const t=$("#qt").value.trim();if(t.length<5){toast("Type your question first");return}b.disabled=true;
      try{const id=await rpc("ask_question",{p_token:S.token,p_session:S.qaSession,p_body:t,p_anonymous:$("#anon").checked});S.myVotes.add(id);S.myQs.add(id);S.qaSort="new";toast("Question sent")}catch(x){toast(errMsg(x))}
      await loadPublic().catch(()=>{});render();break}
    case "word":{const w=($("#wd").value||"").trim().split(/\s+/)[0];if(!w){toast("Type one word");return}b.disabled=true;
      try{await rpc("add_word",{p_token:S.token,p_word:w.slice(0,18)});S.myWord=w}catch(x){toast(errMsg(x))}await loadPublic().catch(()=>{});render();break}
    case "next":{const t=S.trivia;if(t.i+1<TRIVIA.length){t.i++;t.picked=null;render()}else{try{await rpc("submit_trivia",{p_token:S.token,p_score:t.score});S.myTrivia=t.score}catch(x){toast(errMsg(x))}await loadPublic().catch(()=>{});render()}break}
    case "saverate":{const dr=S._draft||{id:d.sid,stars:(S.ratings[d.sid]||{}).stars};if(!dr.stars)return;const c=$("#rc").value.trim();b.disabled=true;
      try{await rpc("rate_session",{p_token:S.token,p_session:dr.id,p_stars:dr.stars,p_comment:c});S.ratings[dr.id]={stars:dr.stars,comment:c};S._draft=null;close();render();toast("Rating saved")}catch(x){b.disabled=false;toast(errMsg(x))}break}
    case "overall":{if(S.nps==null){toast("Pick a score from 0 to 10");return}b.disabled=true;
      try{await rpc("submit_feedback",{p_token:S.token,p_nps:S.nps,p_topic:$("#f1").value,p_improve:$("#f2").value});S.feedback={nps:S.nps};render();toast("Thank you! Certificate unlocked")}catch(x){b.disabled=false;toast(errMsg(x))}break}
    case "postphoto":{const pb=$("#pbtn");pb.disabled=true;pb.textContent="UPLOADING...";
      try{const path=`uploads/${(crypto.randomUUID?crypto.randomUUID():Date.now()+"-"+Math.random().toString(36).slice(2))}.jpg`;
        const up=await sb.storage.from("photos").upload(path,S._pendingBlob,{contentType:"image/jpeg"});if(up.error)throw up.error;
        await rpc("add_photo",{p_token:S.token,p_path:path,p_caption:$("#pcap").value});
        S._pendingBlob=null;close();await loadPublic();render();scrollTo(0,0);toast("Photo posted")}
      catch(x){pb.disabled=false;pb.textContent="POST PHOTO";toast(errMsg(x))}break}
    case "cert":sheet(Cert());break;
    case "orgcode":sheet(OrgCode());setTimeout(()=>{const f=$("#oc");f&&f.focus()},50);break;
    case "unlock":{const code=($("#oc").value||"").trim();if(!code){toast("Enter the organiser code");return}b.disabled=true;
      try{const ok=await rpc("unlock_organiser",{p_token:S.token,p_code:code});
        if(ok){S.committee=true;close();S.admin=true;S.adTab="over";render();scrollTo(0,0);toast("Organiser access unlocked");await loadAdmin().catch(()=>{});render()}
        else{b.disabled=false;toast("That code isn't right")}}
      catch(x){b.disabled=false;toast(/too many/i.test((x&&x.message)||"")?"Too many attempts. Ask the committee for help":errMsg(x))}break}
    case "stage":S.stageLocal=null;await loadAdmin().catch(()=>{});Stage();$("#stage").classList.add("open");try{document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen()}catch(x){}break;
    case "stageclose":$("#stage").classList.remove("open");try{document.fullscreenElement&&document.exitFullscreen()}catch(x){}break;
    case "admin":S.admin=true;S.adTab="over";render();scrollTo(0,0);try{await loadAdmin()}catch(x){toast(errMsg(x))}render();break;
    case "adexit":S.admin=false;render();scrollTo(0,0);break;
    case "togpoll":await adminAct("admin_set_stage",{p_view:null,p_pinned:null,p_poll_open:!S.stage.poll_open,p_cloud_open:null});break;
    case "togcloud":await adminAct("admin_set_stage",{p_view:null,p_pinned:null,p_poll_open:null,p_cloud_open:!S.stage.cloud_open});break;
    case "exportatt":downloadCSV("audconnect2026-attendance.csv",[["First name","Last name","Company","SAPS member","Checked in (SGT)"],...S.ad.attendees.map(a=>[a.first_name,a.last_name,a.company,a.saps_member?"Yes":a.saps_member===false?"No":"",new Date(a.checked_in_at).toLocaleString("en-SG",{timeZone:"Asia/Singapore"})])]);break;
    case "exportfb":downloadCSV("audconnect2026-feedback.csv",[["Type","Session","Score","Comment","Next year topic"],...S.ad.feedback.map(f=>["Event","",f.nps,f.improve,f.next_topic]),...S.ad.ratings.map(r=>["Session",(SESSIONS.find(s=>s.id===r.session_id)||{}).title||r.session_id,r.stars,r.comment,""])]);break;
  }
});
document.addEventListener("change",e=>{if(e.target.id!=="pfile"||!e.target.files[0])return;const f=e.target.files[0];const rd=new FileReader();
  rd.onload=()=>{const im=new Image();im.onload=()=>{const m=1600,sc=Math.min(1,m/Math.max(im.width,im.height));const c=document.createElement("canvas");c.width=Math.round(im.width*sc);c.height=Math.round(im.height*sc);c.getContext("2d").drawImage(im,0,0,c.width,c.height);
    c.toBlob(bl=>{if(!bl){toast("That photo couldn't be prepared");return}S._pendingBlob=bl;S._pendingUrl=c.toDataURL("image/jpeg",.6);sheet(PhotoCompose())},"image/jpeg",.82)};im.onerror=()=>toast("That file isn't a photo we can open");im.src=rd.result};rd.readAsDataURL(f);e.target.value=""});

/* ============ Start ============ */
(async function start(){
  render();
  try{await loadPublic()}catch(e){}
  if(S.token){try{await loadMine()}catch(e){if(/not checked in/i.test((e&&e.message)||"")){S.token=null;try{localStorage.removeItem("ac26_token")}catch(x){}}}}
  render();subscribe();
})();

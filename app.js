/* AudConnect 2026 app logic. Images live in index.html (window IMG). */
/* ============ Event content: edit this block to reuse the app next year ============ */
const EVENT={kicker:"AUDCONNECT 2026",theme:"Driving Efficiency, Enhancing Care",date:"10 October 2026",time:"12:30 to 6:00 PM",lunch:"Lunch from 12:30 to 2:00 PM",room:"Level 3, Room 300-302",venue:"Suntec Singapore",cpe:"Participation in this event is recognised with 4 CPE points under Pillar 1 of the SAPS CPE program.",host:"Society for Audiology Professionals Singapore"};
const SPEAKERS={
  sg:{name:"Dr. Sharad Govil",role:"President",org:"SAPS",bio:[]},
  ss:{name:"Sadrina Shah",role:"Host & Asst. Treas.",org:"SAPS",host:true,bio:[]},
  su:{name:"Su Junqiang",role:"Host & VP",org:"SAPS",host:true,bio:[]},
  jo:{name:"Jessica Ong",role:"Clinical Specialist",org:"Cochlear",bio:["Jessica holds a Master of Audiology and a Bachelor of Biomedical Science from the University of Auckland. With clinical experience across New Zealand and Singapore, she has extensive experience supporting patients with complex hearing loss and hearing implants. In her role with Cochlear, Jessica partners with clinicians and healthcare teams across the country to support cochlear implant services, foster strong clinical partnerships, and improve access to implantable hearing solutions and outcomes for people with significant hearing loss."]},
  rt:{name:"Renato Tan",role:"Business Development Manager",org:"Cochlear",bio:["Renato Tan completed his Master in Clinical Audiology at the University of Santo Tomas, Manila, in 2007. He moved to Singapore in 2010 to join Cochlear, helping Southeast Asian countries raise awareness of hearing implants and build local expertise. From 2017 he led Cochlear's Singapore team, working closely with hearing professionals and recipients. Since 2021 he has held a regional role for Cochlear's Acoustics portfolio, championing bone conduction solutions and meeting Baha recipients across seven countries. He will share how bone conduction technology has evolved to change many lives for the better."]},
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
const SPK_ORDER=["ss","su","sg","rh","ct","jo","tt","ls","fm","at","al","th","lz","rt"];
const POSTERS=[
  {id:"p1",title:"Reducing the Lead Time for Hearing Aid Appointments in Changi General Hospital",team:"Steven Lee Lock Hey, Hazel Yeo Kai Hui, Deng Jing, Lim Wei Ting, Tee Yi Siang, Wendy Teo Bing Yu, Justina Tan Yu Han, Rijwanna Parveen, Firza Achmed Anguilla, Sabrina Tan Chin Lynn, Katrina Balcos De Luna & Jocelyn Ng Hwee Ling",org:"Changi General Hospital",key:"Median wait for a hearing aid evaluation fell from 18 weeks to 8 weeks, and stayed there after the project ended.",img:"poster1.jpg",thumb:"poster1-thumb.jpg"},
  {id:"p2",title:"Introduction of Hearing Aid Service Drive Through (HAS-DT)",team:"Soo Ying Pei, Wong Geng Hui, Pang Wan Ngo & Winnie Ling Hoe Hui",org:"Alexandra Hospital, Allied Health Audiology",key:"Patients drop off faulty hearing aids without an appointment, freeing 56 appointment slots and saving 14 hours of staff time.",img:"poster2.jpg",thumb:"poster2-thumb.jpg"},
  {id:"p3",title:"Integration of Otoscopy into the Nursing Triage Station at the ENT Centre",team:"Soo Ying Pei, Wong Geng Hui, Pang Wan Ngo, Naw Hla Hla Chit, Ong Susan, Nan Thet Thet Mon, Joey Kan Foong Yee, Mabelle Cheah Xin Yean & Arhaya Binte Ali",org:"Alexandra Hospital, Audiology & ENT Nursing",key:"Nurses trained by audiologists now check ears at triage, cutting the wait for ear clearance from 28 minutes to under a minute.",img:"poster3.jpg",thumb:"poster3-thumb.jpg"},
];
const SPONSORS=[["Platinum",["cochlear"]],["Gold",["oticon","phonak","signia","starkey","widex"]],["Silver",["resound"]]];
const SPONSOR_NAMES={cochlear:"Cochlear",oticon:"Oticon",phonak:"Phonak",signia:"Signia",starkey:"Starkey",widex:"Widex",resound:"ReSound"};
const SOCIETY={vision:"To be the leading voice in advancing audiology practice and hearing care for patients in Singapore.",mission:"To connect, support, and empower audiology professionals through learning, networking and advocacy.",values:["Ethical","Competent","Integrity","Social Responsibility","United"]};
const COMMITTEE=[["c_sg","Sharad Govil","President"],["c_su","Su Junqiang","Vice-President"],["c_id","Isshani Devaraj","Treasurer"],["c_ls","Lee Si Ting","Secretary"],["c_af","Augustin Fiala","Public Affairs Officer"],["c_ck","Charis Koh","Social Activities Officer"],["c_ss","Sadrina Shah","Assistant Treasurer"],["c_kh","Kavya Hegde","Assistant Secretary"]];
const SESSIONS=[
  {id:"reg",time:"12:30",end:"14:00",title:"Registration & Lunch",sub:"Exhibition booths and posters open"},
  {id:"t1",n:"01",time:"14:00",end:"14:20",title:"Shaping the Future of Audiology",sub:"Opening Address and SAPS Self-Regulation Update",spk:["sg","su"],by:"Dr. Sharad Govil & Su Junqiang",rate:true},
  {id:"t2",n:"02",time:"14:20",end:"14:50",title:"Transforming NextGen Hearing Care",sub:"Cochlear™ Nucleus® Nexa™ System",spk:["jo","rh","ct"],by:"Jessica Ong, Cochlear; Dr. Rebecca Heywood, The ENT Clinic & Chermaine Teo, Faith Hearing",rate:true},
  {id:"t3",n:"03",time:"14:50",end:"15:10",title:"Smarter Documentation & Evidence-Based Care",sub:"Reducing documentation and supporting evidence-informed care in Allied Health",spk:["tt"],by:"Tammy Toh, Heidi",rate:true},
  {id:"t4",n:"04",time:"15:10",end:"15:30",title:"Automated Audiometry Setup in Local Setting",sub:"Experience at Ng Teng Fong General Hospital",spk:["ls","fm"],by:"Lee Si Ting & Fu Manjia, NTFGH",rate:true},
  {id:"t5",n:"05",time:"15:30",end:"16:00",title:"Amplifying Efficiency, Simplifying Workflows",sub:"The SGH GROSS x AI Story",spk:["at","al","th"],by:"Adam Tan, Alan Tseng & Teoh Hui Yee, SGH",rate:true},
  {id:"tea",time:"16:00",end:"16:30",title:"Tea Break",sub:"Exhibition booths and posters"},
  {id:"t6",n:"06",time:"16:30",end:"17:00",title:"Digital Health in Private Audiology Practice",sub:"From patient engagement to rehabilitation",spk:["lz"],by:"Lee Zu Xuan, Amazing Hearing",rate:true},
  {id:"panel",n:"",time:"17:00",end:"17:20",title:"Panel Discussion",sub:"From innovation to implementation: Perspectives from the field",spk:["sg","rt","at","ls","lz"],by:"Dr. Sharad Govil, Renato Tan, Adam Tan, Lee Si Ting & Lee Zu Xuan",rate:true},
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
  token:null,me:null,committee:false,reg:{member:null},tab:"prog",qaSession:"t1",qaSort:"top",playSeg:"qa",adQaSes:"all",fbf:{},
  q:[],myVotes:new Set(),myQs:new Set(),pollCounts:POLL.o.map(()=>0),myPoll:null,words:[],myWord:null,
  board:[],myTrivia:null,trivia:{i:0,picked:null,score:0},photos:[],likes:{},myLikes:new Set(),ce:{attempts:0,best:null,total:null,passed:false},cardsSeen:[],comments:{},postLikes:{},openCm:{},win:{open:false},quiz:null,welcome:null,
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
const errMsg=e=>{const m=(e&&(e.message||e.error_description))||"";if(/company name/i.test(m))return "Please enter your company name";if(/opens at 5/i.test(m))return "Not open yet. Please check with the SAPS team";if(/closed/i.test(m))return m.charAt(0).toUpperCase()+m.slice(1);if(/not checked in/i.test(m))return "Please check in again";if(/Failed to fetch|NetworkError|network/i.test(m))return "No connection. Please try again";return "Something went wrong. Please try again"};
async function rpc(fn,args){const {data,error}=await sb.rpc(fn,args);if(error)throw error;return data}

/* ============ Loading shared data ============ */
async function loadPublic(){
  const [q,v,p,w,t,ph,lk,st,cm,pl]=await Promise.all([
    sb.from("questions").select("id,session_id,author_name,body,answered,created_at"),
    sb.from("question_votes").select("question_id"),
    sb.from("poll_votes").select("option_index").eq("poll_id",POLL.id),
    sb.from("words").select("word"),
    sb.from("trivia_scores").select("display_name,score,finished_at").order("score",{ascending:false}).order("finished_at").limit(10),
    sb.from("photos").select("id,author_name,caption,storage_path,created_at").order("created_at",{ascending:false}),
    sb.from("photo_likes").select("photo_id"),
    sb.from("stage_state").select("*").eq("id",1).maybeSingle(),
    sb.from("post_comments").select("id,target,author_name,body,created_at").order("created_at"),
    sb.rpc("post_likes")
  ]);
  if(q.data){const c={};(v.data||[]).forEach(r=>c[r.question_id]=(c[r.question_id]||0)+1);S.q=q.data.map(x=>({...x,votes:c[x.id]||0}))}
  if(p.data){const pc=POLL.o.map(()=>0);p.data.forEach(r=>{if(pc[r.option_index]!=null)pc[r.option_index]++});S.pollCounts=pc}
  if(w.data)S.words=w.data.map(r=>r.word);
  if(t.data)S.board=t.data;
  if(ph.data)S.photos=ph.data.filter(p=>!p.storage_path.startsWith("static/"));
  if(lk.data){const l={};lk.data.forEach(r=>l[r.photo_id]=(l[r.photo_id]||0)+1);S.likes=l}
  if(st.data)S.stage=st.data;
  if(cm&&cm.data){const g={};cm.data.forEach(r=>(g[r.target]=g[r.target]||[]).push(r));S.comments=g}
  if(pl&&pl.data)S.postLikes=pl.data;
}
async function loadMine(){
  const d=await rpc("my_state",{p_token:S.token});
  const p=d.profile;S.me={fn:p.first_name,ln:p.last_name,co:p.company,member:p.saps_member===true?"yes":p.saps_member===false?"no":null};
  S.myVotes=new Set(d.question_votes||[]);S.myQs=new Set(d.my_questions||[]);
  S.myPoll=(d.poll_votes||{})[POLL.id]??null;S.myWord=d.word;S.myTrivia=d.trivia;
  S.myLikes=new Set(d.photo_likes||[]);S.ratings=d.ratings||{};S.feedback=d.feedback;
  S.committee=p.committee===true;S.ce=d.ce||S.ce;S.cardsSeen=d.cards_seen||[];
  try{S.win=await rpc("window_status",{p_token:S.token})}catch(e){}
}
async function loadAdmin(){if(!S.committee)return;const [a,x,cm]=await Promise.all([rpc("admin_dashboard",{p_token:S.token}),rpc("admin_export",{p_token:S.token}),rpc("admin_comments",{p_token:S.token}).catch(()=>[])]);S.ad=a;S.adx=x;S.adc=cm||[]}

let _t=null;
setInterval(async()=>{if(S.token&&!(S.win&&S.win.open)){try{const w=await rpc("window_status",{p_token:S.token});if(w.open!==S.win.open){S.win=w;softRender()}}catch(e){}}},60000);
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
};I.ag=I.cam;

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
    <span style="flex:1"><span class="sess-title" ${s.n||s.id==="panel"||s.id==="award"?"":'style="color:#fff"'}>${esc(s.title)}</span>${s.sub?`<span class="sess-sub small">${esc(s.sub)}</span>`:""}${s.by?`<span class="sess-by">${esc(s.by)}</span>`:""}
    ${s.n?`<span class="sess-time">${fmt(s.time)} to ${fmt(s.end)} PM${S.ratings[s.id]?' <span class="pill ok">Rated</span>':""}</span>`:""}</span></button>`).join("")}</div>
  <p class="small muted" style="margin-top:14px;font-style:italic;text-align:center">${EVENT.cpe}</p>
  <div class="rule-h">Meet Our Speakers</div>
  <div class="spk-grid">${SPK_ORDER.map(k=>`<button class="spk" data-spk="${k}">${photo(k)}<span class="n">${esc(SPEAKERS[k].name)}</span><span class="r">${esc(SPEAKERS[k].role)},<br>${esc(SPEAKERS[k].org)}</span></button>`).join("")}</div>
  <div class="rule-h">Poster Presentations</div>
  <p class="small muted" style="margin:-4px 0 12px">Give a thumbs up to the posters you enjoyed.</p>
  <div class="pst-list">${POSTERS.map(p=>`<div class="pst"><button class="pst-open" data-poster="${p.id}"><img src="${p.thumb}" alt="" loading="lazy"><span class="pst-b"><b>${esc(p.title)}</b><span class="small muted">${esc(p.org)}</span><span class="pst-k">${esc(p.key)}</span><span class="pst-more">View poster ›</span></span></button>${pstLike(p.id)}</div>`).join("")}</div>
  ${Sponsors()}`}
function pstLike(id){const c="poster-"+id;const on=S.cardsSeen.includes(c);const n=(S.postLikes||{})[c]||0;return `<button class="pst-like ${on?"on":""}" data-plike="${id}" aria-pressed="${on}" aria-label="Thumbs up this poster">👍 <b>${n}</b></button>`}
function Poster(id){const p=POSTERS.find(x=>x.id===id);return `<h2 style="margin:8px 0 6px;font-size:19px;font-weight:900;color:#fff;line-height:1.25">${esc(p.title)}</h2>
  <p class="small" style="margin:0 0 4px;color:var(--red-t);font-weight:700">${esc(p.org)}</p><p class="small muted" style="margin:0 0 12px">${esc(p.team)}</p>
  <a href="${p.img}" target="_blank" rel="noopener" class="pst-full"><img src="${p.img}" alt="Poster: ${esc(p.title)}"></a>
  <p class="small muted" style="text-align:center;margin:8px 0 12px">Tap the poster to open it full size and zoom in.</p><div style="display:flex;justify-content:center;margin-bottom:12px" id="pstLikeSheet">${pstLike(p.id)}</div>
  <button class="btn ghost" data-a="close">CLOSE</button>`}
function Sponsors(){return `<section class="spn" aria-label="Our sponsors"><p class="spn-t">Thank you to our sponsors</p>${SPONSORS.map(([t,ks])=>`<div class="spn-tier"><span class="spn-l ${t.toLowerCase()}">${t}</span><div class="spn-row ${t.toLowerCase()}" style="--n:${ks.length}">${ks.map(k=>`<span class="spn-c"><img src="${IMG["sp_"+k]}" alt="${SPONSOR_NAMES[k]}"></span>`).join("")}</div></div>`).join("")}</section>`}

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
  ${v.host?`<div class="rule-h" style="margin-top:18px">Your Host</div><p class="small muted">Hosting AudConnect 2026 on 10 October.</p>`:""}${ss.length?`<div class="rule-h" style="margin-top:18px">Speaking At</div>`:""}${ss.map(s=>`<p><span class="sess-title">${esc(s.title)}</span><span class="small muted">${fmt(s.time)} to ${fmt(s.end)} PM</span></p>`).join("")}
  <button class="btn ghost" data-a="close">CLOSE</button>`}
/* Certificate of Participation: SAPS template (cert-bg.webp) with the attendee's name set in Century Gothic style */
const CERT={w:1655,h:2338,cx:.4997,cy:.5440,maxW:.80,size:.0385};
let _certFont=null;
function certFontReady(){if(!_certFont){try{const f=new FontFace("CertGothic","url(https://cdn.jsdelivr.net/gh/ArtifexSoftware/urw-base35-fonts@20200910/fonts/URWGothic-Demi.otf)",{weight:"700"});_certFont=f.load().then(x=>{document.fonts.add(x);return true}).catch(()=>false)}catch(e){_certFont=Promise.resolve(false)}}return _certFont}
const certFull=(fn,ln)=>`${fn} ${ln}`.replace(/\s+/g," ").trim().toUpperCase();
function certScale(name){const cv=document.createElement("canvas").getContext("2d");cv.font=`700 100px CertGothic, "Century Gothic", Montserrat, sans-serif`;const w=cv.measureText(name).width/100;const base=CERT.size*CERT.h;return Math.min(1,(CERT.maxW*CERT.w)/(w*base))}
function certHTML(fn,ln){const name=certFull(fn,ln);const k=certScale(name);
  return `<div class="certwrap"><div class="pc3" role="img" aria-label="Certificate of participation for ${esc(name)}"><img src="cert-bg.webp" alt=""><div class="pc3n" style="font-size:${(CERT.size*CERT.h/CERT.w*100*k).toFixed(3)}cqw">${esc(name)}</div></div></div>`}
function Cert(){return certHTML(S.me.fn,S.me.ln)+`
  <p class="small" style="margin:12px 0 0;text-align:center;font-style:italic;color:#DCE1EE">${esc(EVENT.cpe)}</p>
  <div style="height:12px"></div><button class="btn" data-a="certpdf">DOWNLOAD PDF</button><div style="height:8px"></div><button class="btn ghost" data-a="close">DONE</button>`}

const sesLabel=id=>{const x=SESSIONS.find(v=>v.id===id);return x?(x.n?x.n+"  ":"")+x.title:"General"};
const isSaps=q=>q.author_name==="SAPS";
function qMeta(q){return `<div class="qmeta">${isSaps(q)?'<span class="pill saps">From SAPS</span>':`<span>${esc(q.author_name)}</span>`}<span class="qtag">${esc(sesLabel(q.session_id))}</span>${q.answered?'<span class="pill ok">Answered</span>':""}</div>`}
function QA(){const qs=S.q.slice().sort((a,b)=>(isSaps(b)-isSaps(a))||(S.qaSort==="top"?(a.answered-b.answered)||b.votes-a.votes:b.id-a.id));
  return `<div class="box"><label class="lbl" for="qs" style="margin-top:0">Your question is for</label>
  <select id="qs" class="field">${rateable().map(s=>`<option value="${s.id}" ${s.id===S.qaSession?"selected":""}>${s.n?s.n+"  ":""}${esc(s.title)}</option>`).join("")}</select>
  <div style="height:12px"></div><textarea id="qt" class="field" rows="3" maxlength="240" placeholder="Type your question"></textarea>
  <label style="display:flex;gap:8px;align-items:center;margin:10px 0" class="small"><input type="checkbox" id="anon"> Ask anonymously</label>
  <button class="btn" data-a="ask">SEND QUESTION</button></div>
  <p class="small muted" style="margin:18px 0 0">Like the questions you want answered. The most liked rise to the top for the moderator.</p>
  <div class="seg" style="margin-top:10px"><button data-sort="top" aria-pressed="${S.qaSort==="top"}">Most liked</button><button data-sort="new" aria-pressed="${S.qaSort==="new"}">Newest</button></div>
  <div class="list">${qs.length?qs.map(q=>`<div class="q${isSaps(q)?" q-saps":""}"><button class="up" data-up="${q.id}" aria-pressed="${S.myVotes.has(q.id)}" aria-label="Like this question">${I.up}${q.votes}</button><div style="flex:1"><div>${esc(q.body)}</div>${qMeta(q)}</div></div>`).join(""):`<div class="q"><span class="muted">No questions yet. Be the first to ask.</span></div>`}</div>`}

const ago=d=>{const s=Math.max(1,(Date.now()-new Date(d))/1000);if(s<60)return "JUST NOW";const m=s/60;if(m<60)return Math.floor(m)+(Math.floor(m)===1?" MINUTE AGO":" MINUTES AGO");const h=m/60;if(h<24)return Math.floor(h)+(Math.floor(h)===1?" HOUR AGO":" HOURS AGO");return new Date(d).toLocaleDateString("en-SG",{day:"numeric",month:"long"}).toUpperCase()};
const AG={heart:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.6s-7.6-4.6-9.5-9.3C1.1 7.8 3.3 4.2 6.9 4.2c2.1 0 3.6 1.2 5.1 3 1.5-1.8 3-3 5.1-3 3.6 0 5.8 3.6 4.4 7.1-1.9 4.7-9.5 9.3-9.5 9.3z"/></svg>',
  bubble:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.7 12a8.6 8.6 0 0 1-12.6 7.6L3.3 21l1.4-4.6A8.6 8.6 0 1 1 20.7 12z"/></svg>'};
function agAvatar(name,img){return img?`<span class="ag-av ring"><img src="${img}" alt=""></span>`:`<span class="ag-av ring"><b>${esc(ini(name||"?"))}</b></span>`}
function agComments(target,limit){const L=S.comments[target]||[];const open=S.openCm[target];const show=open?L:L.slice(-(limit||2));
  return `${L.length>show.length?`<button class="ag-more" data-cmopen="${target}">View all ${L.length} comments</button>`:""}
  ${show.map(r=>`<p class="ag-cm"><b>${esc(r.author_name)}</b> ${esc(r.body)}</p>`).join("")}
  <div class="ag-add"><input class="ag-in" data-cmin="${target}" maxlength="200" placeholder="Add a comment…" aria-label="Add a comment"><button class="ag-post" data-cmpost="${target}">Post</button></div>`}
function agBrand(){return `<div class="ag-brand"><span>Audigram</span></div>`}
function Engage(){const g=S.playSeg;return `<h1 class="page-title">Engage</h1><p class="tag">Ask and vote live</p><div style="height:14px"></div>
  <div class="seg"><button data-seg="qa" aria-pressed="${g==="qa"}">Q&amp;A</button><button data-seg="poll" aria-pressed="${g==="poll"}">Poll</button><button data-seg="cloud" aria-pressed="${g==="cloud"}">Words</button></div>
  ${g==="poll"?Poll():g==="cloud"?Cloud():QA()}`}
function Photos(){return `<div class="ag-head"><span class="ag-word">Audigram</span><span class="small muted">audconnect2026</span></div>
  <label class="upl" for="pfile">${I.cam}<b>Share your event photos on Audigram</b><span class="small muted">Snap a moment, add a caption, and the best ones appear on the big screen.</span></label>
  <input id="pfile" type="file" accept="image/*" style="position:absolute;left:-9999px" aria-label="Choose a photo">
  ${S.photos.length?"":`<div class="ag-card ag-empty"><div class="ag-empty-ic">${I.cam}</div><b>Share Photos</b><p>When people share photos from AudConnect 2026, they will appear here.</p><label class="ag-empty-btn" for="pfile">Share your first photo</label></div>`}
  <div class="feed ag-feed">${S.photos.map(p=>{const t="photo:"+p.id;const n=S.likes[p.id]||0;const liked=S.myLikes.has(p.id);return `<article class="ag-card">
   <header class="ag-top">${agAvatar(p.author_name,p.author_name==="SAPS Committee"?IMG.logo:null)}<div><b>${esc(p.author_name)}</b><span>AudConnect 2026 · Suntec Singapore</span></div></header>
   <div class="ag-media"><img src="${photoSrc(p)}" alt="${esc(p.caption||"Event photo")}" loading="lazy" data-dbl="${p.id}"></div>
   <div class="ag-acts"><button class="ag-ic heart ${liked?"on":""}" data-like="${p.id}" aria-pressed="${liked}" aria-label="Like">${AG.heart}</button><button class="ag-ic" data-cmfocus="${t}" aria-label="Comment">${AG.bubble}</button></div>
   <p class="ag-likes">${n} like${n===1?"":"s"}</p>
   ${p.caption?`<p class="ag-cap"><b>${esc(p.author_name)}</b> ${esc(p.caption)}</p>`:""}
   ${agComments(t)}
   <p class="ag-time">${ago(p.created_at)}</p></article>`}).join("")}</div>`}
function PhotoCompose(){return `<img src="${S._pendingUrl}" alt="" style="width:100%;max-height:50vh;object-fit:contain;border-radius:12px;background:#000">
  <label class="lbl" for="pcap">Caption (optional)</label><input id="pcap" class="field" maxlength="120" placeholder="Say something about this moment">
  <p class="small muted" style="margin-top:10px">Photos are visible to everyone at the event. Please ask before posting photos of others.</p>
  <button class="btn" data-a="postphoto" id="pbtn">SHARE ON AUDIGRAM</button>`}
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

const fmtSG=d=>new Date(d).toLocaleString("en-SG",{timeZone:"Asia/Singapore",day:"numeric",month:"short",hour:"numeric",minute:"2-digit"});
const FB_SCALES=[["satisfaction","How satisfied are you with the overall conference?","Very dissatisfied","Extremely satisfied"],["expectations","How well did the conference meet your expectations?","Did not meet","Exceeded the expectations"]];
const FB_STARS=[["food","Food"],["venue","Venue"],["panel","Panel Discussion"],["posters","Posters"],["booths","Booths"],["flow","Programme Flow and Duration"]];
const FB_TEXT=[["valuable","Which session(s) were the most valuable to you?"],["future","What topics would you like to see for future AudConnect?"],["other","Any other feedback for the organising committee?"]];
function FBForm(){const F=S.fbf;return `<p class="small muted" style="margin:0 0 4px">All questions are required. Rate the talks below, then tap Submit Feedback at the bottom.</p>
  ${FB_SCALES.map(([k,q,lo,hi])=>`<label class="lbl">${q}</label><div class="scale5">${[1,2,3,4,5].map(n=>`<button data-fbs="${k}:${n}" aria-pressed="${F[k]===n}">${n}</button>`).join("")}</div><div class="small muted" style="display:flex;justify-content:space-between;margin-top:4px"><span>${lo}</span><span>${hi}</span></div>`).join("")}
  <label class="lbl">Rate each part of the event</label><div class="fbstars">${FB_STARS.map(([k,l])=>`<div class="fbst"><span>${l}</span><span class="stars sm">${[1,2,3,4,5].map(n=>`<button class="star ${(F[k]||0)>=n?"on":""}" data-fbs="${k}:${n}" aria-label="${l} ${n} star${n>1?"s":""}">${I.star}</button>`).join("")}</span></div>`).join("")}</div>
  ${FB_TEXT.map(([k,q])=>`<label class="lbl" for="ft_${k}">${q}</label><textarea id="ft_${k}" class="field" rows="2" maxlength="1000">${esc(F[k]||"")}</textarea>`).join("")}`}
function FB(){const done=rateable().filter(s=>S.ratings[s.id]).length;const W=S.win||{};
  const rate=`<div class="rule-h">Rate the Talks</div><div class="list">${rateable().map(s=>`<button class="item" data-rate="${s.id}"><span class="num" style="font-size:20px;min-width:30px">${s.n||"P"}</span><span style="flex:1;font-weight:700;font-size:14px">${esc(s.title)}</span>${S.ratings[s.id]?`<span class="pill ok">${S.ratings[s.id].stars} ★</span>`:'<span class="pill">Rate</span>'}</button>`).join("")}</div>
  <p class="small muted" style="margin-top:8px">${done} of ${rateable().length} rated. You can rate talks at any time.</p>`;
  if(!W.open)return `<h1 class="page-title">CE &amp; Feedback</h1><p class="tag">Earn your certificate</p>
  <div class="redbox" style="margin-top:16px;text-align:center"><div style="font-size:34px">🔒</div><p style="font-weight:800;margin:6px 0 4px">Not open yet</p><p class="small muted" style="margin:0">The SAPS team will open the CE quiz and event feedback shortly. Pass the quiz (80% or more) and submit your feedback to receive your Certificate of Participation.</p></div>${rate}`;
  const ce=S.ce;
  return `<h1 class="page-title">CE &amp; Feedback</h1><p class="tag">Earn your certificate</p>
  <div class="redbox" style="margin-top:14px"><span class="small">To receive 4 CPE points, please complete the CE Quiz (passing score 80% or more) and also complete the event feedback form. Certificate will unlock once both are done.</span></div>
  <div class="rule-h">Step 1: CE Quiz</div><div class="box">
   ${ce.passed?`<span class="pill ok">Passed</span><p style="margin:10px 0 0">Best score ${ce.best}/${ce.total}. Well done!</p>`:ce.attempts?`<span class="pill">Not yet passed</span><p style="margin:10px 0 12px">Best score so far ${ce.best}/${ce.total}. You need 80% to pass. Retakes are allowed.</p><button class="btn" data-a="cestart">RETAKE THE QUIZ</button>`:`<p style="margin:0 0 12px">Multiple choice questions on today's talks. You'll see the right answers at the end.</p><button class="btn" data-a="cestart">START THE CE QUIZ</button>`}
  </div>
  <div class="rule-h">Step 2: Event Feedback</div>
  ${S.feedback?`<div class="box"><span class="pill ok">Thank you</span><p style="margin-top:10px">Your feedback is in.</p></div>`:
  `<div class="box fbf">${FBForm()}</div>${rate}<div style="height:16px"></div><button class="btn" data-a="overall">SUBMIT FEEDBACK</button>`}
  ${S.feedback?rate:""}
  ${ce.passed&&S.feedback?`<div style="height:16px"></div><button class="btn" data-a="cert">VIEW MY CERTIFICATE</button>`:""}`}
function CEQuiz(){const Q=S.quiz;if(!Q||!Q.qs)return `<p class="muted">Loading the quiz...</p>`;
  if(Q.result){const R=Q.result;const byId={};R.review.forEach(r=>byId[r.id]=r);
    return `<div class="box" style="text-align:center"><p class="tag">Your score</p><div style="font-size:56px;font-weight:900;line-height:1">${R.score}/${R.total}</div>
    <p style="margin:10px 0 0;font-weight:800;color:${R.passed?"var(--ok)":"var(--red-t)"}">${R.passed?"Passed. Well done!":"Not quite. You need "+R.pass_pct+"% to pass."}</p></div>
    <div class="rule-h">Review</div>${Q.qs.map((q,n)=>{const r=byId[q.id]||{};return `<div class="box" style="margin-bottom:10px"><p class="small muted" style="margin:0">Question ${n+1}</p><p style="font-weight:700;margin:4px 0 8px">${esc(q.question)}</p>
      ${q.options.map((o,i)=>`<div class="opt ${i===r.answer?"right":i===r.picked?"wrong":""}" style="cursor:default"><span>${esc(o)}${i===r.answer?" ✓":i===r.picked?" ✕ your answer":""}</span></div>`).join("")}</div>`}).join("")}
    <button class="btn" data-a="ceclose">${R.passed?"DONE":"BACK"}</button>${R.passed?"":`<div style="height:8px"></div><button class="btn ghost" data-a="cestart">TRY AGAIN</button>`}`}
  const q=Q.qs[Q.i];const pick=Q.answers[q.id];
  return `<div class="box"><p class="tag">Question ${Q.i+1} of ${Q.qs.length}</p><div class="hbar" style="margin:6px 0 12px"><i style="width:${(Q.i)/Q.qs.length*100}%"></i></div>
  <p style="font-weight:800;font-size:17px;margin:0 0 12px">${esc(q.question)}</p>
  ${q.options.map((o,i)=>`<button class="opt" data-cepick="${i}" aria-pressed="${pick===i}"><span>${esc(o)}</span></button>`).join("")}
  <div style="display:flex;gap:8px;margin-top:6px">${Q.i>0?`<button class="btn ghost" data-a="ceprev">BACK</button>`:""}<button class="btn" data-a="${Q.i+1<Q.qs.length?"cenext":"cesubmit"}" ${pick==null?"disabled":""}>${Q.i+1<Q.qs.length?"NEXT":"SUBMIT"}</button></div></div>
  <button class="btn ghost" style="margin-top:10px" data-a="ceclose">EXIT QUIZ</button>`}

function Me(){const m=S.me;return `<h1 class="page-title">My Badge</h1><div style="height:14px"></div>
  <div class="badge"><div class="band"><img class="logo-img" src="${IMG.logo}" alt="">AUDCONNECT 2026</div><div class="body">
  <div class="nm">${esc(m.fn)}<br>${esc(m.ln)}</div><p class="muted" style="margin-top:8px">${esc(m.co)}</p>
  <p style="margin-top:12px"><span class="pill">${m.member==="yes"?"SAPS Member":"Guest"}</span> ${S.committee?'<span class="pill">Organiser</span> ':""}<span class="pill ok">Checked in</span></p></div></div>
  <div class="rule-h">About SAPS</div>
  <div class="about"><div class="ab"><span class="ab-t">Vision</span><p>${esc(SOCIETY.vision)}</p></div>
  <div class="ab"><span class="ab-t">Mission</span><p>${esc(SOCIETY.mission)}</p></div>
  <div class="ab"><span class="ab-t">Core Values</span><div class="vals">${SOCIETY.values.map(v=>`<span>${esc(v)}</span>`).join("")}</div></div></div>
  <div class="rule-h">Certificate</div>
  ${S.feedback&&S.ce.passed?`<button class="btn" data-a="cert">VIEW CERTIFICATE</button>`:`<div class="box"><p class="small">To obtain your CPE points and certificate, pass the CE quiz (80% or more) and complete the event feedback form, both in the CE tab.</p><button class="btn ghost" data-tab="fb">GO TO CE &amp; FEEDBACK</button></div>`}
  <div style="height:22px"></div><button class="btn ghost" data-a="logoutask">LOG OUT</button>
  <div class="org-mini">${S.committee?`<button class="linkbtn" data-a="admin">Open organiser dashboard</button>`:`<button class="linkbtn" data-a="orgcode">Organiser only</button>`}<span>For the SAPS committee</span></div>`}

const CARDS=["welcome","committee"];
function WelcomeSlide(k){
  if(k==="welcome")return `<div class="ws ws-host"><img src="${IMG.hosts}" alt="Su Junqiang and Sadrina Shah, your hosts"><div class="ws-ov"><span>AUDCONNECT 2026</span><h2>Happy World Audiologist Day &amp; Welcome to AUDCONNECT 2026!</h2><p>Your hosts today: Su Junqiang &amp; Sadrina Shah</p></div></div>`;
  if(k==="vmv")return `<div class="ws ws-navy"><span class="ws-k">About the Society</span><b class="ab-t">Vision</b><p>${esc(SOCIETY.vision)}</p><b class="ab-t">Mission</b><p>${esc(SOCIETY.mission)}</p><b class="ab-t">Core Values</b><p>${SOCIETY.values.map(esc).join(" | ")}</p></div>`;
  return `<div class="ws ws-navy"><span class="ws-k">SAPS 2025-26 Executive Committee</span><div class="cgrid">${COMMITTEE.map(([p,n,r])=>`<div><img src="${IMG[p]}" alt=""><b>${esc(n)}</b><span>${esc(r)}</span></div>`).join("")}</div></div>`}
function Welcome(){const i=S.welcome||0;const n=(S.postLikes||{})["welcome-post"]||0;const liked=S.cardsSeen.includes("welcome-post");
  $("#welcome").innerHTML=`<div class="ag-wrap"><article class="ag-card ag-pop" role="dialog" aria-label="Welcome post">
  <div class="ag-bar"><span class="ag-word">Audigram</span></div>
  <header class="ag-top">${agAvatar("AC",IMG.logo)}<div><b>audconnect2026</b><span>Suntec Singapore</span></div></header>
  <div class="ag-media sq"><div class="ws-track" id="wsTrack">${CARDS.map(WelcomeSlide).join("")}</div>
   ${i>0?`<button class="ws-nav l" data-wsgo="${i-1}" aria-label="Previous">‹</button>`:""}${i<CARDS.length-1?`<button class="ws-nav r" data-wsgo="${i+1}" aria-label="Next">›</button>`:""}
   <span class="ws-count">${i+1}/${CARDS.length}</span></div>
  <div class="ag-acts"><button class="ag-ic heart ${liked?"on":""}" data-wlike="1" aria-pressed="${liked}" aria-label="Like">${AG.heart}</button><button class="ag-ic" data-cmfocus="welcome" aria-label="Comment">${AG.bubble}</button>
   <span class="ag-dots">${CARDS.map((_,k)=>`<i class="${k===i?"on":""}"></i>`).join("")}</span></div>
  <p class="ag-likes">${n} like${n===1?"":"s"}</p>
  <p class="ag-cap"><b>audconnect2026</b> Happy World Audiologist Day! We're delighted to have you with us.${S.capOpen?` In the spirit of this year's theme, NextGen Audiology, this event app was built with the help of AI, from the programme to live Q&amp;A. Explore, ask questions and join in. Swipe to meet your SAPS 2025-26 Executive Committee. <span class="ag-tag">#AudConnect2026 #WorldAudiologistDay</span>`:` <button class="ag-morebtn" data-capmore="1">… more</button>`}</p>
  ${agComments("welcome",2)}
  <p class="ag-time">10 OCTOBER 2026</p>
  </article>
  <button class="btn ag-go" data-a="welcomedone">CONTINUE TO AUDCONNECT</button></div>`;
  $("#welcome").classList.add("open");
  const tr=$("#wsTrack");tr.scrollLeft=i*tr.clientWidth;
  tr.onscroll=()=>{clearTimeout(tr._t);tr._t=setTimeout(()=>{const k=Math.round(tr.scrollLeft/tr.clientWidth);if(k!==S.welcome){S.welcome=k;const keep=document.activeElement&&document.activeElement.classList.contains("ag-in")?document.activeElement.value:null;Welcome();if(keep!=null){const f=$('[data-cmin="welcome"]');f.value=keep;f.focus()}}},120)}}
function openWelcome(){S.welcome=0;Welcome()}
function OrgCode(){return `<h2 style="margin-top:0;font-weight:900;text-transform:uppercase">Organiser only</h2>
  <p class="small muted">Enter the organiser code from the SAPS committee.</p>
  <label class="lbl" for="oc">Organiser code</label><input id="oc" class="field" autocomplete="off" autocapitalize="characters" spellcheck="false">
  <div style="height:14px"></div><button class="btn" data-a="unlock" id="obtn">UNLOCK</button>`}
/* ============ Stage screen (LED wall) ============ */
function Stage(){const v=S.stageLocal||S.stage.view;let body="";
  if(v==="poll"){const t=S.pollCounts.reduce((a,b)=>a+b,0);body=`<h3>${esc(POLL.q)}</h3>${POLL.o.map((o,i)=>{const pc=t?Math.round(S.pollCounts[i]/t*100):0;return `<div class="srow"><div class="lab"><span>${esc(o)}</span><span>${pc}%</span></div><div class="bar"><i style="width:${pc}%"></i></div></div>`}).join("")}<p class="muted">${t} votes</p>`}
  if(v==="cloud")body=`<h3>${CLOUD_Q}</h3><div class="cloud" style="gap:10px 28px">${cloudHtml(true)}</div>`;
  if(v==="qa"){const pin=S.q.find(q=>q.id===S.stage.pinned_question);const qs=pin?[pin]:S.q.filter(q=>!q.answered).sort((a,b)=>b.votes-a.votes).slice(0,4);body=`<h3>${pin?"Now answering":"Most liked questions"}</h3>${qs.map(q=>`<div class="sq"><b>${q.votes}</b><span>${esc(q.body)}<small class="sq-t">${isSaps(q)?"From SAPS · ":""}${esc(sesLabel(q.session_id))}</small></span></div>`).join("")||"<p>No questions yet</p>"}`}
  if(v==="photos"){const ps=S.photos.slice(0,6);body=`<h3><span class="ag-word" style="font-size:1.4em">Audigram</span> <span style="font-size:.5em;color:var(--red-t)">#AudConnect2026</span></h3><div class="wall">${ps.map(p=>`<figure><img src="${photoSrc(p)}" alt=""><figcaption>${esc(p.author_name)}</figcaption></figure>`).join("")}</div>`}
  if(v==="lb"){body=`<h3>Trivia leaderboard</h3>${S.board.map((r,i)=>`<div class="sq"><b>${i+1}</b><span style="flex:1">${esc(r.display_name)}</span><span>${r.score}</span></div>`).join("")||"<p>No scores yet</p>"}`}
  $("#stage").innerHTML=`<div class="hd"><div class="logo-row"><img class="logo-img" style="width:48px;height:48px" src="${IMG.logo}" alt=""><div class="wordmark">AUDCONNECT 2026<b>NEXTGEN AUDIOLOGY</b></div></div><span class="muted" style="font-weight:600">Join in at audconnect2026.com</span></div>
  <div class="main">${body}</div><div class="ctl">${[["photos","Audigram"],["poll","Poll"],["cloud","Word cloud"],["qa","Questions"]].map(([k,l])=>`<button data-stage="${k}" aria-pressed="${v===k}">${l}</button>`).join("")}<button data-a="stageclose">Exit</button></div>`}

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
  <div class="kpi"><div class="v">${S.ad.questions.filter(q=>!q.hidden).length}</div><div class="l">Questions asked</div></div><div class="kpi"><div class="v">${(S.adx||[]).filter(x=>x.certificate_eligible).length}</div><div class="l">Certificates earned</div></div></div>
  ${now?`<div class="rule-h">Now</div><div class="redbox"><span class="small" style="font-weight:800;letter-spacing:.08em"><span class="dot"></span>ON STAGE</span><span class="sess-title" style="margin-top:6px">${esc(now.title)}</span><span class="small muted">${esc(now.by||"")}</span></div>`:""}
  <div class="rule-h">Stage Screen</div><div class="box"><p class="small muted">Choose what the LED wall shows. Open the stage screen on the laptop connected to the LED wall.</p>
  <div class="acts">${[["photos","Audigram wall"],["poll","Poll results"],["cloud","Word cloud"],["qa","Top questions"]].map(([k,l])=>`<button class="act ${S.stage.view===k?"on":""}" data-adstage="${k}">${l}</button>`).join("")}</div>
  <div style="height:12px"></div><button class="btn" data-a="stage">OPEN STAGE SCREEN</button></div>
  <div class="rule-h">Who's Here</div><div class="box">${top.length?top.map(([c,v])=>`<div style="margin-bottom:10px"><div class="small" style="display:flex;justify-content:space-between"><span>${esc(c)}</span><b>${v}</b></div><div class="hbar"><i style="width:${v/mx*100}%"></i></div></div>`).join(""):'<span class="muted small">No check ins yet</span>'}</div>`}
function AdQA(){const f=S.adQaSes||"all";const all=S.ad.questions;const qs=all.filter(q=>f==="all"||q.session_id===f).sort((a,b)=>(a.answered-b.answered)||b.votes-a.votes);const pin=S.stage.pinned_question;
  return `<label class="lbl" for="aqs" style="margin-top:0">Show</label><select id="aqs" class="field"><option value="all" ${f==="all"?"selected":""}>All sessions, ranked by likes (${all.filter(q=>!q.hidden).length})</option>${rateable().map(s=>`<option value="${s.id}" ${s.id===f?"selected":""}>${s.n?s.n+"  ":""}${esc(s.title)} (${all.filter(q=>q.session_id===s.id&&!q.hidden).length})</option>`).join("")}</select>
  <p class="small muted" style="margin-top:10px">Most liked first across the whole event. Each question shows the session it was asked for. Put one on screen for the moderator, then mark it answered.</p>
  <div class="list">${qs.length?qs.map((q,k)=>`<div class="q" style="${q.hidden?"opacity:.4":""}"><div class="up" style="cursor:default">${I.up}${q.votes}</div><div style="flex:1"><div><b class="muted" style="margin-right:6px">#${k+1}</b>${esc(q.body)}</div>${qMeta(q)}<div class="qmeta">${pin===q.id?'<span class="pill">On screen</span>':""}${q.hidden?'<span class="pill" style="background:#555">Hidden</span>':""}</div>
  <div class="acts"><button class="act ${pin===q.id?"on":""}" data-pin="${q.id}">${pin===q.id?"Remove from screen":"Show on screen"}</button><button class="act" data-ans2="${q.id}" data-v="${!q.answered}">${q.answered?"Mark unanswered":"Mark answered"}</button><button class="act" data-hide="${q.id}" data-v="${!q.hidden}">${q.hidden?"Unhide":"Hide"}</button></div></div></div>`).join(""):`<div class="q"><span class="muted">No questions yet.</span></div>`}</div>`}
function AdEng(){const t=S.pollCounts.reduce((a,b)=>a+b,0);
  return `<div class="rule-h" style="margin-top:6px">Photos</div><div class="box"><p class="small muted">Hide anything unsuitable. Hidden photos disappear from phones and the big screen.</p>
  <div class="thumbs">${S.ad.photos.map(p=>`<div class="thumb" style="${p.hidden?"opacity:.35":""}"><img src="${photoSrc(p)}" alt="" loading="lazy"><button class="act ${p.hidden?"":"on"}" data-hidephoto="${p.id}" data-v="${!p.hidden}">${p.hidden?"Unhide":"Hide"}</button></div>`).join("")||'<span class="muted small">No photos yet</span>'}</div>
  <div class="acts" style="margin-top:12px"><button class="act" data-adstage="photos">Show Audigram on screen</button></div></div>
  <div class="rule-h">Audigram Comments</div><div class="box"><p class="small muted">Hide any comment that shouldn't be shown. It disappears from everyone's phone.</p>
  <div class="list" style="margin-top:8px">${(S.adc||[]).slice(0,60).map(r=>`<div class="item" style="${r.hidden?"opacity:.4":""}"><span style="flex:1"><b style="display:block;font-size:13px">${esc(r.author_name)} <span class="muted" style="font-weight:500">on ${r.target==="welcome"?"welcome post":"photo"}</span></b><span class="small">${esc(r.body)}</span></span><button class="act ${r.hidden?"":"on"}" data-hidecm="${r.id}" data-v="${!r.hidden}">${r.hidden?"Unhide":"Hide"}</button></div>`).join("")||'<div class="item small muted">No comments yet</div>'}</div></div>
  <div class="rule-h">Live Poll</div><div class="box"><p style="font-weight:800">${esc(POLL.q)}</p>
  ${POLL.o.map((o,i)=>{const pc=t?Math.round(S.pollCounts[i]/t*100):0;return `<div style="margin-bottom:8px"><div class="small" style="display:flex;justify-content:space-between"><span>${esc(o)}</span><b>${S.pollCounts[i]} (${pc}%)</b></div><div class="hbar"><i style="width:${pc}%"></i></div></div>`}).join("")}
  <div class="acts"><button class="act ${S.stage.poll_open?"on":""}" data-a="togpoll">${S.stage.poll_open?"Voting open":"Voting closed"}</button><button class="act" data-adstage="poll">Show on screen</button></div></div>
  <div class="rule-h">Word Cloud</div><div class="box"><p class="small muted">Tap a word to hide it if it's inappropriate.</p>
  <div class="acts">${S.ad.words.map(w=>`<button class="act" style="${w.hidden?"opacity:.4;text-decoration:line-through":""}" data-hideword="${w.id}" data-v="${!w.hidden}">${esc(w.word)} ${w.hidden?"↺":"✕"}</button>`).join("")||'<span class="muted small">No words yet</span>'}</div>
  <div class="acts" style="margin-top:12px"><button class="act ${S.stage.cloud_open?"on":""}" data-a="togcloud">${S.stage.cloud_open?"Accepting words":"Closed"}</button><button class="act" data-adstage="cloud">Show on screen</button></div></div>
  <div class="rule-h">CE Quiz</div><div class="box">${(()=>{const X=S.adx||[];const tried=X.filter(x=>x.ce_attempts>0).length,pass=X.filter(x=>x.ce_passed).length,cert=X.filter(x=>x.certificate_eligible).length;return `<p style="margin:0">${tried} attempted, <b>${pass} passed</b>, <b>${cert}</b> eligible for a certificate.</p><p class="small muted" style="margin:8px 0 0">Open to attendees now, with no time lock.</p>`})()}</div>`}
function AdFB(){const FBk=S.ad.feedback;const avg=k=>{const v=FBk.map(f=>f[k]).filter(x=>x!=null);return v.length?(v.reduce((a,b)=>a+b,0)/v.length).toFixed(1):"–"};
  const R={};S.ad.ratings.forEach(r=>{(R[r.session_id]=R[r.session_id]||[]).push(r)});
  const txt=k=>FBk.map(f=>f[k]).filter(Boolean);
  const comments=S.ad.ratings.map(r=>r.comment?(SESSIONS.find(s=>s.id===r.session_id)||{}).n?`Talk ${SESSIONS.find(s=>s.id===r.session_id).n}: ${r.comment}`:`Panel: ${r.comment}`:null).filter(Boolean);
  const box=(t,arr)=>`<div class="rule-h">${t}</div><div class="list">${arr.slice(0,60).map(c=>`<div class="item small">${esc(c)}</div>`).join("")||'<div class="item small muted">None yet</div>'}</div>`;
  return `<div class="kpis"><div class="kpi red"><div class="v">${avg("satisfaction")}</div><div class="l">Overall satisfaction (of 5)</div></div><div class="kpi"><div class="v">${avg("expectations")}</div><div class="l">Met expectations (of 5)</div></div></div>
  <div class="kpis" style="margin-top:10px"><div class="kpi"><div class="v">${FBk.length}</div><div class="l">Feedback forms</div></div><div class="kpi"><div class="v">${POSTERS.reduce((a,p)=>a+((S.postLikes||{})["poster-"+p.id]||0),0)}</div><div class="l">Poster thumbs up</div></div></div>
  <div class="rule-h">Event Ratings</div><div class="list">${FB_STARS.map(([k,l])=>`<div class="item"><span style="flex:1;font-weight:700;font-size:14px">${l}</span><b style="color:var(--gold)">${avg(k)} ★</b></div>`).join("")}</div>
  <div class="rule-h">Posters</div><div class="list">${POSTERS.map(p=>`<div class="item"><span style="flex:1"><b style="display:block;font-size:13px">${esc(p.title)}</b><span class="small muted">${esc(p.org)}</span></span><b>👍 ${(S.postLikes||{})["poster-"+p.id]||0}</b></div>`).join("")}</div>
  <div class="rule-h">Session Ratings</div><div class="list">${rateable().map(s=>{const rs=R[s.id]||[];const a=rs.length?rs.reduce((x,r)=>x+r.stars,0)/rs.length:0;
    return `<div class="item"><span class="num" style="font-size:20px;min-width:30px">${s.n||"P"}</span><span style="flex:1"><b style="display:block;font-size:13px">${esc(s.title)}</b><span class="small muted">${rs.length?rs.length+" rating"+(rs.length>1?"s":""):"Not rated yet"}</span></span>${rs.length?`<b style="color:var(--gold)">${a.toFixed(1)} ★</b>`:""}</div>`}).join("")}</div>
  ${box("Most Valuable Sessions",txt("valuable"))}${box("Future Topics",txt("next_topic"))}${box("Other Feedback",txt("other"))}${box("Talk Comments",comments)}
  <div style="height:14px"></div><button class="btn ghost" data-a="exportfb">EXPORT FEEDBACK (CSV)</button>`}
function AdAtt(){const q=S.attQ.toLowerCase();const list=S.ad.attendees.filter(a=>!q||(a.first_name+" "+a.last_name+" "+a.company).toLowerCase().includes(q));
  const tm=d=>new Date(d).toLocaleTimeString("en-SG",{timeZone:"Asia/Singapore",hour:"numeric",minute:"2-digit"});
  return `<input id="attq" class="field" placeholder="Search name or company" value="${esc(S.attQ)}" aria-label="Search attendees">
  <p class="small muted" style="margin:10px 0">${list.length} checked in</p>
  <div class="list"><table class="tbl">${list.slice(0,60).map(a=>`<tr><td><b>${esc(a.first_name)} ${esc(a.last_name)}</b><br><span class="muted">${esc(a.company)}</span></td><td style="text-align:right;white-space:nowrap"><span class="pill ${a.saps_member?"":"ok"}">${a.saps_member?"Member":"Guest"}</span><br><span class="muted small">${tm(a.checked_in_at)}</span></td></tr>`).join("")||'<tr><td class="muted">No check ins yet</td></tr>'}</table></div>
  ${list.length>60?`<p class="small muted" style="margin-top:8px">Showing 60 of ${list.length}. Search to find someone.</p>`:""}
  <div class="rule-h">Certificates</div>${(()=>{const E=(S.adx||[]).filter(x=>x.certificate_eligible);return E.length?`<p class="small muted" style="margin:0 0 10px">${E.length} attendee${E.length>1?"s have":" has"} earned a certificate.</p>
  <button class="btn" data-a="certall">DOWNLOAD ALL CERTIFICATES (ZIP)</button><div style="height:10px"></div>
  <div class="list"><table class="tbl">${E.map((x,k)=>`<tr><td><b>${esc(x.first_name)} ${esc(x.last_name)}</b><br><span class="muted">${esc(x.company)}</span></td><td style="text-align:right"><button class="act on" data-certone="${k}">PDF</button></td></tr>`).join("")}</table></div>`:`<p class="small muted">No certificates earned yet. They appear here once an attendee passes the CE quiz and submits feedback.</p>`})()}
  <div style="height:14px"></div><button class="btn" data-a="exportxlsx">EXPORT EXCEL (ATTENDANCE, CE &amp; FEEDBACK)</button>
  <p class="small muted" style="margin-top:10px">Use the attendance export for CPE point records. Walk ins can check in on any phone at the desk.</p>`}

let _certBg=null;
function certBg(){if(!_certBg)_certBg=new Promise((ok,no)=>{const im=new Image();im.onload=()=>ok(im);im.onerror=no;im.src="cert-bg.webp"});return _certBg}
async function certPDF(fn,ln){
  await certFontReady();const bg=await certBg();const name=certFull(fn,ln);
  const cv=document.createElement("canvas");cv.width=CERT.w;cv.height=CERT.h;const g=cv.getContext("2d");
  g.drawImage(bg,0,0,CERT.w,CERT.h);
  const px=Math.round(CERT.size*CERT.h*certScale(name));
  g.font=`700 ${px}px CertGothic, "Century Gothic", Montserrat, sans-serif`;g.fillStyle="#FFFFFF";g.textAlign="center";g.textBaseline="middle";
  g.fillText(name,CERT.cx*CERT.w,CERT.cy*CERT.h);
  const {jsPDF}=window.jspdf;const pdf=new jsPDF({orientation:"portrait",unit:"mm",format:"a4",compress:true});
  pdf.addImage(cv.toDataURL("image/jpeg",.9),"JPEG",0,0,210,297);
  pdf.setProperties({title:`AudConnect 2026 Certificate of Participation: ${name}`,author:"Society for Audiology Professionals Singapore"});
  return pdf.output("blob")}
const certName=(fn,ln)=>`AudConnect2026_Certificate_${(fn+"_"+ln).replace(/[^A-Za-z0-9]+/g,"_").replace(/^_|_$/g,"")}.pdf`;
function saveBlob(blob,name){const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},800)}
function downloadCSV(name,rows){const csv=rows.map(r=>r.map(v=>`"${String(v??"").replace(/"/g,'""')}"`).join(",")).join("\r\n");
  const a=document.createElement("a");a.href=URL.createObjectURL(new Blob(["\ufeff"+csv],{type:"text/csv"}));a.download=name;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},500)}

/* ============ Render ============ */
function renderQuiz(){render();scrollTo(0,0)}
function render(){
  if(S.admin){$("#root").innerHTML=Admin();const a=$("#aqs");if(a)a.onchange=e=>{S.adQaSes=e.target.value;render()};const aq=$("#attq");if(aq)aq.oninput=e=>{S.attQ=e.target.value;const p=e.target.selectionStart;render();const n=$("#attq");n.focus();n.setSelectionRange(p,p)};return}
  if(!S.me){$("#root").innerHTML=`<div class="app" style="padding-bottom:0">${Register()}</div>`;return}
  if(S.tab==="qa"){S.tab="play";S.playSeg="qa"}if(S.playSeg==="photos"){S.playSeg="qa";S.tab="ag"}
  const tabs={prog:["Programme",Prog],play:["Engage",Engage],ag:["Audigram",Photos],fb:["CE",()=>S.quiz?`<h1 class="page-title">CE Quiz</h1><div style="height:12px"></div>`+CEQuiz():FB()],me:["Me",Me]};
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
  if(d.poster){sheet(Poster(d.poster));return}
  if(d.qa){S.qaSession=d.qa;S.tab="play";S.playSeg="qa";close();render();scrollTo(0,0);return}
  if(d.rate){sheet(Rate(d.rate));return}
  if(d.star){S._draft={id:d.sid,stars:+d.star};$("#sheet").querySelectorAll(".star").forEach((s,i)=>s.classList.toggle("on",i<+d.star));$("#rsave").disabled=false;return}
  if(d.sort){S.qaSort=d.sort;render();return}
  if(d.up){const id=+d.up;const had=S.myVotes.has(id);had?S.myVotes.delete(id):S.myVotes.add(id);const q=S.q.find(x=>x.id===id);if(q)q.votes+=had?-1:1;render();
    try{await rpc("toggle_question_vote",{p_token:S.token,p_question:id})}catch(x){toast(errMsg(x))}return}
  if(d.seg){if(d.seg==="photos"){S.tab="ag";render();scrollTo(0,0);return}S.playSeg=d.seg;render();return}
  if(d.certone!==undefined){const x=(S.adx||[]).filter(r=>r.certificate_eligible)[+d.certone];if(!x)return;b.disabled=true;const t=b.textContent;b.textContent="...";
    try{saveBlob(await certPDF(x.first_name,x.last_name),certName(x.first_name,x.last_name))}catch(e){toast("Couldn't create the PDF")}b.disabled=false;b.textContent=t;return}
  if(d.wsgo!==undefined){const tr=$("#wsTrack");tr.scrollTo({left:(+d.wsgo)*tr.clientWidth,behavior:"smooth"});return}
  if(d.capmore){S.capOpen=true;Welcome();return}
  if(d.plike){const c="poster-"+d.plike;const had=S.cardsSeen.includes(c);if(had)S.cardsSeen=S.cardsSeen.filter(x=>x!==c);else S.cardsSeen.push(c);
    S.postLikes[c]=Math.max(0,((S.postLikes||{})[c]||0)+(had?-1:1));document.querySelectorAll(`[data-plike="${d.plike}"]`).forEach(x=>x.outerHTML=pstLike(d.plike));
    rpc("toggle_post_like",{p_token:S.token,p_card:c}).catch(x=>toast(errMsg(x)));return}
  if(d.wlike){const had=S.cardsSeen.includes("welcome-post");if(had)S.cardsSeen=S.cardsSeen.filter(x=>x!=="welcome-post");else S.cardsSeen.push("welcome-post");
    S.postLikes["welcome-post"]=((S.postLikes||{})["welcome-post"]||0)+(had?-1:1);Welcome();rpc("toggle_post_like",{p_token:S.token,p_card:"welcome-post"}).catch(x=>toast(errMsg(x)));return}
  if(d.cmopen){S.openCm[d.cmopen]=true;$("#welcome").classList.contains("open")?Welcome():render();return}
  if(d.cmfocus){const f=document.querySelector(`[data-cmin="${d.cmfocus}"]`);if(f){f.focus();f.scrollIntoView({block:"center",behavior:"smooth"})}return}
  if(d.cmpost){const t=d.cmpost;const f=document.querySelector(`[data-cmin="${t}"]`);const body=(f&&f.value||"").trim();if(!body){toast("Write a comment first");return}b.disabled=true;
    try{await rpc("add_comment",{p_token:S.token,p_target:t,p_body:body});(S.comments[t]=S.comments[t]||[]).push({author_name:S.me.fn+" "+(S.me.ln||"").charAt(0)+".",body,created_at:new Date().toISOString()});S.openCm[t]=true;toast("Comment posted")}catch(x){toast(errMsg(x))}
    b.disabled=false;$("#welcome").classList.contains("open")?Welcome():render();return}
  if(d.cepick!==undefined){const q=S.quiz.qs[S.quiz.i];S.quiz.answers[q.id]=+d.cepick;renderQuiz();return}
  if(d.like){const id=+d.like;const had=S.myLikes.has(id);had?S.myLikes.delete(id):S.myLikes.add(id);S.likes[id]=(S.likes[id]||0)+(had?-1:1);render();
    try{await rpc("toggle_photo_like",{p_token:S.token,p_photo:id})}catch(x){toast(errMsg(x))}return}
  if(d.poll){const i=+d.poll;S.myPoll=i;S.pollCounts[i]++;render();try{await rpc("cast_poll_vote",{p_token:S.token,p_poll:POLL.id,p_option:i});toast("Vote in")}catch(x){S.myPoll=null;toast(errMsg(x))}await loadPublic().catch(()=>{});render();return}
  if(d.ans){S.trivia.picked=+d.ans;if(+d.ans===TRIVIA[S.trivia.i].a)S.trivia.score++;render();return}
  if(d.fbs){const [k,n]=d.fbs.split(":");S.fbf[k]=+n;document.querySelectorAll(`[data-fbs^="${k}:"]`).forEach(x=>{const v=+x.dataset.fbs.split(":")[1];if(x.classList.contains("star"))x.classList.toggle("on",v<=S.fbf[k]);else x.setAttribute("aria-pressed",v===S.fbf[k])});return}
  if(d.nps){S.nps=+d.nps;document.querySelectorAll("[data-nps]").forEach(x=>x.setAttribute("aria-pressed",+x.dataset.nps===S.nps));return}
  if(d.stage){if(S.committee){S.stageLocal=null;await adminAct("admin_set_stage",{p_view:d.stage,p_pinned:null,p_poll_open:null,p_cloud_open:null})}else{S.stageLocal=d.stage;Stage()}return}
  if(d.adtab){S.adTab=d.adtab;render();scrollTo(0,0);return}
  if(d.adstage){await adminAct("admin_set_stage",{p_view:d.adstage,p_pinned:null,p_poll_open:null,p_cloud_open:null},"Stage screen updated");return}
  if(d.pin){const id=+d.pin;const on=S.stage.pinned_question===id;await adminAct("admin_set_stage",on?{p_view:null,p_pinned:null,p_poll_open:null,p_cloud_open:null,p_clear_pin:true}:{p_view:"qa",p_pinned:id,p_poll_open:null,p_cloud_open:null});return}
  if(d.ans2){const id=+d.ans2,v=d.v==="true";if(v&&S.stage.pinned_question===id)await rpc("admin_set_stage",{p_token:S.token,p_view:null,p_pinned:null,p_poll_open:null,p_cloud_open:null,p_clear_pin:true}).catch(()=>{});await adminAct("admin_update_question",{p_id:id,p_answered:v,p_hidden:null});return}
  if(d.hide){await adminAct("admin_update_question",{p_id:+d.hide,p_answered:null,p_hidden:d.v==="true"});return}
  if(d.hidephoto){await adminAct("admin_set_hidden",{p_kind:"photo",p_id:+d.hidephoto,p_hidden:d.v==="true"});return}
  if(d.hidecm){await adminAct("admin_set_hidden",{p_kind:"comment",p_id:+d.hidecm,p_hidden:d.v==="true"});return}
  if(d.hideword){await adminAct("admin_set_hidden",{p_kind:"word",p_id:+d.hideword,p_hidden:d.v==="true"});return}
  switch(d.a){
    case "checkin":{keepReg();const r=S.reg;
      if(!r.fn.trim()){toast("Add your first name");return}if(!r.ln.trim()){toast("Add your last name");return}
      if(!r.member){toast("Tell us if you're a SAPS member");return}if(!r.co.trim()){toast("Add your company");return}
      S.busy=true;render();
      try{const res=await rpc("check_in",{p_first:r.fn,p_last:r.ln,p_company:r.co,p_member:r.member==="yes"});
        S.token=res.token;try{localStorage.setItem("ac26_token",S.token)}catch(x){}
        await loadMine();S.busy=false;S.tab="prog";render();scrollTo(0,0);{let w=null;try{w=localStorage.getItem("ac26_welcomed")}catch(x){}if(!w)setTimeout(openWelcome,400)}
        toast(res.returning?`Welcome back, ${res.first_name}`:"You're checked in. Enjoy lunch!")}
      catch(x){S.busy=false;render();toast(errMsg(x))}break}
    case "showform":S.showForm=true;render();scrollTo(0,0);rpc("company_suggestions",{}).then(c=>{S.cos=c||[];const dl=$("#cos");if(dl)dl.innerHTML=S.cos.map(v=>`<option value="${esc(v)}">`).join("")}).catch(()=>{});setTimeout(()=>{const f=$("#fn");f&&f.focus()},50);break;
    case "hideform":keepReg();S.showForm=false;render();break;
    case "close":close();break;
    case "logoutask":sheet(`<h2 style="margin:6px 0 8px;font-size:20px;font-weight:900">Log out?</h2><p class="muted">You can come back any time. Check in again with the same first name, last name and company and your profile, quiz and feedback will be restored.</p><div style="height:14px"></div><button class="btn" data-a="signout">LOG OUT</button><div style="height:8px"></div><button class="btn ghost" data-a="close">STAY CHECKED IN</button>`);break;
    case "signout":try{localStorage.removeItem("ac26_token")}catch(x){}location.reload();break;
    case "ask":{const t=$("#qt").value.trim();if(t.length<5){toast("Type your question first");return}b.disabled=true;
      try{const id=await rpc("ask_question",{p_token:S.token,p_session:S.qaSession,p_body:t,p_anonymous:$("#anon").checked});S.myVotes.add(id);S.myQs.add(id);S.qaSort="new";toast("Question sent")}catch(x){toast(errMsg(x))}
      await loadPublic().catch(()=>{});render();break}
    case "word":{const w=($("#wd").value||"").trim().split(/\s+/)[0];if(!w){toast("Type one word");return}b.disabled=true;
      try{await rpc("add_word",{p_token:S.token,p_word:w.slice(0,18)});S.myWord=w}catch(x){toast(errMsg(x))}await loadPublic().catch(()=>{});render();break}
    case "next":{const t=S.trivia;if(t.i+1<TRIVIA.length){t.i++;t.picked=null;render()}else{try{await rpc("submit_trivia",{p_token:S.token,p_score:t.score});S.myTrivia=t.score}catch(x){toast(errMsg(x))}await loadPublic().catch(()=>{});render()}break}
    case "saverate":{const dr=S._draft||{id:d.sid,stars:(S.ratings[d.sid]||{}).stars};if(!dr.stars)return;const c=$("#rc").value.trim();b.disabled=true;
      try{await rpc("rate_session",{p_token:S.token,p_session:dr.id,p_stars:dr.stars,p_comment:c});S.ratings[dr.id]={stars:dr.stars,comment:c};S._draft=null;close();render();toast("Rating saved")}catch(x){b.disabled=false;toast(errMsg(x))}break}
    case "overall":{const F=S.fbf;FB_TEXT.forEach(([k])=>F[k]=$("#ft_"+k).value.trim());
      const miss=[...FB_SCALES.map(x=>x[0]),...FB_STARS.map(x=>x[0])].find(k=>!F[k]);if(miss){toast("Please answer every rating question");return}
      const missT=FB_TEXT.find(([k])=>!F[k]);if(missT){toast("Please answer: "+missT[1]);$("#ft_"+missT[0]).focus();return}
      b.disabled=true;try{await rpc("submit_feedback_v2",{p_token:S.token,p:F});S.feedback={...F};render();toast(S.ce.passed?"Thank you! Certificate unlocked":"Thank you for your feedback")}catch(x){b.disabled=false;toast(errMsg(x))}break}
    case "postphoto":{const pb=$("#pbtn");pb.disabled=true;pb.textContent="UPLOADING...";
      try{const path=`uploads/${(crypto.randomUUID?crypto.randomUUID():Date.now()+"-"+Math.random().toString(36).slice(2))}.jpg`;
        const up=await sb.storage.from("photos").upload(path,S._pendingBlob,{contentType:"image/jpeg"});if(up.error)throw up.error;
        await rpc("add_photo",{p_token:S.token,p_path:path,p_caption:$("#pcap").value});
        S._pendingBlob=null;close();await loadPublic();render();scrollTo(0,0);toast("Photo posted")}
      catch(x){pb.disabled=false;pb.textContent="POST PHOTO";toast(errMsg(x))}break}
    case "cert":await certFontReady();sheet(Cert());break;
    case "welcome":openWelcome();break;
    case "welcomedone":$("#welcome").classList.remove("open");S.welcome=null;try{localStorage.setItem("ac26_welcomed","1")}catch(x){}toast("Enjoy AudConnect 2026!");break;
    case "certpdf":{b.disabled=true;b.textContent="PREPARING PDF...";try{saveBlob(await certPDF(S.me.fn,S.me.ln),certName(S.me.fn,S.me.ln))}catch(e){toast("Couldn't create the PDF")}b.disabled=false;b.textContent="DOWNLOAD PDF";break}
    case "certall":{try{await loadAdmin()}catch(e){}const E=(S.adx||[]).filter(x=>x.certificate_eligible);if(!E.length){toast("No certificates yet");break}
      b.disabled=true;const zip=new JSZip();const used={};
      try{for(let k=0;k<E.length;k++){b.textContent=`PREPARING ${k+1} OF ${E.length}...`;let n=certName(E[k].first_name,E[k].last_name);if(used[n]){used[n]++;n=n.replace(".pdf",`_${used[n]}.pdf`)}else used[n]=1;zip.file(n,await certPDF(E[k].first_name,E[k].last_name))}
        saveBlob(await zip.generateAsync({type:"blob"}),"AudConnect2026_Certificates.zip");toast(`${E.length} certificates downloaded`)}catch(e){toast("Couldn't create the certificates")}
      b.disabled=false;b.textContent="DOWNLOAD ALL CERTIFICATES (ZIP)";break}
    case "cestart":{S.quiz={qs:null,i:0,answers:{},result:null};S.tab="fb";renderQuiz();try{S.quiz.qs=await rpc("ce_get_questions",{p_token:S.token})}catch(x){S.quiz=null;render();toast(errMsg(x));break}renderQuiz();break}
    case "cenext":S.quiz.i++;renderQuiz();break;
    case "ceprev":S.quiz.i--;renderQuiz();break;
    case "cesubmit":{b.disabled=true;try{const r=await rpc("ce_submit",{p_token:S.token,p_answers:S.quiz.answers});S.quiz.result=r;await loadMine().catch(()=>{});renderQuiz()}catch(x){b.disabled=false;toast(errMsg(x))}break}
    case "ceclose":S.quiz=null;render();scrollTo(0,0);break;
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
    case "exportxlsx":{try{await loadAdmin()}catch(x){}const t=d=>d?new Date(d).toLocaleString("en-SG",{timeZone:"Asia/Singapore",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:false}):"";
      const rows=(S.adx||[]).map(x=>({"First Name":x.first_name,"Last Name":x.last_name,"Company":x.company,"SAPS Member":x.saps_member?"Yes":x.saps_member===false?"No":"","Committee":x.is_committee?"Yes":"","Check In Time (SGT)":t(x.checked_in_at),"Feedback Submitted (SGT)":t(x.feedback_first_at),"Feedback Last Updated (SGT)":t(x.feedback_last_at),"Overall Satisfaction (1-5)":x.satisfaction??"","Met Expectations (1-5)":x.expectations??"","Food":x.food??"","Venue":x.venue??"","Panel Discussion":x.panel??"","Posters":x.posters??"","Booths":x.booths??"","Programme Flow and Duration":x.flow??"","Most Valuable Sessions":x.valuable||"","Future Topics":x.future_topics||"","Other Feedback":x.other_feedback||"","CE Attempts":x.ce_attempts||0,"CE Best Score":x.ce_best_score!=null?`${x.ce_best_score}/${x.ce_total}`:"","CE Passed":x.ce_passed?"Yes":"No","CE Passed Time (SGT)":t(x.ce_passed_at),"CE Last Attempt (SGT)":t(x.ce_last_at),"Certificate Eligible":x.certificate_eligible?"Yes":"No"}));
      if(window.XLSX){const ws=XLSX.utils.json_to_sheet(rows);ws["!cols"]=Object.keys(rows[0]||{a:1}).map(k=>({wch:Math.max(12,k.length+2)}));const wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,"AudConnect 2026");XLSX.writeFile(wb,"AudConnect2026_attendance_CE_feedback.xlsx")}
      else{const keys=Object.keys(rows[0]||{});downloadCSV("AudConnect2026_attendance_CE_feedback.csv",[keys,...rows.map(r=>keys.map(k=>r[k]))])}
      break}
    case "exportatt":downloadCSV("audconnect2026-attendance.csv",[["First name","Last name","Company","SAPS member","Checked in (SGT)"],...S.ad.attendees.map(a=>[a.first_name,a.last_name,a.company,a.saps_member?"Yes":a.saps_member===false?"No":"",new Date(a.checked_in_at).toLocaleString("en-SG",{timeZone:"Asia/Singapore"})])]);break;
    case "exportfb":downloadCSV("audconnect2026-feedback.csv",[["Type","Item","Score","Comment"],...S.ad.feedback.flatMap(f=>[["Event","Overall satisfaction",f.satisfaction,""],["Event","Met expectations",f.expectations,""],...FB_STARS.map(([k,l])=>["Event",l,f[k],""]),["Event","Most valuable sessions","",f.valuable||""],["Event","Future topics","",f.next_topic||""],["Event","Other feedback","",f.other||""]]),...S.ad.ratings.map(r=>["Session",(SESSIONS.find(s=>s.id===r.session_id)||{}).title||r.session_id,r.stars,r.comment||""])]);break;
  }
});
document.addEventListener("input",e=>{const t=e.target;if(t.id==="fe")S.fbf.email=t.value;else if(t.id&&t.id.startsWith("ft_"))S.fbf[t.id.slice(3)]=t.value});
document.addEventListener("dblclick",e=>{const im=e.target.closest("[data-dbl]");if(!im)return;const id=+im.dataset.dbl;if(!S.myLikes.has(id)){const btn=document.querySelector(`[data-like="${id}"]`);btn&&btn.click()}});
document.addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.classList&&e.target.classList.contains("ag-in")){e.preventDefault();const b=document.querySelector(`[data-cmpost="${e.target.dataset.cmin}"]`);b&&b.click()}});
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

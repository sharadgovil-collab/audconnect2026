/* AudConnect 2026 app logic. Images live in index.html (window IMG). */
/* ============ Event content: edit this block to reuse the app next year ============ */
const EVENT={kicker:"AUDCONNECT 2026",theme:"Driving Efficiency, Enhancing Care",date:"10 October 2026",time:"12:30 to 6:00 PM",lunch:"Lunch from 12:30 to 2:00 PM",room:"Level 3, Room 300-302",venue:"Suntec Singapore",cpe:"Participation in this event is recognised with 4 CPE points under Pillar 1 of the SAPS CPE program.",host:"Society for Audiology Professionals Singapore"};
const SPEAKERS={
  sg:{name:"Dr. Sharad Govil",role:"President",org:"SAPS",bio:["Dr. Sharad Govil is an audiologist and healthcare entrepreneur with over 25 years of experience across Singapore, New Zealand, China and the wider Asian region. He brings a blend of clinical expertise and commercial insight, having been instrumental in establishing and growing businesses for Phonak and GN ReSound in Singapore and other Asian markets. His clinical focus includes hearing aids, tinnitus management and auditory training. As CEO of Amazing Hearing Group, he is leading its digital transformation and the responsible use of AI, with people at the heart of care. As President of the Society for Audiology Professionals (Singapore), he is committed to strengthening professional standards and building a united audiology community with greater autonomy and recognition for audiologists."]},
  ss:{name:"Sadrina Shah",role:"Host & Asst. Treas.",org:"SAPS",host:true,bio:["Sadrina Shah is an audiologist and Product Specialist & Trainer at Demant, supporting its diagnostic products. She holds a Master of Science in Audiology from the National University of Singapore and brings clinical experience in hearing and balance assessment to her work in product support and training. Her interest in audiology began through a university friendship with someone with hearing loss, which introduced her to sign language and the Deaf community. As Assistant Treasurer of the Society for Audiology Professionals (Singapore), she wears multiple hats and leads the organisation of AUDCONNECT 2026, helping bring the audiology community together."]},
  su:{name:"Su Junqiang",role:"Host & VP",org:"SAPS",host:true,bio:["Su Junqiang is a Senior Audiologist at Woodlands Health and Vice President of the Society for Audiology Professionals (Singapore). He holds a Master of Science in Audiology from the National University of Singapore, where his research explored the effect of hearing aids on balance in older adults with hearing loss. Having previously served as SAPS’ Public Affairs Officer, he brings a sustained commitment to supporting the profession. He has made significant contributions to its Continuing Professional Education programme and played a key role in organising and consolidating documents for its self regulation initiative. His work reflects a commitment to helping fellow audiologists learn, collaborate and shape the future of audiology."]},
  jo:{name:"Jessica Ong",role:"Clinical Specialist",org:"Cochlear",bio:["Jessica holds a Master of Audiology and a Bachelor of Biomedical Science from the University of Auckland. With clinical experience across New Zealand and Singapore, she has extensive experience supporting patients with complex hearing loss and hearing implants. In her role with Cochlear, Jessica partners with clinicians and healthcare teams across the country to support cochlear implant services, foster strong clinical partnerships, and improve access to implantable hearing solutions and outcomes for people with significant hearing loss."]},
  rt:{name:"Renato Tan",role:"Business Development Manager",org:"Cochlear",bio:["Renato Tan completed his Master in Clinical Audiology at the University of Santo Tomas, Manila, in 2007. He moved to Singapore in 2010 to join Cochlear, helping Southeast Asian countries raise awareness of hearing implants and build local expertise. From 2017 he led Cochlear's Singapore team, working closely with hearing professionals and recipients. Since 2021 he has held a regional role for Cochlear's Acoustics portfolio, championing bone conduction solutions and meeting Baha recipients across seven countries. He will share how bone conduction technology has evolved to change many lives for the better."]},
  rh:{name:"Dr. Rebecca Heywood",role:"Senior Consultant ENT Surgeon",org:"The ENT Clinic",bio:["Dr Rebecca Heywood is a UK-trained ENT specialist and fellowship-trained Ear and Hearing Surgeon based at The ENT Clinic in Singapore. With over 25 years of experience across the UK, Australia and Singapore, she cares for adults and children with a wide range of ear and hearing problems, with particular expertise in hearing restoration and implantable hearing technologies.","She has established and led cochlear implant services, contributed to hearing research and implant development, and participated in World Health Organization ear and hearing care initiatives. Rebecca is also an active researcher and educator, passionate about improving hearing health and helping people stay connected throughout life."]},
  ct:{name:"Chermaine Teo",role:"Founder & Audiologist",org:"Faith Hearing Specialists",bio:["Chermaine Teo is the Founder and Audiologist of Faith Hearing Specialists, Singapore. She holds a Master of Audiology from the University of Southampton, UK, and received clinical training in cochlear implantation at the Southampton Auditory Implant Centre.","Her clinical interests include cochlear implants, tinnitus, and the rehabilitation of individuals with long-standing hearing loss and auditory deprivation. Her work includes cochlear implant assessment, mapping and rehabilitation, as well as supporting individuals with severe and debilitating tinnitus. Based in private practice, Chermaine sees patients from Singapore and overseas and also travels regionally to provide audiological care. Her caseload includes individuals with diverse hearing histories, with a particular interest in those seeking hearing intervention after many years of hearing loss or auditory deprivation."]},
  tt:{name:"Tammy Toh",role:"Growth Associate",org:"Heidi",bio:["Tammy is a Clinical Growth Associate at Heidi, where she partners with clinicians and healthcare organisations to understand their pain points, tailor onboarding and support, and build workflow-specific templates that reduce documentation burden and improve efficiency. Having previously worked in healthcare organisations, she understands firsthand the administrative pressures clinicians face.","Heidi is building an AI Care Partner to expand clinical capacity by automating administrative work, including documentation, form filling, and task management, so clinicians can focus on patient care. Today, Heidi supports more than 2 million consultations each week across 110 languages and 190 countries."]},
  at:{name:"Adam Tan",role:"Head of Audiology Services",org:"Singapore General Hospital",bio:["Adam Tan serves as the Head of Audiology Services at Singapore General Hospital, where he actively drives quality improvement and process transformation. As a GROSS (Get Rid of Silly Stuff) coach, he empowers teams to cut through operational bottlenecks by introducing practical digital and automation tools like Excel VBA, Pair Assistant, Power Automate, and Robotic Process Automations. Having led multiple successful quality improvement projects over the years, Adam's focus on eliminating redundant work earned top prizes at the SGH GROSS Awards. He also contributes to health system innovation through SingHealth's Allied Health Data and Innovation Taskforce."]},
  al:{name:"Alan Tseng",role:"Senior Audiologist",org:"Singapore General Hospital",bio:["Tseng Chien Chih Alan is a Senior Audiologist at Singapore General Hospital with a keen interest in healthcare innovation and digital transformation. He has been actively involved in quality improvement initiatives, contributing to projects that leverage Microsoft automation, VBA coding, robotic process automation (RPA), and AI tools. Through collaboration between Clinical Operations and Digital/Data teams, he supports the development of efficient and sustainable clinical workflows."]},
  th:{name:"Teoh Hui Yee",role:"Senior Audiologist",org:"Singapore General Hospital",bio:["Teoh Hui Yee is an audiologist at Singapore General Hospital, interested in bridging clinical practice with digital health and technology. As part of the department's digital health and data portfolio, she works with the team to explore how digital solutions can improve workflows and support more efficient healthcare delivery. She is actively involved in designing and implementing workflow automation using Microsoft Power Automate, translating day-to-day operational challenges into practical digital solutions."]},
  ls:{name:"Lee Si Ting",role:"Senior Audiologist",org:"Ng Teng Fong General Hospital",bio:["Lee Si Ting is a Senior Audiologist at Ng Teng Fong General Hospital (NTFGH) with over five years of clinical experience. She holds a Master of Science in Audiology from the National University of Singapore, with expertise in vestibular assessment and management. Committed to patient-centred hearing and balance care, she contributes actively to service innovation and process improvement. As a key member of the Automated Audiometry Workplan Group, she helps optimise automated audiometric testing to improve efficiency, workflows and patient experience. She is Secretary of SAPS and has served two terms on the SAPS Committee."]},
  fm:{name:"Fu Manjia",role:"Senior Audiologist",org:"Ng Teng Fong General Hospital",bio:["Fu Manjia is a Senior Audiologist at Ng Teng Fong General Hospital (NTFGH) and holds a Master of Science in Audiology from the National University of Singapore. She is committed to delivering high quality audiological services and exploring new ways to improve patient care, with a strong interest in healthcare innovation and emerging technologies. As a key member of the Automated Audiometry Workplan Group, she supports her team in developing an automated audiometry booth workplan to make hearing assessments at NTFGH more efficient and accessible."]},
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
const EXCO_SIG="Sharad · Junqiang · Si Ting · Isshani · Charis · Augustin · Sadrina · Kavya";
const EXCO_SIG_NO_SG="Junqiang · Si Ting · Isshani · Charis · Augustin · Sadrina · Kavya";
const INSTITUTIONS=["Alexandra Hospital","Amazing Hearing","Changi General Hospital","Cochlear","Demant","Faith Hearing Specialists","GN Hearing","Heidi","KK Women's and Children's Hospital","Khoo Teck Puat Hospital","National University Hospital","Ng Teng Fong General Hospital","Sengkang General Hospital","Singapore General Hospital","Sonova","Starkey","Tan Tock Seng Hospital","The ENT Clinic","Woodlands Health","WS Audiology"];
const SALUTATIONS=["","Dr.","Mr.","Ms.","Mrs.","Mdm.","Prof."];
const SPONSOR_RULES=[[/cochlear/i,"platinum","cochlear","Cochlear"],[/oticon|demant/i,"gold","oticon","Oticon"],[/phonak|sonova/i,"gold","phonak","Phonak"],[/signia/i,"gold","signia","Signia"],[/widex/i,"gold","widex","Widex"],[/ws ?audiology|\bwsa\b/i,"gold","signia","WS Audiology"],[/starkey/i,"gold","starkey","Starkey"],[/resound|\bgn\b/i,"silver","resound","ReSound"]];
function sponsorOf(co){if(!co)return null;for(const [re,tier,key,name] of SPONSOR_RULES)if(re.test(co))return {tier,key,name};return null}
const TIER_ICON={platinum:"🏆",gold:"🥇",silver:"🥈"};
const TIER_LABEL={platinum:"SAPS Platinum Sponsor",gold:"SAPS Gold Sponsor",silver:"SAPS Silver Sponsor"};
const hasRole=(m,r)=>((m&&m.roles)||[]).includes(r);
function roleTags(m){const t=[];if(hasRole(m,"organiser"))t.push(["organiser","Organiser"]);if(hasRole(m,"host"))t.push(["host","Host"]);if(hasRole(m,"speaker"))t.push(["speaker","Speaker"]);if(hasRole(m,"poster"))t.push(["poster","Poster Presenter"]);if(!t.length)t.push(["delegate",hasRole(m,"student")?"Delegate (Student)":hasRole(m,"nonaud")?"Delegate (Non-Aud)":"Delegate"]);return t}
const apprRole=m=>hasRole(m,"host")?"Host":hasRole(m,"speaker")?"Speaker":hasRole(m,"poster")?"Poster Presenter":null;
const fullName=m=>[m.sal,m.fn,m.ln].filter(Boolean).join(" ");
const POINTS_TABLE=[["Check in by 2:00 PM","5","once"],["Ask a question","2","up to 5"],["Your question is put on screen","+3",""],["Post a photo on Audigram","5","up to 4"],["Each like your photo receives","1","up to 10 per photo"],["Comment on a post","2","up to 10"],["Like a photo","1","up to 10"],["Vote in a poll","2","each poll"],["Add a word to a word cloud","2","each prompt"],["Rate a talk","2","each talk"],["Thumbs up a poster","1","each poster"],["Submit event feedback","5","once"],["Tell us someone new you met (feedback)","+8","once"]];
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
const EVENT_DATE="2026-10-10";

let S={
  token:null,me:null,committee:false,super:false,asSaps:false,reg:{member:null},ci:{step:"find"},pts:null,att:{here:0,registered:0},polls:[],prompts:[],myPolls:{},myWords:{},insts:[],adPrompts:[],adPts:[],adLog:[],tab:"prog",qaSession:"t1",qaSort:"top",playSeg:"qa",adQaSes:"all",fbf:{},
  q:[],myVotes:new Set(),myQs:new Set(),words:[],
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
const avatarUrl=p=>p?`${SB_URL}/storage/v1/object/public/photos/${p}`:null;
const photoSrc=p=>p.storage_path.startsWith("static/")?IMG[p.storage_path.slice(7)]:`${SB_URL}/storage/v1/object/public/photos/${p.storage_path}`;
const errMsg=e=>{const m=(e&&(e.message||e.error_description))||"";if(/company name/i.test(m))return "Please enter your company name";if(/opens at 5/i.test(m))return "Not open yet. Please check with the SAPS team";if(/closed/i.test(m))return m.charAt(0).toUpperCase()+m.slice(1);if(/not checked in/i.test(m))return "Please check in again";if(/Failed to fetch|NetworkError|network/i.test(m))return "No connection. Please try again";return "Something went wrong. Please try again"};
async function rpc(fn,args){const {data,error}=await sb.rpc(fn,args);if(error)throw error;return data}

/* ============ Loading shared data ============ */
async function loadPublic(){
  const [q,v,pr,w,cp,ph,lk,st,cm,pl,at]=await Promise.all([
    sb.from("questions").select("id,session_id,author_name,body,answered,created_at"),
    sb.from("question_votes").select("question_id"),
    sb.rpc("poll_results",{p_token:S.committee?S.token:null}),
    sb.from("words").select("word,prompt_id"),
    sb.from("cloud_prompts").select("id,prompt,status,opened_at,closed_at").order("id",{ascending:false}),
    sb.from("photos").select("id,author_name,caption,storage_path,created_at,author_kind,author_company,author_photo").order("created_at",{ascending:false}),
    sb.from("photo_likes").select("photo_id"),
    sb.from("stage_state").select("*").eq("id",1).maybeSingle(),
    sb.from("post_comments").select("id,target,author_name,body,created_at,author_kind,author_company,author_photo").order("created_at"),
    sb.rpc("post_likes"),
    sb.rpc("attendance_count")
  ]);
  if(q.data){const c={};(v.data||[]).forEach(r=>c[r.question_id]=(c[r.question_id]||0)+1);S.q=q.data.map(x=>({...x,votes:c[x.id]||0}))}
  if(pr&&pr.data)S.polls=pr.data;
  if(w.data)S.words=w.data;
  if(cp&&cp.data)S.prompts=cp.data;
  if(ph.data)S.photos=ph.data.filter(p=>!p.storage_path.startsWith("static/"));
  if(lk.data){const l={};lk.data.forEach(r=>l[r.photo_id]=(l[r.photo_id]||0)+1);S.likes=l}
  if(st.data)S.stage=st.data;
  if(cm&&cm.data){const g={};cm.data.forEach(r=>(g[r.target]=g[r.target]||[]).push(r));S.comments=g}
  if(pl&&pl.data)S.postLikes=pl.data;
  if(at&&at.data)S.att=at.data;
}
async function loadMine(){
  const d=await rpc("my_state",{p_token:S.token});
  setMe(d.profile);
  S.myVotes=new Set(d.question_votes||[]);S.myQs=new Set(d.my_questions||[]);
  S.myPolls=d.poll_votes||{};S.myWords=d.words||{};
  S.myLikes=new Set(d.photo_likes||[]);S.ratings=d.ratings||{};S.feedback=d.feedback;
  S.ce=d.ce||S.ce;S.cardsSeen=d.cards_seen||[];
  try{S.win=await rpc("window_status",{p_token:S.token})}catch(e){}
  try{S.pts=await rpc("my_points",{p_token:S.token})}catch(e){}
}
function setMe(p){S.me={fn:p.first_name,ln:p.last_name,co:p.company,member:p.saps_member===true?"yes":p.saps_member===false?"no":null,sal:p.salutation||"",title:p.title||"",mid:p.member_id||"",roles:p.roles||[],walk_in:p.walk_in,photo:p.photo_path||null};
  S.committee=p.committee===true;S.super=p.super===true}
let _ptsT=null;
async function bumpPoints(){clearTimeout(_ptsT);_ptsT=setTimeout(async()=>{try{const old=S.pts?S.pts.points:null;S.pts=await rpc("my_points",{p_token:S.token});
  const h=$("#hdrPts");if(h)h.textContent=S.pts.points;if(old!=null&&S.pts.points>old)setTimeout(()=>toast(`+${S.pts.points-old} point${S.pts.points-old>1?"s":""} ⭐`),1400)}catch(e){}},500)}
async function loadAdmin(){if(!S.committee)return;const [a,x,cm,pp,pt,lg,pr]=await Promise.all([rpc("admin_dashboard",{p_token:S.token}),rpc("admin_export",{p_token:S.token}),rpc("admin_comments",{p_token:S.token}).catch(()=>[]),rpc("admin_prompts",{p_token:S.token}).catch(()=>[]),rpc("admin_points",{p_token:S.token}).catch(()=>[]),S.super?rpc("super_log",{p_token:S.token}).catch(()=>[]):Promise.resolve([]),rpc("poll_results",{p_token:S.token}).catch(()=>null)]);S.ad=a;S.adx=x;S.adc=cm||[];S.adPrompts=pp||[];S.adPts=pt||[];S.adLog=lg||[];if(pr)S.polls=pr}

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


const HereNow=()=>`<div class="here"><i class="here-dot"></i><span><b>${S.att.here}</b> ${S.att.registered?`of ${S.att.registered} `:""}here now</span></div>`;
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
  return `<main>${CheckIn()}</main>`}
const instOptions=()=>[...new Set([...(S.insts||[]),...INSTITUTIONS])].sort((a,b)=>a.localeCompare(b));
function ciHead(back){return `<button class="hdr-btn" data-a="${back}" style="margin-top:16px">‹ Back</button>
  <div style="text-align:center;margin-top:10px"><img class="logo-img" style="width:72px;height:72px" src="${IMG.logo}" alt=""></div>
  <div class="rule-h" style="margin-top:18px">Check In</div>`}
function ciBadge(g){const m={sal:g.salutation,fn:g.first_name,ln:g.last_name,roles:g.roles||[]};const sp=sponsorOf(g.institution);
  return `<div class="badge confirm"><div class="body"><div class="nm">${esc(fullName(m))}</div>${g.title?`<p class="bd-t">${esc(g.title)}</p>`:""}
  <p class="bd-co">${esc(g.institution||"")}${sp?` ${TIER_ICON[sp.tier]}`:""}</p>${g.saps_member&&g.member_id?`<p class="bd-mid">MSAPS ${esc(g.member_id)}</p>`:""}
  <div class="rtags">${roleTags(m).map(([k,l])=>`<span class="rtag ${k}">${l}</span>`).join("")}<span class="rtag2 ${g.saps_member?"mem":"guest"}">${g.saps_member?"SAPS Member":"Guest"}</span></div></div></div>`}
function CheckIn(){const c=S.ci;
  if(c.step==="pick"&&c.card)return ciHead("ciback")+`<p class="muted" style="text-align:center;margin:0 0 12px">Is this you?</p>${ciBadge(c.card)}
    <div style="height:14px"></div><button class="btn" data-a="ciyes" ${S.busy?"disabled":""}>${S.busy?"CHECKING IN...":"YES, THAT'S ME"}</button><div style="height:8px"></div><button class="btn ghost" data-a="cinot">NOT ME</button>`;
  if(c.step==="form"){const m=S.reg.member;const insts=instOptions();const other=S.reg.coSel==="__other";
    return ciHead("ciback")+`<p class="muted" style="text-align:center;margin:0 0 4px">Enter your details to check in.</p>
    <label class="lbl" for="sal">Salutation (optional)</label><select id="sal" class="field">${SALUTATIONS.map(x=>`<option value="${x}" ${x===(S.reg.sal||"")?"selected":""}>${x||"None"}</option>`).join("")}</select>
    <label class="lbl" for="fn">First name</label><input id="fn" class="field" autocomplete="given-name" value="${esc(S.reg.fn||"")}">
    <label class="lbl" for="ln">Last name</label><input id="ln" class="field" autocomplete="family-name" value="${esc(S.reg.ln||"")}">
    <label class="lbl" for="ti">Job title (optional)</label><input id="ti" class="field" placeholder="e.g. Senior Audiologist" value="${esc(S.reg.ti||"")}">
    <label class="lbl" for="cosel">Institution</label><select id="cosel" class="field"><option value="">Choose your institution</option>${insts.map(x=>`<option ${x===S.reg.coSel?"selected":""}>${esc(x)}</option>`).join("")}<option value="__other" ${other?"selected":""}>Other (type it in)</option></select>
    ${other?`<input id="co" class="field" style="margin-top:8px" placeholder="Your institution or company" value="${esc(S.reg.co||"")}">`:""}
    <label class="lbl">SAPS member</label><div class="yn" role="radiogroup"><button data-mem="yes" aria-pressed="${m==="yes"}">Yes</button><button data-mem="no" aria-pressed="${m==="no"}">No</button></div>
    <p class="small muted" style="margin-top:8px">Checked in before? Use the same name and institution to pick up where you left off.</p>
    <div style="height:10px"></div><button class="btn" data-a="checkin" ${S.busy?"disabled":""}>${S.busy?"CHECKING IN...":"CHECK IN"}</button>`}
  return ciHead("hideform")+`<p class="muted" style="text-align:center;margin:0 0 4px">Find yourself on the registration list.</p>
    <label class="lbl" for="fn">First name</label><input id="fn" class="field" autocomplete="given-name" value="${esc(S.reg.fn||"")}">
    <label class="lbl" for="ln">Last name</label><input id="ln" class="field" autocomplete="family-name" value="${esc(S.reg.ln||"")}">
    <div style="height:14px"></div><button class="btn" data-a="cifind" ${S.busy?"disabled":""}>${S.busy?"SEARCHING...":"FIND ME"}</button>
    ${c.searched?(c.results&&c.results.length?`<div class="rule-h">Is one of these you?</div><div class="list">${c.results.map(r=>`<button class="item" data-cipick="${r.id}"><span style="flex:1"><b style="display:block">${esc(r.name)}</b><span class="small muted">${esc(r.inst||"")}</span></span><span class="pill">That's me ›</span></button>`).join("")}</div>`
      :`<div class="box" style="margin-top:16px;text-align:center"><p style="margin:0 0 12px">We couldn't find you on the registration list.</p><button class="btn" data-a="ciform">ENTER MY DETAILS</button></div>`):""}
    <p style="text-align:center;margin-top:18px"><button class="linkbtn" data-a="ciform">Not on the list? Enter your details</button></p>`}
function Prog(){const now=nowSession();return Hero()+HereNow()+`
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
let _certFont=null,_certBook=null;
function certBookReady(){if(!_certBook){try{const f=new FontFace("CertBook","url(https://cdn.jsdelivr.net/gh/ArtifexSoftware/urw-base35-fonts@20200910/fonts/URWGothic-Book.otf)",{weight:"400"});_certBook=f.load().then(x=>{document.fonts.add(x);return true}).catch(()=>false)}catch(e){_certBook=Promise.resolve(false)}}return _certBook}
function certFontReady(){if(!_certFont){try{const f=new FontFace("CertGothic","url(https://cdn.jsdelivr.net/gh/ArtifexSoftware/urw-base35-fonts@20200910/fonts/URWGothic-Demi.otf)",{weight:"700"});_certFont=f.load().then(x=>{document.fonts.add(x);return true}).catch(()=>false)}catch(e){_certFont=Promise.resolve(false)}}return _certFont}
const certFull=(fn,ln)=>`${fn} ${ln}`.replace(/\s+/g," ").trim().toUpperCase();
function certScale(name){const cv=document.createElement("canvas").getContext("2d");cv.font=`700 100px CertGothic, "Century Gothic", Montserrat, sans-serif`;const w=cv.measureText(name).width/100;const base=CERT.size*CERT.h;return Math.min(1,(CERT.maxW*CERT.w)/(w*base))}
const apprLine=r=>`in recognition of your valuable contribution as ${r==="Host"?"a Host":r==="Speaker"?"a Speaker":"a Poster Presenter"} at`;
const CERT_R={cx:.4982,y:1463/2338,size:33/2338,maxW:.84};
function certHTML(fn,ln,role){const name=certFull(fn,ln);const k=certScale(name);
  return `<div class="certwrap"><div class="pc3" role="img" aria-label="Certificate of ${role?"appreciation":"participation"} for ${esc(name)}"><img src="${role?"cert-appr.webp":"cert-bg.webp"}" alt=""><div class="pc3n" style="font-size:${(CERT.size*CERT.h/CERT.w*100*k).toFixed(3)}cqw">${esc(name)}</div>${role?`<div class="pc3r" style="top:${(CERT_R.y*100).toFixed(2)}%;font-size:${(CERT_R.size*CERT.h/CERT.w*100).toFixed(3)}cqw">${esc(apprLine(role))}</div>`:""}</div></div>`}
function CertAppr(){const r=apprRole(S.me);return certHTML(S.me.fn,S.me.ln,r)+`
  <p class="small" style="margin:12px 0 0;text-align:center;font-style:italic;color:#DCE1EE">Thank you for your contribution to AudConnect 2026.</p>
  <div style="height:12px"></div><button class="btn" data-a="certapprpdf">DOWNLOAD PDF</button><div style="height:8px"></div><button class="btn ghost" data-a="close">DONE</button>`}
function Cert(){return certHTML(S.me.fn,S.me.ln)+`
  <p class="small" style="margin:12px 0 0;text-align:center;font-style:italic;color:#DCE1EE">${esc(EVENT.cpe)}</p>
  <div style="height:12px"></div><button class="btn" data-a="certpdf">DOWNLOAD PDF</button><div style="height:8px"></div><button class="btn ghost" data-a="close">DONE</button>`}

const sesLabel=id=>{const x=SESSIONS.find(v=>v.id===id);return x?(x.n?x.n+"  ":"")+x.title:"General"};
const isSaps=q=>q.author_name==="SAPS";
function qMeta(q){return `<div class="qmeta">${isSaps(q)?'<span class="pill saps">From SAPS</span>':`<span>${esc(q.author_name)}</span>`}<span class="qtag">${esc(sesLabel(q.session_id))}</span>${q.answered?'<span class="pill ok">Answered</span>':""}</div>`}
function QA(){const qs=S.q.slice().sort((a,b)=>(isSaps(b)-isSaps(a))||(S.qaSort==="top"?(a.answered-b.answered)||b.votes-a.votes:b.id-a.id));
  return `${SapsBar()}<div class="box"><label class="lbl" for="qs" style="margin-top:0">Your question is for</label>
  <select id="qs" class="field">${rateable().map(s=>`<option value="${s.id}" ${s.id===S.qaSession?"selected":""}>${s.n?s.n+"  ":""}${esc(s.title)}</option>`).join("")}</select>
  <div style="height:12px"></div><textarea id="qt" class="field" rows="3" maxlength="240" placeholder="Type your question"></textarea>
  ${S.super&&S.asSaps?`<p class="small" style="margin:10px 0;color:var(--gold);font-weight:700">This question will be posted as SAPS ✓</p>`:`<label style="display:flex;gap:8px;align-items:center;margin:10px 0" class="small"><input type="checkbox" id="anon"> Ask anonymously</label>`}
  <button class="btn" data-a="ask">SEND QUESTION</button></div>
  <p class="small muted" style="margin:18px 0 0">Like the questions you want answered. The most liked rise to the top for the moderator.</p>
  <div class="seg" style="margin-top:10px"><button data-sort="top" aria-pressed="${S.qaSort==="top"}">Most liked</button><button data-sort="new" aria-pressed="${S.qaSort==="new"}">Newest</button></div>
  <div class="list">${qs.length?qs.map(q=>`<div class="q${isSaps(q)?" q-saps":""}"><button class="up" data-up="${q.id}" aria-pressed="${S.myVotes.has(q.id)}" aria-label="Like this question">${I.up}${q.votes}</button><div style="flex:1"><div>${esc(q.body)}</div>${qMeta(q)}</div></div>`).join(""):`<div class="q"><span class="muted">No questions yet. Be the first to ask.</span></div>`}</div>`}

const ago=d=>{const s=Math.max(1,(Date.now()-new Date(d))/1000);if(s<60)return "JUST NOW";const m=s/60;if(m<60)return Math.floor(m)+(Math.floor(m)===1?" MINUTE AGO":" MINUTES AGO");const h=m/60;if(h<24)return Math.floor(h)+(Math.floor(h)===1?" HOUR AGO":" HOURS AGO");return new Date(d).toLocaleDateString("en-SG",{day:"numeric",month:"long"}).toUpperCase()};
const AG={heart:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.6s-7.6-4.6-9.5-9.3C1.1 7.8 3.3 4.2 6.9 4.2c2.1 0 3.6 1.2 5.1 3 1.5-1.8 3-3 5.1-3 3.6 0 5.8 3.6 4.4 7.1-1.9 4.7-9.5 9.3-9.5 9.3z"/></svg>',
  bubble:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.7 12a8.6 8.6 0 0 1-12.6 7.6L3.3 21l1.4-4.6A8.6 8.6 0 1 1 20.7 12z"/></svg>'};
function postAvatar(p){return p.author_kind==="saps"?agAvatar("SAPS",IMG.logo):agAvatar(p.author_name,p.author_photo?avatarUrl(p.author_photo):null)}
function authorName(p){const sp=p.author_kind==="saps"?null:sponsorOf(p.author_company);return `${esc(p.author_name)}${p.author_kind==="saps"?' <span class="saps-ok" title="Official SAPS post">✓</span>':""}${sp?` <span title="${TIER_LABEL[sp.tier]}">${TIER_ICON[sp.tier]}</span>`:""}`}
function agAvatar(name,img){return img?`<span class="ag-av ring"><img src="${img}" alt=""></span>`:`<span class="ag-av ring"><b>${esc(ini(name||"?"))}</b></span>`}
function agComments(target,limit){const L=S.comments[target]||[];const open=S.openCm[target];const show=open?L:L.slice(-(limit||2));
  return `${L.length>show.length?`<button class="ag-more" data-cmopen="${target}">View all ${L.length} comments</button>`:""}
  ${show.map(r=>`<p class="ag-cm"><b>${authorName(r)}</b> ${esc(r.body)}</p>`).join("")}
  <div class="ag-add"><input class="ag-in" data-cmin="${target}" maxlength="200" placeholder="Add a comment…" aria-label="Add a comment"><button class="ag-post" data-cmpost="${target}">Post</button></div>`}
function agBrand(){return `<div class="ag-brand"><span>Audigram</span></div>`}
function SapsBar(){return S.super?`<button class="sapsbar ${S.asSaps?"on":""}" data-a="assaps"><img src="${IMG.logo}" alt=""><span>${S.asSaps?"Posting as <b>SAPS</b>. Tap to post as yourself":"Posting as yourself. Tap to post as <b>SAPS</b>"}</span></button>`:""}
function Engage(){const g=S.playSeg;return `<h1 class="page-title">Engage</h1><p class="tag">Ask and vote live</p><div style="height:14px"></div>
  <div class="seg"><button data-seg="qa" aria-pressed="${g==="qa"}">Q&amp;A</button><button data-seg="poll" aria-pressed="${g==="poll"}">Poll</button><button data-seg="cloud" aria-pressed="${g==="cloud"}">Words</button></div>
  ${g==="poll"?Poll():g==="cloud"?Cloud():QA()}`}
function Photos(){return `<div class="ag-head"><span class="ag-word">Audigram</span><span class="small muted">audconnect2026</span></div>${SapsBar()}
  <label class="upl" for="pfile">${I.cam}<b>Share your event photos on Audigram</b><span class="small muted">Snap a moment, add a caption, and the best ones appear on the big screen.</span></label>
  <input id="pfile" type="file" accept="image/*" style="position:absolute;left:-9999px" aria-label="Choose a photo">
  ${S.photos.length?"":`<div class="ag-card ag-empty"><div class="ag-empty-ic">${I.cam}</div><b>Share Photos</b><p>When people share photos from AudConnect 2026, they will appear here.</p><label class="ag-empty-btn" for="pfile">Share your first photo</label></div>`}
  <div class="feed ag-feed">${S.photos.map(p=>{const t="photo:"+p.id;const n=S.likes[p.id]||0;const liked=S.myLikes.has(p.id);return `<article class="ag-card">
   <header class="ag-top">${postAvatar(p)}<div><b>${authorName(p)}</b><span>AudConnect 2026 · Suntec Singapore</span></div></header>
   <div class="ag-media"><img src="${photoSrc(p)}" alt="${esc(p.caption||"Event photo")}" loading="lazy" data-dbl="${p.id}"></div>
   <div class="ag-acts"><button class="ag-ic heart ${liked?"on":""}" data-like="${p.id}" aria-pressed="${liked}" aria-label="Like">${AG.heart}</button><button class="ag-ic" data-cmfocus="${t}" aria-label="Comment">${AG.bubble}</button></div>
   <p class="ag-likes">${n} like${n===1?"":"s"}</p>
   ${p.caption?`<p class="ag-cap"><b>${authorName(p)}</b> ${esc(p.caption)}</p>`:""}
   ${agComments(t)}
   <p class="ag-time">${ago(p.created_at)}</p></article>`}).join("")}</div>`}
function PhotoCompose(){return `<img src="${S._pendingUrl}" alt="" style="width:100%;max-height:50vh;object-fit:contain;border-radius:12px;background:#000">
  <label class="lbl" for="pcap">Caption (optional)</label><input id="pcap" class="field" maxlength="120" placeholder="Say something about this moment">
  ${S.super&&S.asSaps?`<p class="small" style="margin-top:10px;color:var(--gold);font-weight:700">Posting as SAPS ✓</p>`:""}<p class="small muted" style="margin-top:10px">Photos are visible to everyone at the event. Please ask before posting photos of others.</p>
  <button class="btn" data-a="postphoto" id="pbtn">SHARE ON AUDIGRAM</button>`}
const livePoll=()=>S.polls.find(p=>p.status==="live");
const lastClosed=()=>S.polls.filter(p=>p.status==="closed").sort((a,b)=>new Date(b.closed_at||0)-new Date(a.closed_at||0))[0];
function pollRes(p,my,big){const c=p.counts||[];const t=c.reduce((a,b)=>a+b,0);const mx=Math.max(0,...c);
  return p.options.map((o,i)=>{const n=c[i]||0;const pc=t?Math.round(n/t*100):0;return `<div class="pr${n&&n===mx?" lead":""}${big?" big":""}"><div class="pr-l"><span>${esc(o)}${my===i?" ✓":""}</span><b>${pc}%</b></div><div class="hbar grow"><i style="--w:${pc}%"></i></div></div>`}).join("")+`<p class="small muted" style="margin:6px 0 0">${t} vote${t===1?"":"s"}</p>`}
function Poll(){const lp=livePoll();let h="";
  if(lp){const my=S.myPolls[String(lp.id)];h=`<div class="box"><span class="pill live">● LIVE POLL</span><p style="font-weight:800;font-size:17px;margin:10px 0 4px">${esc(lp.question)}</p><p class="small muted" style="margin:0 0 10px">${lp.total} vote${lp.total===1?"":"s"} so far</p>
    ${lp.options.map((o,i)=>`<button class="opt" data-pvote="${lp.id}:${i}" aria-pressed="${my===i}"><span>${esc(o)}${my===i?" ✓":""}</span></button>`).join("")}
    ${my!=null?`<p class="small" style="margin:8px 0 0;color:var(--ok);font-weight:700">✓ Vote recorded. Results will be shown when the poll closes.</p><p class="small muted" style="margin:2px 0 0">You can change your vote until then.</p>`:`<p class="small muted" style="margin:8px 0 0">Results are revealed on your phone and the big screen when the poll closes.</p>`}</div>`}
  else h=`<div class="box" style="text-align:center"><div style="font-size:30px">📊</div><p style="font-weight:800;margin:6px 0 4px">No poll running right now</p><p class="small muted" style="margin:0">The next poll appears here as soon as the host opens it.</p></div>`;
  const closed=S.polls.filter(p=>p.status==="closed");
  if(closed.length)h+=`<div class="rule-h">Results</div>`+closed.map(p=>`<div class="box" style="margin-bottom:10px"><p style="font-weight:800;margin:0 0 10px">${esc(p.question)}</p>${pollRes(p,S.myPolls[String(p.id)])}</div>`).join("");
  return h}
const livePrompt=()=>S.prompts.find(p=>p.status==="live");
function wordCounts(pid){const c={};S.words.filter(w=>w.prompt_id===pid).forEach(({word:w})=>{const k=w.charAt(0).toUpperCase()+w.slice(1).toLowerCase();c[k]=(c[k]||0)+1});return Object.entries(c).sort((a,b)=>b[1]-a[1]).slice(0,40)}
function cloudHtml(pid,big){const e=wordCounts(pid);if(!e.length)return `<span class="muted" style="font-size:${big?24:14}px">Be the first to add a word</span>`;const mx=e[0][1];const c=["var(--red-t)","#fff","var(--grey)"];
  return e.map(([w,n],i)=>`<span style="font-size:${14+Math.round(n/mx*(big?52:26))}px;color:${c[i%3]}">${esc(w)}</span>`).join("")}
function Cloud(){const lp=livePrompt();let h="";
  if(lp){const mine=S.myWords[String(lp.id)];h=`<div class="box"><span class="pill live">● LIVE</span><p style="font-weight:800;font-size:17px;margin:10px 0 6px">${esc(lp.prompt)}</p><div class="cloud">${cloudHtml(lp.id)}</div>
    ${mine?`<p class="small muted" style="text-align:center">You added "${esc(mine)}". Watch for it on the big screen.</p>`:`<div style="display:flex;gap:8px"><input id="wd" class="field" maxlength="18" placeholder="One word"><button class="btn" style="width:auto" data-a="word" data-pid="${lp.id}">ADD</button></div><p class="small muted" style="margin:8px 0 0">One word per person for each question.</p>`}</div>`}
  else h=`<div class="box" style="text-align:center"><div style="font-size:30px">☁️</div><p style="font-weight:800;margin:6px 0 4px">No word cloud open right now</p><p class="small muted" style="margin:0">The next question appears here when the host opens it.</p></div>`;
  const closed=S.prompts.filter(p=>p.status==="closed");
  if(closed.length)h+=`<div class="rule-h">Earlier word clouds</div>`+closed.map(p=>`<div class="box" style="margin-bottom:10px"><p style="font-weight:800;margin:0 0 6px">${esc(p.prompt)}</p><div class="cloud sm">${cloudHtml(p.id)}</div></div>`).join("");
  return h}
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
const FB_STARS=[["food","Food"],["venue","Venue"],["posters","Posters"],["booths","Booths"],["flow","Programme Flow and Duration"]];
const FB_TEXT=[["valuable","Which session(s) were the most valuable to you?"],["future","What topics would you like to see for future AudConnect?"],["other","Any other feedback for the organising committee?"],["met","Who is someone new you met and spoke with today?"]];
function FBForm(){const F=S.fbf;return `<p class="small muted" style="margin:0 0 4px">Please rate each item. The written questions are optional. Rate the talks below, then tap Submit Feedback at the bottom.</p>
  ${FB_SCALES.map(([k,q,lo,hi])=>`<label class="lbl">${q}</label><div class="scale5">${[1,2,3,4,5].map(n=>`<button data-fbs="${k}:${n}" aria-pressed="${F[k]===n}">${n}</button>`).join("")}</div><div class="small muted" style="display:flex;justify-content:space-between;margin-top:4px"><span>${lo}</span><span>${hi}</span></div>`).join("")}
  <label class="lbl">Rate each part of the event</label><div class="fbstars">${FB_STARS.map(([k,l])=>`<div class="fbst"><span>${l}</span><span class="stars sm">${[1,2,3,4,5].map(n=>`<button class="star ${(F[k]||0)>=n?"on":""}" data-fbs="${k}:${n}" aria-label="${l} ${n} star${n>1?"s":""}">${I.star}</button>`).join("")}</span></div>`).join("")}</div>
  ${FB_TEXT.map(([k,q])=>`<label class="lbl" for="ft_${k}">${q} ${k==="met"?'<span class="bonus">✨ +8 bonus points</span>':'<span class="opt-l">(optional)</span>'}</label>${k==="met"?'<p class="small muted" style="margin:0 0 6px">Type their name. Making new connections is what today is about!</p>':""}<textarea id="ft_${k}" class="field" rows="2" maxlength="1000"${k==="met"?' placeholder="e.g. Jane Tan from Changi General Hospital"':""}>${esc(F[k]||"")}</textarea>`).join("")}`}
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

function Me(){const m=S.me;const sp=sponsorOf(m.co);const ar=apprRole(m);return `<h1 class="page-title">My Badge</h1><div style="height:14px"></div>
  <div class="badge"><div class="band"><img class="logo-img" src="${IMG.logo}" alt="">AUDCONNECT 2026</div><div class="body">
  ${m.photo?`<img class="bd-ph" src="${avatarUrl(m.photo)}" alt="">`:""}
  <div class="nm">${esc(fullName(m))}</div>${m.title?`<p class="bd-t">${esc(m.title)}</p>`:""}
  <p class="bd-co">${esc(m.co)}${sp?` <span title="${TIER_LABEL[sp.tier]}">${TIER_ICON[sp.tier]}</span>`:""}</p>
  ${m.member==="yes"&&m.mid?`<p class="bd-mid">MSAPS ${esc(m.mid)}</p>`:""}
  <div class="rtags">${roleTags(m).map(([k,l])=>`<span class="rtag ${k}">${l}</span>`).join("")}${sp?`<span class="rtag sp-${sp.tier}">${TIER_LABEL[sp.tier]}</span>`:""}</div>
  <div class="rtags sub"><span class="rtag2 ${m.member==="yes"?"mem":"guest"}">${m.member==="yes"?"SAPS Member":"Guest"}</span><span class="rtag2 ok">Checked in</span></div>
  <button class="linkbtn" data-a="editprof" style="margin-top:12px">Edit profile</button></div></div>
  ${PointsCard()}
  <div class="rule-h">About SAPS</div>
  <div class="about"><div class="ab"><span class="ab-t">Vision</span><p>${esc(SOCIETY.vision)}</p></div>
  <div class="ab"><span class="ab-t">Mission</span><p>${esc(SOCIETY.mission)}</p></div>
  <div class="ab"><span class="ab-t">Core Values</span><div class="vals">${SOCIETY.values.map(v=>`<span>${esc(v)}</span>`).join("")}</div></div></div>
  <div class="rule-h">Certificates</div>
  ${ar?`<div class="box"><b style="display:block;margin-bottom:6px">🏅 Certificate of Appreciation</b><p class="small muted">Thank you for your contribution as ${ar==="Host"?"Host":ar==="Speaker"?"a Speaker":"a Poster Presenter"} at AudConnect 2026.</p><button class="btn" data-a="certappr">VIEW CERTIFICATE</button></div><div style="height:10px"></div>`:""}
  <div class="box"><b style="display:block;margin-bottom:6px">🎓 Certificate of Participation (4 CPE points)</b>${S.feedback&&S.ce.passed?`<button class="btn" data-a="cert">VIEW CERTIFICATE</button>`:`<p class="small">To obtain your CPE points and certificate, pass the CE quiz (80% or more) and complete the event feedback form, both in the CE tab.</p><button class="btn ghost" data-tab="fb">GO TO CE &amp; FEEDBACK</button>`}</div>
  <div style="height:22px"></div><button class="btn ghost" data-a="logoutask">LOG OUT</button>
  <div class="org-mini">${S.committee?`<button class="linkbtn" data-a="admin">Open organiser dashboard</button>`:`<button class="linkbtn" data-a="orgcode">Organiser only</button>`}<span>For the SAPS committee</span>
  ${S.super?`<span class="small" style="margin-top:8px">Super admin ✓</span>`:`<button class="linkbtn" data-a="supercode" style="margin-top:6px">Super admin</button>`}</div>`}
function PointsCard(){const P=S.pts;if(!P)return "";
  if(!P.eligible)return `<div class="pts"><div class="pts-n">⭐ ${P.points}<small> points</small></div><p class="small muted" style="margin:6px 0 0">Organisers are not part of the prize. Thank you for cheering everyone on!</p><button class="linkbtn" data-a="howpts">How to earn points</button></div>`;
  const rk=P.rank<=20?`You're <b>#${P.rank}</b> of ${P.of}`:(P.rank<=P.of/2?"You're in the top half. Keep going!":"Every activity earns points. Keep going!");
  const gap=P.rank>10&&P.tenth!=null?Math.max(1,P.tenth-P.points+1):0;
  return `<div class="pts"><div class="pts-n">⭐ ${P.points}<small> points</small></div><p style="margin:6px 0 0">${rk}</p>${gap?`<p class="small muted" style="margin:4px 0 0">${gap} more point${gap>1?"s":""} to reach the top 10.</p>`:""}<p class="small muted" style="margin:6px 0 0">The most engaged attendees win a prize, announced at Closing.</p><button class="linkbtn" data-a="howpts">How to earn points</button></div>`}
function HowPts(){return `<h2 style="margin:6px 0 10px;font-size:20px;font-weight:900">How to earn points</h2><div class="list">${POINTS_TABLE.map(([a,p,c])=>`<div class="item" style="padding:10px 14px"><span style="flex:1;font-size:14px">${a}${c?`<span class="small muted" style="display:block">${c}</span>`:""}</span><b style="color:var(--gold)">${p}</b></div>`).join("")}</div>
  <p class="small muted" style="margin-top:10px">Points stop counting at 5:35 PM. Hidden posts do not earn points. Prize winners are announced at Closing.</p><button class="btn ghost" data-a="close">CLOSE</button>`}
function EditProf(){const m=S.me;const src=S._avUrl||(m.photo?avatarUrl(m.photo):null);return `<h2 style="margin:6px 0 10px;font-size:20px;font-weight:900">Edit profile</h2>
  <div class="ep-ph"><span class="ep-av" id="epAv">${src?`<img src="${src}" alt="">`:`<b>${esc(ini(m.fn+" "+m.ln))}</b>`}</span><span style="display:flex;flex-direction:column;gap:4px;align-items:flex-start"><label for="avfile" class="linkbtn">${src?"Change photo":"Add a photo"}</label>${src?'<button class="linkbtn" data-a="avremove">Remove photo</button>':""}</span></div>
  <input id="avfile" type="file" accept="image/*" style="position:absolute;left:-9999px">
  <label class="lbl" for="ep_sal">Salutation</label><select id="ep_sal" class="field">${SALUTATIONS.map(x=>`<option value="${x}" ${x===(m.sal||"")?"selected":""}>${x||"None"}</option>`).join("")}</select>
  <label class="lbl" for="ep_fn">First name</label><input id="ep_fn" class="field" value="${esc(m.fn)}">
  <label class="lbl" for="ep_ln">Last name</label><input id="ep_ln" class="field" value="${esc(m.ln)}">
  <label class="lbl" for="ep_t">Job title (optional)</label><input id="ep_t" class="field" placeholder="e.g. Senior Audiologist" value="${esc(m.title)}">
  <label class="lbl" for="ep_co">Institution</label><input id="ep_co" class="field" list="ep_insts" value="${esc(m.co)}"><datalist id="ep_insts">${instOptions().map(x=>`<option value="${esc(x)}">`).join("")}</datalist>
  <p class="small muted" style="margin-top:10px">Your certificate uses this name. If you change the spelling, use the new spelling next time you check in.</p>
  <button class="btn" data-a="epsave">SAVE</button><div style="height:8px"></div><button class="btn ghost" data-a="close">CANCEL</button>`}
function SuperCode(){return `<h2 style="margin-top:0;font-weight:900;text-transform:uppercase">Super admin</h2>
  <p class="small muted">For the SAPS President and the event lead only.</p>
  <label class="lbl" for="sc">Super admin code</label><input id="sc" class="field" autocomplete="off" autocapitalize="characters" spellcheck="false">
  <div style="height:14px"></div><button class="btn" data-a="unlocksuper">UNLOCK</button>`}
function OrgCode(){return `<h2 style="margin-top:0;font-weight:900;text-transform:uppercase">Organiser only</h2>
  <p class="small muted">Enter the organiser code from the SAPS committee.</p>
  <label class="lbl" for="oc">Organiser code</label><input id="oc" class="field" autocomplete="off" autocapitalize="characters" spellcheck="false">
  <div style="height:14px"></div><button class="btn" data-a="unlock" id="obtn">UNLOCK</button>`}
/* ============ Stage screen (LED wall) ============ */
function Stage(){const v=S.stageLocal||S.stage.view;let body="";
  if(v==="poll"){const lp=livePoll(),lc=lastClosed();
    if(lp)body=`<h3>${esc(lp.question)}</h3><div class="st-opts">${lp.options.map((o,i)=>`<div class="st-opt"><b>${String.fromCharCode(65+i)}</b>${esc(o)}</div>`).join("")}</div><div class="st-count"><b>${lp.total}</b> vote${lp.total===1?"":"s"} so far</div><p class="muted" style="text-align:center;margin-top:10px">Vote now at audconnect2026.com. Results are revealed when the poll closes.</p>`;
    else if(lc){const c=lc.counts||[];const t=c.reduce((a,b)=>a+b,0);const mx=Math.max(0,...c);body=`<h3>${esc(lc.question)}</h3>${lc.options.map((o,i)=>{const n=c[i]||0;const pc=t?Math.round(n/t*100):0;return `<div class="srow${n&&n===mx?" lead":""}"><div class="lab"><span>${esc(o)}</span><span>${pc}%</span></div><div class="bar grow"><i style="--w:${pc}%;animation-delay:${i*.18}s"></i></div></div>`}).join("")}<p class="muted">${t} vote${t===1?"":"s"}</p>`}
    else body=`<h3>Live poll</h3><p class="muted">The next poll will appear here.</p>`}
  if(v==="cloud"){const lp=livePrompt()||S.prompts.find(p=>p.status==="closed");body=lp?`<h3>${esc(lp.prompt)}</h3><div class="cloud" style="gap:10px 28px">${cloudHtml(lp.id,true)}</div>`:`<h3>Word cloud</h3><p class="muted">The next question will appear here.</p>`}
  if(v==="qa"){const pin=S.q.find(q=>q.id===S.stage.pinned_question);const qs=pin?[pin]:S.q.filter(q=>!q.answered).sort((a,b)=>b.votes-a.votes).slice(0,4);body=`<h3>${pin?"Now answering":"Most liked questions"}</h3>${qs.map(q=>`<div class="sq"><b>${q.votes}</b><span>${esc(q.body)}<small class="sq-t">${isSaps(q)?"From SAPS · ":""}${esc(sesLabel(q.session_id))}</small></span></div>`).join("")||"<p>No questions yet</p>"}`}
  if(v==="photos"){const ps=S.photos.slice(0,6);body=`<h3><span class="ag-word" style="font-size:1.4em">Audigram</span> <span style="font-size:.5em;color:var(--red-t)">#AudConnect2026</span></h3><div class="wall">${ps.map(p=>`<figure><img src="${photoSrc(p)}" alt=""><figcaption>${esc(p.author_name)}</figcaption></figure>`).join("")}</div>`}
  if(v==="lb"){body=`<h3>Trivia leaderboard</h3>${S.board.map((r,i)=>`<div class="sq"><b>${i+1}</b><span style="flex:1">${esc(r.display_name)}</span><span>${r.score}</span></div>`).join("")||"<p>No scores yet</p>"}`}
  $("#stage").innerHTML=`<div class="hd"><div class="logo-row"><img class="logo-img" style="width:48px;height:48px" src="${IMG.logo}" alt=""><div class="wordmark">AUDCONNECT 2026<b>NEXTGEN AUDIOLOGY</b></div></div><span class="st-here"><i class="here-dot"></i><b>${S.att.here}</b>${S.att.registered?` of ${S.att.registered}`:""} here now</span><span class="muted" style="font-weight:600">Join in at audconnect2026.com</span></div>
  <div class="main">${body}</div><div class="ctl">${[["photos","Audigram"],["poll","Poll"],["cloud","Word cloud"],["qa","Questions"]].map(([k,l])=>`<button data-stage="${k}" aria-pressed="${v===k}">${l}</button>`).join("")}<button data-a="stageclose">Exit</button></div>`}

/* ============ Organiser dashboard (SAPSADMIN check in only) ============ */
function Admin(){const t=S.adTab;const tabs=[["over","Overview"],["qa","Q&A"],["eng","Engage"],["fb","Feedback"],["att","Attendees"],["pts","Prize"],...(S.super?[["super","Super"]]:[])];
  return `<div class="app"><header class="top"><div class="logo-row"><img class="logo-img" src="${IMG.logo}" alt=""><div class="wordmark">AUDCONNECT 2026<b>ORGANISER</b></div></div><button class="hdr-btn" data-a="adexit">Exit</button></header>
  <main><div class="seg adtabs" style="margin-top:14px">${tabs.map(([k,l])=>`<button data-adtab="${k}" aria-pressed="${t===k}">${l}</button>`).join("")}</div>
  ${S.ad?({over:AdOver,qa:AdQA,eng:AdEng,fb:AdFB,att:AdAtt,pts:AdPts,super:AdSuper}[t]||AdOver)():'<p class="muted">Loading...</p>'}</main></div>`}
function AdOver(){const A=S.ad.attendees,n=A.length,mem=A.filter(a=>a.saps_member).length,now=nowSession();
  const byCo={};A.forEach(a=>byCo[a.company]=(byCo[a.company]||0)+1);const top=Object.entries(byCo).sort((a,b)=>b[1]-a[1]).slice(0,6);const mx=top.length?top[0][1]:1;
  return `<div class="kpis"><div class="kpi red"><div class="v">${n}</div><div class="l">Checked in${S.ad.registered?` of ${S.ad.registered} registered`:""}</div></div><div class="kpi"><div class="v">${A.filter(a=>a.walk_in).length}</div><div class="l">Walk ins</div></div>
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
  <div class="acts"><button class="act ${pin===q.id?"on":""}" data-pin="${q.id}">${pin===q.id?"Remove from screen":"Show on screen"}</button><button class="act" data-ans2="${q.id}" data-v="${!q.answered}">${q.answered?"Mark unanswered":"Mark answered"}</button><button class="act" data-hide="${q.id}" data-v="${!q.hidden}">${q.hidden?"Unhide":"Hide"}</button>${S.super?`<button class="act danger" data-sdel="question:${q.id}">Delete</button>`:""}</div></div></div>`).join(""):`<div class="q"><span class="muted">No questions yet.</span></div>`}</div>`}
function AdEng(){
  return `<div class="rule-h" style="margin-top:6px">Photos</div><div class="box"><p class="small muted">Hide anything unsuitable. Hidden photos disappear from phones and the big screen.</p>
  <div class="thumbs">${S.ad.photos.map(p=>`<div class="thumb" style="${p.hidden?"opacity:.35":""}"><img src="${photoSrc(p)}" alt="" loading="lazy"><button class="act ${p.hidden?"":"on"}" data-hidephoto="${p.id}" data-v="${!p.hidden}">${p.hidden?"Unhide":"Hide"}</button>${S.super?`<button class="act danger" data-sdel="photo:${p.id}">Delete</button>`:""}</div>`).join("")||'<span class="muted small">No photos yet</span>'}</div>
  <div class="acts" style="margin-top:12px"><button class="act" data-adstage="photos">Show Audigram on screen</button></div></div>
  <div class="rule-h">Audigram Comments</div><div class="box"><p class="small muted">Hide any comment that shouldn't be shown. It disappears from everyone's phone.</p>
  <div class="list" style="margin-top:8px">${(S.adc||[]).slice(0,60).map(r=>`<div class="item" style="${r.hidden?"opacity:.4":""}"><span style="flex:1"><b style="display:block;font-size:13px">${esc(r.author_name)} <span class="muted" style="font-weight:500">on ${r.target==="welcome"?"welcome post":"photo"}</span></b><span class="small">${esc(r.body)}</span></span><button class="act ${r.hidden?"":"on"}" data-hidecm="${r.id}" data-v="${!r.hidden}">${r.hidden?"Unhide":"Hide"}</button>${S.super?`<button class="act danger" data-sdel="comment:${r.id}">Delete</button>`:""}</div>`).join("")||'<div class="item small muted">No comments yet</div>'}</div></div>
  ${AdPolls()}${AdPrompts()}
  <div class="rule-h">CE Quiz</div><div class="box">${(()=>{const X=S.adx||[];const tried=X.filter(x=>x.ce_attempts>0).length,pass=X.filter(x=>x.ce_passed).length,cert=X.filter(x=>x.certificate_eligible).length;return `<p style="margin:0">${tried} attempted, <b>${pass} passed</b>, <b>${cert}</b> eligible for a certificate.</p><p class="small muted" style="margin:8px 0 0">Open to attendees now, with no time lock.</p>`})()}</div>`}
const ST_ORDER={live:0,draft:1,closed:2};
function AdPolls(){const P=S.polls.slice().sort((a,b)=>(ST_ORDER[a.status]-ST_ORDER[b.status])||b.id-a.id);
  return `<div class="rule-h">Live Polls</div><p class="small muted" style="margin:0 0 10px">Attendees see results only when you close the poll, on phones and the big screen at the same time.${S.super?"":" Only the super admin can create or edit polls."}</p>
  ${S.super?`<button class="act on" data-a="pnew" style="margin-bottom:10px">+ New poll</button>`:""}
  ${P.map(p=>{const c=p.counts||[];const t=c.reduce((a,b)=>a+b,0);return `<div class="box" style="margin-bottom:10px"><span class="pill ${p.status==="live"?"live":p.status==="closed"?"ok":""}">${p.status==="live"?"● LIVE":p.status==="closed"?"Closed · results shown":"Draft"}</span>
    <p style="font-weight:800;margin:8px 0">${esc(p.question)}</p>
    ${p.options.map((o,i)=>{const n=c[i]||0;const pc=t?Math.round(n/t*100):0;return `<div style="margin-bottom:8px"><div class="small" style="display:flex;justify-content:space-between"><span>${esc(o)}</span>${p.status==="draft"?"":`<b>${n} (${pc}%)</b>`}</div>${p.status==="draft"?"":`<div class="hbar"><i style="width:${pc}%"></i></div>`}</div>`}).join("")}
    ${p.status==="live"?`<p class="small muted" style="margin:4px 0 0">${t} vote${t===1?"":"s"}. Only organisers can see these numbers until you close the poll.</p>`:""}
    <div class="acts">${p.status==="draft"?`<button class="act on" data-pstat="${p.id}:live">Go live</button>`:""}${p.status==="live"?`<button class="act on" data-pstat="${p.id}:closed">Close and reveal results</button><button class="act" data-adstage="poll">Show on screen</button>`:""}${p.status==="closed"?`<button class="act" data-adstage="poll">Show results on screen</button><button class="act" data-pstat="${p.id}:live">Reopen</button>`:""}${S.super&&p.status==="draft"?`<button class="act" data-pedit="${p.id}">Edit</button>`:""}${S.super?`<button class="act danger" data-pdel="${p.id}">Delete</button>`:""}</div></div>`}).join("")||'<div class="box small muted">No polls yet.</div>'}
  <p class="small muted" style="margin:0 0 6px">The big screen shows the live poll, or the most recently closed one.</p>`}
function PollEdit(p){p=p||{question:"",options:["","","",""]};const o=[...p.options,"","","","","",""].slice(0,6);
  return `<h2 style="margin:6px 0 10px;font-size:20px;font-weight:900">${p.id?"Edit poll":"New poll"}</h2>
  <label class="lbl" for="pq">Question</label><textarea id="pq" class="field" rows="2" maxlength="200">${esc(p.question)}</textarea>
  ${o.map((x,i)=>`<label class="lbl" for="po${i}">Option ${i+1}${i>1?" (optional)":""}</label><input id="po${i}" class="field" maxlength="80" value="${esc(x)}">`).join("")}
  <p class="small muted" style="margin-top:10px">Saved as a draft. Tap Go live when you're ready.</p>
  <button class="btn" data-a="psave" data-id="${p.id||""}">SAVE POLL</button><div style="height:8px"></div><button class="btn ghost" data-a="close">CANCEL</button>`}
function AdPrompts(){const P=S.adPrompts.slice().sort((a,b)=>(ST_ORDER[a.status]-ST_ORDER[b.status])||b.id-a.id);
  return `<div class="rule-h">Word Clouds</div><p class="small muted" style="margin:0 0 10px">Word clouds stay live on screen as words come in. One word per person for each question.${S.super?"":" Only the super admin can add questions."}</p>
  ${S.super?`<button class="act on" data-a="cnew" style="margin-bottom:10px">+ New word cloud question</button>`:""}
  ${P.map(p=>{const W=S.ad.words.filter(w=>w.prompt_id===p.id);return `<div class="box" style="margin-bottom:10px"><span class="pill ${p.status==="live"?"live":p.status==="closed"?"ok":""}">${p.status==="live"?"● LIVE":p.status==="closed"?"Closed":"Draft"}</span>
    <p style="font-weight:800;margin:8px 0 4px">${esc(p.prompt)}</p><p class="small muted" style="margin:0 0 8px">${p.words} word${p.words===1?"":"s"}${W.length?". Tap a word to hide it.":""}</p>
    ${W.length?`<div class="acts">${W.map(w=>`<span class="wchip"><button class="act" style="${w.hidden?"opacity:.4;text-decoration:line-through":""}" data-hideword="${w.id}" data-v="${!w.hidden}">${esc(w.word)} ${w.hidden?"↺":"✕"}</button>${S.super?`<button class="act danger" data-sdel="word:${w.id}" aria-label="Delete ${esc(w.word)}">🗑</button>`:""}</span>`).join("")}</div>`:""}
    <div class="acts" style="margin-top:10px">${p.status!=="live"?`<button class="act on" data-cstat="${p.id}:live">${p.status==="draft"?"Go live":"Reopen"}</button>`:`<button class="act on" data-cstat="${p.id}:closed">Close</button>`}<button class="act" data-adstage="cloud">Show on screen</button>${S.super&&p.status==="draft"?`<button class="act" data-cedit="${p.id}">Edit</button>`:""}${S.super?`<button class="act danger" data-cdel="${p.id}">Delete</button>`:""}</div></div>`}).join("")||'<div class="box small muted">No word cloud questions yet.</div>'}`}
function PromptEdit(p){p=p||{prompt:""};return `<h2 style="margin:6px 0 10px;font-size:20px;font-weight:900">${p.id?"Edit question":"New word cloud question"}</h2>
  <label class="lbl" for="cq">Question</label><input id="cq" class="field" maxlength="160" value="${esc(p.prompt)}" placeholder="e.g. One word for today">
  <p class="small muted" style="margin-top:10px">Saved as a draft. Tap Go live when you're ready.</p>
  <button class="btn" data-a="csave" data-id="${p.id||""}">SAVE</button><div style="height:8px"></div><button class="btn ghost" data-a="close">CANCEL</button>`}
function AdPts(){const E=S.adPts.filter(x=>x.eligible),O=S.adPts.filter(x=>!x.eligible);const rk=x=>1+E.filter(y=>y.points>x.points).length;
  return `<div class="box" style="margin-top:6px"><b>🏆 Prize ranking</b><p class="small muted" style="margin:6px 0 0">Private to organisers. Points stop counting at 5:35 PM, then announce the winners at Closing. Organisers are not ranked.</p><div class="acts" style="margin-top:10px"><button class="act" data-a="adrefresh">Refresh</button></div></div>
  <div class="list" style="margin-top:12px"><table class="tbl">${E.slice(0,30).map(x=>`<tr><td style="width:34px"><b class="${rk(x)<=3?"medal":""}">${rk(x)}</b></td><td><b>${esc(x.first_name)} ${esc(x.last_name)}</b><br><span class="muted">${esc(x.company)}</span></td><td style="text-align:right"><b style="color:var(--gold);font-size:17px">${x.points}</b></td></tr>`).join("")||'<tr><td class="muted">No points yet</td></tr>'}</table></div>
  ${E.length>30?`<p class="small muted" style="margin-top:8px">Showing the top 30 of ${E.length}. The full list is in the Excel export.</p>`:""}
  ${O.length?`<details class="box" style="margin-top:12px"><summary class="small" style="font-weight:700">Organisers (not ranked): ${O.length}</summary><div class="small muted" style="margin-top:8px">${O.map(x=>`${esc(x.first_name)} ${esc(x.last_name)} · ${x.points}`).join("<br>")}</div></details>`:""}`}
function AdSuper(){const RS=[["qa","Q&A questions and likes","SAPS questions are kept"],["audigram","Audigram photos, likes and comments",""],["polls","Poll votes","Polls are kept, votes are cleared"],["words","Word cloud words","Questions are kept"]];
  return `<div class="rule-h" style="margin-top:6px">Post as SAPS</div>${SapsBar()}<p class="small muted" style="margin:6px 0 0">When on, your questions, photos and comments show as SAPS ✓ everywhere in the app. Switch off to post as yourself.</p>
  <div class="rule-h">Reset a section</div><div class="box"><p class="small muted" style="margin:0 0 10px">Permanently deletes everything in that section. You'll be asked to type DELETE.</p>
  ${RS.map(([k,l,n])=>`<div class="item" style="padding:10px 0;border:0"><span style="flex:1"><b style="display:block;font-size:14px">${l}</b>${n?`<span class="small muted">${n}</span>`:""}</span><button class="act danger" data-sreset="${k}">Reset</button></div>`).join("")}</div>
  <div class="rule-h">Activity log</div><div class="list">${S.adLog.slice(0,120).map(l=>`<div class="item small"><span style="flex:1"><b>${esc(l.action)}</b>${l.detail?` <span class="muted">· ${esc(String(l.detail).slice(0,140))}</span>`:""}<span class="muted" style="display:block">${esc(l.who||"")} · ${fmtSG(l.at)}</span></span></div>`).join("")||'<div class="item small muted">Nothing logged yet</div>'}</div>`}
function confirmSheet(title,msg,action,extra){return `<h2 style="margin:6px 0 8px;font-size:20px;font-weight:900">${title}</h2><p class="muted">${msg}</p>
  <label class="lbl" for="delc">Type DELETE to confirm</label><input id="delc" class="field" autocomplete="off" autocapitalize="characters" spellcheck="false">
  <div style="height:14px"></div><button class="btn danger" data-a="${action}" ${extra||""}>DELETE</button><div style="height:8px"></div><button class="btn ghost" data-a="close">CANCEL</button>`}
const ROLE_OPTS=[["organiser","Organiser"],["host","Host"],["speaker","Speaker"],["poster","Poster Presenter"],["student","Student"],["nonaud","Non-Aud"]];
function AttEdit(a){return `<h2 style="margin:6px 0 10px;font-size:20px;font-weight:900">Fix check in</h2>
  <label class="lbl" for="ae_sal">Salutation</label><select id="ae_sal" class="field">${SALUTATIONS.map(x=>`<option value="${x}" ${x===(a.salutation||"")?"selected":""}>${x||"None"}</option>`).join("")}</select>
  <label class="lbl" for="ae_fn">First name</label><input id="ae_fn" class="field" value="${esc(a.first_name)}">
  <label class="lbl" for="ae_ln">Last name</label><input id="ae_ln" class="field" value="${esc(a.last_name)}">
  <label class="lbl" for="ae_t">Job title</label><input id="ae_t" class="field" value="${esc(a.title||"")}">
  <label class="lbl" for="ae_co">Institution</label><input id="ae_co" class="field" value="${esc(a.company)}">
  <label class="lbl" for="ae_mem">SAPS member</label><select id="ae_mem" class="field"><option value="true" ${a.saps_member?"selected":""}>Yes</option><option value="false" ${a.saps_member?"":"selected"}>No</option></select>
  <label class="lbl" for="ae_mid">MSAPS member ID</label><input id="ae_mid" class="field" value="${esc(a.member_id||"")}">
  <label class="lbl">Roles</label><div class="acts">${ROLE_OPTS.map(([k,l])=>`<label class="small" style="display:flex;gap:6px;align-items:center;margin-right:12px"><input type="checkbox" class="ae_role" value="${k}" ${(a.roles||[]).includes(k)?"checked":""}> ${l}</label>`).join("")}</div>
  ${a.name_history?`<p class="small muted" style="margin-top:10px">Earlier names: ${esc(a.name_history)}</p>`:""}
  <div style="height:14px"></div><button class="btn" data-a="attsave" data-id="${a.id}">SAVE</button><div style="height:8px"></div><button class="btn ghost" data-a="close">CANCEL</button>`}
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
  ${box("Most Valuable Sessions",txt("valuable"))}${box("Future Topics",txt("next_topic"))}${box("Other Feedback",txt("other"))}${box("Someone New They Met",txt("met"))}${box("Talk Comments",comments)}
  <div style="height:14px"></div><button class="btn ghost" data-a="exportfb">EXPORT FEEDBACK (CSV)</button>`}
function AdAtt(){const q=S.attQ.toLowerCase();const list=S.ad.attendees.filter(a=>!q||(a.first_name+" "+a.last_name+" "+a.company).toLowerCase().includes(q));
  const tm=d=>new Date(d).toLocaleTimeString("en-SG",{timeZone:"Asia/Singapore",hour:"numeric",minute:"2-digit"});const NA=S.ad.not_arrived||[];
  const X=S.adx||[];const E=X.filter(x=>x.certificate_eligible);const AP=X.filter(x=>apprRole({roles:x.roles||[]}));
  return `<input id="attq" class="field" placeholder="Search name or company" value="${esc(S.attQ)}" aria-label="Search attendees">
  <p class="small muted" style="margin:10px 0">${list.length} checked in${S.ad.registered?`, ${NA.length} registered but not here yet`:""}</p>
  <div class="list"><table class="tbl">${list.slice(0,80).map(a=>`<tr><td><b>${esc([a.salutation,a.first_name,a.last_name].filter(Boolean).join(" "))}</b>${a.title?`<br><span class="small">${esc(a.title)}</span>`:""}<br><span class="muted">${esc(a.company)}</span>
    <div class="rtags mini">${roleTags({roles:a.roles||[]}).map(([k,l])=>`<span class="rtag ${k}">${l}</span>`).join("")}${a.walk_in?'<span class="rtag2 guest">Walk in</span>':'<span class="rtag2 ok">Registered</span>'}${a.name_history?'<span class="rtag2 warn">Name edited</span>':""}</div>
    ${S.super?`<div class="acts" style="margin-top:6px"><button class="act" data-attedit="${a.id}">Edit</button><button class="act danger" data-attdel="${a.id}">Delete</button></div>`:""}</td>
    <td style="text-align:right;white-space:nowrap;vertical-align:top"><span class="pill ${a.saps_member?"":"ok"}">${a.saps_member?"Member":"Guest"}</span>${a.member_id?`<br><span class="small muted">MSAPS ${esc(a.member_id)}</span>`:""}<br><span class="muted small">${tm(a.checked_in_at)}</span></td></tr>`).join("")||'<tr><td class="muted">No check ins yet</td></tr>'}</table></div>
  ${list.length>80?`<p class="small muted" style="margin-top:8px">Showing 80 of ${list.length}. Search to find someone.</p>`:""}
  ${NA.length?`<details class="box" style="margin-top:12px"><summary class="small" style="font-weight:700">Not here yet: ${NA.length}</summary><div class="small" style="margin-top:8px">${NA.map(r=>`${esc(r.name)} <span class="muted">· ${esc(r.institution||"")}</span>`).join("<br>")}</div></details>`:""}
  <div class="rule-h">Certificates</div>
  <p class="small muted" style="margin:0 0 10px">${E.length} Certificate${E.length===1?"":"s"} of Participation earned (CE quiz passed and feedback done). ${AP.length} Certificate${AP.length===1?"":"s"} of Appreciation for hosts, speakers and poster presenters.</p>
  ${E.length||AP.length?`<button class="btn" data-a="certall">DOWNLOAD ALL CERTIFICATES (ZIP)</button><div style="height:10px"></div>`:""}
  ${AP.length?`<p class="small" style="font-weight:800;margin:10px 0 6px">🏅 Appreciation</p><div class="list"><table class="tbl">${AP.map((x,k)=>`<tr><td><b>${esc(x.first_name)} ${esc(x.last_name)}</b><br><span class="muted">${apprRole({roles:x.roles||[]})}</span></td><td style="text-align:right"><button class="act on" data-certone="${k}" data-ck="a">PDF</button></td></tr>`).join("")}</table></div>`:""}
  ${E.length?`<p class="small" style="font-weight:800;margin:10px 0 6px">🎓 Participation</p><div class="list"><table class="tbl">${E.map((x,k)=>`<tr><td><b>${esc(x.first_name)} ${esc(x.last_name)}</b><br><span class="muted">${esc(x.company)}</span></td><td style="text-align:right"><button class="act on" data-certone="${k}" data-ck="p">PDF</button></td></tr>`).join("")}</table></div>`:""}
  <div style="height:14px"></div><button class="btn" data-a="exportxlsx">EXPORT EXCEL (ATTENDANCE, CE &amp; FEEDBACK)</button>
  <p class="small muted" style="margin-top:10px">Use the attendance export for CPE point records. Walk ins can check in on any phone at the desk.</p>`}

const _certBgs={};
function certBg(src){if(!_certBgs[src])_certBgs[src]=new Promise((ok,no)=>{const im=new Image();im.onload=()=>ok(im);im.onerror=no;im.src=src});return _certBgs[src]}
async function certPDF(fn,ln,role){
  await certFontReady();if(role)await certBookReady();const bg=await certBg(role?"cert-appr.webp":"cert-bg.webp");const name=certFull(fn,ln);
  const cv=document.createElement("canvas");cv.width=CERT.w;cv.height=CERT.h;const g=cv.getContext("2d");
  g.drawImage(bg,0,0,CERT.w,CERT.h);
  const px=Math.round(CERT.size*CERT.h*certScale(name));
  g.font=`700 ${px}px CertGothic, "Century Gothic", Montserrat, sans-serif`;g.fillStyle="#FFFFFF";g.textAlign="center";g.textBaseline="middle";
  g.fillText(name,CERT.cx*CERT.w,CERT.cy*CERT.h);
  if(role){const t=apprLine(role);let px2=Math.round(CERT_R.size*CERT.h);g.font=`400 ${px2}px CertBook, "Century Gothic", Montserrat, sans-serif`;const w=g.measureText(t).width;if(w>CERT_R.maxW*CERT.w){px2=Math.floor(px2*CERT_R.maxW*CERT.w/w);g.font=`400 ${px2}px CertBook, "Century Gothic", Montserrat, sans-serif`}
    g.fillStyle="#C9D1E6";g.textBaseline="alphabetic";g.fillText(t,CERT_R.cx*CERT.w,CERT_R.y*CERT.h)}
  const {jsPDF}=window.jspdf;const pdf=new jsPDF({orientation:"portrait",unit:"mm",format:"a4",compress:true});
  pdf.addImage(cv.toDataURL("image/jpeg",.9),"JPEG",0,0,210,297);
  pdf.setProperties({title:`AudConnect 2026 Certificate of ${role?"Appreciation":"Participation"}: ${name}`,author:"Society for Audiology Professionals Singapore"});
  return pdf.output("blob")}
const certName=(fn,ln,appr)=>`AudConnect2026_${appr?"Appreciation":"Certificate"}_${(fn+"_"+ln).replace(/[^A-Za-z0-9]+/g,"_").replace(/^_|_$/g,"")}.pdf`;
function saveBlob(blob,name){const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},800)}
function downloadCSV(name,rows){const csv=rows.map(r=>r.map(v=>`"${String(v??"").replace(/"/g,'""')}"`).join(",")).join("\r\n");
  const a=document.createElement("a");a.href=URL.createObjectURL(new Blob(["\ufeff"+csv],{type:"text/csv"}));a.download=name;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},500)}

async function finishCheckin(res){S.token=res.token;try{localStorage.setItem("ac26_token",S.token)}catch(x){}
  await loadMine();await loadPublic().catch(()=>{});S.busy=false;S.showForm=false;S.ci={step:"find"};S.reg={member:null};S.tab="prog";render();scrollTo(0,0);
  if(res.returning)toast(`Welcome back, ${res.first_name}`);else showWelcomeCard()}
function cardKind(m){if(/^sharad$/i.test(m.fn)&&/^govil$/i.test(m.ln))return "president";if(hasRole(m,"organiser"))return "organiser";
  const sp=sponsorOf(m.co);if(sp)return hasRole(m,"speaker")?"sponsor_speaker":"sponsor";if(hasRole(m,"speaker")||hasRole(m,"host"))return "speaker";if(hasRole(m,"poster"))return "poster";return "delegate"}
function WelcomeCard(){const m=S.me;const k=cardKind(m);const sp=sponsorOf(m.co);
  const sigC=`<i>With warm regards,</i><b>SAPS Executive Committee 2025-26</b><small>${EXCO_SIG}</small>`;
  let kick="DELEGATE",greet="Welcome,",name=`${m.fn} ${m.ln}`,body="",sig=sigC,extra="";
  if(k==="delegate")body="Thank you for joining us at AudConnect 2026 on World Audiologist Day. Today is about learning, connecting and celebrating our profession together. We hope you leave inspired, with new ideas and new friends.";
  if(k==="speaker"){kick=hasRole(m,"host")?"HOST":"SPEAKER";greet="Thank you,";name=fullName(m);body="We are truly grateful that you are sharing your expertise with our community today. Your time and insight help shape the future of hearing care in Singapore, and we are honoured to have you on our programme."}
  if(k==="poster"){kick="POSTER PRESENTER";greet="Thank you,";body="Thank you for sharing your team's work with us today. Projects like yours show the very best of our profession, real improvements for real patients, and inspire others to do the same."}
  if(k==="sponsor"||k==="sponsor_speaker"){kick=TIER_LABEL[sp.tier].toUpperCase();greet="Thank you,";name=m.fn;
    extra=`<div class="wc-tro"><span>${TIER_ICON[sp.tier]}</span>${IMG["sp_"+sp.key]?`<img src="${IMG["sp_"+sp.key]}" alt="${esc(sp.name)}">`:`<b>${esc(sp.name)}</b>`}</div>`;
    const tier=sp.tier[0].toUpperCase()+sp.tier.slice(1);
    body=k==="sponsor"?`${esc(sp.name)} is a valued sponsor of the Society for Audiology Professionals (Singapore). Your support of our events and community throughout the year, including AudConnect 2026, helps us build a stronger audiology profession in Singapore.`
      :`Thank you for speaking at AudConnect 2026. ${esc(sp.name)} is a valued ${tier} sponsor of SAPS, and your support of our events and community throughout the year helps us build a stronger audiology profession in Singapore.`}
  if(k==="organiser"){kick="ORGANISER";greet="Thank you,";name=m.fn;body="AudConnect 2026 happens because of the hours you have quietly given. Thank you for your commitment to SAPS and to our profession. Enjoy today; you have earned it."+(hasRole(m,"host")?" And thank you for hosting us today!":hasRole(m,"speaker")?" And thank you for sharing your work on stage today!":"");
    sig=`<i>With gratitude,</i><b>Dr. Sharad Govil</b><small>President, SAPS</small>`}
  if(k==="president"){kick="PRESIDENT";greet="Thank you,";name="Sharad";body="For leading SAPS and bringing AudConnect 2026 to life. Thank you for your vision and your energy.";sig=`<i>With gratitude,</i><b>The SAPS Executive Committee 2025-26</b><small>${EXCO_SIG_NO_SG}</small>`}
  return `<div class="wc"><div class="wc-frame"></div><img class="wc-logo" src="${IMG.logo}" alt="SAPS"><div class="wc-kick">${kick}</div>${extra}
  <div class="wc-greet">${greet}</div><div class="wc-name">${esc(name)}</div><div class="wc-orn"><span></span>✦<span></span></div>
  <p class="wc-body">${body}</p>
  <div class="wc-eng"><b>🏆 Engage, earn points, win a prize</b><span>Ask questions, share photos on Audigram with your friends and colleagues, and join the live polls. Every activity earns you points, and the most engaged attendees win a prize!</span></div>
  <div class="wc-sig">${sig}</div><button class="wc-btn" data-a="wcdone">CONTINUE</button></div>`}
function showWelcomeCard(){const w=$("#welcome");w.innerHTML=`<div class="wc-wrap">${WelcomeCard()}</div>`;w.classList.add("open")}

/* ============ Render ============ */
function renderQuiz(){render();scrollTo(0,0)}
function render(){
  if(S.admin){$("#root").innerHTML=Admin();const a=$("#aqs");if(a)a.onchange=e=>{S.adQaSes=e.target.value;render()};const aq=$("#attq");if(aq)aq.oninput=e=>{S.attQ=e.target.value;const p=e.target.selectionStart;render();const n=$("#attq");n.focus();n.setSelectionRange(p,p)};return}
  if(!S.me){$("#root").innerHTML=`<div class="app" style="padding-bottom:0">${Register()}</div>`;return}
  if(S.tab==="qa"){S.tab="play";S.playSeg="qa"}if(S.playSeg==="photos"){S.playSeg="qa";S.tab="ag"}
  const tabs={prog:["Programme",Prog],play:["Engage",Engage],ag:["Audigram",Photos],fb:["CE",()=>S.quiz?`<h1 class="page-title">CE Quiz</h1><div style="height:12px"></div>`+CEQuiz():FB()],me:["Me",Me]};
  $("#root").innerHTML=`<div class="app"><header class="top"><div class="logo-row"><img class="logo-img" src="${IMG.logo}" alt="SAPS"><div class="wordmark">AUDCONNECT 2026<b>NEXTGEN AUDIOLOGY</b></div></div><button class="hdr-btn" data-tab="me">${esc(S.me.fn)}${S.pts?` <span class="hdr-pts">⭐<b id="hdrPts">${S.pts.points}</b></span>`:""}</button></header><main>${tabs[S.tab][1]()}</main></div>
  <nav class="tabs" aria-label="Main"><div class="in">${Object.entries(tabs).map(([k,[l]])=>`<button data-tab="${k}" ${S.tab===k?'aria-current="page"':""}>${I[k]}${l}</button>`).join("")}</div></nav>`;
  const qs=$("#qs");if(qs)qs.onchange=e=>{S.qaSession=e.target.value;render()};
}
const keepReg=()=>{const g=(id,d)=>{const el=$("#"+id);return el?el.value:d};S.reg.fn=g("fn",S.reg.fn);S.reg.ln=g("ln",S.reg.ln);S.reg.co=g("co",S.reg.co);S.reg.sal=g("sal",S.reg.sal);S.reg.ti=g("ti",S.reg.ti);S.reg.coSel=g("cosel",S.reg.coSel)};
async function act(fn,args,ok){try{await rpc(fn,args);if(ok)toast(ok)}catch(e){toast(errMsg(e))}await loadPublic().catch(()=>{});render()}
async function adminAct(fn,args,ok){try{await rpc(fn,{p_token:S.token,...args});if(ok)toast(ok)}catch(e){toast(errMsg(e))}await Promise.all([loadPublic(),loadAdmin()]).catch(()=>{});render();renderStageIfOpen()}

document.addEventListener("click",async e=>{
  const b=e.target.closest("button");if(!b)return;const d=b.dataset;
  if(d.tab){S.tab=d.tab;close();render();scrollTo(0,0);return}
  if(d.mem){keepReg();S.reg.member=d.mem;render();return}
  if(d.cipick){S.busy=true;try{S.ci.card=await rpc("registrant_card",{p_id:d.cipick});S.ci.step="pick"}catch(x){toast(errMsg(x))}S.busy=false;render();scrollTo(0,0);return}
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
  if(d.certone!==undefined){const ap=d.ck==="a";const x=(S.adx||[]).filter(r=>ap?apprRole({roles:r.roles||[]}):r.certificate_eligible)[+d.certone];if(!x)return;b.disabled=true;const t=b.textContent;b.textContent="...";
    try{saveBlob(await certPDF(x.first_name,x.last_name,ap?apprRole({roles:x.roles||[]}):null),certName(x.first_name,x.last_name,ap))}catch(e){toast("Couldn't create the PDF")}b.disabled=false;b.textContent=t;return}
  if(d.wsgo!==undefined){const tr=$("#wsTrack");tr.scrollTo({left:(+d.wsgo)*tr.clientWidth,behavior:"smooth"});return}
  if(d.capmore){S.capOpen=true;Welcome();return}
  if(d.plike){const c="poster-"+d.plike;const had=S.cardsSeen.includes(c);if(had)S.cardsSeen=S.cardsSeen.filter(x=>x!==c);else S.cardsSeen.push(c);
    S.postLikes[c]=Math.max(0,((S.postLikes||{})[c]||0)+(had?-1:1));document.querySelectorAll(`[data-plike="${d.plike}"]`).forEach(x=>x.outerHTML=pstLike(d.plike));
    rpc("toggle_post_like",{p_token:S.token,p_card:c}).then(bumpPoints).catch(x=>toast(errMsg(x)));return}
  if(d.wlike){const had=S.cardsSeen.includes("welcome-post");if(had)S.cardsSeen=S.cardsSeen.filter(x=>x!=="welcome-post");else S.cardsSeen.push("welcome-post");
    S.postLikes["welcome-post"]=((S.postLikes||{})["welcome-post"]||0)+(had?-1:1);Welcome();rpc("toggle_post_like",{p_token:S.token,p_card:"welcome-post"}).catch(x=>toast(errMsg(x)));return}
  if(d.cmopen){S.openCm[d.cmopen]=true;$("#welcome").classList.contains("open")?Welcome():render();return}
  if(d.cmfocus){const f=document.querySelector(`[data-cmin="${d.cmfocus}"]`);if(f){f.focus();f.scrollIntoView({block:"center",behavior:"smooth"})}return}
  if(d.cmpost){const t=d.cmpost;const f=document.querySelector(`[data-cmin="${t}"]`);const body=(f&&f.value||"").trim();if(!body){toast("Write a comment first");return}b.disabled=true;
    const sp=S.super&&S.asSaps;try{await rpc("add_comment",{p_token:S.token,p_target:t,p_body:body,p_as_saps:sp});(S.comments[t]=S.comments[t]||[]).push(sp?{author_name:"SAPS",author_kind:"saps",body,created_at:new Date().toISOString()}:{author_name:S.me.fn+" "+(S.me.ln||"").charAt(0)+".",author_company:S.me.co,author_photo:S.me.photo,body,created_at:new Date().toISOString()});S.openCm[t]=true;toast("Comment posted");if(!sp)bumpPoints()}catch(x){toast(errMsg(x))}
    b.disabled=false;$("#welcome").classList.contains("open")?Welcome():render();return}
  if(d.cepick!==undefined){const q=S.quiz.qs[S.quiz.i];S.quiz.answers[q.id]=+d.cepick;renderQuiz();return}
  if(d.like){const id=+d.like;const had=S.myLikes.has(id);had?S.myLikes.delete(id):S.myLikes.add(id);S.likes[id]=(S.likes[id]||0)+(had?-1:1);render();
    try{await rpc("toggle_photo_like",{p_token:S.token,p_photo:id});bumpPoints()}catch(x){toast(errMsg(x))}return}
  if(d.pvote){const [pid,i]=d.pvote.split(":");const prev=S.myPolls[pid];if(prev===+i)return;S.myPolls[pid]=+i;render();
    try{await rpc("cast_poll_vote",{p_token:S.token,p_poll:pid,p_option:+i});toast(prev==null?"Vote recorded":"Vote changed");if(prev==null)bumpPoints()}catch(x){if(prev==null)delete S.myPolls[pid];else S.myPolls[pid]=prev;toast(errMsg(x))}await loadPublic().catch(()=>{});render();return}
  if(d.pstat){const [id,st]=d.pstat.split(":");await adminAct("poll_set_status",{p_id:+id,p_status:st},st==="live"?"Poll is live":st==="closed"?"Poll closed. Results revealed":"Updated");if(st!=="draft")await rpc("admin_set_stage",{p_token:S.token,p_view:"poll",p_pinned:null,p_poll_open:null,p_cloud_open:null}).catch(()=>{});await loadPublic().catch(()=>{});render();renderStageIfOpen();return}
  if(d.pedit){const p=S.polls.find(x=>x.id===+d.pedit);sheet(PollEdit(p));return}
  if(d.pdel){const p=S.polls.find(x=>x.id===+d.pdel);sheet(confirmSheet("Delete this poll?",`"${esc(p?p.question:"")}" and all its votes will be deleted.`,"pdelgo",`data-id="${d.pdel}"`));return}
  if(d.cstat){const [id,st]=d.cstat.split(":");await adminAct("cloud_set_status",{p_id:+id,p_status:st},st==="live"?"Word cloud is live":"Word cloud closed");if(st==="live")await rpc("admin_set_stage",{p_token:S.token,p_view:"cloud",p_pinned:null,p_poll_open:null,p_cloud_open:null}).catch(()=>{});await loadPublic().catch(()=>{});render();renderStageIfOpen();return}
  if(d.cedit){const p=S.adPrompts.find(x=>x.id===+d.cedit);sheet(PromptEdit(p));return}
  if(d.cdel){const p=S.adPrompts.find(x=>x.id===+d.cdel);sheet(confirmSheet("Delete this word cloud?",`"${esc(p?p.prompt:"")}" and all its words will be deleted.`,"cdelgo",`data-id="${d.cdel}"`));return}
  if(d.sdel){const [k,id]=d.sdel.split(":");const L={photo:"photo",comment:"comment",question:"question",word:"word"}[k];sheet(confirmSheet(`Delete this ${L}?`,`This permanently removes the ${L}${k==="photo"?" and its comments":""}. Hide it instead if you might want it back.`,"sdelgo",`data-k="${k}" data-id="${id}"`));return}
  if(d.sreset){const L={qa:"all Q&A questions and likes (SAPS questions are kept)",audigram:"all Audigram photos, likes and comments",polls:"all poll votes",words:"all word cloud words"}[d.sreset];sheet(confirmSheet("Reset this section?",`This permanently deletes ${L}. It cannot be undone.`,"sresetgo",`data-k="${d.sreset}"`));return}
  if(d.attedit){const a=S.ad.attendees.find(x=>x.id===d.attedit);if(a)sheet(AttEdit(a));return}
  if(d.attdel){const a=S.ad.attendees.find(x=>x.id===d.attdel);if(a)sheet(confirmSheet("Delete this check in?",`${esc(a.first_name)} ${esc(a.last_name)} (${esc(a.company)}) and everything they posted, voted and submitted will be deleted.`,"attdelgo",`data-id="${a.id}"`));return}
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
    case "checkin":{keepReg();const r=S.reg;const co=(r.coSel==="__other"?r.co:r.coSel)||"";
      if(!(r.fn||"").trim()){toast("Add your first name");return}if(!(r.ln||"").trim()){toast("Add your last name");return}
      if(!co.trim()){toast("Choose your institution");return}if(!r.member){toast("Tell us if you're a SAPS member");return}
      S.busy=true;render();
      try{const res=await rpc("check_in_v2",{p_first:r.fn,p_last:r.ln,p_company:co,p_member:r.member==="yes",p_title:r.ti||null,p_salutation:r.sal||null});await finishCheckin(res)}
      catch(x){S.busy=false;render();toast(errMsg(x))}break}
    case "cifind":{keepReg();const r=S.reg;if(!(r.fn||"").trim()||!(r.ln||"").trim()){toast("Type your first and last name");return}
      S.busy=true;render();try{S.ci.results=await rpc("find_registrant",{p_first:r.fn,p_last:r.ln})||[];S.ci.searched=true}catch(x){toast(errMsg(x))}S.busy=false;render();break}
    case "ciform":keepReg();S.ci.step="form";render();scrollTo(0,0);break;
    case "cinot":S.ci.step="form";S.ci.card=null;render();scrollTo(0,0);break;
    case "ciback":keepReg();S.ci={step:"find",searched:S.ci.searched,results:S.ci.results};render();scrollTo(0,0);break;
    case "ciyes":{if(!S.ci.card)return;S.busy=true;render();try{const res=await rpc("checkin_registrant",{p_id:S.ci.card.id});await finishCheckin(res)}catch(x){S.busy=false;render();toast(errMsg(x))}break}
    case "showform":S.showForm=true;S.ci={step:"find"};render();scrollTo(0,0);rpc("institutions",{}).then(c=>{S.insts=c||[]}).catch(()=>{});setTimeout(()=>{const f=$("#fn");f&&f.focus()},50);break;
    case "hideform":keepReg();S.showForm=false;render();break;
    case "close":close();break;
    case "logoutask":sheet(`<h2 style="margin:6px 0 8px;font-size:20px;font-weight:900">Log out?</h2><p class="muted">You can come back any time. Check in again with the same first name, last name and company and your profile, quiz and feedback will be restored.</p><div style="height:14px"></div><button class="btn" data-a="signout">LOG OUT</button><div style="height:8px"></div><button class="btn ghost" data-a="close">STAY CHECKED IN</button>`);break;
    case "signout":try{localStorage.removeItem("ac26_token")}catch(x){}location.reload();break;
    case "ask":{const t=$("#qt").value.trim();if(t.length<5){toast("Type your question first");return}b.disabled=true;
      try{const sp=S.super&&S.asSaps;const id=await rpc("ask_question",{p_token:S.token,p_session:S.qaSession,p_body:t,p_anonymous:sp?false:!!($("#anon")||{}).checked,p_as_saps:sp});if(!sp)S.myVotes.add(id);S.myQs.add(id);S.qaSort="new";toast(sp?"Question posted as SAPS":"Question sent");if(!sp)bumpPoints()}catch(x){toast(errMsg(x))}
      await loadPublic().catch(()=>{});render();break}
    case "word":{const w=($("#wd").value||"").trim().split(/\s+/)[0];if(!w){toast("Type one word");return}b.disabled=true;
      try{await rpc("add_word_v2",{p_token:S.token,p_prompt:+d.pid,p_word:w.slice(0,18)});S.myWords[String(d.pid)]=w;bumpPoints()}catch(x){b.disabled=false;toast(errMsg(x))}await loadPublic().catch(()=>{});render();break}
    case "next":{const t=S.trivia;if(t.i+1<TRIVIA.length){t.i++;t.picked=null;render()}else{try{await rpc("submit_trivia",{p_token:S.token,p_score:t.score});S.myTrivia=t.score}catch(x){toast(errMsg(x))}await loadPublic().catch(()=>{});render()}break}
    case "saverate":{const dr=S._draft||{id:d.sid,stars:(S.ratings[d.sid]||{}).stars};if(!dr.stars)return;const c=$("#rc").value.trim();b.disabled=true;
      try{await rpc("rate_session",{p_token:S.token,p_session:dr.id,p_stars:dr.stars,p_comment:c});S.ratings[dr.id]={stars:dr.stars,comment:c};S._draft=null;close();render();toast("Rating saved");bumpPoints()}catch(x){b.disabled=false;toast(errMsg(x))}break}
    case "overall":{const F=S.fbf;FB_TEXT.forEach(([k])=>F[k]=$("#ft_"+k).value.trim());
      const miss=[...FB_SCALES.map(x=>x[0]),...FB_STARS.map(x=>x[0])].find(k=>!F[k]);if(miss){toast("Please answer every rating question");return}
      b.disabled=true;try{await rpc("submit_feedback_v2",{p_token:S.token,p:F});S.feedback={...F};render();bumpPoints();toast(S.ce.passed?"Thank you! Certificate unlocked":"Thank you for your feedback")}catch(x){b.disabled=false;toast(errMsg(x))}break}
    case "postphoto":{const pb=$("#pbtn");pb.disabled=true;pb.textContent="UPLOADING...";
      try{const path=`uploads/${(crypto.randomUUID?crypto.randomUUID():Date.now()+"-"+Math.random().toString(36).slice(2))}.jpg`;
        const up=await sb.storage.from("photos").upload(path,S._pendingBlob,{contentType:"image/jpeg"});if(up.error)throw up.error;
        const sp=S.super&&S.asSaps;await rpc("add_photo",{p_token:S.token,p_path:path,p_caption:$("#pcap").value,p_as_saps:sp});
        S._pendingBlob=null;close();await loadPublic();render();scrollTo(0,0);toast(sp?"Photo posted as SAPS":"Photo posted");if(!sp)bumpPoints()}
      catch(x){pb.disabled=false;pb.textContent="POST PHOTO";toast(errMsg(x))}break}
    case "cert":await certFontReady();sheet(Cert());break;
    case "certappr":await certFontReady();sheet(CertAppr());break;
    case "certapprpdf":{b.disabled=true;b.textContent="PREPARING PDF...";try{saveBlob(await certPDF(S.me.fn,S.me.ln,apprRole(S.me)),certName(S.me.fn,S.me.ln,true))}catch(e){toast("Couldn't create the PDF")}b.disabled=false;b.textContent="DOWNLOAD PDF";break}
    case "welcome":openWelcome();break;
    case "wcdone":$("#welcome").classList.remove("open");break;
    case "welcomedone":$("#welcome").classList.remove("open");S.welcome=null;try{localStorage.setItem("ac26_welcomed","1")}catch(x){}toast("Enjoy AudConnect 2026!");break;
    case "certpdf":{b.disabled=true;b.textContent="PREPARING PDF...";try{saveBlob(await certPDF(S.me.fn,S.me.ln),certName(S.me.fn,S.me.ln))}catch(e){toast("Couldn't create the PDF")}b.disabled=false;b.textContent="DOWNLOAD PDF";break}
    case "certall":{try{await loadAdmin()}catch(e){}const X=S.adx||[];const E=X.filter(x=>x.certificate_eligible);const AP=X.filter(x=>apprRole({roles:x.roles||[]}));if(!E.length&&!AP.length){toast("No certificates yet");break}
      b.disabled=true;const zip=new JSZip();const used={};const N=E.length+AP.length;let k=0;
      const add=async(folder,x,role)=>{k++;b.textContent=`PREPARING ${k} OF ${N}...`;let n=folder+"/"+certName(x.first_name,x.last_name,!!role);if(used[n]){used[n]++;n=n.replace(".pdf",`_${used[n]}.pdf`)}else used[n]=1;zip.file(n,await certPDF(x.first_name,x.last_name,role))};
      try{for(const x of E)await add("Participation",x,null);for(const x of AP)await add("Appreciation",x,apprRole({roles:x.roles||[]}));
        saveBlob(await zip.generateAsync({type:"blob"}),"AudConnect2026_Certificates.zip");toast(`${N} certificates downloaded`)}catch(e){toast("Couldn't create the certificates")}
      b.disabled=false;b.textContent="DOWNLOAD ALL CERTIFICATES (ZIP)";break}
    case "cestart":{S.quiz={qs:null,i:0,answers:{},result:null};S.tab="fb";renderQuiz();try{S.quiz.qs=await rpc("ce_get_questions",{p_token:S.token})}catch(x){S.quiz=null;render();toast(errMsg(x));break}renderQuiz();break}
    case "cenext":S.quiz.i++;renderQuiz();break;
    case "ceprev":S.quiz.i--;renderQuiz();break;
    case "cesubmit":{b.disabled=true;try{const r=await rpc("ce_submit",{p_token:S.token,p_answers:S.quiz.answers});S.quiz.result=r;await loadMine().catch(()=>{});renderQuiz()}catch(x){b.disabled=false;toast(errMsg(x))}break}
    case "ceclose":S.quiz=null;render();scrollTo(0,0);break;
    case "assaps":S.asSaps=!S.asSaps;render();toast(S.asSaps?"Now posting as SAPS":"Now posting as yourself");break;
    case "howpts":sheet(HowPts());break;
    case "editprof":S._avBlob=null;S._avUrl=null;S._avRemove=false;sheet(EditProf());break;
    case "avremove":S._avBlob=null;S._avUrl=null;S._avRemove=true;{const a=$("#epAv");if(a)a.innerHTML=`<b>${esc(ini(S.me.fn+" "+S.me.ln))}</b>`}break;
    case "epsave":{const v=id=>($("#"+id)||{}).value||"";const fn=v("ep_fn").trim(),ln=v("ep_ln").trim(),co=v("ep_co").trim();
      if(!fn||!ln||!co){toast("Name and institution are required");return}b.disabled=true;
      try{let photo=null;if(S._avBlob){const path=`uploads/avatar-${(crypto.randomUUID?crypto.randomUUID():Date.now())}.jpg`;const up=await sb.storage.from("photos").upload(path,S._avBlob,{contentType:"image/jpeg"});if(up.error)throw up.error;photo=path}else if(S._avRemove)photo="";
        const changed=fn!==S.me.fn||ln!==S.me.ln;const p=await rpc("update_profile",{p_token:S.token,p_salutation:v("ep_sal"),p_first:fn,p_last:ln,p_title:v("ep_t"),p_company:co,p_photo:photo});
        setMe(p);close();render();toast(changed?"Saved. Use the new spelling next time you check in":"Profile saved")}catch(x){b.disabled=false;toast(errMsg(x))}break}
    case "supercode":sheet(SuperCode());setTimeout(()=>{const f=$("#sc");f&&f.focus()},50);break;
    case "unlocksuper":{const code=($("#sc").value||"").trim();if(!code){toast("Enter the super admin code");return}b.disabled=true;
      try{const ok=await rpc("unlock_super",{p_token:S.token,p_code:code});
        if(ok){S.super=true;S.committee=true;close();S.admin=true;S.adTab="super";render();scrollTo(0,0);toast("Super admin unlocked");await loadAdmin().catch(()=>{});await loadPublic().catch(()=>{});render()}
        else{b.disabled=false;toast("That code isn't right")}}
      catch(x){b.disabled=false;toast(/too many/i.test((x&&x.message)||"")?"Too many attempts":errMsg(x))}break}
    case "orgcode":sheet(OrgCode());setTimeout(()=>{const f=$("#oc");f&&f.focus()},50);break;
    case "unlock":{const code=($("#oc").value||"").trim();if(!code){toast("Enter the organiser code");return}b.disabled=true;
      try{const ok=await rpc("unlock_organiser",{p_token:S.token,p_code:code});
        if(ok){S.committee=true;close();S.admin=true;S.adTab="over";render();scrollTo(0,0);toast("Organiser access unlocked");await loadAdmin().catch(()=>{});render()}
        else{b.disabled=false;toast("That code isn't right")}}
      catch(x){b.disabled=false;toast(/too many/i.test((x&&x.message)||"")?"Too many attempts. Ask the committee for help":errMsg(x))}break}
    case "stage":S.stageLocal=null;await loadAdmin().catch(()=>{});Stage();$("#stage").classList.add("open");clearInterval(S._stT);S._stT=setInterval(()=>{if($("#stage").classList.contains("open"))refreshSoon();else clearInterval(S._stT)},6000);try{document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen()}catch(x){}break;
    case "stageclose":$("#stage").classList.remove("open");try{document.fullscreenElement&&document.exitFullscreen()}catch(x){}break;
    case "admin":S.admin=true;S.adTab="over";render();scrollTo(0,0);try{await loadAdmin()}catch(x){toast(errMsg(x))}render();break;
    case "adexit":S.admin=false;render();scrollTo(0,0);break;
    case "adrefresh":try{await loadAdmin()}catch(x){}render();toast("Updated");break;
    case "pnew":sheet(PollEdit());setTimeout(()=>{const f=$("#pq");f&&f.focus()},50);break;
    case "psave":{const q=($("#pq").value||"").trim();const o=[0,1,2,3,4,5].map(i=>($("#po"+i).value||"").trim()).filter(Boolean);
      if(q.length<3){toast("Type the poll question");return}if(o.length<2){toast("Add at least two options");return}b.disabled=true;
      try{await rpc("super_poll_save",{p_token:S.token,p_id:d.id?+d.id:null,p_question:q,p_options:o});close();toast("Poll saved as a draft")}catch(x){b.disabled=false;toast(errMsg(x));return}
      await Promise.all([loadPublic(),loadAdmin()]).catch(()=>{});render();break}
    case "cnew":sheet(PromptEdit());setTimeout(()=>{const f=$("#cq");f&&f.focus()},50);break;
    case "csave":{const q=($("#cq").value||"").trim();if(q.length<3){toast("Type the question");return}b.disabled=true;
      try{await rpc("super_cloud_save",{p_token:S.token,p_id:d.id?+d.id:null,p_prompt:q});close();toast("Saved as a draft")}catch(x){b.disabled=false;toast(errMsg(x));return}
      await Promise.all([loadPublic(),loadAdmin()]).catch(()=>{});render();break}
    case "pdelgo":case "cdelgo":case "sdelgo":case "sresetgo":case "attdelgo":{if(($("#delc").value||"").trim()!=="DELETE"){toast("Type DELETE to confirm");return}b.disabled=true;
      const m={pdelgo:["super_poll_delete",{p_id:+d.id},"Poll deleted"],cdelgo:["super_cloud_delete",{p_id:+d.id},"Word cloud deleted"],sdelgo:["super_delete",{p_kind:d.k,p_id:+d.id},"Deleted"],sresetgo:["super_reset",{p_section:d.k},"Section reset"],attdelgo:["super_delete_attendee",{p_id:d.id},"Check in deleted"]}[d.a];
      close();await adminAct(m[0],m[1],m[2]);break}
    case "attsave":{const v=id=>($("#"+id)||{}).value||"";const p={salutation:v("ae_sal"),first_name:v("ae_fn").trim(),last_name:v("ae_ln").trim(),title:v("ae_t").trim(),company:v("ae_co").trim(),member_id:v("ae_mid").trim(),saps_member:v("ae_mem")==="true",roles:[...document.querySelectorAll(".ae_role:checked")].map(x=>x.value)};
      if(!p.first_name||!p.last_name||!p.company){toast("Name and institution are required");return}b.disabled=true;close();await adminAct("super_update_attendee",{p_id:d.id,p},"Check in updated");break}
    case "exportxlsx":{try{await loadAdmin()}catch(x){}const t=d=>d?new Date(d).toLocaleString("en-SG",{timeZone:"Asia/Singapore",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:false}):"";
      const rows=(S.adx||[]).map(x=>({"Salutation":x.salutation||"","First Name":x.first_name,"Last Name":x.last_name,"Job Title":x.title||"","Institution":x.company,"SAPS Member":x.saps_member?"Yes":x.saps_member===false?"No":"","MSAPS ID":x.member_id||"","Roles":roleTags({roles:x.roles||[]}).map(r=>r[1]).join(", "),"Registered or Walk In":x.walk_in?"Walk in":"Registered","Name Changed":x.name_history||"","Committee":x.is_committee?"Yes":"","Points":x.points??"","Check In Time (SGT)":t(x.checked_in_at),"Feedback Submitted (SGT)":t(x.feedback_first_at),"Feedback Last Updated (SGT)":t(x.feedback_last_at),"Overall Satisfaction (1-5)":x.satisfaction??"","Met Expectations (1-5)":x.expectations??"","Food":x.food??"","Venue":x.venue??"","Posters":x.posters??"","Booths":x.booths??"","Programme Flow and Duration":x.flow??"","Most Valuable Sessions":x.valuable||"","Future Topics":x.future_topics||"","Other Feedback":x.other_feedback||"","Someone New They Met":x.met_someone||"","CE Attempts":x.ce_attempts||0,"CE Best Score":x.ce_best_score!=null?`${x.ce_best_score}/${x.ce_total}`:"","CE Passed":x.ce_passed?"Yes":"No","CE Passed Time (SGT)":t(x.ce_passed_at),"CE Last Attempt (SGT)":t(x.ce_last_at),"Certificate Eligible":x.certificate_eligible?"Yes":"No","Certificate of Appreciation":apprRole({roles:x.roles||[]})||""}));
      if(window.XLSX){const ws=XLSX.utils.json_to_sheet(rows);ws["!cols"]=Object.keys(rows[0]||{a:1}).map(k=>({wch:Math.max(12,k.length+2)}));const wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,"AudConnect 2026");XLSX.writeFile(wb,"AudConnect2026_attendance_CE_feedback.xlsx")}
      else{const keys=Object.keys(rows[0]||{});downloadCSV("AudConnect2026_attendance_CE_feedback.csv",[keys,...rows.map(r=>keys.map(k=>r[k]))])}
      break}
    case "exportatt":downloadCSV("audconnect2026-attendance.csv",[["First name","Last name","Company","SAPS member","Checked in (SGT)"],...S.ad.attendees.map(a=>[a.first_name,a.last_name,a.company,a.saps_member?"Yes":a.saps_member===false?"No":"",new Date(a.checked_in_at).toLocaleString("en-SG",{timeZone:"Asia/Singapore"})])]);break;
    case "exportfb":downloadCSV("audconnect2026-feedback.csv",[["Type","Item","Score","Comment"],...S.ad.feedback.flatMap(f=>[["Event","Overall satisfaction",f.satisfaction,""],["Event","Met expectations",f.expectations,""],...FB_STARS.map(([k,l])=>["Event",l,f[k],""]),["Event","Most valuable sessions","",f.valuable||""],["Event","Future topics","",f.next_topic||""],["Event","Other feedback","",f.other||""],["Event","Someone new they met","",f.met||""]]),...S.ad.ratings.map(r=>["Session",(SESSIONS.find(s=>s.id===r.session_id)||{}).title||r.session_id,r.stars,r.comment||""])]);break;
  }
});
document.addEventListener("input",e=>{const t=e.target;if(t.id==="fe")S.fbf.email=t.value;else if(t.id&&t.id.startsWith("ft_"))S.fbf[t.id.slice(3)]=t.value});
document.addEventListener("dblclick",e=>{const im=e.target.closest("[data-dbl]");if(!im)return;const id=+im.dataset.dbl;if(!S.myLikes.has(id)){const btn=document.querySelector(`[data-like="${id}"]`);btn&&btn.click()}});
document.addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.classList&&e.target.classList.contains("ag-in")){e.preventDefault();const b=document.querySelector(`[data-cmpost="${e.target.dataset.cmin}"]`);b&&b.click()}});
document.addEventListener("change",e=>{if(e.target.id!=="avfile"||!e.target.files[0])return;const f=e.target.files[0];const rd=new FileReader();
  rd.onload=()=>{const im=new Image();im.onload=()=>{const n=Math.min(im.width,im.height),sz=400;const c=document.createElement("canvas");c.width=sz;c.height=sz;c.getContext("2d").drawImage(im,(im.width-n)/2,(im.height-n)/2,n,n,0,0,sz,sz);
    c.toBlob(bl=>{if(!bl){toast("That photo couldn't be prepared");return}S._avBlob=bl;S._avUrl=c.toDataURL("image/jpeg",.8);S._avRemove=false;const a=$("#epAv");if(a)a.innerHTML=`<img src="${S._avUrl}" alt="">`},"image/jpeg",.85)};im.onerror=()=>toast("That file isn't a photo we can open");im.src=rd.result};rd.readAsDataURL(f);e.target.value=""});
document.addEventListener("change",e=>{if(e.target.id==="cosel"){keepReg();render();if(S.reg.coSel==="__other")setTimeout(()=>{const c=$("#co");c&&c.focus()},30)}});
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

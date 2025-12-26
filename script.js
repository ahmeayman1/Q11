const questions = [

/* ========== MCQ (1–20) ========== */

{type:"mcq",q:"Parenteral Nutrition (PN) is indicated when the GI tract is:",options:[
"Functioning normally",
"Nonfunctional, inaccessible, or unsafe to use",
"Slightly irritated",
"Used for oral supplements"],a:1},

{type:"mcq",q:"Total Parenteral Nutrition (TPN) must be administered through:",options:[
"A peripheral vein in the hand",
"A central venous catheter (CVC)",
"A nasogastric tube",
"An intramuscular injection"],a:1},

{type:"mcq",q:"Peripheral Parenteral Nutrition (PPN) is usually used for:",options:[
"Long-term support (>2 weeks)",
"Short-term support (<10 days)",
"Permanent nutrition",
"Patients with high caloric needs"],a:1},

{type:"mcq",q:"The caloric value of IV Dextrose is:",options:[
"4 kcal/g","3.4 kcal/g","9 kcal/g","7 kcal/g"],a:1},

{type:"mcq",q:"Which PN component is the building block for tissue repair?",options:[
"Lipids","Dextrose","Amino acids","Electrolytes"],a:2},

{type:"mcq",q:"Lipid emulsions in PN should not exceed ___% of calories:",options:[
"10%","20%","30%","50%"],a:2},

{type:"mcq",q:"To assess protein tolerance in PN, monitor:",options:[
"Blood glucose","BUN & Creatinine",
"Serum Calcium","Liver enzymes"],a:1},

{type:"mcq",q:"Refeeding syndrome is associated with:",options:[
"Hyperkalemia","Hypophosphatemia",
"Hypernatremia","Hyperglycemia"],a:1},

{type:"mcq",q:"Primary goal of nutrition therapy in Diabetes Mellitus:",options:[
"Eliminate carbs","Maintain near-normal glucose",
"Rapid weight gain","Replace insulin"],a:1},

{type:"mcq",q:"In Plate Method, vegetables fill:",options:[
"1/4 plate","1/2 plate",
"Entire plate","1/8 plate"],a:1},

{type:"mcq",q:"Type 1 Diabetes is characterized by:",options:[
"Insulin resistance",
"Autoimmune beta-cell destruction",
"Obesity","Pregnancy induced"],a:1},

{type:"mcq",q:"Recommended % calories from carbs in DM:",options:[
"10–20%","45–60%","80–90%","5%"],a:1},

{type:"mcq",q:"Low GI foods are preferred because they:",options:[
"Spike sugar","Cause slower glucose rise",
"No calories","Taste better"],a:1},

{type:"mcq",q:"Diabetic nephropathy patients should limit:",options:[
"Fiber","Protein","Water","Complex carbs"],a:1},

{type:"mcq",q:"Alcohol in diabetics may cause:",options:[
"Hyperglycemia only",
"Hypoglycemia without food",
"Instant weight loss",
"Better insulin secretion"],a:1},

{type:"mcq",q:"PN solutions should be prepared under:",options:[
"Bedside clean technique",
"Laminar airflow hood",
"Kitchen","Sunlight"],a:1},

{type:"mcq",q:"TPN tubing & filters changed every:",options:[
"12 h","24 h","72 h","7 days"],a:1},

{type:"mcq",q:"Main regulator of fluid balance:",options:[
"Potassium","Sodium","Magnesium","Phosphorus"],a:1},

{type:"mcq",q:"Target HbA1c for most diabetics:",options:[
"<7%"," >10%","12%","Not important"],a:0},

{type:"mcq",q:"Fat-soluble vitamins in PN:",options:[
"B & C","A, D, E, K",
"Zinc & Iron","Vitamin D only"],a:1},

/* ========== TRUE / FALSE (21–40) ========== */

{type:"tf",q:"PPN is suitable for very high caloric needs.",a:false},
{type:"tf",q:"Functional GI tract is a contraindication for PN.",a:true},
{type:"tf",q:"TPN solutions are hypertonic (>900 mOsm/L).",a:true},
{type:"tf",q:"Insulin cannot be added to PN.",a:false},
{type:"tf",q:"PN can start in unstable patients.",a:false},
{type:"tf",q:"Fat overload syndrome enlarges liver & spleen.",a:true},
{type:"tf",q:"0.22 micron filter used for 3-in-1 PN.",a:false},
{type:"tf",q:"Rapid weight gain often means fluid retention.",a:true},
{type:"tf",q:"PN stops when oral intake reaches 20%.",a:false},
{type:"tf",q:"Smart pumps reduce PN errors.",a:true},
{type:"tf",q:"Type 2 DM caused by absolute insulin lack.",a:false},
{type:"tf",q:"Fiber 25–30g/day recommended for diabetics.",a:true},
{type:"tf",q:"Sucrose is completely banned in DM.",a:false},
{type:"tf",q:"Saturated fat <7% calories in DM.",a:true},
{type:"tf",q:"Chromium & Magnesium improve insulin sensitivity.",a:true},
{type:"tf",q:"TPN safe in peripheral vein.",a:false},
{type:"tf",q:"Air embolism is PN mechanical complication.",a:true},
{type:"tf",q:"I&O monitoring detects fluid overload.",a:true},
{type:"tf",q:"Omega-3 lipids reduce inflammation.",a:true},
{type:"tf",q:"HPN is for chronic stable patients.",a:true},

/* ========== CRITICAL THINKING (41–50) ========== */

{type:"mcq",q:"TPN bag finished – what to hang?",options:[
"Normal saline","D10W","D5W","Ringer"],a:1},

{type:"mcq",q:"Why start PN slowly in malnourished?",options:[
"Save cost","Avoid refeeding syndrome",
"Prevent diarrhea","Allergy test"],a:1},

{type:"mcq",q:"Sudden fever & chills on TPN:",options:[
"Slow rate",
"Suspect catheter sepsis",
"Give aspirin",
"Increase rate"],a:1},

{type:"mcq",q:"Cracked PN bag action:",options:[
"Shake","Warm",
"Return pharmacy","Filter"],a:2},

{type:"mcq",q:"Best advice before long exercise in DM:",options:[
"No food","Extra insulin",
"Carb snack","Coffee"],a:2},

{type:"mcq",q:"Why central vein for TPN?",options:[
"Dilutes hypertonic solution",
"Near stomach",
"Easier","Comfort"],a:0},

{type:"mcq",q:"Stop TPN when oral intake is:",options:[
"Immediately",">60% needs",
"When full","After 3 days"],a:1},

{type:"mcq",q:"Glucose 280 mg/dL on TPN:",options:[
"Stop TPN","Give insulin",
"Increase rate","Sugary drink"],a:1},

{type:"mcq",q:"Position for air embolism:",options:[
"Right side up",
"Left Trendelenburg",
"Flat","Prone"],a:1},

{type:"mcq",q:"Major advantage of 3-in-1 PN:",options:[
"Cheaper",
"Less line opening → ↓ infection",
"Smell","Long storage"],a:1},

];
/* SHUFFLE */
questions.sort(()=>Math.random()-0.5);

let index=0;
let answers=Array(questions.length).fill(null);

/* ELEMENTS */
const qText=document.getElementById("questionText");
const optionsDiv=document.getElementById("options");
const counter=document.getElementById("counter");
const progress=document.getElementById("progressBar");
const nextBtn=document.getElementById("nextBtn");
const retryBtn=document.getElementById("retryBtn");
const qList=document.getElementById("questionsList");

/* MENU */
function toggleMenu(){
  const m=document.getElementById("sideMenu");
  const o=document.getElementById("overlay");
  if(m.style.right==="0px"){m.style.right="-250px";o.style.display="none";}
  else{m.style.right="0";o.style.display="block";}
}

/* DARK MODE */
function toggleDark(){
  document.body.classList.toggle("dark");
}

/* QUIZ */
function startQuiz(){
  index=0;
  answers.fill(null);
  document.getElementById("home").style.display="none";
  document.getElementById("quiz").style.display="block";
  loadQuestion();
}

function loadQuestion(){
  optionsDiv.innerHTML="";
  nextBtn.style.display="none";

  const q=questions[index];
  qText.innerText=q.q;
  counter.innerText=`Question ${index+1} / ${questions.length}`;
  progress.style.width=((index+1)/questions.length*100)+"%";

  if(q.type==="tf"){
    createOption("True",true);
    createOption("False",false);
  }else{
    q.options.forEach((o,i)=>createOption(o,i));
  }
}

function createOption(text,val){
  const b=document.createElement("button");
  b.innerText=text;
  b.onclick=()=>select(val,b);
  optionsDiv.appendChild(b);
}

function select(val,btn){
  if(answers[index]!==null)return;
  answers[index]=val;

  const q=questions[index];
  [...optionsDiv.children].forEach((b,i)=>{
    const correct=q.type==="tf"?((i===0)===q.a):(i===q.a);
    if(correct)b.style.background="#27ae60";
    else if(b===btn)b.style.background="#e74c3c";
    b.disabled=true;
  });
  nextBtn.style.display="inline-block";
}

function nextQuestion(){
  if(index<questions.length-1){
    index++;
    loadQuestion();
  }else finishQuiz();
}

function finishQuiz(){
  let score=0;
  questions.forEach((q,i)=>{if(answers[i]===q.a)score++;});
  qText.innerText=`✅ Finished\nScore ${score}/${questions.length}`;
  optionsDiv.innerHTML="";
  counter.innerText="";
  nextBtn.style.display="none";
  retryBtn.style.display="inline-block";
}

function retryQuiz(){
  location.reload();
}

function toggleQuestions(){
  qList.innerHTML="";
  qList.style.display=qList.style.display==="block"?"none":"block";

  answers.forEach((a,i)=>{
    const d=document.createElement("div");
    d.className="q-item "+(a===null?"unanswered":a===questions[i].a?"correct":"wrong");
    d.innerText=i+1;
    d.onclick=()=>{index=i;loadQuestion();qList.style.display="none";}
    qList.appendChild(d);
  });
}
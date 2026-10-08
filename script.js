/* ===== CONFIG — كل النصوص تتعدل من هنا ===== */
const CONFIG = {
  sender: "عبسبس", recipient: "فطوكتي", music: "1.mp3", theme: "pink",
  iLoveYouText: "I love you", particleCount: 1800,
  // beat = [text, cssClass, msBeforeNext]; ["#clear"] يمسح الشاشة
  intro: [["من عبسبس ❤️","big",1500],["إلى فطوكتي 🌷","big",1500],["عندي شي صغير إلج...","soft",2000],["بس أريدج تعيشينه للنهاية ❤️","",900]],
  questions: [
    {q:"فطوكتي شلونج اليوم؟ 🥹❤️",o:["كلش زينة ❤️","شوية تعبانة 🥺","أحتاج عبسبس 😂❤️","ما أدري شبيّه 🥹"],r:"المهم هسه صار عندج عبسبس يهتم بيج. ❤️"},
    {q:"فطوكتي... إذا عبسبس جان يمج هسه، شنو أول شي تريدينه يسويلج؟ 🥹❤️",o:["يحضني 🫂","يبقى يحچي وياي ❤️","يضحكني 😂","كلهم 😭❤️"],r:"لو بيدي جان هسه ما خليتج تبعدين عني. ❤️"},
    {q:"تعرفين شكد عبسبس يحبج؟ 👀❤️",o:["هواي","هواي هواي 😂","ما أعتقد أعرف 😭","أكثر مما أتوقع؟ 🥹"],r:"إي... أكثر مما تتوقعين. ❤️",pulse:1},
    {q:"فطوكتي... مستعدة تعرفين شلون حتى الكيمياء تذكّر عبسبس بيج؟ 👀🧪❤️",o:["شنوو؟ 👀","هااا شمسوي؟ 😂","يلا وريني 🥹"],r:"لأن حتى الكيمياء ما گدرت تمنع عبسبس من يربط كلشي بيج. ❤️",big:1}
  ],
  chem: [
    ["من ذرة... بدأت الحكاية. 🧪❤️","big",2600],["دالتون حاول يفسر شلون المادة تتكون من ذرات...","soft",3200],
    ["وأني هم عندي نظرية خاصة بيّه...","",2600],["#clear"],
    ["نظرية عبسبس:","soft",1500],["كل ذرات الكون ما تسوه ذرة وحدة من وجودج بحياتي. ❤️","",3800],
    ["وإذا الكون كله مكوّن من ذرات...","soft",2600],["فأني أحس كل ذرة بيه تذكّرني بيج. 🥹❤️","",2600],["فطوكتي","name",3600],["#clear"],
    ["قوانين الاتحاد الكيميائي 🧪❤️","big",2600],["#clear"],
    ["قانون حفظ الكتلة","formula",1600],["يكولون المادة ما تفنى ولا تُستحدث من العدم...","soft",3000],["وأني عندي شي ثاني ما يفنى...","",2400],["حبي إلج. ❤️","",1200],["❤","hrt",3200],["#clear"],
    ["قانون النسب الثابتة","formula",1600],["المركبات تتكون من عناصر بنسب ثابتة...","soft",3000],["وأني هم عندي نسبة ثابتة بحياتي...","",2400],["إنتِ بيها. ❤️","big",2000],["كل ما أتخيل حياتي... أگول لازم فطوكتي تكون بيها.","soft",3400],["#clear"],
    ["قانون النسب المتضاعفة","formula",1600],["CO &nbsp;·&nbsp; CO₂ &nbsp;·&nbsp; H₂O &nbsp;·&nbsp; H₂O₂","formula",2200],["إذا العناصر تكدر ترتبط بأكثر من نسبة...","soft",3400],
    ["فأنـي مهما زادت الأيام، ما أريد أغيّر نسبة حبج بقلبي. ❤️","",3600],["كل يوم أحبج أكثر.","big",2400]
  ],
  equation: [["عبسبس + فطوكتي = ❤️","big formula",3200],["التفاعل الوحيد اللي مستحيل أريد أوقفه.","soft",4800]],
  timeline: [
    {h:"البداية ❤️",t:"أول مرة صار وجودج يعنيلي شي"},
    {h:"بعدها 🥹",t:"بديت أكتشف شكد وجودج يفرق وياي"},
    {h:"وبعدين ❤️",t:"صار اسمج جزء من أيامي"},
    {h:"واليوم 🌷",t:"صرتِ فطوكتي... الإنسانة اللي عبسبس يحبها."}
  ],
  heartText: [["إنتِ مو بس فطوكتي...","soft",2800],["إنتِ الشي الحلو اللي عبسبس يريد يبقى بحياته. ❤️","",3200],["I love you, Fatokty. ❤️","big formula",0]],
  letter: [
    "فطوكتي،",
    "ما أعرف شلون أشرح لج شكد وجودج غيّر هواي أشياء بداخلي، بس أعرف شغلة وحدة... من صرتي بحياتي، صارت الأيام إلها طعم ثاني. ❤️",
    "أحبج مو بس بالأوقات الحلوة، أحبج حتى بوقت تعبج، بوقت زعلج، وبالأيام اللي تحسين بيها إنج مو بأحسن حالاتج. لأن بالنسبة إلي إنتِ مو مجرد شخص أحبه، إنتِ الشخص اللي أريد أبقى يمّه بكل الحالات.",
    "وأدري يمكن مرات ما أعرف أعبّر بالطريقة الصح، ويمكن عبسبس يسوي شغلات غبية 😂، بس صدگيني ورا كلشي أسويه أكو حب كبير إلج.",
    "وأريدج تعرفين إنج غالية عليه هواي، وأن وجودج بحياتي مو شي عابر. إنتِ صرتي جزء من أيامي، من تفكيري، ومن الأشياء اللي أتمنى تبقى وياي لأطول وقت ممكن.",
    "وإذا الكيمياء تكول الذرات تتحد حتى تكوّن مركبات، فأني أگول عبسبس وفطوكتي اتحدوا حتى يسوون أحلى شي بحياتي. ❤️",
    "أحبج هواي يا فطوكتي، وأتمنى مهما تمر الأيام تبقين تضحكين بنفس الطريقة اللي أحبها، وتبقين مرتاحة ومطمئنة، وأبقى الشخص اللي يگدر يفرّح قلبج حتى لو بشغلة صغيرة.",
    "من عبسبس... إلى فطوكتي. ❤️"
  ],
  final: [["❤","hrt",2200],["فطوكتي ❤️","big",2200],["إذا وصلتِ لهنا...","soft",2600],["فمعناها عبسبس نجح يسويلج شي صغير يشبه مكانج بقلبه. 🥹❤️","",4200],["أحبج.","big",1800],["هواي.","big",2400],["#hearts"],["عبسبس ❤️ فطوكتي","big",1800],["Always.","formula",0]]
};

/* ===== helpers ===== */
const $ = id => document.getElementById(id), wait = ms => new Promise(r => setTimeout(r, ms));
const rnd = (a, b) => a + Math.random() * (b - a);
function show(id) { document.querySelectorAll(".sc").forEach(s => s.classList.toggle("on", s.id === id)); }
async function run(box, beats) {
  for (const [t, c = "", ms = 1500] of beats) {
    if (t === "#clear") { box.classList.add("out"); await wait(750); box.innerHTML = ""; box.classList.remove("out"); continue; }
    if (t === "#hearts") { fill(); await wait(3500); continue; }
    const d = document.createElement("div"); d.className = "ln " + c; d.innerHTML = t; box.appendChild(d); await wait(ms);
  }
}

/* ===== FX canvas: dust, bursts, atoms, equation ===== */
const cv = $("fx"), cx = cv.getContext("2d"); let W, H, mode = 0, eqT = 0, parts = [], dust = [], atoms = [];
function rs() { const D = Math.min(devicePixelRatio || 1, 2); W = innerWidth; H = innerHeight; cv.width = W * D; cv.height = H * D; cx.setTransform(D, 0, 0, D, 0, 0); }
addEventListener("resize", rs); rs();
const hp = (t, s) => [s * 16 * Math.pow(Math.sin(t), 3), -s * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t))];
for (let i = 0; i < 70; i++) dust.push({ x: rnd(0, W), y: rnd(0, H), r: rnd(.6, 2.2), v: rnd(.1, .4), p: rnd(0, 6), h: Math.random() < .08 });
for (let i = 0; i < 14; i++) atoms.push({ x: rnd(0, W), y: rnd(0, H), a: rnd(0, 6.3), t: i / 14 * 6.283 });
function burst(x, y, n = 26) {
  for (let i = 0; i < n; i++) { const a = rnd(0, 6.28), v = rnd(2, 8); parts.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 2, l: 1, d: rnd(.012, .022), s: rnd(10, 26), h: i % 3 === 0, k: i % 5 === 0 }); }
}
function fill() { for (let i = 0; i < 70; i++) setTimeout(() => parts.push({ x: rnd(0, W), y: H + 30, vx: rnd(-.6, .6), vy: rnd(-5, -2), l: 1.6, d: .004, s: rnd(18, 46), h: 1, g: -.02 }), i * 45); }
function frame(now) {
  cx.clearRect(0, 0, W, H); cx.textAlign = "center"; cx.textBaseline = "middle";
  for (const d of dust) { d.y -= d.v; d.x += Math.sin(now / 2000 + d.p) * .3; if (d.y < -10) { d.y = H + 10; d.x = rnd(0, W); }
    cx.globalAlpha = .35 + .25 * Math.sin(now / 900 + d.p); cx.fillStyle = "#FFB3D6";
    if (d.h) { cx.font = "13px serif"; cx.fillText("♥", d.x, d.y); } else { cx.beginPath(); cx.arc(d.x, d.y, d.r, 0, 6.3); cx.fill(); } }
  const mx = W / 2, my = H / 2, R = Math.min(W, H);
  if (mode === 1) { // atom
    cx.save(); cx.translate(mx, my * .95); const g = cx.createRadialGradient(0, 0, 0, 0, 0, R * .3); g.addColorStop(0, "rgba(255,143,196,.55)"); g.addColorStop(1, "transparent");
    cx.globalAlpha = 1; cx.fillStyle = g; cx.beginPath(); cx.arc(0, 0, R * .3, 0, 6.3); cx.fill();
    cx.fillStyle = "#FFD1E4"; cx.shadowColor = "#ff4fa0"; cx.shadowBlur = 25; cx.beginPath(); cx.arc(0, 0, R * .03, 0, 6.3); cx.fill();
    for (let i = 0; i < 3; i++) { cx.save(); cx.rotate(i * 1.047 + now / 12000); cx.strokeStyle = "rgba(255,143,196,.35)"; cx.lineWidth = 1.2; cx.beginPath(); cx.ellipse(0, 0, R * .3, R * .11, 0, 0, 6.3); cx.stroke();
      const a = now / (700 + i * 300) + i * 2; cx.fillStyle = "#fff"; cx.beginPath(); cx.arc(Math.cos(a) * R * .3, Math.sin(a) * R * .11, R * .011, 0, 6.3); cx.fill(); cx.restore(); }
    cx.restore();
  }
  if (mode === 2) { // atoms bond into a heart
    const p = Math.min(1, (now - eqT) / 4500), e = p * p * (3 - 2 * p), s = R / 48, pts = atoms.map(a => { const [tx, ty] = hp(a.t, s); return [a.x + (mx + tx - a.x) * e, a.y + (my * 1.0 + ty - a.y) * e + Math.sin(now / 400 + a.a) * (1 - e) * 20]; });
    cx.shadowColor = "#ff4fa0"; cx.shadowBlur = 18; cx.strokeStyle = "rgba(255,143,196," + (.15 + .6 * e) + ")"; cx.lineWidth = 2;
    for (let i = 0; i < pts.length; i++) { const q = pts[(i + 1) % pts.length]; cx.beginPath(); cx.moveTo(pts[i][0], pts[i][1]); cx.lineTo(q[0], q[1]); cx.stroke(); }
    cx.globalAlpha = 1; pts.forEach((q, i) => { cx.fillStyle = i % 2 ? "#FFD1E4" : "#E85D9E"; cx.beginPath(); cx.arc(q[0], q[1], R * .016, 0, 6.3); cx.fill(); });
    if (p > .9) { cx.globalAlpha = (p - .9) * 8 * (.7 + .3 * Math.sin(now / 250)); cx.font = R * .25 + "px serif"; cx.fillStyle = "#ff5fa8"; cx.shadowBlur = 50; cx.fillText("♥", mx, my * 1.0); }
    cx.shadowBlur = 0;
  }
  parts = parts.filter(p => p.l > 0);
  for (const p of parts) { p.x += p.vx; p.y += p.vy; p.vy += p.g === undefined ? .12 : p.g; p.vx *= .985; p.l -= p.d; cx.globalAlpha = Math.max(0, Math.min(1, p.l));
    if (p.h) { cx.font = p.s + "px serif"; cx.fillStyle = ["#FF8FC4", "#E85D9E", "#FFD1E4"][p.s % 3 | 0]; cx.fillText("♥", p.x, p.y); }
    else if (p.k) { cx.font = p.s + "px serif"; cx.fillStyle = "#fff"; cx.fillText("✦", p.x, p.y); }
    else { cx.fillStyle = "#FFB3D6"; cx.beginPath(); cx.arc(p.x, p.y, p.s / 6, 0, 6.3); cx.fill(); } }
  cx.globalAlpha = 1; requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

/* ===== music ===== */
const au = $("au");
function bars(on) { ["bigbars", "minibars"].forEach(i => $(i).classList.toggle("run", on)); }
$("pp").onclick = () => { if (au.paused) { au.play(); $("pp").textContent = "❚❚"; bars(true); } else { au.pause(); $("pp").textContent = "▶"; bars(false); } };

/* ===== flow ===== */
(async function start() {
  show("intro"); await run($("introBox"), CONFIG.intro); $("enter").classList.remove("hid");
})();
$("enter").onclick = async e => {
  burst(e.clientX, e.clientY, 60); e.target.classList.add("pop"); document.body.classList.add("bright");
  await wait(700); show("music");
};
$("play").onclick = async e => {
  try { await au.play(); } catch (_) { }
  bars(true); burst(e.clientX, e.clientY, 40); $("ctl").classList.remove("hid"); $("play").classList.remove("pulse");
  await wait(2200); quiz(0);
};

async function quiz(i) {
  const Q = CONFIG.questions[i], box = $("qBox"); show("quiz"); box.classList.remove("out"); box.innerHTML = "";
  const q = document.createElement("div"); q.className = "ln big"; q.style.fontSize = "clamp(24px,4.4vmin + 1.2vw,52px)"; q.textContent = Q.q; box.appendChild(q);
  const o = document.createElement("div"); o.className = "opts"; box.appendChild(o);
  Q.o.forEach((t, k) => { const b = document.createElement("button"); b.className = "btn"; b.textContent = t; b.style.animation = "rise .9s " + (.3 + k * .15) + "s backwards";
    b.onclick = async ev => { o.querySelectorAll("button").forEach(x => x.style.pointerEvents = "none"); const r = b.getBoundingClientRect(); b.classList.add("pop");
      burst(r.left + r.width / 2, r.top + r.height / 2, Q.big ? 90 : 40); await wait(450); box.classList.add("out"); await wait(600); box.innerHTML = "";
      box.classList.remove("out"); const rr = document.createElement("div"); rr.className = "ln big"; rr.style.fontSize = "clamp(24px,4.4vmin + 1.2vw,52px)"; rr.textContent = Q.r; box.appendChild(rr);
      if (Q.pulse) pulseHeart(); if (Q.big) { burst(W / 2, H / 2, 120); }
      await wait(Q.big ? 3000 : 2200); if (i + 1 < CONFIG.questions.length) quiz(i + 1); else chem(); }; o.appendChild(b); });
}
function pulseHeart() { const h = document.createElement("div"); h.className = "ln hrt"; h.textContent = "❤"; h.style.opacity = .5; $("qBox").appendChild(h); }

async function chem() {
  mode = 1; show("chem"); $("cBox").innerHTML = ""; await run($("cBox"), CONFIG.chem);
  $("cBox").classList.add("out"); await wait(800); mode = 2; eqT = performance.now(); show("eq"); $("eBox").innerHTML = ""; $("cBox").classList.remove("out");
  $("eBox").style.marginTop = "58vh"; await run($("eBox"), CONFIG.equation); mode = 0; timeline();
}
async function timeline() {
  show("time"); const tl = $("tl"); tl.innerHTML = "";
  CONFIG.timeline.forEach(m => { const d = document.createElement("div"); d.className = "ti"; d.innerHTML = "<b>" + m.h + "</b><span>" + m.t + "</span>"; tl.appendChild(d); });
  await wait(1200);
  for (const d of tl.children) { d.classList.add("on"); const r = d.getBoundingClientRect(); burst(r.right - 10, r.top + 14, 16); await wait(2400); }
  await wait(1800); heart();
}

/* ===== generative I LOVE YOU heart ===== */
async function heart() {
  show("heart"); const c = $("hc"), g = c.getContext("2d"), D = Math.min(devicePixelRatio || 1, 2); let w = innerWidth, h = innerHeight;
  c.width = w * D; c.height = h * D; g.setTransform(D, 0, 0, D, 0, 0);
  const n = Math.round(CONFIG.particleCount * Math.max(.45, Math.min(1, w * h / 900000))), S = Math.min(w * .84 / 34, h * .5 / 30), ox = w / 2, oy = h * .4, FORM = 7, ws = [];
  for (let i = 0; i < n; i++) {
    const t = rnd(0, 6.283), r = Math.pow(Math.random(), .55) * (i < n * .25 ? 1 : 1), [x, y] = hp(t, S * r), a = rnd(0, 6.283), far = Math.max(w, h);
    const L = i < n * .12 ? 0 : i < n * .55 ? 1 : 2;
    ws.push({ tx: x, ty: y, sx: Math.cos(a) * far, sy: Math.sin(a) * far, d: Math.pow(Math.random(), 1.8) * FORM, du: rnd(1.8, 3.2), L, rot: rnd(-.5, .5), a: L === 0 ? rnd(.06, .16) : rnd(.3, 1), z: rnd(.8, 1.25), ph: rnd(0, 6.3) });
  }
  const fl = []; let t0 = performance.now(), msgs = false;
  (function loop(now) {
    if (!$("heart").classList.contains("on")) return;
    const t = (now - t0) / 1e3; g.clearRect(0, 0, w, h); g.textAlign = "center"; g.textBaseline = "middle";
    const done = t > FORM + 3, beat = done ? 1 + .03 * Math.pow(Math.max(0, Math.sin((t - FORM) * 3)), 4) : 1;
    if (done) { const gr = g.createRadialGradient(ox, oy, 0, ox, oy, S * 22); gr.addColorStop(0, "rgba(232,93,158," + (.22 * beat - .1) + ")"); gr.addColorStop(1, "transparent"); g.fillStyle = gr; g.fillRect(0, 0, w, h); }
    for (const q of ws) {
      const p = Math.max(0, Math.min(1, (t - q.d) / q.du)); if (p === 0) continue; const e = 1 - Math.pow(1 - p, 3);
      const x = ox + (q.sx + (q.tx * beat - q.sx) * e) + Math.sin(t * 1.2 + q.ph) * 1.2 * e, y = oy + (q.sy + (q.ty * beat - q.sy) * e) + Math.cos(t * 1.1 + q.ph) * 1.2 * e;
      const sz = (q.L === 0 ? 16 : q.L === 1 ? 10.5 : 7.5) * q.z * Math.max(.7, S / 12); g.save(); g.translate(x, y); g.rotate(q.rot * e); g.globalAlpha = q.a * e;
      g.font = (q.L === 1 ? "italic " : "") + sz + "px Georgia,serif"; g.fillStyle = q.L === 0 ? "#E85D9E" : q.L === 1 ? "#FFB3D6" : "#FFF7FB";
      if (q.L === 2) { g.shadowColor = "#ff5fa8"; g.shadowBlur = 6; } g.fillText(CONFIG.iLoveYouText, 0, 0); g.restore();
    }
    if (done && Math.random() < .25) { const [x, y] = hp(rnd(0, 6.28), S); fl.push({ x: ox + x, y: oy + y, vx: rnd(-.4, .4), vy: rnd(-1.1, -.4), l: 1 }); }
    for (let i = fl.length - 1; i >= 0; i--) { const f = fl[i]; f.x += f.vx; f.y += f.vy; f.l -= .008; if (f.l <= 0) { fl.splice(i, 1); continue; }
      g.globalAlpha = f.l * .8; g.font = "italic 11px Georgia"; g.fillStyle = "#FFD1E4"; g.fillText(CONFIG.iLoveYouText, f.x, f.y); }
    g.globalAlpha = 1;
    if (done && !msgs) { msgs = true; $("hBox").innerHTML = ""; run($("hBox"), CONFIG.heartText).then(() => $("toLetter").classList.remove("hid")); }
    requestAnimationFrame(loop);
  })(t0);
}
$("toLetter").onclick = e => { burst(e.clientX, e.clientY, 50); letter(); };
$("toLetter").style.cssText = "position:absolute;bottom:2.5vh;z-index:4;font-size:18px;padding:.5em 1.6em";

async function letter() {
  show("letter"); const card = $("card"); card.innerHTML = ""; card.scrollTop = 0;
  CONFIG.letter.forEach(t => { const p = document.createElement("p"); p.textContent = t; card.appendChild(p); });
  await wait(1000);
  for (const p of card.children) { p.classList.add("on"); p.scrollIntoView({ behavior: "smooth", block: "center" }); await wait(Math.max(2600, p.textContent.length * 55)); }
  $("toEnd").classList.remove("hid");
}
$("toEnd").onclick = async () => {
  show("end"); $("fBox").innerHTML = ""; document.body.classList.remove("bright"); await run($("fBox"), CONFIG.final);
};

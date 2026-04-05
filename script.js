const GAS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyiFi0Gq3eBcE-p58Rhkw1NMd0rS2IpUuu9A38fE8JMfxYzFYG24LqUOFIPddQtrEiz5A/exec";
const APP_CONFIG = {
  hpLinks: {
    jp: "https://aaaa-platform-ycxegiu.gamma.site/wagoroku-terakoya"
  },

  figures: {
    gi: {
      virtue: "義",
      hero: "上杉謙信",
      heroWithVirtue: "上杉謙信（義）",
      heading: "上杉謙信の生き方に通じる在り方",
      summary: "信じた正しさを、静かに貫いてきた方です。",
      description: "信念を貫き、「正しさ」のために動いた戦国武将。私利ではなく、大義を重んじた生き方を貫いた人物です。",
      praise: "そのまっすぐさは、今の時代にこそ必要とされる在り方です。ぶれないあなたの軸は、すでに人を導く力を持っています。"
    },
    yu: {
      virtue: "勇",
      hero: "巴御前",
      heroWithVirtue: "巴御前（勇）",
      heading: "巴御前の生き方に通じる在り方",
      summary: "恐れの中でも、前へ進む覚悟を持ってきた方です。",
      description: "平安末期に名を残す女武者。恐れの中でも退かず、自らの覚悟で前に進んだ人物です。",
      praise: "その強さは、ただの勇気ではありません。恐れを知った上で前に進める、とても美しい力です。"
    },
    jin: {
      virtue: "仁",
      hero: "新島八重",
      heroWithVirtue: "新島八重（仁）",
      heading: "新島八重の生き方に通じる在り方",
      summary: "やさしさと芯の強さを、同時に育ててきた方です。",
      description: "幕末から明治を生きた女性。強さとやさしさをあわせ持ち、人のために尽くした生き方で知られています。",
      praise: "あなたのやさしさは、誰かを救う力を持っています。その在り方に、すでに多くの価値が宿っています。"
    },
    rei: {
      virtue: "礼",
      hero: "千利休",
      heroWithVirtue: "千利休（礼）",
      heading: "千利休の生き方に通じる在り方",
      summary: "ふるまいの奥にある心を、大切にしてきた方です。",
      description: "わび茶を大成した茶人。形の奥にある心を重んじ、静かな美を追求した人物です。",
      praise: "あなたのふるまいには、言葉を超えた美しさがあります。その静けさこそ、周りに深い安心を与える力です。"
    },
    sei: {
      virtue: "誠",
      hero: "吉田松陰",
      heroWithVirtue: "吉田松陰（誠）",
      heading: "吉田松陰の生き方に通じる在り方",
      summary: "言葉と行動を、できるだけ一致させてきた方です。",
      description: "幕末の思想家・教育者。自らの信じる道を曲げず、言葉と行動を一致させた人物です。",
      praise: "あなたの中にある真っ直ぐさは、とても尊いものです。言葉と行動が一致するその在り方は、信頼そのものです。"
    },
    meiyo: {
      virtue: "名誉",
      hero: "武田信玄",
      heroWithVirtue: "武田信玄（名誉）",
      heading: "武田信玄の生き方に通じる在り方",
      summary: "責任と誇りを、静かに背負ってきた方です。",
      description: "戦国を代表する名将の一人。己の誇りと責任を背負い、揺るがぬ軸で生きた人物です。",
      praise: "あなたの持つ誇りは、静かで強いものです。その在り方が、周囲に確かな影響を与えています。"
    },
    chugi: {
      virtue: "忠義",
      hero: "北条政子",
      heroWithVirtue: "北条政子（忠義）",
      heading: "北条政子の生き方に通じる在り方",
      summary: "自らの役目を引き受け、最後まで向き合ってきた方です。",
      description: "鎌倉幕府を支えた尼将軍。立場を超えて、自らの役目と覚悟を貫いた女性です。",
      praise: "あなたの覚悟は、簡単に揺らぐものではありません。その一貫した在り方に、深い強さと美しさがあります。"
    }
  },

  virtuesOrder: ["gi", "yu", "jin", "rei", "sei", "meiyo", "chugi"],

  notReached: {
    threshold: 4,
    message: "今回は、まだ偉人の在り方には届いていないようです。日々の在り方を、少しずつ整えてみてください。",
    praise: "今回はまだ、偉人の在り方には届いていないようです。ですが、それは『これから』ということ。日々の小さな選択の積み重ねが、やがて大きな在り方へと変わっていきます。どうぞ、今この瞬間からを大切に。"
  },

  questions: [
    {
      id: 1,
      title: "今日は宿題（資料）の提出日です。あなたは、まだ出来上がっていません。あなたはどうしますか？",
      lead: "もっとも近いものをお選びください。",
      options: [
        { text: "出来上がっていないと、そのまま伝える", type: "gi", immature: false },
        { text: "出来ていたが忘れたと伝える", type: "yu", immature: false },
        { text: "「明日だと思っていました」と説明する", type: "rei", immature: false },
        { text: "学校（職場）を休む", type: "chugi", immature: true }
      ]
    },
    {
      id: 2,
      title: "リーダーを任されました。経験もなく、不安があります。あなたはどうしますか？",
      lead: "もっとも近いものをお選びください。",
      options: [
        { text: "一度様子を見てから考える", type: "rei", immature: false },
        { text: "引き受けて、できることから始める", type: "yu", immature: false },
        { text: "他の人に任せられないか探す", type: "meiyo", immature: false },
        { text: "断る", type: "gi", immature: true }
      ]
    },
    {
      id: 3,
      title: "病院で、隣の人が苦しそうにしています。周りの人は気づいていません。あなたはどうしますか？",
      lead: "もっとも近いものをお選びください。",
      options: [
       { text: "受付に状況を伝える", type: "jin", immature: false },
  { text: "少し様子を見る", type: "rei", immature: false },
  { text: "迷わず誰かに伝える", type: "yu", immature: false },
  { text: "関わらないように距離を取る", immature: true }
      ]
    },
    {
      id: 4,
      title: "タクシーに乗るとき、降りるとき。あなたはどのように振る舞いますか？",
      lead: "もっとも近いものをお選びください。",
      options: [
        { text: "降りるときだけ軽くお礼を言う", type: "jin", immature: false },
        { text: "会釈だけする", type: "sei", immature: false },
        { text: "何も言わずに去る", type: "chugi", immature: true },
        { text: "乗るとき『お願いします』、降りるとき『ありがとうございました』と伝える", type: "rei", immature: false }
      ]
    },
    {
      id: 5,
      title: "仕事でミスをしてしまいました。まだ誰も気づいていません。あなたはどうしますか？",
      lead: "もっとも近いものをお選びください。",
      options: [
        { text: "自分から報告し、対応する", type: "sei", immature: false },
        { text: "聞かれたら答える", type: "rei", immature: false },
        { text: "できるだけ気づかれないようにする", type: "meiyo", immature: false },
        { text: "とりあえず様子を見る", type: "yu", immature: true }
      ]
    },
    {
      id: 6,
      title: "自慢ではなく、自分の中で『胸を張れること』を、あなたはどのように感じていますか？",
      lead: "もっとも近いものをお選びください。",
      options: [
        { text: "あると思うが、言葉にするのは難しい", type: "sei", immature: false },
        { text: "はっきりと『これがある』と言えるものがある", type: "meiyo", immature: false },
        { text: "まだ見つかっていないと感じる", type: "yu", immature: false },
        { text: "深く考えたことがない", type: "jin", immature: true }
      ]
    },
    {
      id: 7,
      title: "自分で決めたことがあります。途中でやめても、周りには影響はありません。あなたはどうしますか？",
      lead: "もっとも近いものをお選びください。",
      options: [
        { text: "自分で決めたこととして続ける", type: "chugi", immature: false },
        { text: "状況によって見直す", type: "gi", immature: false },
        { text: "他人のために頑張る", type: "jin", immature: false },
        { text: "助言を求める", type: "sei", immature: true }
      ]
    }
  ]
};

const state = {
  sessionId: createSessionId(),
  userName: "",
  email: "",
  currentIndex: 0,
  answers: [],
  scores: emptyScores(),
  immatureCount: 0,
  resultKey: null,
  subResultKey: null,
  resultHero: "",
  resultLabel: "",
  startAt: null,
  completedAt: null,
  hpClicked: false,
  notReached: false
};

const el = {
  heroSection: document.getElementById("heroSection"),
  quizSection: document.getElementById("quizSection"),
  resultSection: document.getElementById("resultSection"),
  profileForm: document.getElementById("profileForm"),
  userName: document.getElementById("userName"),
  email: document.getElementById("email"),
  progressText: document.getElementById("progressText"),
  progressBar: document.getElementById("progressBar"),
  questionTitle: document.getElementById("questionTitle"),
  questionLead: document.getElementById("questionLead"),
  optionsContainer: document.getElementById("optionsContainer"),
  backButton: document.getElementById("backButton"),
  resultHeroArea: document.getElementById("resultHeroArea"),
  notReachedArea: document.getElementById("notReachedArea"),
  resultHeading: document.getElementById("resultHeading"),
  resultSummary: document.getElementById("resultSummary"),
  figureName: document.getElementById("figureName"),
  figureDescription: document.getElementById("figureDescription"),
  virtueScores: document.getElementById("virtueScores"),
  commentToggle: document.getElementById("commentToggle"),
  commentBox: document.getElementById("commentBox"),
  figuresToggle: document.getElementById("figuresToggle"),
  figuresBox: document.getElementById("figuresBox"),
  notReachedCommentToggle: document.getElementById("notReachedCommentToggle"),
  notReachedCommentBox: document.getElementById("notReachedCommentBox"),
  jpLink: document.getElementById("jpLink"),
  restartButton: document.getElementById("restartButton")
};

el.jpLink.href = APP_CONFIG.hpLinks.jp;

el.profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userName = el.userName.value.trim();
  if (!userName) {
    alert("お名前をご入力ください。");
    el.userName.focus();
    return;
  }
  state.userName = userName;
  state.email = el.email.value.trim();
  state.startAt = new Date().toISOString();
  el.heroSection.classList.add("hidden");
  el.quizSection.classList.remove("hidden");
  renderQuestion();
});

el.backButton.addEventListener("click", () => {
  if (state.currentIndex === 0) return;
  state.currentIndex -= 1;
  renderQuestion();
});

el.commentToggle.addEventListener("click", () => {
  if (!state.resultKey || state.notReached) return;
  const current = APP_CONFIG.figures[state.resultKey];
  el.commentBox.innerHTML = `<p>${current.praise}</p>`;
  el.commentBox.classList.toggle("hidden");
});

el.notReachedCommentToggle.addEventListener("click", () => {
  el.notReachedCommentBox.innerHTML = `<p>${APP_CONFIG.notReached.praise}</p>`;
  el.notReachedCommentBox.classList.toggle("hidden");
});

el.figuresToggle.addEventListener("click", () => {
  const currentlyHidden = el.figuresBox.classList.contains("hidden");
  if (currentlyHidden) renderOtherFigures();
  el.figuresBox.classList.toggle("hidden");
});

el.jpLink.addEventListener("click", () => {
  state.hpClicked = true;
  sendToGas("hp_click", buildPayload("hp_click"));
});

el.restartButton.addEventListener("click", () => {
  location.reload();
});

function renderQuestion() {
  const question = APP_CONFIG.questions[state.currentIndex];
  el.progressText.textContent = `${state.currentIndex + 1} / ${APP_CONFIG.questions.length}`;
  el.progressBar.style.width = `${((state.currentIndex + 1) / APP_CONFIG.questions.length) * 100}%`;
  el.questionTitle.textContent = question.title;
  el.questionLead.textContent = question.lead;
  el.optionsContainer.innerHTML = "";

  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.textContent = option.text;
    button.addEventListener("click", () => {
      state.answers[state.currentIndex] = {
        questionId: question.id,
        optionIndex,
        text: option.text,
        type: option.type,
        immature: option.immature
      };
      if (state.currentIndex < APP_CONFIG.questions.length - 1) {
        state.currentIndex += 1;
        renderQuestion();
      } else {
        finalizeResult();
      }
    });
    el.optionsContainer.appendChild(button);
  });

  el.backButton.style.visibility = state.currentIndex === 0 ? "hidden" : "visible";
}

function finalizeResult() {
  state.scores = emptyScores();
  state.immatureCount = 0;

  state.answers.forEach((answer) => {
    if (!answer) return;
    state.scores[answer.type] += 1;
    if (answer.immature) state.immatureCount += 1;
  });

  state.notReached = state.immatureCount >= APP_CONFIG.notReached.threshold;

  if (!state.notReached) {
    const topTwo = decideTopTwoKeys(state.scores);
    state.resultKey = topTwo.main;
    state.subResultKey = topTwo.sub;
    state.resultHero = APP_CONFIG.figures[state.resultKey].hero;
    state.resultLabel = `${APP_CONFIG.figures[state.resultKey].heroWithVirtue} × ${APP_CONFIG.figures[state.subResultKey].heroWithVirtue} タイプ`;
  } else {
    state.resultKey = "not_reached";
    state.resultHero = "偉人未到達";
    state.resultLabel = "今回はまだ、偉人の在り方には届いていないようです";
  }

  state.completedAt = new Date().toISOString();
  el.quizSection.classList.add("hidden");
  el.resultSection.classList.remove("hidden");
  renderResult();
  sendToGas("submit_result", buildPayload("submit_result"));
}

function decideResultKey(scores) {
  return APP_CONFIG.virtuesOrder.reduce((bestKey, currentKey) => {
    if (scores[currentKey] > scores[bestKey]) return currentKey;
    return bestKey;
  }, APP_CONFIG.virtuesOrder[0]);
}

function decideTopTwoKeys(scores) {
  const sorted = [...APP_CONFIG.virtuesOrder].sort((a, b) => {
    return scores[b] - scores[a];
  });
  return {
    main: sorted[0],
    sub: sorted[1]
  };
}

function renderResult() {
  el.commentBox.classList.add("hidden");
  el.figuresBox.classList.add("hidden");
  el.notReachedCommentBox.classList.add("hidden");

  if (state.notReached) {
    el.resultHeroArea.classList.add("hidden");
    el.notReachedArea.classList.remove("hidden");
    return;
  }

   el.resultHeroArea.classList.remove("hidden");
   el.notReachedArea.classList.add("hidden");

  const current = APP_CONFIG.figures[state.resultKey];
const sub = APP_CONFIG.figures[state.subResultKey];

el.resultHeading.textContent = state.resultLabel;
el.resultSummary.textContent = `${current.summary} あわせて、${sub.hero}に通じる要素も持っています。`;
el.figureName.textContent = `${current.heroWithVirtue}とは`;

el.figureDescription.innerHTML = `
  <p>${current.description}</p>
  <div style="margin-top:16px;">
    <h4 style="margin:0 0 8px 0;">${sub.heroWithVirtue}に通じる要素</h4>
    <p style="margin:0;">${sub.summary}</p>
  </div>
`;

renderStars();
}

function renderStars() {
  const maxScore = Math.max(...Object.values(state.scores), 1);
  el.virtueScores.innerHTML = "";
  APP_CONFIG.virtuesOrder.forEach((key) => {
    const label = APP_CONFIG.figures[key].virtue;
    const stars = normalizeToFive(state.scores[key], maxScore);
    const row = document.createElement("div");
    row.className = "virtue-row";
    row.innerHTML = `
      <strong>${label}</strong>
      <div class="star-bar">${renderStarString(stars)}</div>
      <span>${stars} / 5</span>
    `;
    el.virtueScores.appendChild(row);
  });
}

function renderStarString(filledCount) {
  let html = "";
  for (let i = 1; i <= 5; i += 1) {
    html += i <= filledCount ? "★" : '<span class="empty">★</span>';
  }
  return html;
}

function normalizeToFive(score, maxScore) {
  if (score <= 0) return 0;
  return Math.max(1, Math.min(5, Math.round((score / maxScore) * 5)));
}

function renderOtherFigures() {
  el.figuresBox.innerHTML = "";
  APP_CONFIG.virtuesOrder.forEach((key) => {
    const current = APP_CONFIG.figures[key];
    const div = document.createElement("div");
    div.className = "figure-item";
    div.innerHTML = `<h4>${current.heroWithVirtue}</h4><p>${current.description}</p>`;
    el.figuresBox.appendChild(div);
  });
}

function emptyScores() {
  return { gi: 0, yu: 0, jin: 0, rei: 0, sei: 0, meiyo: 0, chugi: 0 };
}

function createSessionId() {
  return `sid_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

function buildPayload(action) {
  return {
    action,
    sessionId: state.sessionId,
    userName: state.userName,
    email: state.email,
    startedAt: state.startAt,
    completedAt: state.completedAt,
    resultKey: state.resultKey,
    resultHero: state.resultHero,
    resultLabel: state.resultLabel,
    gi: state.scores.gi,
    yu: state.scores.yu,
    jin: state.scores.jin,
    rei: state.scores.rei,
    sei: state.scores.sei,
    meiyo: state.scores.meiyo,
    chugi: state.scores.chugi,
    immatureCount: state.immatureCount,
    hpClicked: state.hpClicked ? "はい" : "いいえ",
    answersJson: JSON.stringify(state.answers, null, 0)
  };
}

function sendToGas(action, payload) {
  if (!GAS_WEB_APP_URL || GAS_WEB_APP_URL === "PASTE_YOUR_WEB_APP_URL_HERE") {
    console.warn("GAS_WEB_APP_URL が未設定のため送信をスキップしました", action, payload);
    return;
  }

  fetch(GAS_WEB_APP_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ action, ...payload })
  }).catch((error) => {
    console.warn("Apps Script 送信エラー", error);
  });
}

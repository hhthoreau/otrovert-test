/**
 * 이향인(Otrovert) 성향 검사 애플리케이션
 * 40문항 7점 척도 설문 & 188점 기준 채점 엔진
 */

// ─── 40문항 데이터 정의 (001.JPG ~ 010.JPG 순서) ─────────────────────
const QUESTIONS_DATA = [
  // 001.JPG (Q1-Q4)
  { id: 1, text: "나는 사람들이 많이 모인 곳에 있으면 외로움을 느낀다.", scoreType: "7to1", dimension: "social_indep" },
  { id: 2, text: "내 삶에서 진정으로 가까운 사람은 극소수다.", scoreType: "7to1", dimension: "social_indep" },
  { id: 3, text: "나는 파티를 즐기며 가능한 한 자주 참석한다.", scoreType: "1to7", dimension: "social_indep" },
  { id: 4, text: "나는 혼자만의 시간이 많이 필요하다.", scoreType: "7to1", dimension: "introspection" },

  // 002.JPG (Q5-Q8)
  { id: 5, text: "슬플 때 나는 사람들이 곁에서 나를 위로해주길 바란다.", scoreType: "1to7", dimension: "autonomy" },
  { id: 6, text: "나는 혼자 있는 것을 좋아한다. 나 자신이 최고의 친구다.", scoreType: "7to1", dimension: "introspection" },
  { id: 7, text: "나는 요즘 유행하는 인기 장소에 관한 소식을 가장 먼저 듣는다.", scoreType: "1to7", dimension: "non_conform" },
  { id: 8, text: "나는 혼자 일하는 것을 좋아한다.", scoreType: "7to1", dimension: "autonomy" },

  // 003.JPG (Q9-Q12)
  { id: 9, text: "나는 내 신념을 따르는 데 타인의 동의를 구하지 않는다.", scoreType: "7to1", dimension: "autonomy" },
  { id: 10, text: "나는 조직화된 종교의 신자다.", scoreType: "1to7", dimension: "non_conform" },
  { id: 11, text: "나는 소셜미디어를 자주 사용한다.", scoreType: "1to7", dimension: "social_indep" },
  { id: 12, text: "숨길 것은 없지만, 내 삶은 되도록 남에게 드러내지 않고 싶다.", scoreType: "7to1", dimension: "social_indep" },

  // 004.JPG (Q13-Q16)
  { id: 13, text: "나는 통념을 믿지 않는다. 그것은 집단 사고일 뿐이다.", scoreType: "7to1", dimension: "non_conform" },
  { id: 14, text: "나는 사색을 하나의 활동으로 여긴다.", scoreType: "7to1", dimension: "introspection" },
  { id: 15, text: "나는 삶의 적극적 참여자가 아닌 관찰자다.", scoreType: "7to1", dimension: "introspection" },
  { id: 16, text: "나는 혼자 있는 것을 좋아하지 않는다.", scoreType: "1to7", dimension: "social_indep" },

  // 005.JPG (Q17-Q20)
  { id: 17, text: "대부분의 사람이 내가 수줍음이 많다는 걸 모르는 것 같다.", scoreType: "7to1", dimension: "introspection" },
  { id: 18, text: "나는 밝은색 옷을 좋아한다. 그래야 군중 속에서 내가 두드러지기 때문이다.", scoreType: "1to7", dimension: "social_indep" },
  { id: 19, text: "나는 주변 사람들로부터 관심받는 것을 좋아한다.", scoreType: "1to7", dimension: "social_indep" },
  { id: 20, 다른_사람들의_의견: "다른 사람들의 의견은 내게 매우 중요하다.", text: "다른 사람들의 의견은 내게 매우 중요하다.", scoreType: "1to7", dimension: "autonomy" },

  // 006.JPG (Q21-Q24)
  { id: 21, text: "일하는 공간을 공유하면 아이디어를 나누기에 좋다고 생각한다.", scoreType: "1to7", dimension: "autonomy" },
  { id: 22, text: "나는 다른 사람들이 내 의견에 동의할 때 기분이 좋다.", scoreType: "1to7", dimension: "autonomy" },
  { id: 23, text: "나는 소수자가 되어도 개의치 않는다.", scoreType: "7to1", dimension: "non_conform" },
  { id: 24, text: "나는 외부에서 주어진 생각을 따르기보다 내 삶을 이끌 나만의 철학을 세우는 편이다.", scoreType: "7to1", dimension: "autonomy" },

  // 007.JPG (Q25-Q28)
  { id: 25, text: "나는 이해받기를 원한다.", scoreType: "1to7", dimension: "social_indep" },
  { id: 26, text: "나는 가끔 내 생각이 두려울 때가 있다.", scoreType: "7to1", dimension: "introspection" },
  { id: 27, text: "나는 내 견해를 갖고 있으며 그것이 맞다고 생각한다.", scoreType: "7to1", dimension: "autonomy" },
  { id: 28, text: "모든 질문에는 답이 있다고 생각한다.", scoreType: "1to7", dimension: "non_conform" },

  // 008.JPG (Q29-Q32)
  { id: 29, text: "나는 어떤 생각이나 개념이든 스스로 검토해보기 전에는 받아들이지 않는다.", scoreType: "7to1", dimension: "non_conform" },
  { id: 30, text: "나는 나 자신의 주인이어야 한다.", scoreType: "7to1", dimension: "autonomy" },
  { id: 31, text: "모든 문제에는 가능한 여러 해결책이 있다고 생각한다.", scoreType: "7to1", dimension: "non_conform" },
  { id: 32, text: "나는 선생님이나 상사는 언제나 옳다고 생각한다.", scoreType: "1to7", dimension: "non_conform" },

  // 009.JPG (Q33-Q36)
  { id: 33, text: "나는 회의를 할 때 가장 좋은 아이디어가 떠오르곤 한다.", scoreType: "1to7", dimension: "autonomy" },
  { id: 34, text: "나는 전문 분야 하나에만 집중하기보다 다방면에 관심이 많다.", scoreType: "7to1", dimension: "non_conform" },
  { id: 35, text: "나는 스스로에게 의지한다. 타인에게 도움을 청하는 것은 내게 어려운 일이다.", scoreType: "7to1", dimension: "autonomy" },
  { id: 36, text: "나에 관한 이야기를 공유할 때, 모든 세부 사항까지 정확히 전달하려 한다.", scoreType: "1to7", dimension: "social_indep" },

  // 010.JPG (Q37-Q40)
  { id: 37, text: "진정한 지혜는 세대를 거쳐 내려오는 것뿐이라고 믿는다.", scoreType: "1to7", dimension: "non_conform" },
  { id: 38, text: "나는 권위 있는 인물들을 깊이 존경한다.", scoreType: "1to7", dimension: "non_conform" },
  { id: 39, text: "나는 새로운 생각을 좋아한다.", scoreType: "7to1", dimension: "non_conform" },
  { id: 40, text: "나는 종종 스스로에게 질문을 던진다.", scoreType: "7to1", dimension: "introspection" }
];

// 7점 척도 선택지 옵션 (index 0 ~ 6)
const SCALE_OPTIONS = [
  { label: "매우 그렇다", desc: "강한 동의" },
  { label: "꽤 그렇다", desc: "동의" },
  { label: "그렇다", desc: "약한 동의" },
  { label: "보통이다", desc: "중립" },
  { label: "그렇지 않다", desc: "약한 비동의" },
  { label: "꽤 그렇지 않다", desc: "비동의" },
  { label: "전혀 그렇지 않다", desc: "강한 비동의" }
];

// 세부 하위 영역 정의
const DIMENSIONS = {
  autonomy: { name: "주체성 및 독립심", color: "#3b82f6" },
  non_conform: { name: "탈동조 및 자유로운 사고", color: "#10b981" },
  introspection: { name: "내면 사색 및 고요", color: "#8b5cf6" },
  social_indep: { name: "타인 시선 및 인정 독립", color: "#f59e0b" }
};

const ITEMS_PER_PAGE = 4;
const TOTAL_PAGES = 10;
const STORAGE_KEY = "otrovert_survey_answers_v1";

// ─── 상태 관리 ────────────────────────────────────────────────
let state = {
  currentPage: 0, // 0-based: 0 ~ 9
  answers: {},    // { questionId: optionIndex (0~6) }
  theme: localStorage.getItem("otrovert_theme") || "dark"
};

// ─── DOM References ──────────────────────────────────────────
const views = {
  intro: document.getElementById("view-intro"),
  survey: document.getElementById("view-survey"),
  result: document.getElementById("view-result")
};

const elements = {
  startBtn: document.getElementById("start-survey-btn"),
  resumeBanner: document.getElementById("resume-banner"),
  resumeBtn: document.getElementById("resume-btn"),
  
  // Survey Header
  fileBadge: document.getElementById("file-badge"),
  stepText: document.getElementById("step-text"),
  progressPercent: document.getElementById("progress-percent"),
  progressFill: document.getElementById("progress-fill"),
  
  // Survey Body
  questionsContainer: document.getElementById("questions-container"),
  prevPageBtn: document.getElementById("prev-page-btn"),
  nextPageBtn: document.getElementById("next-page-btn"),
  nextBtnText: document.getElementById("next-btn-text"),
  quickDotsContainer: document.getElementById("quick-dots-container"),
  
  // Result
  resultTypeBadge: document.getElementById("result-type-badge"),
  resultDate: document.getElementById("result-date"),
  totalScoreVal: document.getElementById("total-score-val"),
  userScoreMarker: document.getElementById("user-score-marker"),
  resultHeadline: document.getElementById("result-headline"),
  resultOriginalQuote: document.getElementById("result-original-quote"),
  resultDesc: document.getElementById("result-desc"),
  dimensionBarsContainer: document.getElementById("dimension-bars-container"),
  breakdownTableWrapper: document.getElementById("breakdown-table-wrapper"),
  copyResultBtn: document.getElementById("copy-result-btn"),
  savePdfBtn: document.getElementById("save-pdf-btn"),
  restartBtn: document.getElementById("restart-btn"),
  
  // Theme & Toast
  themeToggleBtn: document.getElementById("theme-toggle-btn"),
  toast: document.getElementById("toast")
};

// ─── 초기화 ──────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  loadSavedAnswers();
  setupEventListeners();
  renderQuickDots();
});

// ─── 테마 설정 ────────────────────────────────────────────────
function initTheme() {
  document.documentElement.setAttribute("data-theme", state.theme);
  elements.themeToggleBtn.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", state.theme);
    localStorage.setItem("otrovert_theme", state.theme);
    // 차트 재렌더링
    if (views.result.classList.contains("active")) {
      const scoreData = calculateScores();
      renderScoreGauge(scoreData.totalScore);
      renderRadarChart(scoreData.dimPercentages);
    }
  });
}

// ─── 로컬 저장소 동기화 ───────────────────────────────────────
function loadSavedAnswers() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      state.answers = JSON.parse(saved);
      const answeredCount = Object.keys(state.answers).length;
      if (answeredCount > 0 && answeredCount < 40) {
        elements.resumeBanner.classList.remove("hidden");
      }
    }
  } catch (e) {
    console.error("Failed to load saved answers", e);
  }
}

function saveAnswers() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.answers));
  } catch (e) {
    console.error("Failed to save answers", e);
  }
}

// ─── 이벤트 리스너 등록 ────────────────────────────────────────
function setupEventListeners() {
  // 시작 버튼
  elements.startBtn.addEventListener("click", () => {
    switchView("survey");
    state.currentPage = 0;
    renderPage();
  });

  // 이어하기 버튼
  elements.resumeBtn.addEventListener("click", () => {
    switchView("survey");
    // 미답변 첫 페이지 찾기
    let targetPage = 0;
    for (let p = 0; p < TOTAL_PAGES; p++) {
      const startIdx = p * ITEMS_PER_PAGE;
      const pageQuestions = QUESTIONS_DATA.slice(startIdx, startIdx + ITEMS_PER_PAGE);
      const isComplete = pageQuestions.every(q => state.answers[q.id] !== undefined);
      if (!isComplete) {
        targetPage = p;
        break;
      }
    }
    state.currentPage = targetPage;
    renderPage();
  });

  // 이전/다음 페이지
  elements.prevPageBtn.addEventListener("click", () => {
    if (state.currentPage > 0) {
      state.currentPage--;
      renderPage();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  elements.nextPageBtn.addEventListener("click", () => {
    // 현재 페이지 4문항 응답 완료 여부 검사
    const startIdx = state.currentPage * ITEMS_PER_PAGE;
    const pageQuestions = QUESTIONS_DATA.slice(startIdx, startIdx + ITEMS_PER_PAGE);
    const unAnswered = pageQuestions.filter(q => state.answers[q.id] === undefined);

    if (unAnswered.length > 0) {
      // 미응답 문항 하이라이트
      unAnswered.forEach(q => {
        const card = document.getElementById(`q-card-${q.id}`);
        if (card) {
          card.classList.add("unanswered-alert");
          setTimeout(() => card.classList.remove("unanswered-alert"), 800);
        }
      });
      showToast(`남은 ${unAnswered.length}개 문항에 답변해주세요.`);
      return;
    }

    // 다음 페이지 or 결과 화면
    if (state.currentPage < TOTAL_PAGES - 1) {
      state.currentPage++;
      renderPage();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // 40문항 전체 완료 시 결과 표시
      finishSurvey();
    }
  });

  // 결과 액션
  elements.copyResultBtn.addEventListener("click", copyResultSummary);
  elements.savePdfBtn.addEventListener("click", () => window.print());
  elements.restartBtn.addEventListener("click", restartSurvey);
}

// ─── 뷰 전환 ──────────────────────────────────────────────────
function switchView(viewName) {
  Object.keys(views).forEach(k => {
    views[k].classList.remove("active");
  });
  if (views[viewName]) {
    views[viewName].classList.add("active");
  }
}

// ─── 빠른 이동 닷(Dot) 렌더링 ────────────────────────────────
function renderQuickDots() {
  elements.quickDotsContainer.innerHTML = "";
  for (let i = 0; i < TOTAL_PAGES; i++) {
    const dot = document.createElement("button");
    dot.className = `page-dot ${i === state.currentPage ? "active" : ""}`;
    dot.setAttribute("aria-label", `${i + 1}단계로 이동`);
    dot.addEventListener("click", () => {
      state.currentPage = i;
      renderPage();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    elements.quickDotsContainer.appendChild(dot);
  }
}

function updateQuickDots() {
  const dots = elements.quickDotsContainer.querySelectorAll(".page-dot");
  dots.forEach((dot, idx) => {
    const startIdx = idx * ITEMS_PER_PAGE;
    const pageQuestions = QUESTIONS_DATA.slice(startIdx, startIdx + ITEMS_PER_PAGE);
    const isCompleted = pageQuestions.every(q => state.answers[q.id] !== undefined);

    dot.className = "page-dot";
    if (idx === state.currentPage) dot.classList.add("active");
    if (isCompleted) dot.classList.add("completed");
  });
}

// ─── 설문 페이지 렌더링 ──────────────────────────────────────
function renderPage() {
  const pageIndex = state.currentPage; // 0 ~ 9
  const fileNum = String(pageIndex + 1).padStart(3, "0");
  elements.fileBadge.textContent = `${fileNum}.JPG`;
  elements.stepText.textContent = `${pageIndex + 1} / ${TOTAL_PAGES} 단계`;

  // 진행률 계산
  const totalAnswered = Object.keys(state.answers).length;
  const progress = Math.round((totalAnswered / QUESTIONS_DATA.length) * 100);
  elements.progressPercent.textContent = `${progress}%`;
  elements.progressFill.style.width = `${progress}%`;

  // 이전/다음 버튼 상태
  elements.prevPageBtn.disabled = pageIndex === 0;
  elements.nextBtnText.textContent = pageIndex === TOTAL_PAGES - 1 ? "결과 확인하기" : "다음 단계";

  updateQuickDots();

  // 4문항 렌더링
  const startIdx = pageIndex * ITEMS_PER_PAGE;
  const pageQuestions = QUESTIONS_DATA.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  elements.questionsContainer.innerHTML = "";

  pageQuestions.forEach((q) => {
    const isAnswered = state.answers[q.id] !== undefined;
    const card = document.createElement("div");
    card.id = `q-card-${q.id}`;
    card.className = `question-card animate ${isAnswered ? "answered" : ""}`;

    const head = document.createElement("div");
    head.className = "question-head";
    head.innerHTML = `
      <span class="q-num-badge">${q.id}</span>
      <h3 class="q-title-text">${q.text}</h3>
    `;
    card.appendChild(head);

    const scaleGrid = document.createElement("div");
    scaleGrid.className = "likert-scale-grid";
    scaleGrid.setAttribute("role", "radiogroup");
    scaleGrid.setAttribute("aria-label", `문항 ${q.id} 선택지`);

    SCALE_OPTIONS.forEach((opt, optIdx) => {
      const isSelected = state.answers[q.id] === optIdx;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `likert-option-btn ${isSelected ? "selected" : ""}`;
      btn.setAttribute("role", "radio");
      btn.setAttribute("aria-checked", isSelected ? "true" : "false");
      btn.innerHTML = `
        <span class="scale-dot"></span>
        <span class="scale-label">${opt.label}</span>
      `;

      btn.addEventListener("click", () => {
        state.answers[q.id] = optIdx;
        saveAnswers();
        
        // 카드 내 라디오 버튼 UI 업데이트
        const allBtns = scaleGrid.querySelectorAll(".likert-option-btn");
        allBtns.forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        card.classList.add("answered");

        // 상단 진행률 갱신
        const currentAnswered = Object.keys(state.answers).length;
        const currentProgress = Math.round((currentAnswered / QUESTIONS_DATA.length) * 100);
        elements.progressPercent.textContent = `${currentProgress}%`;
        elements.progressFill.style.width = `${currentProgress}%`;
        updateQuickDots();
      });

      scaleGrid.appendChild(btn);
    });

    card.appendChild(scaleGrid);
    elements.questionsContainer.appendChild(card);
  });
}

// ─── 점수 계산 엔진 ──────────────────────────────────────────
function calculateQuestionScore(q, optionIndex) {
  // optionIndex: 0 (매우 그렇다) ~ 6 (전혀 그렇지 않다)
  if (optionIndex === undefined) return 0;
  if (q.scoreType === "7to1") {
    // 0: 7점, 1: 6점, 2: 5점, 3: 4점, 4: 3점, 5: 2점, 6: 1점
    return 7 - optionIndex;
  } else {
    // 1to7 역방향 배점
    // 0: 1점, 1: 2점, 2: 3점, 3: 4점, 4: 5점, 5: 6점, 6: 7점
    return optionIndex + 1;
  }
}

function calculateScores() {
  let totalScore = 0;
  const dimScores = {
    autonomy: { total: 0, count: 0 },
    non_conform: { total: 0, count: 0 },
    introspection: { total: 0, count: 0 },
    social_indep: { total: 0, count: 0 }
  };

  const itemBreakdown = [];

  QUESTIONS_DATA.forEach(q => {
    const optIdx = state.answers[q.id];
    const score = calculateQuestionScore(q, optIdx);
    totalScore += score;

    if (dimScores[q.dimension]) {
      dimScores[q.dimension].total += score;
      dimScores[q.dimension].count += 1;
    }

    itemBreakdown.push({
      id: q.id,
      text: q.text,
      scoreType: q.scoreType,
      dimension: q.dimension,
      selectedLabel: optIdx !== undefined ? SCALE_OPTIONS[optIdx].label : "미응답",
      score: score
    });
  });

  // 하위 영역별 백분율 점수 (최대 7점 기준)
  const dimPercentages = {};
  Object.keys(dimScores).forEach(key => {
    const { total, count } = dimScores[key];
    const maxPossible = count * 7;
    const minPossible = count * 1;
    const pct = Math.round(((total - minPossible) / (maxPossible - minPossible)) * 100);
    dimPercentages[key] = {
      score: total,
      max: maxPossible,
      avg: (total / count).toFixed(1),
      percent: Math.max(0, Math.min(100, pct))
    };
  });

  return {
    totalScore,
    isOtrovert: totalScore >= 188,
    dimPercentages,
    itemBreakdown
  };
}

// ─── 검사 완료 및 결과 화면 렌더링 ───────────────────────────
function finishSurvey() {
  const result = calculateScores();
  switchView("result");
  window.scrollTo({ top: 0, behavior: "smooth" });

  // 결과 헤더 정보
  const today = new Date();
  elements.resultDate.textContent = `${today.getFullYear()}. ${String(today.getMonth() + 1).padStart(2, "0")}. ${String(today.getDate()).padStart(2, "0")}`;

  // 점수 및 뱃지
  elements.totalScoreVal.textContent = result.totalScore;
  
  // 188점 기준 바 마커 위치 (40점~280점 범위)
  const markerPercent = ((result.totalScore - 40) / (280 - 40)) * 100;
  elements.userScoreMarker.style.left = `${Math.max(0, Math.min(100, markerPercent))}%`;

  if (result.isOtrovert) {
    elements.resultTypeBadge.className = "result-type-badge is-otrovert";
    elements.resultTypeBadge.textContent = "이향인(Otrovert) 유형";
    elements.resultHeadline.textContent = "당신은 고유한 내면의 길을 걷는 '이향인'입니다.";
    
    // 원본 도서 (IMG_3507.JPG) 텍스트
    elements.resultOriginalQuote.innerHTML = `
      <strong>[검사 판정 기준]</strong><br>
      총점이 188점 이상이면 당신은 <strong>이향인일 가능성이 큽니다.</strong><br>
      그런 경우라면 당신이 지닌 이 특별한 면모를 더 잘 이해하고 기꺼이 받아들이는 데 도움이 되기를 바랍니다.
    `;

    elements.resultDesc.innerHTML = `
      당신은 외부의 소음이나 사회적 통념, 집단 사고에 휩쓸리지 않고 <strong>자신만의 신념과 철학</strong>을 확고히 지키는 사람입니다. 
      타인의 인정을 갈구하기보다 스스로에게 떳떳한 삶을 살며, 혼자만의 사색과 고요한 시간 속에서 가장 본질적인 에너지를 얻습니다. 
      세상이 정해놓은 틀에 갇히지 않고 자유롭게 탐구하는 당신의 독창성과 주체성은 매우 희소하고 가치 있는 재능입니다.
    `;
  } else {
    elements.resultTypeBadge.className = "result-type-badge is-not-otrovert";
    elements.resultTypeBadge.textContent = "비이향인 (일반 성향) 유형";
    elements.resultHeadline.textContent = "당신은 세상과 유연하게 교류하는 성향입니다.";
    
    // 원본 도서 (IMG_3507.JPG) 텍스트
    elements.resultOriginalQuote.innerHTML = `
      <strong>[검사 판정 기준]</strong><br>
      총점이 188점 미만이면 당신은 <strong>이향인이 아닐 가능성이 큽니다.</strong><br>
      그런 경우라면 당신의 삶 속에 혹은 주변에 있는 이향인들을 이해하고 존중하는 데 도움이 되기를 바랍니다.
    `;

    elements.resultDesc.innerHTML = `
      당신은 사회적 유대감과 주변 사람들과의 협력, 조직적인 소통 속에서 활력을 찾는 균형 잡힌 유형입니다. 
      주변의 이향인들이 보여주는 독립성과 독자적인 태도를 깊이 이해하고 존중할 때, 더 풍요롭고 상호보완적인 인간관계를 형성할 수 있습니다.
    `;
  }

  // 게이지 차트 & 레이더 차트 렌더링
  renderScoreGauge(result.totalScore);
  renderRadarChart(result.dimPercentages);
  renderDimensionBars(result.dimPercentages);
  renderBreakdownTable(result.itemBreakdown);
}

// ─── Canvas 점수 원형 게이지 ──────────────────────────────────
function renderScoreGauge(score) {
  const canvas = document.getElementById("score-gauge-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const size = 220;
  const dpr = window.devicePixelRatio || 1;

  canvas.width = size * dpr;
  canvas.height = size * dpr;
  ctx.scale(dpr, dpr);

  const centerX = size / 2;
  const centerY = size / 2;
  const radius = 85;
  const lineWidth = 14;

  const startAngle = 0.75 * Math.PI;
  const endAngle = 2.25 * Math.PI;
  const totalAngleRange = endAngle - startAngle;

  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  const trackColor = isLight ? "#e2e8f0" : "#26292f";

  // 애니메이션 효과
  let progress = 0;
  const targetProgress = Math.max(0, Math.min(1, (score - 40) / (280 - 40)));

  function draw() {
    ctx.clearRect(0, 0, size, size);

    // 배경 트랙
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.strokeStyle = trackColor;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.stroke();

    // 188점 기준선 눈금
    const thresholdAngle = startAngle + ((188 - 40) / 240) * totalAngleRange;
    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, thresholdAngle - 0.02, thresholdAngle + 0.02);
    ctx.strokeStyle = "#f59e0b";
    ctx.lineWidth = lineWidth + 4;
    ctx.stroke();
    ctx.restore();

    // 진행률 아크
    const currentEndAngle = startAngle + (progress * targetProgress * totalAngleRange);
    const grad = ctx.createLinearGradient(0, 0, size, size);
    grad.addColorStop(0, "#3b82f6");
    grad.addColorStop(1, score >= 188 ? "#10b981" : "#60a5fa");

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, currentEndAngle);
    ctx.strokeStyle = grad;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.stroke();

    if (progress < 1) {
      progress += 0.035;
      requestAnimationFrame(draw);
    }
  }

  draw();
}

// ─── Canvas 레이더 차트 ───────────────────────────────────────
function renderRadarChart(dimData) {
  const canvas = document.getElementById("radar-chart-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const width = 320;
  const height = 280;
  const dpr = window.devicePixelRatio || 1;

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.scale(dpr, dpr);

  const centerX = width / 2;
  const centerY = height / 2 + 10;
  const maxRadius = 80;

  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  const gridColor = isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)";
  const textColor = isLight ? "#475569" : "#a0a6b1";

  const keys = ["autonomy", "non_conform", "introspection", "social_indep"];
  const numSides = keys.length;
  const angleStep = (Math.PI * 2) / numSides;

  ctx.clearRect(0, 0, width, height);

  // 동심 다각형 배경 (25%, 50%, 75%, 100%)
  for (let level = 1; level <= 4; level++) {
    const r = (maxRadius / 4) * level;
    ctx.beginPath();
    for (let i = 0; i < numSides; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + r * Math.cos(angle);
      const y = centerY + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // 방사선 축
  for (let i = 0; i < numSides; i++) {
    const angle = i * angleStep - Math.PI / 2;
    const x = centerX + maxRadius * Math.cos(angle);
    const y = centerY + maxRadius * Math.sin(angle);
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = gridColor;
    ctx.stroke();

    // 레이블 출력
    const labelDist = maxRadius + 22;
    const labelX = centerX + labelDist * Math.cos(angle);
    const labelY = centerY + labelDist * Math.sin(angle);
    ctx.font = "bold 11px sans-serif";
    ctx.fillStyle = textColor;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(DIMENSIONS[keys[i]].name.split(" ")[0], labelX, labelY);
  }

  // 사용자 데이터 다각형
  ctx.beginPath();
  keys.forEach((key, i) => {
    const pct = (dimData[key].percent || 50) / 100;
    const r = Math.max(12, maxRadius * pct);
    const angle = i * angleStep - Math.PI / 2;
    const x = centerX + r * Math.cos(angle);
    const y = centerY + r * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();

  ctx.fillStyle = "rgba(59, 130, 246, 0.25)";
  ctx.fill();
  ctx.strokeStyle = "#3b82f6";
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // 각 꼭짓점 포인트 원
  keys.forEach((key, i) => {
    const pct = (dimData[key].percent || 50) / 100;
    const r = Math.max(12, maxRadius * pct);
    const angle = i * angleStep - Math.PI / 2;
    const x = centerX + r * Math.cos(angle);
    const y = centerY + r * Math.sin(angle);

    ctx.beginPath();
    ctx.arc(x, y, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.strokeStyle = "#3b82f6";
    ctx.lineWidth = 2;
    ctx.stroke();
  });
}

// ─── 4대 영역 바 목록 렌더링 ─────────────────────────────────
function renderDimensionBars(dimData) {
  elements.dimensionBarsContainer.innerHTML = "";
  const keys = ["autonomy", "non_conform", "introspection", "social_indep"];

  keys.forEach(k => {
    const meta = DIMENSIONS[k];
    const data = dimData[k];

    const item = document.createElement("div");
    item.className = "dim-item";
    item.innerHTML = `
      <div class="dim-info">
        <span class="dim-name">${meta.name}</span>
        <span class="dim-score">${data.score}점 <small style="color:var(--text-muted)">(${data.percent}%)</small></span>
      </div>
      <div class="dim-track">
        <div class="dim-fill" style="width: 0%; background: ${meta.color}"></div>
      </div>
    `;

    elements.dimensionBarsContainer.appendChild(item);

    // 애니메이션 바 채우기
    setTimeout(() => {
      const fill = item.querySelector(".dim-fill");
      if (fill) fill.style.width = `${data.percent}%`;
    }, 100);
  });
}

// ─── 문항별 상세 내역 테이블 ─────────────────────────────────
function renderBreakdownTable(breakdown) {
  let html = `
    <table class="breakdown-table">
      <thead>
        <tr>
          <th style="width: 45px">번호</th>
          <th>문항 내용</th>
          <th style="width: 110px">선택 답변</th>
          <th style="width: 70px; text-align: center">배점</th>
        </tr>
      </thead>
      <tbody>
  `;

  breakdown.forEach(item => {
    html += `
      <tr>
        <td><strong>#${item.id}</strong></td>
        <td>${item.text}</td>
        <td>${item.selectedLabel}</td>
        <td style="text-align: center">
          <span class="score-cell-badge">${item.score}점</span>
        </td>
      </tr>
    `;
  });

  html += `</tbody></table>`;
  elements.breakdownTableWrapper.innerHTML = html;
}

// ─── 결과 복사 ────────────────────────────────────────────────
function copyResultSummary() {
  const result = calculateScores();
  const summaryText = `[이향인(Otrovert) 성향 검사 결과]
총점: ${result.totalScore}점 / 280점
판정: ${result.isOtrovert ? "이향인(Otrovert) 유형 (188점 이상)" : "비이향인 유형 (188점 미만)"}
- 주체성/독립심: ${result.dimPercentages.autonomy.score}점 (${result.dimPercentages.autonomy.percent}%)
- 탈동조/자유사고: ${result.dimPercentages.non_conform.score}점 (${result.dimPercentages.non_conform.percent}%)
- 내면사색/고요: ${result.dimPercentages.introspection.score}점 (${result.dimPercentages.introspection.percent}%)
- 타인시선 독립: ${result.dimPercentages.social_indep.score}점 (${result.dimPercentages.social_indep.percent}%)

* 기준: 도서 '이향인' 40문항 테스트`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(summaryText).then(() => {
      showToast("결과 요약이 클립보드에 복사되었습니다.");
    });
  } else {
    showToast("클립보드 복사를 지원하지 않는 브라우저입니다.");
  }
}

// ─── 검사 다시 시작 ──────────────────────────────────────────
function restartSurvey() {
  if (confirm("검사 기록을 초기화하고 처음부터 다시 시작하시겠습니까?")) {
    state.answers = {};
    state.currentPage = 0;
    localStorage.removeItem(STORAGE_KEY);
    elements.resumeBanner.classList.add("hidden");
    switchView("intro");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// ─── 토스트 알림 ──────────────────────────────────────────────
let toastTimer = null;
function showToast(msg) {
  if (!elements.toast) return;
  elements.toast.textContent = msg;
  elements.toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 2500);
}

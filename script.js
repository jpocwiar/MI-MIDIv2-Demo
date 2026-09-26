const DATA = window.SAE_LIBRARY.cards;

const I18N = {
  pl: {
    pageTitle: "MI-MIDI — interwencje w cechy rzadkich autoenkoderów",
    metaDescription: "Próbki dźwiękowe dla interwencji w cechy rzadkich autoenkoderów modeli text-to-MIDI.",
    heroEyebrow: "Mechanistyczna interpretowalność modeli text-to-MIDI",
    heroSection: "Interwencje w cechy rzadkich autoenkoderów",
    heroLead:
      "Niniejsze demo udostępnia próbki dźwiękowe uzyskane w badaniach opisanych w rozdziale „Rzadkie autoenkodery” pracy magisterskiej. Materiał obejmuje cechy modeli text2midi i MIDI-LLM wraz z generacjami bazowymi, interwencjami w kierunku cechy i kontrolnymi interwencjami w kierunku losowym.",
    guideTitle: "Porównywane warianty",
    guideText: "Każda karta odpowiada jednej cesze rzadkiego autoenkodera wyodrębnionej w określonym modelu i warstwie. Trzy warianty w obrębie karty wykorzystują ten sam opis wejściowy i ziarno losowe.",
    guideItems: [
      ["baseline", "Generacja bazowa", "bez zmiany aktywacji"],
      ["semantic", "Interwencja w kierunku cechy", "wzmocnienie aktywacji wybranej cechy"],
      ["random", "Kontrola: kierunek losowy", "interwencja w kierunku losowym o tej samej normie"],
    ],
    usageTitle: "Przełączanie próbek",
    usageText: "W kartach z wieloma próbkami lista „Opis wejściowy” przełącza opis, nagrania i rolki pianolowe. Lista „Poziom interwencji” pozwala porównać P50, P75 i P90, przy czym domyślnie wyświetlany jest poziom P90.",
    legendTitle: "Oznaczenia wyników",
    resultLegend: [
      ["replicated", "potwierdzony", "wynik powtórzony na rozłącznym zbiorze opisów wejściowych"],
      ["screen_positive", "kandydat", "dodatni wynik etapu eksploracyjnego, wymagający niezależnego potwierdzenia"],
      ["reviewed", "oceniony", "cecha objęta zaślepioną oceną zgodności z wcześniej ustalonym opisem"],
      ["not_confirmed", "niepotwierdzony", "przewidywana zmiana nie została potwierdzona"],
    ],
    searchPlaceholder: "Szukaj cechy, instrumentu lub metryki…",
    filterLabels: { search: "Wyszukiwanie cech", category: "Kategoria", model: "Model", status: "Ocena wyniku" },
    categories: [["all", "Wszystkie kategorie"], ["muspy", "Metryki MusPy"], ["instrument", "Programy instrumentów MIDI"], ["semantic", "Opisy jakościowe"]],
    models: [["all", "Oba modele"], ["midi_llm", "MIDI-LLM"], ["text2midi", "text2midi"]],
    statuses: [["all", "Wszystkie oceny"], ["replicated", "Potwierdzone"], ["screen_positive", "Kandydaci"], ["reviewed", "Ocenione"], ["not_confirmed", "Niepotwierdzone"]],
    interventionsLink: "MI-MIDI — sterowanie wektorami i podmiana aktywacji →",
    licenseLink: "Licencja SoundFontu",
    featuredHeading: "Wyróżnione cechy",
    featuredIntro: "Dziesięć cech o najwyraźniejszych wynikach interwencji. Dla każdej udostępniono wszystkie dziesięć opisów wejściowych.",
    atlasHeading: "Pozostałe cechy",
    atlasIntro: "Pozostałe badane cechy, niezależnie od wyniku testu. Każda karta zawiera jeden wybrany opis wejściowy i wszystkie trzy poziomy interwencji.",
    groups: { muspy: "metryka MusPy", instrument: "program instrumentu MIDI", semantic: "opis jakościowy" },
    status: { replicated: "potwierdzony", confirmed: "potwierdzony", screen_positive: "kandydat", reviewed: "oceniony", awaiting_review: "bez oceny", not_confirmed: "niepotwierdzony" },
    expand: "Rozwiń",
    collapse: "Zwiń",
    featuredBadge: "wyróżniona cecha",
    layer: "warstwa",
    feature: "cecha",
    example: "Przykład",
    prompt: "Opis wejściowy",
    strength: "Poziom interwencji",
    baseline: "Generacja bazowa",
    semantic: "Interwencja w kierunku cechy",
    random: "Kontrola: kierunek losowy",
    doses: { p50: "P50", p75: "P75", p90: "P90" },
    downloadMp3: "Pobierz MP3",
    downloadMidi: "Pobierz MIDI",
    selectedMeasurement: "Pomiar dla wybranego przykładu",
    evidenceDetails: "Wyniki i szczegóły cechy",
    pianoRoll: "Rolka pianolowa",
    measure: "wielkość",
    baseShort: "bazowa",
    saeShort: "cecha",
    randomShort: "losowa",
    dose: "poziom",
    deltaBase: "Δ baza",
    deltaRandom: "Δ losowa",
    presence: "obecność (bazowa / cecha / losowa)",
    noteShare: "udział nut (bazowa / cecha / losowa)",
    durationShare: "udział czasu (bazowa / cecha / losowa)",
    qualitativeHypothesis: "Opis cechy",
    muspyMetric: "Metryka MusPy",
    instrumentHypothesis: "Program instrumentu MIDI",
    causalReplication: "Eksperyment potwierdzający",
    possibleConfound: "Możliwy czynnik zakłócający",
    observationalValidation: "rozpoznane przykłady w zbiorze odłożonym",
    safeAudit: "audyt przykładów bez ostrzeżeń",
    yes: "tak",
    no: "nie",
    expectedIncrease: "oczekiwany wzrost",
    expectedDecrease: "oczekiwany spadek",
    atP90: "Dla poziomu P90",
    expectedChange: "zmiana zgodna z hipotezą",
    versusBase: "względem bazy",
    versusRandom: "względem kontroli",
    standardized: "efekt standaryzowany",
    blindedReview: "zaślepiona ocena zgodności z opisem",
    saeRecognized: "wyżej oceniono kierunek cechy",
    randomRecognized: "wyżej oceniono kierunek losowy",
    tie: "remis",
    neither: "żaden wariant",
    unavailable: "ocena niedostępna",
    confidence: "pewność",
    carrierSigns: "liczba opisów: cecha wyżej / remis / kierunek losowy wyżej",
    activeHeldout: "obecność programu w aktywnych przykładach odłożonych",
    distractors: "obecność programu w dopasowanych przykładach nieaktywnych",
    confirmed: "potwierdzona",
    featureCount: "cech",
  },
  en: {
    pageTitle: "MI-MIDI — SAE feature interventions",
    metaDescription: "Audio samples from sparse-autoencoder feature interventions in text-to-MIDI models.",
    heroEyebrow: "Mechanistic interpretability of text-to-MIDI models",
    heroSection: "Sparse-autoencoder feature interventions",
    heroLead:
      "This demo presents audio samples from sparse-autoencoder feature interventions in text2midi and MIDI-LLM, paired with baseline generations and matched random controls.",
    guideTitle: "Compared variants",
    guideText: "Each card represents one SAE feature identified at a particular model and layer. The three variants within a card use the same prompt and random seed.",
    guideItems: [
      ["baseline", "Baseline generation", "activations left unchanged"],
      ["semantic", "Feature-direction intervention", "selected feature activation increased"],
      ["random", "Random-direction control", "intervention with the same norm"],
    ],
    usageTitle: "Switching samples",
    usageText: "On cards with multiple samples, the Prompt selector changes the prompt, recordings, and piano rolls. The Intervention level selector switches between P50, P75, and P90, with P90 shown by default.",
    legendTitle: "Result labels",
    resultLegend: [
      ["replicated", "confirmed", "the result was repeated on a disjoint set of held-out prompts"],
      ["screen_positive", "candidate", "a positive exploratory result that requires independent confirmation"],
      ["reviewed", "reviewed", "the feature underwent a blind assessment against its previously fixed description"],
      ["not_confirmed", "not confirmed", "the predicted change was not confirmed"],
    ],
    searchPlaceholder: "Search by feature, instrument or metric…",
    filterLabels: { search: "Feature search", category: "Category", model: "Model", status: "Result assessment" },
    categories: [["all", "All categories"], ["muspy", "MusPy metrics"], ["instrument", "MIDI instrument programs"], ["semantic", "Qualitative descriptions"]],
    models: [["all", "Both models"], ["midi_llm", "MIDI-LLM"], ["text2midi", "text2midi"]],
    statuses: [["all", "All assessments"], ["replicated", "Confirmed"], ["screen_positive", "Candidates"], ["reviewed", "Reviewed"], ["not_confirmed", "Not confirmed"]],
    interventionsLink: "MI-MIDI — steering and activation patching →",
    licenseLink: "SoundFont license",
    featuredHeading: "Highlighted features",
    featuredIntro: "Ten features with the clearest intervention outcomes. All ten prompts are available for each feature.",
    atlasHeading: "Remaining features",
    atlasIntro: "All remaining tested features, independently of test outcome. Each card includes one selected prompt and all three intervention strengths.",
    groups: { muspy: "MusPy metric", instrument: "MIDI instrument program", semantic: "qualitative description" },
    status: { replicated: "confirmed", confirmed: "confirmed", screen_positive: "candidate", reviewed: "reviewed", awaiting_review: "pending", not_confirmed: "not confirmed" },
    expand: "Expand",
    collapse: "Collapse",
    featuredBadge: "highlighted feature",
    layer: "layer",
    feature: "feature",
    example: "Example",
    prompt: "Prompt",
    strength: "Intervention level",
    baseline: "Baseline generation",
    semantic: "Feature-direction intervention",
    random: "Random-direction control",
    doses: { p50: "P50", p75: "P75", p90: "P90" },
    downloadMp3: "Download MP3",
    downloadMidi: "Download MIDI",
    selectedMeasurement: "Measurement for the selected example",
    evidenceDetails: "Feature results and details",
    pianoRoll: "Piano roll",
    measure: "measure",
    baseShort: "baseline",
    saeShort: "feature",
    randomShort: "random",
    dose: "level",
    deltaBase: "Δ baseline",
    deltaRandom: "Δ random",
    presence: "presence (baseline / feature / random)",
    noteShare: "note share (baseline / feature / random)",
    durationShare: "duration share (baseline / feature / random)",
    qualitativeHypothesis: "Feature description",
    muspyMetric: "MusPy metric",
    instrumentHypothesis: "MIDI instrument program",
    causalReplication: "Confirmation experiment",
    possibleConfound: "Possible confound",
    observationalValidation: "recognized examples in the held-out set",
    safeAudit: "example audit without warnings",
    yes: "yes",
    no: "no",
    expectedIncrease: "expected increase",
    expectedDecrease: "expected decrease",
    atP90: "At level P90",
    expectedChange: "hypothesis-aligned change",
    versusBase: "versus baseline",
    versusRandom: "versus control",
    standardized: "standardized effect",
    blindedReview: "blind description assessment",
    saeRecognized: "feature direction rated higher",
    randomRecognized: "random direction rated higher",
    tie: "tie",
    neither: "neither variant",
    unavailable: "assessment unavailable",
    confidence: "confidence",
    carrierSigns: "prompt count: feature higher / tie / random higher",
    activeHeldout: "program presence in active held-out examples",
    distractors: "program presence in matched inactive examples",
    confirmed: "confirmed",
    featureCount: "features",
  },
};

const METRICS = {
  drum_in_pattern_rate: { pl: "zgodność perkusji z siatką dwójkową", en: "duple-grid drum rate" },
  drum_in_pattern_rate_triple: { pl: "zgodność perkusji z siatką triolową", en: "triplet-grid drum rate" },
  drum_pattern_consistency: { pl: "zgodność perkusji z dominującą siatką", en: "dominant-grid drum consistency" },
  empty_beat_rate: { pl: "udział pustych jednostek ćwierćnutowych", en: "empty-beat rate" },
  n_pitch_classes_used: { pl: "liczba różnych klas wysokości", en: "number of pitch classes" },
  n_pitches_used: { pl: "liczba różnych wysokości", en: "number of pitches" },
  pitch_class_entropy: { pl: "entropia klas wysokości", en: "pitch-class entropy" },
  pitch_entropy: { pl: "entropia wysokości dźwięków", en: "pitch entropy" },
  pitch_range: { pl: "rozpiętość wysokości", en: "pitch range" },
  polyphony: { pl: "średnia polifonia", en: "mean polyphony" },
  polyphony_rate: { pl: "udział fragmentu z co najmniej trzema wysokościami", en: "polyphony rate" },
  scale_consistency: { pl: "zgodność ze skalą durową lub molową", en: "scale consistency" },
};

const PL_TITLES = {
  995: "Instrument: Electric Piano 1",
  1015: "Wzrost entropii wysokości dźwięków",
  3340: "Lead 2 (sawtooth) i elektroniczna instrumentacja",
  5166: "Większa różnorodność klas wysokości",
  6981: "Mniejsza zgodność perkusji z siatką triolową",
  6424: "Instrument: Acoustic Guitar (nylon)",
  552: "Gęsta, niemal ciągła warstwa perkusyjna",
  4021: "Bogata, wielobarwna instrumentacja",
  4606: "Rzadka faktura z powracającymi kotłami",
  6671: "Wyraźna, ciągła warstwa zestawu perkusyjnego",
};

let language = loadLanguage();

function t(key) {
  return I18N[language][key];
}

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

function fmt(value, digits = 3) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return "—";
  const output = Number(value).toFixed(digits);
  return language === "pl" ? output.replace(".", ",") : output;
}

function pct(value, digits = 1) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return "—";
  return `${fmt(100 * Number(value), digits)}%`;
}

function loadLanguage() {
  try {
    return localStorage.getItem("sae-demo-language") || (navigator.language.startsWith("pl") ? "pl" : "en");
  } catch (_error) {
    return navigator.language.startsWith("pl") ? "pl" : "en";
  }
}

function setOptions(element, values) {
  const selected = element.value;
  element.innerHTML = values.map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
  if (values.some(([value]) => value === selected)) element.value = selected;
}

function applyLanguage() {
  document.documentElement.lang = language;
  document.title = t("pageTitle");
  document.querySelector('meta[name="description"]').content = t("metaDescription");
  document.querySelectorAll("[data-text]").forEach((element) => {
    element.textContent = t(element.dataset.text);
  });
  document.querySelector("#guideGrid").innerHTML = t("guideItems")
    .map(([kind, title, body]) => `<div class="key-item key-${kind}"><b>${esc(title)}</b><span>${esc(body)}</span></div>`).join("");
  document.querySelector("#statusLegend").innerHTML = t("resultLegend")
    .map(([status, label, body]) => `<div><span class="status ${status}">${esc(label)}</span><span>${esc(body)}</span></div>`).join("");
  document.querySelector("#search").placeholder = t("searchPlaceholder");
  document.querySelector("#search").setAttribute("aria-label", t("filterLabels").search);
  document.querySelector("#category").setAttribute("aria-label", t("filterLabels").category);
  document.querySelector("#model").setAttribute("aria-label", t("filterLabels").model);
  document.querySelector("#status").setAttribute("aria-label", t("filterLabels").status);
  setOptions(document.querySelector("#category"), t("categories"));
  setOptions(document.querySelector("#model"), t("models"));
  setOptions(document.querySelector("#status"), t("statuses"));
  document.querySelectorAll(".language-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.language === language);
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });
}

function metricName(evidence) {
  return METRICS[evidence.original_name]?.[language] || evidence.metric_name || evidence.label;
}

function displayTitle(card) {
  if (language === "en") return card.title;
  if (PL_TITLES[card.feature_id]) return PL_TITLES[card.feature_id];
  const semantic = card.evidence.find((item) => item.type === "semantic");
  if (semantic) return semantic.label;
  const instrument = card.evidence.find((item) => ["instrument", "replication"].includes(item.type));
  if (instrument) return `Instrument: ${instrument.label.replace(/^GM(?: program)? \d+: /, "")}`;
  return card.evidence.filter((item) => item.type === "muspy")
    .map((item) => `${Number(item.expected_sign) > 0 ? "wzrost" : "spadek"}: ${metricName(item)}`).join("; ");
}

function scopeName(evidence) {
  if (language === "pl") return evidence.scope_pl || evidence.scope?.replaceAll("_", " ") || "";
  return evidence.scope?.replaceAll("_", " ") || "";
}

function modelName(model) {
  return model === "midi_llm" ? "MIDI-LLM" : "text2midi";
}

function doseTable(evidence) {
  const rows = evidence.dose_summaries || [];
  if (!rows.length) return "";
  if (evidence.type === "muspy") {
    return `<div class="dose-wrap"><table class="dose-table"><thead><tr><th>${t("dose")}</th><th>${t("baseShort")}</th><th>${t("saeShort")}</th><th>${t("randomShort")}</th><th>${t("deltaBase")}</th><th>${t("deltaRandom")}</th></tr></thead><tbody>${rows.map((row) => `<tr><td>P${row.dose_percentile}</td><td>${fmt(row.baseline_mean)}</td><td>${fmt(row.semantic_mean)}</td><td>${fmt(row.random_mean)}</td><td>${fmt(row.semantic_minus_baseline)}</td><td>${fmt(row.semantic_minus_random)}</td></tr>`).join("")}</tbody></table></div>`;
  }
  return `<div class="dose-wrap"><table class="dose-table"><thead><tr><th>${t("dose")}</th><th>${t("presence")}</th><th>${t("noteShare")}</th><th>${t("durationShare")}</th></tr></thead><tbody>${rows.map((row) => `<tr><td>P${row.dose_percentile}</td><td>${pct(row.baseline_presence_rate, 0)} / ${pct(row.semantic_presence_rate, 0)} / ${pct(row.random_presence_rate, 0)}</td><td>${pct(row.baseline_note_share_mean)} / ${pct(row.semantic_note_share_mean)} / ${pct(row.random_note_share_mean)}</td><td>${pct(row.baseline_duration_share_mean)} / ${pct(row.semantic_duration_share_mean)} / ${pct(row.random_duration_share_mean)}</td></tr>`).join("")}</tbody></table></div>`;
}

function evidenceHtml(evidence) {
  if (evidence.type === "semantic") {
    const review = evidence.causal_review;
    let verdict = t("unavailable");
    if (review) {
      verdict = review.forced_side_choice
        ? (review.identified_semantic ? t("saeRecognized") : t("randomRecognized"))
        : (review.choice === "tie" ? t("tie") : t("neither"));
    }
    const causal = review
      ? `<div class="numbers">${t("blindedReview")}: ${verdict}, ${t("confidence")} ${review.confidence}/5 · ${t("saeShort")} ${fmt(review.semantic_match_mean)} vs ${t("randomShort")} ${fmt(review.random_match_mean)} · Δ=${fmt(review.paired_match_difference)} · ${t("carrierSigns")}: ${review.n_carrier_semantic_higher}/${review.n_carrier_equal}/${review.n_carrier_random_higher}</div>`
      : `<div class="numbers">${t("blindedReview")}: ${verdict}</div>`;
    return `<div class="hypothesis semantic"><b>${t("qualitativeHypothesis")} · ${esc(scopeName(evidence))}</b><div class="description">${esc(evidence.label)}</div><div class="description">${esc(evidence.description)}</div>${evidence.possible_confound ? `<div class="confound">${t("possibleConfound")}: ${esc(evidence.possible_confound)}</div>` : ""}<div class="numbers">${t("observationalValidation")}: ${evidence.heldout_hits}/4 · ${t("safeAudit")}: ${evidence.semantic_safe ? t("yes") : t("no")}</div>${causal}</div>`;
  }
  if (evidence.type === "muspy") {
    const prediction = Number(evidence.expected_sign) > 0 ? t("expectedIncrease") : t("expectedDecrease");
    const validationCorrelation = language === "pl" ? "korelacja w zbiorze walidacyjnym" : "validation-set correlation";
    const testCorrelation = language === "pl" ? "korelacja w zbiorze testowym" : "test-set correlation";
    return `<div class="hypothesis muspy"><b>${t("muspyMetric")} · ${esc(metricName(evidence))}</b><div>${prediction}. ${t("atP90")}: ${t("baseShort")} ${fmt(evidence.baseline_mean)}, ${t("saeShort")} ${fmt(evidence.semantic_mean)}, ${t("randomShort")} ${fmt(evidence.random_mean)}.</div><div class="numbers">${t("expectedChange")}: ${t("versusBase")} ${fmt(evidence.effect_vs_baseline)}, ${t("versusRandom")} ${fmt(evidence.effect_vs_random)} · ${t("standardized")} ${fmt(evidence.standardized_effect)} · p=${fmt(evidence.p, 4)} · q=${fmt(evidence.q, 4)} · ${validationCorrelation} r=${fmt(evidence.observational)} · ${testCorrelation} r=${fmt(evidence.heldout)}</div>${doseTable(evidence)}</div>`;
  }
  const heading = evidence.type === "replication" ? t("causalReplication") : t("instrumentHypothesis");
  const observational = evidence.type === "instrument"
    ? `<div class="numbers">${t("activeHeldout")}: ${pct(evidence.observational, 0)} · ${t("distractors")}: ${pct(evidence.heldout, 0)}</div>` : "";
  return `<div class="hypothesis ${evidence.type}"><b>${heading} · ${esc(evidence.label)}</b><div>${t("atP90")} — ${t("presence")}: ${pct(evidence.baseline_presence, 0)} / ${pct(evidence.semantic_presence, 0)} / ${pct(evidence.random_presence, 0)}; ${t("noteShare")}: ${pct(evidence.baseline_note_share)} / ${pct(evidence.semantic_note_share)} / ${pct(evidence.random_note_share)}; ${t("durationShare")}: ${pct(evidence.baseline_duration_share)} / ${pct(evidence.semantic_duration_share)} / ${pct(evidence.random_duration_share)}.</div><div class="numbers">Δ ${language === "pl" ? "udziału nut" : "note share"}: ${t("saeShort")}−${t("baseShort")} ${pct(evidence.note_share_effect_vs_baseline)}, ${t("saeShort")}−${t("randomShort")} ${pct(evidence.note_share_effect_vs_random)} · Δ ${language === "pl" ? "udziału czasu" : "duration share"}: ${t("saeShort")}−${t("baseShort")} ${pct(evidence.duration_share_effect_vs_baseline)}, ${t("saeShort")}−${t("randomShort")} ${pct(evidence.duration_share_effect_vs_random)} · p=${fmt(evidence.p, 4)}${evidence.q !== undefined ? ` · q=${fmt(evidence.q, 4)}` : ""}${evidence.confirmed ? ` · ${t("confirmed")}` : ""}</div>${observational}${doseTable(evidence)}</div>`;
}

function mediaFor(card, promptIndex, dose) {
  const carrier = card.carriers.find((item) => item.prompt_idx === Number(promptIndex));
  if (!carrier) return null;
  return {
    prompt: carrier.prompt,
    baseline: carrier.baseline,
    semantic: carrier.doses[dose].feature,
    random: carrier.doses[dose].random,
  };
}

function carrierOutcomeHtml(card, promptIndex, dose) {
  const rows = [];
  for (const evidence of card.evidence) {
    const values = evidence.carrier_values?.[dose]?.[String(promptIndex)];
    if (!values) continue;
    if (evidence.type === "muspy") {
      rows.push(`<tr><td>${esc(metricName(evidence))}</td><td>${fmt(values.baseline)}</td><td>${fmt(values.semantic)}</td><td>${fmt(values.random)}</td></tr>`);
    } else {
      rows.push(`<tr><td>${esc(evidence.label)} — ${language === "pl" ? "udział nut" : "note share"}</td><td>${pct(values.baseline.note_share)}</td><td>${pct(values.semantic.note_share)}</td><td>${pct(values.random.note_share)}</td></tr>`);
      rows.push(`<tr><td>${esc(evidence.label)} — ${language === "pl" ? "udział czasu" : "duration share"}</td><td>${pct(values.baseline.duration_share)}</td><td>${pct(values.semantic.duration_share)}</td><td>${pct(values.random.duration_share)}</td></tr>`);
    }
  }
  if (!rows.length) return "";
  return `<table class="outcome-table"><thead><tr><th>${t("measure")}</th><th>${t("baseShort")}</th><th>${t("saeShort")}</th><th>${t("randomShort")}</th></tr></thead><tbody>${rows.join("")}</tbody></table>`;
}

function sampleHtml(kind, title) {
  return `<div class="sample ${kind}-sample" data-kind="${kind}"><h3>${esc(title)}</h3><audio controls preload="none"></audio><a class="roll-link" target="_blank" rel="noreferrer"><img class="roll" loading="lazy" alt="${esc(`${t("pianoRoll")}: ${title}`)}"></a><div class="downloads"><a class="mp3" download>${t("downloadMp3")}</a><a class="midi" download>${t("downloadMidi")}</a></div></div>`;
}

function cardHtml(card) {
  const badges = card.groups.map((group) => `<span class="badge ${group}">${t("groups")[group]}</span>`).join("");
  const scope = card.evidence.find((item) => item.type === "semantic");
  return `<details class="card ${card.top_feature ? "featured" : ""}" data-id="${esc(card.candidate_id)}" ${card.feature_id === 995 ? "open" : ""}><summary class="card-head"><span class="head-main"><span class="card-title">${esc(displayTitle(card))}</span><span class="identity">${modelName(card.model)} · ${t("layer")} ${card.layer} · ${t("feature")} ${card.feature_id}</span><span class="badges">${card.top_feature ? `<span class="badge featured">${t("featuredBadge")}</span>` : ""}${badges}${scope ? `<span class="badge">${esc(scopeName(scope))}</span>` : ""}</span></span><span class="head-side"><span class="status ${card.status}">${t("status")[card.status]}</span><span class="expand-label" aria-hidden="true">${t("expand")}</span></span></summary><div class="card-body"></div></details>`;
}

function cardBodyHtml(card) {
  const selectedPrompt = card.carriers.some((carrier) => carrier.prompt_idx === card.best_prompt)
    ? card.best_prompt
    : card.carriers[0].prompt_idx;
  const promptControl = card.carriers.length > 1
    ? `<label>${t("prompt")} <select class="prompt">${card.carriers.map((carrier, index) => `<option value="${carrier.prompt_idx}" ${carrier.prompt_idx === selectedPrompt ? "selected" : ""}>${t("example")} ${index + 1}</option>`).join("")}</select></label>`
    : "";
  const doses = ["p50", "p75", "p90"].map((dose) => `<option value="${dose}"${dose === "p90" ? " selected" : ""}>${esc(t("doses")[dose])}</option>`).join("");
  return `<div class="listen" data-default-prompt="${selectedPrompt}"><div class="listen-controls">${promptControl}<label>${t("strength")} <select class="dose">${doses}</select></label></div><div class="prompt-display"><b>${t("prompt")}</b><span class="prompt-text"></span></div><div class="compare">${sampleHtml("baseline", t("baseline"))}${sampleHtml("semantic", t("semantic"))}${sampleHtml("random", t("random"))}</div><details class="selected-results"><summary>${t("selectedMeasurement")}</summary><div class="carrier-outcomes"></div></details></div><details class="evidence-panel"><summary>${t("evidenceDetails")}</summary><div class="hypotheses">${card.evidence.map(evidenceHtml).join("")}</div></details>`;
}

function updateMedia(element, card) {
  const promptIndex = element.querySelector(".prompt")?.value
    ?? element.querySelector(".listen")?.dataset.defaultPrompt;
  const dose = element.querySelector(".dose")?.value;
  if (promptIndex === undefined) return;
  const media = mediaFor(card, promptIndex, dose);
  element.querySelector(".prompt-text").textContent = media?.prompt || "";
  const outcomeHtml = carrierOutcomeHtml(card, promptIndex, dose);
  element.querySelector(".carrier-outcomes").innerHTML = outcomeHtml;
  element.querySelector(".selected-results").hidden = !outcomeHtml;
  for (const kind of ["baseline", "semantic", "random"]) {
    const box = element.querySelector(`[data-kind="${kind}"]`);
    const item = media?.[kind];
    if (!item) {
      box.hidden = true;
      continue;
    }
    const audio = box.querySelector("audio");
    if (audio.dataset.src !== item.audio) {
      audio.src = item.audio;
      audio.dataset.src = item.audio;
      audio.load();
    }
    const image = box.querySelector("img");
    image.src = item.piano_roll;
    box.querySelector(".roll-link").href = item.piano_roll;
    box.querySelector(".mp3").href = item.audio;
    box.querySelector(".midi").href = item.midi;
    box.hidden = false;
  }
}

function hydrateCard(element, card) {
  if (element.dataset.hydrated === "true") return;
  element.querySelector(".card-body").innerHTML = cardBodyHtml(card);
  element.dataset.hydrated = "true";
  element.querySelector(".prompt")?.addEventListener("change", () => updateMedia(element, card));
  element.querySelector(".dose").addEventListener("change", () => updateMedia(element, card));
  updateMedia(element, card);
}

function filteredCards() {
  const query = document.querySelector("#search").value.toLowerCase();
  const category = document.querySelector("#category").value;
  const model = document.querySelector("#model").value;
  const status = document.querySelector("#status").value;
  return DATA.filter((card) =>
    (category === "all" || card.groups.includes(category)) &&
    (model === "all" || card.model === model) &&
    (status === "all" || card.status === status) &&
    (!query || displayTitle(card).toLowerCase().includes(query) || card.candidate_id.toLowerCase().includes(query) || JSON.stringify(card.evidence).toLowerCase().includes(query))
  );
}

function render() {
  document.querySelectorAll("audio").forEach((audio) => audio.pause());
  const rows = filteredCards();
  const featured = rows.filter((card) => card.top_feature);
  const remaining = rows.filter((card) => !card.top_feature);
  let html = "";
  if (featured.length) {
    html += `<section class="section-intro"><h2>${t("featuredHeading")}</h2><p>${t("featuredIntro")}</p></section>${featured.map(cardHtml).join("")}`;
  }
  if (remaining.length) {
    html += `<section class="section-intro full-atlas"><h2>${t("atlasHeading")}</h2><p>${t("atlasIntro")}</p></section>${remaining.map(cardHtml).join("")}`;
  }
  const root = document.querySelector("#cards");
  root.innerHTML = html;
  document.querySelector("#result-count").textContent = `${rows.length} / ${DATA.length} ${t("featureCount")}`;
  const byId = Object.fromEntries(rows.map((card) => [card.candidate_id, card]));
  root.querySelectorAll(".card").forEach((element) => {
    const card = byId[element.dataset.id];
    const updateExpandLabel = () => {
      element.querySelector(".expand-label").textContent = element.open ? t("collapse") : t("expand");
    };
    element.addEventListener("toggle", () => {
      updateExpandLabel();
      if (element.open) hydrateCard(element, card);
      else element.querySelectorAll("audio").forEach((audio) => audio.pause());
    });
    updateExpandLabel();
    if (element.open) hydrateCard(element, card);
  });
}

function changeLanguage(nextLanguage) {
  language = nextLanguage;
  try {
    localStorage.setItem("sae-demo-language", language);
  } catch (_error) {
    // The switch still works when storage is unavailable.
  }
  applyLanguage();
  render();
}

document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", () => changeLanguage(button.dataset.language));
});
document.querySelectorAll(".filters input, .filters select").forEach((control) => {
  control.addEventListener("input", render);
});
document.addEventListener("play", (event) => {
  if (event.target.tagName === "AUDIO") {
    document.querySelectorAll("audio").forEach((audio) => {
      if (audio !== event.target) audio.pause();
    });
  }
}, true);
applyLanguage();
render();

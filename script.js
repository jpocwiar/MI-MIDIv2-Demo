const DATA = window.SAE_LIBRARY.cards;

const I18N = {
  pl: {
    pageTitle: "MI-MIDI — interwencje w cechy SAE",
    metaDescription: "Próbki dźwiękowe dla interwencji w cechy rzadkich autoenkoderów modeli text-to-MIDI.",
    heroEyebrow: "Mechanistyczna interpretowalność modeli text-to-MIDI",
    heroSection: "Interwencje w cechy rzadkich autoenkoderów",
    heroLead:
      "Niniejsze demo udostępnia próbki dźwiękowe uzyskane w badaniach opisanych w rozdziale „Rzadkie autoenkodery” pracy magisterskiej. Materiał obejmuje cechy modeli text2midi i MIDI-LLM wraz z generacjami bazowymi i dopasowanymi kontrolami losowymi.",
    guideTitle: "Interpretacja porównania",
    guideText: "Każda karta odpowiada jednej cesze SAE wyodrębnionej w określonym modelu i warstwie. Trzy warianty w obrębie karty wykorzystują ten sam prompt i ziarno losowe.",
    guideItems: [
      ["baseline", "Generacja bazowa", "bez zmiany aktywacji"],
      ["semantic", "Interwencja w cechę SAE", "wzmocnienie wybranej cechy"],
      ["random", "Kontrola losowa", "zmiana o dopasowanej normie"],
    ],
    methodSummary: "Szczegóły metodyczne",
    method: [
      ["Siła interwencji", "Na każdym kroku generacji aktywacja cechy jest podnoszona co najmniej do percentyla p50, p75 albo p90 jej naturalnych dodatnich aktywacji. Domyślnie wyświetlany jest wariant p90."],
      ["Kontrola eksperymentalna", "Kontrola wprowadza zmianę o dopasowanej normie w kierunku ortogonalnym do kolumny dekodera cechy SAE."],
      ["Zakres materiału", "Dla dziesięciu wyróżnionych cech dostępnych jest po dziesięć promptów. Dla pozostałych cech udostępniono jeden prompt wybrany na podstawie odpowiedzi przy p90; wszystkie karty zawierają trzy poziomy interwencji."],
      ["Wyniki ilościowe", "Dla instrumentów podano obecność oraz udział nut i czasu trwania. Dla cech MusPy przedstawiono zmianę metryki względem generacji bazowej i kontroli losowej."],
      ["Opisy jakościowe", "Opisy cech użyte w ocenie pozostawiono w oryginalnym angielskim brzmieniu; zapobiega to zmianie znaczenia wskutek tłumaczenia."],
      ["Status i identyfikator", "Statusy rozróżniają replikację przyczynową, wynik przesiewowy, ocenę jakościową i brak formalnego potwierdzenia; nie stanowią jednej skali istotności. Identyfikator cechy obowiązuje wyłącznie w obrębie danego modelu i konfiguracji SAE."],
    ],
    searchPlaceholder: "Szukaj cechy, instrumentu lub metryki…",
    filterLabels: { search: "Wyszukiwanie cech", category: "Kategoria", model: "Model", status: "Status wyniku" },
    categories: [["all", "Wszystkie kategorie"], ["muspy", "Metryki MusPy"], ["instrument", "Instrumenty GM"], ["semantic", "Hipotezy jakościowe"]],
    models: [["all", "Oba modele"], ["midi_llm", "MIDI-LLM"], ["text2midi", "text2midi"]],
    statuses: [["all", "Wszystkie statusy"], ["replicated", "Zreplikowana"], ["screen_positive", "Sygnał w przesiewie"], ["reviewed", "Oceniona jakościowo"], ["not_confirmed", "Bez potwierdzenia"]],
    interventionsLink: "MI-MIDI — steering i podmiana aktywacji →",
    licenseLink: "Licencja SoundFontu",
    featuredHeading: "Wyróżnione cechy",
    featuredIntro: "Dziesięć cech o najwyraźniejszych wynikach interwencji. Dla każdej udostępniono wszystkie dziesięć promptów.",
    atlasHeading: "Pozostałe cechy",
    atlasIntro: "Pozostałe badane cechy, niezależnie od wyniku testu. Każda karta zawiera jeden wybrany prompt i wszystkie trzy poziomy interwencji.",
    groups: { muspy: "MusPy", instrument: "instrument GM", semantic: "hipoteza jakościowa" },
    status: { replicated: "zreplikowana przyczynowo", confirmed: "potwierdzona", screen_positive: "sygnał w przesiewie", reviewed: "oceniona jakościowo", awaiting_review: "do oceny", not_confirmed: "brak formalnego potwierdzenia" },
    expand: "Rozwiń",
    collapse: "Zwiń",
    featuredBadge: "wyróżniona cecha",
    layer: "warstwa",
    feature: "cecha",
    prompt: "Prompt",
    strength: "Siła",
    baseline: "Generacja bazowa",
    semantic: "Interwencja w cechę SAE",
    random: "Dopasowana kontrola losowa",
    doses: { p50: "p50 — umiarkowana", p75: "p75 — podwyższona", p90: "p90 — silna" },
    downloadMp3: "Pobierz MP3",
    downloadMidi: "Pobierz MIDI",
    selectedMeasurement: "Pomiar dla wybranego przykładu",
    evidenceDetails: "Wyniki i szczegóły cechy",
    pianoRoll: "Rolka pianolowa",
    measure: "wielkość",
    baseShort: "bazowa",
    saeShort: "SAE",
    randomShort: "losowa",
    dose: "dawka",
    deltaBase: "Δ baza",
    deltaRandom: "Δ losowa",
    presence: "obecność: bazowa / SAE / losowa",
    noteShare: "udział nut: bazowa / SAE / losowa",
    durationShare: "udział czasu: bazowa / SAE / losowa",
    qualitativeHypothesis: "Hipoteza jakościowa",
    muspyMetric: "Metryka MusPy",
    instrumentHypothesis: "Hipoteza instrumentalna",
    causalReplication: "Replikacja przyczynowa",
    possibleConfound: "Możliwe pomieszanie",
    observationalValidation: "walidacja obserwacyjna",
    safeAudit: "audyt bez ostrzeżeń",
    yes: "tak",
    no: "nie",
    expectedIncrease: "oczekiwany wzrost",
    expectedDecrease: "oczekiwany spadek",
    atP90: "Przy p90",
    expectedChange: "zmiana zgodna z hipotezą",
    versusBase: "względem bazy",
    versusRandom: "względem kontroli",
    standardized: "efekt standaryzowany",
    blindedReview: "zaślepiona ocena przyczynowa",
    saeRecognized: "rozpoznano kierunek SAE",
    randomRecognized: "wskazano kontrolę losową",
    tie: "remis",
    neither: "żaden wariant",
    unavailable: "ocena niedostępna",
    confidence: "pewność",
    carrierSigns: "prompty SAE/remis/losowa",
    activeHeldout: "aktywne przykłady odłożone",
    distractors: "dystraktory",
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
    guideTitle: "Reading the comparison",
    guideText: "Each card represents one SAE feature identified at a particular model and layer. The three variants within a card use the same prompt and random seed.",
    guideItems: [
      ["baseline", "Baseline generation", "activations left unchanged"],
      ["semantic", "SAE feature intervention", "selected feature amplified"],
      ["random", "Random control", "matched-norm perturbation"],
    ],
    methodSummary: "Methodological details",
    method: [
      ["Intervention strength", "At every generation step, feature activation is raised to at least the p50, p75, or p90 percentile of its natural positive activations. The p90 variant is displayed by default."],
      ["Experimental control", "The control applies a matched-norm perturbation in a direction orthogonal to the SAE feature decoder column."],
      ["Material included", "All ten prompts are available for each of the ten highlighted features. One prompt selected by its p90 response is provided for every remaining feature; all cards include all three intervention strengths."],
      ["Quantitative outcomes", "Instrument hypotheses report presence, note share, and duration share. MusPy features report changes relative to both the baseline and random control."],
      ["Qualitative descriptions", "Feature descriptions used in the evaluation retain their original English wording."],
      ["Status and identifier", "Statuses distinguish causal replication, a screen-positive result, qualitative review, and a lack of formal confirmation; they do not form a single significance scale. A feature identifier is specific to its model and SAE configuration."],
    ],
    searchPlaceholder: "Search by feature, instrument or metric…",
    filterLabels: { search: "Feature search", category: "Category", model: "Model", status: "Result status" },
    categories: [["all", "All categories"], ["muspy", "MusPy metrics"], ["instrument", "GM instruments"], ["semantic", "Qualitative hypotheses"]],
    models: [["all", "Both models"], ["midi_llm", "MIDI-LLM"], ["text2midi", "text2midi"]],
    statuses: [["all", "All statuses"], ["replicated", "Replicated"], ["screen_positive", "Screen-positive"], ["reviewed", "Qualitatively reviewed"], ["not_confirmed", "Not confirmed"]],
    interventionsLink: "MI-MIDI — steering and activation patching →",
    licenseLink: "SoundFont license",
    featuredHeading: "Highlighted features",
    featuredIntro: "Ten features with the clearest intervention outcomes. All ten prompts are available for each feature.",
    atlasHeading: "Remaining features",
    atlasIntro: "All remaining tested features, independently of test outcome. Each card includes one selected prompt and all three intervention strengths.",
    groups: { muspy: "MusPy", instrument: "GM instrument", semantic: "qualitative hypothesis" },
    status: { replicated: "causally replicated", confirmed: "confirmed", screen_positive: "screen-positive", reviewed: "qualitatively reviewed", awaiting_review: "awaiting review", not_confirmed: "not formally confirmed" },
    expand: "Expand",
    collapse: "Collapse",
    featuredBadge: "highlighted feature",
    layer: "layer",
    feature: "feature",
    prompt: "Prompt",
    strength: "Strength",
    baseline: "Baseline generation",
    semantic: "SAE feature intervention",
    random: "Matched random control",
    doses: { p50: "p50 — moderate", p75: "p75 — elevated", p90: "p90 — strong" },
    downloadMp3: "Download MP3",
    downloadMidi: "Download MIDI",
    selectedMeasurement: "Measurement for the selected example",
    evidenceDetails: "Feature results and details",
    pianoRoll: "Piano roll",
    measure: "measure",
    baseShort: "baseline",
    saeShort: "SAE",
    randomShort: "random",
    dose: "dose",
    deltaBase: "Δ baseline",
    deltaRandom: "Δ random",
    presence: "presence: baseline / SAE / random",
    noteShare: "note share: baseline / SAE / random",
    durationShare: "duration share: baseline / SAE / random",
    qualitativeHypothesis: "Qualitative hypothesis",
    muspyMetric: "MusPy metric",
    instrumentHypothesis: "Instrument hypothesis",
    causalReplication: "Causal replication",
    possibleConfound: "Possible confound",
    observationalValidation: "observational validation",
    safeAudit: "audit without warnings",
    yes: "yes",
    no: "no",
    expectedIncrease: "expected increase",
    expectedDecrease: "expected decrease",
    atP90: "At p90",
    expectedChange: "hypothesis-aligned change",
    versusBase: "versus baseline",
    versusRandom: "versus control",
    standardized: "standardized effect",
    blindedReview: "blinded causal review",
    saeRecognized: "SAE direction identified",
    randomRecognized: "random control selected",
    tie: "tie",
    neither: "neither variant",
    unavailable: "assessment unavailable",
    confidence: "confidence",
    carrierSigns: "carriers SAE/tie/random",
    activeHeldout: "active held-out examples",
    distractors: "distractors",
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
  document.querySelector("#methodGrid").innerHTML = t("method")
    .map(([title, body]) => `<div><b>${title}</b>${body}</div>`).join("");
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
    return `<div class="dose-wrap"><table class="dose-table"><thead><tr><th>${t("dose")}</th><th>${t("baseShort")}</th><th>${t("saeShort")}</th><th>${t("randomShort")}</th><th>${t("deltaBase")}</th><th>${t("deltaRandom")}</th></tr></thead><tbody>${rows.map((row) => `<tr><td>p${row.dose_percentile}</td><td>${fmt(row.baseline_mean)}</td><td>${fmt(row.semantic_mean)}</td><td>${fmt(row.random_mean)}</td><td>${fmt(row.semantic_minus_baseline)}</td><td>${fmt(row.semantic_minus_random)}</td></tr>`).join("")}</tbody></table></div>`;
  }
  return `<div class="dose-wrap"><table class="dose-table"><thead><tr><th>${t("dose")}</th><th>${t("presence")}</th><th>${t("noteShare")}</th><th>${t("durationShare")}</th></tr></thead><tbody>${rows.map((row) => `<tr><td>p${row.dose_percentile}</td><td>${pct(row.baseline_presence_rate, 0)} / ${pct(row.semantic_presence_rate, 0)} / ${pct(row.random_presence_rate, 0)}</td><td>${pct(row.baseline_note_share_mean)} / ${pct(row.semantic_note_share_mean)} / ${pct(row.random_note_share_mean)}</td><td>${pct(row.baseline_duration_share_mean)} / ${pct(row.semantic_duration_share_mean)} / ${pct(row.random_duration_share_mean)}</td></tr>`).join("")}</tbody></table></div>`;
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
      ? `<div class="numbers">${t("blindedReview")}: ${verdict}, ${t("confidence")} ${review.confidence}/5 · SAE ${fmt(review.semantic_match_mean)} vs ${t("randomShort")} ${fmt(review.random_match_mean)} · Δ=${fmt(review.paired_match_difference)} · ${t("carrierSigns")}: ${review.n_carrier_semantic_higher}/${review.n_carrier_equal}/${review.n_carrier_random_higher}</div>`
      : `<div class="numbers">${t("blindedReview")}: ${verdict}</div>`;
    return `<div class="hypothesis semantic"><b>${t("qualitativeHypothesis")} · ${esc(scopeName(evidence))}</b><div class="description">${esc(evidence.label)}</div><div class="description">${esc(evidence.description)}</div>${evidence.possible_confound ? `<div class="confound">${t("possibleConfound")}: ${esc(evidence.possible_confound)}</div>` : ""}<div class="numbers">${t("observationalValidation")}: ${evidence.heldout_hits}/4 · ${t("safeAudit")}: ${evidence.semantic_safe ? t("yes") : t("no")}</div>${causal}</div>`;
  }
  if (evidence.type === "muspy") {
    const prediction = Number(evidence.expected_sign) > 0 ? t("expectedIncrease") : t("expectedDecrease");
    return `<div class="hypothesis muspy"><b>${t("muspyMetric")} · ${esc(metricName(evidence))}</b><div>${prediction}. ${t("atP90")}: ${t("baseShort")} ${fmt(evidence.baseline_mean)}, SAE ${fmt(evidence.semantic_mean)}, ${t("randomShort")} ${fmt(evidence.random_mean)}.</div><div class="numbers">${t("expectedChange")}: ${t("versusBase")} ${fmt(evidence.effect_vs_baseline)}, ${t("versusRandom")} ${fmt(evidence.effect_vs_random)} · ${t("standardized")} ${fmt(evidence.standardized_effect)} · p=${fmt(evidence.p, 4)} · q=${fmt(evidence.q, 4)} · r val.=${fmt(evidence.observational)} · r test=${fmt(evidence.heldout)}</div>${doseTable(evidence)}</div>`;
  }
  const heading = evidence.type === "replication" ? t("causalReplication") : t("instrumentHypothesis");
  const observational = evidence.type === "instrument"
    ? `<div class="numbers">${t("activeHeldout")}: ${pct(evidence.observational, 0)} · ${t("distractors")}: ${pct(evidence.heldout, 0)}</div>` : "";
  return `<div class="hypothesis ${evidence.type}"><b>${heading} · ${esc(evidence.label)}</b><div>${t("atP90")} — ${t("presence")}: ${pct(evidence.baseline_presence, 0)} / ${pct(evidence.semantic_presence, 0)} / ${pct(evidence.random_presence, 0)}; ${t("noteShare")}: ${pct(evidence.baseline_note_share)} / ${pct(evidence.semantic_note_share)} / ${pct(evidence.random_note_share)}; ${t("durationShare")}: ${pct(evidence.baseline_duration_share)} / ${pct(evidence.semantic_duration_share)} / ${pct(evidence.random_duration_share)}.</div><div class="numbers">Δ ${language === "pl" ? "udziału nut" : "note share"}: SAE−${t("baseShort")} ${pct(evidence.note_share_effect_vs_baseline)}, SAE−${t("randomShort")} ${pct(evidence.note_share_effect_vs_random)} · Δ ${language === "pl" ? "udziału czasu" : "duration share"}: SAE−${t("baseShort")} ${pct(evidence.duration_share_effect_vs_baseline)}, SAE−${t("randomShort")} ${pct(evidence.duration_share_effect_vs_random)} · p=${fmt(evidence.p, 4)}${evidence.q !== undefined ? ` · q=${fmt(evidence.q, 4)}` : ""}${evidence.confirmed ? ` · ${t("confirmed")}` : ""}</div>${observational}${doseTable(evidence)}</div>`;
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

function promptCountLabel(count) {
  if (language === "pl") return count === 1 ? "1 prompt" : `${count} promptów`;
  return count === 1 ? "1 prompt" : `${count} prompts`;
}

function cardHtml(card) {
  const badges = card.groups.map((group) => `<span class="badge ${group}">${t("groups")[group]}</span>`).join("");
  const scope = card.evidence.find((item) => item.type === "semantic");
  return `<details class="card ${card.top_feature ? "featured" : ""}" data-id="${esc(card.candidate_id)}" ${card.feature_id === 995 ? "open" : ""}><summary class="card-head"><span class="head-main"><span class="card-title">${esc(displayTitle(card))}</span><span class="identity">${modelName(card.model)} · ${t("layer")} ${card.layer} · ${t("feature")} ${card.feature_id}</span><span class="badges">${card.top_feature ? `<span class="badge featured">${t("featuredBadge")}</span>` : ""}${badges}<span class="badge prompt-count">${promptCountLabel(card.carriers.length)}</span>${scope ? `<span class="badge">${esc(scopeName(scope))}</span>` : ""}</span></span><span class="head-side"><span class="status ${card.status}">${t("status")[card.status]}</span><span class="expand-label" aria-hidden="true">${t("expand")}</span></span></summary><div class="card-body"></div></details>`;
}

function cardBodyHtml(card) {
  const promptOptions = card.carriers.map((carrier) => {
    const label = card.carriers.length === 1
      ? `${t("prompt")} ${carrier.prompt_idx + 1}`
      : `${carrier.prompt_idx + 1}/10`;
    return `<option value="${carrier.prompt_idx}" ${carrier.prompt_idx === card.best_prompt ? "selected" : ""}>${label}</option>`;
  }).join("");
  const doses = ["p50", "p75", "p90"].map((dose) => `<option value="${dose}"${dose === "p90" ? " selected" : ""}>${esc(t("doses")[dose])}</option>`).join("");
  return `<div class="listen"><div class="listen-controls"><label>${t("prompt")} <select class="prompt">${promptOptions}</select></label><label>${t("strength")} <select class="dose">${doses}</select></label></div><div class="prompt-display"><b>${t("prompt")}</b><span class="prompt-text"></span></div><div class="compare">${sampleHtml("baseline", t("baseline"))}${sampleHtml("semantic", t("semantic"))}${sampleHtml("random", t("random"))}</div><details class="selected-results"><summary>${t("selectedMeasurement")}</summary><div class="carrier-outcomes"></div></details></div><details class="evidence-panel"><summary>${t("evidenceDetails")}</summary><div class="hypotheses">${card.evidence.map(evidenceHtml).join("")}</div></details>`;
}

function updateMedia(element, card) {
  const promptIndex = element.querySelector(".prompt")?.value;
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
  element.querySelector(".prompt").addEventListener("change", () => updateMedia(element, card));
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

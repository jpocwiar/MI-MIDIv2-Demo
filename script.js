const DATA = window.SAE_LIBRARY.cards;

const I18N = {
  pl: {
    pageTitle: "Atlas cech SAE — muzyka symboliczna",
    heroEyebrow: "Mechanistyczna interpretowalność generacji MIDI",
    heroTitle: "Atlas interwencji w cechy SAE",
    heroLead:
      "Porównaj tę samą generację bez interwencji, po wzmocnieniu kierunku cechy oraz po równie silnej zmianie w losowym kierunku. Wyróżnione karty pokazują najbardziej czytelne studia przypadków, a pełny atlas obejmuje wszystkie badane cechy.",
    statFeatures: "unikalnych cech",
    statMuspy: "cech wybranych przez MusPy",
    statInstruments: "cech instrumentacyjnych",
    statQualitative: "hipotez jakościowych",
    statDoses: "poziomy siły interwencji",
    methodSummary: "Jak czytać porównania?",
    method: [
      ["Generacja bazowa", "Model generuje bez zmiany aktywacji. Stanowi punkt odniesienia dla tego samego promptu i ziarna."],
      ["Kierunek cechy SAE", "Na każdym kroku aktywacja jest podnoszona co najmniej do percentyla p50, p75 albo p90 jej naturalnych dodatnich aktywacji."],
      ["Kontrola losowa", "Do modelu wprowadzana jest zmiana o dopasowanej normie, ale w kierunku ortogonalnym do kolumny dekodera cechy."],
      ["Wielkość efektu", "Dla instrumentów pokazano obecność oraz udział nut i czasu trwania. Dla MusPy podano zmianę metryki względem generacji bazowej i kontroli losowej."],
      ["Najlepszy prompt", "Domyślny prompt wybrano po analizie jako ten, na którym cecha najsilniej realizowała oczekiwany kierunek zmiany względem obu kontroli."],
      ["Hipotezy jakościowe", "Zamrożone opisy cech pozostawiono w ich oryginalnym angielskim brzmieniu, aby tłumaczenie nie zmieniało treści ocenianej w eksperymencie."],
    ],
    searchPlaceholder: "Szukaj cechy, instrumentu lub metryki…",
    categories: [["all", "Wszystkie kategorie"], ["muspy", "Metryki MusPy"], ["instrument", "Instrumenty GM"], ["semantic", "Hipotezy jakościowe"]],
    models: [["all", "Oba modele"], ["midi_llm", "MIDI-LLM"], ["text2midi", "text2midi"]],
    statuses: [["all", "Wszystkie statusy"], ["replicated", "Zreplikowana"], ["screen_positive", "Sygnał w przesiewie"], ["reviewed", "Oceniona jakościowo"], ["not_confirmed", "Bez potwierdzenia"]],
    availabilityNote: "* Dla tej cechy udostępniono jeden, najlepiej sterujący prompt; wszystkie trzy poziomy siły interwencji są dostępne.",
    exportButton: "Eksportuj moje oceny (JSON)",
    footerAudio:
      'Audio zsyntetyzowano za pomocą FluidSynth i MuseScore_General.sf3 0.2, udostępnionego na licencji MIT. Każdy plik normalizowano niezależnie, dlatego głośność nie jest porównywalnym wynikiem. Pełne informacje zawiera <a href="SOUNDFONT_LICENSE.md">nota licencyjna</a>.',
    footerIdentity:
      "Identyfikator liczbowy cechy ma znaczenie wyłącznie razem z modelem i checkpointem SAE. „Sygnał w przesiewie” nie oznacza formalnego potwierdzenia po korekcie wielokrotnych porównań.",
    featuredHeading: "Wyróżnione studia przypadków",
    featuredIntro: "Przykłady wybrane ze względu na czytelność efektu; pełne statystyki obejmują wszystkie dostępne prompty.",
    atlasHeading: "Pozostałe cechy",
    atlasIntro: "Pełny materiał przesiewowy, niezależnie od wyniku testu.",
    groups: { muspy: "MusPy", instrument: "instrument GM", semantic: "hipoteza jakościowa" },
    status: { replicated: "zreplikowana przyczynowo", confirmed: "potwierdzona", screen_positive: "sygnał w przesiewie", reviewed: "oceniona jakościowo", awaiting_review: "do oceny", not_confirmed: "brak formalnego potwierdzenia" },
    expand: "Rozwiń",
    collapse: "Zwiń",
    featuredBadge: "wyróżniony przykład",
    layer: "warstwa",
    feature: "cecha",
    prompt: "Prompt",
    strength: "Siła",
    baseline: "Bez interwencji",
    semantic: "Kierunek cechy SAE",
    random: "Dopasowany kierunek losowy",
    downloadMp3: "Pobierz MP3",
    downloadMidi: "Pobierz MIDI",
    selectedMeasurement: "Pomiar dla wybranego przykładu",
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
    ratingSummary: "Moja ocena odsłuchowa (zapisywana tylko w tej przeglądarce)",
    ratingPlaceholder: "— wybierz ocenę —",
    ratingOptions: [["aligned", "zmiana zgodna z hipotezą"], ["partial", "częściowo zgodna"], ["ambiguous", "niejednoznaczna"], ["misaligned", "niezgodna"], ["degenerate", "głównie degeneracja"]],
    notePlaceholder: "Notatka…",
    featureCount: "cech",
  },
  en: {
    pageTitle: "SAE feature atlas — symbolic music",
    heroEyebrow: "Mechanistic interpretability of MIDI generation",
    heroTitle: "SAE feature intervention atlas",
    heroLead:
      "Compare the same generation without intervention, after amplifying a learned feature direction, and after an equally strong change in a random direction. Highlighted cards show the clearest case studies; the full atlas includes every tested feature.",
    statFeatures: "unique features",
    statMuspy: "MusPy-selected features",
    statInstruments: "instrument features",
    statQualitative: "qualitative hypotheses",
    statDoses: "intervention strengths",
    methodSummary: "How should the comparisons be read?",
    method: [
      ["Baseline generation", "The model generates without changing its activations. This is the reference for the same prompt and random seed."],
      ["SAE feature direction", "At each step, feature activation is raised to at least the p50, p75 or p90 percentile of its natural positive activations."],
      ["Random control", "The model receives a matched-norm change in a direction orthogonal to the feature decoder column."],
      ["Effect size", "Instrument hypotheses report presence, note share and duration share. MusPy hypotheses report change relative to both baseline and random control."],
      ["Strongest carrier", "The default carrier was selected after analysis as the prompt on which the feature most strongly produced the expected change relative to both controls."],
      ["Qualitative hypotheses", "Frozen feature descriptions are shown in their original English wording so that translation cannot alter what was evaluated in the experiment."],
    ],
    searchPlaceholder: "Search by feature, instrument or metric…",
    categories: [["all", "All categories"], ["muspy", "MusPy metrics"], ["instrument", "GM instruments"], ["semantic", "Qualitative hypotheses"]],
    models: [["all", "Both models"], ["midi_llm", "MIDI-LLM"], ["text2midi", "text2midi"]],
    statuses: [["all", "All statuses"], ["replicated", "Replicated"], ["screen_positive", "Screen-positive"], ["reviewed", "Qualitatively reviewed"], ["not_confirmed", "Not confirmed"]],
    availabilityNote: "* One strongest carrier prompt is available for this feature; all three intervention strengths are included.",
    exportButton: "Export my ratings (JSON)",
    footerAudio:
      'Audio was synthesized with FluidSynth and MuseScore_General.sf3 0.2, distributed under the MIT license. Files were normalized independently, so loudness is not a comparable outcome. See the <a href="SOUNDFONT_LICENSE.md">full attribution notice</a>.',
    footerIdentity:
      "A numeric feature identifier is meaningful only together with its model and SAE checkpoint. “Screen-positive” does not mean formal confirmation after multiple-comparison correction.",
    featuredHeading: "Highlighted case studies",
    featuredIntro: "Examples selected for clarity of the effect; aggregate statistics use every available carrier prompt.",
    atlasHeading: "Remaining features",
    atlasIntro: "The complete screening material, independently of test outcome.",
    groups: { muspy: "MusPy", instrument: "GM instrument", semantic: "qualitative hypothesis" },
    status: { replicated: "causally replicated", confirmed: "confirmed", screen_positive: "screen-positive", reviewed: "qualitatively reviewed", awaiting_review: "awaiting review", not_confirmed: "not formally confirmed" },
    expand: "Expand",
    collapse: "Collapse",
    featuredBadge: "highlighted example",
    layer: "layer",
    feature: "feature",
    prompt: "Prompt",
    strength: "Strength",
    baseline: "No intervention",
    semantic: "SAE feature direction",
    random: "Matched random direction",
    downloadMp3: "Download MP3",
    downloadMidi: "Download MIDI",
    selectedMeasurement: "Measurement for the selected example",
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
    unavailable: "rating unavailable",
    confidence: "confidence",
    carrierSigns: "carriers SAE/tie/random",
    activeHeldout: "active held-out examples",
    distractors: "distractors",
    confirmed: "confirmed",
    ratingSummary: "My listening assessment (stored only in this browser)",
    ratingPlaceholder: "— select a rating —",
    ratingOptions: [["aligned", "change aligned with the hypothesis"], ["partial", "partly aligned"], ["ambiguous", "ambiguous"], ["misaligned", "not aligned"], ["degenerate", "mostly degeneration"]],
    notePlaceholder: "Note…",
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
let ratings = loadRatings();

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

function loadRatings() {
  try {
    return JSON.parse(localStorage.getItem("sae-demo-ratings-v2") || "{}");
  } catch (_error) {
    return {};
  }
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
  document.querySelectorAll("[data-text]").forEach((element) => {
    const value = t(element.dataset.text);
    if (["footerAudio", "footerIdentity"].includes(element.dataset.text)) element.innerHTML = value;
    else element.textContent = value;
  });
  document.querySelector("#methodGrid").innerHTML = t("method")
    .map(([title, body]) => `<div><b>${title}</b>${body}</div>`).join("");
  document.querySelector("#search").placeholder = t("searchPlaceholder");
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
  return `<b>${t("selectedMeasurement")}</b><table class="outcome-table"><thead><tr><th>${t("measure")}</th><th>${t("baseShort")}</th><th>${t("saeShort")}</th><th>${t("randomShort")}</th></tr></thead><tbody>${rows.join("")}</tbody></table>`;
}

function sampleHtml(kind, title) {
  return `<div class="sample ${kind}-sample" data-kind="${kind}"><h3>${title}</h3><audio controls preload="none"></audio><a class="roll-link" target="_blank"><img class="roll" loading="lazy" alt="Piano roll"></a><div class="downloads"><a class="mp3" download>${t("downloadMp3")}</a><a class="midi" download>${t("downloadMidi")}</a></div></div>`;
}

function cardHtml(card) {
  const limited = card.carriers.length === 1;
  const badges = card.groups.map((group) => `<span class="badge ${group}">${t("groups")[group]}</span>`).join("");
  const scope = card.evidence.find((item) => item.type === "semantic");
  return `<details class="card ${card.top_feature ? "featured" : ""}" data-id="${esc(card.candidate_id)}" ${card.feature_id === 995 ? "open" : ""}><summary class="card-head"><span class="head-main"><span class="identity">${esc(card.model)} · ${t("layer")} ${card.layer} · ${t("feature")} ${card.feature_id}${limited ? '<span class="limited-mark"> *</span>' : ""}</span><span class="card-title">${esc(displayTitle(card))}</span><span class="badges">${card.top_feature ? `<span class="badge featured">${t("featuredBadge")}</span>` : ""}${badges}${scope ? `<span class="badge">${esc(scopeName(scope))}</span>` : ""}</span></span><span class="head-side"><span class="status ${card.status}">${t("status")[card.status]}</span><span class="expand-label" aria-hidden="true">${t("expand")}</span></span></summary><div class="card-body"></div></details>`;
}

function ratingOptions() {
  return `<option value="">${t("ratingPlaceholder")}</option>${t("ratingOptions").map(([value, label]) => `<option value="${value}">${label}</option>`).join("")}`;
}

function cardBodyHtml(card) {
  const promptOptions = card.carriers.map((carrier) => {
    const label = card.carriers.length === 1
      ? `${t("prompt")} ${carrier.prompt_idx + 1}*`
      : `${carrier.prompt_idx + 1}/10`;
    return `<option value="${carrier.prompt_idx}" ${carrier.prompt_idx === card.best_prompt ? "selected" : ""}>${label}</option>`;
  }).join("");
  return `<div class="hypotheses">${card.evidence.map(evidenceHtml).join("")}</div><div class="listen"><div class="listen-controls"><label>${t("prompt")} <select class="prompt">${promptOptions}</select></label><label>${t("strength")} <select class="dose"><option value="p50">p50</option><option value="p75">p75</option><option value="p90" selected>p90</option></select></label><span class="prompt-text"></span></div><div class="carrier-outcomes"></div><div class="compare">${sampleHtml("baseline", t("baseline"))}${sampleHtml("semantic", t("semantic"))}${sampleHtml("random", t("random"))}</div></div><details class="rating"><summary>${t("ratingSummary")}</summary><div class="rating-row"><select class="verdict">${ratingOptions()}</select><textarea class="note" placeholder="${t("notePlaceholder")}"></textarea></div></details>`;
}

function updateMedia(element, card) {
  const promptIndex = element.querySelector(".prompt")?.value;
  const dose = element.querySelector(".dose")?.value;
  if (promptIndex === undefined) return;
  const media = mediaFor(card, promptIndex, dose);
  element.querySelector(".prompt-text").textContent = media?.prompt || "";
  element.querySelector(".carrier-outcomes").innerHTML = carrierOutcomeHtml(card, promptIndex, dose);
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

function restoreRating(element, card) {
  const value = ratings[card.candidate_id] || {};
  element.querySelector(".verdict").value = value.verdict || "";
  element.querySelector(".note").value = value.note || "";
  const save = () => {
    ratings[card.candidate_id] = {
      verdict: element.querySelector(".verdict").value,
      note: element.querySelector(".note").value,
      updated_at: new Date().toISOString(),
    };
    try {
      localStorage.setItem("sae-demo-ratings-v2", JSON.stringify(ratings));
    } catch (_error) {
      // Ratings remain available in memory for the current session.
    }
  };
  element.querySelector(".verdict").onchange = save;
  element.querySelector(".note").oninput = save;
}

function hydrateCard(element, card) {
  if (element.dataset.hydrated === "true") return;
  element.querySelector(".card-body").innerHTML = cardBodyHtml(card);
  element.dataset.hydrated = "true";
  element.querySelector(".prompt").addEventListener("change", () => updateMedia(element, card));
  element.querySelector(".dose").addEventListener("change", () => updateMedia(element, card));
  updateMedia(element, card);
  restoreRating(element, card);
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
document.querySelector("#export").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify({ schema_version: 1, exported_at: new Date().toISOString(), ratings }, null, 2)], { type: "application/json" });
  const anchor = document.createElement("a");
  anchor.href = URL.createObjectURL(blob);
  anchor.download = "sae-demo-listening-ratings.json";
  anchor.click();
  URL.revokeObjectURL(anchor.href);
});

applyLanguage();
render();

const features = [
  {
    id: "electric-piano",
    tabLabel: "Electric Piano 1",
    tabMeta: "instrument · feature 995",
    kind: "Instrument feature",
    status: "Exploratory",
    title: "Electric Piano 1",
    identity: "text2midi · decoder layer 16 · SAE feature 995",
    hypothesis:
      "Amplifying this feature should increase the contribution of GM program 4 (Electric Piano 1), rather than merely make it appear once.",
    prompt: "A simple piano piece with a clear melody",
    path: "samples/electric-piano",
    aggregateLabel: "All 10 carrier prompts",
    metrics: [
      ["Target-program note share", "0.0%", "55.0%", "0.0%"],
      ["Target-program duration share", "0.0%", "60.9%", "0.0%"],
    ],
    aggregate:
      "Across all ten prompts at p90, Electric Piano 1 accounted for 18.1% of notes and 22.7% of note duration under the feature intervention, versus 0.3% / 2.2% at baseline and 0.7% / 0.8% for the random control.",
    caveat:
      "Screen-positive, but not significant after correction over the full instrument screen (raw one-sided p = 0.031 for the continuous contrasts; adjusted q = 0.844).",
  },
  {
    id: "pitch-entropy",
    tabLabel: "Pitch diversity",
    tabMeta: "MusPy · feature 1015",
    kind: "MusPy feature",
    status: "Exploratory",
    title: "Pitch entropy",
    identity: "text2midi · decoder layer 8 · SAE feature 1015",
    hypothesis:
      "Amplifying this feature should broaden the distribution of generated pitches, measured as higher MusPy pitch entropy.",
    prompt: "A short piece for solo piano with gentle phrasing",
    path: "samples/pitch-entropy",
    aggregateLabel: "All 10 carrier prompts",
    metrics: [["Pitch entropy", "4.216", "5.121", "3.807"]],
    aggregate:
      "Across all ten prompts at p90, mean pitch entropy was 4.509 with the feature intervention, 4.238 at baseline and 4.090 for the random control: +0.271 versus baseline and +0.418 versus random.",
    caveat:
      "The direction agrees with the held-out observational correlation, but remains exploratory after correction across the MusPy hypotheses (raw p = 0.030; adjusted q = 0.727).",
  },
  {
    id: "sawtooth",
    tabLabel: "Sawtooth lead",
    tabMeta: "instrument · feature 3340",
    kind: "Instrument feature",
    status: "Replicated",
    title: "Lead 2 (sawtooth)",
    identity: "text2midi · decoder layer 13 · SAE feature 3340",
    hypothesis:
      "Amplifying this feature should induce GM program 81, Lead 2 (sawtooth), associated observationally with electronic instrumentation.",
    prompt: "A calm instrumental piece for piano and flute",
    path: "samples/sawtooth",
    aggregateLabel: "All 10 new carrier prompts",
    metrics: [
      ["Target-program note share", "0.0%", "11.1%", "0.0%"],
      ["Target-program duration share", "0.0%", "25.0%", "0.0%"],
    ],
    aggregate:
      "On ten new prompts at p90, the sawtooth program appeared in 6/10 feature-intervention generations and 0/10 random controls. Its mean share was 6.6% of notes and 7.7% of note duration, versus zero in both controls.",
    caveat:
      "This induction independently replicated the earlier result (exact one-sided p = 0.0156). The program is reliably introduced, but does not dominate every generated excerpt.",
  },
  {
    id: "pitch-classes",
    tabLabel: "Pitch classes",
    tabMeta: "MusPy · feature 5166",
    kind: "MusPy feature",
    status: "Exploratory",
    title: "Pitch-class diversity",
    identity: "text2midi · decoder layer 8 · SAE feature 5166",
    hypothesis:
      "Amplifying this feature should increase the number and entropy of pitch classes used in the generated passage.",
    prompt: "A classical-style piano composition with balanced dynamics",
    path: "samples/pitch-classes",
    aggregateLabel: "All 10 carrier prompts",
    metrics: [
      ["Pitch classes used", "9", "12", "11"],
      ["Pitch-class entropy", "2.717", "3.464", "3.085"],
    ],
    aggregate:
      "Across all ten prompts at p90, the mean number of pitch classes was 10.0 with the feature intervention, 9.9 at baseline and 8.9 for the random control. Mean pitch-class entropy was 2.766, 2.748 and 2.651 respectively.",
    caveat:
      "The selected carrier shows the intended change against both controls, but the aggregate effects are modest and do not survive correction (adjusted q = 0.750 and 0.881).",
  },
  {
    id: "triple-grid",
    tabLabel: "Triplet drum grid",
    tabMeta: "MusPy · feature 6981",
    kind: "MusPy feature",
    status: "Exploratory",
    title: "Lower triplet-grid consistency",
    identity: "MIDI-LLM · layer 2 · SAE feature 6981",
    hypothesis:
      "Amplifying this feature should reduce the fraction of drum events aligned with a triplet subdivision grid.",
    prompt: "A jazz trio piece with piano, bass, and drums",
    path: "samples/triple-grid",
    aggregateLabel: "2 prompts with defined drum metrics",
    metrics: [["Triplet-grid drum rate", "9.5%", "2.9%", "13.3%"]],
    aggregate:
      "Among the two prompt triplets containing sufficient drum events, the mean triplet-grid rate fell from 5.8% at baseline to 3.1% under the feature intervention, compared with 7.2% for the random control.",
    caveat:
      "This is a directionally clear but very small exploratory subset: the test is not significant after correction (adjusted q = 0.948).",
  },
  {
    id: "nylon-guitar",
    tabLabel: "Nylon guitar",
    tabMeta: "instrument · feature 6424",
    kind: "Instrument feature",
    status: "Exploratory",
    title: "Acoustic Guitar (nylon)",
    identity: "MIDI-LLM · layer 7 · SAE feature 6424",
    hypothesis:
      "Amplifying this feature should introduce GM program 24, Acoustic Guitar (nylon), into the generated arrangement.",
    prompt: "A simple piano piece with a clear melody",
    path: "samples/nylon-guitar",
    aggregateLabel: "All 10 carrier prompts",
    metrics: [
      ["Target-program note share", "0.0%", "10.5%", "0.0%"],
      ["Target-program duration share", "0.0%", "10.8%", "0.0%"],
    ],
    aggregate:
      "Across ten prompts at p90, the target guitar appeared in 2/10 feature generations and 0/10 in either control. Its mean share was 9.3% of notes and 8.7% of note duration, versus zero in both controls.",
    caveat:
      "The effect is concentrated in two carriers and was not confirmed in the instrument screen (raw p = 0.250; adjusted q = 1.000).",
  },
  {
    id: "continuous-drums",
    tabLabel: "Continuous drums",
    tabMeta: "qualitative · feature 552",
    kind: "Qualitative feature",
    status: "Blinded-review candidate",
    title: "Dense, near-continuous percussion",
    identity: "text2midi · decoder layer 2 · SAE feature 552",
    hypothesis:
      "Amplifying this feature should produce a dense and nearly continuous drum or percussion texture.",
    prompt: "A chamber music piece with violin and cello",
    path: "samples/continuous-drums",
    aggregateLabel: "5 blinded review prompts",
    metrics: [
      ["Description match (1–5)", "—", "5", "1"],
      ["Visible degeneration (1–5)", "—", "2", "1"],
    ],
    aggregate:
      "In the blinded piano-roll review, the SAE direction scored 3.6/5 for description match versus 1.6/5 for the random direction and was rated higher on four of five prompts.",
    caveat:
      "This is a top per-feature result from an exploratory 48-feature panel whose aggregate result was null. The earlier semantic-safety audit flagged possible token or syntax concentration.",
  },
  {
    id: "multi-timbral",
    tabLabel: "Many instruments",
    tabMeta: "qualitative · feature 4021",
    kind: "Qualitative feature",
    status: "Blinded-review candidate",
    title: "Rich, multi-timbral instrumentation",
    identity: "text2midi · decoder layer 2 · SAE feature 4021",
    hypothesis:
      "Amplifying this feature should increase the variety of melodic instruments participating in the arrangement.",
    prompt: "A chamber music piece with violin and cello",
    path: "samples/multi-timbral",
    aggregateLabel: "5 blinded review prompts",
    metrics: [
      ["Description match (1–5)", "—", "5", "2"],
      ["Visible degeneration (1–5)", "—", "1", "2"],
    ],
    aggregate:
      "In the blinded review, the SAE direction scored 4.0/5 for description match versus 2.4/5 for random and was rated higher on four of five prompts.",
    caveat:
      "This is an exploratory per-feature result rather than a corrected discovery. The earlier semantic-safety audit flagged possible token or syntax concentration.",
  },
  {
    id: "timpani-texture",
    tabLabel: "Sparse timpani",
    tabMeta: "qualitative · feature 4606",
    kind: "Qualitative feature",
    status: "Blinded-review candidate",
    title: "Sparse texture with recurring timpani",
    identity: "text2midi · decoder layer 16 · SAE feature 4606",
    hypothesis:
      "Amplifying this feature should produce a sparse texture containing recurring low, timpani-like percussion.",
    prompt: "A light orchestral sketch with strings and woodwinds",
    path: "samples/timpani-texture",
    aggregateLabel: "5 blinded review prompts",
    metrics: [
      ["Description match (1–5)", "—", "5", "2"],
      ["Visible degeneration (1–5)", "—", "2", "2"],
    ],
    aggregate:
      "In the blinded review, the SAE direction scored 3.4/5 for description match versus 2.0/5 for random. It was rated higher on three prompts and tied on two.",
    caveat:
      "This is an exploratory per-feature result from a panel with no aggregate causal effect. The semantic-safety audit flagged a possible token or syntax explanation.",
  },
  {
    id: "drum-layer",
    tabLabel: "Drum-kit layer",
    tabMeta: "qualitative · feature 6671",
    kind: "Qualitative feature",
    status: "Blinded-review candidate",
    title: "Prominent, continuous drum-kit layer",
    identity: "MIDI-LLM · layer 2 · SAE feature 6671",
    hypothesis:
      "Amplifying this feature should add a prominent and continuous drum-kit layer relative to the melodic material.",
    prompt: "A solo guitar piece with a smooth melodic line",
    path: "samples/drum-layer",
    aggregateLabel: "5 blinded review prompts",
    metrics: [
      ["Description match (1–5)", "—", "5", "1"],
      ["Visible degeneration (1–5)", "—", "2", "1"],
    ],
    aggregate:
      "In the blinded review, the SAE direction scored 3.6/5 for description match versus 2.4/5 for random. It was rated higher on three prompts, tied on one and lower on one.",
    caveat:
      "This is exploratory and the semantic-safety audit flagged token concentration plus a note-count imbalance. The full qualitative panel did not show an aggregate effect.",
  },
];

const conditions = [
  { id: "baseline", eyebrow: "Reference", title: "Baseline", className: "baseline-sample" },
  { id: "feature", eyebrow: "Target intervention", title: "SAE feature", className: "feature-sample" },
  { id: "random", eyebrow: "Matched control", title: "Random direction", className: "random-sample" },
];

const tabs = document.querySelector("#featureTabs");
const title = document.querySelector("#featureTitle");
const kind = document.querySelector("#featureKind");
const status = document.querySelector("#featureStatus");
const identity = document.querySelector("#featureId");
const hypothesis = document.querySelector("#featureHypothesis");
const prompt = document.querySelector("#featurePrompt");
const comparison = document.querySelector("#comparisonGrid");
const metrics = document.querySelector("#sampleMetrics");
const aggregateLabel = document.querySelector("#aggregateLabel");
const aggregate = document.querySelector("#aggregateEvidence");
const caveat = document.querySelector("#featureCaveat");

let activeFeature = features[0];

function renderTabs() {
  tabs.innerHTML = "";
  features.forEach((feature) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "feature-tab";
    button.dataset.feature = feature.id;
    button.innerHTML = `<strong>${feature.tabLabel}</strong><span>${feature.tabMeta}</span>`;
    button.addEventListener("click", () => {
      activeFeature = feature;
      renderFeature();
    });
    tabs.append(button);
  });
}

function renderSamples(feature) {
  comparison.innerHTML = conditions
    .map(
      (condition) => `
        <article class="sample-card ${condition.className}">
          <header>
            <span>${condition.eyebrow}</span>
            <h3>${condition.title}</h3>
          </header>
          <a
            class="roll-link"
            href="${feature.path}/${condition.id}.webp"
            target="_blank"
            title="Open the piano roll at full resolution"
          >
            <img
              class="piano-roll"
              src="${feature.path}/${condition.id}.webp"
              alt="Instrument-coloured piano roll for the ${condition.title.toLowerCase()} condition"
            >
          </a>
          <div class="sample-controls">
            <audio controls preload="metadata" src="${feature.path}/${condition.id}.mp3"></audio>
            <div class="downloads">
              <a href="${feature.path}/${condition.id}.mp3" download>MP3</a>
              <a href="${feature.path}/${condition.id}.mid" download>MIDI</a>
            </div>
          </div>
        </article>`,
    )
    .join("");
}

function renderFeature() {
  tabs.querySelectorAll(".feature-tab").forEach((button) => {
    const selected = button.dataset.feature === activeFeature.id;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  title.textContent = activeFeature.title;
  kind.textContent = activeFeature.kind;
  status.textContent = activeFeature.status;
  identity.textContent = activeFeature.identity;
  hypothesis.textContent = activeFeature.hypothesis;
  prompt.textContent = `“${activeFeature.prompt}”`;
  aggregateLabel.textContent = activeFeature.aggregateLabel;
  aggregate.textContent = activeFeature.aggregate;
  caveat.textContent = activeFeature.caveat;
  metrics.innerHTML = activeFeature.metrics
    .map(
      ([label, baseline, feature, random]) => `
        <tr>
          <td>${label}</td>
          <td>${baseline}</td>
          <td>${feature}</td>
          <td>${random}</td>
        </tr>`,
    )
    .join("");
  renderSamples(activeFeature);
}

renderTabs();
renderFeature();

const libraryCards = window.SAE_LIBRARY?.cards ?? [];
const librarySearch = document.querySelector("#librarySearch");
const libraryGroup = document.querySelector("#libraryGroup");
const libraryModel = document.querySelector("#libraryModel");
const libraryCount = document.querySelector("#libraryCount");
const libraryList = document.querySelector("#libraryList");
const libraryBadges = document.querySelector("#libraryBadges");
const libraryTitle = document.querySelector("#libraryFeatureTitle");
const libraryId = document.querySelector("#libraryFeatureId");
const libraryPrompt = document.querySelector("#libraryPrompt");
const libraryDoses = document.querySelector("#libraryDoses");
const libraryPromptText = document.querySelector("#libraryPromptText");
const libraryComparison = document.querySelector("#libraryComparison");
const libraryEvidence = document.querySelector("#libraryEvidence");

const statusLabels = {
  replicated: "Replicated",
  screen_positive: "Screen-positive",
  reviewed: "Qualitative review",
  not_confirmed: "Not confirmed",
};

let selectedLibraryCard = libraryCards.find((card) => card.feature_id === 995) ?? libraryCards[0];
let selectedLibraryDose = "p90";
let selectedLibraryPrompt = selectedLibraryCard?.best_prompt ?? 0;

function escapeHtml(value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[character],
  );
}

function number(value, digits = 3) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return "—";
  return Number(value).toFixed(digits);
}

function percent(value, digits = 1) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return "—";
  return `${(100 * Number(value)).toFixed(digits)}%`;
}

function evidenceHtml(item) {
  if (item.type === "semantic") {
    const review = item.causal_review;
    const reviewText = review
      ? `Blinded causal review: feature ${number(review.semantic_match_mean, 1)}/5 vs random ${number(review.random_match_mean, 1)}/5; difference ${number(review.paired_match_difference, 1)}.`
      : "No blinded causal rating available.";
    return `<div class="evidence-block"><strong>Qualitative hypothesis · ${escapeHtml(item.label)}</strong><p>${escapeHtml(item.description)}</p><p>${escapeHtml(reviewText)}</p></div>`;
  }
  if (item.type === "muspy") {
    const direction = Number(item.expected_sign) > 0 ? "increase" : "decrease";
    return `<div class="evidence-block"><strong>MusPy hypothesis · expected ${direction} in ${escapeHtml(item.metric_name)}</strong><p>At p90 across the available carriers: baseline ${number(item.baseline_mean)}, feature ${number(item.semantic_mean)}, random ${number(item.random_mean)}; adjusted q = ${number(item.q, 3)}.</p></div>`;
  }
  const confirmed = item.type === "replication" ? " Independently replicated." : "";
  return `<div class="evidence-block"><strong>${item.type === "replication" ? "Replicated instrument feature" : "Instrument hypothesis"} · ${escapeHtml(item.label)}</strong><p>At p90: target-note share baseline / feature / random = ${percent(item.baseline_note_share)} / ${percent(item.semantic_note_share)} / ${percent(item.random_note_share)}; duration share = ${percent(item.baseline_duration_share)} / ${percent(item.semantic_duration_share)} / ${percent(item.random_duration_share)}.${confirmed}</p></div>`;
}

function librarySample(kind, label, media) {
  return `
    <article class="sample-card ${kind}-sample">
      <header><span>${kind === "feature" ? "Target intervention" : kind === "random" ? "Matched control" : "Reference"}</span><h3>${label}</h3></header>
      <a class="roll-link" href="${media.piano_roll}" target="_blank" title="Open the piano roll at full resolution">
        <img class="piano-roll" src="${media.piano_roll}" alt="Instrument-coloured piano roll for ${label.toLowerCase()}">
      </a>
      <div class="sample-controls">
        <audio controls preload="metadata" src="${media.audio}"></audio>
        <div class="downloads"><a href="${media.audio}" download>MP3</a><a href="${media.midi}" download>MIDI</a></div>
      </div>
    </article>`;
}

function filteredLibraryCards() {
  const query = librarySearch.value.trim().toLowerCase();
  return libraryCards.filter((card) => {
    const text = `${card.title} ${card.model} ${card.layer} ${card.feature_id}`.toLowerCase();
    const groupMatches = libraryGroup.value === "all" || card.groups.includes(libraryGroup.value);
    const modelMatches = libraryModel.value === "all" || card.model === libraryModel.value;
    return text.includes(query) && groupMatches && modelMatches;
  });
}

function renderLibraryList() {
  const visible = filteredLibraryCards();
  libraryCount.textContent = `${visible.length} / ${libraryCards.length} features`;
  if (!visible.length) {
    libraryList.innerHTML = '<p class="empty-library">No matching features.</p>';
    return;
  }
  libraryList.innerHTML = visible
    .map(
      (card) => `
        <button class="library-item ${card.candidate_id === selectedLibraryCard?.candidate_id ? "is-active" : ""}" data-candidate="${escapeHtml(card.candidate_id)}" type="button">
          <strong>${escapeHtml(card.title)}</strong>
          <span>${card.model === "midi_llm" ? "MIDI-LLM" : "text2midi"} · L${card.layer} · f${card.feature_id}</span>
          ${card.top_feature ? '<span class="top-marker">10 prompts</span>' : ""}
        </button>`,
    )
    .join("");
  libraryList.querySelectorAll(".library-item").forEach((button) => {
    button.addEventListener("click", () => {
      selectedLibraryCard = libraryCards.find((card) => card.candidate_id === button.dataset.candidate);
      selectedLibraryPrompt = selectedLibraryCard.best_prompt;
      renderLibraryList();
      renderLibraryViewer();
    });
  });
}

function renderLibraryViewer() {
  if (!selectedLibraryCard) return;
  const card = selectedLibraryCard;
  libraryBadges.innerHTML = `
    ${card.groups.map((group) => `<span class="badge">${escapeHtml(group)}</span>`).join("")}
    <span class="badge status">${escapeHtml(statusLabels[card.status] ?? card.status)}</span>
    ${card.top_feature ? '<span class="badge">all 10 prompts</span>' : '<span class="badge">best prompt</span>'}`;
  libraryTitle.textContent = card.title;
  libraryId.textContent = `${card.model === "midi_llm" ? "MIDI-LLM" : "text2midi"} · layer ${card.layer} · SAE feature ${card.feature_id}`;

  libraryPrompt.innerHTML = card.carriers
    .map((carrier) => `<option value="${carrier.prompt_idx}">Prompt ${carrier.prompt_idx + 1}${carrier.prompt_idx === card.best_prompt ? " · strongest" : ""}</option>`)
    .join("");
  if (!card.carriers.some((carrier) => carrier.prompt_idx === selectedLibraryPrompt)) {
    selectedLibraryPrompt = card.carriers[0].prompt_idx;
  }
  libraryPrompt.value = String(selectedLibraryPrompt);
  libraryPrompt.disabled = card.carriers.length === 1;

  libraryDoses.innerHTML = ["p50", "p75", "p90"]
    .map((dose) => `<button type="button" class="dose-button ${dose === selectedLibraryDose ? "is-active" : ""}" data-dose="${dose}">${dose}</button>`)
    .join("");
  libraryDoses.querySelectorAll(".dose-button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedLibraryDose = button.dataset.dose;
      renderLibraryViewer();
    });
  });

  const carrier = card.carriers.find((item) => item.prompt_idx === selectedLibraryPrompt);
  const dose = carrier.doses[selectedLibraryDose];
  libraryPromptText.textContent = `“${carrier.prompt}”`;
  libraryComparison.innerHTML =
    librarySample("baseline", "Baseline", carrier.baseline) +
    librarySample("feature", "SAE feature", dose.feature) +
    librarySample("random", "Random direction", dose.random);
  libraryEvidence.innerHTML = card.evidence.map(evidenceHtml).join("");
}

libraryPrompt.addEventListener("change", () => {
  selectedLibraryPrompt = Number(libraryPrompt.value);
  renderLibraryViewer();
});
[librarySearch, libraryGroup, libraryModel].forEach((control) => {
  control.addEventListener(control === librarySearch ? "input" : "change", renderLibraryList);
});

renderLibraryList();
renderLibraryViewer();

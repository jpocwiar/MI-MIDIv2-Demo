# MI-MIDI v2 Demo

A static listening showcase for sparse-autoencoder feature interventions in
symbolic text-to-MIDI models. The opening section presents ten selected case
studies. The full library below it contains all 80 tested features and all three
intervention doses (p50, p75 and p90), each compared against a baseline and a
matched-norm random direction.

Every feature includes the carrier prompt with the strongest measured p90
effect. The ten highlighted features additionally include all ten carrier
prompts. Media are loaded only when a feature, prompt and dose are selected, so
opening the page does not download the entire 243 MiB library.

The displayed carriers are deliberately selected post-analysis illustrations.
The page therefore reports aggregate outcomes next to the opening examples and
distinguishes exploratory screen-positive results from the independently
replicated sawtooth result.

The source experiment is `targeted_causal_v1`. Instrument examples maximize the
target program's duration-share increase over both controls, subject to a
note-count stability guard. MusPy examples maximize the expected-sign change
over both controls. Qualitative examples use the largest blinded match-score
advantage over the random intervention, penalizing additional degeneration.
This selection affects only which carrier is displayed by default, not the
reported aggregate statistics.

## Local preview

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/`.

## GitHub Pages

The site has no build step or server-side dependencies. In the repository
settings, choose **Deploy from a branch**, select `main` and the repository root
(`/`).

The published library can be regenerated from the parent research repository:

```bash
.venv/bin/python experiments/sae/interventions/export_github_sae_demo.py
```

## Included case studies

- text2midi layer 16, SAE feature 995 — Electric Piano 1;
- text2midi layer 8, SAE feature 1015 — MusPy pitch entropy;
- text2midi layer 13, SAE feature 3340 — Lead 2 (sawtooth), independently
  replicated.
- text2midi layer 8, SAE feature 5166 — pitch-class diversity;
- MIDI-LLM layer 2, SAE feature 6981 — lower triplet-grid drum consistency;
- MIDI-LLM layer 7, SAE feature 6424 — Acoustic Guitar (nylon);
- text2midi layer 2, SAE feature 552 — dense, near-continuous percussion;
- text2midi layer 2, SAE feature 4021 — rich, multi-timbral instrumentation;
- text2midi layer 16, SAE feature 4606 — sparse texture with recurring timpani;
- MIDI-LLM layer 2, SAE feature 6671 — prominent continuous drum-kit layer.

The final four are the highest-rated additional qualitative candidates selected
from a blinded piano-roll review. They are presented as exploratory examples:
the full 48-feature qualitative panel did not show an aggregate causal effect.

Audio was synthesized with FluidSynth and MuseScore General 0.2, independently
peak-normalized, and encoded as MP3. See `SOUNDFONT_LICENSE.md` for attribution.

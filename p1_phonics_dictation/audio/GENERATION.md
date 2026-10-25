# Phoneme MP3 generation notes (v2 — 2026-10-26)

Source lock: 遊戲設計師 Phonics lock（HK P1／Letters&Sounds＋Jolly）
Tool: espeak-ng + ffmpeg | Voice: `-v en-gb` | Mode: `[[...]]` phonemes (NOT letter names / example words)

| File | Phoneme | Target IPA | Rate | Notes |
|------|---------|------------|------|-------|
| phoneme-a.mp3 | `[[a]]` | /æ/ | 115 | short-a; **no a:** |
| phoneme-s.mp3 | `[[s:]]` | /s/ | 85 | ~0.55–0.7s continuous |
| phoneme-t.mp3 | `[[t@]]` | /t/ | 180 | tiny schwa; trim ~0.35–0.45s |
| phoneme-p.mp3 | `[[p@]]` | /p/ | 180 | tiny schwa; trim |
| phoneme-g.mp3 | `[[g@]]` | /g/ hard | 180 | tiny schwa; trim |
| phoneme-o.mp3 | `[[0]]` | /ɒ/ | 110 | British short-o; **no 0:** |
| phoneme-d.mp3 | `[[d@]]` | /d/ | 180 | tiny schwa; trim |
| phoneme-m.mp3 | `[[m::]]` | /m/ | 80 | continuous; loudnorm+boost |
| phoneme-n.mp3 | `[[n::]]` | /n/ | 80 | continuous; loudnorm+boost |
| phoneme-i.mp3 | `[[I]]` | /ɪ/ | 115 | short-i; **no I:** |

Post: silenceremove (gentle) → loudnorm I=-14 → mp3 128k mono 22050Hz
Acceptance: a≠father ah; i≠ee; o≠or/aw; stops≠full syllables; m/n e-board clear

## v3 patch (2026-10-26) — /m/ /n/ /t/ /p/ only
Boss: espeak versions unrecognisable.
Source: Microsoft Edge TTS `en-GB-SoniaNeural` classroom forms (not letter names):
- m → spoken "mmmm" (sustained /m/)
- n → spoken "nnnn" (sustained /n/)
- t → spoken "tuh" (classroom /t/ + tiny schwa)
- p → spoken "puh" (classroom /p/ + tiny schwa)
Post: silenceremove → loudnorm I=-14 → atrim → mp3 mono 22050 128k
Other six phonemes remain v2 espeak lock until further feedback.

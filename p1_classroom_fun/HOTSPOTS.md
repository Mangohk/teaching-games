# Part 1 hotspot mapping (Find the Differences / 搵不同)

**Lock:** `HOTSPOTS-LOCK-2026-11-16-v2.md` (supersedes v1).  
Coordinates are **percent of the 1152×864 scene** (`x, y, w, h`).  
Overlays: `lock2-b-*` = Level 2, `lock2-c-*` = Level 3.

## Hit priority (hard-coded, not DOM/z-index)

**MISS-child / stand > book > door > chair > computer > full-picture miss**

- Level 2 `MISS-child` is **not** a scored difference; onHit = *That's the same. Try again!*
- No CSS `.spot-hit { min-width/min-height: 80px }` — do not grow designer boxes.
- Found rings: **each zone separately**; left stand = three boxes (never one big rect); old chair left-only (no ring on right).

## Level 1 — Our Classroom (`spot-a-*`) — 3 differences

| Id | Zones | hint2 |
|----|-------|-------|
| `l1-chair` | both 24,52,18,36 | Look at the chair. |
| `l1-computer` | both 68,58,28,36 | Look at the computer. |
| `l1-window` | both 72,6,24,42 | Look at the window. |

## Level 2 — What is different? (`spot-b-*`) — 4 differences + MISS

| Id | Zones | Notes |
|----|-------|-------|
| **MISS-child** | both 10,18,18,62 | miss only; not scored |
| `l2-door` | both 1,6,17,68 | |
| `l2-book` | both 42,52,26,18 | |
| `l2-desk` | **left only** 56,76,20,18 | no right desk zone |
| `l2-blackboard` | both 26,6,42,42 | |

## Level 3 — What changed? (`spot-c-*`) — 5 differences

| Id | Zones |
|----|-------|
| `l3-stand` (+ sitDownBonus) | left head 16,22,20,20 · body 16,42,16,20 · legs 16,62,22,30 · right empty 20,50,18,42 · right kid 61,26,17,66 |
| `l3-door` | left 1,8,14,68 · right 1,6,18,70 |
| `l3-chair-move` | left 10,50,16,42 · right 78,56,22,38 |
| `l3-computer` | **left only** 72,46,28,30 |
| `l3-book` | left 38,52,30,20 · right 44,52,17,18 (right edge 61%) |

After Stand up + We did it!: **Now sit down, please.**

Do **not** use UI original L3 stand `both 16,20,22,72` or standing-child `right 54,24,26,68`.

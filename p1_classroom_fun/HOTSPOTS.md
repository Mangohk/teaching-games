# Part 1 hotspot mapping (Find the Differences / 搵不同)

Coordinates are **percent of the 1152×864 scene** (`x, y, w, h`).  
Locked 2026-11-16 designer paste (`HOTSPOTS-LOCK-2026-11-16.md`). Overlays: `lock-b-*` = Level 2, `lock-c-*` = Level 3.

Hit-testing uses **hard-coded priority** (not DOM order). Level 3:

`l3-stand` > `l3-chair-move` > `l3-book` > `l3-door` > `l3-computer` > miss

No MISS-child zone — tapping the child (same in both pictures) uses the miss handler.  
Found rings: **each zone separately**, only on the side that owns that zone.  
Designer boxes are **not** expanded to 80×80 CSS px.

## Level 1 — Our Classroom (`spot-a-*`) — 3 differences

| # | Id | Zones | hint2 |
|---|----|-------|-------|
| 1 | `l1-chair` | both 24,52,18,36 | Look at the chair. |
| 2 | `l1-computer` | both 68,58,28,36 | Look at the computer. |
| 3 | `l1-window` | both 72,6,24,42 | Look at the window. |

## Level 2 — What is different? (`spot-b-*`) — 4 differences

| # | Id | Zones | hint2 |
|---|----|-------|-------|
| 4 | `l2-desk` | both 50,74,19,24 (right edge 69%; not computer table) | Look at the desk. |
| 5 | `l2-blackboard` | both 28,6,34,36 | Look at the blackboard. |
| 6 | `l2-door` | both 1,6,8,64 (leaf) + both 1,6,19,11 (top) | Look at the door. |
| 7 | `l2-book` | both 43,55,24,16 | Look at the book. |

## Level 3 — What changed? (`spot-c-*`) — 5 differences

| # | Id | Zones | hint2 |
|---|----|-------|-------|
| 8 | `l3-stand` (+ sitDownBonus) | left 16,24,20,18 · 20,42,12,8 · 23,50,14,22 · 23,70,15,24 · right 21,52,15,42 · 61,28,18,66 | Look at the boy. |
| 9 | `l3-door` | both 1,6,13,65 · right 14,6,6,65 · left 15,6,6,17 | Look at the door. |
| 10 | `l3-chair-move` | left 14,50,7,40 · right 79,56,21,40 | Look at the chair. |
| 11 | `l3-computer` | **left only** 73,47,26,32 | Look at the computer. |
| 12 | `l3-book` | left 42,53,26,16 · right 47,54,13,12 | Look at the book. |

After Stand up + We did it!: **Now sit down, please.**

Ignored non-differences: side-table camera angle, faint wall/sill traces.

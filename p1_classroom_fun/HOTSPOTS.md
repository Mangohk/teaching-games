# Part 1 hotspot mapping (Find the Differences / 搵不同)

Coordinates are **percent of the 1152×864 scene** (`left`, `top`, `width`, `height`).  
Each difference is tappable on **Picture 1 or Picture 2** (same %). Rings draw on both sides.

## Level 1 — Our Classroom (`spot-a-*`) — 3 differences

| # | Id | Object | Zone(s) % | On find | Then do |
|---|----|--------|-----------|---------|---------|
| 1 | `l1-chair` | Chair at teacher desk (left only) | 24,52,18,36 | Yes! It's a chair. | Point to the chair. |
| 2 | `l1-computer` | Computer on side table (left only) | 68,58,28,36 | Yes! It's a computer. | Look at the computer. |
| 3 | `l1-window` | Window on right wall (left only) | 72,6,24,42 | Yes! It's a window. | Point to the window. |

## Level 2 — What is different? (`spot-b-*`) — 4 differences

| # | Id | Object | Zone(s) % | On find | Then do |
|---|----|--------|-----------|---------|---------|
| 4 | `l2-desk` | Extra student desk (front-right, left only) | 74,72,24,26 | Yes! It's a desk. | Point to the desk. |
| 5 | `l2-blackboard` | Blackboard (left only) | 28,6,34,36 | Yes! It's a blackboard. | Look at the blackboard. |
| 6 | `l2-door` | Door closed→open | 1,10,16,68 | Yes! Open the door, please. | (same) |
| 7 | `l2-book` | Book closed→open | 40,46,18,18 | Yes! Open your book, please. | (same) |

## Level 3 — What changed? (`spot-c-*`) — 5 differences

| # | Id | Object | Zone(s) % | On find | Then do |
|---|----|--------|-----------|---------|---------|
| 8 | `l3-stand` | Child sit→stand | 20,36,24,56 | Yes! Stand up, please. | then **Sit down, please.** + We did it! |
| 9 | `l3-door` | Door open→closed | 1,8,16,70 | Yes! Close the door, please. | (same) |
| 10 | `l3-chair-move` | Chair desk→window | **old** 28,54,16,34 **and new** 72,54,18,36 (either counts; both ring) | Yes! It's a chair. | Point to the chair. |
| 11 | `l3-computer` | Computer present→gone | 68,58,28,36 | Yes! It's a computer. | Look at the computer. |
| 12 | `l3-book` | Book open→closed | 40,46,18,18 | Yes! Close your book, please. | (same) |

Ignored non-differences (per art lock): side-table camera angle, faint wall/sill traces.

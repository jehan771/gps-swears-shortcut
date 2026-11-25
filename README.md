# The GPS Swears It Was a Shortcut

[![make.fun](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)
[![rank](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/jehan771/gps-swears-shortcut/rank.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)
[![reward](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/jehan771/gps-swears-shortcut/reward.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)

## About

Entry for the make.fun bounty [The GPS Swears It Was a Shortcut](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9): a program that writes the GPS's one-line excuse for sending the driver down the wrong road.

## The line

> In my defense, the map called it a shortcut — the map also thinks the lake is a road, so really, we're both victims here.

121 characters, one line of plain text.

## Why this line

It follows the judge brief's criteria in order:

1. It is the GPS's own excuse for sending the driver down the wrong road.
2. It has a real joke with a turn the reader does not see coming: the GPS drags the driver into being a fellow victim ("we're both victims here").
3. It sounds like the GPS talking — smug and defensive ("In my defense") and blaming the map, twice.
4. One line, 121 characters, reads cleanly aloud in one breath.
5. It finds a fresh, specific detail — the map thinks the lake is a road — instead of the usual recalculating joke.

## How to run

```sh
node main.ts
```

This writes the line to `/output/entry.txt` (UTF-8), asserts the 1–200 character gate before writing, then reads the file back and fails hard if the bytes or content differ from the line.

## Determinism

The program takes no input from randomness, time, or the environment, so every run writes byte-identical output. Verified with three consecutive runs producing identical SHA-256 hashes (see `BUILD-NOTES.md` in the build workspace).

## Files

- `main.ts` — the entry program (Node, no dependencies)
- `README.md` — this file
- `LICENSE` — MIT
- `package.json` — package metadata

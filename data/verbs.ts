import { verbs as v1, type Verb } from "./verbs-1"
import { verbs2 as v2 } from "./verbs-2"
import { verbs3 as v3 } from "./verbs-3"
import { verbs4 as v4 } from "./verbs-4"

export type { Verb }

export const allVerbs: Verb[] = [...v1, ...v2, ...v3, ...v4]

export function getVerbBySlug(slug: string): Verb | undefined {
  return allVerbs.find((v) => slugify(v.v1) === slug)
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/\//g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
}

export function getInitial(v: string): string {
  const c = v.trim().toLowerCase().charAt(0)
  return /[a-z]/.test(c) ? c.toUpperCase() : "#"
}

export function groupByInitial(list: Verb[]): Record<string, Verb[]> {
  const map: Record<string, Verb[]> = {}
  for (const v of list) {
    const k = getInitial(v.v1)
    if (!map[k]) map[k] = []
    map[k].push(v)
  }
  Object.keys(map).forEach((k) => map[k].sort((a, b) => a.v1.localeCompare(b.v1)))
  return map
}

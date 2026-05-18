"use client"

import * as React from "react"
import Link from "next/link"
import { Search, X } from "lucide-react"
import type { Verb } from "@/data/verbs"
import { slugify, getInitial } from "@/data/verbs"
import { cn, normalize } from "@/lib/utils"

export function VerbsBrowser({ verbs }: { verbs: Verb[] }) {
  const [query, setQuery] = React.useState("")
  const [letter, setLetter] = React.useState<string>("ALL")

  const letters = React.useMemo(() => {
    const s = new Set<string>()
    verbs.forEach((v) => s.add(getInitial(v.v1)))
    return Array.from(s).sort()
  }, [verbs])

  const filtered = React.useMemo(() => {
    const q = normalize(query.trim())
    return verbs.filter((v) => {
      if (letter !== "ALL" && getInitial(v.v1) !== letter) return false
      if (!q) return true
      return (
        normalize(v.v1).includes(q) ||
        normalize(v.v2).includes(q) ||
        normalize(v.v3).includes(q) ||
        normalize(v.meaning).includes(q)
      )
    })
  }, [verbs, query, letter])

  return (
    <div>
      <div className="sticky top-16 z-20 -mx-2 mb-6 bg-white/80 px-2 py-3 backdrop-blur-md">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm theo V1, V2, V3 hoặc nghĩa tiếng Việt..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-10 text-sm shadow-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-0.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                aria-label="Xoá tìm kiếm"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <div className="rounded-lg bg-slate-100 px-3 py-2 text-center text-sm font-medium text-slate-700 md:min-w-[140px]">
            <span className="text-brand-700">{filtered.length}</span> /{" "}
            {verbs.length} từ
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          <Chip active={letter === "ALL"} onClick={() => setLetter("ALL")}>
            Tất cả
          </Chip>
          {letters.map((l) => (
            <Chip
              key={l}
              active={letter === l}
              onClick={() => setLetter(l)}
            >
              {l}
            </Chip>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 py-16 text-center">
          <p className="text-slate-500">Không tìm thấy động từ phù hợp.</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-4 py-3">V1 / Phiên âm</th>
                <th className="hidden px-4 py-3 md:table-cell">V2</th>
                <th className="hidden px-4 py-3 md:table-cell">V3</th>
                <th className="px-4 py-3">Nghĩa</th>
                <th className="px-4 py-3 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((v) => (
                <tr key={v.v1} className="group transition hover:bg-brand-50/40">
                  <td className="px-4 py-3.5">
                    <Link
                      href={`/verbs/${slugify(v.v1)}`}
                      className="font-heading font-bold text-slate-900 group-hover:text-brand-700"
                    >
                      {v.v1}
                    </Link>
                    <div className="text-xs text-slate-400">{v.ipa}</div>
                    <div className="mt-1 flex gap-3 text-xs text-slate-600 md:hidden">
                      <span>
                        V2: <span className="font-medium">{v.v2}</span>
                      </span>
                      <span>
                        V3: <span className="font-medium">{v.v3}</span>
                      </span>
                    </div>
                  </td>
                  <td className="hidden px-4 py-3.5 font-medium text-slate-700 md:table-cell">
                    {v.v2}
                  </td>
                  <td className="hidden px-4 py-3.5 font-medium text-slate-700 md:table-cell">
                    {v.v3}
                  </td>
                  <td className="px-4 py-3.5 text-slate-600">{v.meaning}</td>
                  <td className="px-4 py-3.5 text-right">
                    <Link
                      href={`/verbs/${slugify(v.v1)}`}
                      className="text-xs font-semibold text-brand-600 hover:underline"
                    >
                      Chi tiết →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "min-w-[36px] rounded-lg border px-3 py-1.5 text-xs font-semibold transition",
        active
          ? "border-brand-600 bg-brand-600 text-white shadow-sm"
          : "border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:text-brand-700"
      )}
    >
      {children}
    </button>
  )
}

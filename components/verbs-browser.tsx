"use client"

import * as React from "react"
import Link from "next/link"
import { Search, X } from "lucide-react"
import type { Verb } from "@/data/verbs"
import { getVerbSlug, getInitial } from "@/data/verbs"
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
      <div className="sticky top-16 z-20 -mx-4 mb-6 bg-white/90 px-4 py-3 backdrop-blur-md sm:-mx-5 sm:px-5 lg:-mx-2 lg:px-2">
        <div className="flex flex-col gap-2.5 md:flex-row md:items-center md:gap-3">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm V1, V2, V3 hoặc nghĩa..."
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

        <div className="relative mt-3 lg:hidden">
          <div className="scrollbar-hide flex gap-1.5 overflow-x-auto pb-1 pr-8">
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
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white/95 to-transparent" />
        </div>

        <div className="mt-3 hidden flex-wrap gap-1.5 lg:flex">
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
        <>
          {/* Mobile: card list */}
          <ul className="space-y-3 md:hidden">
            {filtered.map((v) => (
              <li key={v.v1}>
                <Link
                  href={`/verbs/${getVerbSlug(v)}`}
                  className="block rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition active:scale-[0.99]"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-heading text-lg font-bold text-slate-900">
                        {v.v1}
                      </div>
                      <div className="text-xs text-slate-400">{v.ipa}</div>
                    </div>
                    <span className="text-xs font-semibold text-brand-600">
                      Chi tiết →
                    </span>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                    <MiniCell label="V1" value={v.v1} />
                    <MiniCell label="V2" value={v.v2} />
                    <MiniCell label="V3" value={v.v3} />
                  </div>
                  <p className="mt-3 line-clamp-2 text-sm text-slate-600">
                    {v.meaning}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop: table */}
          <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:block">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="px-4 py-3">V1 / Phiên âm</th>
                  <th className="px-4 py-3">V2</th>
                  <th className="px-4 py-3">V3</th>
                  <th className="px-4 py-3">Nghĩa</th>
                  <th className="px-4 py-3 text-right"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((v) => (
                  <tr key={v.v1} className="group transition hover:bg-brand-50/40">
                    <td className="px-4 py-3.5">
                      <Link
                        href={`/verbs/${getVerbSlug(v)}`}
                        className="font-heading font-bold text-slate-900 group-hover:text-brand-700"
                      >
                        {v.v1}
                      </Link>
                      <div className="text-xs text-slate-400">{v.ipa}</div>
                    </td>
                    <td className="px-4 py-3.5 font-medium text-slate-700">
                      {v.v2}
                    </td>
                    <td className="px-4 py-3.5 font-medium text-slate-700">
                      {v.v3}
                    </td>
                    <td className="px-4 py-3.5 text-slate-600">{v.meaning}</td>
                    <td className="px-4 py-3.5 text-right">
                      <Link
                        href={`/verbs/${getVerbSlug(v)}`}
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
        </>
      )}
    </div>
  )
}

function MiniCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-slate-50 px-2 py-1.5">
      <div className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </div>
      <div className="truncate font-medium text-slate-900">{value}</div>
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
        "min-w-[36px] shrink-0 rounded-lg border px-3 py-1.5 text-xs font-semibold transition",
        active
          ? "border-brand-600 bg-brand-600 text-white shadow-sm"
          : "border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:text-brand-700"
      )}
    >
      {children}
    </button>
  )
}

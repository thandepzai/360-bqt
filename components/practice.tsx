"use client"

import * as React from "react"
import { Shuffle, RotateCw } from "lucide-react"
import type { Verb } from "@/data/verbs"
import { buttonClasses } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Practice({ verbs }: { verbs: Verb[] }) {
  const [order, setOrder] = React.useState<number[]>(() => shuffle(verbs.length))
  const [pos, setPos] = React.useState(0)
  const [flipped, setFlipped] = React.useState(false)

  const v = verbs[order[pos]]

  function next() {
    setFlipped(false)
    setPos((p) => (p + 1) % order.length)
  }

  function reshuffle() {
    setOrder(shuffle(verbs.length))
    setPos(0)
    setFlipped(false)
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-4 flex items-center justify-between text-sm">
        <span className="text-slate-500">
          Thẻ <strong className="text-slate-900">{pos + 1}</strong> /{" "}
          {order.length}
        </span>
        <button
          onClick={reshuffle}
          className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
        >
          <Shuffle className="h-4 w-4" /> Trộn lại
        </button>
      </div>

      <div
        onClick={() => setFlipped((f) => !f)}
        className={cn(
          "relative h-72 cursor-pointer select-none rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg md:h-80",
          flipped && "ring-2 ring-brand-200"
        )}
      >
        {!flipped ? (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Động từ nguyên mẫu
            </div>
            <h3 className="mt-3 font-heading text-5xl font-extrabold text-slate-900 md:text-6xl">
              {v.v1}
            </h3>
            <div className="mt-2 font-mono text-sm text-slate-500">{v.ipa}</div>
            <div className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-4 py-1.5 text-xs font-medium text-slate-600">
              <RotateCw className="h-3.5 w-3.5" /> Bấm để xem đáp án
            </div>
          </div>
        ) : (
          <div className="flex h-full flex-col justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                {v.v1} • {v.ipa}
              </div>
              <p className="mt-2 text-lg font-medium text-slate-900">
                {v.meaning}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Cell label="V1" value={v.v1} />
              <Cell label="V2" value={v.v2} />
              <Cell label="V3" value={v.v3} />
            </div>
            {v.example && (
              <p className="mt-4 text-sm italic text-slate-600">
                "{v.example}"
              </p>
            )}
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-center gap-3">
        <button
          onClick={() => setFlipped((f) => !f)}
          className={buttonClasses("outline", "lg")}
        >
          {flipped ? "Ẩn đáp án" : "Hiện đáp án"}
        </button>
        <button onClick={next} className={buttonClasses("gradient", "lg")}>
          Tiếp theo
        </button>
      </div>
    </div>
  )
}

function Cell({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-brand-50 px-3 py-2 text-center">
      <div className="text-[10px] font-semibold uppercase tracking-wider text-brand-700/70">
        {label}
      </div>
      <div className="truncate font-bold text-brand-800">{value}</div>
    </div>
  )
}

function shuffle(n: number): number[] {
  const a = Array.from({ length: n }, (_, i) => i)
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

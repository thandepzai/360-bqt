import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Volume2, BookOpen, Quote } from "lucide-react"
import { allVerbs, getVerbBySlug, slugify } from "@/data/verbs"
import { buttonClasses } from "@/components/ui/button"

export function generateStaticParams() {
  return allVerbs.map((v) => ({ slug: slugify(v.v1) }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const v = getVerbBySlug(params.slug)
  if (!v) return { title: "Không tìm thấy động từ" }
  return {
    title: `${v.v1} - ${v.v2} - ${v.v3} | ${v.meaning}`,
    description: `${v.v1} (${v.ipa}) ${v.meaning}. Quá khứ: ${v.v2}. Quá khứ phân từ: ${v.v3}.`,
  }
}

export default function VerbDetail({ params }: { params: { slug: string } }) {
  const v = getVerbBySlug(params.slug)
  if (!v) notFound()

  const idx = allVerbs.findIndex((x) => slugify(x.v1) === params.slug)
  const prev = idx > 0 ? allVerbs[idx - 1] : null
  const next = idx < allVerbs.length - 1 ? allVerbs[idx + 1] : null

  return (
    <div>
      <section className="border-b border-slate-100 bg-gradient-to-b from-brand-50/60 to-white">
        <div className="container py-10 md:py-16">
          <Link
            href="/verbs"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-brand-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Trở lại danh sách
          </Link>

          <div className="mt-6 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
                Irregular Verb
              </span>
              <h1 className="mt-3 font-heading text-5xl font-extrabold text-slate-900 md:text-7xl">
                {v.v1}
              </h1>
              <div className="mt-2 flex items-center gap-2 text-slate-500">
                <Volume2 className="h-4 w-4" />
                <span className="font-mono">{v.ipa}</span>
              </div>
            </div>
            <div className="rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-slate-200 md:max-w-md">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Nghĩa tiếng Việt
              </div>
              <p className="mt-1 text-lg font-medium text-slate-900">
                {v.meaning}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-10">
        <div className="grid gap-4 md:grid-cols-3">
          <FormCard label="Nguyên mẫu (V1)" value={v.v1} accent="from-brand-500 to-blue-600" />
          <FormCard label="Quá khứ (V2)" value={v.v2} accent="from-indigo-500 to-violet-600" />
          <FormCard label="Quá khứ phân từ (V3)" value={v.v3} accent="from-fuchsia-500 to-pink-600" />
        </div>

        {v.example && (
          <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50/50 p-6 md:p-8">
            <div className="flex items-center gap-2 text-brand-700">
              <Quote className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Ví dụ
              </span>
            </div>
            <p className="mt-3 font-heading text-xl font-medium leading-relaxed text-slate-800 md:text-2xl">
              {highlight(v.example, [v.v1, v.v2, v.v3])}
            </p>
          </div>
        )}

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-slate-500" />
            <span className="text-sm font-semibold uppercase tracking-wider text-slate-600">
              Mẹo ghi nhớ
            </span>
          </div>
          <p className="mt-3 leading-relaxed text-slate-600">
            Hãy đọc to cả ba dạng <strong>{v.v1} - {v.v2} - {v.v3}</strong> nhiều
            lần. Ghép vào một câu mẫu của riêng bạn để não ghi nhớ tự nhiên hơn.
            Mỗi ngày học khoảng 10 từ, sau 36 ngày bạn sẽ thuộc trọn bộ 360 động từ.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-between">
          {prev ? (
            <Link
              href={`/verbs/${slugify(prev.v1)}`}
              className="group flex flex-1 items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-brand-200 hover:shadow"
            >
              <ArrowLeft className="h-5 w-5 text-slate-400 group-hover:text-brand-600" />
              <div className="text-left">
                <div className="text-xs uppercase tracking-wider text-slate-400">
                  Trước
                </div>
                <div className="font-heading font-bold text-slate-900 group-hover:text-brand-700">
                  {prev.v1}
                </div>
              </div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {next ? (
            <Link
              href={`/verbs/${slugify(next.v1)}`}
              className="group flex flex-1 items-center justify-end gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-brand-200 hover:shadow"
            >
              <div className="text-right">
                <div className="text-xs uppercase tracking-wider text-slate-400">
                  Tiếp theo
                </div>
                <div className="font-heading font-bold text-slate-900 group-hover:text-brand-700">
                  {next.v1}
                </div>
              </div>
              <ArrowLeft className="h-5 w-5 rotate-180 text-slate-400 group-hover:text-brand-600" />
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/practice" className={buttonClasses("gradient", "lg")}>
            Luyện tập với flashcard
          </Link>
        </div>
      </section>
    </div>
  )
}

function FormCard({
  label,
  value,
  accent,
}: {
  label: string
  value: string
  accent: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg">
      <div
        className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${accent} opacity-20 blur-2xl transition group-hover:opacity-30`}
      />
      <div className="relative">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {label}
        </div>
        <div className="mt-2 font-heading text-3xl font-bold text-slate-900 md:text-4xl">
          {value}
        </div>
      </div>
    </div>
  )
}

function highlight(sentence: string, terms: string[]) {
  const words = sentence.split(/(\s+|[.,!?])/)
  const lc = terms.map((t) => t.toLowerCase())
  return words.map((w, i) => {
    if (lc.some((t) => w.toLowerCase() === t)) {
      return (
        <span key={i} className="rounded bg-brand-100 px-1 text-brand-800">
          {w}
        </span>
      )
    }
    return <span key={i}>{w}</span>
  })
}

import { allVerbs } from "@/data/verbs"
import { Practice } from "@/components/practice"

export const metadata = {
  title: "Luyện tập flashcard",
  description: "Luyện 360 động từ bất quy tắc theo flashcard - học chủ động, nhớ lâu hơn.",
}

export default function PracticePage() {
  return (
    <div>
      <section className="border-b border-slate-100 bg-gradient-to-b from-brand-50/60 to-white">
        <div className="container py-10 md:py-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Học chủ động
            </p>
            <h1 className="mt-2 font-heading text-3xl font-bold text-slate-900 md:text-5xl">
              Luyện tập với flashcard
            </h1>
            <p className="mt-4 text-slate-600 md:text-lg">
              Lật thẻ để xem đáp án. Bấm <em>Tiếp theo</em> để học từ ngẫu nhiên.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <Practice verbs={allVerbs} />
      </section>
    </div>
  )
}

import { allVerbs } from "@/data/verbs"
import { VerbsBrowser } from "@/components/verbs-browser"

export const metadata = {
  title: "Danh sách 360 động từ bất quy tắc",
  description: "Tra cứu nhanh 360 động từ bất quy tắc tiếng Anh có phiên âm, nghĩa và ví dụ.",
}

export default function VerbsPage() {
  return (
    <div>
      <section className="border-b border-slate-100 bg-gradient-to-b from-brand-50/60 to-white">
        <div className="container py-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Thư viện học tập
            </p>
            <h1 className="mt-2 font-heading text-3xl font-bold text-slate-900 md:text-5xl">
              360 động từ bất quy tắc
            </h1>
            <p className="mt-4 text-slate-600 md:text-lg">
              Tra cứu, lọc theo chữ cái và xem chi tiết phiên âm, nghĩa, ví dụ
              cho từng động từ.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-10">
        <VerbsBrowser verbs={allVerbs} />
      </section>
    </div>
  )
}

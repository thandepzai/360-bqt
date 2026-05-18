import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  Sparkles,
  Search,
  GraduationCap,
  Volume2,
  Target,
  Zap,
} from "lucide-react"
import { allVerbs, slugify } from "@/data/verbs"
import { siteConfig } from "@/lib/site"
import { buttonClasses } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function HomePage() {
  const featured = allVerbs.slice(0, 6)

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
        <div className="absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-200/40 via-indigo-200/30 to-transparent blur-3xl" />

        <div className="container py-16 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center animate-fade-in-up">
            <Link
              href={siteConfig.brand.website}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-xs font-medium text-brand-700 shadow-sm backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Một dự án học miễn phí từ MapStudy
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            <h1 className="font-heading text-[2rem] font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Chinh phục <span className="gradient-text">360 động từ</span>
              <br className="hidden sm:block" /> bất quy tắc tiếng Anh
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
              Tra cứu nhanh, học có hệ thống và ghi nhớ lâu hơn với phiên âm,
              nghĩa tiếng Việt và ví dụ thực tế cho từng động từ.
            </p>

            <div className="mt-2 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Link href="/verbs" className={buttonClasses("gradient", "lg")}>
                Bắt đầu học ngay
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/practice" className={buttonClasses("outline", "lg")}>
                Luyện tập flashcard
              </Link>
            </div>

            <div className="mt-8 grid w-full max-w-3xl grid-cols-3 divide-x divide-slate-200 rounded-2xl border border-slate-100 bg-white/80 p-3 shadow-sm backdrop-blur sm:p-4">
              <Stat n="360+" label="Động từ" />
              <Stat n="100%" label="Miễn phí" />
              <Stat n="Mọi lúc" label="Mọi nơi" />
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Tại sao chọn MapStudy
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-slate-900 md:text-4xl">
            Học hiệu quả, nhớ lâu
          </h2>
          <p className="mt-3 text-slate-600">
            Tài nguyên được biên soạn kỹ lưỡng bởi đội ngũ MapStudy, chuẩn theo
            chương trình tiếng Anh phổ thông và luyện thi.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            icon={<BookOpen className="h-5 w-5" />}
            title="Đầy đủ V1 - V2 - V3"
            desc="Mỗi động từ có 3 dạng nguyên mẫu, quá khứ và quá khứ phân từ rõ ràng."
          />
          <Feature
            icon={<Volume2 className="h-5 w-5" />}
            title="Phiên âm IPA chuẩn"
            desc="Phát âm chuẩn quốc tế giúp bạn tự tin nói tiếng Anh."
          />
          <Feature
            icon={<Target className="h-5 w-5" />}
            title="Nghĩa tiếng Việt"
            desc="Dịch nghĩa rõ ràng, dễ hiểu, sát ngữ cảnh sử dụng."
          />
          <Feature
            icon={<Sparkles className="h-5 w-5" />}
            title="Ví dụ thực tế"
            desc="Câu ví dụ ngắn gọn, dễ ghi nhớ và áp dụng vào bài viết."
          />
          <Feature
            icon={<Search className="h-5 w-5" />}
            title="Tìm kiếm tức thì"
            desc="Gõ là ra. Tìm theo V1, V2, V3 hoặc nghĩa tiếng Việt đều được."
          />
          <Feature
            icon={<Zap className="h-5 w-5" />}
            title="Luyện flashcard"
            desc="Học theo bộ thẻ ngẫu nhiên giúp bạn ghi nhớ chủ động hơn."
          />
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50/60 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Bắt đầu từ những từ phổ biến
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-slate-900 md:text-4xl">
              Một vài động từ tiêu biểu
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((v) => (
              <Link
                key={v.v1}
                href={`/verbs/${slugify(v.v1)}`}
                className="card-hover group flex flex-col rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400">
                    {v.ipa}
                  </span>
                  <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-700">
                    Verb
                  </span>
                </div>
                <h3 className="mt-2 font-heading text-2xl font-bold text-slate-900 group-hover:text-brand-700">
                  {v.v1}
                </h3>
                <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
                  <Cell label="V1" value={v.v1} />
                  <Cell label="V2" value={v.v2} />
                  <Cell label="V3" value={v.v3} />
                </div>
                <p className="mt-4 text-sm text-slate-600">{v.meaning}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/verbs" className={buttonClasses("default", "lg")}>
              Xem toàn bộ 360 động từ
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-blue-600 to-indigo-700 p-1 shadow-xl">
          <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-brand-600 via-blue-600 to-indigo-700 px-6 py-12 text-center md:px-16 md:py-20">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <GraduationCap className="mx-auto h-10 w-10 text-white/90 sm:h-12 sm:w-12" />
            <h2 className="mt-4 font-heading text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Học tiếng Anh có lộ trình cùng MapStudy
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-white/90 sm:text-base">
              Hệ thống bài giảng, luyện đề và đội ngũ giáo viên giúp bạn tự tin
              chinh phục mọi kỳ thi quan trọng.
            </p>
            <Link
              href={siteConfig.brand.website}
              target="_blank"
              className={cn(
                buttonClasses("default", "lg"),
                "mt-8 bg-white text-brand-700 hover:bg-slate-100"
              )}
            >
              Tới trang MapStudy
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex flex-col items-center px-1 sm:px-2">
      <div className="font-heading text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
        {n}
      </div>
      <div className="mt-1 text-[10px] uppercase tracking-wider text-slate-500 sm:text-xs">
        {label}
      </div>
    </div>
  )
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="card-hover rounded-2xl border border-slate-200 bg-white p-6">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        {icon}
      </div>
      <h3 className="mt-4 font-heading text-lg font-bold text-slate-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
    </div>
  )
}

function Cell({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-slate-50 px-3 py-2">
      <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </div>
      <div className="truncate font-medium text-slate-900">{value}</div>
    </div>
  )
}

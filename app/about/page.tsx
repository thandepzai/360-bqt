import Link from "next/link"
import { ArrowRight, GraduationCap, Heart, Lightbulb, Users } from "lucide-react"
import { siteConfig } from "@/lib/site"
import { buttonClasses } from "@/components/ui/button"

export const metadata = {
  title: "Về MapStudy",
  description: "MapStudy đồng hành cùng học sinh trên hành trình chinh phục tri thức.",
}

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-slate-100 bg-gradient-to-b from-brand-50/60 to-white">
        <div className="container py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Về chúng tôi
            </p>
            <h1 className="mt-2 font-heading text-3xl font-bold text-slate-900 md:text-5xl">
              MapStudy - Học thông minh, đỗ điểm cao
            </h1>
            <p className="mt-4 text-slate-600 md:text-lg">
              Chúng tôi tin rằng mỗi học sinh đều có thể giỏi tiếng Anh khi được
              học đúng cách, có lộ trình và truyền cảm hứng.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href={siteConfig.brand.website}
                target="_blank"
                className={buttonClasses("gradient", "lg")}
              >
                Khám phá MapStudy
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Value icon={<GraduationCap className="h-5 w-5" />} title="Lộ trình rõ ràng" desc="Từ cơ bản tới nâng cao, mọi cấp độ đều có lộ trình phù hợp." />
          <Value icon={<Lightbulb className="h-5 w-5" />} title="Phương pháp hay" desc="Bài giảng dễ hiểu, ví dụ gần gũi, ghi nhớ chủ động." />
          <Value icon={<Users className="h-5 w-5" />} title="Cộng đồng tích cực" desc="Cùng nhau học, cùng nhau tiến bộ mỗi ngày." />
          <Value icon={<Heart className="h-5 w-5" />} title="Tận tâm" desc="Đội ngũ giáo viên đồng hành sát sao với từng học sinh." />
        </div>
      </section>

      <section className="container pb-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <h2 className="font-heading text-2xl font-bold text-slate-900 md:text-3xl">
            Vì sao có trang 360 động từ bất quy tắc?
          </h2>
          <div className="prose prose-slate mt-4 max-w-none text-slate-600">
            <p>
              Trong quá trình giảng dạy, MapStudy nhận thấy động từ bất quy tắc
              luôn là phần kiến thức khiến học sinh đau đầu. Vì thế chúng tôi
              tổng hợp đầy đủ <strong>360 động từ</strong> phổ biến nhất, bổ
              sung phiên âm chuẩn, nghĩa tiếng Việt và ví dụ thực tế.
            </p>
            <p>
              Trang web này hoàn toàn miễn phí, mong muốn giúp các bạn học sinh
              tiết kiệm thời gian tra cứu và học tập hiệu quả hơn.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

function Value({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        {icon}
      </div>
      <h3 className="mt-3 font-heading text-lg font-bold text-slate-900">
        {title}
      </h3>
      <p className="mt-1.5 text-sm text-slate-600">{desc}</p>
    </div>
  )
}

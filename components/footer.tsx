import Link from "next/link"
import { BookOpen, Facebook, Youtube, Globe } from "lucide-react"
import { siteConfig } from "@/lib/site"

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="container grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-indigo-600 shadow-md">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="font-heading font-bold text-slate-900">
                360 Động Từ Bất Quy Tắc
              </div>
              <div className="text-[11px] font-medium uppercase tracking-wider text-brand-600">
                by MapStudy
              </div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
            Tài nguyên học tập miễn phí từ MapStudy. Cùng học, cùng tiến bộ và
            chinh phục tiếng Anh dễ dàng hơn mỗi ngày.
          </p>
          <div className="mt-5 flex gap-3">
            <Link
              href={siteConfig.brand.website}
              target="_blank"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-brand-300 hover:text-brand-600"
              aria-label="Website"
            >
              <Globe className="h-4 w-4" />
            </Link>
            <Link
              href={siteConfig.brand.fb}
              target="_blank"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-brand-300 hover:text-brand-600"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <Link
              href={siteConfig.brand.youtube}
              target="_blank"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-brand-300 hover:text-brand-600"
              aria-label="YouTube"
            >
              <Youtube className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Khám phá</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brand-600">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">MapStudy</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
            <li>
              <Link
                href={siteConfig.brand.website}
                target="_blank"
                className="hover:text-brand-600"
              >
                Trang chủ MapStudy
              </Link>
            </li>
            <li>Khoá học chất lượng</li>
            <li>Đội ngũ giáo viên giỏi</li>
            <li>Học mọi lúc, mọi nơi</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="container flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} MapStudy. Học vui, học hiệu quả.</p>
          <p>
            Made with <span className="text-rose-500">♥</span> for người học tiếng Anh
          </p>
        </div>
      </div>
    </footer>
  )
}

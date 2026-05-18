"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, BookOpen } from "lucide-react"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"
import { buttonClasses } from "@/components/ui/button"

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-indigo-600 shadow-md">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <div className="font-heading font-bold text-slate-900">360 BQT</div>
            <div className="text-[10px] font-medium uppercase tracking-wider text-brand-600">
              by MapStudy
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-brand-50 text-brand-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                {item.title}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href={siteConfig.brand.website}
            target="_blank"
            className={buttonClasses("gradient", "default")}
          >
            Khám phá MapStudy
          </Link>
        </div>

        <button
          className="md:hidden"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white md:hidden">
          <div className="container flex flex-col gap-1 py-3">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {item.title}
              </Link>
            ))}
            <Link
              href={siteConfig.brand.website}
              target="_blank"
              className={cn(buttonClasses("gradient", "default"), "mt-2 w-full")}
            >
              Khám phá MapStudy
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

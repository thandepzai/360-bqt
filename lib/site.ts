export const siteConfig = {
  name: "360 Động Từ Bất Quy Tắc",
  description:
    "Học 360 động từ bất quy tắc tiếng Anh đầy đủ nhất - V1, V2, V3, phiên âm, nghĩa và ví dụ. Học cùng MapStudy.",
  url: "https://mapstudy.edu.vn",
  ogImage: "/og.png",
  brand: {
    name: "MapStudy",
    tagline: "Học thông minh, đỗ điểm cao",
    website: "https://mapstudy.edu.vn",
    fb: "https://facebook.com/mapstudy.vn",
    youtube: "https://youtube.com/@mapstudy",
  },
  nav: [
    { title: "Trang chủ", href: "/" },
    { title: "Danh sách động từ", href: "/verbs" },
    { title: "Luyện tập", href: "/practice" },
    { title: "Về MapStudy", href: "/about" },
  ],
}

export type SiteConfig = typeof siteConfig

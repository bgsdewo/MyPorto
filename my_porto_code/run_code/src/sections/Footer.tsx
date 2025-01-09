import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Github",
    href: "https://github.com/bgsdewo",
  },
  {
    title: "Tiktok",
    href: "https://www.tiktok.com/@f719214?_t=8sLgeXnpEtl&_r=1",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/bgsdewo/?next=%2F",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/bgsdewo/",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip z-10">
      {" "}
      {/* Perbaiki z-index */}
      <div
        className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30
        [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] pointer-events-none -z-10"
      ></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8">
          {/* Hak Cipta */}
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          {/* Navigasi Tautan */}
          <nav className="flex flex-col md:flex-row md:justify-between items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                className="inline-flex items-center gap-1.5 font-semibold text-white/70 hover:text-white transition duration-300"
              >
                <span>{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

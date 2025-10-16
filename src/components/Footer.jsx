import { FeatherIcon } from '../utils/feather';

const Footer = () => {
  const navItems = [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Jobs", href: "/jobs" },
    { label: "Press", href: "/press" },
    { label: "Accessibility", href: "/accessibility" },
    { label: "Partners", href: "/partners" },
  ];

  const socialLinks = [
    { name: "twitter", href: "https://twitter.com/" },
    { name: "instagram", href: "https://www.instagram.com/lead_automations/" },
    { name: "linkedin", href: "https://www.linkedin.com/" },
  ];

  // helper: open link as a fallback (useful if default anchor navigation is blocked)
  const openExternal = (url) => {
    try {
      window.open(url, "_blank", "noopener,noreferrer");
    } catch (err) {
      // last resort
      window.location.href = url;
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        {/* Navigation Links */}
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navItems.map((item) => (
            <div key={item.label} className="px-5 py-2">
                <span className="text-gray-300 inline-block pointer-events-auto" aria-hidden="true">
              <a
                href={item.href}
                className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
              </span>
            </div>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center space-x-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              // normal anchor behavior
              target="_blank"
              rel="noopener noreferrer"
              // force pointer events and ensure it's above overlays
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors pointer-events-auto z-10"
              aria-label={social.name}
              // accessibility
              tabIndex={0}
              // fallback click handler in case navigation is blocked by something else
              onClick={(e) => {
                // allow default for normal behavior, but also ensure window.open fallback
                // avoid double-open by only running fallback for non-meta clicks
                if (
                  !e.metaKey &&
                  !e.ctrlKey &&
                  !e.shiftKey &&
                  !e.altKey
                ) {
                  e.preventDefault();
                  openExternal(social.href);
                }
              }}
              // keyboard Enter fallback
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  openExternal(social.href);
                }
              }}
            >
              {/* Force pointer events on the actual icon - in case FeatherIcon sets pointer-events-none */}
              <span className="inline-block w-6 h-6 pointer-events-auto" aria-hidden="true">
                <FeatherIcon
                  name={social.name}
                  // ensure the icon receives our class (override defaults)
                  className="w-6 h-6 pointer-events-auto"
                />
              </span>
            </a>
          ))}
        </div>

        {/* Footer Text */}
        <p className="mt-8 text-center text-base text-gray-400 dark:text-gray-500">
          &copy; 2025 LeadLoom. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

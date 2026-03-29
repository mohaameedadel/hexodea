import { Link } from "react-router";

export function Footer() {
  return (
    <div className="pt-10 lg:pt-16 px-4 lg:px-section bg-white">
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-20 pb-16 border-b border-dark/15">
        <div className="lg:w-1/3">
          <div>
            <img src="/assets/logo.svg" alt="Hexodea" />
          </div>
          <p className="mt-2 mb-6 text-main text-lg font-normal">
            Interact Digitally
          </p>
          <p className="text-muted font-normal">
            Transforming ideas into powerful digital solutions that drive
            business growth and create meaningful user experiences.
          </p>
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center lg:text-left">
          <div>
            <h2 className="text-xl font-medium mb-6">Quick Links</h2>

            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Service", href: "/service" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "About", href: "/about" },
                { name: "Contact Us", href: "/contact-us" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    className="text-muted font-normal hover:text-gray-400"
                    to={item.href}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-6">Services</h2>

            <ul className="space-y-2">
              {[
                { name: "Custom Web Engineering", href: "/service/1" },
                { name: "Mobile App Strategy", href: "/service/2" },
                { name: "Cloud Solutions & DevOps", href: "/service/3" },
                { name: "End-to-End Product Engineering", href: "/service/4" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    className="text-muted font-normal hover:text-gray-400"
                    to={item.href}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-6">Get in Touch</h2>

            <p className="text-muted font-normal mb-6">hello@dotnaat.com</p>
            <p className="text-muted font-normal">+1 (555) 123-4567</p>

            <div className="flex items-center justify-center lg:justify-start gap-4 mt-12">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/hexodea"
              >
                <img
                  className="w-10 h-10"
                  src="/assets/home/icons/twitter.svg"
                  alt="twitter"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/hexodea"
              >
                <img
                  className="w-10 h-10"
                  src="/assets/home/icons/linkedin.svg"
                  alt="linkedin"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:hello@dotnaat.com"
              >
                <img
                  className="w-10 h-10"
                  src="/assets/home/icons/mail.svg"
                  alt="mail"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:justify-between items-center justify-center gap-4 flex-wrap py-8">
        <p className="text-muted text-base font-normal">
          © 2025 DotNaat. All rights reserved.
        </p>

        <ul className="flex items-center gap-8">
          {[
            { name: "Privacy Policy", href: "/" },
            { name: "Terms of Service", href: "/" },
            { name: "Cookie Policy", href: "/" },
          ].map((item) => (
            <li key={item.name}>
              <Link
                className="text-muted font-normal hover:text-gray-400"
                to={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

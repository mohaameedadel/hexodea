import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./hexodea/home/home.tsx"),
  route("service", "./hexodea/service/service.tsx"),
  route("portfolio", "./hexodea/portfolio/portfolio.tsx"),
  route("about", "./hexodea/about/about.tsx"),
  route("contact-us", "./hexodea/contact-us/contact-us.tsx"),
] satisfies RouteConfig;

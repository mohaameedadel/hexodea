import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./hexodea/home/home.tsx"),
  route("service", "./hexodea/service/service.tsx"),
  route("service/:serviceId", "./hexodea/service/serviceDetails.tsx"),
  route("portfolio", "./hexodea/portfolio/portfolio.tsx"),
  route("portfolio/:portfolioId", "./hexodea/portfolio/portfolioDetails.tsx"),
  route("about", "./hexodea/about/about.tsx"),
  route("contact-us", "./hexodea/contact-us/contact-us.tsx"),
] satisfies RouteConfig;

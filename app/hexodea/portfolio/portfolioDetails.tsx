export default function PortfolioDetails({
  params,
}: {
  params: { portfolioId: string };
}) {
  return <div>{params.portfolioId}</div>;
}

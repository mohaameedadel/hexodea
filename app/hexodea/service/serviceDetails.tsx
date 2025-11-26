export default function ServiceDetails({
  params,
}: {
  params: { serviceId: string };
}) {
  return <div>{params.serviceId}</div>;
}

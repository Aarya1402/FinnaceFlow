export default function ArticlePage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-3xl font-bold">
        Article {params.id}
      </h1>
    </div>
  );
}
import { Suspense } from "react";

type ExplorePageProps = { params: Promise<{ name: string }> };

async function ExploreName({ params }: ExplorePageProps) {
  const { name } = await params;
  return <h1>{decodeURI(name)}</h1>;
}

const Page = ({ params }: ExplorePageProps) => {
  return (
    <div>
      <div className="restaurant-page-banner">
        <Suspense fallback={<h1>Loading...</h1>}>
          <ExploreName params={params} />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;

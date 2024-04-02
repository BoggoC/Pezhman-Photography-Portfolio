import { useFetchData } from "./fetchData";

const LandingPage = () => {
  const { loading, data } = useFetchData();

  if (loading) {
    return (
      <section className="landing-page">
        <h2>Loading...</h2>
      </section>
    );
  }

  return <h1>Image Gallery</h1>;
};

export default LandingPage;

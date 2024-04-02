import { useFetchData } from "./fetchData";

const About = () => {
  const { loading, data } = useFetchData();

  if (loading) {
    return (
      <section className="landing-page">
        <h2>Loading...</h2>
      </section>
    );
  }

  return <h1>About</h1>;
};

export default About;

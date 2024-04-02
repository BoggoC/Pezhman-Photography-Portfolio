import { useFetchData } from "./fetchData";

const NavBar = () => {
  const { loading, data } = useFetchData();

  if (loading) {
    return (
      <section className="landing-page">
        <h2>Loading...</h2>
      </section>
    );
  }

  return <h1>NavBar</h1>;
};

export default NavBar;

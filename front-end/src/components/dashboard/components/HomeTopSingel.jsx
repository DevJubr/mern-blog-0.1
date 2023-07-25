const HomeTopSingel = ({ icon, count, name }) => {
  return (
    <div className="home__top__singel">
      <div className="home__top__icon">{icon}</div>
      <div className="home__top__content">
        <h3 className="home__top_count">{count}</h3>
        <span className="home__top__for">{name}</span>
      </div>
    </div>
  );
};

export default HomeTopSingel;

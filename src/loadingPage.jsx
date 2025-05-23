const LoadingPage = () => {
  const logo = () => {
    let url = "/images/uzumaki-logo.png";
    return url;
  };
  return (
    <section
      id="hero-loading"
      className="flex justify-center items-center flex-row absolute top-0 bg-black mt-0 inset-x-0 inset-y-0"
    >
      <h2 id="welcomeLoading" className="text-white text-5xl"></h2>
      <div id="logo" className=" right-[25%] w-16 h-16 ">
        <img className="box-border" src={logo()}></img>
      </div>
    </section>
  );
};
export default LoadingPage;

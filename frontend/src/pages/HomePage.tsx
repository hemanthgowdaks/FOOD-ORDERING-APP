import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";

const HomePage = () => {
  return (
    <div className="bg-white rounded-lg shadow-md py-8 gap-5 text-center flex flex-col -mt-16">
      <h1 className="text-5xl tracking-tight text-bold font-bold text-orange-500">
        Tuck into a takeway today
      </h1>
      <span className="text-xl">Food is just a click away!</span>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col text-center items-center justify-center gap-4 ">
          <span className="font-bold text-3xl tracking-tight">
            Order takeaway even faster!
          </span>
          <span>
            Download the MernEats App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

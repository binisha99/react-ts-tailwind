import earbud from '/icons/earbud.png';
import earbudflip from '/icons/earbudflip.png';

export default function AboutUS() {
  return (
    <section className="about-bg non-container ">
      <div className="bg-[#edeae4]  min-h-[318px] flex items-center justify-center relative overflow-hidden">
        <h3 className="text-[54px] font-bold ?">Who are we</h3>
        <figure className="hidden md:flex">
          <img
            src={earbud}
            alt="earbud right corner"
            className="absolute -left-24 -bottom-32"
          />
        </figure>
        <figure className="hidden md:flex">
          <img
            src={earbudflip}
            alt="earbud right corner"
            className="absolute -top-32 -right-24"
          />
        </figure>
      </div>
      <div className="flex items-center gap-4 justify-center my-10 flex-col sm:flex-row ">
        <h3 className="font-bold text-[36px]">About us</h3>
        <p className="text-lg">your text here.</p>
      </div>
    </section>
  );
}

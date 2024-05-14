import question from '/icons/question.png';
import AccordionFaq from '../ui/accordion/Accordion';
export default function Faq() {
  return (
    <section className="strike-bg container mx-auto">
      <div className=" flex items-center justify-between gap-5 sm:gap-10 flex-col-reverse sm:flex-row">
        <div className="max-w-[745px] space-y-7">
          <h2 className="text-[42px] sm:text-[55px] font-medium text-center">
            Got Questions ?
          </h2>
          <p className="text-xl sm:text-2xl text-center">
            Welcome to our FAQ page – your go-to resource for quick answers
            about our products like Earbuds, Smartwatches, Wireless Speakers and
            more.
          </p>
        </div>
        <figure>
          <img
            src={question}
            alt="question mark icon"
            className="h-24 sm:h-[unset]"
          />
        </figure>
      </div>
      {/* accordion starts here */}
      <AccordionFaq title="Payment" answer="lornfsnfsnfsnnsd" />
      <AccordionFaq title="Order and Shipping" answer="lornfsnfsnfsnnsd" />
      <AccordionFaq title="Waranty" answer="lornfsnfsnfsnnsd" />
    </section>
  );
}

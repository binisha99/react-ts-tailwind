import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { LuMinus } from 'react-icons/lu';

export default function Accordion({ title, answer }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  return (
    <div className="mt-3 border-2 border-b-black p-3">
      <button className="flex justify-between w-full" onClick={toggleAccordion}>
        <span className="font-semibold text-lg md:text-2xl">{title}</span>
        <span>
          {accordionOpen ? (
            <LuMinus className="h-6 w-4" />
          ) : (
            <AiOutlinePlus className="h-6 w-6" />
          )}
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-sm ${
          accordionOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
}

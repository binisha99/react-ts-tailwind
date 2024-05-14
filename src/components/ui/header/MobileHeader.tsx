export default function MobileHeader() {
  const hamburgerHeader = [
    {
      label: 'My Account',
    },
    {
      label: 'About Us',
    },
    {
      label: 'Contact Us',
    },
  ];

  return (
    <div className="bg-cyan-200 absolute top-16 left-0 bg-primary-dark_violet py-10 px-10 w-1/2 border border-t-black z-40">
      <ul className="flex gap-8  flex-col h-full">
        {hamburgerHeader.map((item, index) => (
          <li key={index} className="text-base">
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

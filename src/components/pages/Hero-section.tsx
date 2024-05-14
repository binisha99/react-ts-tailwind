import headset from '/icons/headset.png';

export default function HeroSection() {
  const products = [
    { index: 0, product_number: '#one', img: headset, title: 'Title One' },
    { index: 1, product_number: '#two', img: headset, title: 'Title Two' },
    { index: 2, product_number: '#three', img: headset, title: 'Title Three' },
    { index: 3, product_number: '#four', img: headset, title: 'Title Four' },
    { index: 4, product_number: '#five', img: headset, title: 'Title Five' },
    { index: 5, product_number: '#six', img: headset, title: 'Title Six' },
  ];

  return (
    <section className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 place-items-center">
      {products.map((product) => (
        <div
          key={product.index}
          className="relative bg-gradient-to-r from-primary-item_right_dark via-primary-item_right_middle to-primary-item_right_light  p-10 w-full md:w-[290px] rounded-md min-h-[unset] md:min-h-[253px]"
        >
          <button className="bg-button-button_gray px-4 max-w-[77px] py-2 absolute top-2 left-3 rounded-md">
            {product.product_number}
          </button>
          <img
            src={product.img}
            alt="Image of product"
            className="object-contain object-center h-full w-full flex items-center justify-center"
          />
          <p className="text-center uppercase text-2xl font-semibold">
            {product.title}
          </p>
        </div>
      ))}
    </section>
  );
}

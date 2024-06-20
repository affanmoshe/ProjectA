import React from 'react';

interface Testimonial {
  name: string;
  quote: string;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Alice Johnson',
    quote: 'This company provided excellent service and I am very satisfied!',
    imageUrl: 'https://picsum.photos/id/64/4326/2884',
  },
  {
    name: 'Bob Smith',
    quote: 'Great experience! Highly recommended.',
    imageUrl: 'https://picsum.photos/id/1/200/300',
  },
  {
    name: 'Carol White',
    quote: 'The best service I have ever used. Will come back for sure!',
    imageUrl: 'https://picsum.photos/id/22/4434/3729',
  },
];

export function Testimonial() {
  return (
    <section className="bg-gray-100 py-12" id="testimonial">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What our clients said about us</h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="max-w-sm w-full lg:w-1/4 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-56 object-cover object-center" src={testimonial.imageUrl} alt={testimonial.name} />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 italic">{testimonial.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

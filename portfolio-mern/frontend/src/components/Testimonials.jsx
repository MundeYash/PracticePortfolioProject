import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { quote: "John's expertise in software development is unparalleled. His ability to solve complex problems and deliver high-quality code is truly impressive.", author: "Jane Doe, Senior Project Manager" },
    { quote: "Working with John has been a pleasure. His dedication, attention to detail, and collaborative spirit make him an invaluable asset to any team.", author: "Mike Smith, Lead Developer" },
    { quote: "John consistently exceeds expectations with his innovative solutions and deep understanding of modern technologies. He is a true professional.", author: "Sarah Johnson, CTO" },
    { quote: "John's technical skills and proactive approach have significantly contributed to the success of our projects. He is a reliable and highly skilled developer.", author: "Emily Davis, Product Manager" },
  ];

  return (
    <div className="testimonials">
      <h3>Testimonials</h3>
      {testimonials.map((testimonial, index) => (
        <blockquote key={index}>
          <p>"{testimonial.quote}"</p>
          <footer>- {testimonial.author}</footer>
        </blockquote>
      ))}
    </div>
  );
};

export default Testimonials;
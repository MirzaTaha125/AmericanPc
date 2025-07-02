import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "American Design Eagle delivered a stunning website that boosted our business. Their team is creative, responsive, and truly cares about results!",
  },
  {
    name: "Michael Lee",
    role: "Founder, ",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "The process was smooth and the end product exceeded our expectations. Highly recommended for anyone serious about their online presence.",
  },
  {
    name: "Priya Patel",
    role: "Marketing Director",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "Professional, innovative, and always on time. We loved working with AmericanPc and will do so again!",
  },
];

const arrowStyle = {
  background: "#000",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  width: 38,
  height: 38,
  fontSize: "1.5rem",
  cursor: "pointer",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 2,
  boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
};

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: 370,
  maxWidth: 350,
  minWidth: 260,
  background: "#fff",
  borderRadius: 18,
  boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
  padding: "2rem 1.5rem 1.5rem 1.5rem",
  margin: "0 auto",
  position: "relative",
  transition: "transform 0.4s cubic-bezier(.4,1.3,.5,1), opacity 0.3s",
};

function useCardsPerView() {
  const [cards, setCards] = useState(getCardsPerView());
  function getCardsPerView() {
    if (window.innerWidth < 700) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }
  useEffect(() => {
    const handleResize = () => setCards(getCardsPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return cards;
}

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const cardsPerView = useCardsPerView();

  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  // Touch handlers (only for 1 card view)
  const handleTouchStart = (e) =>
    cardsPerView === 1 && setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) =>
    cardsPerView === 1 && setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (cardsPerView !== 1) return;
    if (touchStartX !== null && touchEndX !== null) {
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) next();
        else prev();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Get visible testimonials
  let visibleTestimonials = [];
  for (let i = 0; i < cardsPerView; i++) {
    visibleTestimonials.push(testimonials[(current + i) % testimonials.length]);
  }

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">What Our Clients Say</h2>
      <div
        style={{
          position: "relative",
          maxWidth: cardsPerView === 1 ? 370 : cardsPerView === 2 ? 800 : 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 400,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          style={{ ...arrowStyle, left: -50, position: "absolute" }}
          onClick={prev}
          aria-label="Previous testimonial"
        >
          &#8592;
        </button>
        <div
          style={{
            display: "flex",
            gap: 32,
            justifyContent: "center",
            alignItems: "stretch",
            width: "100%",
            position: "relative",
            height: 400,
          }}
        >
          {visibleTestimonials.map((t, idx) => (
            <div
              className="testimonial-card"
              key={idx}
              style={{
                ...cardStyle,
                opacity:
                  cardsPerView === 1
                    ? 1
                    : cardsPerView === 2
                    ? idx === 1
                      ? 1
                      : 0.7
                    : idx === 1
                    ? 1
                    : 0.7,
                margin: cardsPerView === 1 ? 0 : "0 auto",
                backgroundColor: "#181818",
              }}
            >
              <img
                src={t.photo}
                alt={t.name}
                className="testimonial-photo"
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: 20,
                  border: "3px solid #CA0F38",
                }}
              />
              <blockquote
                className="testimonial-quote"
                style={{
                  fontSize: "1.18rem",
                  color: "White",
                  fontStyle: "italic",
                  marginBottom: 20,
                  lineHeight: 1.7,
                  position: "relative",
                  textAlign: "center",
                  flex: 1,
                  width: "100%",
                }}
              >
                <span
                  style={{
                    color: "#CA0F38",
                    fontSize: "2.5rem",
                    position: "absolute",
                    left: -20,
                    top: -20,
                    fontFamily: "serif",
                    opacity: 0.7,
                  }}
                >
                  &ldquo;
                </span>
                {t.quote}
              </blockquote>
              <div
                className="testimonial-info"
                style={{
                  marginTop: "auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  className="testimonial-name"
                  style={{
                    fontWeight: 700,
                    color: "#CA0F38",
                    fontSize: "1.08rem",
                  }}
                >
                  {" "}
                  {t.name}{" "}
                </span>
                <span
                  className="testimonial-role"
                  style={{ color: "#666", fontSize: "0.98rem", marginTop: 2 }}
                >
                  {" "}
                  {t.role}{" "}
                </span>
              </div>
            </div>
          ))}
        </div>
        <button
          style={{ ...arrowStyle, right: -50, position: "absolute" }}
          onClick={next}
          aria-label="Next testimonial"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default Testimonial;

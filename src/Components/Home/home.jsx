import React, { useEffect, useState, useRef } from "react";
import "./home.css";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image4 from "../../assets/images/image4.jpg";
import whyus from "../../assets/images/whyus.jpg"  
import { 
  FaLaptopCode, 
  FaCogs, 
  FaChartLine, 
  FaCloud, 
  FaShieldAlt, 
  FaUsers, 
  FaRocket, 
  FaLightbulb 
} from "react-icons/fa";


const Home = () => {
    const images = [image1, image2, image4];
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsRef = useRef([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [images.length]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show-card");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        cardsRef.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* 🔷 HERO SECTION */}
            <section className="hero-section">
                <div
                    className="hero-bg"
                    style={{ backgroundImage: `url(${images[currentIndex]})` }}
                ></div>

                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <h1>Welcome to B2Y Infy Solutions</h1>
                    <p>
                        Delivering innovative software products & tailored IT services to
                        help businesses scale efficiently and grow sustainably.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn-primary">Our Products</button>
                        <button className="btn-secondary">Our Services</button>
                    </div>
                </div>
            </section>

            {/* 🔷 ABOUT US SECTION */}
            <section className="about-section">
                <p className="about-label">ABOUT US</p>
                <h2 className="about-title">
                    We build <span>impactful software products</span> and deliver
                    <span> cutting-edge services</span> driven by technology and teamwork.
                </h2>




                <div className="about-cards">
                    {[
                        {
                            icon: <FaLaptopCode />,
                            title: "Custom Software Development",
                            desc: "We design and develop powerful web and mobile applications that solve real-world business challenges with efficiency and innovation.",
                        },
                        {
                            icon: <FaCogs />,
                            title: "IT Services & Solutions",
                            desc: "Our team delivers reliable IT consulting, automation, and infrastructure management solutions to help companies stay agile.",
                        },
                        {
                            icon: <FaChartLine />,
                            title: "Product Innovation & Scaling",
                            desc: "From MVP to enterprise solutions, we help businesses build, optimize, and scale digital products that drive measurable results.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="about-card"
                            ref={(el) => (cardsRef.current[index] = el)}
                            style={{ transitionDelay: `${index * 0.2}s` }}
                        >
                            <div className="icon-wrapper">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
  {/* 🔷 WHY CHOOSE US SECTION */}
<section className="whychooseus-section">
  <div className="whychooseus-container">
    {/* Left Content */}
    <div className="whychooseus-left">
      <p className="whychooseus-label">WHY CHOOSE US</p>
     
    

      <div className="why-feature">
  <span className="why-icon"><FaLightbulb /></span>
  <div>
    <h4>Continuous Innovation</h4>
    <p>We stay ahead of trends by embracing emerging technologies like AI, IoT, and automation to future-proof your digital ecosystem.</p>
  </div>
</div>

<div className="why-feature">
  <span className="why-icon"><FaShieldAlt /></span>
  <div>
    <h4>Security & Reliability First</h4>
    <p>Our engineering practices are grounded in robust security frameworks to protect your data, assets, and infrastructure at every stage.</p>
  </div>
</div>

<div className="why-feature">
  <span className="why-icon"><FaUsers /></span>
  <div>
    <h4>Dedicated Client Partnership</h4>
    <p>We believe in long-term collaboration — offering ongoing support, transparent communication, and results-driven solutions.</p>
  </div>
</div>

<div className="why-feature">
  <span className="why-icon"><FaRocket /></span>
  <div>
    <h4>Agile & Scalable Delivery</h4>
    <p>Our agile methodology ensures rapid development cycles, faster go-to-market, and seamless scalability as your needs grow.</p>
  </div>
</div>

<div className="why-feature">
   <span className="why-icon"><FaUsers /></span>
    <div>
      <h4>Dedicated Team Collaboration</h4>
      <p>We work as your extended team, ensuring smooth communication and consistent delivery.</p>
    </div>
</div>
    </div>

  
    <div className="whychooseus-right">
      <div className="why-image-wrapper">
        <img src={whyus} alt="Why Choose B2Y Infy Solutions" />
        <div className="why-glow"></div>
      </div>
      <p className="why-quote">
        “We don’t just deliver software — we deliver <strong>solutions</strong> that empower growth, innovation, and scalability.”
      </p>
    </div>
  </div>
</section>


        </>
    );
};

export default Home;

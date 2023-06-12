


function App() {
  
  return (
    <>
      {/* ======= Header ======= */}
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.png" alt=""> */}
            <h1>
              IDHub<span>.</span>
            </h1>
          </a>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a href="#" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#get-started">Benefits</a>
              </li>
              <li>
                <a href="#services">how it works</a>
              </li>
              <li>
                <a href="#about">Why Choose Us</a>
              </li>
              <li>
                <a href="#contact">Get in touch</a>
              </li>
            </ul>
          </nav>
          {/* .navbar */}
        </div>
      </header>

      {/* End Header */}
      {/* ======= Hero Section ======= */}


   
      <section id="hero" className="hero">
        <div className="info d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <h2 data-aos="fade-down">
                  Launch Your Freelancing Career in the UAE
                  <span> Starting from AED 7,500 </span>
                </h2>
                {/* <p data-aos="fade-up"> Discover the limitless power of Emirates ID, connecting you to a future of convenience and endless possibilities.</p> */}
                <a
                  data-aos="fade-up"
                  data-aos-delay={200}
                  href="#get-started"
                  className="btn-get-started"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="hero-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval={5000}
        >
          <div
            className="carousel-item active"
            style={{
              backgroundImage:
                "url(assets/img/hero-carousel/hero-carousel-1.jpg)",
            }}
          />
          <div
            className="carousel-item"
            style={{
              backgroundImage:
                "url(assets/img/hero-carousel/hero-carousel-2.jpg)",
            }}
          />
          <div
            className="carousel-item"
            style={{
              backgroundImage:
                "url(assets/img/hero-carousel/hero-carousel-3.jpg)",
            }}
          />
          <div
            className="carousel-item"
            style={{
              backgroundImage:
                "url(assets/img/hero-carousel/hero-carousel-4.jpg)",
            }}
          />
          <div
            className="carousel-item"
            style={{
              backgroundImage:
                "url(assets/img/hero-carousel/hero-carousel-5.jpg)",
            }}
          />
          <a
            className="carousel-control-prev"
            href="#hero-carousel"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bi bi-chevron-left"
              aria-hidden="true"
            />
          </a>
          <a
            className="carousel-control-next"
            href="#hero-carousel"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bi bi-chevron-right"
              aria-hidden="true"
            />
          </a>
        </div>
      </section>
      {/* End Hero Section */}
      <main id="main">
        <section id="get-started" className="alt-services">
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-around gy-4">
              <div
                className="col-lg-6 img-bg"
                style={{ backgroundImage: "url(assets/img/alt-services.jpg)" }}
                data-aos="zoom-in"
                data-aos-delay={100}
              />
              <div className="col-lg-5 d-flex flex-column justify-content-center">
                <h3>
                  Unlock Limitless Opportunities with Our Freelance Visa
                  Benefits
                </h3>
                <div>
                  <div
                    className="icon-box d-flex position-relative"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <i className="bi bi-house-fill flex-shrink-0" />
                    <div>
                      <h4>
                        <a className="stretched-link">
                          {" "}
                          Residence Visa
                        </a>
                      </h4>
                      <p>
                        Obtain a legal residence visa in the UAE, allowing you
                        to live and work in the country as a freelancer. Enjoy
                        the security and stability that comes with having a
                        valid residence visa.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Box */}
                  <div
                    className="icon-box d-flex position-relative"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <i className="bi bi-briefcase-fill flex-shrink-0" />
                    <div>
                      <h4>
                        <a className="stretched-link">
                          Work Permit
                        </a>
                      </h4>
                      <p>
                        Gain a work permit that authorizes you to engage in
                        freelance work within the UAE. This permit ensures that
                        you can legally operate as a freelancer and avail
                        various opportunities in the local market.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Box */}
                  <div
                    className="icon-box d-flex position-relative"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <i className="bi bi-person-badge-fill flex-shrink-0" />
                    <div>
                      <h4>
                        <a className="stretched-link">
                          {" "}
                          Emirates ID
                        </a>
                      </h4>
                      <p>
                        Obtain an Emirates ID, a mandatory identification card
                        in the UAE. This ID provides you with official proof of
                        identity and grants you access to a wide range of
                        essential services and facilities across the country.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Box */}
                  <div
                    className="icon-box d-flex position-relative"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <i className="bi bi-heart-fill flex-shrink-0" />
                    <div>
                      <h4>
                        <a  className="stretched-link">
                          UAE Medical Insurance
                        </a>
                      </h4>
                      <p>
                        Enjoy the benefits of UAE medical insurance, which
                        covers your healthcare needs. With this coverage, you
                        can have peace of mind knowing that you have access to
                        quality healthcare services in case of illness or
                        emergencies.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Box */}
                  <div
                    className="icon-box d-flex position-relative"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <i className="bi bi-credit-card-fill flex-shrink-0" />
                    <div>
                      <h4>
                        <a  className="stretched-link">
                          Support to open a Bank Account
                        </a>
                      </h4>
                      <p>
                        Receive assistance and support in opening a bank account
                        in the UAE. This facilitates smooth financial
                        transactions and provides you with the convenience of
                        managing your finances effectively.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Box */}
                  <div
                    className="icon-box d-flex position-relative"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <i className="bi bi-check2-all flex-shrink-0" />
                    <div>
                      <h4>
                        <a  className="stretched-link">
                          {" "}
                          Unlimited NOC’s
                        </a>
                      </h4>
                      <p>
                        Benefit from unlimited No Objection Certificates (NOCs)
                        that enable you to work on multiple projects
                        simultaneously. This flexibility allows you to explore
                        diverse freelance opportunities without restrictions.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Box */}
                  <div
                    className="icon-box d-flex position-relative"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <i className="bi bi-wallet2 flex-shrink-0" />
                    <div>
                      <h4>
                        <a className="stretched-link">
                          {" "}
                          Invoicing Support
                        </a>
                      </h4>
                      <p>
                        Access invoicing support services that simplify the
                        process of generating professional invoices for your
                        freelance work. This helps you maintain a streamlined
                        financial record and ensures smooth transactions with
                        your clients.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Box */}
                  <div
                    className="icon-box d-flex position-relative"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <i className="bi bi-file-earmark-text flex-shrink-0" />
                    <div>
                      <h4>
                        <a  className="stretched-link">
                          Salary Certificate
                        </a>
                      </h4>
                      <p>
                        Obtain a salary certificate as proof of your income,
                        which can be beneficial for various purposes such as
                        visa renewal, rental agreements, or loan applications.
                        This document adds credibility and enhances your
                        financial profile.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Box */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Alt Services Section */}
        {/* ======= Services Section ======= */}
        <section id="services" className="services section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>How It Works</h2>
              <p>
                Obtain your freelance visa effortlessly with our streamlined
                process. Follow our simple guide to submit your application and
                unlock new freelance opportunities.
              </p>
            </div>
            <div className="row gy-4">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                  <i className="fas fa-comments"></i>
                  </div>
                  <h3>Get in Touch</h3>
                  <p>
                    Start by scheduling a consultation with our team to assess
                    your eligibility for the freelance visa. We'll review your
                    qualifications, discuss requirements, and answer any
                    questions you may have.
                  </p>
                  <a
                    href="service-details.html"
                    className="readmore stretched-link"
                  >
                    Learn more <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-file-earmark-fill" />
                  </div>
                  <h3>Document Preparation:</h3>
                  <p>
                    Upload the necessary documents, such as your passport copy
                    and identification, to support your application.
                  </p>
                  <a
                    href="service-details.html"
                    className="readmore stretched-link"
                  >
                    Learn more <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                  <i className="fas fa-paper-plane"></i>

                  </div>
                  <h3>Application Submission:</h3>
                  <p>
                    Our expert team thoroughly reviews your application to
                    ensure accuracy and completeness.
                  </p>
                  <a
                    href="service-details.html"
                    className="readmore stretched-link"
                  >
                    Learn more <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-gear-fill" />
                  </div>
                  <h3>Processing and Verification:</h3>
                  <p>
                    Sit back and relax as we handle the visa processing on your
                    behalf, keeping you updated throughout the process.
                  </p>
                  <a
                    href="service-details.html"
                    className="readmore stretched-link"
                  >
                    Learn more <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-credit-card-2-front-fill" />
                  </div>
                  <h3>Visa Issuance:</h3>
                  <p>
                    Once approved, we notify you promptly, confirming that your
                    freelance visa is ready for collection.
                  </p>
                  <a
                    href="service-details.html"
                    className="readmore stretched-link"
                  >
                    Learn more <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                  <i className="fas fa-handshake"></i>

                  </div>
                  <h3>Post-Visa Support</h3>
                  <p>
                    Visit our convenient location to collect your freelance visa
                    and embark on your journey to success.
                  </p>
                  <a
                    href="service-details.html"
                    className="readmore stretched-link"
                  >
                    Learn more <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              {/* End Service Item */}
            </div>
          </div>
        </section>
        {/* End Services Section */}
        <section id="about" className="about">
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <div className="row position-relative">
              <div
                className="col-lg-7 about-img"
                style={{ backgroundImage: "url(assets/img/about.jpg)" }}
              />
              <div className="col-lg-7">
                <h2>Why Choose Us</h2>
                <div className="our-story">
                  <h4>Experience the Difference</h4>
                  <h3>Our Story</h3>
                  <p>
                    Experience our seamless freelance visa services. Our expert
                    team ensures a hassle-free application process, guiding you
                    every step of the way. Trust us for accurate and compliant
                    visa applications.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle" />
                      <span>
                        <b> Expert Guidance: </b>Personalized support from our
                        experienced professionals throughout the visa
                        application process.
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-check-circle" />
                      <span>
                        <b>Timely Results: </b> We prioritize efficiency and
                        ensure quick turnaround times for your visa application.
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-check-circle" />
                      <span>
                        <b> Extensive Knowledge: </b> Efficient processing with
                        quick turnaround times for your visa application.
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-check-circle" />
                      <span>
                        <b>Customer Satisfaction:</b> Exceptional customer
                        service that exceeds your expectations.
                      </span>
                    </li>
                  </ul>
                  <p>
                    Choose us as your trusted partner and embark on your
                    freelance journey with confidence.
                  </p>
                  <div className="watch-video d-flex align-items-center position-relative">
                    <i className="bi bi-play-circle" />
                    <a
                      href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                      className="glightbox stretched-link"
                    >
                      Watch Video
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ======= Our Projects Section ======= */}
        {/* End Our Projects Section */}
        {/* ======= Testimonials Section ======= */}
        <section id="testimonials" className="testimonials section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Testimonials</h2>
              <p>
                Discover success stories from our clients who have transformed
                their careers with our Freelance Visa services.
              </p>
            </div>
            <div className="slides-2 swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-1.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Sarah Roberts</h3>
                      <h4>Entrepreneur</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                      <p>
                        "I'm grateful for your Emirates ID service. It saved me
                        a lot of time and effort. The team was friendly and
                        provided exceptional support. Highly recommended!"
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-2.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>John Smith</h3>
                      <h4>Business Owner</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                      <p>
                        "I had a great experience with the Emirates ID service
                        provided by your team. The process was smooth and
                        efficient. Highly recommended!"
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-3.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Lisa Johnson</h3>
                      <h4>Freelancer</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                      </div>
                      <p>
                        "Obtaining my Emirates ID was a breeze with your
                        service. The team was responsive and guided me through
                        the entire process. I'm impressed!"
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}

                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-4.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Emily Davis</h3>
                      <h4>Expatriate</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                        <i className="bi bi-star" />
                      </div>
                      <p>
                        "I highly recommend your Emirates ID service. The team
                        was professional and knowledgeable, and they made the
                        entire process stress-free."
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-5.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>David Brown</h3>
                      <h4>HR Manager</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                      </div>
                      <p>
                        "Your Emirates ID service exceeded my expectations. The
                        team was professional, and they delivered the ID cards
                        on time. Fantastic job!"
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
              </div>
              <div className="swiper-pagination" />
            </div>

          
          </div>
        </section>
        {/* End Testimonials Section */}
        <section id="get-started" className="get-started">
          <div className="container">
            <div className="row justify-content-between gy-4">
              <div
                className="col-lg-6 d-flex align-items-center"
                data-aos="fade-up"
              >
                <div className="content">
                  <h3>Get in Touch with Us.</h3>
                  <p>
                    Experience the convenience of our online Emirates ID
                    generation services. Fill out the form below and our team
                    will get back to you promptly with a personalized quote
                    tailored to your needs. Take the first step towards a
                    hassle-free visa application process.
                  </p>
                </div>
              </div>
              <div className="col-lg-5" data-aos="fade">
                <form
                  action="forms/quote.php"
                  method="post"
                  className="php-email-form section-bg"
                >
                  <h3>Contact Form</h3>
                  <p>
                    Feel free to reach out to us with any questions or
                    inquiries. We're here to assist you every step of the way.
                  </p>
                  <div className="row gy-3 section-bg">
                    <div className="col-md-12">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
              
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                 
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        placeholder="Phone"
                  
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        name="nationality"
                        placeholder="Nationality"
                 
                      />
                    </div>
                    <div className="col-md-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={6}
                        placeholder="Do you have any questions"
            
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">
                        Your quote request has been sent successfully. Thank
                        you!
                      </div>
                      <button type="submit">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
              {/* End Quote Form */}
            </div>
          </div>
        </section>
        {/* End Get Started Section */}
      </main>
      {/* End #main */}
      {/* ======= Footer ======= */}
      <footer id="footer" className="footer">
        <div className="footer-content position-relative">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-info">
                  <h3>IDhub</h3>
                  <p>
                    <strong>Phone:</strong> +971 555341450
                    <br />
                    <strong>Email:</strong> info@example.com
                    <br />
                  </p>
                  <div className="social-links d-flex mt-3">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-twitter" />
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-facebook" />
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-instagram" />
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End footer info column*/}
              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#get-started">Benefits</a>
                  </li>
                  <li>
                    <a href="#">how it works</a>
                  </li>
                  <li>
                    <a href="#">testimonials</a>
                  </li>
                  <li>
                    <a href="#">Get in touch</a>
                  </li>
                </ul>
              </div>
              {/* End footer links column*/}
              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <a href="#">Product Management</a>
                  </li>
                  <li>
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <a href="#">Graphic Design</a>
                  </li>
                </ul>
              </div>
              {/* End footer links column*/}
              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Hic solutasetp</h4>
                <ul>
                  <li>
                    <a href="#">Molestiae accusamus iure</a>
                  </li>
                  <li>
                    <a href="#">Excepturi dignissimos</a>
                  </li>
                  <li>
                    <a href="#">Suscipit distinctio</a>
                  </li>
                  <li>
                    <a href="#">Dilecta</a>
                  </li>
                  <li>
                    <a href="#">Sit quas consectetur</a>
                  </li>
                </ul>
              </div>
              {/* End footer links column*/}
              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Nobis illum</h4>
                <ul>
                  <li>
                    <a href="#">Ipsam</a>
                  </li>
                  <li>
                    <a href="#">Laudantium dolorum</a>
                  </li>
                  <li>
                    <a href="#">Dinera</a>
                  </li>
                  <li>
                    <a href="#">Trodelas</a>
                  </li>
                  <li>
                    <a href="#">Flexo</a>
                  </li>
                </ul>
              </div>
              {/* End footer links column*/}
            </div>
          </div>
        </div>
        <div className="footer-legal text-center position-relative">
          <div className="container">
            <div className="copyright">
              © Copyright{" "}
              <strong>
                <span>IDHub</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/upconstruction-bootstrap-construction-website-template/ */}
              {/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
            </div>
          </div>
        </div>
      </footer>
      <a
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
      {/* <div id="preloader" /> */}
    </>
  );
}

export default App;

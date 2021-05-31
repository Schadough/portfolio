// @ts-ignore
const { Container, Row, Carousel } = ReactBootstrap;

(() => {
  const SkillCarousel = () => {
    return (
      <>
        <Carousel className="container-md" nextLabel="" prevLabel="">
          <Carousel.Item>
            <h2 className="text-center text-light">4 Years Experience</h2>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <img 
                src="../images/skills/cpp.svg"
                alt="picture of a c++ logo" 
                className="d-block mx-auto h-25 w-25"
              />
            </a>
          </Carousel.Item>
        </Carousel>
      </>
    );
  };

  // @ts-ignore
  ReactDOM.render(<SkillCarousel />, document.querySelector("#skill-carousel"));
})();


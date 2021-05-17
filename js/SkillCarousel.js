const { Container, Row, Col } = ReactBootstrap;

(() => {
  "use_strict";

  const SkillCarousel = () => {
    return (
      <>
        <Container>
          <Row>
            <Col>Hello</Col>
            <Col>Hey</Col>
            <Col>Howdy</Col>
          </Row>
        </Container>
      </>
    );
  };

  ReactDOM.render(<SkillCarousel />, document.querySelector("#skill-carousel"));
})();

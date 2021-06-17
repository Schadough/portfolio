// @ts-nocheck
// @ts-ignore
const { Container, Row, Col, Carousel } = ReactBootstrap;

(() => {
  /**
   * @typedef {{ name: string; url: string; imageSrc: string; alt: string; timeSpent: number;}} Skill
   * 
   * @param {Array<Skill>} skills 
   * @returns 
   */
  const CarouselComponent = React.memo(({skills}) => {
    return (
      <Carousel className="container-md" controls={false} indicators={false}>
        {
          skills.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <h2 className="sc-title text-center text-light">{item.name}: {item.timeSpent} Years Experience</h2>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <img 
                    style={{
                      height: 200,
                      width: 200,
                      paddingBlock: "1em"
                    }}
                    src={item.imageSrc}
                    alt={item.alt}
                    className="d-block mx-auto"
                  />
                </a>
              </Carousel.Item>
            );
          })
        }
      </Carousel>
    );
  });

  const SkillCarousel = () => {

    return (
      <>
      <Container>
        <Row className="sc-row">
          <Col lg style={{paddingBlock: "1em"}}>
            <CarouselComponent 
              skills={languages}
            />
          </Col>
          <Col lg style={{paddingBlock: "1em"}}>
            <CarouselComponent 
              skills={frontend}
            />
          </Col>
        </Row>
        <Row className="sc-row">
          <Col lg style={{paddingBlock: "1em"}}>
           <CarouselComponent 
              skills={backend}
           />
          </Col>
          <Col lg style={{paddingBlock: "1em"}}>
           <CarouselComponent 
              skills={technologies}
           />
          </Col>
        </Row>
      </Container>
      </>
    );
  };

  const languages = [
    {
      name: "Javascript",
      url: "https://www.javascript.com/",
      imageSrc:
        "../images/skills/js.svg",
      alt: "Slide displaying the Javascript Logo",
      timeSpent: 4,
    },
    {
      name: "Typescript",
      url: "https://www.typescriptlang.org/",
      imageSrc: "../images/skills/ts.svg",
      alt: "Slide displaying the Typescript Logo",
      timeSpent: 3,
    },
    {
      name: "Java",
      url: "https://www.java.com/en/",
      imageSrc: "../images/skills/java.svg",
      alt: "Slide displaying the Java Logo",
      timeSpent: 4,
    },
    {
      name: "Golang",
      url: "https://golang.org/",
      imageSrc: "../images/skills/go.svg",
      alt: "Slide displaying the Golang Logo",
      timeSpent: 1,
    },
    {
      name: "Swift",
      url: "https://developer.apple.com/swift/",
      imageSrc: "../images/skills/swift.svg",
      alt: "Slide displaying the Swift Logo",
      timeSpent: 2,
    },
    {
      name: "HTML",
      url: "https://en.wikipedia.org/wiki/HTML",
      imageSrc:
        "../images/skills/html.svg",
      alt: "Slide displaying the HTML Logo",
      timeSpent: 3,
    },
    {
      name: "CSS",
      url: "https://en.wikipedia.org/wiki/CSS",
      imageSrc:
        "../images/skills/css.svg",
      alt: "Slide displaying the CSS Logo",
      timeSpent: 3,
    },
    {
      name: "Python",
      url: "https://www.python.org/",
      imageSrc: "../images/skills/python.svg",
      alt: "Slide displaying the Python Logo",
      timeSpent: 3,
    },
    {
      name: "C++",
      url: "https://www.cplusplus.com/",
      imageSrc: "../images/skills/cpp.svg",
      alt: "Slide displaying the C++ Logo",
      timeSpent: 5,
    },
  ];

  const frontend = [
    {
      name: "React",
      url: "https://reactjs.org/",
      imageSrc: "../images/skills/react.svg",
      alt: "Slide displaying the React Logo",
      timeSpent: 4,
    },
    {
      name: "React Native",
      url: "https://reactnative.dev/",
      imageSrc: "../images/skills/react.svg",
      alt: "Slide displaying the React Logo",
      timeSpent: 4,
    },
    {
      name: "Redux",
      url: "https://redux.js.org/",
      imageSrc: "../images/skills/redux.svg",
      alt: "Slide displaying the Redux Logo",
      timeSpent: 4,
    },
    {
      name: "NextJS",
      url: "https://nextjs.org/",
      imageSrc: "../images/skills/nextjs.svg",
      alt: "Slide displaying the NextJS Logo",
      timeSpent: 5,
    },
    {
      name: "GatsbyJS",
      url: "https://www.gatsbyjs.com/",
      imageSrc: "../images/skills/gatsby.svg",
      alt: "Slide displaying the Gatsby Logo",
      timeSpent: 5,
    },
    {
      name: "Bootstrap",
      url: "https://getbootstrap.com/",
      imageSrc: "../images/skills/bootstrap.svg",
      alt: "Slide displaying the Bootstrap Logo",
      timeSpent: 5,
    },
    {
      name: "Android Development",
      url: "https://developer.android.com/",
      imageSrc: "../images/skills/android.svg",
      alt: "Slide displaying the Android Logo",
      timeSpent: 4,
    },
    {
      name: "iOS Development",
      url: "https://developer.apple.com/",
      imageSrc: "../images/skills/apple.svg",
      alt: "Slide displaying the iOS Logo",
      timeSpent: 4,
    },

  ];
  const backend = [
    {
      name: "Spring",
      url: "https://spring.io/",
      imageSrc: "../images/skills/spring.svg",
      alt: "Slide displaying the Spring Logo",
      timeSpent: 5,
    },
    {
      name: "NodeJs",
      url: "https://nodejs.org/",
      imageSrc: "../images/skills/nodejs.svg",
      alt: "Slide displaying the NodeJS Logo",
      timeSpent: 5,
    },
    {
      name: "Express Js",
      url: "https://expressjs.com/",
      imageSrc: "../images/skills/express.svg",
      alt: "Slide displaying the Express Logo",
      timeSpent: 5,
    },
    {
      name: "Fastify",
      url: "https://www.fastify.io/",
      imageSrc: "../images/skills/fastify.svg",
      alt: "Slide displaying the Fastify Logo",
      timeSpent: 5,
    },
    {
      name: "NestJS",
      url: "https://nestjs.com/",
      imageSrc: "../images/skills/nestjs.svg",
      alt: "Slide displaying the NestJS Logo",
      timeSpent: 5,
    },
  ];
  const technologies = [
    {
      name: "REST",
      url: "https://www.redhat.com/en/topics/api/what-is-a-rest-api",
      imageSrc: "../images/skills/rest.svg",
      alt: "Slide displaying the REST logo",
      timeSpent: 5,
    },
    {
      name: "GraphQL",
      url: "https://graphql.org/",
      imageSrc: "../images/skills/graphql.svg",
      alt: "Slide displaying the GraphQL Logo",
      timeSpent: 5,
    },
    {
      name: "gRPC",
      url: "https://grpc.io/",
      imageSrc: "../images/skills/grpc.svg",
      alt: "Slide displaying the gRPC logo",
      timeSpent: 4,
    },
    {
      name: "Docker",
      url: "https://www.docker.com/",
      imageSrc: "../images/skills/docker.svg",
      alt: "Slide displaying the Docker logo",
      timeSpent: 5,
    },
    {
      name: "Kubernetes",
      url: "https://kubernetes.io/",
      imageSrc: "../images/skills/kubernetes.svg",
      alt: "Slide displaying the Kubernetes Logo",
      timeSpent: 5,
    },
    {
      name: "Linux",
      url: "https://www.linux.org/",
      imageSrc: "../images/skills/linux.svg",
      alt: "Slide displaying the Vim logo",
      timeSpent: 3,
    },
    {
      name: "AWS",
      url: "https://aws.amazon.com/",
      imageSrc: "../images/skills/aws.svg",
      alt: "Slide displaying the AWS Logo",
      timeSpent: 5,
    },
    {
      name: "GCP",
      url: "https://cloud.google.com/",
      imageSrc: "../images/skills/gcp.svg",
      alt: "Slide displaying the Google Cloud Platform Logo",
      timeSpent: 5,
    },
    {
      name: "Digital Ocean",
      url: "https://cloud.google.com/",
      imageSrc: "../images/skills/digitalocean.svg",
      alt: "Slide displaying the Google Cloud Platform Logo",
      timeSpent: 5,
    },
    {
      name: "Netlify",
      url: "https://cloud.google.com/",
      imageSrc: "../images/skills/netlify.svg",
      alt: "Slide displaying the Google Cloud Platform Logo",
      timeSpent: 5,
    },
    {
      name: "Vim",
      url: "https://www.vim.org/",
      imageSrc: "../images/skills/vim.svg",
      alt: "Slide displaying the Vim logo",
      timeSpent: 3,
    },
  ];

  // @ts-ignore
  ReactDOM.render(<SkillCarousel />, document.querySelector("#skill-carousel"));
})();


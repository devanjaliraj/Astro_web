import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Input,
  InputGroup,
  Form,
  Button,
} from "reactstrap";
import textbottom from "../../assets/img/textbottom.png";
import heroscope1 from "../../assets/img/heroscope/heroscope1.png";

class HomeCategory extends React.Component {
  render() {
    return (
      <div className="col-lg-12 col-md-12 mb-30">
        <div className="category-home">
          <section className="stt-1">
            <Container>
              <div className="heading">
                <h2>Horoscope Forecasts</h2>
                <img src={textbottom} alt="" />
              </div>
              <Row>
                <Col lg="2">
                  <div className="bx-1">
                    <Link>
                      <img src={heroscope1} alt=""></img>
                      <h5>Aries</h5>
                      <p>Mar 21 - Apr 19</p>
                    </Link>
                  </div>
                </Col>

                <Col lg="2">
                  <div className="bx-1">
                    <Link>
                      <img src={heroscope1} alt=""></img>
                      <h5>Taurus</h5>
                      <p>Mar 21 - Apr 19</p>
                    </Link>
                  </div>
                </Col>
                <Col lg="2">
                  <div className="bx-1">
                    <Link>
                      <img src={heroscope1} alt=""></img>
                      <h5>Gemini</h5>
                      <p>Mar 21 - Apr 19</p>
                    </Link>
                  </div>
                </Col>
                <Col lg="2">
                  <div className="bx-1">
                    <Link>
                      <img src={heroscope1} alt=""></img>
                      <h5>Cancer</h5>
                      <p>Mar 21 - Apr 19</p>
                    </Link>
                  </div>
                </Col>
                <Col lg="2">
                  <div className="bx-1">
                    <Link>
                      <img src={heroscope1} alt=""></img>
                      <h5>Leo</h5>
                      <p>Mar 21 - Apr 19</p>
                    </Link>
                  </div>
                </Col>
                <Col lg="2">
                  <div className="bx-1">
                    <Link>
                      <img src={heroscope1} alt=""></img>
                      <h5>Virgo</h5>
                      <p>Mar 21 - Apr 19</p>
                    </Link>
                  </div>
                </Col>
                <Col lg="2">
                  <div className="bx-1">
                    <Link>
                      <img src={heroscope1} alt=""></img>
                      <h5>Libra</h5>
                      <p>Mar 21 - Apr 19</p>
                    </Link>
                  </div>
                </Col>
                <Col lg="2">
                  <div className="bx-1">
                    <Link>
                      <img src={heroscope1} alt=""></img>
                      <h5>Scorpio</h5>
                      <p>Mar 21 - Apr 19</p>
                    </Link>
                  </div>
                </Col>
                <Col lg="2">
                  <div className="bx-1">
                    <Link>
                      <img src={heroscope1} alt=""></img>
                      <h5>Sagittarius</h5>
                      <p>Mar 21 - Apr 19</p>
                    </Link>
                  </div>
                </Col>
                <Col lg="2">
                  <div className="bx-1">
                    <Link>
                      <img src={heroscope1} alt=""></img>
                      <h5>Capricorn</h5>
                      <p>Mar 21 - Apr 19</p>
                    </Link>
                  </div>
                </Col>
                <Col lg="2">
                  <div className="bx-1">
                    <Link>
                      <img src={heroscope1} alt=""></img>
                      <h5>Aquarius</h5>
                      <p>Mar 21 - Apr 19</p>
                    </Link>
                  </div>
                </Col>
                <Col lg="2">
                  <div className="bx-1">
                    <Link>
                      <img src={heroscope1} alt=""></img>
                      <h5>Pisces</h5>
                      <p>Mar 21 - Apr 19</p>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    );
  }
}

export default HomeCategory;

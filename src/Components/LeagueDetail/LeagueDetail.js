import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./LeagueDetail.css";
import manBarcelona from "../../images/male.png";
import womanChelsea from "../../images/female.png";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faFlag,
    faFutbol,
    faMars,
    faGlobeAmericas,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const LeagueDetail = () => {
    const { idLeague } = useParams();

    // fetching data for getting league detail
    const [leagueDetail, setLeagueDetail] = useState({});
    useEffect(() => {
        fetch(
            `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        )
            .then((res) => res.json())
            .then((data) => setLeagueDetail(data.leagues[0]));
    }, [idLeague]);

    // destructuring the object "leagueDetail"
    const {
        strLeague,
        strBadge,
        strBanner,
        strDescriptionEN,
        intFormedYear,
        strCountry,
        strSport,
        strGender,
        strLeagueAlternate,
        strFacebook,
        strTwitter,
        strYoutube,
        strWebsite,
    } = leagueDetail;

    // conditional banner image
    let banner = "";
    if (strBanner === null) {
        banner =
            "https://tse3.mm.bing.net/th?id=OIP._9u8gujJ06AckvcvE488uwHaCp&pid=Api&P=0&w=441&h=158";
    } else {
        banner = strBanner;
    }

    // Image shown based on gender
    let conditionalImg;
    if (strGender?.toLowerCase() === "male") {
        conditionalImg = manBarcelona;
    } else if (
        strGender?.toLowerCase() === "female" ||
        strGender?.toLowerCase() === "mixed"
    ) {
        conditionalImg = womanChelsea;
    } else {
        conditionalImg = manBarcelona;
    }

    return (
        <div className="detail-container">
            <div
                className="banner-div"
                style={{
                    backgroundImage: `url(${banner}), linear-gradient(rgba(242,241,239,0.6),rgba(242,241,239,0.6))`,
                    backgroundBlendMode: "overlay",
                }}
            >
                <img src={strBadge} alt="" className="club-logo" />
            </div>
            <div className="details">
                <div className="brief-detail-container">
                    <Container className="brief-detail">
                        <Row>
                            <Col
                                className="col-md-6"
                                style={{ marginBottom: "30px" }}
                            >
                                {" "}
                                <h3>{strLeague}</h3>
                                <p>{strLeagueAlternate}</p>
                                <h5>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                                    &nbsp;Founded: {intFormedYear}
                                </h5>
                                <h5>
                                    <FontAwesomeIcon icon={faFlag} />{" "}
                                    &nbsp;Country: {strCountry}
                                </h5>
                                <h5>
                                    <FontAwesomeIcon icon={faFutbol} />{" "}
                                    &nbsp;Sport Type: {strSport}
                                </h5>
                                <h5>
                                    <FontAwesomeIcon icon={faMars} />{" "}
                                    &nbsp;Gender: {strGender}
                                </h5>
                            </Col>
                            <Col className="col-md-6 col-12">
                                <img
                                    src={conditionalImg}
                                    alt=""
                                    className="leagueImage"
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <p className="detail-text">{strDescriptionEN}</p>
                <footer>
                    {strFacebook && (
                        <a
                            href={`https://${strFacebook}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {" "}
                            <FontAwesomeIcon
                                icon={faFacebook}
                                style={{ color: "royalBlue" }}
                                className="icon"
                            />
                        </a>
                    )}
                    {strTwitter && (
                        <a
                            href={`https://${strTwitter}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faTwitter}
                                style={{ color: "deepSkyBlue" }}
                                className="icon"
                            />
                        </a>
                    )}
                    {strYoutube && (
                        <a
                            href={`https://${strYoutube}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faYoutube}
                                style={{ color: "red" }}
                                className="icon"
                            />
                        </a>
                    )}
                    {strWebsite && (
                        <a
                            href={`https://${strWebsite}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faGlobeAmericas}
                                style={{ color: "dimGray" }}
                                className="icon"
                            />
                        </a>
                    )}
                </footer>
            </div>
        </div>
    );
};

export default LeagueDetail;

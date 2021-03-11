import React, { useEffect, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./League.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Link } from "react-router-dom";

const League = (props) => {
    const { idLeague, strLeagueAlternate, strLeague, strSport } = props.league;
    const nativeName = strLeagueAlternate ? strLeagueAlternate : "None";

    // fetching Data for getting the logo
    const [leagueDetail, setLeagueDetail] = useState({});
    useEffect(() => {
        fetch(
            `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        )
            .then((res) => res.json())
            .then((data) => setLeagueDetail(data.leagues[0]));
    }, [idLeague]);

    const { strBadge } = leagueDetail;
    return (
        <Col className="col-lg-4 col-md-6 col-12">
            <Link to={`/league/${idLeague}`} className="react-link">
                <Card className="mb-5 league">
                    <Card.Img
                        variant="top"
                        src={strBadge}
                        className="league-img"
                    />
                    <Card.Body>
                        <h5>{strLeague}</h5>
                        <p className="m-n1">
                            <span className="detailPoints">Native Name: </span>
                            {nativeName}
                        </p>
                        <p>
                            <span className="detailPoints">Sports Type: </span>
                            {strSport}
                        </p>
                        <Button variant="success" className="detailBtn">
                            Discover &nbsp;
                            <FontAwesomeIcon icon={faArrowRight} />{" "}
                        </Button>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
};

export default League;

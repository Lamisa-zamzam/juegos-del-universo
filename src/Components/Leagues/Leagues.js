import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import League from "../League/League";

// fetching data for all the leagues available
const Leagues = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        fetch("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
            .then((res) => res.json())
            .then((data) => setLeagues(data.leagues))
    }, []);

    return (
        <Container>
            <Row>
                {leagues.map((league) => (
                    <League key={league.idLeague} league={league}></League>
                ))}
            </Row>
        </Container>
    );
};

export default Leagues;

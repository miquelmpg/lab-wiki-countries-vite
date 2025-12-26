
import { Link } from "react-router-dom";

function CountryCard({ cca2, cca3, name: {common}, area, borders, capital, home, detail }) {

    return (
        <>
            {home && (<Link to={`/${cca3}`} style={{textDecoration: 'none', color: 'black'}} role="button">
                        <div className="d-flex flex-column align-items-center border border-1 pt-2 pb-3 mx-auto"
                            style={{width: '95%'}}>
                                <div className="d-flex justify-self-center">
                                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${cca2.toLowerCase()}.png`} alt={common}/>
                                </div>
                            <div>{common}</div>
                        </div>
                    </Link>)}
            
            {detail && (<div className="d-flex flex-column mx-auto gap-3" style={{width: '400px'}}>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${cca2.toLowerCase()}.png`} className="mx-auto" alt={common} style={{width: '100px'}}/>
                            <h1>{common}</h1>
                            <div className="d-flex justify-content-between border-bottom pb-3">
                                <div style={{width: '100px', textAlign: 'center'}}>Capital</div>
                                <div style={{width: '100px', textAlign: 'center'}}>{capital}</div>
                            </div>
                            <div className="d-flex justify-content-between border-bottom pb-3">
                                <div style={{width: '100px', textAlign: 'center'}}>Area</div>
                                <div style={{width: '100px', textAlign: 'center'}}>{area} Km<sup>2</sup></div>
                            </div>
                            <div className="d-flex justify-content-between border-bottom pb-3">
                                <div style={{width: '100px', textAlign: 'center'}}>Borders</div>
                                <div style={{width: '100px', textAlign: 'center'}} className="d-flex flex-column">{borders ? borders.map((border, index) => {
                                    return (
                                    <Link to={`/${border}`} key={index}>{border}</Link>)}) : ' No borders'}</div>
                            </div>
                        </div>)}
        </>

    );
}

export default CountryCard;
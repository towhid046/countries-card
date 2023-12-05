import './Country.css'
const Country = ({country}) =>{
    
    const {name:{common:name, official:officialName}, capital, region, flags:{png:flag}, population } = country;

    const language = country.languages;
    let arr = [];
    for(const key in language){
        arr.push(language[key])
    }

    return(     
        <>
        <div className="country_card">
            <img src={flag} alt="" />
            <h2>{name}</h2>
            <div className="card_content">
                <h3>Official: {officialName}</h3>
                <h4>Capital: {capital}</h4>
                <h5>Region: {region}</h5>
                <p>Language: {arr.join(', ')}</p>
                <p>Population: {population}</p>
            </div>
        </div>
        </>
    )
}

export default Country;
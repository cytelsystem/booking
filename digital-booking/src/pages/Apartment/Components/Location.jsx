import LocationIcon from "../../../shared/Icons/locationIcon";

export default function Location({location}) {
    return (
        <div className="db-apartment-location">
            <div>
                <LocationIcon/>
                <span>{`${location.city.name} - ${location.city.state}, ${location.city.country}`}</span>
            </div>
        </div>
    )
}
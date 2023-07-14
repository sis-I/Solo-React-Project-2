import mapIcon from "../src/assets/mapicon.svg"

export default function Card(props) {
  return (
    <div className="card">
      <img className="card--image" src={props.item.imageUrl} alt={"Photo:" + props.item.title} />
      <div>
        <div className="card--map-location">
          <img src={mapIcon} width={7} height={9.55} alt="Map Icon"/>
          <p className="card--location">{props.item.location.toUpperCase()}</p>
          <a className="card--map" target="_blank" href={props.item.googleMapUrl}>View on Google Maps</a>
        </div>
        <h1 className="card--title">{props.item.title}</h1>
        <p className="card--dates bold"><span className="bold">{props.item.startDate}</span> - <span className="bold">{props.item.endDate}</span></p>
        <p className="card--description">{props.item.description}</p>
      </div>
    </div>
  )
}
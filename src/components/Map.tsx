import { Data } from "../Utils/Types"

const Map = ({ data }: { data: Data }) => {
  return (
    <a id="map" className="card col-span-2 row-span-3 about" href={data.address.locationUrl} target="_blank">
      <img src={data.address.imageUrl} alt="Gurugram" title={data.address.location} />
    </a>
  )
}

export default Map
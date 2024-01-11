import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const {images, loading} = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>YOUR GIF ARE LOADING...</p>}
      <div className="card-grid">
        {
          images.map(image => (
            <GifItem
              key={image.id}
              {...image}
            />
          ))
        }
      </div>
    </>
  )
}

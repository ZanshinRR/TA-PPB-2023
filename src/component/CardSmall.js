

export default function CardSmall({ title, genre, img, size, color, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <img src={img} alt="" className="photo" />
            <div className="description">
                <div>
                    <p id="title">{title}</p>
                    <p id="genre">{genre}</p>
                </div>
                <div>
  
                </div>
            </div>
        </div>
    );
}

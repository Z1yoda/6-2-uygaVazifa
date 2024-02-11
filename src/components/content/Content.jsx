// style
import './Content.css'

function Content({cars}) {
    return (
        <div className='carList'>
            <div className="carList-container container">
                {
                    cars.map((car, index) => {
                        return (
                            <div className='card' key={index}>
                                <div className="card-inner">
                                    <img src={car.image} alt={car} height={150} width={150}/>
                                    <h3>Name: {car.title}</h3>
                                    <p>Category: {car.class}</p>
                                    <p>Year: {car.start_production}</p>
                                    <button>
                                        {
                                          car.start_production >=2000 ? "New":"Old"
                                        }
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        
    )
}

export default Content
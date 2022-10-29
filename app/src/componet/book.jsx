import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
const Book =(props) =>{ 
    return( 
        <div className="book w-100">
            
            <img className="w-100 justify-content-center align-items-center'" src={props.imageSrc} alt="#" />
            <h1 >{props.BookName}</h1>
            <h3 className='dis '>{props.BookDis}</h3>
            <h5>{props.BookPrice}</h5>
            <button className="btn">BUY</button>


        </div>
    )
}
export default Book
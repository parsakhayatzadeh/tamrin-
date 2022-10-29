import './App.css'
import Book from './componet/book'

function App() {

  return (
    <div>
      <div className='bookList'>
        <Book imageSrc='https://images-na.ssl-images-amazon.com/images/I/71X21jyuZPL._AC_UL900_SR900,600_.jpg'
          BookName="And There Was "
          BookDis="tarikhi "
          BookPrice="16$"
        />
        <Book imageSrc='https://images-na.ssl-images-amazon.com/images/I/81qROMFiwmL._AC_UL900_SR900,600_.jpg'
          BookName="Littel blue truck "
          BookDis="best book"
          BookPrice="12$"
        />
        <Book imageSrc='https://images-na.ssl-images-amazon.com/images/I/81ZkvDcuCzL._AC_UL900_SR900,600_.jpg'
          BookName="Friends, Lovers,"
          BookDis="best book"
          BookPrice="2$"
        />


      </div>



    </div>
  )
}

export default App

import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';

const App = () => {
  return (
    <>
    <NavBar />
    <ItemListContainer 
    mainTitle="Bienvenidos a la tienda"
    mainSubTitle="Proximamente"/>
    </>
  )
}

export default App
import logo from './logo.svg';
import './App.css';
import PaypalCheckoutButton from './Components/PaypalCheckoutButton';

function App() {
   const order = {
    customer:'123456',
    total:'550.00',
    items: [
{
sku:'112',
name: 'Camisa ReactJs',
price: '330.00',
quantify: 1,
currency: 'MXN'
}, 
{
sku:'99',
name: 'Camisa JS',
price: '125.00',
quantify:2,
currency: 'MXN'
}
    ]
   };



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PaypalCheckoutButton
         order={order}
        />
      </header>
    </div>
  );
}

export default App;


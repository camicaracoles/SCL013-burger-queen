import React from 'react';
import '../img/PortalMesero.css'
import ComponentsDataHours from '../componentes/ComponentsDataHours';
import EntradaMesero from '../componentes/EntradaMesero';
import MenuDesayuno from '../componentes/MenuDesayuno';
import MenuDelDia from '../componentes/MenuDelDia';
import flecha from '../img/flecha.png';
import PedidosListos from '../componentes/PedidosListos';
import PedidosServidos from '../componentes/PedidosServidos';
import PedidosPagados from '../componentes/PedidosPagados';
import TomarPedido from './TomarPedido';



export class PortalMesero extends React.Component {

  constructor(props) {
    super(props);
    this.state = { estado: 0 };
  }

  navegarHacia = (donde) => {
    switch (donde) {
      case 'menuDesayuno':
        this.setState({ estado: 1 })
        break;
      case 'menuDia':
        this.setState({ estado: 2 })
        break;
      case 'pedidosListos':
        this.setState({ estado: 3 })
        break;
      case 'pedidosServidos':
        this.setState({ estado: 4 })
        break;
      case 'pedidosPagados':
        this.setState({ estado: 5 })
        break;
      case 'precionarBotonMenu':
        this.setState({ estado: 6 })
        break;
      default:
        this.setState({ estado: 0 })
        break;
    }
  }

  mostrarComponente = estadoActual => {
    switch (estadoActual) {
      case 1:
        return <MenuDesayuno handler={this.navegarHacia} />;
      case 2:
        return <MenuDelDia handler={this.navegarHacia} />;
      case 3:
        return <PedidosListos handler={this.navegarHacia} />;
      case 4:
        return <PedidosServidos handler={this.navegarHacia} />;
      case 5:
        return <PedidosPagados handler={this.navegarHacia} />;
      case 6:
        return <PedidosPagados handler={this.navegarHacia} />;
      default:
        return <EntradaMesero handler={this.navegarHacia} />;
    }
  };

  volverPortalMesero = () => {
    this.setState({ estado: 0 })
  }

  render() {
    return (
      <div>
        <div className='franja'>
          <p id='nombreMesero'>Camila García Brito</p>
          <div id='diaPortalMesero'>

            <ComponentsDataHours />
            <TomarPedido/>
          </div>
        </div>
        <div className='volverPortalMesero'>
          <button onClick={this.volverPortalMesero} className='contenedorFlecha'>
            <img class='flechaVolver' src={flecha} alt='flecha' />
          </button>
        </div>
        <div className='fondoPortalMesero'>

        </div>
      </div>
    )
  }
}


import React from 'react';
import '../img/PortalMesero.css'
import ComponentsDataHours from '../componentes/ComponentsDataHours';
import EntradaMesero from '../componentes/EntradaMesero';


class PortalMesero extends React.Component {

  constructor(props) {
    super(props);
    this.navegarMenuDesayuno = this.navegarMenuDesayuno.bind(this);
    this.navegarMenuDia = this.navegarMenuDia.bind(this);
    this.navegarPedidosListos = this.navegarPedidosListos.bind(this);
    this.navegarPedidosServidos = this.navegarPedidosServidos.bind(this);
    this.navegarPedidosPagados = this.navegarPedidosPagados.bind(this);
    this.state = { estado: 0 };
  }

  navegarMenuDesayuno() {
    this.setState({estado: 1});
  }
  navegarMenuDia() {
    this.setState({estado: 2});
  }
  navegarPedidosListos() {
    this.setState({estado: 3});
  }
  navegarPedidosServidos() {
    this.setState({estado: 4});
  }
  navegarPedidosPagados() {
    this.setState({estado: 5});
  }

  render() {
    const estado = this.state.estado;
    let fondoPortalMEsero;
      if (estado === 1) {
        fondoPortalMEsero = <MenuDesayuno />;
        } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
        }
    return (
      <div>
        <div className='franja'>
          <p id='nombreMesero'>Camila García Brito</p>
          <div id='diaPortalMesero'>

            <ComponentsDataHours />

          </div>

        </div>
        <div className='fondoPortalMesero'>

          <EntradaMesero />

        </div>
      </div>
    )
  }
}

export default PortalMesero;

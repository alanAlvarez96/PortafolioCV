import {ProjectData} from '../../Tools/Interfaces';
export  let projects: ProjectData[]  = [
    {id: 1, nombre: 'Residencias Profesionales', desc: 'Proyecto realizado en la empresa Fumycel',
      // tslint:disable-next-line:max-line-length
    sinopsis: `Este proyecto se resume en un sistema de control a través del cual la empresa tiene la capacidad de subir información relevante a sus clientes en cualquier momento desde cualquier dispositivo, además .la empresa también tiene las opciones de tener control sobre la información de  sus empleados y dar mantenimiento a su pagina web http://fumycel.com/`},
    {id: 2, nombre: 'Semana lince', desc: 'Proyecto realizado para el Instituto Tecnológico Nacional de México en Celaya',
      // tslint:disable-next-line:max-line-length
      sinopsis: `Está aplicacion permite a los usuarios ingresar a la plataforma con sus cuentas institucionales, una vez dentro podian ver todas las actividades disponibles durante el evento, obtener detalles sobre dicha actividad como por ejemplo si se requiere material o habilidades especiales para tomarla, información sobre quién la impartió y te permite inscribirte en dicha actividad. Para dicha aplicación participe en el área de backend generando los WS y en el Front-End generando la aplicación web.`},
    {id: 3, nombre: 'Sistema de administración funerario', desc: `Proyecto realizado para la Funeraria "Funerales guerrero"`,
    // tslint:disable-next-line:max-line-length
    sinopsis: `Este proyecto le permite a la funeraria tener un control sobre la información de sus clientes, permitiendo generar contratos, pagos, estados de cuenta y tarjeta de cobro por contrato generado, además mantiene control sobre la información de sus empleados permitiendo ingresar sus datos personales; Por último permite tener un control sobre sus inventarios permitiendo agregar nuevos productos, generar paquetes así como editarlos y mantiene un control de entradas y salidas.
                En este proyecto participe en el Back-End generando servicios web y en el Front-End maquetando y desarrollando el sistema web.`},
  {id: 4, nombre: 'CIITEC', desc: 'Proyecto realizado para el Instituto Tecnológico Nacional de México en Celaya',
   sinopsis: `Aplicación móvil que permite a los participantes del congreso CIITEC ver todas las actividades disponibles en el evento, además permite conocer detalles sobre dichas actividades, permite inscribirte a ellas y para las actividades que implican un viaje , la aplicación permite la reserva de los asientos.
             En está aplicación participe en el Back-End generando los servicios necesarios para su funcionamiento tanto en servidor como en base de datos.
`}];

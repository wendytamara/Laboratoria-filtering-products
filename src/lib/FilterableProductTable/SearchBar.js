import { connect } from 'react-redux';

import SearchBarComponent from './components/SearchBar';
import { filterTextChanged, inStockOnlyChanged } from '../actions';

//SearchBarWithRedux realiza la conecion con los stados, las acciones,
const SearchBarWithRedux = connect(
  function mapStateToProps(state) {
    // buscamos los valores que nos interesan para el SearchBar
    // fíjate que el SearchBar no tiene por qué saber nada de los productos --definidos en el reducers
    const {
      filterText,
      inStockOnly
    } = state.AppReducer;

    // y devolvemos las nuevas props
    return {
      filterText,
      inStockOnly
    };
  },
  // El segundo parámetro de `connect` es `mapDispatchToProps`.
  // El el mundo Redux al llamar a un `action creator` lo único que obtenemos
  // es un objeto que expresa que es lo que ha sucedido, pero no dispara la acción.
  // Para esto necesitas llamar a la función `dispatch` del store.
  // Esto es lo que hace `mapDispatchToProps` mapea llamadas a `dispatch` para
  // tus `action creators`

  //setFilterText se crea ahi, no existe en otro lado--llama desde el input ---newFilterText es un parametro- se crea ahi mismo
  function mapDispatchToProps(dispatch) {
    return {
      setFilterText(newFilterText) {
        dispatch(filterTextChanged(newFilterText));
      },
      setInStockOnly(newValue) {
        dispatch(inStockOnlyChanged(newValue));
      }
    };
  }
)(SearchBarComponent);

export default SearchBarWithRedux;

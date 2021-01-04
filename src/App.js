import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { Header } from './components';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { setPizzas } from './redux/reducers/pizzasReducer';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios
      .get('http://localhost:3001/pizzas')
      .then(({ data }) => dispatch(setPizzas(data)));
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}
export default App;

// class App extends React.Component {
//   componentDidMount() {
//     axios
//       .get('http://localhost:3000/db.json')
//       .then((response) => this.props.setPizzas(response.data.pizzas));
//   }
//   render() {
//     return (
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Route
//             exact
//             path="/"
//             render={() => <Home pizzas={this.props.pizzas} />}
//           />
//           <Route path="/cart" component={Cart} />
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   pizzas: state.pizzasReducer.pizzas,
// });
// // const mapDispatchToProps = (dispatch) => ({
// //   setPizzas: (pizzas) => {
// //     dispatch(setPizzas(pizzas));
// //   },
// // });
// const mapDispatchToProps = {
//   setPizzas,
// };
// export default connect(mapStateToProps, mapDispatchToProps)(App);

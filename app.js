var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList foods={['Bananas', 'Spinach', 'Yogurt']} />
  </div>
);

// var Bananas = () => (
//   <li>Bananas</li>
// )

// var Spinach = () => (
//   <li>Spinach</li>
// )

// var GroceryList = () => (
//   <ul>
//     <Bananas />
//     <Spinach />
//   </ul>
// )

// var GroceryListItem = (props) => {

//   var onListItemClick = (event) => {
//     alert('I got clicked');
//   }

//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.foods[0]}</li>
//       <li>{props.foods[1]}</li>
//       <li onClick={onListItemClick}>{props.foods[2]}</li>
//     </ul>
//   );
// }

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.food}</li>
    );
  }

}

var GroceryList = (props) => (
  <ul>
    {props.foods.map(food =>
     <GroceryListItem food={food} />
     )}
  </ul>
);

ReactDOM.render(<App />, document.getElementById('app'))
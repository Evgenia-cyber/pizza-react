import React, { useState } from 'react';

const Categories = React.memo(({ categories, onClickItem }) => {
  const [activeItem, setActiveItem] = useState(0);

  const onSelectedItem = (index) => {
    setActiveItem(index); //при клике передаем в локальный state индекс кликнутой категории
    onClickItem(index); //при клике передаем в <Home/> индекс кликнутой категории в activeCategoryIndexFromUIClick
  };
  return (
    <div className="categories">
      <ul>
        {categories &&
          categories.map((category, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => {
                onSelectedItem(index);
              }}
              key={category}
            >
              {category}
            </li>
          ))}
      </ul>
    </div>
  );
});
// class Categories extends React.Component {
//   state = {
//     activeItem: 0,
//   };
//   render() {
//     return (
//       <div className="categories">
//         <ul>
//           {this.props.categories.map((category, index) => (
//             <li
//               className={this.state.activeItem === index ? 'active' : ''}
//               onClick={() => {
//                 this.props.onClickItem(category);
//                 this.setState({ activeItem: index });
//               }}
//               key={category}
//             >
//               {category}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

export default Categories;

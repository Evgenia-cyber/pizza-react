import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(({ categories, onClickItem, activeItem }) => {
  return (
    <div className="categories">
      <ul>
        {categories &&
          categories.map((category, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => {
                onClickItem(index); //при клике передаем в <Home/> индекс кликнутой категории в activeCategoryIndexFromUIClick
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

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickItem: PropTypes.func.isRequired,
  activeItem: PropTypes.number.isRequired,
};
Categories.defaultProps = { categories: [] };

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

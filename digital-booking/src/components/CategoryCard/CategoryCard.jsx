import Card from '../../shared/Card/Card';
import { addDots } from '../../utils/numberFormater';
import './CategoryCard.scss';

const CategoryCard = ({ category }) => {
   return (
      <a href={'#' /* here goes the link based on the category name */}>
         <Card classList={'db-card-category'}>
            <img className="db-card-category-image" src={category.image} alt="" />
            <div className="db-card-category-content">
               <h3>{category.name}</h3>
               <p>{`${addDots.format(category.quantity)} ${category.name.toLowerCase()}`}</p>
            </div>
         </Card>
      </a>
   );
};

export default CategoryCard;

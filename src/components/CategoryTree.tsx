import React, { useEffect, useState } from "react";
import { makeStyles } from '@mui/styles';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface IProps {
  categoryId: string;
  name: string;
  selectCateory: Function;
}
export interface ICategory {
  id: string;
  name: string;
  subCategories: ICategory[];
}
const CategoryTree: React.FC<IProps> = (props) => {
  const styles = useStyles();

  const [id, setId] = useState(props.categoryId);
  const [name, setName] = useState(props.name);
  const [subCategories, setSubCategories] = useState<ICategory[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    console.log("useeff will do req", !subCategories, isOpen, !name);
    if (subCategories == null && (isOpen || !name)) {
      setLoading(true);
      const url = new URL(`https://api.bestbuy.com/v1/categories(id=${id})`);
      url.searchParams.append("apiKey", "U6193s76u8HnKmClJLZU4hRv");
      url.searchParams.append("sort", "name");
      url.searchParams.append("format", "json");
      fetch(url.toString())
        .then((result) => result.json())
        .then((result) => {
          const resultCategory =
            result &&
            result.categories &&
            result.categories.length > 0 &&
            result.categories[0];
          if (resultCategory) {
            setName(resultCategory.name);
            setSubCategories(resultCategory.subCategories);
          }
          setLoading(false);
          setIsOpen(true);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [id, name, isOpen, subCategories]);

  function handleCategoryClick() {
    setIsOpen(!isOpen);
    if (!isOpen) {
      props.selectCateory(id, name);
    }
  }

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className={styles.root}>
      <span>{isOpen && subCategories ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}</span>
      <span>&nbsp;</span>
      <span onClick={handleCategoryClick}>{name}</span>
      {isOpen && subCategories && (
        <div className={styles.children}>
          {subCategories.length
            ? subCategories.map((cat) => (
              <CategoryTree
                key={cat.id}
                categoryId={cat.id}
                name={cat.name}
                selectCateory={props.selectCateory}
              />
            ))
            : "no data"}
        </div>
      )}
    </div>
  );
};
export default CategoryTree;

const useStyles = makeStyles({
  root: {
    cursor: 'pointer'
  },
  children: {
    marginLeft: 10
  }
})



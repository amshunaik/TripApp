import classes from './Card.module.css';

function Card(props):any {
  return <div className="px-5">{props.children}</div>;
}

export default Card;

import PropTypes from 'prop-types';
import s from './Statistics.module.css';


export const Statistics = ({ options, total, positivePercentage }) => {

  const statList = options.map(item => (
    <p key={item[0]} className={s.stat}>
      {`${item[0]}: ${item[1]}`}
    </p>
  ));

  return (
    <>
      {statList}
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </>
  );
};



Statistics.propTypes = {
  options: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number,
};
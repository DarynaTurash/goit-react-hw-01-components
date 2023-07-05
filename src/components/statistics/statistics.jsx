import PropTypes from 'prop-types';
import css from "./statistics.module.css";
import { getRandomColor } from "../../functions/random-color";


export const Statistics = ( {title, stats} ) => {
    return (
        <section className={css.statistics}>
        {title ? <h1 className={css.title}>{title}</h1> : null}

        <ul className={css.statlist}>
            {stats.map(stat => {
            const backgroundColor = getRandomColor();
            return (
                <li key={stat.id} className={css.item} style={{backgroundColor}}>
                <span className={css.label}>{stat.label}</span>
                <span className={css.percentage}>{stat.percentage}%</span>
                </li> 
            );
        })}
        </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
}
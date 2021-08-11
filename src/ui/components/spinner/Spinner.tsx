import styles from "./Spinner.module.scss";
 
const Spinner: React.FC = () => {
    return ( <div className={styles.wrapper}>
        <div className={styles.loader} />
    </div> );
}
 
export default Spinner;
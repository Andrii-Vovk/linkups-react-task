import classNames from "classnames";

import styles from "./Spinner.module.scss";

interface SpinnerProps {
    small?: boolean;
}
 
const Spinner: React.FC<SpinnerProps> = ({small}) => {
    return ( <div className={styles.wrapper}>
        <div className={classNames([styles.loader, {[styles.small]: small}])} />
    </div> );
}
 
export default Spinner;
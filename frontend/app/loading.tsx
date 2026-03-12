import { BarLoader } from "react-spinners";
import css from "./page.module.css";

const Loading = () => {
    return (
        <div className={css.loaderWrapper}>
            <p className={css.loaderText}>Loading, please wait...</p>
            <BarLoader
                cssOverride={{
                    display: "block",
                    margin: "0 auto",
                    backgroundColor: "red",
                    width: "100%",
                }}
            />
        </div>
    );
};

export default Loading;

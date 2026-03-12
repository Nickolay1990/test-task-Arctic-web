"use client";

import css from "./page.module.css";

type Props = {
    error: Error;
    reset: () => void;
};

const Error = ({ error, reset }: Props) => {
    return (
        <div className={css.errorWrapper}>
            <h2 className={css.errorTitle}>Error loading data</h2>
            <p className={css.errorText}>{error.message}</p>
            <div className={css.buttonWrapper}>
                <button className={css.btn} onClick={reset}>
                    Try again
                </button>
            </div>
        </div>
    );
};

export default Error;

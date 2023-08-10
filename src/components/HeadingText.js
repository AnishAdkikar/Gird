import React from "react";
import styles from "./HeadingText.module.css"

export default function HeadingText({text}) {
    return (
        <h2 className={styles.headingText}>{text}</h2>
    )
}
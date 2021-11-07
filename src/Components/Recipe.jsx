import React from 'react'
import styles from "./Recipe.module.css"

const Recipe = (props) => {
    return (
        <div className={styles.Recipe}>
            <p className={styles.cuisen}>Kitchen:{props.cuisen}</p>

            <h2 className={styles.title}>
                {props.title}
            </h2>
            <div className={styles.logo}>
                <img src={props.logo} alt="logo" />
                <div className={styles.text_wrapper}>
                  {props.text.map((item)=>{
                  return <p className={styles.text}>{item},</p>
              })}

            </div>
            </div>
      
        </div>
    )
}

export default Recipe

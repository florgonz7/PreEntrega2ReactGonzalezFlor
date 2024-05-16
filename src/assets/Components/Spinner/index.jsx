import { Style } from '@mui/icons-material'
import React from 'react'
import css from './main.module.css'

const Spinner = () => {
    return (<div className={css.center}>
        <div className={css.boxes}>
            <div className={css.box}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={css.box}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={css.box}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={css.box}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div></div>
    )
}

export default Spinner
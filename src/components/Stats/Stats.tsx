import s from "./style.module.scss";

function Stats(props:any) {
    return (
        <>
            <h3>Stats</h3>

            <div className={s.stats}>
                <div className={s['stats-money']}>
                    <div className={s['money-icon']}></div>
                    <div className={s.money}>
                        {`: ` + props.money}
                    </div>
                </div>
                <div className={s.days}>
                    Days: {props.days}
                </div>
            </div>
        </>
    )
}

export default Stats;
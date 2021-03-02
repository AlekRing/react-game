import s from "./style.module.scss"

function Footer() {

    return (
        <div className={s.footer}>
            <div className={s.year}>by Alek_Rind 2021</div>
            <a className={`${s.github}`} href="https://github.com/AlekRing">
                <div />
            </a>
            <a className={s.rsSchool} href="https://rs.school/"></a>
        </div>
    )
}

export default Footer;
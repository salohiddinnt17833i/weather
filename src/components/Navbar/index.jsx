import style from './index.module.css'

function Navbar() {
  return (
    <>
        <div>
            <div className={style.wrapper}>
                <h3 style={{cursor: "pointer"}}>Weather App</h3>
                <ul className={style.ul}>
                    <li><a className={style.a} href="#">Today</a></li>
                    <li><a className={style.a} href="#">Tomorrow</a></li>
                    <li><a className={style.a} href="#">3 days</a></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar
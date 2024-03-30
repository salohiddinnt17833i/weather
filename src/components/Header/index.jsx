import React from 'react'
import style from './index.module.css'
function Header() {
  return (
    <>
        <div className={style.wrapper}>
            <div>
                <form className='d-flex gap-2'>
                    <input className={style.input} type="text" placeholder='Enter a city name' />
                    <button className='btn btn-light'>Serach</button>
                </form>
                <h2 className='mt-3'>Tashkent</h2> <br />
                <h4>Clouds</h4>
                <h3>16°</h3>
            </div>
        </div>
    </>
  )
}

export default Header
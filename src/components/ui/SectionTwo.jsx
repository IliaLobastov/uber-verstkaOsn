import React from 'react'
import './SectionTwo.css'

export default function SectionTwo() {
  return (
    <>
      <div className="cont-eight-reasons">
        <span>ПРЕИМУЩЕСТВА</span>
        <h2>8 причин начать работать с нами</h2>
        <div className="grid-container">
          <div className="card" style={{gridArea: 'box-1'}}>
            {/* card - строкой содержит картинку и див с описанием */}
            <div className='fon'>
              <img src="/cash.png" alt="money" />
            </div>
            <div className="card-desription-container">
              <h3>Никаких наличных, оплата происходит автоматически</h3>
              <p>
                Стоимость поездки оплачивается пассажиром с привязанной банковской карты, т.е. нет
                никаких рисков связанных с перевозкой наличности как для пассажира, так и для
                водителя, Вам не нужно искать мелкие деньги для размена.
              </p>
            </div>
          </div>
          <div className="card" style={{gridArea: 'box-2'}}>
            {/* card - строкой содержит картинку и див с описанием */}
            <div className='fon'>
              <img src="/realcash.png" alt="#" />
            </div>
            <div className="card-desription-container">
              <h3>Высокий доход с гарантированными выплатами</h3>
              <p>
                Мы выплачиваем заработную плату на личную банковскую карту водителя! Вам не нужно
                оформлять ООО, ИП, платить налоги, подавать декларацию, оплачивать бухгалтерские
                услуги и ведение банковского счета.
              </p>
            </div>
          </div>
          <div className="card" style={{gridArea: 'box-3'}}>
            {/* card - строкой содержит картинку и див с описанием */}
            <div className='fon'>
              <img src="/key.png" alt="#" />
            </div>
            <div className="card-desription-container">
              <h3>Комфортное, прозрачное и простое подключение</h3>
              <p>
                Мы подключаем дистанционно и бесплатно, Вам нет необходимости приезжать к нам! Вы
                присылаете нам копии документов, мы регистрируем Вас и присылаем данные для
                подключения, через 1-2 дня Вы можете начинать работать!
              </p>
            </div>
          </div>
          <div className="card" style={{gridArea: 'box-4'}}>
            {/* card - строкой содержит картинку и див с описанием */}
            <div className='fon'>
              <img src="/telephon.png" alt="#" />
            </div>
            <div className="card-desription-container">
              <h3>Круглосуточная поддержка</h3>
              <p>
                В Uber действует круглосуточная поддержка водителей по электронной почте. Если
                что-то непонятно, Вы всегда можете задать вопрос через On-line консультацию.
              </p>
            </div>
          </div>
          <div className="card" style={{gridArea: 'box-5'}}>
            {/* card - строкой содержит картинку и див с описанием */}
            <div className='fon'>
              <img src="/photo.png" alt="#" />
            </div>
            <div className="card-desription-container">
              <h3>Комиссия 8% + БОНУСЫ</h3>
              <p>
                У нас минимальная комиссия и мы выплачиваем бонусы за каждую поездку, некоторые наши
                конкуренты оставляют бонусы себе. Мы работаем честно и с нами водители зарабатывают
                больше!
              </p>
            </div>
          </div>
          <div className="card" style={{gridArea: 'box-6'}}>
            {/* card - строкой содержит картинку и див с описанием */}
            <div className='fon'>
              <img src="/calendar.png" alt="#" />
            </div>
            <div className="card-desription-container">
              <h3>Работа в удобное время, никаких графиков</h3>
              <p>
                Вы просто нажимаете кнопку выйти на линию для начала работы, когда решите закончить,
                нажимаете выйти с линии. Вы можете подраба- тывать только утром, вечером, в выходные
                или праздничные дни!{' '}
              </p>
            </div>
          </div>
          <div className="card" style={{gridArea: 'box-7'}}>
            {/* card - строкой содержит картинку и див с описанием */}
            <div className='fon'>
              <img src="/gps.png" alt="#" />
            </div>
            <div className="card-desription-container">
              <h3>Всегда большое количество заказов</h3>
              <p>
                Приложение показывает, где на данный момент больше всего заказов и где действуют
                повышенные тарифы. У Вас не будет простоя и холостых пробегов. Наши пассажиры всегда
                приятные и абсолютно неконфликтные люди, которых приятно возить.
              </p>
            </div>
          </div>
          <div className="card" style={{gridArea: 'box-8'}}>
            {/* card - строкой содержит картинку и див с описанием */}
            <div className='fon'>
              <img src="/car.png" alt="#" />
            </div>
            <div className="card-desription-container">
              <h3>Без шашечек и наклеек</h3>
              <p>
                Вам не нужно менять цвет, устанавливать «шашки» на автомобиль и обклеивать его
                наклейками.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

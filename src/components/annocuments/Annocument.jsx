import React from "react";

const Annocument = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  }
  const mystyle1 = {
    width: "68%",
    height: "340px",
  }
  return (
    <>
      <section className='annocument background'>
        <div className='container d-flex'>
          <div className='img' style={mystyle}>
            <img src='https://avatars.mds.yandex.net/i?id=b0deb534f31bda1c185cf02119f971d594e6dd20-9030085-images-thumbs&n=13' width='100%' height='100%' />
          </div>
          <div className='img' style={mystyle1}>
            <img src='https://inditeweb.com/wp-content/uploads/2020/04/ecommerce-website-development-ghana.jpg' width='100%' height='100%' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument
const Catg = () => {
    const data = [
      {
        // cateImg: "https://avatars.mds.yandex.net/i?id=fbfd458f04e933a3158cb2b0cd193942372a798e-9271150-images-thumbs&n=13",
        cateName: "Phones",
      },
      {
        // cateImg: "https://avatars.mds.yandex.net/i?id=f6f6801e69053762d98eb2fd2741f7e9-5496540-images-thumbs&n=13",
        cateName: "PlayStation",
      },
      {
        // cateImg: "https://avatars.mds.yandex.net/i?id=fbfd458f04e933a3158cb2b0cd193942372a798e-9271150-images-thumbs&n=13",
        cateName: "Xbox",
      },
      {
        // cateImg: "https://avatars.mds.yandex.net/i?id=fbfd458f04e933a3158cb2b0cd193942372a798e-9271150-images-thumbs&n=13",
        cateName: "Watch",
      },
      {
        // cateImg: "https://avatars.mds.yandex.net/i?id=fbfd458f04e933a3158cb2b0cd193942372a798e-9271150-images-thumbs&n=13",
        cateName: "Glasses",
      },
      {
        // cateImg: "https://avatars.mds.yandex.net/i?id=fbfd458f04e933a3158cb2b0cd193942372a798e-9271150-images-thumbs&n=13",
        cateName: "Headphones",
      },
    ]
    return (
      <>
        <div className='category'>
          <div className='chead d-flex'>
            <h1>Products</h1>
          </div>
          {data.map((value, index) => {
            return (
              <div className='box f-flex' key={index}>
                <img src={value.cateImg} alt='' />
                <span>{value.cateName}</span>
              </div>
            )
          })}
          <div className='box box-2'>
            <button>View All Brands</button>
          </div>
        </div>
      </>
    )
  }
  
  export default Catg;
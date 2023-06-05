const Catg = ({ setSelectedCategory }) => {
  const data = [
    {
      cateName: "Phones",
      category: "phone",
    },
    {
      cateName: "PlayStation",
      category: "playstation",
    },
    {
      cateName: "Xbox",
      category: "xbox",
    },
    {
      cateName: "Watch",
      category: "watch",
    },
    {
      cateName: "Glasses",
      category: "glasses",
    },
    {
      cateName: "Headphones",
      category: "headphones",
    },
  ];

    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };
   
    return (
      <>
        <div className='category'>
          <div className='chead d-flex'>
            <h1>Products</h1>
          </div>
          {data.map((value, index) => {
            return (
              <div className='box f-flex' key={index}>
                <button onClick={() => handleCategoryClick(value.category)}>{value.cateName}</button>
              </div>
            )
          })}
        </div>
      </>
    )
  }
  
  export default Catg;
import React from 'react';

const Categories = () => {
   const data = [
        {
            cateImg: 'https://yandex-images.clstorage.net/Tv49r2j48/2198dbizW/oToDvaalU6zU8LsrSVsQ5qwp-xI29f2haH9mz8zmyk9btTTQ4UQmpLOXwX20HNwbPh0ZzOd5tgY4ELp9tPp0i_w7WqiWySqQ_PS7J31_fMKwBdsuFuWtvWEeO0chAkbO6xn4cTH4ksnS88lssT2VfleEsNTLpKcGHVTvlC0DAUL1xtstqmnajMjUTtOVf3Re8KAHQkJwRZRQ67unwYqSHh-NfA0NELYhth9F4PyBjZ4vvOV8g_y7wt3w85Adc6FmwYIDdcZBJtjs8NoXnR-gRiiEi3pqoIE8sBNHc5kKJuZ_YfhFyVQWPeLX5Uiw0d2CzyiZRCe4S85d1GeAxSNRZsFqp2U62Tao7KBOj227yG4gbM_ijozJ3AD_bwM1Zk56W4X0cU105s1-o3lQ1BGxdrNELQQHZM9W6XxneE0zwQI9omNhFqFKhDRIXi81Qzzu3FBneuLgUQA407_fPapqmscZoJ01lAJJzoe5fJiVcYZ3dOVkZ_iLvmFs-wxVczVOZcajqeJdDtz0IPpfYRsAIgwcc2LiBNWI9GNDazkyRh43AbQRNYAuYdpbAWgMCVkSi2TpANvgN8L9HId0DfcdSq3aRzUe3Q4M5KCe980X4K4cqHtqioSllAh_yzPVoh5C27EosSEE7uE290HosL3Z3msgcXzHYIueWXjnpEEblUbtOk9l9lHStKww3jfp20BeIJCPNsrkAcB0G9v_ic4iCt_pAOGNYDI5tnMRkDABgVbzZBXM53hP0qW8l4ixkwUuodKfPW7N0jCgsKq7oc8Q1rwU13q6qEmQBDufq9WW2qJPFQDR_USiGR7DMegU5TWe-_SZsENU-xLlvHNINTvZbiFqj4liObZc3NT-F30bYCLkHJ96pjxtSPSPLy99qgZSd4Vw_TkUzuVSA-10YK0hYnfs2QTv0PfWtWA3kBXzyS4Nagu5iuGS0PDotoPJf4juHNircqpM-aSEB7erveZk',
            cateName: 'Fashion',
        },
        {
            cateImg: 'https://avatars.mds.yandex.net/i?id=9d328e46dc8e0b0d490d45fb02d8a194-5874162-images-thumbs&n=13',
            cateName: 'Electronic',
        },
        {
            cateImg: 'https://yandex-images.clstorage.net/Tv49r2j48/2198dbizW/oToDvaalU6zU8LsrSVsQ5qwp-xI29f2haH9mz9Da0xdDvGzRpVlP8IuL3Dm1UNAfO3UZ3O4k41dZVKcglbJF5-l2CoyXiFv1pbmnRhl7HPKkXI4ecoSVsBwWb7_px65_YuB8KVHYriUqdxHcTKEhJmdAXcCCTONiCaBWKKlnWbKFakNRDlkOPLBEKtMl2-zukHx76pqEnSxcs7PTvVJGVlMV_MmxUHr13uOVoHBJBc4DrNFMz_D7gnGYA4DhP0V2Rc5fVT4prhiEAPKLSfMQurRY7y6S5Ek0hJc_65WCgv6z7QAd6dDODb4PEei0DaXSV2Rx5IOgq56RDH-4RXu1esXqy0XmeV4YhOhWm7VrAMq0CHu2YkAhHIx_e3NxrsoeAwEobUW8ppGa6x3cMC1VIssQ7fznYMdq7WDL-GWnMeJxQsu9bmnOfHggkp-ZE3zmbOBrFjq41ZxwQ9PrHcJSwjst-LFNcIJxBndJMEjNsaZ7NC3Qq-QHmilQA5gFO3UK-VJXyXYpOjAgRFJXbe84vqyIz2Zu4OlQoA_H8x0m1kr3nQQFSeiu9fZvXbxI2Z2Ob-iVxD94Lw7VQA_8uSPJdmUiK7EurRI06Fi2y5FvOG68CKvOwuwJ3LC7z_t1pqZWC4GMXaV49qka38EcXF1dDoNE1USDzK_CNQSXgKWjdSrBRkthYkGaOKi4vpt54-TW9JjrDuYgqSyMgzunNcYCAnflnJH5FMrhHofpTPA5gdYDwIU8A3D3Sq1A8zCFu7FmPYI7TZLJClDkUG7D4X_kUvgYn4KuNPmkEAdj60WKSlIHxdjFpUwySY576XyAHRH2q3ClRCeUQ4Kl0H9MIZcFpn2C340WYdYQZOh-d-2LgD6EfMsucuCJUEgPK-tZHm6K93FoQQ1w7rm265lQRE19CuewedhT3Fd-Kcg_-I0TCWItXptVNqnGUEjo-kcFU6SyqECDusaEYZywyx_jVW74',
            cateName: 'Cars',
        },
        {
            cateImg: 'https://avatars.mds.yandex.net/i?id=7a3be064a30192548c6a325b24a9ab94047d7879-9149104-images-thumbs&n=13',
            cateName: 'Home & Garden',
        },
        {
            cateImg: 'https://cdn0.iconfinder.com/data/icons/commerce-and-shopping/512/present_box_gift_package_bow_wrap_birthday_surprise_ribbon_decoration_celebration_flat_design_icon-1024.png',
            cateName: 'Gifts',
        },
        {
            cateImg: 'https://avatars.mds.yandex.net/i?id=dbbb6b7e51e61fc664b82b3be0a92f0a0f242fcb-8981832-images-thumbs&n=13',
            cateName: 'Music',
        },
        {
            cateImg: 'https://avatars.mds.yandex.net/i?id=66a0299e720a126aa2b6570f431f2862a5c74357-8356639-images-thumbs&n=13',
            cateName: 'Health & Beauty',
        },
        {
            cateImg: 'https://avatars.mds.yandex.net/i?id=2a0000017a06cc020372a3cd49387decb620-3755167-images-thumbs&n=13',
            cateName: 'Pets',
        },
        {
            cateImg: 'https://avatars.mds.yandex.net/i?id=12a43262ae6e309ab1bc1dcd0999a4ec995b78b1-5293830-images-thumbs&n=13',
            cateName: 'Baby Toys',
        },
        {
            cateImg: 'https://avatars.mds.yandex.net/i?id=7daba398f07ddb12f3cf8ce9d4e0487ce02cdb37-7543789-images-thumbs&n=13',
            cateName: 'Groceries',
        },
        {
            cateImg: 'https://avatars.mds.yandex.net/i?id=7769a73218beb8e6a08d0fafd85dff525921bd84-9181373-images-thumbs&n=13',
            cateName: 'Books',
        },       
   ]


   return (
    <>
        <div className='category'>
            {data.map((value, index) => {
                return (
                    <div className='box-1 f-flex' key = {index}>
                        <img src = {value.cateImg} alt = 'logo'/>
                        <span>{value.cateName}</span>
                    </div>
                )
            })}
        </div>
    </>
   )
}

export default Categories;

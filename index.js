const products  =[
    {
      img: "https://3635909.app.netsuite.com/core/media/media.nl?id=3966235&c=3635909&h=o-y7dRBz6-eubhNVD90wJZNIZXyDQ1zikn9ryZSLUJ8fW4lY&_xt=.bin",
      Price: 595.0,
      name: "GAIT TRAINERS & WALKERS",
      key: 1,
    },
    {
      img: "https://3635909.app.netsuite.com/core/media/media.nl?id=3966236&c=3635909&h=gtX6XelgoJc62lhxsIVlOxFsXNvPYyxJ8R2HPIIZ9nBp7qZz&_xt=.bin",
  
      Price: 379.99,
      name: "MANUAL STAND-UP LIFTS",
      key: 2,
    },
    {
      img: "https://3635909.app.netsuite.com/core/media/media.nl?id=3966124&c=3635909&h=mHeyhq8HsMHObi4v3Wq52kHnERp_s8Kn6ZjjQCSH-ZfJeHxf&_xt=.bin",
  
      Price: 0.8,
      name: "ADULT DIAPERS & BRIEFS",
      key: 7,
    },
    {
      img: "https://3635909.app.netsuite.com/core/media/media.nl?id=3966237&c=3635909&h=zZq8nH5-HWYMa1TYN49D-UppfmRtFGD1hH2-LY7xboY9yhtj&_xt=.bin",
  
      Price: 485.75,
      name: "SHOWER COMMODE CHAIRS",
      key: 4,
    },
    {
      img: "https://3635909.app.netsuite.com/core/media/media.nl?id=3966126&c=3635909&h=nb7Rzx8Ya5Oz33tZef7TvIQbExhoJM3dr6ytMvmYtrN0PUbe&_xt=.bin",
  
      Price: 0.56,
      name: "OSTOMY DRAINABLE POUCHES",
      key: 5,
    },
    {
      img: "https://3635909.app.netsuite.com/core/media/media.nl?id=3966125&c=3635909&h=W2n2J-DwRdVeS-rlJt94hJJHC9N8laAaaUwNgghvq2jBKYDQ&_xt=.bin",
  
      Price: 1.0,
      name: "WOUNDS CARE DRESSING",
      key: 6,
    },
    {
      img: "https://3635909.app.netsuite.com/core/media/media.nl?id=3966124&c=3635909&h=mHeyhq8HsMHObi4v3Wq52kHnERp_s8Kn6ZjjQCSH-ZfJeHxf&_xt=.bin",
  
      Price: 0.8,
      name: "ADULT DIAPERS & BRIEFS",
      key: 7,
    },
    {
      img: "https://3635909.app.netsuite.com/core/media/media.nl?id=3966125&c=3635909&h=W2n2J-DwRdVeS-rlJt94hJJHC9N8laAaaUwNgghvq2jBKYDQ&_xt=.bin",
  
      Price: 1.0,
      name: "WOUNDS CARE DRESSING",
      key: 8,
    },
    {
      img: "https://3635909.app.netsuite.com/core/media/media.nl?id=3847481&c=3635909&h=lsUT05Uivuu6QPLwLIsnI5MaS_ripyilGkViJpm-rseyN2g8&_xt=.bin",
  
      Price: 1.0,
      name: "ASTHMA CARE SUPPLIES",
      key: 8,
    },
  ];
  
  



const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitem = document.getElementsByClassName("productsContainer");
    const product = document.querySelectorAll(".Sproduct ");
    const pname = document.getElementsByTagName("h2");

    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName("h2")[0];
        if (match) {
            let textvalue = match.textContent || match.innerHTML;

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
};






const productContainer = document.getElementsByClassName('productsContainer')[0]
let string = ''
products.forEach(s => {
    productContainer.innerHTML += `<div class="product">
    <img
      src="${s.img}"
      alt="1st imgae" />
    <h4>${s.name}</h4>
    <h5>As low as $${s.Price}</h5>
  </div>`

  

})







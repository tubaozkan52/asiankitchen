const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];
// kategorileri menu içerisinden alma

let kategoriler = menu.map(kategori => kategori.category)

// set ile aynı olanları çıkarma ve yeni listeye ekleme

let kategoriList = [...new Set(kategoriler)]

kategoriList.unshift("All")   //All listenin başına unshift ile eklendi.

// filter buttonları ekleme
let filterDOM = document.querySelector(".btn-container")  //butonların ekleneceği yer seçildi
kategoriList.forEach(buttons => {
  let button = document.createElement("button")
  button.innerHTML = buttons
  button.classList.add("btn-item","btn", "btn-outline-dark")
  button.addEventListener("click", buttonClick)
  button.setAttribute("id", buttons)
  filterDOM.append(button)
})

// menu elemanlarının ekleneceği yeri seçme
let menuDOM = document.querySelector(".section-center", ".row")

//menu elemanlarının eklenmesi
function addItem(menu) {
  menuDOM.innerHTML = ""; //her kategoriye basıldığında ana ekranın temizlenmesi


  for(i=0; i<menu.length; i++) {   // For döngüsü ile "menu" içerisindeki tüm yemekleri aşağıdaki standart'a göre oluşturdum.
  
   //tek bir yemek için yapının oluşturulması - START
  let menuItems = document.createElement("div")
  menuItems.classList.add("menu-items", "col-lg-6", "col-sm-12")

  
  let image = document.createElement("img")
  image.classList.add("photo")
  image.src = menu[i].img
  image.alt = menu[i].title

  menuDOM.append(menuItems)
  menuItems.append(image)
  
 const menuInfo = document.createElement("div")
 menuInfo.classList.add("menu-info")
 
 let menuTitle = document.createElement("div")
 menuTitle.classList.add("menu-title")

 menuInfo.append(menuTitle)
 
 let title = document.createElement("h4")
 title.innerHTML= menu[i].title

 let price = document.createElement("h4")
 price.classList.add("price")
 price.innerHTML= "$ " +menu[i].price

 let text = document.createElement("div")
 text.classList.add("menu-text")
 text.innerHTML = menu[i].desc
 menuTitle.append(title)
 menuTitle.append(price)
 
 menuInfo.append(text)
 
 
 menuItems.append(menuInfo)
// tek bir yemek için yapının oluşturulması - END
}
}


// butonlara tıklandığıda kategoriyi getirme işlemi
function buttonClick(){
  const result = (this.getAttribute("id") == "All") ? menu : menu.filter((item) => {
    return item.category == this.getAttribute("id");
  });
  addItem(result);
};

// sayfa açıldığında tüm yemeklerin ana ekranda görünmesi
window.addEventListener('DOMContentLoaded', (event) => {
  addItem(menu)
});

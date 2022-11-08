const products = [
    {
        id: "1",
        nombre: "Tabaco Chocolate",
        marca: "Choice",
        precio: 950,
        stock: 10,
        img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/918/467/products/macbarenchoicedarkchocolate1-2e46056fc9aa87513115936283370586-640-0.png"
    },
    {
        id: "2",
        nombre: "Tabaco Cherry",
        marca: "Choice",
        precio: 950,
        stock: 15,
        img: "https://tabaqueriahorus.com/wp-content/uploads/2018/09/MAC-BAREN-CHOICE-CHERRY-600x600.jpg"
    },
    {
        id: "3",
        nombre: "Tabaco Green",
        marca: "Raw",
        precio: 780,
        stock: 9,
        img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/918/467/products/rawgreen1-f0ca6e008c99a4614515983890734960-640-0.jpg"
    },
    {
        id: "4",
        nombre: "Tabaco Original",
        marca: "Raw",
        precio: 780,
        stock: 12,
        img: "https://mujicagrowshop.cl/wp-content/uploads/2021/12/tabaco-raw-classic-1.jpg"
    },
    {
        id: "5",
        nombre: "Tabaco Menta",
        marca: "Argento",
        precio: 830,
        stock: 7,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/363/876/products/paquete-menta1-6df2d8478ed7965fca16014146318423-480-0.jpg"
    },
    {
        id: "6",
        nombre: "Tabaco Uva",
        marca: "Argento",
        precio: 830,
        stock: 14,
        img: "https://i2.wp.com/www.donjuantabaco.com.ar/wp-content/uploads/2020/05/don-juan-tabaco-argento-uva.jpg?fit=900%2C900&ssl=1"
    }
]

export const getProducts = (marca) =>
new Promise((res, rej) => {
  const response = marca
    ? products.filter((p) => p.marca === marca)
    : products;
  setTimeout(() => {
    res(response);
  }, 1500);
});

export const getProduct = (productId) =>
new Promise((res, rej) => {
  const response = products.find((product) => product.id == productId)
  setTimeout(() => {
    res(response);
  }, 0);
});
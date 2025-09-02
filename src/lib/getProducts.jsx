import { slugify } from "./slugify";

class Product {
    constructor({ id, title, shortDescription, price, image, isNew, originalPrice, discount}) {
    this.id = id
    this.title = title
    this.shortDescription = shortDescription
    this.price = price
    this.image = image
    this.isNew = isNew
    this.originalPrice = originalPrice
    this.discount = discount
}

  get slug() {
    return slugify(this.title, this.shortDescription)
  }
}

export default async function getProducts () {
  return [
    new Product({
      id: 'prd004-syl',
      title: 'Syltherine',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/images/products/syltherine.png',
      discount: 30,
      isNew: false
    }),
    new Product({
      id: 'prd011-lev',
      title: 'Leviosa',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: null,
      image: '/images/products/leviosa.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd005-lol',
      title: 'Lolito',
      shortDescription: 'Luxury big sofa',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/lolito.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd014-res',
      title: 'Respira',
      shortDescription: 'Outdoor bar table and stool',
      price: 500000,
      originalPrice: null,
      image: '/images/products/respira.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd009-gri',
      title: 'Grifo',
      shortDescription: 'Night lamp',
      price: 1500000,
      originalPrice: null,
      image: '/images/products/grifo.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd001-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd013-pin',
      title: 'Pingky',
      shortDescription: 'Cute bed set',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/pingky.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd007-pot',
      title: 'Potty',
      shortDescription: 'Minimalist flower pot',
      price: 500000,
      originalPrice: null,
      image: '/images/products/potty.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd002-lev',
      title: 'Leviosa',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: null,
      image: '/images/products/leviosa.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd003-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd006-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd008-lol',
      title: 'Lolito',
      shortDescription: 'Luxury big sofa',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/lolito.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd010-pot',
      title: 'Potty',
      shortDescription: 'Minimalist flower pot',
      price: 500000,
      originalPrice: null,
      image: '/images/products/potty.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd012-syl',
      title: 'Syltherine',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/images/products/syltherine.png',
      discount: 30,
      isNew: false
    }),
    new Product({
      id: 'prd201-pin',
      title: 'Pingky',
      shortDescription: 'Cute bed set',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/pingky.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd015-lol',
      title: 'Lolito',
      shortDescription: 'Luxury big sofa',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/lolito.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd016-syl',
      title: 'Syltherine',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/images/products/syltherine.png',
      discount: 30,
      isNew: false
    }),
    new Product({
      id: 'prd017-pot',
      title: 'Potty',
      shortDescription: 'Minimalist flower pot',
      price: 500000,
      originalPrice: null,
      image: '/images/products/potty.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd018-res',
      title: 'Respira',
      shortDescription: 'Outdoor bar table and stool',
      price: 500000,
      originalPrice: null,
      image: '/images/products/respira.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd019-lev',
      title: 'Leviosa',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: null,
      image: '/images/products/leviosa.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd020-res',
      title: 'Respira',
      shortDescription: 'Outdoor bar table and stool',
      price: 500000,
      originalPrice: null,
      image: '/images/products/respira.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd021-res',
      title: 'Respira',
      shortDescription: 'Outdoor bar table and stool',
      price: 500000,
      originalPrice: null,
      image: '/images/products/respira.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd022-res',
      title: 'Respira',
      shortDescription: 'Outdoor bar table and stool',
      price: 500000,
      originalPrice: null,
      image: '/images/products/respira.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd023-res',
      title: 'Respira',
      shortDescription: 'Outdoor bar table and stool',
      price: 500000,
      originalPrice: null,
      image: '/images/products/respira.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd024-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd025-gri',
      title: 'Grifo',
      shortDescription: 'Night lamp',
      price: 1500000,
      originalPrice: null,
      image: '/images/products/grifo.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd026-pot',
      title: 'Potty',
      shortDescription: 'Minimalist flower pot',
      price: 500000,
      originalPrice: null,
      image: '/images/products/potty.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd027-lol',
      title: 'Lolito',
      shortDescription: 'Luxury big sofa',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/lolito.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd028-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd029-gri',
      title: 'Grifo',
      shortDescription: 'Night lamp',
      price: 1500000,
      originalPrice: null,
      image: '/images/products/grifo.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd030-gri',
      title: 'Grifo',
      shortDescription: 'Night lamp',
      price: 1500000,
      originalPrice: null,
      image: '/images/products/grifo.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd031-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd032-pin',
      title: 'Pingky',
      shortDescription: 'Cute bed set',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/pingky.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd033-syl',
      title: 'Syltherine',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/images/products/syltherine.png',
      discount: 30,
      isNew: false
    }),
    new Product({
      id: 'prd034-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd035-pot',
      title: 'Potty',
      shortDescription: 'Minimalist flower pot',
      price: 500000,
      originalPrice: null,
      image: '/images/products/potty.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd036-syl',
      title: 'Syltherine',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/images/products/syltherine.png',
      discount: 30,
      isNew: false
    }),
    new Product({
      id: 'prd037-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd038-syl',
      title: 'Syltherine',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/images/products/syltherine.png',
      discount: 30,
      isNew: false
    }),
    new Product({
      id: 'prd039-res',
      title: 'Respira',
      shortDescription: 'Outdoor bar table and stool',
      price: 500000,
      originalPrice: null,
      image: '/images/products/respira.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd040-pin',
      title: 'Pingky',
      shortDescription: 'Cute bed set',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/pingky.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd041-lev',
      title: 'Leviosa',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: null,
      image: '/images/products/leviosa.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd042-syl',
      title: 'Syltherine',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/images/products/syltherine.png',
      discount: 30,
      isNew: false
    }),
    new Product({
      id: 'prd043-pot',
      title: 'Potty',
      shortDescription: 'Minimalist flower pot',
      price: 500000,
      originalPrice: null,
      image: '/images/products/potty.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd044-res',
      title: 'Respira',
      shortDescription: 'Outdoor bar table and stool',
      price: 500000,
      originalPrice: null,
      image: '/images/products/respira.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd045-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd046-pot',
      title: 'Potty',
      shortDescription: 'Minimalist flower pot',
      price: 500000,
      originalPrice: null,
      image: '/images/products/potty.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd047-gri',
      title: 'Grifo',
      shortDescription: 'Night lamp',
      price: 1500000,
      originalPrice: null,
      image: '/images/products/grifo.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd048-lev',
      title: 'Leviosa',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: null,
      image: '/images/products/leviosa.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd049-res',
      title: 'Respira',
      shortDescription: 'Outdoor bar table and stool',
      price: 500000,
      originalPrice: null,
      image: '/images/products/respira.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd050-syl',
      title: 'Syltherine',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/images/products/syltherine.png',
      discount: 30,
      isNew: false
    }),
    new Product({
      id: 'prd051-gri',
      title: 'Grifo',
      shortDescription: 'Night lamp',
      price: 1500000,
      originalPrice: null,
      image: '/images/products/grifo.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd052-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd053-lol',
      title: 'Lolito',
      shortDescription: 'Luxury big sofa',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/lolito.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd054-syl',
      title: 'Syltherine',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/images/products/syltherine.png',
      discount: 30,
      isNew: false
    }),
    new Product({
      id: 'prd055-pin',
      title: 'Pingky',
      shortDescription: 'Cute bed set',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/pingky.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd056-lev',
      title: 'Leviosa',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: null,
      image: '/images/products/leviosa.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd057-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd058-pot',
      title: 'Potty',
      shortDescription: 'Minimalist flower pot',
      price: 500000,
      originalPrice: null,
      image: '/images/products/potty.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd059-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd060-res',
      title: 'Respira',
      shortDescription: 'Outdoor bar table and stool',
      price: 500000,
      originalPrice: null,
      image: '/images/products/respira.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd061-pot',
      title: 'Potty',
      shortDescription: 'Minimalist flower pot',
      price: 500000,
      originalPrice: null,
      image: '/images/products/potty.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd062-gri',
      title: 'Grifo',
      shortDescription: 'Night lamp',
      price: 1500000,
      originalPrice: null,
      image: '/images/products/grifo.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd063-pot',
      title: 'Potty',
      shortDescription: 'Minimalist flower pot',
      price: 500000,
      originalPrice: null,
      image: '/images/products/potty.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd064-pot',
      title: 'Potty',
      shortDescription: 'Minimalist flower pot',
      price: 500000,
      originalPrice: null,
      image: '/images/products/potty.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd065-lol',
      title: 'Lolito',
      shortDescription: 'Luxury big sofa',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/lolito.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd066-res',
      title: 'Respira',
      shortDescription: 'Outdoor bar table and stool',
      price: 500000,
      originalPrice: null,
      image: '/images/products/respira.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd067-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd068-res',
      title: 'Respira',
      shortDescription: 'Outdoor bar table and stool',
      price: 500000,
      originalPrice: null,
      image: '/images/products/respira.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd069-gri',
      title: 'Grifo',
      shortDescription: 'Night lamp',
      price: 1500000,
      originalPrice: null,
      image: '/images/products/grifo.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd070-gri',
      title: 'Grifo',
      shortDescription: 'Night lamp',
      price: 1500000,
      originalPrice: null,
      image: '/images/products/grifo.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd071-pot',
      title: 'Potty',
      shortDescription: 'Minimalist flower pot',
      price: 500000,
      originalPrice: null,
      image: '/images/products/potty.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd072-lev',
      title: 'Leviosa',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: null,
      image: '/images/products/leviosa.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd073-lol',
      title: 'Lolito',
      shortDescription: 'Luxury big sofa',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/lolito.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd074-pin',
      title: 'Pingky',
      shortDescription: 'Cute bed set',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/pingky.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd075-gri',
      title: 'Grifo',
      shortDescription: 'Night lamp',
      price: 1500000,
      originalPrice: null,
      image: '/images/products/grifo.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd076-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd077-res',
      title: 'Respira',
      shortDescription: 'Outdoor bar table and stool',
      price: 500000,
      originalPrice: null,
      image: '/images/products/respira.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd078-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd079-syl',
      title: 'Syltherine',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/images/products/syltherine.png',
      discount: 30,
      isNew: false
    }),
    new Product({
      id: 'prd080-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd081-lol',
      title: 'Lolito',
      shortDescription: 'Luxury big sofa',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/lolito.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd082-syl',
      title: 'Syltherine',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/images/products/syltherine.png',
      discount: 30,
      isNew: false
    }),
    new Product({
      id: 'prd083-lev',
      title: 'Leviosa',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: null,
      image: '/images/products/leviosa.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd084-gri',
      title: 'Grifo',
      shortDescription: 'Night lamp',
      price: 1500000,
      originalPrice: null,
      image: '/images/products/grifo.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd085-gri',
      title: 'Grifo',
      shortDescription: 'Night lamp',
      price: 1500000,
      originalPrice: null,
      image: '/images/products/grifo.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd086-lol',
      title: 'Lolito',
      shortDescription: 'Luxury big sofa',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/lolito.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd087-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd088-gri',
      title: 'Grifo',
      shortDescription: 'Night lamp',
      price: 1500000,
      originalPrice: null,
      image: '/images/products/grifo.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd089-res',
      title: 'Respira',
      shortDescription: 'Outdoor bar table and stool',
      price: 500000,
      originalPrice: null,
      image: '/images/products/respira.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd090-lev',
      title: 'Leviosa',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: null,
      image: '/images/products/leviosa.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd091-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd092-syl',
      title: 'Syltherine',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/images/products/syltherine.png',
      discount: 30,
      isNew: false
    }),
    new Product({
      id: 'prd093-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd094-syl',
      title: 'Syltherine',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/images/products/syltherine.png',
      discount: 30,
      isNew: false
    }),
    new Product({
      id: 'prd095-lev',
      title: 'Leviosa',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: null,
      image: '/images/products/leviosa.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd096-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd097-res',
      title: 'Respira',
      shortDescription: 'Outdoor bar table and stool',
      price: 500000,
      originalPrice: null,
      image: '/images/products/respira.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd098-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd099-pot',
      title: 'Potty',
      shortDescription: 'Minimalist flower pot',
      price: 500000,
      originalPrice: null,
      image: '/images/products/potty.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd100-pin',
      title: 'Pingky',
      shortDescription: 'Cute bed set',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/pingky.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd101-lev',
      title: 'Leviosa',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: null,
      image: '/images/products/leviosa.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd102-pin',
      title: 'Pingky',
      shortDescription: 'Cute bed set',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/pingky.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd103-gri',
      title: 'Grifo',
      shortDescription: 'Night lamp',
      price: 1500000,
      originalPrice: null,
      image: '/images/products/grifo.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd104-lev',
      title: 'Leviosa',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: null,
      image: '/images/products/leviosa.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd105-syl',
      title: 'Syltherine',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/images/products/syltherine.png',
      discount: 30,
      isNew: false
    }),
    new Product({
      id: 'prd106-res',
      title: 'Respira',
      shortDescription: 'Outdoor bar table and stool',
      price: 500000,
      originalPrice: null,
      image: '/images/products/respira.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd107-lol',
      title: 'Lolito',
      shortDescription: 'Luxury big sofa',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/lolito.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd108-syl',
      title: 'Syltherine',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/images/products/syltherine.png',
      discount: 30,
      isNew: false
    }),
    new Product({
      id: 'prd109-pot',
      title: 'Potty',
      shortDescription: 'Minimalist flower pot',
      price: 500000,
      originalPrice: null,
      image: '/images/products/potty.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd110-pot',
      title: 'Potty',
      shortDescription: 'Minimalist flower pot',
      price: 500000,
      originalPrice: null,
      image: '/images/products/potty.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd111-pin',
      title: 'Pingky',
      shortDescription: 'Cute bed set',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/pingky.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd112-pot',
      title: 'Potty',
      shortDescription: 'Minimalist flower pot',
      price: 500000,
      originalPrice: null,
      image: '/images/products/potty.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd113-pot',
      title: 'Potty',
      shortDescription: 'Minimalist flower pot',
      price: 500000,
      originalPrice: null,
      image: '/images/products/potty.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd114-lev',
      title: 'Leviosa',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: null,
      image: '/images/products/leviosa.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd115-pot',
      title: 'Potty',
      shortDescription: 'Minimalist flower pot',
      price: 500000,
      originalPrice: null,
      image: '/images/products/potty.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd116-syl',
      title: 'Syltherine',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/images/products/syltherine.png',
      discount: 30,
      isNew: false
    }),
    new Product({
      id: 'prd117-gri',
      title: 'Grifo',
      shortDescription: 'Night lamp',
      price: 1500000,
      originalPrice: null,
      image: '/images/products/grifo.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd118-pin',
      title: 'Pingky',
      shortDescription: 'Cute bed set',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/pingky.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd119-syl',
      title: 'Syltherine',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/images/products/syltherine.png',
      discount: 30,
      isNew: false
    }),
    new Product({
      id: 'prd120-syl',
      title: 'Syltherine',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/images/products/syltherine.png',
      discount: 30,
      isNew: false
    }),
    new Product({
      id: 'prd121-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd122-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd123-pot',
      title: 'Potty',
      shortDescription: 'Minimalist flower pot',
      price: 500000,
      originalPrice: null,
      image: '/images/products/potty.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd124-lol',
      title: 'Lolito',
      shortDescription: 'Luxury big sofa',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/lolito.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd125-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd126-gri',
      title: 'Grifo',
      shortDescription: 'Night lamp',
      price: 1500000,
      originalPrice: null,
      image: '/images/products/grifo.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd127-lol',
      title: 'Lolito',
      shortDescription: 'Luxury big sofa',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/lolito.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd128-lol',
      title: 'Lolito',
      shortDescription: 'Luxury big sofa',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/lolito.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd129-lev',
      title: 'Leviosa',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: null,
      image: '/images/products/leviosa.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd130-syl',
      title: 'Syltherine',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/images/products/syltherine.png',
      discount: 30,
      isNew: false
    }),
    new Product({
      id: 'prd131-lev',
      title: 'Leviosa',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: null,
      image: '/images/products/leviosa.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd132-lev',
      title: 'Leviosa',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: null,
      image: '/images/products/leviosa.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd133-gri',
      title: 'Grifo',
      shortDescription: 'Night lamp',
      price: 1500000,
      originalPrice: null,
      image: '/images/products/grifo.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd134-pot',
      title: 'Potty',
      shortDescription: 'Minimalist flower pot',
      price: 500000,
      originalPrice: null,
      image: '/images/products/potty.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd135-pot',
      title: 'Potty',
      shortDescription: 'Minimalist flower pot',
      price: 500000,
      originalPrice: null,
      image: '/images/products/potty.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd136-syl',
      title: 'Syltherine',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/images/products/syltherine.png',
      discount: 30,
      isNew: false
    }),
    new Product({
      id: 'prd137-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd138-gri',
      title: 'Grifo',
      shortDescription: 'Night lamp',
      price: 1500000,
      originalPrice: null,
      image: '/images/products/grifo.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd139-syl',
      title: 'Syltherine',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/images/products/syltherine.png',
      discount: 30,
      isNew: false
    }),
    new Product({
      id: 'prd140-res',
      title: 'Respira',
      shortDescription: 'Outdoor bar table and stool',
      price: 500000,
      originalPrice: null,
      image: '/images/products/respira.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd141-res',
      title: 'Respira',
      shortDescription: 'Outdoor bar table and stool',
      price: 500000,
      originalPrice: null,
      image: '/images/products/respira.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd142-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd143-pin',
      title: 'Pingky',
      shortDescription: 'Cute bed set',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/pingky.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd144-lev',
      title: 'Leviosa',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: null,
      image: '/images/products/leviosa.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd145-lol',
      title: 'Lolito',
      shortDescription: 'Luxury big sofa',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/lolito.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd146-pot',
      title: 'Potty',
      shortDescription: 'Minimalist flower pot',
      price: 500000,
      originalPrice: null,
      image: '/images/products/potty.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd147-gri',
      title: 'Grifo',
      shortDescription: 'Night lamp',
      price: 1500000,
      originalPrice: null,
      image: '/images/products/grifo.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd148-syl',
      title: 'Syltherine',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/images/products/syltherine.png',
      discount: 30,
      isNew: false
    }),
    new Product({
      id: 'prd149-res',
      title: 'Respira',
      shortDescription: 'Outdoor bar table and stool',
      price: 500000,
      originalPrice: null,
      image: '/images/products/respira.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd150-pin',
      title: 'Pingky',
      shortDescription: 'Cute bed set',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/pingky.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd151-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd152-res',
      title: 'Respira',
      shortDescription: 'Outdoor bar table and stool',
      price: 500000,
      originalPrice: null,
      image: '/images/products/respira.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd153-lev',
      title: 'Leviosa',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: null,
      image: '/images/products/leviosa.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd154-lev',
      title: 'Leviosa',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: null,
      image: '/images/products/leviosa.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd155-lev',
      title: 'Leviosa',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: null,
      image: '/images/products/leviosa.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd156-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd157-syl',
      title: 'Syltherine',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/images/products/syltherine.png',
      discount: 30,
      isNew: false
    }),
    new Product({
      id: 'prd158-gri',
      title: 'Grifo',
      shortDescription: 'Night lamp',
      price: 1500000,
      originalPrice: null,
      image: '/images/products/grifo.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd159-gri',
      title: 'Grifo',
      shortDescription: 'Night lamp',
      price: 1500000,
      originalPrice: null,
      image: '/images/products/grifo.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd160-lol',
      title: 'Lolito',
      shortDescription: 'Luxury big sofa',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/lolito.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd161-lev',
      title: 'Leviosa',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: null,
      image: '/images/products/leviosa.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd162-res',
      title: 'Respira',
      shortDescription: 'Outdoor bar table and stool',
      price: 500000,
      originalPrice: null,
      image: '/images/products/respira.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd163-gri',
      title: 'Grifo',
      shortDescription: 'Night lamp',
      price: 1500000,
      originalPrice: null,
      image: '/images/products/grifo.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd164-pot',
      title: 'Potty',
      shortDescription: 'Minimalist flower pot',
      price: 500000,
      originalPrice: null,
      image: '/images/products/potty.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd165-lol',
      title: 'Lolito',
      shortDescription: 'Luxury big sofa',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/lolito.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd166-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd167-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd168-gri',
      title: 'Grifo',
      shortDescription: 'Night lamp',
      price: 1500000,
      originalPrice: null,
      image: '/images/products/grifo.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd169-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd170-lol',
      title: 'Lolito',
      shortDescription: 'Luxury big sofa',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/lolito.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd171-pin',
      title: 'Pingky',
      shortDescription: 'Cute bed set',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/pingky.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd172-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd173-lol',
      title: 'Lolito',
      shortDescription: 'Luxury big sofa',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/lolito.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd174-pin',
      title: 'Pingky',
      shortDescription: 'Cute bed set',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/pingky.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd175-lev',
      title: 'Leviosa',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: null,
      image: '/images/products/leviosa.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd176-pin',
      title: 'Pingky',
      shortDescription: 'Cute bed set',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/pingky.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd177-lol',
      title: 'Lolito',
      shortDescription: 'Luxury big sofa',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/lolito.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd178-syl',
      title: 'Syltherine',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/images/products/syltherine.png',
      discount: 30,
      isNew: false
    }),
    new Product({
      id: 'prd179-lol',
      title: 'Lolito',
      shortDescription: 'Luxury big sofa',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/lolito.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd180-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd181-gri',
      title: 'Grifo',
      shortDescription: 'Night lamp',
      price: 1500000,
      originalPrice: null,
      image: '/images/products/grifo.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd182-syl',
      title: 'Syltherine',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/images/products/syltherine.png',
      discount: 30,
      isNew: false
    }),
    new Product({
      id: 'prd183-lol',
      title: 'Lolito',
      shortDescription: 'Luxury big sofa',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/lolito.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd184-pin',
      title: 'Pingky',
      shortDescription: 'Cute bed set',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/pingky.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd185-pot',
      title: 'Potty',
      shortDescription: 'Minimalist flower pot',
      price: 500000,
      originalPrice: null,
      image: '/images/products/potty.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd186-lev',
      title: 'Leviosa',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: null,
      image: '/images/products/leviosa.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd187-syl',
      title: 'Syltherine',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/images/products/syltherine.png',
      discount: 30,
      isNew: false
    }),
    new Product({
      id: 'prd188-lev',
      title: 'Leviosa',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: null,
      image: '/images/products/leviosa.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd189-lev',
      title: 'Leviosa',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: null,
      image: '/images/products/leviosa.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd190-gri',
      title: 'Grifo',
      shortDescription: 'Night lamp',
      price: 1500000,
      originalPrice: null,
      image: '/images/products/grifo.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd191-pot',
      title: 'Potty',
      shortDescription: 'Minimalist flower pot',
      price: 500000,
      originalPrice: null,
      image: '/images/products/potty.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd192-gri',
      title: 'Grifo',
      shortDescription: 'Night lamp',
      price: 1500000,
      originalPrice: null,
      image: '/images/products/grifo.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd193-lev',
      title: 'Leviosa',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: null,
      image: '/images/products/leviosa.png',
      discount: null,
      isNew: false
    }),
    new Product({
      id: 'prd194-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd195-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd196-pot',
      title: 'Potty',
      shortDescription: 'Minimalist flower pot',
      price: 500000,
      originalPrice: null,
      image: '/images/products/potty.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd197-pin',
      title: 'Pingky',
      shortDescription: 'Cute bed set',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/pingky.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd198-pin',
      title: 'Pingky',
      shortDescription: 'Cute bed set',
      price: 7000000,
      originalPrice: 14000000,
      image: '/images/products/pingky.png',
      discount: 50,
      isNew: false
    }),
    new Product({
      id: 'prd199-mug',
      title: 'Muggo',
      shortDescription: 'Small mug',
      price: 150000,
      originalPrice: null,
      image: '/images/products/muggo.png',
      discount: null,
      isNew: true
    }),
    new Product({
      id: 'prd200-lev',
      title: 'Leviosa',
      shortDescription: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: null,
      image: '/images/products/leviosa.png',
      discount: null,
      isNew: false
    }),
  ]
}
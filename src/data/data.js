import IMAGES from "../assets/images"
import store from "../store/store";
import { USER } from "../utils/strings/screen-name";
import { toast } from "../utils/toast";

export const navigations = [
    {
        id: 'inventory',
        title: 'Inventory',
        img: IMAGES.inventoryIcon,
        onPress: (navigation) => {
            const subscription = store.getState().subscription;
            if (subscription.isSubscriptionCreated && subscription.isSubscriptionPaymentDone) {
                navigation.navigate(USER.TOP_TAB);
            } else if (subscription.isSubscriptionCreated && !subscription.isSubscriptionPaymentDone) {
                navigation.navigate(USER.PAYMENT);
            } else {
                navigation.navigate(USER.ADD_ITEMS,);
            }
        }
    },
    {
        id: 'discovery',
        title: 'Discovery',
        img: IMAGES.discoveryIcon,
        onPress: (navigation) => {
            toast('Coming Soon!!!');
            navigation.navigate(USER.TOP_TAB, { screen: USER.ORDER_HISTORY });
        }
    },
    {
        id: 'digi-menu',
        title: 'Digi Menu',
        img: IMAGES.digiMenuIcon,
        onPress: (navigation) => {
            toast('Coming Soon!!!');
        }
    },
    {
        id: 'marketing',
        title: 'Marketing',
        img: IMAGES.marketingIcon,
        onPress: (navigation) => {
            toast('Coming Soon!!!');
        }
    },
]

export const categories = [
    {
        id: '1',
        name: 'Vegetables',
        img: 'https://cdn-icons-png.flaticon.com/256/7153/7153173.png',
    },
    {
        id: '2',
        name: 'Rice',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDu_nhKorFXb9zzVowpnilKUXhtFxrURSLYQ&usqp=CAU',
    },
    {
        id: '3',
        name: 'Pulse',
        img: 'https://files.sitebuilder.name.tools/enom37479/image/pulses_primacy.png',
    },
    {
        id: '4',
        name: 'Milk',
        img: 'https://purepng.com/public/uploads/large/purepng.com-milkmilkliquidnutritioncow-14115279570641c5j7.png',
    },
    {
        id: '5',
        name: 'Atta',
        img: 'https://www.bigbasket.com/media/uploads/p/xl/161826-2_4-aashirvaad-atta-whole-wheat.jpg',
    },
    {
        id: '6',
        name: 'Oil',
        img: 'https://pngfile.net/download/xGLCdZVvh05lajvTnGj74uI6Mx8JcsmqILf4ff6g4sd8151NlF0gZEqWwKRkt7IrXdEFClevmjCXjPuXt65SCnfZfICz90fApFuFMa21AHPH4v4HffzDzWp4m7UhnWPESa7fgPh8PPrQPnzdewtTQp4dY1tFkgtO09sYppD2f6ueu89dfyYZgGzGuvSElkCOJ4w3imPr/medium'
    },
    {
        id: '7',
        name: 'Sugar',
        img: 'https://agridata.ec.europa.eu/extensions/CommonImages/sugar.png'
    },
    {
        id: '8',
        name: 'Salt',
        img: 'https://5.imimg.com/data5/SELLER/Default/2020/12/JE/MG/YU/102172283/tata-salt.jpg'
    },
    {
        id: '9',
        name: 'Masalas',
        img: 'https://static.vecteezy.com/system/resources/previews/028/085/387/original/different-indian-spices-in-a-round-wooden-board-generative-ai-png.png'
    },
    {
        id: '10',
        name: 'Dry Fruits',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHpAmflGbBp_FXQ8PQZAR4-_yXGYE1Pu4bKQ&usqp=CAU'
    },
]

export const products = [
    {
        id: '1',
        name: 'Potatoes',
        brand: 'Potatoes',
        quantity: '1',
        quantityType: 'kg',
        price: '20',
        categoryId: '1',
        img: 'https://pngfre.com/wp-content/uploads/Potato-10-2.png',
    },
    {
        id: '2',
        name: 'Basmati Rice',
        brand: 'Daawat',
        quantity: '20',
        quantityType: 'kg',
        price: '120',
        categoryId: '2',
        img: 'https://pngfile.net/public/uploads/preview/daawat-basmati-rice-21590765524zag1ie6op9.png',
    },
    {
        id: '3',
        name: 'Bajra',
        brand: 'Bajra',
        quantity: '1',
        quantityType: 'kg',
        price: '50',
        categoryId: '3',
        img: 'https://www.healthyorganic.in/cdn/shop/products/HealthyOrganic-pearl-millet_grande.jpg?v=1572590336',
    },
    {
        id: '4',
        name: 'Cow Milk',
        brand: 'Cow Milk',
        quantity: '1',
        quantityType: 'ltr',
        price: '65',
        categoryId: '4',
        img: 'https://illustoon.com/photo/4906.png',
    },
    {
        id: '5',
        name: 'Sharbati Wheat',
        brand: 'Aashirwaad Atta',
        quantity: '25',
        quantityType: 'kg',
        price: '80',
        categoryId: '5',
        img: 'https://www.bigbasket.com/media/uploads/p/xl/161826-2_4-aashirvaad-atta-whole-wheat.jpg',
    },
    {
        id: '6',
        name: 'Mustard Oil',
        brand: 'Mustard Oil',
        quantity: '1',
        quantityType: 'kg',
        price: '150',
        categoryId: '6',
        img: 'https://t3.ftcdn.net/jpg/00/77/97/20/360_F_77972049_iYuv8eKfTdwxCR7XaqczMJfqZ1rGRzAz.jpg',
    },
    {
        id: '7',
        name: 'Sugar',
        brand: 'White Sugar',
        quantity: '1',
        quantityType: 'kg',
        price: '40',
        categoryId: '7',
        img: 'https://www.freepnglogos.com/uploads/sugar-png/sugar-png-transparent-images-pictures-photos-png-arts-26.png',
    },
    {
        id: '8',
        name: 'Salt',
        brand: 'Tata Namak',
        quantity: '1',
        quantityType: 'kg',
        price: '26',
        categoryId: '8',
        img: 'https://storage.googleapis.com/zopnow-static/images/products/320/tata-salt-v-1-kg-1.png',
    },
    {
        id: '9',
        name: 'Lal Mirch',
        brand: 'Lal Mirch',
        quantity: '500',
        quantityType: 'gm',
        price: '90',
        categoryId: '9',
        img: 'https://e7.pngegg.com/pngimages/388/647/png-clipart-indian-cuisine-kashmiri-cuisine-chili-powder-chili-pepper-spice-red-pepper-food-five-spice-powder.png',
    },
    {
        id: '10',
        name: 'Cashews',
        brand: 'Cashews',
        quantity: '200',
        quantityType: 'gm',
        price: '190',
        categoryId: '10',
        img: 'https://pngimg.com/d/cashew_PNG11.png',
    },
    {
        id: '11',
        name: 'Tomatoes',
        brand: 'Tomatoes',
        quantity: '1',
        quantityType: 'kg',
        price: '30',
        categoryId: '1',
        img: 'https://www.kindpng.com/picc/m/21-214404_fresh-tomato-download-transparent-png-image-fresh-tomatoes.png',
    },
    {
        id: '12',
        name: 'Rice',
        brand: 'Rice',
        quantity: '20',
        quantityType: 'kg',
        price: '50',
        categoryId: '2',
        img: 'https://www.pngkit.com/png/detail/837-8379956_rice-free-download-png-long-grain-rice-png.png',
    },
    {
        id: '13',
        name: 'Red Lentils',
        brand: 'Red Lentils',
        quantity: '1',
        quantityType: 'kg',
        price: '100',
        categoryId: '3',
        img: 'https://2.wlimg.com/product_images/bc-full/2022/2/4983406/red-lentil-1644643345-6198731.jpeg',
    },
    {
        id: '14',
        name: 'Full Cream Milk',
        brand: 'Full Cream Milk',
        quantity: '1',
        quantityType: 'ltr',
        price: '66',
        categoryId: '4',
        img: 'https://illustoon.com/photo/4906.png',
    },
    {
        id: '15',
        name: 'Sharbati Wheat',
        brand: 'Aashirwaad Atta',
        quantity: '25',
        quantityType: 'kg',
        price: '80',
        categoryId: '5',
        img: 'https://www.bigbasket.com/media/uploads/p/xl/161826-2_4-aashirvaad-atta-whole-wheat.jpg',
    },
    {
        id: '16',
        name: 'Jivika Organics',
        brand: 'Cow Desi Ghee',
        quantity: '1',
        quantityType: 'kg',
        price: '550',
        categoryId: '6',
        img: 'https://jivikaorganics.in/cdn/shop/products/A2Desicowghee250mlfront.jpg?v=1677043297&width=900',
    },
    {
        id: '17',
        name: 'Sugar',
        brand: 'Golden Sugar',
        quantity: '1',
        quantityType: 'kg',
        price: '60',
        categoryId: '7',
        img: 'https://pngimg.com/d/sugar_PNG31.png',
    },
    {
        id: '18',
        name: 'Salt',
        brand: 'Tata Namak',
        quantity: '1',
        quantityType: 'kg',
        price: '26',
        categoryId: '8',
        img: 'https://storage.googleapis.com/zopnow-static/images/products/320/tata-salt-v-1-kg-1.png',
    },
    {
        id: '19',
        name: 'Haldi Powder',
        brand: 'Haldi Powder',
        quantity: '500',
        quantityType: 'gm',
        price: '70',
        categoryId: '9',
        img: 'https://t4.ftcdn.net/jpg/02/05/71/05/360_F_205710578_ntH0Fy72eLvGPbnmNtz1K1TzSvbAiYGM.jpg',
    },
    {
        id: '20',
        name: 'Pistachio',
        brand: 'Pistachio',
        quantity: '200',
        quantityType: 'gm',
        price: '160',
        categoryId: '10',
        img: 'https://images.rawpixel.com/image_transparent_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3N0YXJ0dXBpbWFnZXNfcGhvdG9fb2ZfYV9waWxlX29mX3Bpc3RhY2hpb3NfX2xvd19kZXRhaWxfaXNvbGF0ZV8wMTU1OGI3Ni05M2JiLTQ0YmItYTQ1MS04M2VmMTgxZDIxMmMucG5n.png',
    },
    {
        id: '21',
        name: 'Brinjal',
        brand: 'Brinjal',
        quantity: '1',
        quantityType: 'kg',
        price: '20',
        categoryId: '1',
        img: 'https://e7.pngegg.com/pngimages/863/1006/png-clipart-fried-eggplant-organic-food-rollatini-vegetable-eggplant-purple-natural-foods.png',
    },
    {
        id: '22',
        name: 'Brown Rice',
        brand: 'Brown Rice',
        quantity: '20',
        quantityType: 'kg',
        price: '120',
        categoryId: '2',
        img: 'https://w7.pngwing.com/pngs/209/677/png-transparent-brown-rice-five-grains-cereal-food-rice-coarse-grains-brown-recipe-nutrition.png',
    },
    {
        id: '23',
        name: 'Moong Daal',
        brand: 'Moong Daal',
        quantity: '1',
        quantityType: 'kg',
        price: '89',
        categoryId: '3',
        img: 'https://www.tradeindia.com/_next/image/?url=https%3A%2F%2Ftiimg.tistatic.com%2Ffp%2F1%2F007%2F898%2Fhealthy-nutritious-easy-to-digest-and-no-added-preservatives-moong-dal-356.jpg&w=750&q=75',
    },
    {
        id: '24',
        name: 'Amul Milk',
        brand: 'Amul Milk',
        quantity: '1',
        quantityType: 'ltr',
        price: '62',
        categoryId: '4',
        img: 'https://illustoon.com/photo/4906.png',
    },
    {
        id: '25',
        name: 'Sharbati Wheat',
        brand: 'Aashirwaad Atta',
        quantity: '25',
        quantityType: 'kg',
        price: '80',
        categoryId: '5',
        img: 'https://www.bigbasket.com/media/uploads/p/xl/161826-2_4-aashirvaad-atta-whole-wheat.jpg',
    },
    {
        id: '26',
        name: 'Coconut Oil',
        brand: 'Coconut Oil',
        quantity: '1',
        quantityType: 'kg',
        price: '220',
        categoryId: '6',
        img: 'https://img.freepik.com/premium-photo/coconut-oil-dripping-from-coconut-cut-half-with-bottle-isolated-white-surface_252965-932.jpg',
    },
    {
        id: '27',
        name: 'Sugar',
        brand: 'Brown Sugar',
        quantity: '1',
        quantityType: 'kg',
        price: '55',
        categoryId: '7',
        img: 'https://www.freepnglogos.com/uploads/sugar-png/sugar-the-seven-wonders-35.png',
    },
    {
        id: '28',
        name: 'Salt',
        brand: 'Tata Namak',
        quantity: '1',
        quantityType: 'kg',
        price: '26',
        categoryId: '8',
        img: 'https://storage.googleapis.com/zopnow-static/images/products/320/tata-salt-v-1-kg-1.png',
    },
    {
        id: '29',
        name: 'Green Cardamom',
        brand: 'Cardamom',
        quantity: '100',
        quantityType: 'gm',
        price: '200',
        categoryId: '9',
        img: 'https://5.imimg.com/data5/LI/MJ/IZ/IOS-1606034/product-jpeg-500x500.png',
    },
    {
        id: '30',
        name: 'Almonds',
        brand: 'Almonds',
        quantity: '200',
        quantityType: 'gm',
        price: '200',
        categoryId: '10',
        img: 'https://freepngimg.com/thumb/almond/125203-nut-almond-free-download-png-hq-thumb.png',
    },
    {
        id: '31',
        name: 'Onion',
        brand: 'Onion',
        quantity: '1',
        quantityType: 'kg',
        price: '40',
        categoryId: '1',
        img: 'https://e7.pngegg.com/pngimages/546/145/png-clipart-red-onions-raw-foodism-organic-food-shallot-red-onion-vegetable-onion-natural-foods-leaf-vegetable.png',
    },
    {
        id: '32',
        name: 'Chilli Pepper',
        brand: 'Chilli Pepper',
        quantity: '1',
        quantityType: 'kg',
        price: '50',
        categoryId: '1',
        img: 'https://w7.pngwing.com/pngs/425/383/png-transparent-chili-red-chili-vegetables.png',
    },
    {
        id: '33',
        name: 'Garlic',
        brand: 'Garlic',
        quantity: '1',
        quantityType: 'kg',
        price: '200',
        categoryId: '1',
        img: 'https://www.freepnglogos.com/uploads/garlic-png/garlic-the-super-cure-healthy-readers-9.png',
    },
    {
        id: '34',
        name: 'Cabbage',
        brand: 'Cabbage',
        quantity: '1',
        quantityType: 'kg',
        price: '40',
        categoryId: '1',
        img: 'https://freepngimg.com/save/5509-cabbage-png-image/386x350',
    },
    {
        id: '35',
        name: 'Carrot',
        brand: 'Carrot',
        quantity: '1',
        quantityType: 'kg',
        price: '30',
        categoryId: '1',
        img: 'https://w7.pngwing.com/pngs/543/73/png-transparent-four-orange-carrots-carrot-vegetable-computer-file-carrot-natural-foods-leaf-vegetable-food.png',
    },
]

export const subscriptionBenefitList = [
    { title: "Free Delivery", icon: '' },
    { title: "24/7 Support", icon: '' },
    { title: "Executive Visit", icon: '' },
    { title: "On Time Delivery", icon: '' },
]

export const unitQuantityType = ["Kg", "gm", "ltr", "ml"];

export const homeBanners = [IMAGES.banner.banner1, IMAGES.banner.banner2, IMAGES.banner.banner3];

export const orderHistoryList = [
    {
        orderId: 'PP01RNI09IIT80789',
        status: 'Delivered',
        dateOfDelivery: '12 Jun 2023',
        timeOfDelivery: '10:33am',
        paymentMode: 'PAY_NOW',
        paymentThrough: 'Razorpay',
        paymentBy: 'Credit Card',
        products: [
            {
                "_id": "657c578050cbada63338bc27",
                "isDeleted": false,
                "categoryId": "657c313e7f0ee1d4b446d7e4",
                "name": "Potatoes",
                "images": [
                    "https://pngfre.com/wp-content/uploads/Potato-10-2.png"
                ],
                "brandName": "Potatoes",
                "__v": 0,
                "unitPrice": 10,
                "unitQuantity": 1,
                "unitType": "kg",
                "description": "Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers",
                "updatedAt": "2023-12-17T14:54:49.252Z",
                "unitAdded": 70
            },
            {
                "_id": "80933",
                "name": "HALDI",
                "brandName": "HALDI",
                "unitQuantity": "4",
                "unitType": "Kg",
                "categoryId": "657c3256c927324133b16517",
                "unitAdded": 1,
                "unitPrice": 0,
                "images": [
                    "https://dhoomak.com/a/img/logo.png"
                ]
            },
            {
                "_id": "657caafacf1b07b964994291",
                "isDeleted": false,
                "categoryId": "657c32b9c927324133b16526",
                "name": "Cow Milk",
                "images": [
                    "https://illustoon.com/photo/4906.png"
                ],
                "brandName": "Milk101",
                "__v": 0,
                "unitPrice": 33,
                "unitQuantity": 1,
                "unitType": "ml",
                "updatedAt": "2023-12-17T08:39:32.264Z",
                "description": "Fresh and organic milk, collected from our own dairy",
                "unitAdded": 4
            }
        ],
        totalCharges: "191359",
        gstCharges: "18290",
        razorPayCharges: "238",
        totalChargesWithExtraCharges: "209887",
        deliveryDetails: {
            name: 'Jyoti Pandey',
            address: 'Gate no-3, 2-D, Research & Innovation Park, IIT Delhi, South Delhi, New Delhi - 110016',
            phone: '7079316745',
        }
    },
    {
        orderId: 'PP01RNI09IIT80739',
        status: 'Delivered',
        dateOfDelivery: '12 Jun 2023',
        timeOfDelivery: '10:33am',
        paymentMode: 'PAY_NOW',
        paymentThrough: 'Razorpay',
        paymentBy: 'Credit Card',
        products: [
            {
                "_id": "657c578050cbada63338bc27",
                "isDeleted": false,
                "categoryId": "657c313e7f0ee1d4b446d7e4",
                "name": "Potatoes",
                "images": [
                    "https://pngfre.com/wp-content/uploads/Potato-10-2.png"
                ],
                "brandName": "Potatoes",
                "__v": 0,
                "unitPrice": 10,
                "unitQuantity": 1,
                "unitType": "kg",
                "description": "Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers",
                "updatedAt": "2023-12-17T14:54:49.252Z",
                "unitAdded": 70
            },
            {
                "_id": "80933",
                "name": "HALDI",
                "brandName": "HALDI",
                "unitQuantity": "4",
                "unitType": "Kg",
                "categoryId": "657c3256c927324133b16517",
                "unitAdded": 1,
                "unitPrice": 0,
                "images": [
                    "https://dhoomak.com/a/img/logo.png"
                ]
            },
            {
                "_id": "657caafacf1b07b964994291",
                "isDeleted": false,
                "categoryId": "657c32b9c927324133b16526",
                "name": "Cow Milk",
                "images": [
                    "https://illustoon.com/photo/4906.png"
                ],
                "brandName": "Milk101",
                "__v": 0,
                "unitPrice": 33,
                "unitQuantity": 1,
                "unitType": "ml",
                "updatedAt": "2023-12-17T08:39:32.264Z",
                "description": "Fresh and organic milk, collected from our own dairy",
                "unitAdded": 4
            }
        ],
        totalCharges: "191359",
        gstCharges: "18290",
        razorPayCharges: "238",
        totalChargesWithExtraCharges: "209887",
        deliveryDetails: {
            name: 'Jyoti Pandey',
            address: 'Gate no-3, 2-D, Research & Innovation Park, IIT Delhi, South Delhi, New Delhi - 110016',
            phone: '7079316745',
        }
    },
    {
        orderId: 'PP01RNI09IIT07822',
        status: 'Delivered',
        dateOfDelivery: '12 Jun 2023',
        timeOfDelivery: '10:33am',
        paymentMode: 'PAY_NOW',
        paymentThrough: 'Razorpay',
        paymentBy: 'Credit Card',
        products: [
            {
                "_id": "657c578050cbada63338bc27",
                "isDeleted": false,
                "categoryId": "657c313e7f0ee1d4b446d7e4",
                "name": "Potatoes",
                "images": [
                    "https://pngfre.com/wp-content/uploads/Potato-10-2.png"
                ],
                "brandName": "Potatoes",
                "__v": 0,
                "unitPrice": 10,
                "unitQuantity": 1,
                "unitType": "kg",
                "description": "Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers",
                "updatedAt": "2023-12-17T14:54:49.252Z",
                "unitAdded": 70
            },
            {
                "_id": "80933",
                "name": "HALDI",
                "brandName": "HALDI",
                "unitQuantity": "4",
                "unitType": "Kg",
                "categoryId": "657c3256c927324133b16517",
                "unitAdded": 1,
                "unitPrice": 0,
                "images": [
                    "https://dhoomak.com/a/img/logo.png"
                ]
            },
            {
                "_id": "657caafacf1b07b964994291",
                "isDeleted": false,
                "categoryId": "657c32b9c927324133b16526",
                "name": "Cow Milk",
                "images": [
                    "https://illustoon.com/photo/4906.png"
                ],
                "brandName": "Milk101",
                "__v": 0,
                "unitPrice": 33,
                "unitQuantity": 1,
                "unitType": "ml",
                "updatedAt": "2023-12-17T08:39:32.264Z",
                "description": "Fresh and organic milk, collected from our own dairy",
                "unitAdded": 4
            }
        ],
        totalCharges: "191359",
        gstCharges: "18290",
        razorPayCharges: "238",
        totalChargesWithExtraCharges: "209887",
        deliveryDetails: {
            name: 'Jyoti Pandey',
            address: 'Gate no-3, 2-D, Research & Innovation Park, IIT Delhi, South Delhi, New Delhi - 110016',
            phone: '7079316745',
        }
    },
    {
        orderId: 'PP01RNI09IIW80789',
        status: 'Delivered',
        dateOfDelivery: '12 Jun 2023',
        timeOfDelivery: '10:33am',
        paymentMode: 'PAY_NOW',
        paymentThrough: 'Razorpay',
        paymentBy: 'Credit Card',
        products: [
            {
                "_id": "657c578050cbada63338bc27",
                "isDeleted": false,
                "categoryId": "657c313e7f0ee1d4b446d7e4",
                "name": "Potatoes",
                "images": [
                    "https://pngfre.com/wp-content/uploads/Potato-10-2.png"
                ],
                "brandName": "Potatoes",
                "__v": 0,
                "unitPrice": 10,
                "unitQuantity": 1,
                "unitType": "kg",
                "description": "Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers",
                "updatedAt": "2023-12-17T14:54:49.252Z",
                "unitAdded": 70
            },
            {
                "_id": "80933",
                "name": "HALDI",
                "brandName": "HALDI",
                "unitQuantity": "4",
                "unitType": "Kg",
                "categoryId": "657c3256c927324133b16517",
                "unitAdded": 1,
                "unitPrice": 0,
                "images": [
                    "https://dhoomak.com/a/img/logo.png"
                ]
            },
            {
                "_id": "657caafacf1b07b964994291",
                "isDeleted": false,
                "categoryId": "657c32b9c927324133b16526",
                "name": "Cow Milk",
                "images": [
                    "https://illustoon.com/photo/4906.png"
                ],
                "brandName": "Milk101",
                "__v": 0,
                "unitPrice": 33,
                "unitQuantity": 1,
                "unitType": "ml",
                "updatedAt": "2023-12-17T08:39:32.264Z",
                "description": "Fresh and organic milk, collected from our own dairy",
                "unitAdded": 4
            }
        ],
        totalCharges: "191359",
        gstCharges: "18290",
        razorPayCharges: "238",
        totalChargesWithExtraCharges: "209887",
        deliveryDetails: {
            name: 'Jyoti Pandey',
            address: 'Gate no-3, 2-D, Research & Innovation Park, IIT Delhi, South Delhi, New Delhi - 110016',
            phone: '7079316745',
        }
    },
    {
        orderId: 'PP01RNI09IIT34342',
        status: 'Delivered',
        dateOfDelivery: '12 Jun 2023',
        timeOfDelivery: '10:33am',
        paymentMode: 'PAY_NOW',
        paymentThrough: 'Razorpay',
        paymentBy: 'Credit Card',
        products: [
            {
                "_id": "657c578050cbada63338bc27",
                "isDeleted": false,
                "categoryId": "657c313e7f0ee1d4b446d7e4",
                "name": "Potatoes",
                "images": [
                    "https://pngfre.com/wp-content/uploads/Potato-10-2.png"
                ],
                "brandName": "Potatoes",
                "__v": 0,
                "unitPrice": 10,
                "unitQuantity": 1,
                "unitType": "kg",
                "description": "Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers",
                "updatedAt": "2023-12-17T14:54:49.252Z",
                "unitAdded": 70
            },
            {
                "_id": "80933",
                "name": "HALDI",
                "brandName": "HALDI",
                "unitQuantity": "4",
                "unitType": "Kg",
                "categoryId": "657c3256c927324133b16517",
                "unitAdded": 1,
                "unitPrice": 0,
                "images": [
                    "https://dhoomak.com/a/img/logo.png"
                ]
            },
            {
                "_id": "657caafacf1b07b964994291",
                "isDeleted": false,
                "categoryId": "657c32b9c927324133b16526",
                "name": "Cow Milk",
                "images": [
                    "https://illustoon.com/photo/4906.png"
                ],
                "brandName": "Milk101",
                "__v": 0,
                "unitPrice": 33,
                "unitQuantity": 1,
                "unitType": "ml",
                "updatedAt": "2023-12-17T08:39:32.264Z",
                "description": "Fresh and organic milk, collected from our own dairy",
                "unitAdded": 4
            }
        ],
        totalCharges: "191359",
        gstCharges: "18290",
        razorPayCharges: "238",
        totalChargesWithExtraCharges: "209887",
        deliveryDetails: {
            name: 'Jyoti Pandey',
            address: 'Gate no-3, 2-D, Research & Innovation Park, IIT Delhi, South Delhi, New Delhi - 110016',
            phone: '7079316745',
        }
    },
    {
        orderId: 'PP01RNI09IIT83234',
        status: 'Delivered',
        dateOfDelivery: '12 Jun 2023',
        timeOfDelivery: '10:33am',
        paymentMode: 'PAY_NOW',
        paymentThrough: 'Razorpay',
        paymentBy: 'Credit Card',
        products: [
            {
                "_id": "657c578050cbada63338bc27",
                "isDeleted": false,
                "categoryId": "657c313e7f0ee1d4b446d7e4",
                "name": "Potatoes",
                "images": [
                    "https://pngfre.com/wp-content/uploads/Potato-10-2.png"
                ],
                "brandName": "Potatoes",
                "__v": 0,
                "unitPrice": 10,
                "unitQuantity": 1,
                "unitType": "kg",
                "description": "Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers. Desi potatoes procured fresh from farmers",
                "updatedAt": "2023-12-17T14:54:49.252Z",
                "unitAdded": 70
            },
            {
                "_id": "80933",
                "name": "HALDI",
                "brandName": "HALDI",
                "unitQuantity": "4",
                "unitType": "Kg",
                "categoryId": "657c3256c927324133b16517",
                "unitAdded": 1,
                "unitPrice": 0,
                "images": [
                    "https://dhoomak.com/a/img/logo.png"
                ]
            },
            {
                "_id": "657caafacf1b07b964994291",
                "isDeleted": false,
                "categoryId": "657c32b9c927324133b16526",
                "name": "Cow Milk",
                "images": [
                    "https://illustoon.com/photo/4906.png"
                ],
                "brandName": "Milk101",
                "__v": 0,
                "unitPrice": 33,
                "unitQuantity": 1,
                "unitType": "ml",
                "updatedAt": "2023-12-17T08:39:32.264Z",
                "description": "Fresh and organic milk, collected from our own dairy",
                "unitAdded": 4
            }
        ],
        totalCharges: "191359",
        gstCharges: "18290",
        razorPayCharges: "238",
        totalChargesWithExtraCharges: "209887",
        deliveryDetails: {
            name: 'Jyoti Pandey',
            address: 'Gate no-3, 2-D, Research & Innovation Park, IIT Delhi, South Delhi, New Delhi - 110016',
            phone: '7079316745',
        }
    },
]
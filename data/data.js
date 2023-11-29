import IMAGES from "../assets/images"
import { USER } from "../utils/strings/screen-name";
import { toast } from "../utils/toast";

export const navigation = [
    {
        id: 'inventory',
        title: 'Inventory',
        img: IMAGES.inventoryIcon,
        onPress: (navigation) => {
            navigation.navigate(USER.ADDITEMS);
        }
    },
    {
        id: 'discovery',
        title: 'Discovery',
        img: IMAGES.discoveryIcon,
        onPress: (navigation) => {
            toast('Coming Soon!!!');
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
        img: 'https://www.bigbasket.com/media/uploads/p/xl/161826-2_4-aashirvaad-atta-whole-wheat.jpg',
    },
    {
        id: '2',
        name: 'Basmati Rice',
        brand: 'Basmati Rice',
        quantity: '20',
        quantityType: 'kg',
        price: '120',
        categoryId: '2',
        img: 'https://www.bigbasket.com/media/uploads/p/xl/161826-2_4-aashirvaad-atta-whole-wheat.jpg',
    },
    {
        id: '3',
        name: 'Bajra',
        brand: 'Bajra',
        quantity: '25',
        quantityType: 'kg',
        price: '50',
        categoryId: '3',
        img: 'https://www.bigbasket.com/media/uploads/p/xl/161826-2_4-aashirvaad-atta-whole-wheat.jpg',
    },
    {
        id: '4',
        name: 'Cow Milk',
        brand: 'Cow Milk',
        quantity: '1',
        quantityType: 'ltr',
        price: '65',
        categoryId: '4',
        img: 'https://www.bigbasket.com/media/uploads/p/xl/161826-2_4-aashirvaad-atta-whole-wheat.jpg',
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
        img: 'https://www.bigbasket.com/media/uploads/p/xl/161826-2_4-aashirvaad-atta-whole-wheat.jpg',
    },
    {
        id: '7',
        name: 'Sugar',
        brand: 'White Sugar',
        quantity: '1',
        quantityType: 'kg',
        price: '40',
        categoryId: '7',
        img: 'https://www.bigbasket.com/media/uploads/p/xl/161826-2_4-aashirvaad-atta-whole-wheat.jpg',
    },
    {
        id: '8',
        name: 'Salt',
        brand: 'Tata Namak',
        quantity: '1',
        quantityType: 'kg',
        price: '26',
        categoryId: '8',
        img: 'https://www.bigbasket.com/media/uploads/p/xl/161826-2_4-aashirvaad-atta-whole-wheat.jpg',
    },
    {
        id: '9',
        name: 'Lal Mirch',
        brand: 'Lal Mirch',
        quantity: '500',
        quantityType: 'gm',
        price: '90',
        categoryId: '9',
        img: 'https://www.bigbasket.com/media/uploads/p/xl/161826-2_4-aashirvaad-atta-whole-wheat.jpg',
    },
    {
        id: '10',
        name: 'Cashews',
        brand: 'Cashews',
        quantity: '200',
        quantityType: 'gm',
        price: '190',
        categoryId: '10',
        img: 'https://www.bigbasket.com/media/uploads/p/xl/161826-2_4-aashirvaad-atta-whole-wheat.jpg',
    },
    {
        id: '11',
        name: 'Sharbati Wheat',
        brand: 'Aashirwaad Atta',
        quantity: '25',
        quantityType: 'kg',
        price: '80',
        categoryId: '5',
        img: 'https://www.bigbasket.com/media/uploads/p/xl/161826-2_4-aashirvaad-atta-whole-wheat.jpg',
    },
    {
        id: '12',
        name: 'Sharbati Wheat',
        brand: 'Aashirwaad Atta',
        quantity: '25',
        quantityType: 'kg',
        price: '80',
        categoryId: '5',
        img: 'https://www.bigbasket.com/media/uploads/p/xl/161826-2_4-aashirvaad-atta-whole-wheat.jpg',
    },
    {
        id: '13',
        name: 'Sharbati Wheat',
        brand: 'Aashirwaad Atta',
        quantity: '25',
        quantityType: 'kg',
        price: '80',
        categoryId: '5',
        img: 'https://www.bigbasket.com/media/uploads/p/xl/161826-2_4-aashirvaad-atta-whole-wheat.jpg',
    },
    {
        id: '14',
        name: 'Sharbati Wheat',
        brand: 'Aashirwaad Atta',
        quantity: '25',
        quantityType: 'kg',
        price: '80',
        categoryId: '5',
        img: 'https://www.bigbasket.com/media/uploads/p/xl/161826-2_4-aashirvaad-atta-whole-wheat.jpg',
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
        name: 'Sharbati Wheat',
        brand: 'Aashirwaad Atta',
        quantity: '25',
        quantityType: 'kg',
        price: '80',
        categoryId: '5',
        img: 'https://www.bigbasket.com/media/uploads/p/xl/161826-2_4-aashirvaad-atta-whole-wheat.jpg',
    },
]
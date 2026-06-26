/*javascript */
//Khai báo một đối tượng

const sl = document.getElementsByClassName("soluong");
const dg = document.getElementsByClassName("dongia");
const tt = document.getElementsByClassName("thanhtien");

let tongthanhtoan = 0;

for(let i = 0; i < sl.length; i++)
{
    let soluong = parseInt(sl[i].innerText);
    let dongia = parseInt(dg[i].innerText);

    let thanhtien = soluong * dongia;

    tt[i].innerText = thanhtien.toLocaleString("vi-VN");

    tongthanhtoan += thanhtien;
}

const tong = document.getElementById("tongthanhtoan");

if(tong){
    tong.innerText =
        tongthanhtoan.toLocaleString("vi-VN") + " VND";
}
    
function inBCC(n)
{
    let result = "";
    let i = 1;

    while(i <= 10)
    {
        result += `${n} x ${i} = ${n*i} <br>`;
        i++;
    }

    document.getElementById("result").innerHTML = result;
}





function addItem(name, price, description, link, image)
{
    //Tạo khung chứa container-item
    const item = document.createElement("div"); //<div></div>

    item.setAttribute("class", "container-item");

    //Trong 1 item có khung chứa container-image và container-info

    //Tạo khung chứa container-image
    const containerImage = document.createElement("div");
    containerImage.setAttribute("class", "container-image");

    //Tạo 1 ảnh
    const imageProduct = document.createElement("img");
    imageProduct.setAttribute("src", image); // truyền tham số image
    imageProduct.setAttribute("alt", name);
    imageProduct.setAttribute("style", "width:100%; max-width:100px;");

    //Chèn đối tượng ảnh vào khung chứa ảnh
    containerImage.appendChild(imageProduct);

    //Tạo khung chứa container-info
    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("class", "container-info");

    //Tạo 4 đứa con
    const nameProduct = document.createElement("p");
    nameProduct.innerHTML = name;

    const priceProduct = document.createElement("p");
    priceProduct.innerHTML = price;

    const descProduct = document.createElement("p");
    descProduct.innerHTML = description;

    const linkProduct = document.createElement("a");
    linkProduct.innerHTML = "Xem chi tiết";
    linkProduct.setAttribute("href", link);

    //Thêm con vào khung chứa info
    containerInfo.appendChild(nameProduct);
    containerInfo.appendChild(priceProduct);
    containerInfo.appendChild(descProduct);
    containerInfo.appendChild(linkProduct);

    //Đưa khung ảnh vào item
    item.appendChild(containerImage);

    //Đưa khung info vào item
    item.appendChild(containerInfo);

    //Đưa khung chứa container-product-list vào container
    document.getElementById("container-product-list").appendChild(item);
}


//Khai báo một đối tượng
const product = {
    id:"1",
    name:" Bánh Xèo",
    price:25000,
    description:"Trà sữa trân châu đường đen là thức uống kết hợp hoàn hảo giữa nền trà sữa béo ngậy...",
    image:"../assets/images/banhxeo01.jpg",
    link:"chi-tiet.html"
};

const products = [
    { 
        id: "1",
        name: "Bánh Xèo",
        price: 25000,
        description: "Vỏ bánh vàng ươm, giòn rụm bên ngoài, ngập tràn nhân tôm thịt, giá đỗ mọng nước bên trong. Cuộn tròn cùng rau rừng, chấm ngập nước mắm chua ngọt, chuẩn vị miền Tây sông nước.",
        image: "../assets/images/banhxeo01.jfif",
        link: "chi-tiet.html"
    },
    { 
        id: "2",
        name: "Heo Sữa Quay",
        price: 2700000,
        description: "Lớp da đỏ bóng, giòn tan như tan ngay trong miệng. Phần thịt heo sữa non tơ, mềm mọng, thấm đẫm 24 loại gia vị thảo mộc bí truyền. Đỉnh cao cho mọi bữa tiệc sang trọng.",
        image: "../assets/images/heosua01.jfif",
        link: "chi-tiet.html"
    },
    {
        id: "3",
        name: "Bánh Bông Lan Trứng Muối",
        price: 52000,
        description: "Cốt bánh bông lan mềm xốp, mướt mịn tựa như mây. Kết hợp hoàn hảo cùng sốt phô mai béo ngậy chảy tràn và những viên trứng muối vàng rực, mằn mặn, đậm đà khó cưỡng.",
        image: "../assets/images/bonglan01.jfif",
        link: "chi-tiet.html" 
    },
    {
        id: "4",
        name: "Bún Đậu Mắm Tôm",
        price: 70000,
        description: "Mẹt bún đầy đặn với đậu hũ chiên vàng giòn rướm mỡ, thịt chân giò luộc mềm, chả cốm dẻo thơm. Chấm cùng mắm tôm Thanh Hóa đánh bông chanh ớt, hương vị mê đắm lòng người.",
        image: "../assets/images/bundau01.jfif",
        link: "chi-tiet.html"
    }

];

function addItemV2(product){
    document.getElementById("product-list").innerHTML += `
        <div class="col">
            <div class="card product-item h-100">
                <div class="product-image">
                    <img class="card-img-top" src="${product.image}" alt="${product.name}">
                </div>
                <div class="card-body bg-light product-info">
                    <h4 class="card-title">${product.name}</h4>
                    <h5 class="card-text">${product.price} VNĐ</h5>
                    <p class="card-text">${product.description}</p>
                    <a class="btn btn-info" href="${product.link}">Xem chi tiết</a>
                </div>
            </div>
        </div>
    `;
}

function loadAllProduct()
{
    let i = 0;

    while(i < products.length)
    {
        addItemV2(products[i]);
        i++;
    }
}
// Cấu trúc HTML mẫu mà hàm loadAllProduct() cần sinh ra cho mỗi sản phẩm:
`<div class="col">
    <div class="product-item">
        <div class="product-image">
            <img src="đường_dẫn_ảnh.jpg" class="card-img-top">
        </div>
        <div class="product-info">
            <h4 class="card-title">Tên Sản Phẩm</h4>
            <h5 class="card-text">Giá Tiền</h5>
            <p class="card-text">Mô tả sản phẩm...</p>
            <a href="#" class="btn btn-info">Xem chi tiết</a>
        </div>
    </div>
</div>`
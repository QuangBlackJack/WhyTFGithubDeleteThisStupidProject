// alert('welcome! Senpai!')

//show product from home page===============================================================================================================
//show all

const d = new Date();

function showall() {
  var product = document.getElementById("sanpham")
  product.innerHTML = "";
  product.innerHTML += `
                    <div class="sanpham1">
                        <br>
                        <img width="200px"
                            src="https://ae01.alicdn.com/kf/HTB1NV22DeuSBuNjSsplq6ze8pXaE/NEW-25cm-PVC-Japanese-anime-figure-Aquamarine-Fate-Saber-Okita-Souji-ver-action-figure-collectible-model.jpg"
                            alt="">
                        <br>
                        <a style="font-size: 20px; color: #070707;" href="">Okita</a>
                        <br>
                        <p style="font-size: 20px; color: #070707;">PRICE: 10$</p>
                        <button> <a href="../cart/cartsp1.html"> buy now </a></button>
                        <button onclick="addsp1()"> add to cart</button>
                    </div>

                    <!-- box chua san pham 2 -->
                    <div class="sanpham">
                        <br>
                        <img height="200px"
                            src="https://www.ausani.com.au/wp-content/uploads/2019/06/4589890600300_7.jpg" alt="">
                        <br>
                        <a style="font-size: 20px; color: #070707;" href="">Nekopara Azuki</a>
                        <br>
                        <p style="font-size: 20px; color: #070707;">PRICE: 10$</p>
                        <button> <a href="../cart/cartsp2.html"> buy now </a></button>
                        <button onclick="addsp2()"> add to cart</button>
                    </div>

                    <!-- box chua san pham 3 -->
                    <div class="sanpham">
                        <br>
                        <img width="200px"
                            src="https://ae01.alicdn.com/kf/HTB1STPObEWF3KVjSZPhq6xclXXaS/16cm-Darling-in-the-FRANXX-Figure-Zero-Two-02-red-clothes-Sexy-girls-Anime-PVC-Action.jpg"
                            alt="">
                        <br>
                        <a style="font-size: 20px; color: #070707;" href="">Darling</a>
                        <br>
                        <p style="font-size: 20px; color: #070707;">PRICE: 10$</p>
                        <button> <a href="../cart/cartsp3.html"> buy now </a></button>
                        <button onclick="addsp3()"> add to cart</button>
                    </div>

                    <!-- box chua san pham 4 -->
                    <div class="sanpham">
                        <br>
                        <img width="200px"
                            src="https://ae01.alicdn.com/kf/HTB1TjuXAHSYBuNjSspfq6AZCpXaj/New-anime-figures-toy-figma-Harvest-Moon-Ver-Hatsune-Miku-nendoroid-for-children-of-action-toy.jpg"
                            alt="">
                        <br>
                        <a style="font-size: 20px; color: #070707;" href="">Hatsune Miku</a>
                        <br>
                        <p style="font-size: 20px; color: #070707;">PRICE: 10$</p>
                        <button> <a href="../cart/cartsp4.html"> buy now </a></button>
                        <button onclick="addsp4()"> add to cart</button>
                    </div>
                </center>
                <!-- hang 2 -->
                <center>
                    <!-- box chua san pham 1 -->
                    <div class="sanpham1">
                        <br>
                        <img width="200px"
                            src="https://www.dhresource.com/f2/albu/g10/M01/A8/33/rBVaWV3xo62APydSAANB-uHg20E314.jpg"
                            alt="">
                        <br>
                        <a style="font-size: 20px; color: #070707;" href="">Albedo</a>
                        <br>
                        <p style="font-size: 20px; color: #070707;">PRICE: 10$</p>
                        <button> <a href="../cart/cartsp5.html"> buy now </a></button>
                        <button onclick="addsp5()"> add to cart</button>
                    </div>

                    <!-- box chua san pham 2 -->
                    <div class="sanpham">
                        <br>
                        <img width="200px" height="200px"
                            src="https://www.dhresource.com/0x0s/f2-albu-g5-M00-BE-EB-rBVaJFlaAbSAQNzTAAG6t79I6i0191.jpg/sexy-anime-reika-action-figure-showdown-in.jpg"
                            alt="">
                        <br>
                        <a style="font-size: 20px; color: #070707;" href="">Reika</a>
                        <br>
                        <p style="font-size: 20px; color: #070707;">PRICE: 10$</p>
                        <button> <a href="../cart/cartsp6.html"> buy now </a></button>
                        <button onclick="addsp6()"> add to cart</button>
                    </div>

                    <!-- box chua san pham 3 -->
                    <div class="sanpham">
                        <br>
                        <img width="200px"
                            src="https://i5u9q8a9.stackpathcdn.com/wp-content/uploads/om_000035117-2-600x600.jpg"
                            alt="">
                        <br>
                        <a style="font-size: 20px; color: #070707;" href="">Erika Kuramoto</a>
                        <br>
                        <p style="font-size: 20px; color: #070707;">PRICE: 10$</p>
                        <button> <a href="../cart/cartsp7.html"> buy now </a></button>
                        <button onclick="addsp7()"> add to cart</button>
                    </div>

                    <!-- box chua san pham 4 -->
                    <div class="sanpham">
                        <br>
                        <img width="200px" src="https://i.ebayimg.com/images/g/yW8AAOSwjJpgm4I7/s-l400.jpg" alt="">
                        <br>
                        <a style="font-size: 20px; color: #070707;" href="">Paimon</a>
                        <br>
                        <p style="font-size: 20px; color: #070707;">PRICE: 10$</p>
                        <button> <a href="../cart/cartsp8.html"> buy now </a></button>
                        <button onclick="addsp8()"> add to cart</button>
                    </div>
                    </div>
                </center>
  `;
}

//show anime only
function showanime() {

  var sanpham = document.getElementById("sanpham");

  sanpham.innerHTML = "";
  sanpham.innerHTML += `<div class="sanpham1">
                          <br>
                          <img width="200px"
                              src="https://ae01.alicdn.com/kf/HTB1NV22DeuSBuNjSsplq6ze8pXaE/NEW-25cm-PVC-Japanese-anime-figure-Aquamarine-Fate-Saber-Okita-Souji-ver-action-figure-collectible-model.jpg"
                              alt="">
                          <br>
                          <a style="font-size: 20px; color: #070707;" href="">Okita</a>
                          <br>
                          <p style="font-size: 20px; color: #070707;">PRICE: 10$</p>
                          <button> <a href="../cart/cartsp1.html"> buy now </a></button>
                          <button onclick="addsp1()"> add to cart</button>
                        </div>


                        <!-- box chua san pham 3 -->
                        <div class="sanpham">
                          <br>
                          <img width="200px"
                              src="https://ae01.alicdn.com/kf/HTB1STPObEWF3KVjSZPhq6xclXXaS/16cm-Darling-in-the-FRANXX-Figure-Zero-Two-02-red-clothes-Sexy-girls-Anime-PVC-Action.jpg"
                              alt="">
                          <br>
                          <a style="font-size: 20px; color: #070707;" href="">Darling</a>
                          <br>
                          <p style="font-size: 20px; color: #070707;">PRICE: 10$</p>
                          <button> <a href="../cart/cartsp3.html"> buy now </a></button>
                          <button onclick="addsp3()"> add to cart</button>
                        </div>

                        <!-- box chua san pham 4 -->
                        <div class="sanpham">
                          <br>
                          <img width="200px"
                              src="https://ae01.alicdn.com/kf/HTB1TjuXAHSYBuNjSspfq6AZCpXaj/New-anime-figures-toy-figma-Harvest-Moon-Ver-Hatsune-Miku-nendoroid-for-children-of-action-toy.jpg"
                              alt="">
                          <br>
                          <a style="font-size: 20px; color: #070707;" href="">Hatsune Miku</a>
                          <br>
                          <p style="font-size: 20px; color: #070707;">PRICE: 10$</p>
                          <button> <a href="../cart/cartsp4.html"> buy now </a></button>
                          <button onclick="addsp4()"> add to cart</button>
                        </div>
                        </center>
                        <!-- hang 2 -->
                        <center>
                        <!-- box chua san pham 1 -->
                        <div class="sanpham">
                          <br>
                          <img width="200px"
                              src="https://www.dhresource.com/f2/albu/g10/M01/A8/33/rBVaWV3xo62APydSAANB-uHg20E314.jpg"
                              alt="">
                          <br>
                          <a style="font-size: 20px; color: #070707;" href="">Albedo</a>
                          <br>
                          <p style="font-size: 20px; color: #070707;">PRICE: 10$</p>
                          <button> <a href="../cart/cartsp5.html"> buy now </a></button>
                          <button onclick="addsp5()"> add to cart</button>
                        </div>

                        <!-- box chua san pham 2 -->
                        <div class="sanpham1">
                          <br>
                          <img width="200px" height="200px"
                              src="https://www.dhresource.com/0x0s/f2-albu-g5-M00-BE-EB-rBVaJFlaAbSAQNzTAAG6t79I6i0191.jpg/sexy-anime-reika-action-figure-showdown-in.jpg"
                              alt="">
                          <br>
                          <a style="font-size: 20px; color: #070707;" href="">Reika</a>
                          <br>
                          <p style="font-size: 20px; color: #070707;">PRICE: 10$</p>
                          <button> <a href="../cart/cartsp6.html"> buy now </a></button>
                          <button onclick="addsp6()"> add to cart</button>
                        </div>

                        <!-- box chua san pham 3 -->
                        <div class="sanpham">
                          <br>
                          <img width="200px"
                              src="https://i5u9q8a9.stackpathcdn.com/wp-content/uploads/om_000035117-2-600x600.jpg"
                              alt="">
                          <br>
                          <a style="font-size: 20px; color: #070707;" href="">Erika Kuramoto</a>
                          <br>
                          <p style="font-size: 20px; color: #070707;">PRICE: 10$</p>
                          <button> <a href="../cart/cartsp7.html"> buy now </a></button>
                          <button onclick="addsp7()"> add to cart</button>
                        </div>

                        
                        </center>`;
}

//show game
function showgame() {
  var sanpham = document.getElementById("sanpham");
  sanpham.innerHTML = "";
  sanpham.innerHTML += `
                    <!-- box chua san pham 2 -->
                    <div class="sanpham1">
                        <br>
                        <img height="200px"
                            src="https://www.ausani.com.au/wp-content/uploads/2019/06/4589890600300_7.jpg" alt="">
                        <br>
                        <a style="font-size: 20px; color: #070707;" href="">Nekopara Azuki</a>
                        <br>
                        <p style="font-size: 20px; color: #070707;">PRICE: 10$</p>
                        <button> <a href="../cart/cartsp2.html"> buy now </a></button>
                        <button onclick="addsp2()"> add to cart</button>
                    </div>
                    <!-- box chua san pham 4 -->
                    <div class="sanpham">
                        <br>
                        <img width="200px" src="https://i.ebayimg.com/images/g/yW8AAOSwjJpgm4I7/s-l400.jpg" alt="">
                        <br>
                        <a style="font-size: 20px; color: #070707;" href="">Paimon</a>
                        <br>
                        <p style="font-size: 20px; color: #070707;">PRICE: 10$</p>
                        <button> <a href="../cart/cartsp8.html"> buy now </a></button>
                        <button onclick="addsp8()"> add to cart</button>
                    </div>  
  `;
}
//end show
//show product from home page===============================================================================================================













//them product o page cart==================================================================================================================
// cart
var number = 1;
function add_list1() {
  var list = document.getElementById("list");

  list.innerHTML += `<div style="width: 100%; background-color: #f0f8ff; font-size: 20px; " id='list-${number}'>
                        <img width="100" style=" float: left; margin-left: 15px;"
                        src="https://ae01.alicdn.com/kf/HTB1NV22DeuSBuNjSsplq6ze8pXaE/NEW-25cm-PVC-Japanese-anime-figure-Aquamarine-Fate-Saber-Okita-Souji-ver-action-figure-collectible-model.jpg" alt="">
                        <p style=" float: left; margin-left: 30px;">Okita</p>
                        <p style=" float: left; margin-left: 130px;">${d.toDateString()}</p>
                        <p style=" float: left; margin-left: 120px;">10$</p>  
                       <button style="margin-top: 20px" id=${number} onclick='del_item(this.id); xoadata1()' class='btn btn-danger btn-sm fs-6'>
                         Del
                       </button>
                       <br><br><br><br><br>                
                     </div>`;
  ++number;
}

function add_list2() {
  var list = document.getElementById("list");

  list.innerHTML += `<div style="width: 100%; background-color: #f0f8ff; font-size: 20px; " id='list-${number}'>
                        <img width="100" style=" float: left; margin-left: 15px;"
                        src="https://www.ausani.com.au/wp-content/uploads/2019/06/4589890600300_7.jpg" alt="">
                        <p style=" float: left; margin-left: 30px;">Nekopara Azuki</p>
                        <p style=" float: left; margin-left: 130px;">${d.toDateString()}</p>
                        <p style=" float: left; margin-left: 120px;">10$</p>  
                       <button style="margin-top: 20px" id=${number} onclick='del_item(this.id); xoadata2()' class='btn btn-danger btn-sm fs-6'>
                         Del
                       </button>
                       <br><br><br><br><br>                
                     </div>`;
  ++number;
}

function add_list3() {
  var list = document.getElementById("list");

  list.innerHTML += `<div style="width: 100%; background-color: #f0f8ff; font-size: 20px; " id='list-${number}'>
                        <img width="100" style=" float: left; margin-left: 15px;"
                        src="https://ae01.alicdn.com/kf/HTB1STPObEWF3KVjSZPhq6xclXXaS/16cm-Darling-in-the-FRANXX-Figure-Zero-Two-02-red-clothes-Sexy-girls-Anime-PVC-Action.jpg" alt="">
                        <p style=" float: left; margin-left: 30px;">Darling</p>
                        <p style=" float: left; margin-left: 130px;">${d.toDateString()}</p>
                        <p style=" float: left; margin-left: 120px;">10$</p>  
                       <button style="margin-top: 20px" id=${number} onclick='del_item(this.id); xoadata3()' class='btn btn-danger btn-sm fs-6'>
                         Del
                       </button>
                       <br><br><br><br><br>                
                     </div>`;
  ++number;
}

function add_list4() {
  var list = document.getElementById("list");

  list.innerHTML += `<div style="width: 100%; background-color: #f0f8ff; font-size: 20px; " id='list-${number}'>
                        <img width="100" style=" float: left; margin-left: 15px;"
                        src="https://ae01.alicdn.com/kf/HTB1TjuXAHSYBuNjSspfq6AZCpXaj/New-anime-figures-toy-figma-Harvest-Moon-Ver-Hatsune-Miku-nendoroid-for-children-of-action-toy.jpg" alt="">
                        <p style=" float: left; margin-left: 30px;">Hatsune Miku</p>
                        <p style=" float: left; margin-left: 130px;">${d.toDateString()}</p>
                        <p style=" float: left; margin-left: 120px;">10$</p>  
                       <button style="margin-top: 20px" id=${number} onclick='del_item(this.id); xoadata4()' class='btn btn-danger btn-sm fs-6'>
                         Del
                       </button>
                       <br><br><br><br><br>                
                     </div>`;
  ++number;
}

function add_list5() {
  var list = document.getElementById("list");

  list.innerHTML += `<div style="width: 100%; background-color: #f0f8ff; font-size: 20px; " id='list-${number}'>
                        <img width="100" style=" float: left; margin-left: 15px;"
                        src="https://www.dhresource.com/f2/albu/g10/M01/A8/33/rBVaWV3xo62APydSAANB-uHg20E314.jpg" alt="">
                        <p style=" float: left; margin-left: 30px;">Albedo</p>
                        <p style=" float: left; margin-left: 130px;">${d.toDateString()}</p>
                        <p style=" float: left; margin-left: 120px;">10$</p>  
                       <button style="margin-top: 20px" id=${number} onclick='del_item(this.id); xoadata5()' class='btn btn-danger btn-sm fs-6'>
                         Del
                       </button>
                       <br><br><br><br><br>                
                     </div>`;
  ++number;
}

function add_list6() {
  var list = document.getElementById("list");

  list.innerHTML += `<div style="width: 100%; background-color: #f0f8ff; font-size: 20px; " id='list-${number}'>
                        <img width="100" style=" float: left; margin-left: 15px;"
                        src="https://www.dhresource.com/0x0s/f2-albu-g5-M00-BE-EB-rBVaJFlaAbSAQNzTAAG6t79I6i0191.jpg/sexy-anime-reika-action-figure-showdown-in.jpg" alt="">
                        <p style=" float: left; margin-left: 30px;">Reika</p>
                        <p style=" float: left; margin-left: 130px;">${d.toDateString()}</p>
                        <p style=" float: left; margin-left: 120px;">10$</p>  
                       <button style="margin-top: 20px" id=${number} onclick='del_item(this.id); xoadata6()' class='btn btn-danger btn-sm fs-6'>
                         Del
                       </button>
                       <br><br><br><br><br>                
                     </div>`;
  ++number;
}

function add_list7() {
  var list = document.getElementById("list");

  list.innerHTML += `<div style="width: 100%; background-color: #f0f8ff; font-size: 20px; " id='list-${number}'>
                        <img width="100" style=" float: left; margin-left: 15px;"
                        src="https://i5u9q8a9.stackpathcdn.com/wp-content/uploads/om_000035117-2-600x600.jpg" alt="">
                        <p style=" float: left; margin-left: 30px;">Erika Kuramoto</p>
                        <p style=" float: left; margin-left: 130px;">${d.toDateString()}</p>
                        <p style=" float: left; margin-left: 120px;">10$</p>  
                       <button style="margin-top: 20px" id=${number} onclick='del_item(this.id); xoadata7()' class='btn btn-danger btn-sm fs-6'>
                         Del
                       </button>
                       <br><br><br><br><br>                
                     </div>`;
  ++number;
}

function add_list8() {
  var list = document.getElementById("list");

  list.innerHTML += `<div style="width: 100%; background-color: #f0f8ff; font-size: 20px; " id='list-${number}'>
                        <img width="100" style=" float: left; margin-left: 15px;"
                        src="https://i.ebayimg.com/images/g/yW8AAOSwjJpgm4I7/s-l400.jpg" alt="">
                        <p style=" float: left; margin-left: 30px;">Paimon</p>
                        <p style=" float: left; margin-left: 130px;">${d.toDateString()}</p>
                        <p style=" float: left; margin-left: 120px;">10$</p>  
                       <button style="margin-top: 20px" id=${number} onclick='del_item(this.id); xoadata8()' class='btn btn-danger btn-sm fs-6'>
                         Del
                       </button>
                       <br><br><br><br><br>                
                     </div>`;
  ++number;
}

function reset_list() {
  var list = document.getElementById("list");

  list.innerHTML = "";
  number = 1;
}

function del_item(id) {
  var list = document.getElementById(`list-${id}`);

  list.outerHTML = "";
}
//end cart
//end them product o page cart==================================================================================================================









//test
function test() {
  alert("dit me may");
}
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⢀⣀⣠⣤⣼⣿⣿⣿⣿⣿⣿⣿⣅⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣯⣽⣢⢤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⡍⠲⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠉⠉⢩⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⢢⣈⠫⢄⠀⠀⠀⠀⠀⠀⢀⡄⠂⢄⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣽⣿⣿⣿⣿⣽⣿⣿⣿⣿⣷⡧⠀⠀⠀⠀⢀⠎⠀⠀⠀⢃⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣟⣣⠀⠀⠀⡎⠀⠀⠀⠀⠀⡆⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⡋⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡔⡄⠀⠁⠀⠀⠀⠀⠀⢰⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⠿⠋⠁⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⡇⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡇⢰⠇⠀⠀⠀⠀⠀⡘⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⣼⣼⣿⣿⠿⣿⣿⣿⡿⢹⣿⣿⣿⣿⣿⣿⡽⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠎⠦⡀⠀⠀⠀⢀⠇⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢢⣿⡇⣼⣧⣶⣿⣿⣿⠁⢸⢿⣿⣿⣿⣿⣿⣷⡘⣷⡹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠧⡙⠀⠑⢄⣀⠤⠂⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣟⣼⣿⣿⣿⣿⣿⣿⠀⠀⢛⣿⣿⣿⣿⣿⡿⣿⡬⠿⣾⡻⣿⣿⣿⣿⣿⣿⣿⣿⣿⢯⣿⣿⣿⣿⣿⣻⡆⢰⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠀⣿⢻⣿⣿⣿⣿⣿⣿⣿⡏⠉⠉⠻⢿⣿⣿⣿⣿⣜⢿⣮⡙⠷⣦⣉⠓⢿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠤⠤⠤⠤⣀⠀⠘⠀⠀⣿⢸⢿⣿⣿⣿⣿⣿⠘⢿⠈⠁⠐⠄⠙⢟⢿⣿⣿⣦⡵⣟⣶⣽⣿⣿⣿⣿⣿⣿⣿⣿⣯⣾⣿⣿⣿⣿⣼⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⢀⠎⠀⠀⠀⠀⠀⠀⠑⠆⠀⠀⣿⠀⣿⣿⣿⣿⣿⣿⣀⣬⣧⣖⣢⠄⠀⠀⠀⠈⠑⠈⠹⠿⠋⠘⣿⣿⣿⡆⣿⣿⣿⡏⡧⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠊⠀⠀⠀⠀⠀⠀⠀⠀⠈⢆⠀⢿⠀⢹⣿⣿⣿⣿⣿⣿⡿⠻⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢮⠴⢃⣿⣿⣿⣿⣷⡟⣿⣿⣿⣿⣿⣟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠄⠸⡆⡄⢿⣿⣿⣿⣿⣿⡻⢄⠙⢿⣻⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⢻⣿⣿⣿⢈⣷⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢱⠐⠹⣵⠀⣿⣿⣿⣿⣿⢿⠦⠀⠀⠀⠀⠀⠀⠂⠀⠀⠀⠀⠀⠀⠀⡠⠞⠁⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡷⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠘⢦⣿⣿⣿⣿⣿⣮⣆⠀⠀⠀⠀⠀⠈⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢣⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣦⣤⡤⠀⠀⠀⠀⢀⣀⣀⣀⡀⠀⠀⢀⠴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡌⡆⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⢰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡅⠀⠀⠀⣾⠇⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠘⡀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠀⠀⠀⣸⡟⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣢⢄⠀⠀⢀⣤⣶⣿⢟⣿⣿⣿⣿⠰⢸⠾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⢡⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠰⡀⠀⠀⠀⠀⠀⠀⢀⠜⠀⠀⠀⣰⡟⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠉⣫⢻⡿⠛⢁⢾⣿⣿⣿⡇⠇⡜⠀⡿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣻⡈⡆⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⢄⠀⠀⠀⡠⠔⠁⠀⠀⠀⣰⡟⠀⠀⣟⣿⣿⣿⣿⣿⣿⠿⠛⠋⠉⠉⠛⠻⢗⠏⠏⢸⢇⢠⠟⣾⣿⣿⣿⣱⠊⠀⠀⡿⡞⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⢸⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠈⠁⠀⠀⠀⠀⢀⡾⠋⠀⠀⣸⠇⣿⣹⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⡈⠀⠀⠸⢻⠋⢸⣿⣿⣿⢿⠃⠀⠀⠀⣇⠗⢿⡇⢹⣿⣿⢿⣿⣿⣿⣿⣏⡆⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠛⠁⠀⠀⢠⡟⢀⣿⣿⣿⣿⣿⡟⣄⠀⠀⠀⠀⢠⣴⣧⣤⣄⣠⠣⣀⣿⣿⣿⣟⠎⠀⠀⠀⠀⣽⠀⠘⣿⠊⠫⡺⣷⣌⠉⡿⢿⣿⡇⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠊⠀⠀⠀⢀⡠⣾⣁⣼⣿⣿⣿⢹⣿⡇⠈⠑⠂⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⠇⡜⠘⡄⠀⠹⣧⠀⠈⠪⢙⢻⠷⠦⠿⣿⡄⠀⠀
// ⠀⠀⢀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠊⠀⣀⠔⣒⣵⣾⣿⣿⣿⣿⣿⣿⡇⢸⣿⠀⠀⡇⠀⠀⠀⠀⣿⣿⣿⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⢋⡼⠔⠀⠉⢄⡀⠙⣧⠀⣀⡴⠉⠉⠉⠉⠹⣷⡀⠀
// ⠀⠈⢏⣷⣮⣕⠢⠀⠀⠀⠀⢠⠞⢀⠔⢉⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⣸⠃⠀⠠⠃⠀⠀⠀⢐⡨⠋⠀⣗⡄⢸⣿⣿⡿⡿⣿⡿⢣⠊⠀⠀⠀⠀⠀⠈⠑⠚⠻⣿⣄⣀⡀⠀⢀⣠⣿⣗⡀
// ⠀⠀⠀⢻⣿⣿⣿⣄⢂⠀⢠⣟⠔⠁⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢀⠏⣀⠞⠀⠀⠀⠀⠀⠈⠀⠀⠀⣿⠀⢸⣿⣟⠀⢣⠀⡰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⠛⠛⠊⢸⣿⡝
// ⠀⠀⠀⠀⢻⣿⣿⣿⣆⢃⢸⡏⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣾⣿⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣧⢸⣿⡟⠀⠸⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣷
// ⠀⠀⠀⠀⠀⢻⣿⣿⣿⡞⡔⣣⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⣠⠀⠘⠻⡼⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⢻⣿
// ⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⢀⠇⠀⠀⠀⠑⠌⠢⠀⣀⣀⠀⠀⠀⠀⠀⠀⣽⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⢸⣿
// ⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣰⣿⣿⣯⣆⠀⠀⠀⠀⠀⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⢸⣿
// ⠀⠀⠀⠀⠀⠀⠀⠈⣏⠻⢿⣿⣿⣿⣿⣿⣿⡇⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀⠆⠀⢀⣠⢰⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠜⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⡟⢸⡟
// ⠀⠀⠀⠀⠀⠀⠀⠀⢸⢇⠈⢿⣿⣿⣿⣿⣿⠁⢀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⡈⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⢠⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡟⢁⡟⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠘⠀⠆⠈⢿⣿⣿⣿⡇⠀⢸⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⡎⠀⠀⠀⠀⠀⣀⣀⣀⣀⣀⣰⣏⣀⣊⣀⣀













//database ---------------------------------------------------------------------------------------------------------------------------
//tao database
var db = window.openDatabase("hentai_chan", "1.0", "MWS", 200000);

//function auto load
window.onload = on_load;

function on_load() {
  initialize_database();
  // getproduct();

}

//khai bao table va nhap du lieu
function initialize_database() {
  db.transaction(function (tx) {

    // ===drop===

    // var query = `drop table city`;
    // tx.executeSql(
    //   query,
    //   [],
    //   function (tx, result) {
    //     log("INFO", `drop all complete`);
    //   },
    //   transaction_error
    // );
    // var query = `drop table District`;
    // tx.executeSql(
    //   query,
    //   [],
    //   function (tx, result) {
    //     log("INFO", `drop all complete`);
    //   },
    //   transaction_error
    // );
    // var query = `drop table Ward`;
    // tx.executeSql(
    //   query,
    //   [],
    //   function (tx, result) {
    //     log("INFO", `drop all complete`);
    //   },
    //   transaction_error
    // );
    // var query = `drop table city`;
    // tx.executeSql(
    //   query,
    //   [],
    //   function (tx, result) {
    //     log("INFO", `drop all complete`);
    //   },
    //   transaction_error
    // );
    // var query = `drop table Account`;
    // tx.executeSql(
    //   query,
    //   [],
    //   function (tx, result) {
    //     log("INFO", `drop all complete`);
    //   },
    //   transaction_error
    // );
    // var query = `drop table Category`;
    // tx.executeSql(
    //   query,
    //   [],
    //   function (tx, result) {
    //     log("INFO", `drop all complete`);
    //   },
    //   transaction_error
    // );
    // var query = `drop table Product`;
    // tx.executeSql(
    //   query,
    //   [],
    //   function (tx, result) {
    //     log("INFO", `drop all complete`);
    //   },
    //   transaction_error
    // );
    // var query = `drop table Cart`;

    // tx.executeSql(
    //   query,
    //   [],
    //   function (tx, result) {
    //     log("INFO", `drop all complete`);
    //   },
    //   transaction_error
    // );

    //table ward
    var query = `CREATE TABLE IF NOT EXISTS ward (
      ward_id INTEGER PRIMARY KEY,
      ward_name TEXT UNIQUE NOT NULL)`;

    tx.executeSql(
      query,
      [],
      function (tx, result) {
        log("INFO", `Create table "ward" successfully.`);
      },
      transaction_error
    );

    //table district
    query = `CREATE TABLE IF NOT EXISTS district (
      district_id INTEGER PRIMARY KEY,
      district_name TEXT UNIQUE NOT NULL)`;

    tx.executeSql(
      query,
      [],
      function (tx, result) {
        log("INFO", `Create table "district" successfully.`);
      },
      transaction_error
    );

    //table city
    query = `CREATE TABLE IF NOT EXISTS city (
      city_id INTEGER PRIMARY KEY,
      city_name TEXT UNIQUE NOT NULL)`;

    tx.executeSql(
      query,
      [],
      function (tx, result) {
        log("INFO", `Create table "city" successfully.`);
      },
      transaction_error
    );

    //table account
    query = `CREATE TABLE IF NOT EXISTS account (
      account_id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      firstname TEXT NULL,
      lastname TEXT NULL,
      birthday REAL NULL,
      phone TEXT NULL,
      street TEXT NULL,
      ward_id INTEGER NULL,
      district_id INTEGER NULL,
      city_id INTEGER NULL,
      status INTEGER NULL,
      FOREIGN KEY (ward_id) REFERENCES ward(ward_id),
      FOREIGN KEY (district_id) REFERENCES district(district_id),
      FOREIGN KEY (city_id) REFERENCES city(city_id))`;

    tx.executeSql(
      query,
      [],
      function (tx, result) {
        log("INFO", `Create table "account" successfully.`);
      },
      transaction_error
    );

    //nhap vao account
    query = `insert into account(username, password, lastname) values("Quangwibu@gmail.com", "QuangWibuChua", "Johny Dang")`
    tx.executeSql(query, [], log("tao tai khoan thanh cong"));

    //1table category
    query = `CREATE TABLE IF NOT EXISTS category (
      category_id INTEGER PRIMARY KEY AUTOINCREMENT,
      category_name TEXT UNIQUE NOT NULL,
      Description TEXT NULL)`;

    tx.executeSql(
      query,
      [],
      function (tx, result) {
        log("INFO", `Create table "category" successfully.`);
      },
      transaction_error
    );

    //2table Product
    query = `CREATE TABLE IF NOT EXISTS Product (
      product_id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_img text null,
      Product_name TEXT UNIQUE NOT NULL,
      Description TEXT NULL,
      Price TEXT NULL,
      Category_id integer not NULL,
      del text null,
      FOREIGN KEY (Category_id) REFERENCES category(Category_id))`;

    tx.executeSql(
      query,
      [],
      function (tx, result) {
        log("INFO", `Create table "Product" successfully.`);
      },
      transaction_error
    );

    //3table cart
    query = `CREATE TABLE IF NOT EXISTS cart (
      cart_id INTEGER PRIMARY KEY AUTOINCREMENT,
      Account_id int UNIQUE NOT NULL,
      Product_id int NOT NULL,
      Quantity TEXT NULL,
      FOREIGN KEY (Account_id) REFERENCES account(Account_id),
      FOREIGN KEY (Product_id) REFERENCES Product(Product_id))`;

    tx.executeSql(
      query,
      [],
      function (tx, result) {
        log("INFO", `Create table "cart" successfully.`);
      },
      transaction_error
    );


    //insert category
    query = `insert into category(category_name) values ("anime")`;
    tx.executeSql(query, [], function (tx, result) { log("INFO", `insert anime successfully.`); }, transaction_error);
    query = `insert into category(category_name) values ("game")`;
    tx.executeSql(query, [], function (tx, result) { log("INFO", `insert game successfully.`); }, transaction_error);



    //insert product
    query = `insert into product(product_name, del ,product_img, price, category_id) values ("Okita", "del_item(this.id); xoadata1()" ,"https://ae01.alicdn.com/kf/HTB1NV22DeuSBuNjSsplq6ze8pXaE/NEW-25cm-PVC-Japanese-anime-figure-Aquamarine-Fate-Saber-Okita-Souji-ver-action-figure-collectible-model.jpg", "10$", 1)`;
    tx.executeSql(query, [], function (tx, result) { log("INFO", `insert Okita successfully.`); }, transaction_error);
    query = `insert into product(product_name, del , product_img, price, category_id) values ("Azuki", "del_item(this.id); xoadata2()" ,"https://www.ausani.com.au/wp-content/uploads/2019/06/4589890600300_7.jpg", "10$", 2)`;
    tx.executeSql(query, [], function (tx, result) { log("INFO", `insert Azuki successfully.`); }, transaction_error);
    //2
    query = `insert into product(product_name, del , product_img, price, category_id) values ("Darling", "del_item(this.id); xoadata3()" ,"https://ae01.alicdn.com/kf/HTB1STPObEWF3KVjSZPhq6xclXXaS/16cm-Darling-in-the-FRANXX-Figure-Zero-Two-02-red-clothes-Sexy-girls-Anime-PVC-Action.jpg", "10$", 1)`;
    tx.executeSql(query, [], function (tx, result) { log("INFO", `insert Darling successfully.`); }, transaction_error);
    query = `insert into product(product_name, del , product_img, price, category_id) values ("Hatsune Miku", "del_item(this.id); xoadata4()" ,"https://ae01.alicdn.com/kf/HTB1TjuXAHSYBuNjSspfq6AZCpXaj/New-anime-figures-toy-figma-Harvest-Moon-Ver-Hatsune-Miku-nendoroid-for-children-of-action-toy.jpg", "10$", 1)`;
    tx.executeSql(query, [], function (tx, result) { log("INFO", `insert Hatsune Miku successfully.`); }, transaction_error);
    //3
    query = `insert into product(product_name, del , product_img, price, category_id) values ("Albedo", "del_item(this.id); xoadata5()" ,"https://www.dhresource.com/f2/albu/g10/M01/A8/33/rBVaWV3xo62APydSAANB-uHg20E314.jpg", "10$", 1)`;
    tx.executeSql(query, [], function (tx, result) { log("INFO", `insert Albedo successfully.`); }, transaction_error);
    query = `insert into product(product_name, del ,product_img, price, category_id) values ("Reika", "del_item(this.id); xoadata6()" ,"https://www.dhresource.com/0x0s/f2-albu-g5-M00-BE-EB-rBVaJFlaAbSAQNzTAAG6t79I6i0191.jpg/sexy-anime-reika-action-figure-showdown-in.jpg", "10$", 1)`;
    tx.executeSql(query, [], function (tx, result) { log("INFO", `insert Reika successfully.`); }, transaction_error);
    //4
    query = `insert into product(product_name, del , product_img, price, category_id) values ("Erika", "del_item(this.id); xoadata7()" ,"https://i5u9q8a9.stackpathcdn.com/wp-content/uploads/om_000035117-2-600x600.jpg", "10$", 1)`;
    tx.executeSql(query, [], function (tx, result) { log("INFO", `insert Erika successfully.`); }, transaction_error);
    query = `insert into product(product_name, del ,product_img, price, category_id) values ("paimon", "del_item(this.id); xoadata8()" ,"https://i.ebayimg.com/images/g/yW8AAOSwjJpgm4I7/s-l400.jpg", "10$", 1)`;
    tx.executeSql(query, [], function (tx, result) { log("INFO", `insert paimon successfully.`); }, transaction_error);



    //insert city
    query = `insert into city(city_id, city_name) values (1, "Ho Chi Minh")`;
    tx.executeSql(query, [], function (tx, result) { log("INFO", `insert Ho Chi Minh successfully.`); }, transaction_error);
    query = `insert into city(city_id, city_name) values (2, "Ha Noi")`;
    tx.executeSql(query, [], function (tx, result) { log("INFO", `insert Ha Noi successfully.`); }, transaction_error);
    //insert district
    query = `insert into district(district_id, district_name) values (1, "Quan 1")`;
    tx.executeSql(query, [], function (tx, result) { log("INFO", `insert Quan 1 successfully.`); }, transaction_error);
    query = `insert into district(district_id, district_name) values (2, "Cau Giay")`;
    tx.executeSql(query, [], function (tx, result) { log("INFO", `insert Cau Giay successfully.`); }, transaction_error);
    //insert ward   
    //insert account
    query = `insert into account(username, password, status) values ("wibuchua", "wibu123", 1)`;
    tx.executeSql(query, [], function (tx, result) { log("INFO", `insert wibu successfully.`); }, transaction_error);
    //insert cart



  });


}

function log(type, message) {
  var current_time = new Date();
  console.log(`${current_time} [${type}] ${message}`);
}

function transaction_error(tx, error) {
  log("ERROR", `SQL Error ${error.code}: ${error.message}.`);
}
//end database-------------------------------------------------------------------------------------------------------------------------------------













//login
// var frm_login = document.getElementById("frm-login");
// frm_login.onsubmit = login;

// function login(e) {
//   e.preventDefault();
//getvalues
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;

//   db.executeSql(function (tx) {
//     var query = "select * from account where username = ? and password = ?";

//     tx.executeSql(query, [email, password], function (tx, result) {
//       if (result.row[0]) {
//         alert("login successfully");
//       }
//       else {
//         alert("fuck you");
//       }
//     }, transaction_error);
//   });
// }













//login===============================================================================================================================
//cac tai khoan
//tk1
var email1 = "Quangwibu@gmail.com";
var password1 = "QuangWibuChua";


//tk2
var email2 = "thanhbuliem@gmail.com";
var password2 = "thanhbuliem";

//check tai khoan
function access() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (((email == email1) && (password == password1)) || ((email == email2) && (password == password2))) {
    alert("login successfully");
    var knockknock = document.getElementById("knock-knock");
    knockknock.innerHTML = `<div> <a href="../user/user.html"> <button style="margin-top: 10px;">login now</button> </a> </div>`
    return;
  }
  else {
    alert("vui long nhap dung thong tin va dung bo sot nhe senpai 💖");
    return;
  }
}

//end login=============================================================================================================================











//test
function testt() {
  if (1 == 1) {
    alert("dit me may");
  }
}


//logout===================================================================================================================================
function goodbye() {
  alert("good by senpai");
}
//end logout===============================================================================================================================
// ⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⠋⠀⡠⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⡄⠀⠀⠈⢇⠀⠀⠀⠀⠀⠀    ⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⠸⣿⣿⣿⠂⠁⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠞⠀⢠⠎⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⡄⠀⠀⠈⣆⠀⠀⠀⠀⠀⠀    ⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⡀⡃⠈⠁⠂⠀⣸⠇⠀⠀⠀⠀⠀⠀⠀⠀⢠⠊⠀⠀⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⠀⠀⠀⢙⠀⠀⠀⠀⠀⠀⠀     ⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣷⣾⣔⣘⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⡟⠀⠀⡘⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⣠⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠄⠀⠀⠘⠀⠀⠀⠀⠀⠀       ⢀⡠⡘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠸⠀⠀⠀⠇⠀⠀⠀⠀⠀⠀⢀⠎⠀⣰⣿⢳⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀       ⢳⢱⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⡃⣤⠀⠸⠀⠀⠀⠀⠀⠠⢠⠍⢀⡴⠋⣿⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀       ⢀⢫⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⢀⡇⣹⠀⠀⡀⠀⠀⠀⢀⣢⠋⣰⠋⠀⠀⢻⠘⢿⣀⡀⠀⢆⠀⠀⢰⠀⠀⠀⠀⠀⡇⠇⠀⠀⠀⠀       ⣆⠀⠘⡜⣿⣿⣿⣿⣿⡿⠻⣿⣿⣿⣿⣿⡟⠟⢛
// ⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⣼⠷⡛⡇⠀⠇⠀⣀⠀⡮⣏⠞⠙⠑⠢⢄⣈⣾⠈⢻⣷⡀⠈⡄⠀⠀⠀⠀⠀⡆⣸⣸⡇⠀⠀⠀⠀     ⣿⠀⢀⣿⣿⣿⣿⣿⣿⡇⠀⠁⠙⠋⠉⠙⠁⢿⣿
// ⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⢰⠋⡠⢷⣴⡀⣜⡀⠈⢿⡻⠻⢷⣾⣧⣴⣂⣬⣹⣷⣤⣙⣿⣆⢘⡀⠀⢀⣠⣼⣶⣧⢻⡇⠀    ⢸⠀⢰⣿⣾⡼⡟⠛⡿⡿⢿⠯⠆⢀⣟⣶⣄⣀⠢⣶⣿⣿
// ⣿⣿⣿⣿⣿⡿⠀⠠⠀⠀⠀⠀⢀⡇⠸⠥⢈⣿⣷⣼⣷⠀⢸⠟⣦⡈⠻⣿⣿⠿⠳⢿⡯⠉⠀⠉⠋⠻⣥⢾⣧⣼⢿⣿⡧⣿⡇⣠⣿⢤⣿⣿⢹⠋⠃⢀⣀⣀⣨⡥⣦⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⠿⣿⣿⣿⠇⠠⠇⢠⠃⠀⠀⡾⣷⡈⠾⡁⢰⡟⠻⣿⣿⣾⣦⡀⠉⠙⠒⠀⠈⠁⠀⠀⠀⠀⠀⠀⢰⣏⠿⠿⢿⡿⢟⡾⣹⢵⣿⣿⣿⣿⣿⠏⠾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⢓⣠⣤⣬⣼⠆⡜⠀⡐⠀⢀⠎⣰⣿⣷⣄⠳⢾⣇⠀⠀⡇⠻⣿⡛⠦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⡏⠀⠈⠉⠉⠁⢠⢯⣿⣿⣿⣿⣿⣧⣴⡒⠾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⡝⠀⡐⠀⠠⠏⢠⣿⣿⣿⡻⣷⣀⣿⠀⢸⡇⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠁⠀⠀⠀⠀  ⢠⣷⣿⠏⢻⣿⣿⣿⣿⡿⡧⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⢟⠂⢰⠂⠀⠀⠰⠁⡾⡣⢲⡽⢱⣿⣿⠀⠸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀  ⣾⡟⠁⠀⠀⢻⣿⣏⢀⢥⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣯⠂⢀⠆⠀⠀⡴⠁⣴⠉⡥⠛⢠⣿⣿⣼⠀⢰⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠈⠀⠀⠀  ⢀⣼⢿⠀⠀⠀⠀⠠⣿⣿⠁⠁⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⡃⢀⡎⠀⠀⡜⢁⡜⣡⠖⠀⢀⣽⣿⣿⣿⠀⠘⢿⢳⣄⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣠⣤⠀⠀⠀⣠⣾⠁⢸⡀⠀⠀⠄⠀⠩⣿⡀⢀⣥⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⡟⡜⠀⡜⠀⠀⠊⣠⣎⠜⠁⠀⣨⣿⣿⣿⣿⣿⡆⠀⣾⠀⠹⣷⣄⡀⠀⠀⠀⠉⠈⠉⠩⠭⠄⠀⠀⣠⣾⣿⣿⡆⠸⡇⠀⠀⢤⠀⠀⠈⢷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⡿⡝⠀⡜⠀⠀⢀⠄⠁⠁⠀⠀⢨⣿⣿⣿⣿⣿⣿⣇⠀⢻⣶⣄⡈⢻⣿⣶⣄⡀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⡇⠀⣿⠠⠀⢸⡄⣂⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⠩⠁⣸⠃⢀⡔⠋⠀⢀⣀⠞⢡⣿⣿⣿⣿⣿⣿⣿⣿⡀⢸⣿⣿⣿⣷⣿⣿⣿⣿⣷⣤⣀⣀⣶⣿⣿⣿⣿⣿⣿⣿⣿⡀⢻⡆⢣⠀⢷⡸⣢⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⢁⣼⢎⡔⠈⣠⣾⠁⣼⠏⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢸⣿⡄⢧⠈⡧⠑⣕⣄⠀⠀⠀⠙⢻⣿⣿⣿⣿⣿⣿⡿⢿⡿⠛⠛⠙
// ⣾⢯⠎⣠⣾⣿⢃⢪⠏⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢿⣿⣿⣿⣿⣿⣿⣿⠛⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣮⢢⠹⣆⠘⠻⣷⣄⠀⠀⠀⠙⠻⢿⣿⠛⠀⣀⣀⣤⣦⡆⠀
// ⣻⠇⣴⣿⣿⡧⡼⠻⠀⡌⣿⣿⣿⣿⣿⣿⣟⠿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⢷⣷⣿⣷⣄⠈⠛⠷⣤⡀⠀⠀⠀⠙⠓⠻⢿⣿⣿⣿⣿⣧
// ⡿⣸⠾⡟⠍⠊⠀⡆⠀⢡⣿⣿⣿⣿⣿⣿⣿⡀⠈⠻⢿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⡀⠀⠀⠀⠈⢷⠰⠄⡀⠉⠓⠦⣀⠀⠀⠀⠀⠈⠉⠒⠰⠆
// ⠻⠑⠈⠀⠀⠀⢠⡇⠀⢸⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠈⠹⣟⠿⠿⠿⠟⠁⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠋⠀⠀⠀⠀⢀⠳⣖⠮⠢⣄⠀⠀⠉⡒⠦⠤⣀⡀⠀⠀⠀
// ⠀⠀⠀⠀⠀⢀⣿⣧⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠈⢉⠀⠀⠀⠁⠀⢠⠀⠀⠀⠀⢀⡸⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⢸⠀⠙⣆⠲⣌⠳⣤⡀⠈⠒⠆⡀⠀⠉⠉⠲
// ⠀⠀⠀⠀⢀⣾⣿⣿⣆⢩⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠡⠀⠀⠀⠀⠀⠂⢀⣤⠒⠁⠀⢻⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠀⠀⢸⡷⣌⠳⣌⠙⢦⣀⠀⠀⠑⢤⢀⠀
// ⠀⠀⠀⠀⣾⣿⣿⣿⣿⡦⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣍⠁⠐⠒⠒⢦⣤⠀⠀⠀⠀⠊⠀⠀⠀⠀⠘⣿⣿⣿⣷⣶⣶⣤⣤⣤⣄⣀⠀⠀⠀⠀⣀⠀⠀⠀⣿⣮⣳⢬⡳⣄⡈⠓⣤⡀⠀⢈⡑
// ⠀⠀⠀⠚⠛⠉⠉⠉⠉⠉⠻⣍⠉⠉⠛⠛⠿⢿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⡭⠀⠿⠀⠀⠀⠘⣿⣿⣷⣭⣪⣕⣦⣀⣨⣷⣿⡇
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠦⠀⠀⠀⠀⠀⣠⣽⣿⣿⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣯⣉⢻⣿⡧⢀⢠⠀⠀⠀⠀⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⣤⣖⣀⣀⣉⠟⠃⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣧⣾⣿⣧⡹⠸⠀⠀⠀⠀⡵⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣟
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀⠁⠀⠀⢈⡙⢧⠃⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢿⡁⡄⠀⠀⠀⠣⠃⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿
// ⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠁⠈⠃⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠙⣇⠀⠀⠀⢀⡀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿
// ⠀⠉⠲⣄⠀⠀⠀⠀⠀⠰⣿⣿⣿⣿⣿⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠠⡀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⣀⠀⢸⣷⢄⠀⢸⠅⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿
// ⠀⠀⠀⠀⠑⠤⡀⠀⡛⢛⡺⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠙⣄⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⠃⠀⢿⡷⠸⠛⠀⢷⢁⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀





//admin================================================================================================================================

//nhap du lieu tu admin=================================================================================================================

//product
function adminproduct() {
  var image = document.getElementById("image").value;
  var productname = document.getElementById("productname").value;
  var price = document.getElementById("price").value;
  var categoryid = document.getElementById("categoryid").value;


  console.log(productname, price, categoryid);
  db.transaction(function (tx) {
    var query = "insert into product(Product_name, Price, Category_id, product_img) values (?, ?, ?, ?)"
    tx.executeSql(query, [productname, price, categoryid, image], alert("nhap thanh cong"));
  })
}

//city
function admincity() {
  var cityid = document.getElementById("city-id");
  var cityname = document.getElementById("city-name");
  var cityidd = cityid.value;
  var citynamee = cityname.value;

  console.log(cityidd, citynamee);
  db.transaction(function (tx) {
    var query = "insert into city values (?, ?)"
    tx.executeSql(query, [cityidd, citynamee], alert("nhap thanh cong"));
  })
}
//end nhap du lieu tu admin=================================================================================================================
//xoa du lieu tu admin======================================================================================================================
//product==================
function deleteproduct() {
  var product_id = document.getElementById("productid").value;


  console.log(product_id);
  db.transaction(function (tx) {
    var query = "delete from product where product_id = (?)"
    tx.executeSql(query, [product_id], alert("xoa thanh cong"));
  })
}
//update du lieu============================================================================================================================
function updateproduct() {
  var image = document.getElementById("image").value;
  var productname = document.getElementById("productname").value;
  var price = document.getElementById("price").value;
  var categoryid = document.getElementById("categoryid").value;
  var product_id = document.getElementById("productid").value;

  console.log(productname, price, categoryid);
  db.transaction(function (tx) {
    var query = "update product set Product_name = (?), Price = (?), Category_id = (?), product_img = (?) where product_id = (?)"
    tx.executeSql(query, [productname, price, categoryid, product_id], alert("sua thanh cong"));
  })
}
//end update=================================================================================================================================
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣶⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⡿⢟⣿⠛⢉⣿⣤⣤⣿⣷⣶⣾⣷⣼⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣡⣾⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠛⢙⢛⣛⠻⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⡿⢛⣝⣖⠀⠀⠀⡐⢸⡟⢹⡿⢸⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⠷⣿⣀⡹⠂⠀⠀⠀⠘⠛⠉⠁⢸⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⠀⢀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⠈⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠤⠴⠒⠁⠀⢀⣼⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⡿⢿⣿⣟⣉⣦⣀⡀⠀⠀⠀⠀⠀⣠⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⡟⠁⠀⠈⢿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣿⢿⣯⣍⡿⢷⡦⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠢⡀⠀⠸⡇⠉⢻⣿⣿⣿⣿⣯⣭⣀⣸⣿⣿⣧⡀⠈⢄⠈⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⢠⡏⠀⠀⠀⠀⠀⠈⠢⠀⢳⠀⠀⠙⢿⣿⠫⠙⠛⠛⠛⣿⡿⠿⣇⠀⠸⠆⢈⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠈⡣⢀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠙⠅⠀⠀⢀⣾⣿⠁⢀⡎⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⠀⠈⠐⠠⡀⡀⠀⠀⠀⠂⡄⠀⠀⢈⠶⣤⣤⣭⣥⣤⣾⡇⠑⢴⠆⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⡆⠀⠀⠀⠀⠀⠀⠀⡁⠒⢄⣀⠀⠀⢐⠤⠁⠀⠡⡏⢫⡫⣺⣻⡇⠀⢨⢄⡘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠁⡠⠊⠀⠀⠀⠀⠀⡇⢀⠀⢸⣷⣦⡉⠀⠀⠀⠀⠈⢇⡻⢎⡫⠇⠀⡆⢨⣧⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⡠⠊⠀⠀⠀⠀⠀⠀⠀⠁⠆⢠⣿⣿⣿⣿⣿⣶⣄⡀⠀⠈⢻⣟⣱⠀⠘⢰⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠰⠆⠀⠀⠀⠀⠀⠀⠀⠀⢐⠂⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⢹⣿⠀⣠⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡌⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⢰⡆⠀⠀⠀⠀⠀⠙⠀⡸⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠄⠡⡀⠠⢄⡀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⡄⠀⠈⠂⠠⡈⠳⡄⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⢰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⢰⠀⠀⠀⠀⠈⠐⠨⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠒⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⡆⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠌⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⢡⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⡠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠈⠳⣄⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⠲⠀⢺⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀






//thong bao dang nhap hoac dang ki trc khi add to cart======================================================================================
//thongbao1
function thongbao1() {
  alert("vui long dang nhap hoac dang ki truoc khi them vao gio hang ❤️");
}
//thongbao2
function thongbao2() {
  alert("vui long dang nhap hoac dang ki truoc khi vao gio hang ❤️");

}
//end thong bao dang nhap hoac dang ki trc khi add to cart======================================================================================






















//them vao gio hang========================================================================================================

//them vao database
//sp1
function addsp1() {
  db.transaction(function (tx) {
    var query = "insert into cart(account_id, product_id) values (?, ?)"
    tx.executeSql(query, [1, 1], alert("them thanh cong"));
  })
}
//sp2
function addsp2() {
  db.transaction(function (tx) {
    var query = "insert into cart(account_id, product_id) values (?, ?)"
    tx.executeSql(query, [2, 2], alert("them thanh cong"));
  })
}
//sp3
function addsp3() {
  db.transaction(function (tx) {
    var query = "insert into cart(Account_id, Product_id) values (3,3)"
    tx.executeSql(query, [], alert("them vao gio hang thanh cong"));
  })
}
//sp4
function addsp4() {
  db.transaction(function (tx) {
    var query = "insert into cart(Account_id, Product_id) values (4,4)"
    tx.executeSql(query, [], alert("them vao gio hang thanh cong"));
  })
}
//sp5
function addsp5() {
  db.transaction(function (tx) {
    var query = "insert into cart(Account_id, Product_id) values (5,5)"
    tx.executeSql(query, [], alert("them vao gio hang thanh cong"));
  })
}
//sp6
function addsp6() {
  db.transaction(function (tx) {
    var query = "insert into cart(Account_id, Product_id) values (6,6)"
    tx.executeSql(query, [], alert("them vao gio hang thanh cong"));
  })
}
//sp7
function addsp7() {
  db.transaction(function (tx) {
    var query = "insert into cart(Account_id, Product_id) values (7,7)"
    tx.executeSql(query, [], alert("them vao gio hang thanh cong"));
  })
}
//sp8
function addsp8() {
  db.transaction(function (tx) {
    var query = "insert into cart(Account_id, Product_id) values (8,8)"
    tx.executeSql(query, [], alert("them vao gio hang thanh cong"));
  })
}

//gop them database va giao dien======================================================================================================================
function addspp1() {
  add_list1();
  addsp1();
}
function addspp2() {
  add_list2();
  addsp2();
}
function addspp3() {
  add_list3();
  addsp3();
}
function addspp4() {
  add_list4();
  addsp4();
}
function addspp5() {
  add_list5();
  addsp5();
}
function addspp6() {
  add_list6();
  addsp6();
}
function addspp7() {
  add_list7();
  addsp7();
}
function addspp8() {
  add_list8();
  addsp8();
}
//end them sp vao cart============================================================================================================














//xoa sp tu database=============================================================================================================
function xoadata1() {
  db.transaction(function (tx) {
    var query = "delete from cart where Product_id = 1"
    tx.executeSql(query, [], alert("xoa thanh cong"));
  })
}
function xoadata2() {
  db.transaction(function (tx) {
    var query = "delete from cart where Product_id = 2"
    tx.executeSql(query, [], alert("xoa thanh cong"));
  })
}
function xoadata3() {
  db.transaction(function (tx) {
    var query = "delete from cart where Product_id = 3"
    tx.executeSql(query, [], alert("xoa thanh cong"));
  })
}
function xoadata4() {
  db.transaction(function (tx) {
    var query = "delete from cart where Product_id = 4"
    tx.executeSql(query, [], alert("xoa thanh cong"));
  })
}
function xoadata5() {
  db.transaction(function (tx) {
    var query = "delete from cart where Product_id = 5"
    tx.executeSql(query, [], alert("xoa thanh cong"));
  })
}
function xoadata6() {
  db.transaction(function (tx) {
    var query = "delete from cart where Product_id = 6"
    tx.executeSql(query, [], alert("xoa thanh cong"));
  })
}
function xoadata7() {
  db.transaction(function (tx) {
    var query = "delete from cart where Product_id = 7"
    tx.executeSql(query, [], alert("xoa thanh cong"));
  })
}
function xoadata8() {
  db.transaction(function (tx) {
    var query = "delete from cart where Product_id = 8"
    tx.executeSql(query, [], alert("xoa thanh cong"));
  })
}
//end xoa sp tu database=============================================================================================================













//show tu table gio hang============================================================================================================
// function getproduct() {
//   var cart = document.getElementById("cart");
//   db.transaction(function (tx) {
//     var query = "select * from product where product_id in (select product_id from cart)"
//     tx.executeSql(query, [], console.log("add thanh cong"));
//     showproduct();
//   })
// }


// function showproduct() {
//   var list = document.getElementById("list");

//   list.innerHTML += `<div style="width: 100%; background-color: #f0f8ff; font-size: 20px; " id='list-${number}'>
//                         <img width="100" style=" float: left; margin-left: 15px;"
//                         src="https://ae01.alicdn.com/kf/HTB1NV22DeuSBuNjSsplq6ze8pXaE/NEW-25cm-PVC-Japanese-anime-figure-Aquamarine-Fate-Saber-Okita-Souji-ver-action-figure-collectible-model.jpg" alt="">
//                         <p style=" float: left; margin-left: 30px;">${product.product_name}</p>
//                         <p style=" float: left; margin-left: 130px;">14/12/2020</p>
//                         <p style=" float: left; margin-left: 120px;">${product.price}</p>
//                        <button style="margin-top: 20px" id=${number} onclick='del_item(this.id)' class='btn btn-danger btn-sm fs-6'>
//                          Del
//                        </button>
//                        <br><br><br><br><br>
//                      </div>`;
//   ++number;
// }









//test
// db.transaction(
//   function (tx) {
//     for (var pro of product) {
//     var a = ${product.productname };
//     alert(a);
//   }}
// )

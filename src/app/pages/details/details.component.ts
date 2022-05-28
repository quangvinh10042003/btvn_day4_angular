import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product = [
    { id: 1, name: "Yasuo", price: 0, img:"https://store-images.s-microsoft.com/image/apps.28411.13510798887593857.411c7070-8254-4bc7-9822-93212e9b3eaa.d5650289-0ad1-4560-ac30-38a18a1847bb"},
    { id: 2, name: "Zed", price: 0, img:"https://genk.mediacdn.vn/2018/12/11/zed-2-15445178967252125834779.jpg"},
    { id: 3, name: "Kai'sa", price: 0, img:"https://muathe24h.vn/pictures/images/cach-choi-kaisa-giua-game.jpg"},
    { id: 4, name: "Harry Maguire", price: 0, img:"https://baoquocte.vn/stores/news_dataimages/quangdao/102021/30/11/amp_img/harry-maguire-mu-dang-o-thoi-diem-toi-te-nhat-nhung-se-quyet-tam-gianh-chien-thang-truoc-tottenham.jpg"},
    { id: 5, name: "Fo-lon-ti-lô", price: 0, img:"https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/4/4/jpg0339-16490513643551296959475.jpg"},
  ];
  constructor() { }

  ngOnInit(): void {
    
  }

}

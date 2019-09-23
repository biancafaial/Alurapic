import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {

      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFGTAPQz06cjfNxnhYVK9rpLb74AW17RYNGdUlV04UN7ONvsykdw",
      desription: "Logo Cielo"
    },
     {
      url: "https://static.vecteezy.com/system/resources/previews/000/242/482/non_2x/female-developer-vector.jpg",
      description: "Cielo "
    }


  ];

}


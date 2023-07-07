let products = {
  data : [
      {
          title: "title : THE DHONI TOUCH",
          author: "author : Bharat Sundaresan",
          subject: "Cricket",
          date: "2017-10-23",
          image: "dhoni.jpg" ,
      },
      {
          title: "title : WEB TECHNOLOGY",
          author: "author : Archana kumar",
          subject: "IT",
          date:  "2022-07-28",
          image: "web tech.jpg" ,
      },
      {
          title: "title : Computer networks and security",
          author: "author : Quinn Kiser",
          subject: "CSE",
          date:  "2022-03-20",
          image: "cns.jpg" ,
      },
      {
          title: "title : Inner Peace",
          author: "author : Andy Locraix",
          subject: "Novel",
          date:  "2022-11-10",
          image: "ip.jpg" ,
      },
    
      {
        title: "title : SURESH RAINA:BELIEVE",
        author: "author : Bharat Sundaresan",
        subject: "Cricket",
        date:  "2018-12-20",
        image: "raina.jpg" ,
      },
      {
          title: "title : Harry Potter",
          author: "author : J.K. Rowling",
          subject: "Fantasy",
          date:  "1999-12-20",
          image: "hp.jpg" ,
      },
      {
          title: "title : Operating System",
          author: "author : Vipin Jain",
          subject: "IT",
          date:  "2021-07-07",
          image: "os.jpg" ,
      },
      {
          title: "title : YOU ARE THE BEST WIFE",
          author: "author : Ajay k pandey",
          subject: "Novel",
          date:  "2006-12-22",
          image: "you.jpg" ,
      },
      {
          title: "title : East to West",
          author: "author : Lolita London",
          subject: "Novel",
          date:  "2002-02-02",
          image: "east.jpg" ,
      },
      {
          title: "title : SACHIN:A BILLION DREAMS",
          author: "author : James Erskine Sivakumar Ananth",
          subject: "Cricket",
          date:  "2022-12-20",
          image: "sachin.jpg" ,
      },
      {
          title: "title : UNIX Networking programming",
          author: "author : Jerry peek",
          subject: "IT",
          date: "2022-08-08",
          image: "unix.jpg" ,
      },
  ],
};

for(let i of products.data){
  let card = document.createElement("div");
  card.classList.add("card",i.subject,"hide");

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  let image = document.createElement("img");
  image.setAttribute("src",i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  let container = document.createElement("div");
  container.classList.add("container");

  let title = document.createElement("h5");
  title.classList.add("title");
  title.innerText = i.title.toUpperCase();
  container.appendChild(title);

  let author = document.createElement("h6");
  author.classList.add("author");
  author.innerText = i.author.toUpperCase();
  container.appendChild(author);

  let sub = document.createElement("h6");
  sub.classList.add("sub");
  sub.innerText = i.subject.toUpperCase();
  container.appendChild(sub);

  let date = document.createElement("h6");
  date.classList.add("date");
  date.innerText = i.date.toUpperCase();
  container.appendChild(date);

  card.appendChild(container);
  document.getElementById("Books").appendChild(card);
}

function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  let elements = document.querySelectorAll(".card");
  elements.forEach((element) =>{
      if(value == "all"){
          element.classList.remove("hide");
      }else{
          if(element.classList.contains(value)){
              element.classList.remove("hide");
          }
          else{
              element.classList.add("hide");
          }
      }
  });
}

document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".title");
  let cards = document.querySelectorAll(".card");
  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});




window.onload = () => {
  filterProduct("all");
};
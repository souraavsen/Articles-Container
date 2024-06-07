import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PostService {
  getPosts() {
    const allPosts = [
      {
        title: "Best Practices for Angular Developers in 2024",
        des: "This blog outlines essential best practices for Angular developers, covering topics like TypeScript, RxJS, dependency injection, and code linting to help create maintainable and efficient applications.",
        link: "https://developer.mescius.com/angular-best-practices-2024",
        img: "https://aglowiditsolutions.com/wp-content/uploads/2019/07/Angular-Best-Practices.png",
      },
      {
        title: "Angular Best Practices: Flexible and Reliable Libraries",
        des: "This blog discusses crucial Angular best practices, including file organization, the use of Angular CLI, and lazy loading, aimed at optimizing Angular projects for performance and maintainability.",
        link: "https://www.bigscal.com/angular-best-practices",
        img: "https://aglowiditsolutions.com/wp-content/uploads/2019/07/Angular-Best-Practices.png",
      },
      {
        title: "20 Crucial Practices to Adopt in 2024",
        des: "A comprehensive guide on the 20 most important practices for Angular development in 2024, focusing on optimizing project structure, avoiding memory leaks, and improving performance through best practices.",
        link: "https://www.esparkinfo.com/angular-best-practices-2024",
        img: "https://aglowiditsolutions.com/wp-content/uploads/2019/07/Angular-Best-Practices.png",
      },
      {
        title: "Top 15+ Angular Project Ideas of 2024",
        des: "This blog provides a list of over 15 innovative Angular project ideas complete with source code, aimed at helping developers practice and enhance their Angular skills.",
        link: "https://www.knowledgehut.com/angular-project-ideas-2024",
        img: "https://aglowiditsolutions.com/wp-content/uploads/2019/07/Angular-Best-Practices.png",
      },
      {
        title: "Best Practices for Angular Project Structure",
        des: "A detailed blog on the best practices for organizing Angular projects, including tips on naming conventions, folder structures, and maintaining clean, manageable code.",
        link: "https://www.esparkinfo.com/angular-project-structure-2024",
        img: "https://aglowiditsolutions.com/wp-content/uploads/2019/07/Angular-Best-Practices.png",
      },
    ];

    return allPosts;
  }

 
}

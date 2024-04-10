export class Article {
    id?: number; // El signo de interrogación indica que el campo es opcional, útil para las creaciones donde el ID aún no existe
    title: string;
    abstract: string; 
    content: string;
  
    constructor(title: string, abstract: string, content: string, id?: number) {
      this.title = title;
      this.abstract = abstract;
      this.content = content;
      this.id = id;
    }
  }
  
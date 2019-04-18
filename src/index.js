class SwapiService {
  _apiBase = 'https://swapi.co/api';
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Ошибка fetch ${url}, статус ${res.status}`);
    };    
    return await res.json(); 
  };
  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results;
  };
  getPerson(id) {
    return this.getResource(`/people/${id}`);
  };
  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results;
  };
  getPlanet(id) {
    return this.getResource(`/planets/${id}`);
  };
  async getAllStarships() {
    const res = await this.getResource(`/starchips/`);
    return res.results;
  };
  getStarship(id) {
    return this.getResource(`/starchips/${id}`);
  };
}

const swapi = new SwapiService();
swapi.getAllPeople().then((people) => {
  people.forEach(p => {
    console.log(p.name);
  });
});

///getResource('https://swapi.co/api/people/16568341/')

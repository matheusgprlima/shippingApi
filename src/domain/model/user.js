class User {

   constructor( name = null,age = null, email = null, cpf = null, address = null ) {
        
      this.name = name;
      this.age = age;
      this.email = email;
      this.cpf = cpf;
      this.address = address;
   }

    getUserValues() {
       return {...this};
   }

}
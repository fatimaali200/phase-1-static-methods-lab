class Formatter {

  static capitalize(str){
    str=str.charAt(0).toUpperCase()+str.slice(1);
    return str;
  }

  static sanitize(str){
    str = str.replace(/[^\w\s'-]/gi, '');
    return str;
  }

 
}
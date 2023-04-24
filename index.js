class Formatter {

  static capitalize(str){
    str=str.charAt(0).toUpperCase()+str.slice(1);
    return str;
  }

  static sanitize(str){
    str = str.replace(/[^\w\s'-]/gi, '');
    return str;
  }

  static titleize(str){
    const exceptLitter=['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const arr= str.split(/\s+/)
      for(let i=0 ; i< arr.length ;i++){
        if(!exceptLitter.includes(arr[i])){
          arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
        }
        arr[0]=arr[0].charAt(0).toUpperCase()+arr[0].slice(1);
       }
     return arr.join(' ');
   }
 
}
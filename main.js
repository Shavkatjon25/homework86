//1-savol



function findFirstRepeated(gifts) {
    let arr=[];
    let x=1;
    for(let a=0;a<gifts.length; a++){
          for(let i=0 ; i < gifts.length ; i++){
              if(gifts[a]==gifts[i] && a!=i){
                arr.push(a<i ? i:a);
              }
          }
    }
    if(arr.length==0){
      x=-1;
    }else{
        x=arr[0];
        for(let i=0 ; i < arr.length ; i++){
            if(x>arr[i]){
              x=arr[i];
            }
        }
        x=gifts[x];
    }
    console.log(x);
    return x
   
  }



//------------------------------
//2-savol

function manufacture(gifts, materials) {
    let arr=[];
      for(let i=0 ; i < gifts.length ; i++){
        let mavjud=true;
        let mas=gifts[i].split('');
        console.log(mas);
          for(let k=0 ; k < mas.length ; k++){
              if(!(materials.includes(mas[k]))){
                console.log(mas[k]);
                mavjud=false
              }
          }
        if(mavjud){
          arr.push(gifts[i])
        }
    }
    console.log(arr);
    return arr
  }



//----------------------
//3-savol

function findNaughtyStep(original, modified) {
    let ortiqcha='';
    let a=''
    if (original.length > modified.length) {
        let arr=original.split('');
       
        for(let i=0 ; i < arr.length ; i++){
            a=a+arr[i]
          if(!modified.includes(a)){
              ortiqcha=arr[i];
              break;
          }
       }
    }else{
        let mas=modified.split('');
        console.log(mas);
        for(let i=0 ; i < mas.length ; i++){
            a=a+mas[i]
            console.log(a);
          if(!original.includes(a)){
              ortiqcha=mas[i];
              break;
          }
       }
    }

    console.log(ortiqcha);
    return ortiqcha
  }

//-------------------
//4-savol


function decode(message) {
    let yangizozuv=''
    let qavsOch=[];
    let qavsYop=[];
    let arr=message.split('')
    for (let index = 0; index < arr.length; index++) {
        if(arr[index]=='(') qavsOch.push(index);
        if(arr[index]==')') qavsYop.push(index);
        
    }
    qavsOch.reverse
    if (qavsOch.length==2) {
        if (qavsOch[1]>qavsYop[0]) {
            let mas1=message.slice(qavsOch[0]+1, qavsYop[0]).split('').reverse().join('');
            let mas2=message.slice(qavsOch[1]+1, qavsYop[1]).split('').reverse().join('');
            console.log(message.slice(qavsYop[0], qavsOch[0]));
            yangizozuv=message.slice(0, qavsOch[0])+mas1+message.slice(qavsYop[0]+1, qavsOch[1])+mas2+message.slice(qavsYop[1]+1)
        }else{
            let mas1=message.slice(qavsOch[1]+1, qavsYop[0]).split('').reverse().join('');
            message=message.slice(0, qavsOch[1])+mas1+message.slice(qavsYop[0]+1)
            
            let mas2=message.slice(qavsOch[0]+1, qavsYop[1]-2).split('').reverse().join('');
            yangizozuv=message.slice(0, qavsOch[0])+mas2+message.slice(qavsYop[1]-1)
        }
    }else{
        let mas1=message.slice(qavsOch[0]+1, qavsYop[0]).split('').reverse().join('');
        yangizozuv=message.slice(0, qavsOch[0])+mas1+message.slice(qavsYop[0]+1)
    }
    console.log(yangizozuv);
    return yangizozuv
  }



//----------------
//5-savol
function cyberReindeer(road, time) {
    let mas=[]
    let tosq=0;
    let harakat=0
    let index=[];
    let mass=road.split('');
  
    for(let k=0; k < mass.length; k++){
      if(mass[k]=='|'){
        index.push(k);
        
      }
    }
  console.log(index);
    for(let a=0; a< time; a++){
      let arr=road.split('');
      tosq++;

      if(tosq>5){
        harakat++
        for(let t=0; t<index.length; t++){
          arr[index[t]]='*'
          
        }
      }
      arr[0]='.'
      arr[harakat]='S'
      arr=arr.join('')
      mas.push(arr)
      if(harakat<index[0]-1){
        harakat++
      }
    }
    console.log(mas);
    return mas
  }


 // ------------
 // 6-savol

  function maxDistance(movements) {
    let ong=0;
    let chap=0;
    let togri=0;
    let arr=movements.split('');
    for(let i=0; i<arr.length; i++){
      if(arr[i]=='<'){
        ong++;
        continue;
      }else{
        if(arr[i]=='>'){
        chap++;
        continue;
        }
      }
      togri++
    }
  
    return Math.abs(ong-chap)+togri
  }


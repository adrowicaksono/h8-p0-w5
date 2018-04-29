function meleeRangedGrouping (str) {
  if(str.length===0){
    return [];
  }
  var ranger = str.split(',');
  var gruping =[[],[]];
  console.log(ranger[0].split('-')[1]);
  
  for(a=0; a<=ranger.length-1; a++){
   if(ranger[a].split('-')[1]==='Ranged'){
     gruping[0].push(ranger[a].split('-')[0]);
   }else {gruping[1].push(ranger[a].split('-')[0])}
  }
  return gruping;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []


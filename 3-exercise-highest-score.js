//SET var object EQUALS {}
//FOR var a = 0 until students.length
//  IF students[a][score]>= 75
//  THEN 
//  IF object[students[a][class] EQUALS undefined
//  THEN object[students[a][class]] = {name : students[a][name], score : students[a][score] }
//END IF 

unction highestScore(students) {
  
  var object = {};
  
  for(var a = 0; a<=students.length-1; a++){
    if(students[a].score>=75){
      if(object[students[a].class]===undefined){
        object[students[a].class]= {name : students[a].name, score : students[a].score};
      }else if(students[a].score>object[students[a].class].score){
        object[students[a].class]= {name : students[a].name, score : students[a].score};
      }
    }
  }
  return object;
}
  


// TEST CASE
console.log(
	highestScore([
		{
			name: 'Dimitri',
			score: 90,
			class: 'foxes',
		},
		{
			name: 'Alexei',
			score: 85,
			class: 'wolves',
		},
		{
			name: 'Sergei',
			score: 74,
			class: 'foxes',
		},
		{
			name: 'Anastasia',
			score: 73,
			class: 'wolves',
		},
	])
);

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(
	highestScore([
		{
			name: 'Alexander',
			score: 100,
			class: 'foxes',
		},
		{
			name: 'Alisa',
			score: 76,
			class: 'wolves',
		},
		{
			name: 'Vladimir',
			score: 92,
			class: 'foxes',
		},
		{
			name: 'Albert',
			score: 71,
			class: 'wolves',
		},
		{
			name: 'Viktor',
			score: 80,
			class: 'tigers',
		},
	])
);

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }

console.log(highestScore([])); //{}




  



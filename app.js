
/**
 * Array ( Data Structure )
 */

// let  foods = ['Alo', 'potol', 'lao', 'kumra', 'begun', 'kopi' ];
// let  flowrs = ['Golap', 'joba', 'juii', 'chamili', 'shapla', 'beli' ];
// let  rivers = ['podda', 'megna', 'jumona', 'churma', 'kotakkho', 'titas' ];
// let  fish = ['ilisha', 'katol', 'chitol', 'poti', 'rui', 'koie' ];

// console.log(`I love ${foods[3]}, you love ${flowrs[4]} That seat going ${rivers[5]}, caching ${fish[2]}, mass  `); 


// let month = ['January', 'Fevruary','March','April','may','june', 'Julay','Agust','Septambor','Octebor','novembor', 'Decembor'];


/**
 *1. Create an array by using Array Constructor 
new Array(item1, item2, . . . )
 */
// let month = new Array('January', 'Fevruary','March','April','may','june', 'Julay','Agust','Septambor','Octebor','novembor', 'Decembor');
// console.log(month);


// console.log(`
//  my name Is Mujahid & my birth month is ${month[5] }
// `);

/**
 * 1. forEach
 */
// month.forEach(element => {
     
// });( (name, index) => {
    
//     console.log(`${index + 1}---  ${name}`);
// });

/**
 * 1. map
 */
// month.map( (name, index) => {
    
//     console.log(`${index + 1}---  ${name}`);
// });

/**
 * 1.all mant map
 */
// month.map( (item, index) => {
    
//     if (item) {
//         console.log(`This is my Birght mont  ${item}`);
//     }

// });

/**
 * 1.spasipic mant map
 */
// month.map( (item, index) => {
    
//     if (item == 'may') {
//         console.log(`This is my Birght mont  ${item}`);
//     }

// });

/**
 * 1.spasipic 1- item cancel mant map
 */
// month.map( (item, index) => {
    
//     if (item !== 'may') {
//         console.log(`This is my Birght mont  ${item} ${index + 1}`);
//     }

// });


/**
 * 1.for loep data amaount= er vitore kotogula datase +kore dekhabe.
 * 2. Get array length
 * 3. Get all array value by for loop
 * Get all array data by forEach & Map ( iteration )
 */

// console.log(month.length);
// for (let i = 0; i < month.length; i++){
//     console.log(month[i]);
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
    
// }


   /**
    * concat nation & spred oparetor er bebohar.
    */

//    let foods = ['alo','potol','lao','kumra','beguhn','sim','kopi']
//    let flowers = ['dotra', 'shimul', 'sun flower', 'daliya', 'joba', 'golap']
//    let fish = ['roui', 'katol', 'chitol', 'poti', 'koi', 'pangash', 'telapi']




// let all_arr = foods.concat(flowers);
// let all_arr = [...foods, ...fish, ...flowers]
// let info = 'My name is mujahid , I love js , I like to programing'
//streing typer data.
// let all_arr = foods.join(' - ')

// let all_arr = info.split(',');

// console.log(all_arr);


  /**
    * concat nation & spred oparetor er bebohar.
    */
   
  /**
    * kono lekha agge and pore dite hoyle tokhon ai sestem bebohar korte hobe.
    */
// let  food = ['alo', 'potol','lao','begun','tometo','kumra'];


// food.push('golap');
// food.unshift('golap');
//  food.shift();
//  food.pop('golap');


  

//  console.log(food);

/**
 *  -> slice
 *  -> splice  
 */
//  let  foods1 = ['alo', 'potol','lao','begun','tometo','kumra'];
 
//  let foods2 = foods1.slice(2, 4);
//  let foods2 = [...foods1.slice(0, 1), ...foods1.slice(5)];
//  let foods2 = [...foods1.splice(2, 2)];


//  console.log(foods1);
//  console.log(foods2);
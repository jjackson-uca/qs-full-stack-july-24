// function countBs(s) {
//   var count = 0;
//   for (var i = 0; i < s.length; i += 1) {
//     if (s.charAt(i) === "B") count += 1;
//   }
//   return count;
// }

// function countChar(s, c) {
//   var count = 0;
//   for (var i = 0; i < s.length; i += 1) {
//     if (s.charAt(i) === c) count += 1;
//   }
//   return count;
// }

// function countChars(s, notCaseSensitive, noWhiteSpace) {
//   let charCounts = [];
//   if (notCaseSensitive) s = s.toLowerCase();
//   for (var i = 0; i < s.length; i++) {
//     let cCIndex = charCounts.findIndex((val) => {
//       return val.char === s[i];
//     });
//     if (cCIndex > -1) {
//       charCounts[cCIndex].freq++;
//       continue;
//     }
//     if (noWhiteSpace && s[i].trim().length == 0) {
//       continue;
//     }
//     charCounts.push({
//       char: s[i],
//       freq: 1,
//     });
//   }
//   return charCounts;
// }

// console.log(countBs("BBC"));
// // → 2
// console.log(countChar("kakkerlak", "k"));
// // → 4

// let a = [
//   { char: "k", freq: 4 },
//   { char: "a", freq: 2 },
//   { char: "e", freq: 1 },
//   { char: "r", freq: 1 },
//   { char: "l", freq: 1 },
// ];

// const big = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue accumsan venenatis. Quisque ut diam libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sit amet ultrices nisl, in viverra sapien. Fusce at sagittis nunc. Nunc sed ultrices enim, sit amet suscipit lorem. Aenean nec ipsum sem.

// Nullam condimentum lacus in nibh lacinia rutrum. Curabitur tempus purus elit, id laoreet lacus faucibus a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ac egestas sem. Pellentesque condimentum vel lacus ac bibendum. Sed et orci eleifend, dapibus urna vitae, posuere dolor. Vivamus id vestibulum diam, ut tincidunt arcu. Nam velit ante, viverra eu gravida a, ultrices at ipsum. Cras consequat, turpis sed tincidunt pellentesque, lorem tortor rutrum est, sed efficitur eros justo at sem. Morbi tincidunt, nisl sit amet cursus euismod, risus velit ultricies tortor, quis eleifend elit ex nec metus. Nunc tincidunt sed tellus a cursus. Nam quis sapien et lorem ullamcorper consequat eget semper neque.

// Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin hendrerit massa rutrum, accumsan magna a, consequat lorem. Nam justo odio, malesuada vel ex eget, rutrum semper lectus. Maecenas libero eros, consequat a facilisis in, facilisis consequat sem. Suspendisse vulputate nec dui non lacinia. Curabitur maximus tempus auctor. Nulla vehicula accumsan dapibus. Mauris a nulla est. Donec rhoncus malesuada nisl. Maecenas mattis, lacus vel tincidunt congue, justo lorem blandit ipsum, et ultrices diam nulla quis est.

// In hendrerit finibus dignissim. Nunc sem velit, commodo ut lectus eu, facilisis congue urna. Suspendisse elementum ex ac enim porttitor molestie ac eget est. Pellentesque eget nisi eros. Morbi commodo purus at tellus eleifend sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec quam lorem, suscipit sit amet ipsum id, gravida dictum lacus. Vivamus in accumsan metus. Nam vel elit sollicitudin, fermentum tellus vel, cursus turpis. Aenean aliquam sollicitudin nulla a tincidunt. Vivamus leo nunc, semper ac leo et, scelerisque imperdiet enim. Fusce vitae lobortis sapien, nec interdum urna. Aliquam erat volutpat. Duis sit amet efficitur sem. Proin et quam eros. Integer id nisi ipsum.

// Nullam iaculis orci eget sem consectetur vehicula. Phasellus vestibulum erat felis, sed efficitur ligula posuere eu. Nullam porttitor vehicula risus, sed maximus odio semper at. Nam pretium congue ex, eget lobortis augue porta vulputate. Praesent congue mollis nisi, nec rhoncus sapien. Duis sollicitudin iaculis iaculis. Nullam dignissim molestie nunc eget iaculis. Nulla nibh est, finibus ac convallis vel, lobortis auctor justo. Donec non est sed arcu auctor semper in in mauris. Nam sollicitudin tellus neque, quis interdum tortor pretium id. Proin placerat finibus blandit. Suspendisse in venenatis eros. Ut euismod enim ac sollicitudin gravida. Aenean imperdiet imperdiet turpis, eget interdum tellus. Ut malesuada lorem at elit interdum accumsan.

// Mauris tincidunt nisi non porta imperdiet. Nullam semper varius est, ut rhoncus dui malesuada sed. Quisque accumsan, nulla pulvinar porttitor efficitur, erat ex pharetra nisl, at congue arcu tellus a orci. Mauris non volutpat felis. Aenean molestie enim tristique nisi placerat, id commodo orci dictum. Nulla condimentum, mi sed malesuada sodales, ligula mi congue risus, quis scelerisque enim magna at mauris. Aliquam venenatis tempus malesuada. Nunc dignissim est at lacus vulputate gravida. Pellentesque nisi nisi, finibus nec nisi at, semper consectetur magna. Donec at sapien augue. Proin eu enim tellus. Ut eget ullamcorper ipsum.

// Aenean porttitor, dui eu posuere lacinia, diam augue malesuada odio, vitae commodo enim diam et libero. Praesent aliquam risus dolor, quis gravida dui ornare sit amet. Donec consectetur sapien et dignissim viverra. Nunc risus lectus, rutrum mollis condimentum vulputate, varius ut mi. Maecenas faucibus interdum enim, nec rutrum nulla fringilla ac. Mauris pellentesque eget dolor et volutpat. Fusce facilisis risus id neque interdum dictum. Nullam semper tellus nec ullamcorper elementum. Mauris placerat pretium tortor, quis aliquet urna efficitur sit amet. Fusce tortor diam, suscipit feugiat mauris vitae, luctus iaculis lorem. Quisque at ex venenatis, lacinia felis in, egestas justo. Vestibulum luctus a leo sed dictum.

// Donec suscipit ipsum eu metus ullamcorper sodales. Sed id leo nec ante iaculis lacinia in in est. Praesent tristique urna eget nulla tincidunt laoreet. Mauris aliquet lacus ac tristique vulputate. Sed interdum, urna eu eleifend euismod, risus libero volutpat nibh, at aliquam ipsum odio id ante. Nam sed tempus ligula. Maecenas nec leo sit amet est eleifend congue. Integer iaculis viverra ex, ullamcorper lacinia turpis interdum ac. Vivamus lobortis erat sed massa suscipit pellentesque. Morbi accumsan sed metus sed maximus. Curabitur congue vel risus eu condimentum. Nulla interdum nisi dui, ac dapibus leo varius quis.

// Suspendisse venenatis auctor ante, quis ultricies ipsum ornare eu. Duis commodo, eros vel interdum tincidunt, ex nunc ultricies mauris, sit amet posuere dolor orci sed neque. Ut vestibulum aliquam urna vel hendrerit. Nam a dui a mauris varius convallis. Duis erat magna, mollis ut nulla eu, condimentum maximus augue. Suspendisse sem tortor, tincidunt laoreet mi tempor, ultrices rhoncus eros. Mauris at justo eget nisl posuere venenatis. Quisque vel ligula varius, interdum sem nec, facilisis est. Praesent ultricies, leo varius malesuada condimentum, sem dolor luctus enim, ac tincidunt sem lacus et lorem. Mauris sit amet eros in orci convallis pellentesque. Maecenas sed lectus id velit pulvinar sodales non accumsan enim. Sed dignissim, velit ultrices posuere lacinia, urna nulla porttitor erat, ut blandit ante purus ut dui.

// Fusce urna mauris, maximus mollis neque tempor, pretium aliquet eros. Duis venenatis, tortor ac auctor aliquet, enim tortor porta quam, auctor finibus libero urna at arcu. Morbi orci nulla, semper sit amet tempor id, dapibus non lorem. Vivamus tincidunt vulputate dignissim. Quisque blandit feugiat tempor. Nam at dapibus nisl. Suspendisse est eros, faucibus at tempor sed, convallis sit amet ex. In nulla lectus, sodales vitae dui nec, suscipit pulvinar lacus. Mauris vel pellentesque dui. Cras sed nisl quis neque consequat tristique id ut urna. Pellentesque rhoncus et libero a gravida. Ut fermentum magna at tellus sagittis fringilla. Maecenas quis pretium eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

// Suspendisse et turpis congue, eleifend felis eu, aliquam diam. Pellentesque tincidunt varius sapien at dictum. Donec dapibus urna et feugiat mollis. Maecenas vitae enim luctus, dapibus leo sed, eleifend est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In rhoncus efficitur mauris, at pharetra lorem pulvinar vel. Maecenas feugiat turpis ut justo mattis, eget accumsan tortor sollicitudin. Fusce finibus euismod iaculis. Etiam id interdum tellus. Nullam elementum massa venenatis, suscipit ante ut, hendrerit ligula.

// Aenean vehicula ipsum a felis suscipit cursus. Sed ac velit porta, egestas mauris ut, eleifend leo. Maecenas efficitur vehicula blandit. Vestibulum augue erat, porttitor nec erat id, suscipit mattis quam. Nam auctor orci nunc, sit amet tincidunt purus vulputate quis. Praesent enim lorem, rutrum sit amet nisi ut, blandit mollis ipsum. Pellentesque at porttitor lacus. Aenean iaculis turpis id mi feugiat, sed mollis elit pellentesque. Vivamus et nunc purus.

// Sed eget tortor libero. In aliquam vitae purus nec tincidunt. Sed ac sollicitudin tortor. Nunc sit amet nulla luctus, porta purus eget, condimentum odio. Aenean auctor euismod augue a consequat. Nullam luctus diam ac condimentum malesuada. Praesent porttitor blandit arcu, ut euismod odio mattis vitae. Pellentesque dignissim turpis diam. Vivamus sagittis blandit diam, quis mattis urna ornare in. In condimentum posuere lacus, nec iaculis tortor finibus at. Morbi molestie, diam tempor cursus bibendum, ligula enim blandit purus, non vestibulum magna leo sit amet leo. Aenean id pretium turpis. Aenean eros risus, egestas vel elit semper, euismod vulputate ante. Maecenas fringilla rhoncus elit in mollis. Duis id elit elementum, malesuada leo id, luctus felis. Pellentesque sodales, ex vitae aliquet facilisis, nisl neque placerat libero, non finibus risus neque a ex.

// Morbi at justo feugiat, dapibus ligula ut, aliquam justo. Ut sed eros et augue mattis imperdiet vel quis sem. Suspendisse dapibus iaculis lectus vel faucibus. Sed dignissim ut odio a rhoncus. Sed ipsum velit, dignissim nec dolor scelerisque, ultrices finibus leo. Etiam a volutpat neque, nec finibus orci. Donec nec euismod ante. Sed sed suscipit sapien. Ut in enim justo. Etiam nunc leo, consectetur quis consequat eu, congue vitae justo. Maecenas porttitor tortor ipsum, id vulputate mi maximus vitae. Sed sollicitudin venenatis nisi id eleifend. Suspendisse vel augue in tortor laoreet porta in non est. Integer dolor diam, porta tincidunt cursus ac, feugiat non felis. Nunc eros ipsum, sodales id fermentum eu, elementum in odio. Suspendisse cursus dolor sit amet leo dictum lobortis.

// Curabitur sed condimentum nisi, at viverra metus. Mauris rhoncus est ut enim molestie, a sollicitudin nunc tempus. In eu turpis quis lectus cursus placerat vitae vitae eros. Aliquam interdum enim est, eget tincidunt metus fermentum et. Etiam lacinia magna sit amet rutrum suscipit. Quisque aliquet facilisis lobortis. Aliquam erat volutpat. Aenean feugiat diam est, sed ornare metus porttitor et. Sed vitae rutrum risus. Nam eget rhoncus nisi. Sed eget mollis lectus. Ut tristique tellus vel risus porta, in sollicitudin sapien ullamcorper.

// Nulla varius tempor metus at cursus. Donec auctor mi eget cursus porta. Integer et magna cursus, interdum urna quis, scelerisque massa. Proin sem quam, pharetra in est nec, elementum lobortis lacus. Morbi urna lorem, cursus quis rutrum sed, ornare non libero. Nullam a elementum erat. Proin id nulla elit. Donec pretium metus in elit semper, ac commodo dolor iaculis. Mauris consequat vel ipsum sed scelerisque. Vestibulum malesuada, tortor nec condimentum tempor, massa arcu efficitur felis, non dictum augue mauris ut neque. Vivamus a dictum nisl. Etiam porta turpis felis, eget varius eros consectetur eget. In venenatis ex urna, id placerat arcu aliquam vel. Donec turpis diam, tempus vitae accumsan nec, imperdiet et ligula. Pellentesque sit amet metus eget felis faucibus lobortis. Morbi tortor nunc, blandit ornare arcu ut, semper mattis elit.

// Phasellus aliquam, orci sed eleifend pellentesque, elit nulla faucibus ipsum, et rutrum urna enim et dolor. Nullam lobortis fermentum aliquam. Donec ornare pharetra bibendum. Aliquam consectetur euismod lectus, ac consequat nisi consectetur nec. Donec bibendum dolor at iaculis aliquet. Curabitur eu tincidunt sem. Integer lacinia nulla pulvinar est blandit efficitur. In convallis augue ac sollicitudin aliquet.

// Nullam sed ex quis nunc convallis sodales in quis purus. Maecenas non semper eros. Etiam gravida nunc ex, et pharetra ex vestibulum id. Integer mauris dolor, semper vitae tortor in, porta molestie diam. Vestibulum feugiat ut orci eget auctor. Suspendisse placerat ipsum id purus suscipit, eu maximus odio porttitor. Mauris ut lorem et nulla faucibus mattis ut a ipsum. Mauris consequat vitae neque efficitur pulvinar. Phasellus nec commodo nulla. Aliquam laoreet, diam vitae sollicitudin convallis, lorem nulla pulvinar tellus, vel hendrerit sem quam vitae nunc. Nullam a mi tristique, elementum dolor ut, viverra orci. Ut tellus nisl, consectetur eu erat vitae, volutpat mollis lectus. Ut in ornare libero. Fusce consectetur imperdiet augue, vel aliquet est posuere sit amet. Curabitur semper arcu massa, et accumsan leo lobortis sed.

// Donec condimentum tellus quis dolor placerat, eget ornare enim consectetur. Curabitur molestie sapien non pharetra auctor. Quisque varius ultrices magna, vitae feugiat velit consectetur vel. Vivamus sit amet lobortis neque, in finibus nisl. Donec non urna tortor. Nulla in leo turpis. Curabitur mauris elit, auctor ac feugiat vitae, maximus eget tellus. Quisque eleifend eu turpis et lobortis. Curabitur scelerisque lectus vitae purus bibendum euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum rhoncus auctor augue vel condimentum. Pellentesque sodales libero in metus posuere mollis. Ut sed mi non sapien tincidunt sodales. Integer egestas vehicula augue, scelerisque tincidunt erat scelerisque vestibulum.

// Nullam quis nunc quis massa vehicula dignissim. Aliquam sit amet velit nec nulla porta ornare. Ut dapibus consectetur justo, ut porttitor metus interdum nec. Fusce eleifend est nec leo volutpat, in faucibus sem dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam rhoncus consectetur auctor. Nullam tincidunt, tortor sit amet auctor aliquet, elit est ornare mi, eget imperdiet enim augue id est. Vestibulum eget dui ut tellus tincidunt malesuada. Vivamus in leo viverra, tincidunt leo ac, finibus felis.

// Morbi feugiat et nibh sed hendrerit. In venenatis tortor non feugiat ornare. Aliquam erat volutpat. Fusce eget orci laoreet, lacinia libero eu, tristique justo. Pellentesque sit amet lacinia est, vitae egestas odio. Nunc posuere ante orci, sed fringilla orci malesuada eget. Maecenas ornare consequat purus quis ornare. Pellentesque ornare tellus tortor. Fusce eleifend nisi ac rhoncus luctus. Donec sed ipsum ligula. Suspendisse fringilla accumsan venenatis. Phasellus sollicitudin arcu quis arcu facilisis, vel fringilla felis tincidunt. Sed consequat eros eros, venenatis hendrerit turpis egestas sit amet. Quisque convallis vel elit et cursus.

// Quisque vehicula et massa a ullamcorper. Nam placerat lectus a condimentum finibus. Etiam vel justo ut magna accumsan ornare. Duis ultricies, orci vel luctus dignissim, nisi risus pellentesque ante, quis scelerisque augue ex sit amet neque. Cras dapibus ipsum quis felis pellentesque, varius finibus sem tincidunt. Vestibulum malesuada, mauris sed facilisis congue, elit massa imperdiet libero, id elementum arcu sapien a lorem. In at pharetra massa, ut tempus lorem. Nunc venenatis ipsum lectus, ut hendrerit felis venenatis vitae. Nunc congue semper erat in euismod. Cras congue sapien eu enim aliquam, vel vestibulum diam venenatis. Nullam rutrum sagittis tortor eget rutrum. In posuere id felis in rhoncus. Aliquam lacinia in risus quis dapibus.

// Nunc ac massa odio. In arcu est, mollis id nunc nec, commodo euismod nisi. Nullam at arcu et dui tempor eleifend vitae non leo. Nullam sit amet rutrum enim, quis pellentesque dui. In commodo sit amet nisl in blandit. Nullam id turpis non nibh venenatis placerat. Donec eget cursus magna. Praesent vitae vulputate ipsum, a accumsan est.

// Curabitur aliquam nunc nec pulvinar ornare. Mauris nec semper nunc. Duis risus sem, malesuada id euismod porta, ultricies quis mi. Aenean vestibulum leo at ipsum aliquet eleifend. Nulla auctor lorem risus, sed suscipit tellus fermentum dictum. Vestibulum rhoncus sodales libero id pretium. Integer ornare, nulla commodo sodales scelerisque, dui libero pulvinar est, a sodales eros urna vitae tellus. Nulla tempor, nisi vitae tempor convallis, ante ante ultrices quam, id sodales neque erat ut libero. Phasellus malesuada malesuada erat, ac efficitur ipsum eleifend eu. In hac habitasse platea dictumst. Praesent accumsan tristique felis.

// Nunc vehicula, tellus non egestas imperdiet, quam augue porttitor dui, sit amet ultricies augue enim sed magna. Proin vel mattis ipsum. Nam sodales eros sed dui molestie consectetur. In efficitur accumsan tortor ut commodo. In id tincidunt dolor. In at magna sit amet sapien convallis molestie nec sodales massa. Donec volutpat nunc non commodo auctor. Curabitur luctus vestibulum neque, id lobortis ante vestibulum ut. In dignissim mi ex, vitae volutpat tortor vulputate mollis. In hac habitasse platea dictumst. Praesent vulputate maximus elementum. Nulla facilisi. Integer in aliquet ante.

// Etiam vitae fringilla libero. Aenean consectetur ex id velit lobortis tincidunt. Maecenas vehicula dolor in nunc molestie, id pharetra eros lobortis. Sed id consectetur dolor. Maecenas vel cursus lacus. Nullam eleifend blandit accumsan. Vestibulum in sagittis velit. Pellentesque lobortis justo ante, quis condimentum nisl accumsan quis. Integer nec tristique arcu. Morbi sit amet ultricies risus. Praesent vitae dolor pulvinar, condimentum enim in, ultrices risus. Sed vitae cursus odio. Mauris velit massa, mattis sed leo viverra, feugiat faucibus enim. Nullam at lacus non nunc malesuada placerat vel posuere nisl. Morbi purus turpis, dapibus eu porttitor pulvinar, consectetur ut magna.

// In a auctor ex, nec molestie ipsum. Quisque vitae tortor nec odio posuere blandit. Sed auctor sapien lectus, id sollicitudin urna rhoncus id. Curabitur quis erat eu mi varius ornare. Vivamus efficitur metus a purus tristique, sed aliquam est scelerisque. Suspendisse et ante diam. Aliquam vulputate ex eget enim consequat consequat. Cras finibus mi non ex convallis, in tempus mauris porttitor. Pellentesque et consequat justo. Etiam vitae tellus at justo tincidunt tristique ac et odio. Phasellus sed facilisis nibh, eu blandit nisi. Duis et dignissim nibh. Nam eleifend sapien velit, eget consequat eros dignissim ac.

// Nam nisl enim, luctus a maximus auctor, ullamcorper id sapien. Etiam condimentum risus et neque dignissim dapibus. Vivamus euismod, urna a dictum lobortis, lacus mi pulvinar mi, ut sollicitudin elit metus luctus leo. Nunc fermentum laoreet augue. Aliquam fermentum ante elit, nec maximus diam vehicula vestibulum. Donec pharetra finibus nunc in iaculis. Suspendisse id pellentesque lectus. Duis vitae neque tempor, hendrerit ex at, auctor ex. Nulla vitae posuere dolor, eget tincidunt justo. Vestibulum dictum rutrum turpis vel condimentum. Phasellus ut ex nisi. Etiam eget arcu vulputate, consectetur arcu non, auctor orci. Praesent interdum imperdiet orci, nec efficitur eros lacinia a. Nullam dapibus nibh at felis ornare, nec feugiat diam varius.

// Aenean feugiat dui justo, a convallis nunc aliquam non. Donec eget augue in nulla efficitur posuere non ut risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque consectetur placerat ex. Nulla ut vestibulum mi. Suspendisse mollis dolor augue, at pharetra elit euismod eu. Proin at dolor elementum, rutrum orci quis, egestas ante. Vivamus sagittis velit quis lacus fringilla pretium. Praesent vel nibh et felis rutrum interdum nec vitae metus. Vestibulum vitae lacus bibendum, facilisis eros et, rhoncus nunc. Proin sit amet nibh placerat, semper turpis non, molestie nulla.

// Fusce quam justo, elementum at mi ac, eleifend vulputate purus. Curabitur hendrerit metus quis scelerisque consectetur. Ut sagittis pharetra facilisis. Aenean varius ut mauris ac ullamcorper. Cras egestas augue quam, tempor malesuada augue ultrices vel. Nullam sed sodales velit, quis vestibulum mi. Proin ac sapien elit. Nunc venenatis, felis eget finibus egestas, arcu enim molestie nisi, vel mollis velit nulla ac enim. Donec laoreet ipsum diam, at commodo eros pharetra quis. Sed tristique sollicitudin bibendum. Nam pellentesque, purus eu laoreet condimentum, ligula ligula suscipit orci, nec vestibulum orci dui id diam. Cras aliquet egestas lobortis. Fusce ut libero eget metus lacinia finibus non in nunc. Maecenas porttitor metus non aliquam tempus. Vestibulum leo magna, commodo sit amet cursus a, fermentum ac turpis. Maecenas dignissim lorem eu malesuada facilisis.`;
// let result = countChars(big, true, true);
// console.log(result);
// let sorted = result.sort((a, b) => {
//   return b.freq - a.freq;
// });

// console.log(sorted);

// let maxChars = sorted.filter((a) => {
//   return sorted[0].freq === a.freq;
// });

// console.log(maxChars);

let arr = [1, 2, 3];

function arrayToList(arr) {
  let l = {};
  if (arr.length == 0) {
    return null;
  }
  l.value = arr.shift();
  l.rest = arrayToList(arr);
  return l;
}

function listToArray(list) {
  let arr = [];
  arr.push(list.value);
  if (list.rest != null) {
    arr.push(...listToArray(list.rest));
  } else {
    return [list.value];
  }
  return arr;
}

function prepend(n, rest) {
  let list = {};
  return list;
}

function nth(list, i) {
  let subList = {};

  return subList;
}
console.log(arrayToList([1, 2, 3]));
console.log(listToArray(arrayToList([1, 2, 3])));



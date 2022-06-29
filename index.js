function myEach(collection, callback){
  let array = collection
  if(typeof array === 'object'){
    array = Object.values(collection)
  }
  for(const element of array){
    callback(element)
  }
  return collection
}

function myMap(collection, callback){
  let array = collection
  if(typeof array === 'object'){
    array = Object.values(collection)
  }
  let newArray = []
  for (const element of array){
    newArray.push(callback(element))
  }
    return newArray
}

function myReduce(collection, callback, acc){
  let array = collection
  if(typeof array === 'object'){
    array = Object.values(collection)
  }
  let i = 0
  let total = 0
  do{
    if(i > 0){
      acc = 0
    }
    if(typeof acc === 'undefined'){
      total = array[0]
    } else{
    total = total + (callback(acc, array[i]))
    }
    i++
  } while (i < array.length)

  return total
}

function myFind(collection, predicate){
  let array = collection
  if(typeof array === 'object'){
    array = Object.values(collection)
  }
  for(const element of array){
    if(predicate(element)){
      return element
    }
  }
}

function myFilter(collection, predicate){
  let array = collection
  if(typeof array === 'object'){
    array = Object.values(collection)
  }
  let newArray = []
  for(const element of array){
    if(predicate(element)){
      newArray.push(element)
    }
  }
  return newArray
}

function mySize(collection){
  let array = collection
  if(typeof array === 'object'){
    array = Object.values(collection)
  }
  return array.length
}

function myFirst(array, n){
    if(typeof n ==="undefined"){
      return array[0]
    }
    return array.slice(0,n)
}

function myLast(array, n){
  if(typeof n ==="undefined"){
    return array[array.length - 1]
  }
  return array.slice(array.length - n,array.length)
}

function myKeys(object){
  let array = []
  for(const elements in object){
    array.push(elements)
  }
  return array
}

function myValues(object){
  let array = []
  for(const elements in object){
    array.push(object[elements])
  }
  return array
}
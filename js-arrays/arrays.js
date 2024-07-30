
// task 1
function convertToArabicNumbers(val) {
    let num = 0;
    let result = "";

    for (let i = 0; i < val.length; i++) {
        if (val[i] === "@") {
            num++;
        } else if (val[i] === "~") {
            result += num;
            num = 0;
        } else if (val[i] === "~" && val[i + 1] === "~") {
            result += 0;
        }
    }

    if (num > 0) {
        result += num;
    }
    
    return Number(result);
}

function convertToQuipuNumbers(val) {
    let arr = val.split("");
    let result = "";

    for (let i = 0; i < arr.length; i++) {
        if(val.length > 1 ) {
            for (let j = 0; j < arr[i]; j++) {
                result += "@";
            }
            result += "~";
        } else {
            for (let e = 0; e < arr[i]; e++) {
                result += "@";
            }
            
        }
    }

    return result.slice(0, result.length - 1);
}

function calculate(val) {
    let arr;
    let result = "";

    if (val.includes("+")) {
        arr = val.split("+");
        result += convertToArabicNumbers(arr[0]) + convertToArabicNumbers(arr[1]);
        return convertToQuipuNumbers(result);
    } else if (val.includes("-")) {
        arr = val.split("-");
        result += convertToArabicNumbers(arr[0]) - convertToArabicNumbers(arr[1]);
        return convertToQuipuNumbers(result);
    } else if (val.includes("*")) {
        arr = val.split("*");
        result += convertToArabicNumbers(arr[0]) * convertToArabicNumbers(arr[1]);
        return convertToQuipuNumbers(result);
    } else if (val.includes("/")) {
        arr = val.split("/");
        result += convertToArabicNumbers(arr[0]) / convertToArabicNumbers(arr[1]);
        return convertToQuipuNumbers(result);
    }
    
}

console.log(calculate("@~@@+@@~~"));


// task 2
function generatePartitions(n) {
    const result = [];
    const partition = Array(n).fill(0);
    let k = 0;
    partition[k] = n;
  
    while (true) {
      result.push(partition.slice(0, k + 1));
  
      let remVal = 0;
      while (k >= 0 && partition[k] === 1) {
        remVal += partition[k];
        k--;
      }
  
      if (k < 0) return result;
  
      partition[k]--;
      remVal++;
  
      while (remVal > partition[k]) {
        partition[k + 1] = partition[k];
        remVal -= partition[k];
        k++;
      }
  
      partition[k + 1] = remVal;
      k++;
    }
  }
  
  function product(arr) {
    return arr.reduce((acc, val) => acc * val, 1);
  }
  
  function findMaxProductPartition(n) {
    const partitions = generatePartitions(n);
    let maxProduct = 0;
    let maxProductPartitions = [];
  
    partitions.forEach(partition => {
      const prod = product(partition);
      if (prod > maxProduct) {
        maxProduct = prod;
        maxProductPartitions = [partition];
      } else if (prod === maxProduct) {
        maxProductPartitions.push(partition);
      }
    });
  
    maxProductPartitions.sort((a, b) => a.length - b.length);
    return [maxProductPartitions.length === 1 ? maxProductPartitions[0] : maxProductPartitions, maxProduct];
  }
  
  console.log(findMaxProductPartition(8));


  // task 3
  function tickets(val) {
    let cash = [];
    let flag;

    for (let i = 0; i < val.length; i++) {
        if (val[i] === 25) {
            cash.push(25);
        } else if (val[i] === 50) {
            cash.push(50);
            cash.splice(cash.indexOf(25), 1)
            if (cash.includes(25)) {
                flag = true;
            } else {
                flag = false;
            }
        } else if (val[i] === 100) {
            cash.push(100);
            if (cash.includes(25) && cash.includes(50)) {
                flag = true;
            } else {
                flag = false;
            }
        }
    }

    return flag ? console.log("YES") : console.log("NO");
}

tickets([25, 25, 50, 50, 100]);

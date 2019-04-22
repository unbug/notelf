function randomArr(len) {
  const arr = [];
  while (arr.length < len) {
    const i = Math.floor(Math.random() * len);
    if (arr.indexOf(i) == -1) {
      arr.push(i);
    }
  }
  return arr;
}

const ARR = randomArr(10000);

console.log('sorting array:\n', ARR.length <= 100 ? ARR.join(', ') : 'len = ' + ARR.length);

function test(name, fn) {
  console.log('\n>>>> ' + name + ' >>>>>>>>>>>>>>>>>>>>>>\n');
  const arr = ARR.slice(0);
  const s = Date.now();
  const res = fn(arr);
  console.log('time: ' + (Date.now() - s) / 1000 + 's');
  if (arr.length <= 10) {
    console.log('\n\n' + res.join(', '));
  }
  console.log('\n<<<<<<<<<<<<<<<<<<<<<<<< ' + name + ' <<<<\n');
}
//---------------------------------------------------------------------//

/**
 * 比较相邻的元素，前者比后者大就交换
 * O(n^2)
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

test('bubbleSort', bubbleSort);
//---------------------------------------------------------------------//

/**
 * 顺序选一个元素，然后与余下的子序里找到最小的元素，再进行交换
 * O(n^2)
 */
function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

test('selectSort', selectSort);
//---------------------------------------------------------------------//

/**
 * 顺序选一个元素，然后与前面排好子序挨个比较排序
 * O(n^2)
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
  return arr;
}

test('insertionSort', insertionSort);
//---------------------------------------------------------------------//


/**
 * 将数组两两分开排序再合并到一起
 * 递归实现
 * O(nlogn)
 */
function merge(l1, l2) {
  const res = [];
  while (l1.length && l2.length) {
    if (l1[0] <= l2[0]) {
      res.push(l1.shift());
    } else {
      res.push(l2.shift());
    }
  }
  while (l1.length) {
    res.push(l1.shift());
  }
  while (l2.length) {
    res.push(l2.shift());
  }
  return res;
}

function mergeSort(arr) {
  if (!arr || arr.length < 2) { return arr; }
  const mid = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

test('mergeSort', mergeSort);
//---------------------------------------------------------------------//
